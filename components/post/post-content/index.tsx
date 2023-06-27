import { getReadingTime, getRevalidateTime } from '@/lib/helpers';
import { Post } from '@/types/collection';
import { ArrowRight } from 'lucide-react';
import clsx from 'clsx';

interface PostContentProps {
  post: Post;
  isPostPage?: boolean;
}

export default function PostContent({
  post,
  isPostPage = false,
}: PostContentProps) {
  return (
    <div className="space-y-2">
      <div
        className={clsx(
          'flex items-center flex-wrap gap-2 text-xs @md:text-sm text-neutral-400',
          {
            'text-sm': isPostPage,
          }
        )}
      >
        <div
          className={clsx('font-medium ', {
            'text-emerald-600': post.category.title === 'Cities',
            'text-indigo-600': post.category.title === 'Experiences',
          })}
        >
          {' '}
          {post.category.title}{' '}
        </div>
        <div className="w-2 h-2 rounded-full bg-neutral-200" />
        <div>{`${post.author.first_name} ${post.author.last_name}`}</div>
        <div className="w-2 h-2 rounded-full bg-neutral-200" />
        <div>{getReadingTime(post.body)} </div>
        <div className="w-2 h-2 rounded-full bg-neutral-200" />
        <div>{getRevalidateTime(post.date_created)} </div>
      </div>
      <h2
        className={clsx('@lg:text-3xl @md:text-2xl text-xl font-medium', {
          'text-2xl md:text-3xl lg:text-4xl font-bold': isPostPage,
        })}
      >
        {post.title}
      </h2>
      <p className="text-base @lg:text-lg leading-snug text-neutral-600">
        {post.description}
      </p>
      {!isPostPage && (
        <div className="flex items-center gap-2 pt-3">
          Read more <ArrowRight size={14} />
        </div>
      )}
    </div>
  );
}
