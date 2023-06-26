export interface SiteConfig {
  siteName: string;
  description: string;
  currentlyAt: string;
  socialLinks: SocialLinks;
}
export interface SocialLinks {
  instagram: string;
  github: string;
  linkedin: string;
  twitter: string;
}

const siteConfig: SiteConfig = {
  siteName: 'Explorer',
  description:
    'A minimal and lovely travel blog which shares experiences and stories of a traveler.',
  currentlyAt: 'Vietnam',
  socialLinks: {
    instagram: 'https://www.instagram.com/hn_16w/',
    github: 'https://github.com/frgryr2001',
    linkedin: 'https://www.linkedin.com/in/hoang-nhan-8105b5243/',
    twitter: 'https://twitter.com/Nhn24340777',
  },
};
export default siteConfig;
