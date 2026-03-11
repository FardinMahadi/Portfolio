import { useEffect, useState } from 'react';

export function useTypewriter(words: readonly string[]) {
  const [index, setIndex] = useState(0);
  const [display, setDisplay] = useState('');
  const [typing, setTyping] = useState(true);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const target = words[index];
    let i = 0;
    let timeout: ReturnType<typeof setTimeout>;

    if (typing) {
      const type = () => {
        if (i <= target.length) {
          setDisplay(target.slice(0, i++));
          timeout = setTimeout(type, 60);
        } else {
          timeout = setTimeout(() => setTyping(false), 1800);
        }
      };
      type();
    } else {
      let j = target.length;
      const erase = () => {
        if (j >= 0) {
          setDisplay(target.slice(0, j--));
          timeout = setTimeout(erase, 35);
        } else {
          setIndex(prev => (prev + 1) % words.length);
          setTyping(true);
        }
      };
      erase();
    }

    return () => clearTimeout(timeout);
  }, [index, typing, words]);

  useEffect(() => {
    const id = setInterval(() => setBlink(b => !b), 550);
    return () => clearInterval(id);
  }, []);

  return { display, blink };
}
