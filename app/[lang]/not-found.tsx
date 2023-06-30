import { PaddingContainer } from '@/components';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex-auto text-center">
      <PaddingContainer>
        <div className="space-y-1 ">
          <h2 className="text-2xl font-bold">Not Found</h2>
          <p>Could not find requested resource</p>
          <p>
            View{' '}
            <Link
              href="/"
              className="px-2 py-1 font-medium text-white rounded-md hover:bg-slate-700 bg-slate-900"
            >
              all posts
            </Link>
          </p>
        </div>
      </PaddingContainer>
    </div>
  );
}
