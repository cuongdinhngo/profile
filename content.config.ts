import { defineContentConfig, defineCollection, z } from '@nuxt/content'

const timelineSchema = z.object({
  year: z.string(),
  title: z.string(),
  subtitle: z.string(),
  description: z.string(),
  skills: z.array(z.string()).optional()
})

export default defineContentConfig({
  collections: {
    // Main content pages
    content: defineCollection({
      type: 'page',
      source: '*.md'
    }),
    // Social links collection
    social: defineCollection({
      type: 'data',
      source: 'social/*.json',
      schema: z.object({
        icon: z.string(),
        url: z.string(),
        color: z.string().default('black')
      })
    }),
    // Timeline items collection
    education_timeline: defineCollection({
      type: 'data',
      source: 'timeline/education.json',
      schema: timelineSchema
    }),
    experience_timeline: defineCollection({
      type: 'data',
      source: 'timeline/experience.json',
      schema: timelineSchema
    }),
    //Profile data collection
    profile: defineCollection({
      type: 'data',
      source: 'profile/me.json',
      schema: z.object({
        name: z.string(),
        title: z.string(),
        avatarSize: z.string().default('100'),
        avatarSrc: z.string()
      })
    }),
    // Projects collection
    projects: defineCollection({
      type: 'data',
      source: 'projects/*.json',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        image: z.string(),
        scaleImage: z.boolean().default(false),
        tech: z.array(z.string()),
        links: z.object({
          source: z.string().optional(),
          demo: z.string().optional()
        })
      })
    })
  }
})
