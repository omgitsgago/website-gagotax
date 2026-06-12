// Static file server for the GagoTax website.
//
// The site is a Next.js *static export* — `next build` writes plain HTML/CSS/JS
// into the ./out folder. This file is what Hostinger runs as the Node.js startup
// file; it does nothing but serve those finished files (no Next.js server, which
// is what was crash-looping and returning 503). Pure Node built-ins, no deps.

const { createServer } = require("http");
const { createReadStream, existsSync, statSync } = require("fs");
const { join, normalize, extname } = require("path");

const port = parseInt(process.env.PORT || "3000", 10);
const hostname = process.env.HOSTNAME || "0.0.0.0";
const ROOT = join(__dirname, "out");

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".ico": "image/x-icon",
  ".webp": "image/webp",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
  ".map": "application/json; charset=utf-8",
};

// Defense-in-depth headers (the Node app is the request handler, so these must
// be set here — an .htaccess only applies when the web server serves files).
const SECURITY_HEADERS = {
  "Strict-Transport-Security": "max-age=31536000; includeSubDomains",
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "DENY",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "Permissions-Policy":
    "geolocation=(), microphone=(), camera=(), interest-cohort=()",
  "Content-Security-Policy":
    "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'; connect-src 'self' https://api.web3forms.com; frame-ancestors 'none'; base-uri 'self'; form-action 'self' https://api.web3forms.com; upgrade-insecure-requests",
};

// Resolve a request path to a real file inside ROOT, supporting clean URLs
// (/taxplans -> out/taxplans.html) and blocking path traversal.
function resolveFile(rawUrl) {
  let pathname;
  try {
    pathname = decodeURIComponent(rawUrl.split("?")[0]);
  } catch {
    return null;
  }

  const safe = normalize(pathname).replace(/^(\.\.[/\\])+/, "");
  const full = join(ROOT, safe);
  if (full !== ROOT && !full.startsWith(ROOT + require("path").sep)) return null;

  const candidates =
    safe === "/" || safe === "" || safe.endsWith("/")
      ? [join(full, "index.html")]
      : [full, full + ".html", join(full, "index.html")];

  for (const c of candidates) {
    if (existsSync(c) && statSync(c).isFile()) return c;
  }
  return null;
}

const server = createServer((req, res) => {
  // Redirect to HTTPS when Hostinger's proxy reports the original scheme.
  const proto = req.headers["x-forwarded-proto"];
  if (proto && proto !== "https") {
    res.writeHead(301, {
      Location: `https://${req.headers.host}${req.url}`,
    });
    return res.end();
  }

  const file = resolveFile(req.url || "/");
  const headers = { ...SECURITY_HEADERS };

  if (!file) {
    const notFound = join(ROOT, "404.html");
    headers["Content-Type"] = "text/html; charset=utf-8";
    res.writeHead(404, headers);
    return existsSync(notFound)
      ? createReadStream(notFound).pipe(res)
      : res.end("404 Not Found");
  }

  headers["Content-Type"] =
    MIME[extname(file).toLowerCase()] || "application/octet-stream";
  // Hashed Next.js assets never change → cache hard. HTML → always revalidate.
  headers["Cache-Control"] = file.includes("_next")
    ? "public, max-age=31536000, immutable"
    : "public, max-age=0, must-revalidate";

  res.writeHead(200, headers);
  createReadStream(file).pipe(res);
});

server.listen(port, hostname, () => {
  console.log(`> GagoTax static server ready on http://${hostname}:${port}`);
});
