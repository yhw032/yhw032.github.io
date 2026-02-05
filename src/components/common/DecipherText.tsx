import { useState, useEffect } from 'react';

const GLYPHS = "01ABCDEFGH_JKLMNOPQRSTUVWXYZ<>{}[]$%-+*";

interface DecipherTextProps {
  text: string;
  delay?: number;
}

export function DecipherText({ text, delay = 0 }: DecipherTextProps) {
  const [displayText, setDisplayText] = useState(() =>
    text.split("").map(c => c === " " ? " " : GLYPHS[Math.floor(Math.random() * GLYPHS.length)]).join("")
  );

  useEffect(() => {
    let iteration = 0;
    let interval: ReturnType<typeof setInterval>;

    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        setDisplayText(
          text.split("")
            .map((char, index) => {
              if (index < iteration) return char;
              if (char === " ") return " ";
              return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
            })
            .join("")
        );

        if (iteration >= text.length) {
          clearInterval(interval);
        }
        iteration += 1 / 3;
      }, 30);
    }, delay * 1000);

    return () => {
      clearTimeout(timeout);
      if (interval) clearInterval(interval);
    };
  }, [text, delay]);

  return <>{displayText}</>;
}
