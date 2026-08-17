"use client";

import ServiceDetail from "@/components/ServiceDetail";
import { serviceLines } from "@/lib/content";

const service = serviceLines.find((s) => s.slug === "professional-english")!;

export default function Page() {
  return <ServiceDetail service={service} />;
}
