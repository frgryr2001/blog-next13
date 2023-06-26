import { getReadingTime, getRevalidateTime } from '@/lib/helpers';
import { Post } from '@/types/collection';
import clsx from 'clsx';
import { ArrowRight } from 'lucide-react';

interface PostContentProps {
  post: Post;
}

export default function PostContent({ post }: PostContentProps) {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2 text-sm text-neutral-400">
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
      <h2 className="text-3xl font-medium">{post.title}</h2>
      <p className="leading-snug text-neutral-600">{post.description}</p>
      <div className="flex items-center gap-2 pt-3">
        Read more <ArrowRight size={14} />
      </div>
    </div>
  );
}
