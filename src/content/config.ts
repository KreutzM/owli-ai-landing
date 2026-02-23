import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const appLink = z.object({
  label: z.string(),
  href: z.string()
});

const appImage = z.object({
  src: z.string(),
  alt: z.string().default(""),
  width: z.number().int().positive().optional(),
  height: z.number().int().positive().optional()
});

const researchVisual = z.object({
  src: z.string(),
  webp: z.string().optional(),
  alt: z.string(),
  caption: z.string().optional()
});

const translationMetaFields = {
  translationStatus: z.enum(["machine", "reviewed"]).optional(),
  sourceLang: z.literal("de").optional(),
  sourceVersionHash: z.string().optional()
};

const appSchema = z.object({
  slug: z.string(),
  order: z.number().int().positive(),
  name: z.string(),
  platform: z.enum(["Android", "Windows"]).default("Android"),
  status: z.string().default("Prototype"),
  tagline: z.string().default("Kurzbeschreibung folgt."),
  valueProp: z.string().default("Mehr Details folgen."),
  audience: z.string().default("Noch offen"),
  cloud: z.enum(["yes", "no", "optional"]).default("optional"),
  features: z
    .array(
      z.object({
        title: z.string(),
        description: z.string().default("")
      })
    )
    .default([]),
  privacy: z
    .object({
      mode: z.enum(["local", "cloud", "hybrid"]).default("hybrid"),
      summary: z.string().default("Datenschutzdetails folgen."),
      note: z.string().default("")
    })
    .default({
      mode: "hybrid",
      summary: "Datenschutzdetails folgen.",
      note: ""
    }),
  requirements: z.array(z.string()).default([]),
  icon: appImage.optional(),
  logo: appImage.optional(),
  featureGraphic: appImage.optional(),
  links: z
    .object({
      primary: appLink.optional(),
      secondary: appLink.optional()
    })
    .default({}),
  media: z
    .array(
      z.object({
        src: z.string(),
        avif: z.string().optional(),
        webp: z.string().optional(),
        alt: z.string().default(""),
        caption: z.string().optional(),
        width: z.number().int().positive().optional(),
        height: z.number().int().positive().optional()
      })
    )
    .default([]),
  seo: z
    .object({
      title: z.string().optional(),
      description: z.string(),
      keywords: z.union([z.array(z.string()), z.string()]).optional(),
      ogImage: z.string().optional()
    })
    .default({
      description: "Produktdetails folgen."
    }),
  ...translationMetaFields
});

const gptSchema = z.object({
  slug: z.string(),
  order: z.number().int().positive(),
  name: z.string(),
  link: z.string().url(),
  shortDescription: z.string(),
  audienceBadges: z.array(z.string()).default([]),
  examplePrompts: z.array(z.string()).default([]),
  typicalQuestions: z.array(z.string()).default([]),
  limits: z.string(),
  icon: appImage.optional(),
  seo: z
    .object({
      title: z.string().optional(),
      description: z.string(),
      keywords: z.union([z.array(z.string()), z.string()]).optional(),
      ogImage: z.string().optional()
    })
    .default({
      description: "Details zu diesem Custom GPT folgen."
    }),
  ...translationMetaFields
});

const projectSchema = z.object({
  slug: z.string(),
  order: z.number().int().positive().default(1),
  title: z.string(),
  status: z.string().default("In Vorbereitung"),
  timeframe: z.string().optional(),
  shortDescription: z.string().default("Projektbeschreibung folgt."),
  summary: z.string().default("Projektbeschreibung folgt."),
  keywords: z.array(z.string()).default([]),
  relatedPublicationSlug: z.string().optional(),
  visuals: z.array(researchVisual).default([]),
  links: z
    .object({
      primary: appLink.optional(),
      secondary: appLink.optional()
    })
    .default({}),
  seo: z
    .object({
      title: z.string().optional(),
      description: z.string(),
      keywords: z.union([z.array(z.string()), z.string()]).optional(),
      ogImage: z.string().optional()
    })
    .default({
      description: "Projektinformationen folgen."
    }),
  ...translationMetaFields
});

