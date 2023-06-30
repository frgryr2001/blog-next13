import { Post } from '@/types/collection';
import PostContent from '../post-content';
import Image from 'next/image';

interface PostHeroProps {
  post: Post;
  locale: string;
}
export default function PostHero({ post, locale }: PostHeroProps) {
  return (
    <div>
      <PostContent post={post} isPostPage locale={locale} />
      <Image
        src={`${process.env.NEXT_PUBLIC_ASSETS_URL}/${post.image}?key=optimised`}
        width={1280}
        height={500}
        alt={post.title}
        className="md:h-[500px] h-[300px] rounded-md mt-6 max-h-[500px] object-cover object-center"
      />
    </div>
  );
}
