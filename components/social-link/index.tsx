import clsx from 'clsx';
import { Facebook, Github, Instagram, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';

interface SocialLinkProps {
  platform: string;
  link: string;
  isShareUrl?: boolean;
}

export default function SocialLink({
  platform,
  link,
  isShareUrl = false,
}: SocialLinkProps) {
  const getIcon = (platform: string) => {
    switch (platform) {
      case 'facebook':
        return <Facebook size={20} />;
      case 'twitter':
        return <Twitter size={20} />;
      case 'instagram':
        return <Instagram size={20} />;
      case 'linkedin':
        return <Linkedin size={20} />;
      case 'github':
        return <Github size={20} />;

      default:
        break;
    }
  };

  return (
    <Link href={link}>
      <div
        className={clsx('', {
          'py-1 px-2 md:py-2 md:px-3 rounded-md bg-neutral-200 text-neutral-500 hover:bg-neutral-600 hover:text-neutral-100 duration-100 ease-in-out transition-colors':
            isShareUrl,
        })}
      >
        {getIcon(platform)}
      </div>
    </Link>
  );
}
