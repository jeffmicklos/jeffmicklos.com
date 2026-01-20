import { useEffect, useState } from 'react';

function sample(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

export default function TextChanger({ children, options }) {
  const [currentOption, setCurrentOption] = useState(children);

  useEffect(() => {
    const timeoutId = setInterval(() => {
      setCurrentOption(sample(options));
    }, 3000);

    return () => {
      clearInterval(timeoutId);
    };
  }, []);

  return currentOption;
}
