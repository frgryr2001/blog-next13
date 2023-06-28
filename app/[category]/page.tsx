import { PaddingContainer, PostList } from '@/components';
import { DUMMY_CATEGORIES, DUMMY_POSTS } from '@/data/DUMMY_DATA';
import directus from '@/lib/directus';
import { Post } from '@/types/collection';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  try {
    const categories = await directus.items('category').readByQuery({
      filter: {
        slug: {
          _eq: 'published',
        },
      },
      fields: ['slug'],
    });
    const categorySlugs = categories?.data?.map((c) => {
      return {
        category: c.slug as string,
      };
    });
    return categorySlugs ?? [];
  } catch (error) {
    console.log(error);
    throw new Error(" Can't get category data");
  }
}

const getCategoryData = async (cate: string) => {
  try {
    const category = await directus.items('category').readByQuery({
      filter: {
        slug: {
          _eq: cate,
        },
      },
      fields: [
        '*',
        'post.*',
        'post.author.id',
        'post.author.first_name',
        'post.author.last_name',
        'post.category.id',
        'post.category.title',
      ],
    });
    return category?.data?.[0];
  } catch (error) {
    console.log(error);
    throw new Error(" Can't get category data");
  }
};

export default async function Page({
  params: { category },
}: {
  params: { category: string };
}) {
  const categoryObj = await getCategoryData(category);

  if (!categoryObj) {
    return notFound();
  }

  const typeCorrectedCategory = categoryObj as {
    id: string;
    title: string;
    description: string;
    slug: string;
    post: Post[];
  };
  return (
    <div>
      <PaddingContainer>
        <div className="mb-10">
          <h1 className="text-4xl font-semibold">
            {typeCorrectedCategory?.title}
          </h1>
          <p className="text-lg text-neutral-600">
            {typeCorrectedCategory?.description}
          </p>
        </div>
        <PostList posts={typeCorrectedCategory.post} />
      </PaddingContainer>
    </div>
  );
}
