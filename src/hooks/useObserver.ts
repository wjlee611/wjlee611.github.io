import { RefObject, useEffect, useState } from "react";

interface IuseObserver {
  ref?: RefObject<HTMLElement>;
  threshold?: number;
}

export default function useObserver({ ref, threshold = 0.1 }: IuseObserver) {
  const [isIntersect, setIsIntersect] = useState(false);

  useEffect(() => {
    let observer: IntersectionObserver;
    if (ref) {
      observer = new IntersectionObserver(
        ([e]) => {
          if (e.isIntersecting) {
            setIsIntersect(true);
          } else {
            setIsIntersect(false);
          }
        },
        {
          rootMargin: "1000% 0px 0px 0px",
          threshold: threshold,
        }
      );

      observer.observe(ref.current as Element);
    }

    return () => {
      observer.disconnect();
    };
  }, [ref, threshold]);

  return isIntersect;
}
