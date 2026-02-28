import type { APIRoute } from "astro";
import { getApps, getGpts, getProjects, getPublications } from "../lib/content";
import { withPrefix, type SiteLang } from "../lib/i18n";

const BASE_URL = "https://owli-ai.com";

const staticBasePaths = [
  "/",
  "/apps",
  "/gpts",
  "/research",
  "/research/projects",
  "/research/publications",
  "/apps/platform/android",
  "/apps/platform/windows",
  "/team",
  "/partners",
  "/support",
  "/privacy",
  "/imprint",
  "/accessibility"
];
const languages: readonly SiteLang[] = ["de", "en", "es"] as const;

const localizePath = (path: string): string[] =>
  languages.map((lang) => {
    if (lang === "de") {
      return path;
    }

    return withPrefix(path, lang === "en" ? "/en" : "/es");
  });

export const GET: APIRoute = async () => {
  const apps = await getApps();
  const gpts = await getGpts();
  const projects = await getProjects();
  const publications = await getPublications();
  const appPaths = apps.flatMap((app) => localizePath(`/apps/${app.data.slug}`));
  const gptPaths = gpts.flatMap((gpt) => localizePath(`/gpts/${gpt.data.slug}`));
  const projectPaths = projects.flatMap((project) => localizePath(`/research/projects/${project.data.slug}`));
  const publicationPaths = publications.flatMap((publication) => localizePath(`/research/publications/${publication.data.slug}`));
  const staticPaths = staticBasePaths.flatMap((path) => localizePath(path));
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
