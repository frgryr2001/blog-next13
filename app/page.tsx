import { CTACard, PaddingContainer, PostCard, PostList } from '@/components';
import { DUMMY_POSTS } from '@/data/DUMMY_DATA';

export default function Home() {
  return (
    <PaddingContainer>
      <main className="h-auto space-y-10">
        <PostCard post={DUMMY_POSTS[0]} />
        <PostList
          posts={DUMMY_POSTS.filter((item, index) => index > 0 && index < 3)}
        />
        <CTACard />
        <PostCard post={DUMMY_POSTS[3]} reverse />
        <PostList
          posts={DUMMY_POSTS.filter((item, index) => index > 3 && index < 6)}
        />
      </main>
    </PaddingContainer>
  );
}
