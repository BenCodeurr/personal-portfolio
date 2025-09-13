'use client';

import React, { useState } from 'react';
import { Send } from 'lucide-react';

const NewsletterForm = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'subscribing' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('subscribing');
    setMessage('');

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      console.log('API Response:', data);

      if (!response.ok) {
        throw new Error(data.error || 'Failed to subscribe');
      }

      setStatus('success');
      setMessage(data.message);
      setEmail('');
      setTimeout(() => {
        setStatus('idle');
        setMessage('');
      }, 3000);
    } catch (error) {
      setStatus('error');
      setMessage(
        error instanceof Error ? error.message : 'Something went wrong. Please try again.'
      );
      setTimeout(() => {
        setStatus('idle');
        setMessage('');
      }, 3000);
    }
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
        {message && (
          <p className={`text-sm ${status === 'success' ? 'text-green-500' : 'text-red-500'}`}>
            {message}
          </p>
        )}
      </form>
    </div>
  );
};

export default NewsletterForm;