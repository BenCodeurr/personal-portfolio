'use client';

import React, { useState } from 'react';
import { Send } from 'lucide-react';

const NewsletterForm = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('subscribing');
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    setStatus('success');
    setEmail('');
    
    setTimeout(() => setStatus(''), 3000);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-2">
        <div className="flex gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 transition-colors"
          />
          <button
            type="submit"
            disabled={status === 'subscribing'}
            className="px-4 py-2 bg-gradient-to-r from-orange-300 via-orange-500 to-orange-700 rounded-lg text-white font-medium flex items-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            <Send className="w-4 h-4" />
            {status === 'subscribing' ? 'Subscribing...' : 'Subscribe'}
          </button>
        </div>
        {status === 'success' && (
          <p className="text-green-500 text-sm">
            Successfully subscribed to the newsletter!
          </p>
        )}
      </form>
    </div>
  );
};

export default NewsletterForm;