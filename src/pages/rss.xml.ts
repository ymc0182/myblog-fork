import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';
import { SITE } from "../consts";

const parser = new MarkdownIt();

export async function GET(context){
    const posts = (await getCollection("post")).filter(post => !post.data.draft);

    const items = [...posts].sort((a, b) => new Date(b.data.date).valueOf() - new Date(a.data.date).valueOf());

    return rss({
        title: SITE.TITLE,
        description: SITE.DESCRIPTION,
        site: context.site,
        items: items.map((item) => ({
            title: item.data.title,
            pubDate: item.data.date,
            link: `/${item.collection}/${item.id}`,
            content: sanitizeHtml(parser.render(item.body), {
                allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img'])
              }),
        })),
    });
}