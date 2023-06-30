import Link from 'next/link';
import React from 'react';
import { PaddingContainer, SwitchLang } from '..';
import { getDictionary } from '@/lib/getDictionary';

export default async function Navigation({ locale }: { locale: string }) {
  const dictionary = await getDictionary(locale);
  return (
    <div className="sticky top-0 left-0 right-0 z-50 bg-white bg-opacity-50 border-b backdrop-blur-md">
      <PaddingContainer>
        <div className="flex items-center justify-between py-5">
          <Link href={`/${locale}`} className="text-lg font-bold">
            Explorer
          </Link>
          <nav>
            <ul className="flex justify-center gap-4 text-neutral-600">
              <li>
                <SwitchLang locale={locale} />
              </li>
              <li>
                <Link href={`/${locale}/cities`}>
                  {dictionary.navigation.links.cities}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/experiences`}>
                  {dictionary.navigation.links.experiences}
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </PaddingContainer>
    </div>
  );
}
