import { readFileSync, writeFileSync } from "node:fs";
import { Resvg } from "@resvg/resvg-js";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const svg = readFileSync(join(root, "public/bekasoba-logo.svg"), "utf8");

const resvg = new Resvg(svg, {
  fitTo: { mode: "width", value: 880 },
  background: "transparent",
});

const png = resvg.render().asPng();
writeFileSync(join(root, "public/bekasoba-logo.png"), png);
console.log("Wrote public/bekasoba-logo.png");
