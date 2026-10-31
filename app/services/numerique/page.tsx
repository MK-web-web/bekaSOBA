"use client";

import ServiceDetail from "@/components/ServiceDetail";
import { serviceLines } from "@/lib/content";

const service = serviceLines.find((item) => item.slug === "numerique")!;

export default function Page() {
  return <ServiceDetail service={service} />;
}
