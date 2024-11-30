import rss from "@astrojs/rss";
import { getCollection } from "astro:content";




export async function GET(context){
    const blog = (await getCollection("blog")).filter(post => !post.data.draft);

    const items = [...blog].sort((a, b) => new Date(b.data.date).valueOf() - new Date(a.data.date).valueOf());

    return rss({
        title: 'title',
        description: 'description',
        site: context.site,
        items: items.map((item) => ({
            title: item.data.title,
            pubDate: item.data.date,
            link: `/${item.collection}/${item.slug}`,
        })),
    });
}