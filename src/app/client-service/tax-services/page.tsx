"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function TaxServicesRedirect() {
  const router = useRouter();
  useEffect(() => { router.replace("/taxplans"); }, [router]);
  return null;
}
