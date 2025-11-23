import { useEffect } from 'react';

let lockCount = 0;

export const useLockedBody = (locked: boolean) => {
  useEffect(() => {
    if (!locked) {
      return;
    }

    const originalOverflow = document.body.style.overflow;

    if (lockCount === 0) {
      (document.body as HTMLBodyElement).dataset.prevOverflow = originalOverflow;
      document.body.style.overflow = 'hidden';
    }

    lockCount += 1;

    return () => {
      lockCount -= 1;

      if (lockCount === 0) {
        const prev = (document.body as HTMLBodyElement).dataset.prevOverflow;
        if (prev !== undefined) {
          document.body.style.overflow = prev;
          delete (document.body as HTMLBodyElement).dataset.prevOverflow;
        } else {
          document.body.style.overflow = '';
        }
      }
    };
  }, [locked]);
};
