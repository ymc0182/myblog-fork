import type { Site, NavLinks, Metadata } from './types';

export const SITE: Site = {
    TITLE: '袁某人博客',
    AVATAR: 'https://res.jb18.cm/img/2024/12/13/7f233b9305643b3d9bf35943a7016407.webp',
    KEYWORDS: '袁某人,袁某人博客,袁某博客,jb18.cm,个人博客,个人主页,博客，主页',
    DESCRIPTION: '袁某人的个人博客（Astro 静态博客），一个集生活点滴、学术探索与创意作品于一体的数字空间。这里，不仅记录日常的所见所感，还深入分享学习心得与成长历程。每一篇文章都是对知识的热爱与追求的见证，每一个项目都是创新与实践的结晶。欢迎与我一起探讨。',
    NUM_BLOG_ON_PAGE: 10,
    NUM_BLOG_ON_HOMEPAGE: 5,
};

export const NAVLINKS: NavLinks = [
    {
        NAME: '友链',
        HREF: '/friends'
    },
    {
        NAME: '留言', 
        HREF: '/guestbook' 
    },
    {
        NAME: '关于',
        HREF: '/about'
    },
];
