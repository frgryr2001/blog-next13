import { CTACard, PaddingContainer, PostCard, PostList } from '@/components';
import { DUMMY_POSTS } from '@/data/DUMMY_DATA';
import directus from '@/lib/directus';
import { notFound } from 'next/navigation';

export default async function Home() {
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
        ],
      });
      return resp.data;
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
        <PostCard post={posts[0]} />
        <PostList
          posts={posts.filter((item, index) => index > 0 && index < 3)}
        />
        <CTACard />
        <PostCard post={posts[3]} reverse />
        <PostList
          posts={posts.filter((item, index) => index > 3 && index < 6)}
        />
      </main>
    </PaddingContainer>
  );
}
