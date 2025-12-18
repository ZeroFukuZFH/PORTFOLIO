import { useEffect, useState, useRef, RefObject} from "react";

export default function useOnScreen(ref:RefObject<null>) {
  const [isOnScreen, setIsOnScreen] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const threshold  : number = 0.25
  useEffect(() => {
    observerRef.current = new IntersectionObserver(([entry]) =>
      setIsOnScreen(entry?.isIntersecting ?? false),
      {threshold}
    );
  }, []);

   useEffect(() => {
    const observer = observerRef.current;
    const element = ref.current;

    if (observer && element) {
      observer.observe(element);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
    
  }, [ref]);

  return isOnScreen;
}
