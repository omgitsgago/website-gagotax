"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function BookkeepingRedirect() {
  const router = useRouter();
  useEffect(() => { router.replace("/bookkeeping"); }, [router]);
  return null;
}
