import fs from "fs";
import path from "path";

const outDir = "./out";
const htmlPath = path.join(outDir, "index.html");

if (!fs.existsSync(htmlPath)) {
  console.error("❌ Run `npm run build` first to generate the `out` folder.");
  process.exit(1);
}

let html = fs.readFileSync(htmlPath, "utf8");

// Inline all CSS files
html = html.replace(/<link[^>]+href="([^"]+\.css)"[^>]*>/g, (_, href) => {
  const cssFile = path.join(outDir, href);
  if (!fs.existsSync(cssFile)) return "";
  const css = fs.readFileSync(cssFile, "utf8");
  return `<style>${css}</style>`;
});

// Inline all JS files
html = html.replace(/<script[^>]+src="([^"]+\.js)"[^>]*><\/script>/g, (_, src) => {
  const jsFile = path.join(outDir, src);
  if (!fs.existsSync(jsFile)) return "";
  const js = fs.readFileSync(jsFile, "utf8");
  return `<script>${js}</script>`;
});

// Inline local images as Base64
html = html.replace(/<img[^>]+src="([^":]+)"[^>]*>/g, (match, src) => {
  const imgPath = path.join(outDir, src);
  if (!fs.existsSync(imgPath)) return match;

  const ext = path.extname(imgPath).slice(1);
  const mime = ext === "svg" ? "image/svg+xml" : `image/${ext}`;
  const data = fs.readFileSync(imgPath).toString("base64");
  return match.replace(src, `data:${mime};base64,${data}`);
});

// Remove crossorigin/integrity if present
html = html.replace(/\s+(integrity|crossorigin)="[^"]*"/g, "");

// Write final single HTML file
const output = path.join(outDir, "index.single.html");
fs.writeFileSync(output, html, "utf8");

console.log(`✅ Created ${output}`);
console.log("👉 You can now send this file and open it directly (even offline).");
