import { getCategories, getPosts } from "@/services";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base_url = process.env.NEXT_PUBLIC_BASE_URL;

  const posts = await getPosts();
  const categories = await getCategories();

  console.log(categories);

  return [
    {
      url: `${base_url}/`,
    },

    {
      url: `${base_url}/categories`,
    },
    ...posts.map((post) => ({
      url: `${base_url}/posts/${post.slug}`,
    })),
    ...categories.map((category) => ({
      url: `${base_url}/categories/${category.slug}`,
    })),
  ]
}