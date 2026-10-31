"use client";

import ServiceDetail from "@/components/ServiceDetail";
import { constructionService } from "@/lib/content";

const service = constructionService;

export default function Page() {
  return <ServiceDetail service={service} />;
}
