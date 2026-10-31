import type { Metadata } from "next";
import { getServiceMetadata } from "@/lib/seo";

export const metadata: Metadata = getServiceMetadata("conseil");

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
