import './globals.css';
import { Inter } from 'next/font/google';
import { Footer, Navigation } from '@/components';
import { getDictionary } from '@/lib/getDictionary';
import siteConfig from '@/config/site';

const inter = Inter({ subsets: ['latin'] });

export const generateMetadata = async ({
  params: { lang },
}: {
  params: { lang: string };
}) => {
  const dictionary = await getDictionary(lang);
  return {
    title: {
      template: '%s | ' + siteConfig.siteName,
      default: siteConfig.siteName,
    },
    description: dictionary.footer.description,
  };
};

export default function RootLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  return (
    <html lang={lang}>
      <body className={`${inter.className} flex flex-col h-screen`}>
        <Navigation locale={lang} />
        <div className="flex-auto pt-8 ">{children}</div>
        <Footer locale={lang} />
      </body>
    </html>
  );
}
