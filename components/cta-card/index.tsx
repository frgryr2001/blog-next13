import Image from 'next/image';

/* eslint-disable react/no-unescaped-entities */
export default function CTACard() {
  return (
    <div className="relative px-6 py-10 overflow-hidden rounded-md bg-slate-100">
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
          Explore the world with me
        </h3>
        <p className="max-w-lg mt-2 text-lg">
          Explore the world with me ! I love to travel and explore new places
          🌍. I'm travelling since 2018 and I have visited 10 countries so far
          🔥.
        </p>
      </div>
    </div>
  );
}
