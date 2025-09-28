'use client';

import { useEffect, useRef } from 'react';
import Script from 'next/script';

export default function CharlieAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animation: any = null;
    const initAnimation = () => {
      if (containerRef.current && (window as any).lottie) {
        animation = (window as any).lottie.loadAnimation({
          container: containerRef.current,
          renderer: 'svg',
          loop: true,
          autoplay: true,
          path: '/animations/Charlie.json'
        });
      }
    };

    if ((window as any).lottie) {
      initAnimation();
    }

    return () => {
      if (animation) {
        animation.destroy();
      }
    };
  }, []);

  return (
    <>
      <Script 
        src="https://cdnjs.cloudflare.com/ajax/libs/lottie-web/5.12.2/lottie.min.js"
        strategy="beforeInteractive"
      />
      <div className="absolute right-[-150px] bottom-[-50px] w-[200px] z-10">
        <div ref={containerRef} style={{ width: '100%', height: '100%' }}></div>
      </div>
    </>
  );
}