/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Language } from '../../data/translations';

interface TypewriterHeroHeadlineProps {
  lang: Language;
}

export const TypewriterHeroHeadline: React.FC<TypewriterHeroHeadlineProps> = ({ lang }) => {
  const isAr = lang === 'ar';
  // Strictly "Yousef Waleed" in English, and "يوسف وليد" in Arabic without extra additions
  const targetText = isAr ? 'يوسف وليد' : 'Yousef Waleed';

  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  // Reset immediately if language changes
  useEffect(() => {
    setDisplayedText('');
    setIsDeleting(false);
    setIsPaused(false);
  }, [lang]);

  useEffect(() => {
    if (isPaused) {
      // Pause at full name before starting to delete
      const pauseTimer = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, 2200);
      return () => clearTimeout(pauseTimer);
    }

    if (!isDeleting) {
      // Typing phase:
      if (displayedText.length < targetText.length) {
        const nextChar = targetText.slice(0, displayedText.length + 1);
        const timer = setTimeout(() => {
          setDisplayedText(nextChar);
        }, 110);
        return () => clearTimeout(timer);
      } else {
        // Fully written, pause
        setIsPaused(true);
      }
    } else {
      // Deleting phase:
      if (displayedText.length > 0) {
        const nextChar = targetText.slice(0, displayedText.length - 1);
        const timer = setTimeout(() => {
          setDisplayedText(nextChar);
        }, 65);
        return () => clearTimeout(timer);
      } else {
        // Fully deleted, pause briefly before retyping
        const pauseBeforeRetype = setTimeout(() => {
          setIsDeleting(false);
        }, 400);
        return () => clearTimeout(pauseBeforeRetype);
      }
    }
  }, [displayedText, isDeleting, isPaused, targetText]);

  return (
    <div className="relative min-h-[3.6rem] sm:min-h-[4.5rem] lg:min-h-[5.2rem] flex items-center">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
        <span>{displayedText}</span>
        {/* Clean, classic cursor without AI-like neon colors */}
        <span
          className={`inline-block w-1 sm:w-1.5 h-8 sm:h-11 lg:h-13 bg-white/90 align-middle ${
            isAr ? 'mr-1.5' : 'ml-1.5'
          } animate-pulse`}
        />
      </h1>
    </div>
  );
};
