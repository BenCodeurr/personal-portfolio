'use client';

import React from 'react';
import { XIcon, Linkedin, InstagramIcon, YoutubeIcon } from 'lucide-react';
import NewsletterForm from './NewsletterForm';

const socialIcons = [
  { Icon: XIcon, href: 'https://x.com/benmukanirwa' },
  { Icon: Linkedin, href: 'https://www.linkedin.com/in/benmukanirwa/' },
  { Icon: InstagramIcon, href: 'https://www.instagram.com/__ben.mk/' },
  { Icon: YoutubeIcon, href: 'https://www.youtube.com/@benmukanirwa' }
];

const Footer = () => {
  return (
    <footer className="w-full border-t border-white/10 mt-auto">
      <div className="max-w-6xl mx-auto w-full px-8 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Footer Info - Left Side */}
          <div className="space-y-4">
            <div className="flex gap-4 items-center">
              {socialIcons.map(({ Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} <span className='font-bold'>Ben Mukanirwa.</span> All rights reserved.
            </p>
          </div>

          {/* Newsletter Section - Right Side */}
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-bold text-white">Stay Updated</h3>
              <p className="text-sm text-gray-400 mt-2">
                Subscribe to my newsletter for updates on tech, entrepreneurship, and innovation.
              </p>
            </div>
            <NewsletterForm />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;