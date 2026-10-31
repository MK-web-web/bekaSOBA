"use client";

import ServiceDetail from "@/components/ServiceDetail";
import { serviceLines } from "@/lib/content";

const service = serviceLines.find((item) => item.slug === "conseil")!;

export default function Page() {
  return <ServiceDetail service={service} />;
}
