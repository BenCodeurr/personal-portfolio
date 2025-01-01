// Navbar.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();
  const links = [
    { href: '/', label: 'Me' },
    { href: '/stories', label: 'Stories' }
  ];

  return (
    <nav className="w-full border-b border-white/10 bg-black/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-8 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold">
            <span className="bg-gradient-to-r from-orange-300 via-orange-500 to-orange-700 text-transparent bg-clip-text">
              BM
            </span>
          </Link>
          
          <div className="flex gap-8">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`text-sm transition-colors ${
                  pathname === href 
                    ? 'text-white font-medium' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;