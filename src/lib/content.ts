import { getCollection, type CollectionEntry } from "astro:content";
import { readdir } from "node:fs/promises";
import { join } from "node:path";
import type { SiteLang } from "./i18n";

export const APP_SLUG_ORDER = [
  "way-buddy",
  "assist",
  "magnify",
  "hear-clean",
  "zoom"
] as const;

type BaseCollectionName = "apps" | "gpts" | "projects" | "publications" | "team" | "site";
type LocalizedCollectionName =
  | "apps"
  | "apps_en"
  | "apps_es"
  | "gpts"
  | "gpts_en"
  | "gpts_es"
  | "projects"
  | "projects_en"
  | "projects_es"
  | "publications"
  | "publications_en"
  | "publications_es"
  | "team"
  | "team_en"
  | "team_es"
  | "site"
  | "site_en"
  | "site_es";

type LocalizedEntry = CollectionEntry<LocalizedCollectionName>;

const localizedCollectionMap: Record<BaseCollectionName, Record<SiteLang, LocalizedCollectionName>> = {
  apps: { de: "apps", en: "apps_en", es: "apps_es" },
  gpts: { de: "gpts", en: "gpts_en", es: "gpts_es" },
  projects: { de: "projects", en: "projects_en", es: "projects_es" },
  publications: { de: "publications", en: "publications_en", es: "publications_es" },
  team: { de: "team", en: "team_en", es: "team_es" },
  site: { de: "site", en: "site_en", es: "site_es" }
};

const contentDirectoryMap: Record<BaseCollectionName, Record<SiteLang, string>> = {
  apps: { de: "content/de/apps", en: "content/en/apps", es: "content/es/apps" },
  gpts: { de: "content/de/gpts", en: "content/en/gpts", es: "content/es/gpts" },
  projects: { de: "content/de/projects", en: "content/en/projects", es: "content/es/projects" },
  publications: { de: "content/de/publications", en: "content/en/publications", es: "content/es/publications" },
  team: { de: "content/de/team", en: "content/en/team", es: "content/es/team" },
  site: { de: "content/de/site", en: "content/en/site", es: "content/es/site" }
};

const orderMap = new Map<string, number>(APP_SLUG_ORDER.map((slug, index) => [slug, index]));
const platformFilters = ["all", "android", "windows"] as const;

export type PlatformFilter = (typeof platformFilters)[number];
export const PLATFORM_FILTERS: readonly PlatformFilter[] = platformFilters;

function entryKey(entry: LocalizedEntry): string {
  const maybeSlug = (entry.data as { slug?: string }).slug;
  return typeof maybeSlug === "string" && maybeSlug.length > 0 ? maybeSlug : entry.id;
}

async function safeGetCollection(collectionName: LocalizedCollectionName): Promise<LocalizedEntry[]> {
  try {
    return await getCollection(collectionName);
  } catch (error) {
    const message = error instanceof Error ? error.message : "";

    if (message.includes("does not exist or is empty")) {
      return [];
    }

    throw error;
  }
}

async function hasMarkdownEntries(collectionName: BaseCollectionName, lang: SiteLang): Promise<boolean> {
  const targetDir = join(process.cwd(), contentDirectoryMap[collectionName][lang]);

  try {
    const entries = await readdir(targetDir, { withFileTypes: true });
    return entries.some((entry) => entry.isFile() && entry.name.endsWith(".md"));
  } catch {
    return false;
  }
}

export async function getCollectionByLang(lang: SiteLang, collectionName: BaseCollectionName): Promise<LocalizedEntry[]> {
  const deCollection = localizedCollectionMap[collectionName].de;
  const deEntries = await safeGetCollection(deCollection);

  if (lang === "de") {
    return deEntries;
  }

  const localizedHasEntries = await hasMarkdownEntries(collectionName, lang);

  if (!localizedHasEntries) {
    return deEntries;
  }

  const localizedCollection = localizedCollectionMap[collectionName][lang];
  const localizedEntries = await safeGetCollection(localizedCollection);

  if (localizedEntries.length === 0) {
    return deEntries;
  }

  const merged = new Map<string, LocalizedEntry>();

  for (const entry of localizedEntries) {
    merged.set(entryKey(entry), entry);
  }

  for (const entry of deEntries) {
    const key = entryKey(entry);

    if (!merged.has(key)) {
      merged.set(key, entry);
    }
  }

  return Array.from(merged.values());
}

export async function getApps(lang: SiteLang = "de"): Promise<CollectionEntry<"apps">[]> {
  const apps = (await getCollectionByLang(lang, "apps")) as CollectionEntry<"apps">[];

  return apps.sort((a, b) => {
    const rankA = orderMap.get(a.data.slug) ?? Number.MAX_SAFE_INTEGER;
    const rankB = orderMap.get(b.data.slug) ?? Number.MAX_SAFE_INTEGER;

    if (rankA !== rankB) {
      return rankA - rankB;
    }

    return a.data.order - b.data.order;
  });
}

export async function getGpts(lang: SiteLang = "de"): Promise<CollectionEntry<"gpts">[]> {
  const gpts = (await getCollectionByLang(lang, "gpts")) as CollectionEntry<"gpts">[];

  return gpts.sort((a, b) => {
    if (a.data.order !== b.data.order) {
      return a.data.order - b.data.order;
    }

    return a.data.name.localeCompare(b.data.name, "de");
  });
}

export async function getProjects(lang: SiteLang = "de"): Promise<CollectionEntry<"projects">[]> {
  const projects = (await getCollectionByLang(lang, "projects")) as CollectionEntry<"projects">[];

  return projects.sort((a, b) => {
    if (a.data.order !== b.data.order) {
      return a.data.order - b.data.order;
    }

    return a.data.title.localeCompare(b.data.title, "de");
  });
}

export async function getPublications(lang: SiteLang = "de"): Promise<CollectionEntry<"publications">[]> {
  const publications = (await getCollectionByLang(lang, "publications")) as CollectionEntry<"publications">[];

  return publications.sort((a, b) => {
    if (a.data.year !== b.data.year) {
      return b.data.year - a.data.year;
    }

    return a.data.title.localeCompare(b.data.title, "de");
  });
}

export async function getTeam(lang: SiteLang = "de"): Promise<CollectionEntry<"team">[]> {
  const team = (await getCollectionByLang(lang, "team")) as CollectionEntry<"team">[];

  return team.sort((a, b) => {
    if (a.data.order !== b.data.order) {
      return a.data.order - b.data.order;
    }

    return a.data.name.localeCompare(b.data.name, "de");
  });
}

export function isPlatformFilter(value: string): value is PlatformFilter {
  return PLATFORM_FILTERS.includes(value as PlatformFilter);
}

export function filterAppsByPlatform(
  apps: CollectionEntry<"apps">[],
  platform: PlatformFilter
): CollectionEntry<"apps">[] {
  if (platform === "all") {
    return apps;
  }

  return apps.filter((app) => app.data.platform.toLowerCase() === platform);
}

export async function getSiteBySlug(slug: string, lang: SiteLang = "de"): Promise<CollectionEntry<"site"> | undefined> {
  const entries = (await getCollectionByLang(lang, "site")) as CollectionEntry<"site">[];
  return entries.find((entry) => entry.id === slug);
}
