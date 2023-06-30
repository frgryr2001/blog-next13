import directus from '@/lib/directus';
import { getDictionary } from '@/lib/getDictionary';
import { revalidateTag } from 'next/cache';
import Image from 'next/image';

/* eslint-disable react/no-unescaped-entities */
export default async function CTACard({ locale }: { locale: string }) {
  const dictionary = await getDictionary(locale as 'en' | 'vi');
  const formAction = async (formData: FormData) => {
    'use server';
    try {
      const email = formData.get('email');
      await directus.items('subscribers').createOne({
        email,
      });
      revalidateTag('subscribers-count');
    } catch (error) {
      console.log(error);
    }
  };

  const subscribersCount = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}items/subscribers?meta=total_count&access_token=${process.env.ADMIN_TOKEN}`,
    {
      next: {
        tags: ['subscribers-count'],
      },
    }
  )
    .then((res) => res.json())
    .then((res) => res.meta.total_count)
    .catch((err) => console.log(err));
  return (
    <div className="relative px-6 py-10 overflow-hidden rounded-md bg-slate-100">
      <div className="absolute inset-0 z-10 bg-gradient-to-br from-white/95 via-white/80 to-white/30" />
      <Image
        fill
        src={
          'https://images.unsplash.com/photo-1495277493816-4c359911b7f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=865&q=80'
        }
        alt="explore the world"
        className="object-cover object-center"
      />
      <div className="relative z-20">
        <div className="text-lg font-medium ">#exploretheworld</div>
        <h3 className="mt-3 text-4xl font-semibold">
          {dictionary.ctaCard.title}
        </h3>
        <p className="max-w-lg mt-2 text-lg font-medium">
          {dictionary.ctaCard.description}
        </p>
        <form
          className="flex items-center w-full gap-2 mt-6"
          action={formAction}
          key={subscribersCount + 'formSubscribers'}
        >
          <input
            type="email"
            name="email"
            placeholder={dictionary.ctaCard.placeholder}
            className="w-full px-3 py-2 text-base rounded-md md:w-auto bg-white/90 focus:ring-2 placeholder:text-sm ring-neutral-600"
          />
          <button className="px-3 py-2 rounded-md whitespace-nowrap bg-neutral-900 text-neutral-200">
            {dictionary.ctaCard.button}
            {/* <Loading /> */}
          </button>
        </form>
        <div className="mt-5 text-neutral-700">
          {dictionary.ctaCard.subscriberText1}{' '}
          <span className="px-2 py-1 mr-1 text-sm rounded-md bg-neutral-700 text-neutral-100">
            {subscribersCount}
          </span>
          {dictionary.ctaCard.subscriberText2}
        </div>
      </div>
    </div>
  );
}
