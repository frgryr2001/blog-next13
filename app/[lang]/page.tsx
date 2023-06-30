import { CTACard, PaddingContainer, PostCard, PostList } from '@/components';
import directus from '@/lib/directus';
import { notFound } from 'next/navigation';

export default async function Home({
  params: { lang },
}: {
  params: {
    lang: string;
  };
}) {
  const getAllPosts = async () => {
    try {
      const resp = await directus.items('post').readByQuery({
        fields: [
          '*',
          'author.id',
          'author.first_name',
          'author.last_name',
          'category.id',
          'category.title',
          'category.translations.*',
          'translations.*',
        ],
      });
      if (lang === 'en') {
        return resp.data;
      } else {
        const localisedPost = resp.data?.map((post) => {
          return {
            ...post,
            title: post.translations[0].title,
            description: post.translations[0].description,
            body: post.translations[0].body,
            category: {
              ...post.category,
              title: post.category.translations[0].title,
            },
          };
        });
        return localisedPost;
      }
    } catch (error) {
      console.log(error);
    }
  };
  const posts = await getAllPosts();

  if (!posts) {
    return notFound();
  }
  return (
    <PaddingContainer>
      <main className="h-auto space-y-10">
        <PostCard post={posts[0]} locale={lang} />
        <PostList
          locale={lang}
          posts={posts.filter((item, index) => index > 0 && index < 3)}
        />
        <CTACard locale={lang} />
        <PostCard post={posts[3]} reverse locale={lang} />
        <PostList
          locale={lang}
          posts={posts.filter((item, index) => index > 3 && index < 6)}
        />
      </main>
    </PaddingContainer>
  );
}
