export type SiteLang = "de" | "en" | "es";
export type LangPrefix = "" | "/en" | "/es";
export type AlternateLang = SiteLang | "x-default";

export interface AlternateLink {
  lang: AlternateLang;
  href: string;
}

export const SITE_LANGS: readonly SiteLang[] = ["de", "en", "es"] as const;
export const LANG_PREFIX: Record<SiteLang, LangPrefix> = {
  de: "",
  en: "/en",
  es: "/es"
};

const TRANSLATABLE_PATH_PATTERNS: readonly RegExp[] = [
  /^\/$/,
  /^\/apps$/,
  /^\/apps\/[^/]+$/,
  /^\/apps\/platform\/[^/]+$/,
  /^\/gpts$/,
  /^\/gpts\/[^/]+$/,
  /^\/research$/,
  /^\/research\/projects$/,
  /^\/research\/projects\/[^/]+$/,
  /^\/research\/publications$/,
  /^\/research\/publications\/[^/]+$/,
  /^\/team$/,
  /^\/partners$/,
  /^\/support$/,
  /^\/privacy$/,
  /^\/imprint$/,
  /^\/accessibility$/
] as const;

export function normalizePathname(pathname: string): string {
  if (!pathname) {
    return "/";
  }

  const withLeadingSlash = pathname.startsWith("/") ? pathname : `/${pathname}`;
  const withoutTrailingSlash = withLeadingSlash.replace(/\/+$/u, "");
  return withoutTrailingSlash === "" ? "/" : withoutTrailingSlash;
}

export function stripLanguagePrefix(pathname: string): { lang: SiteLang; basePath: string } {
  const normalized = normalizePathname(pathname);

  if (normalized === "/en" || normalized.startsWith("/en/")) {
    const rest = normalized.slice(3);
    return { lang: "en", basePath: rest === "" ? "/" : rest };
  }

  if (normalized === "/es" || normalized.startsWith("/es/")) {
    const rest = normalized.slice(3);
    return { lang: "es", basePath: rest === "" ? "/" : rest };
  }

  return { lang: "de", basePath: normalized };
}

export function withPrefix(pathname: string, pathPrefix: LangPrefix = ""): string {
  const normalizedPath = normalizePathname(pathname);

  if (pathPrefix === "") {
    return normalizedPath;
  }

  return normalizedPath === "/" ? pathPrefix : `${pathPrefix}${normalizedPath}`;
}

export function localizeHref(href: string, pathPrefix: LangPrefix = ""): string {
  if (!href.startsWith("/")) {
    return href;
  }

  return withPrefix(href, pathPrefix);
}

export function isTranslatablePath(pathname: string): boolean {
  const normalized = normalizePathname(pathname);
  return TRANSLATABLE_PATH_PATTERNS.some((pattern) => pattern.test(normalized));
}

export function toLanguagePath(pathname: string, targetLang: SiteLang): string {
  const normalized = normalizePathname(pathname);

  if (!isTranslatablePath(normalized)) {
    return withPrefix("/", LANG_PREFIX[targetLang]);
  }

  return withPrefix(normalized, LANG_PREFIX[targetLang]);
}

export function resolveLanguagePath(pathname: string, targetLang: SiteLang): string {
  const { basePath } = stripLanguagePrefix(pathname);
  return toLanguagePath(basePath, targetLang);
}

export function buildAlternates(pathname: string): AlternateLink[] {
  const { basePath } = stripLanguagePrefix(pathname);

  if (!isTranslatablePath(basePath)) {
    return [];
  }

  const localizedAlternates = SITE_LANGS.map((lang) => ({
    lang,
    href: toLanguagePath(basePath, lang)
  }));

  return [
    ...localizedAlternates,
    {
      lang: "x-default",
      href: toLanguagePath(basePath, "de")
    }
  ];
}
