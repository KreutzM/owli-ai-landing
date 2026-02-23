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

const apps = defineCollection({
  loader: glob({ pattern: "*.md", base: "./content/apps" }),
  schema: z.object({
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
      })
  })
});

const site = defineCollection({
  loader: glob({ pattern: "*.md", base: "./content/site" }),
  schema: z.object({})
});

export const collections = {
  apps,
  site
};
