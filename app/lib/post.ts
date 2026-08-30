const baseUrl = process.env.WORDPRESS_URL

type Post = {
  id: number;
  date: string;
  slug: string;
  status: "publish" | "future" | "draft" | "pending" | "private";
  type: "post";
  link: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
    protected: boolean;
  };
  excerpt: {
    rendered: string;
    protected: boolean;
  };
  author: number;
  featured_media: number;
  categories: number[];
  tags: number[];
};

export async function latestPost() : Promise<Post[]>{

    const repsonse = await fetch(`${baseUrl}/wp-json/wp/v2/posts`);
    const data = await repsonse.json();
    return data;

}