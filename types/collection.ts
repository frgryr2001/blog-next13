export interface Post {
  title: string;
  id: string;
  description: string;
  category: Category;
  author: Author;
  slug: string;
  image: string;
  body: string;
  date_created: string;
  date_updated: string;
}

export interface Category {
  id: string;
  title: string;
  slug?: string;
  description?: string;
}

export interface Author {
  id: string;
  first_name: string;
  last_name: string;
}
