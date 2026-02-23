import { getCollection, type CollectionEntry } from "astro:content";

export const APP_SLUG_ORDER = [
  "way-buddy",
  "assist",
  "magnify",
  "hear-clean",
  "zoom"
] as const;

const orderMap = new Map<string, number>(APP_SLUG_ORDER.map((slug, index) => [slug, index]));
const platformFilters = ["all", "android", "windows"] as const;

export type PlatformFilter = (typeof platformFilters)[number];
export const PLATFORM_FILTERS: readonly PlatformFilter[] = platformFilters;

export async function getApps(): Promise<CollectionEntry<"apps">[]> {
  const apps = await getCollection("apps");

  return apps.sort((a, b) => {
    const rankA = orderMap.get(a.data.slug) ?? Number.MAX_SAFE_INTEGER;
    const rankB = orderMap.get(b.data.slug) ?? Number.MAX_SAFE_INTEGER;

    if (rankA !== rankB) {
      return rankA - rankB;
    }

    return a.data.order - b.data.order;
  });
}

export async function getGpts(): Promise<CollectionEntry<"gpts">[]> {
  const gpts = await getCollection("gpts");

  return gpts.sort((a, b) => {
    if (a.data.order !== b.data.order) {
      return a.data.order - b.data.order;
    }

    return a.data.name.localeCompare(b.data.name, "de");
  });
}

export async function getProjects(): Promise<CollectionEntry<"projects">[]> {
  const projects = await getCollection("projects");

  return projects.sort((a, b) => {
    if (a.data.order !== b.data.order) {
      return a.data.order - b.data.order;
    }

    return a.data.title.localeCompare(b.data.title, "de");
  });
}

export async function getPublications(): Promise<CollectionEntry<"publications">[]> {
  const publications = await getCollection("publications");

  return publications.sort((a, b) => {
    if (a.data.year !== b.data.year) {
      return b.data.year - a.data.year;
    }

    return a.data.title.localeCompare(b.data.title, "de");
  });
}

export async function getTeam(): Promise<CollectionEntry<"team">[]> {
  const team = await getCollection("team");

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

export async function getSiteBySlug(slug: string): Promise<CollectionEntry<"site"> | undefined> {
  const entries = await getCollection("site");
  return entries.find((entry) => entry.id === slug);
}
