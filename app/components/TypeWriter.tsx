'use client';

import React, { useState, useEffect } from 'react';

interface TypeWriterProps {
  words?: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenWords?: number;
}

const TypeWriter = ({
  words = [],
  typingSpeed = 150,
  deletingSpeed = 100,
  delayBetweenWords = 2000
}: TypeWriterProps) => {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!words.length) return;

    let timeoutId: NodeJS.Timeout;

    const type = () => {
      const currentWord = words[wordIndex];
      
      if (isDeleting) {
        setText(currentWord.substring(0, text.length - 1));
      } else {
        setText(currentWord.substring(0, text.length + 1));
      }

      let delay = isDeleting ? deletingSpeed : typingSpeed;

      if (!isDeleting && text === currentWord) {
        delay = delayBetweenWords;
        setIsDeleting(true);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }

      timeoutId = setTimeout(type, delay);
    };

    timeoutId = setTimeout(type, typingSpeed);

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [text, wordIndex, isDeleting, words, typingSpeed, deletingSpeed, delayBetweenWords]);

  return (
    <span className="inline-block min-w-[20ch]">
      {text}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default TypeWriter;