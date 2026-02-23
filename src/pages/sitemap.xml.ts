import type { APIRoute } from "astro";
import { getApps, getGpts, getProjects, getPublications } from "../lib/content";

const BASE_URL = "https://owli-ai.com";

const staticPaths = [
  "/",
  "/apps",
  "/gpts",
  "/research",
  "/research/projects",
  "/research/publications",
  "/apps/platform/android",
  "/apps/platform/windows",
  "/support",
  "/privacy",
  "/imprint",
  "/accessibility"
];

export const GET: APIRoute = async () => {
  const apps = await getApps();
  const gpts = await getGpts();
  const projects = await getProjects();
  const publications = await getPublications();
  const appPaths = apps.map((app) => `/apps/${app.data.slug}`);
  const gptPaths = gpts.map((gpt) => `/gpts/${gpt.data.slug}`);
  const projectPaths = projects.map((project) => `/research/projects/${project.data.slug}`);
  const publicationPaths = publications.map((publication) => `/research/publications/${publication.data.slug}`);
  const uniquePaths = Array.from(new Set([...staticPaths, ...appPaths, ...gptPaths, ...projectPaths, ...publicationPaths]));
  const lastmod = new Date().toISOString();

  const urls = uniquePaths
    .map((path) => {
      const loc = new URL(path, BASE_URL).toString();

      return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8"
    }
  });
};
