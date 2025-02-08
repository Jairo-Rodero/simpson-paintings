import { z, defineCollection } from 'astro:content';

const padNumber = (val: string | number) => {
    const numVal = Number(val);
    return !Number.isNaN(numVal) ? (numVal < 10 ? `0${numVal}` : String(numVal)) : val;
};

const paintings = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        date: z.number(),
        painter: z.string(),
        image: z.string(),
        frame: z.string(),
        season: z.string().or(z.number()).transform(padNumber),
        episode: z.number().or(z.string()).transform(padNumber),
        episode_name: z.string(),
        episode_date: z.number(),
    }),
});

export const collections = {
    paintings,
};
