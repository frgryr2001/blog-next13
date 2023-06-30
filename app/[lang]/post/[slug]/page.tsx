import {
  CTACard,
  PaddingContainer,
  PostBody,
  PostHero,
  SocialLink,
} from '@/components';
import directus from '@/lib/directus';
import { notFound } from 'next/navigation';
export const generateStaticParams = async () => {
  try {
    const posts = await directus.items('post').readByQuery({
      filter: {
        status: {
          _eq: 'published',
        },
      },
      fields: ['slug'],
    });
    const postSlugs = posts?.data?.map((p) => {
      return {
        slug: p.slug as string,
        lang: 'en',
      };
    });

    const localisedPostSlugs = posts?.data?.map((p) => {
      return {
        slug: p.slug as string,
        lang: 'vi',
      };
    });

    const allPostSlugs = [...postSlugs!, ...localisedPostSlugs!];
    return allPostSlugs ?? [];
  } catch (error) {
    console.log(error);
    throw new Error(" Can't get post data");
  }
};

export default async function Page({
  params: { slug, lang },
}: {
  params: { slug: string; lang: string };
}) {
  const getPostData = async (slug: string) => {
    try {
      const post = await directus.items('post').readByQuery({
        filter: {
          slug: {
            _eq: slug,
          },
        },
        fields: [
          '*',
          'author.id',
          'author.first_name',
          'author.last_name',
          'category.id',
          'category.title',
          'translations.*',
          'category.translations.*',
        ],
      });
      const postObj = post?.data?.[0];
      if (lang === 'en') {
        return postObj;
      } else {
        const localisedPostData = {
          ...postObj,
          title: postObj?.translations[0]?.title,
          description: postObj?.translations[0]?.description,
          body: postObj?.translations[0]?.body,
          category: {
            ...postObj?.category,
            title: postObj?.category?.translations[0]?.title,
          },
        };
        return localisedPostData;
      }
    } catch (error) {
      console.log(error);
      throw new Error("Can't get post data");
    }
  };
  const post = await getPostData(slug);
  if (!post) notFound();
  return (
    <PaddingContainer>
      <div className="space-y-10">
        {/* Post Hero */}
        <PostHero locale={lang} post={post} />
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
        <CTACard locale={lang} />
      </div>
    </PaddingContainer>
  );
}
