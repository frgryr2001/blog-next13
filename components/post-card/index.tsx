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
      className={clsx('', {
        'grid items-center grid-cols-2 gap-10': layout === 'horizontal',
        'space-y-10': layout === 'vertical',
      })}
    >
      {/* Image */}
      <Image
        className={clsx(
          'rounded-md w-full max-h-[300px] object-cover object-center',
          {
            'order-last': reverse,
          }
        )}
        src={post.image}
        width={600}
        height={300}
        alt={post.description}
      />
      {/* Content */}
      <PostContent post={post} />
    </Link>
  );
}
