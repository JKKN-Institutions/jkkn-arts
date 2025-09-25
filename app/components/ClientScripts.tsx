'use client';

import { useEffect } from 'react';

export default function ClientScripts() {
  useEffect(() => {
    // Initialize scripts after component mounts on client
    const initializeScripts = () => {
      // Add no-js/js class handling
      if (typeof document !== 'undefined') {
        document.documentElement.classList.remove('no-js');
        document.documentElement.classList.add('js');
        
        // Hide preloader if it exists (since it's commented out in layout)
        const preloader = document.querySelector('.tj-preloader') as HTMLElement;
        if (preloader) {
          preloader.style.display = 'none';
        }
        
        // Ensure body doesn't get unexpected styles
        document.body.removeAttribute('style');
        
        // Initialize animations manually if main.js hasn't done it
        if (typeof window !== 'undefined') {
          // Initialize meanmenu as fallback
          const initMeanMenuFallback = () => {
            const $ = (window as unknown as { jQuery: any }).jQuery;
            if ($ && $.fn.meanmenu && $('#mobile-menu').length > 0) {
              try {
                $('#mobile-menu').meanmenu({
                  meanMenuContainer: '.mobile_menu',
                  meanScreenWidth: '991',
                  meanExpand: ['<i class="fas fa-chevron-down"></i>'],
                });
              } catch (error) {
                console.warn('Meanmenu fallback initialization failed:', error);
              }
            }
          };
          
          // Initialize WOW.js if available
          const windowWithWOW = window as unknown as { WOW?: new () => { init(): void } };
          if (windowWithWOW.WOW && document.querySelectorAll('.wow').length > 0) {
            new windowWithWOW.WOW().init();
          }
          
          // Initialize meanmenu with a delay to ensure all scripts are loaded
          setTimeout(initMeanMenuFallback, 2000);
          
          // Initialize GSAP animations if available
          const windowWithGSAP = window as unknown as { 
            gsap?: any; 
            ScrollTrigger?: any; 
          };
          if (windowWithGSAP.gsap && windowWithGSAP.ScrollTrigger) {
            const gsap = windowWithGSAP.gsap;
            const ScrollTrigger = windowWithGSAP.ScrollTrigger;
            
            // Refresh ScrollTrigger
            ScrollTrigger.refresh();
            
            // Re-initialize fade-in animations for service section
            const fadeElements = document.querySelectorAll('.tj-fadein-right-on-scroll');
            if (fadeElements.length > 0) {
              fadeElements.forEach((element: Element) => {
                gsap.set(element, {
                  xPercent: 40,
                  opacity: 0,
                });
                gsap.to(element, {
                  xPercent: 0,
                  opacity: 1,
                  duration: 1,
                  scrollTrigger: {
                    trigger: element,
                    start: 'top 80%',
                    end: 'bottom 20%',
                    toggleActions: 'play none none reverse',
                    markers: false,
                  },
                });
              });
            }
          }
        }
      }
    };

    // Run after scripts are loaded
    const timer = setTimeout(initializeScripts, 1500);
    
    // Also run on scroll as a fallback
    const handleScroll = () => {
      const fadeElements = document.querySelectorAll('.tj-fadein-right-on-scroll');
      fadeElements.forEach((element: Element) => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isVisible) {
          (element as HTMLElement).style.opacity = '1';
          (element as HTMLElement).style.transform = 'translateX(0)';
          (element as HTMLElement).style.transition = 'all 0.6s ease-out';
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    // Trigger once on load
    setTimeout(handleScroll, 100);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return null; // This component doesn't render anything
}
