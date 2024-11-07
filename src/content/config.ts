import { z, defineCollection} from 'astro:content';
import { boolean, object } from 'astro:schema';

const blogCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        date: z.coerce.date(),
        draft: z.boolean(),
    }),
});

export const collections = {
    'blog': blogCollection,
};