import { useState, useEffect } from "react";

export const useOnScreen = (ref) => {
  const [isOnScreen, setIsOnScreen] = useState(false);

  const observer = new IntersectionObserver(
    ([entry]) => {
      // console.log(entry.current)
      setIsOnScreen(entry.isIntersecting);
    },
    {
      // "isIntersecting: true" executes at 70% of the section
      threshold: 0.7,
    }
  );

  useEffect(() => {
    observer.observe(ref.current);

    return () => observer.disconnect();
  });

  return isOnScreen;
};
