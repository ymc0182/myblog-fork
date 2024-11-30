import type { Site, NavLink } from './types';

export const SITE: Site = {
    title: '袁某博客',
    avatar: 'https://cravatar.com/avatar/5FBB13B635295D1226A17B782951C309.webp?f=mp',
    keywords: '袁某博客,袁某人博客',
    description: '这是袁某人的 Astro 博客，主要分享日常、学习日志还有一些作品和介绍。',
    num_blog_on_page: 10,
    num_blog_on_homepage: 5,
};

export const NavLinks: NavLink = [
    { name: '留言', url: '/guestbook' },
    { name: '友链', url: '/friends' },
    { name: '关于', url: '/about' },
];