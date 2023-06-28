import { Post } from '@/types/collection';
import Image from 'next/image';
import Link from 'next/link';
import PostContent from '../post-content';
import clsx from 'clsx';

interface PostCardProps {
  post: Post;
  layout?: 'horizontal' | 'vertical';
  reverse?: boolean;
}

export default function PostCard({
  post,
  layout = 'horizontal',
  reverse = false,
}: PostCardProps) {
  return (
    <Link
      href={`/post/${post.slug}`}
      className={clsx('@container', {
        'grid items-center grid-cols-1 md:grid-cols-2 gap-10':
          layout === 'horizontal',
        'space-y-10': layout === 'vertical',
      })}
    >
      {/* Image */}
      <Image
        className={clsx(
          'rounded-md w-full max-h-[300px] h-full object-cover object-center',
          {
            'md:order-last': reverse,
          }
        )}
        src={`${process.env.NEXT_PUBLIC_ASSETS_URL}/${post.image}?key=optimised`}
        width={600}
        height={300}
        alt={post.description}
      />
      {/* Content */}
      <PostContent post={post} />
    </Link>
  );
}
