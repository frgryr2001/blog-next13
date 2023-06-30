'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function SwitchLang({ locale }: { locale: string }) {
  const targetLanguage = locale === 'en' ? 'vi' : 'en';
  const pathname = usePathname();
  const redirectTarget = () => {
    if (!pathname) return '/';
    const segments = pathname.split('/');
    segments[1] = targetLanguage;
    return segments.join('/');
  };
  return (
    <Link
      className="font-semibold "
      locale={targetLanguage}
      href={redirectTarget()}
    >
      Language: <span>{targetLanguage === 'en' ? '🇬🇧' : '🇻🇳'}</span>
    </Link>
  );
}
