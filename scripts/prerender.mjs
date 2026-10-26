import { createElement } from "react";
import { renderToString } from "react-dom/server";
import { createServer } from "vite";
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(scriptDirectory, "..");
const outputDirectory = path.join(projectRoot, "dist", "public");
const canonicalOrigin = "https://dpgsa.vercel.app";
const socialImage = `${canonicalOrigin}/images/dpgsa-auditorium-meeting.jpg`;
const startMarker = "<!-- route-app-start -->";
const endMarker = "<!-- route-app-end -->";

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function escapeRegex(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function upsertMeta(html, attribute, key, value) {
  const pattern = new RegExp(
    `<meta\\s+${attribute}=["']${escapeRegex(key)}["'][^>]*>`,
    "i"
  );
  const tag = `<meta ${attribute}="${escapeHtml(key)}" content="${escapeHtml(value)}" />`;
  return pattern.test(html)
    ? html.replace(pattern, tag)
    : html.replace("</head>", `  ${tag}\n  </head>`);
}

function upsertCanonical(html, href) {
  const pattern = /<link\s+rel=["']canonical["'][^>]*>/i;
  const tag = `<link rel="canonical" href="${escapeHtml(href)}" />`;
  return pattern.test(html)
    ? html.replace(pattern, tag)
    : html.replace("</head>", `  ${tag}\n  </head>`);
}

function routeDocument(template, markup, route) {
  let html = template;
  const start = html.indexOf(startMarker);
  const end = html.indexOf(endMarker, start + startMarker.length);
  if (start < 0 || end < 0) {
    throw new Error(
      "Static HTML route markers are missing from client/index.html"
    );
  }
  html = `${html.slice(0, start + startMarker.length)}${markup}${html.slice(end)}`;

  const canonicalUrl = `${canonicalOrigin}${route.path === "/" ? "/" : route.path}`;
  html = html.replace(
    /<title>[^<]*<\/title>/i,
    `<title>${escapeHtml(route.title)}</title>`
  );
  html = upsertMeta(html, "name", "description", route.description);
  html = upsertMeta(html, "property", "og:type", "website");
  html = upsertMeta(html, "property", "og:site_name", "DPGSA UoN");
  html = upsertMeta(html, "property", "og:title", route.title);
  html = upsertMeta(html, "property", "og:description", route.description);
  html = upsertMeta(html, "property", "og:url", canonicalUrl);
  html = upsertMeta(html, "property", "og:image", socialImage);
  html = upsertMeta(html, "name", "twitter:card", "summary_large_image");
  html = upsertMeta(html, "name", "twitter:title", route.title);
  html = upsertMeta(html, "name", "twitter:description", route.description);
  html = upsertMeta(html, "name", "twitter:image", socialImage);
  html = upsertCanonical(html, canonicalUrl);
  return html;
}

const vite = await createServer({
  configFile: path.join(projectRoot, "vite.config.ts"),
  server: { middlewareMode: true },
  appType: "custom",
  logLevel: "warn",
});

try {
  const [{ siteRoutes }, { default: SiteLayout }] = await Promise.all([
    vite.ssrLoadModule("/src/routes.tsx"),
    vite.ssrLoadModule("/src/components/site/SiteLayout.tsx"),
  ]);
  const template = await readFile(
    path.join(outputDirectory, "index.html"),
    "utf8"
  );

  for (const route of siteRoutes) {
    const page = createElement(route.component);
    const layout = createElement(SiteLayout, { currentPath: route.path }, page);
    const markup = renderToString(layout);
    const html = routeDocument(template, markup, route);
    const fileName =
      route.path === "/" ? "index.html" : `${route.path.slice(1)}.html`;
    await writeFile(path.join(outputDirectory, fileName), html);
    console.log(`Prerendered ${route.path} to ${fileName}`);
  }
} finally {
  await vite.close();
}
