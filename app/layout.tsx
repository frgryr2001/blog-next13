import './globals.css';
import { Inter } from 'next/font/google';
import { Footer, Navigation } from '@/components';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col h-screen`}>
        <Navigation />
        <div className="flex-auto pt-8">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
