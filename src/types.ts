export type Site = {
    title: string;
    avatar: string;
    keywords: string;
    description: string;
    num_blog_on_page: number;
    num_blog_on_homepage: number;
};
  
export type Metadata = {
    title: string;
    description: string;
};

export type NavLink = {
    name: string;
    url: string;
}[];