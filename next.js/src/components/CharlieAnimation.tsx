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

    // Check if lottie is already loaded
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
Ecmascript file had an error

./src/components/Features.tsx (3:1)

Ecmascript file had an error
  1 | import CharlieAnimation from './CharlieAnimation';
  2 |
> 3 | 'use client';
    | ^^^^^^^^^^^^^
  4 |
  5 | import CharlieAnimation from './CharlieAnimation';
  6 |

The "use client" directive must be placed before other expressions. Move it to the top of the file to resolve this issue.

Import trace:
  Server Component:
    ./src/components/Features.tsx
    ./src/app/page.tsx