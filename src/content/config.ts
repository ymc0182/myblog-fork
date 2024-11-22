import { z, defineCollection} from 'astro:content';

const blogCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        date: z.coerce.date(),
        upDate: z.coerce.date().optional(),
        draft: z.boolean().default(false),
        img: z.array(z.object({
            url: z.string(),
            alt: z.string(),
        })).optional(),
    }),
});

const friendsColleection = defineCollection({
    type: 'data',
    schema: ({ image }) => z.array(
        z.object({
            name: z.string(),
            desc: z.string(),
            avatar: z.string(),
            social: z.object({
                blog: z.string().optional(),
                twitter: z.string().optional(),
                github: z.string().optional(),
            }),
        }),
    ),
});

export const collections = {
    blog: blogCollection,
    friends: friendsColleection,
};