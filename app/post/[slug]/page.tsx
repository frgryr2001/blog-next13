import {
  CTACard,
  PaddingContainer,
  PostBody,
  PostHero,
  SocialLink,
} from '@/components';
import { DUMMY_POSTS } from '@/data/DUMMY_DATA';
import { notFound } from 'next/navigation';
export const generateStaticParams = async () => {
  return DUMMY_POSTS.map((post) => {
    return {
      slug: post.slug,
    };
  });
};

export default function Page({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const post = DUMMY_POSTS.find((post) => post.slug === slug);
  if (!post) notFound();
  return (
    <PaddingContainer>
      <div className="space-y-10">
        {/* Post Hero */}
        <PostHero post={post} />
        {/* Post body */}
        <div className="flex flex-col gap-10 mt-10 md:flex-row ">
          <div className="relative">
            <div className="sticky flex items-center gap-5 md:flex-col top-20">
              <div className="font-medium md:hidden">Share this content : </div>
              <SocialLink
                isShareUrl
                platform={'facebook'}
                link={`https://www.facebook.com/sharer/sharer.php?u=${`${process.env.NEXT_PUBLIC_SITE_URL}/post/${post.slug}`}`}
              />
              {/* https://twitter.com/share?url= */}
              <SocialLink
                isShareUrl
                platform={'twitter'}
                link={`https://twitter.com/intent/tweet?url=${`${process.env.NEXT_PUBLIC_SITE_URL}/post/${post.slug}`}`}
              />
              <SocialLink
                isShareUrl
                platform={'linkedin'}
                link={`https://www.linkedin.com/shareActicle?mini=true&url=${`${process.env.NEXT_PUBLIC_SITE_URL}/post/${post.slug}`}`}
              />
            </div>
          </div>
          <PostBody body={post.body} />
        </div>
        {/* CTA card */}
        <CTACard />
      </div>
    </PaddingContainer>
  );
}
