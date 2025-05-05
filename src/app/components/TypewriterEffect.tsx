"use client";

import { useCallback, useEffect, useState } from "react";

/**
 * A dynamic typewriter effect component that cycles through an array of phrases.
 *
 * @component
 * @param {Object} props - The component properties
 * @param {string[]} props.phrases - An array of phrases to cycle through
 * @param {number} [props.typingSpeed=100] - Milliseconds between each character typed
 * @param {number} [props.deletingSpeed=50] - Milliseconds between each character deleted
 * @param {number} [props.pauseBetweenPhrases=2000] - Milliseconds to pause between typing and deleting
 * @param {number} [props.iterations=Infinity] - Number of times to cycle through all phrases
 *
 * @example
 * <TypewriterEffect
 *   phrases={["Developer", "Designer", "Creator"]}
 *   typingSpeed={50}
 *   iterations={2}
 * />
 *
 * @returns {React.ReactElement} A span element with the current phrase and optional cursor
 */
interface TypewriterEffectProps {
  phrases: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseBetweenPhrases?: number;
  iterations?: number;
}

export const TypewriterEffect: React.FC<TypewriterEffectProps> = ({
  phrases,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseBetweenPhrases = 2000,
  iterations = Infinity,
}) => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [iterationCount, setIterationCount] = useState(0);

  const handleTyping = useCallback(() => {
    const currentPhrase = phrases[currentPhraseIndex];
    const isLastPhrase = currentPhraseIndex === phrases.length - 1;
    const isLastIteration = iterationCount === iterations - 1;

    if (!isDeleting) {
      // Typing
      if (currentText.length < currentPhrase.length) {
        setCurrentText(currentPhrase.substring(0, currentText.length + 1));
      } else {
        // Finished typing, start pause before deleting
        if (isLastPhrase && isLastIteration) {
          // Stop at the last phrase of the last iteration
          setIterationCount(iterations);
          return;
        }
        setTimeout(() => setIsDeleting(true), pauseBetweenPhrases);
      }
    } else {
      // Deleting
      if (currentText.length > 0) {
        setCurrentText(currentText.substring(0, currentText.length - 1));
      } else {
        // Finished deleting
        setIsDeleting(false);

        // Move to next phrase
        const nextIndex = (currentPhraseIndex + 1) % phrases.length;
        setCurrentPhraseIndex(nextIndex);

        // Check iteration count
        if (nextIndex === 0) {
          setIterationCount((prev) => prev + 1);
        }
      }
    }
  }, [
    currentText,
    currentPhraseIndex,
    isDeleting,
    phrases,
    pauseBetweenPhrases,
    iterationCount,
    iterations,
  ]);

  const isFinished = iterationCount >= iterations;

  useEffect(() => {
    // Stop if we've reached the maximum iterations
    if (isFinished) return;

    // Determine speed based on typing or deleting
    const speed = isDeleting ? deletingSpeed : typingSpeed;

    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [
    handleTyping,
    isDeleting,
    typingSpeed,
    deletingSpeed,
    iterationCount,
    iterations,
    isFinished,
  ]);

  return (
    <span className="typewriter-effect">
      {currentText}
      {!isFinished && (
        <span className="ml-1 animate-pulse border-l-2 border-current"></span>
      )}
    </span>
  );
};
