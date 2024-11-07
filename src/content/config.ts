import { z, defineCollection} from 'astro:content';
import { object } from 'astro:schema';

const blogCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        date: z.coerce.date(),
        
    }),
});

export const collections = {
    'blog': blogCollection,
};