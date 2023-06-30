import { Post } from '@/types/collection';
import PostCard from '../post-card';

interface PostListProps {
  posts: Post[];
  layout?: 'horizontal' | 'vertical';
  locale: string;
}
export default function PostList({
  posts = [],
  layout = 'vertical',
  locale,
}: PostListProps) {
  return (
    <div className="grid grid-cols-1 gap-10 mb-5 md:mb-20 lg:grid-flow-col md:grid-cols-2 lg:auto-cols-fr">
      {posts?.map((post) => {
        return (
          <PostCard key={post.id} post={post} layout={layout} locale={locale} />
        );
      })}
    </div>
  );
}
