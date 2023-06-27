import { Post } from '@/types/collection';
import PostContent from '../post-content';
import Image from 'next/image';

interface PostHeroProps {
  post: Post;
}
export default function PostHero({ post }: PostHeroProps) {
  return (
    <div>
      <PostContent post={post} isPostPage />
      <Image
        src={post.image}
        width={1280}
        height={500}
        alt={post.title}
        className="md:h-[500px] h-[300px] rounded-md mt-6 max-h-[500px] object-cover object-center"
      />
    </div>
  );
}
