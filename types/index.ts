export interface IPostProps {
  author: {
    bio: string;
    name: string;
    id: string;
    photo: {
      url: string;
    };
  }
  createdAt: string;
  slug: string;
  arabic: string;
  title: string;
  excerpt: string;
  image: {
    url: string;
  };
  categories: {
    name: string;
    slug: string;
  }
}


export interface ICategoryProps {
  name: string;
  slug: string;
  posts: {
    slug: string;
  }[]
}