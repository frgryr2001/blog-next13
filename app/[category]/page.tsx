import { PaddingContainer, PostList } from '@/components';
import { DUMMY_CATEGORIES, DUMMY_POSTS } from '@/data/DUMMY_DATA';

export async function generateStaticParams() {
  return DUMMY_CATEGORIES.map((category) => ({
    params: { category: category.slug },
  }));
}

export default function Page({
  params: { category },
}: {
  params: { category: string };
}) {
  const categoryObj = DUMMY_CATEGORIES.find((cte) => cte.slug === category);

  const posts = DUMMY_POSTS.filter(
    (post) => post.category.title.toLowerCase() === category.toLowerCase()
  );
  return (
    <div>
      <PaddingContainer>
        <div className="mb-10">
          <h1 className="text-4xl font-semibold">{categoryObj?.title}</h1>
          <p className="text-lg text-neutral-600">{categoryObj?.description}</p>
        </div>
        <PostList posts={posts} />
      </PaddingContainer>
    </div>
  );
}
