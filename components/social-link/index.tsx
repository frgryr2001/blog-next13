import { Facebook, Github, Instagram, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';

interface SocialLinkProps {
  platform: string;
  link: string;
}

export default function SocialLink({ platform, link }: SocialLinkProps) {
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

  return <Link href={link}>{getIcon(platform)}</Link>;
}
