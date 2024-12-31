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
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const currentWord = words[currentWordIndex];
      
      if (isDeleting) {
        // Deleting text
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        } else {
          setCurrentText(currentText.slice(0, -1));
        }
      } else {
        // Typing text
        if (currentText === currentWord) {
          // Word is complete, wait before deleting
          setTimeout(() => setIsDeleting(true), delayBetweenWords);
        } else {
          setCurrentText(currentWord.slice(0, currentText.length + 1));
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeoutId);
  }, [currentText, currentWordIndex, isDeleting, words, typingSpeed, deletingSpeed, delayBetweenWords]);

  return (
    <span className="inline-block min-w-[20ch]">
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default TypeWriter;