const publicationSchema = z.object({
  slug: z.string(),
  title: z.string(),
  type: z.string().default("Paper"),
  authors: z.array(z.string()).min(1),
  affiliation: z.string().optional(),
  venue: z.string(),
  year: z.number().int().positive(),
  keywords: z.array(z.string()).default([]),
  abstract: z.string(),
  pdf: z.string(),
  relatedProjectSlug: z.string().optional(),
  heroImage: researchVisual.optional(),
  figures: z.array(researchVisual).default([]),
  bibtex: z.string().optional(),
  seo: z
    .object({
      title: z.string().optional(),
      description: z.string(),
      keywords: z.union([z.array(z.string()), z.string()]).optional(),
      ogImage: z.string().optional()
    })
    .default({
      description: "Publikationsdetails folgen."
    }),
  ...translationMetaFields
});

const teamSchema = z.object({
  slug: z.string(),
  order: z.number().int().positive(),
  name: z.string(),
  role: z.string(),
  organization: z.string().optional(),
  tags: z.array(z.string()).default([]),
  shortBio: z.string(),
  links: z
    .object({
      thm: z.string().url().optional(),
      github: z.string().url().optional(),
      scholar: z.string().url().optional(),
      orcid: z.string().url().optional(),
      website: z.string().url().optional()
    })
    .default({}),
  image: z.string().optional(),
  ...translationMetaFields
});

const siteSchema = z.object({
  ...translationMetaFields
});

const apps = defineCollection({
  loader: glob({ pattern: "*.md", base: "./content/de/apps" }),
  schema: appSchema
});
const apps_en = defineCollection({
  loader: glob({ pattern: "*.md", base: "./content/en/apps" }),
  schema: appSchema
});
const apps_es = defineCollection({
  loader: glob({ pattern: "*.md", base: "./content/es/apps" }),
  schema: appSchema
});

const gpts = defineCollection({
  loader: glob({ pattern: "*.md", base: "./content/de/gpts" }),
  schema: gptSchema
});
const gpts_en = defineCollection({
  loader: glob({ pattern: "*.md", base: "./content/en/gpts" }),
  schema: gptSchema
});
const gpts_es = defineCollection({
  loader: glob({ pattern: "*.md", base: "./content/es/gpts" }),
  schema: gptSchema
});

const projects = defineCollection({
  loader: glob({ pattern: "*.md", base: "./content/de/projects" }),
  schema: projectSchema
});
const projects_en = defineCollection({
  loader: glob({ pattern: "*.md", base: "./content/en/projects" }),
  schema: projectSchema
});
const projects_es = defineCollection({
  loader: glob({ pattern: "*.md", base: "./content/es/projects" }),
  schema: projectSchema
});

const publications = defineCollection({
  loader: glob({ pattern: "*.md", base: "./content/de/publications" }),
  schema: publicationSchema
});
const publications_en = defineCollection({
  loader: glob({ pattern: "*.md", base: "./content/en/publications" }),
  schema: publicationSchema
});
const publications_es = defineCollection({
  loader: glob({ pattern: "*.md", base: "./content/es/publications" }),
  schema: publicationSchema
});

const team = defineCollection({
  loader: glob({ pattern: "*.md", base: "./content/de/team" }),
  schema: teamSchema
});
const team_en = defineCollection({
  loader: glob({ pattern: "*.md", base: "./content/en/team" }),
  schema: teamSchema
});
const team_es = defineCollection({
  loader: glob({ pattern: "*.md", base: "./content/es/team" }),
  schema: teamSchema
});

const site = defineCollection({
  loader: glob({ pattern: "*.md", base: "./content/de/site" }),
  schema: siteSchema
});
const site_en = defineCollection({
  loader: glob({ pattern: "*.md", base: "./content/en/site" }),
  schema: siteSchema
});
const site_es = defineCollection({
  loader: glob({ pattern: "*.md", base: "./content/es/site" }),
  schema: siteSchema
});

export const collections = {
  apps,
  apps_en,
  apps_es,
  gpts,
  gpts_en,
  gpts_es,
  projects,
  projects_en,
  projects_es,
  publications,
  publications_en,
  publications_es,
  team,
  team_en,
  team_es,
  site,
  site_en,
  site_es
};
