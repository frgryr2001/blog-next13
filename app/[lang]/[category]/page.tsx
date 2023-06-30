import { PaddingContainer, PostList } from '@/components';
import directus from '@/lib/directus';
import { Post } from '@/types/collection';
import { notFound } from 'next/navigation';
import { cache } from 'react';

const getCategoryData = cache(async (cate: string, locale: string) => {
  try {
    const category = await directus.items('category').readByQuery({
      filter: {
        slug: {
          _eq: cate,
        },
      },
      fields: [
        '*',
        'translations.*',
        'post.*',
        'post.author.id',
        'post.author.first_name',
        'post.author.last_name',
        'post.category.id',
        'post.category.title',
        'post.translations.*',
      ],
    });
    if (locale === 'en') {
      return category?.data?.[0];
    } else {
      const fetchedCategory = category?.data?.[0];

      const localisedCategory = {
        ...fetchedCategory,
        title: fetchedCategory.translations[0].title,
        description: fetchedCategory.translations[0].description,
        post: fetchedCategory.post.map((p: any) => {
          return {
            ...p,
            title: p.translations[0].title,
            description: p.translations[0].description,
            body: p.translations[0].body,
            category: {
              ...p.category,
              title: fetchedCategory.translations[0].title,
            },
          };
        }),
      };

      return localisedCategory;
    }
  } catch (error) {
    console.log(error);
    throw new Error(" Can't get category data");
  }
});

export const generateMetadata = async ({
  params: { category, lang },
}: {
  params: {
    category: string;
    lang: string;
  };
}) => {
  const categoryData = await getCategoryData(category, lang);
  console.log(categoryData?.title);

  return {
    title: categoryData?.title,
    description: categoryData?.description,
  };
};

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
        lang: 'en',
      };
    });
    const localisedCategorySlugs = categories?.data?.map((c) => {
      return {
        category: c.slug as string,
        lang: 'vi',
      };
    });
    const allCategorySlugs = [...categorySlugs!, ...localisedCategorySlugs!];
    return allCategorySlugs ?? [];
  } catch (error) {
    console.log(error);
    throw new Error(" Can't get category data");
  }
}

export default async function Page({
  params: { category, lang },
}: {
  params: { category: string; lang: string };
}) {
  const categoryObj = await getCategoryData(category, lang);

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
        <PostList posts={typeCorrectedCategory.post} locale={lang} />
      </PaddingContainer>
    </div>
  );
}
