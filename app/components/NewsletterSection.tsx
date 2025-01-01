'use client';

import React from 'react';
import NewsletterForm from './NewsletterForm';

const NewsletterSection = () => {
  return (
    <section className="w-full py-16">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center space-y-6">
          <h3 className="text-2xl font-bold text-white">Stay Updated</h3>
          <p className="text-gray-400">
            Subscribe to my newsletter for updates on tech, entrepreneurship, and innovation.
          </p>
          <NewsletterForm />
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;