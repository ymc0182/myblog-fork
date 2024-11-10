import { z, defineCollection} from 'astro:content';

const blogCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        date: z.coerce.date(),
        draft: z.boolean().default(false),
        img: z.array(z.object({
            url: z.string(),
            alt: z.string(),
        })).optional(),
    }),
});

export const collections = {
    'blog': blogCollection,
};