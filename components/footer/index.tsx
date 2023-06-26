import Link from 'next/link';
import React from 'react';
import { PaddingContainer, SocialLink } from '..';
import siteConfig from '@/config/site';

export default function Footer() {
  return (
    <div className="py-6 mt-10 border-t">
      <PaddingContainer>
        <div>
          <h2 className="text-3xl font-bold">{siteConfig.siteName}</h2>
          <p className="max-w-md mt-2 text-lg text-neutral-700">
            {siteConfig.description}
          </p>
          {/* Social & Currently */}
          <div className="flex flex-wrap justify-between gap-4 mt-6 ">
            <div>
              <div className="text-lg font-medium">#exploretheworld</div>
              <div className="flex flex-row items-center gap-3 mt-2 text-neutral-600">
                <SocialLink
                  platform="twitter"
                  link={siteConfig.socialLinks.twitter}
                />
                <SocialLink
                  platform="instagram"
                  link={siteConfig.socialLinks.instagram}
                />
                <SocialLink
                  platform="linkedin"
                  link={siteConfig.socialLinks.linkedin}
                />
                <SocialLink
                  platform="github"
                  link={siteConfig.socialLinks.github}
                />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="text-sm text-neutral-400">Currently at</div>
              <div className="flex items-center gap-2 px-3 py-2 bg-white rounded-md shadow-md">
                <div className="w-2 h-2 rounded-full bg-emerald-400 " />
                {siteConfig.currentlyAt}
              </div>
            </div>
          </div>
          {/* Bottom Section */}
          <div className="flex flex-wrap items-center justify-between gap-4 py-3 mt-16 border-t">
            <div className="text-sm text-neutral-400">
              All right reserved | Copyright {new Date().getFullYear()}
            </div>
            <div className="text-sm">
              {' '}
              Made with love by{' '}
              <Link
                href="https://twitter.com/Nhn24340777"
                className="underline underline-offset-4"
              >
                @nhandev
              </Link>
            </div>
          </div>
        </div>
      </PaddingContainer>
    </div>
  );
}
