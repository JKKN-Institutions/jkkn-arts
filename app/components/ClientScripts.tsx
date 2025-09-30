'use client';

import { useEffect } from 'react';

export default function ClientScripts() {
  useEffect(() => {
    // Initialize scripts after component mounts on client
    const initializeScripts = () => {
      // Force image loading on navigation
      const forceImageLoad = () => {
        const images = document.querySelectorAll('img[data-src], img:not([src]), img[src=""]');
        images.forEach((img: Element) => {
          const imgElement = img as HTMLImageElement;
          const dataSrc = imgElement.getAttribute('data-src');
          if (dataSrc && !imgElement.src) {
            imgElement.src = dataSrc;
          }
        });

        // Check for broken images and reload them
        const allImages = document.querySelectorAll('img');
        allImages.forEach((img: Element) => {
          const imgElement = img as HTMLImageElement;
          if (imgElement.complete && imgElement.naturalHeight === 0) {
            const originalSrc = imgElement.src;
            imgElement.src = '';
            setTimeout(() => {
              imgElement.src = originalSrc;
            }, 100);
          }
        });
      };

      // Run image loading fix
      forceImageLoad();
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
          
          // Initialize marquee slider (Swiper)
          const initializeMarqueeSlider = () => {
            const windowWithSwiper = window as unknown as { Swiper?: any };
            if (windowWithSwiper.Swiper && document.querySelector('.marquee-slider')) {
              try {
                // Destroy existing marquee slider if it exists
                const existingSlider = document.querySelector('.marquee-slider') as any;
                if (existingSlider && existingSlider.swiper) {
                  existingSlider.swiper.destroy(true, true);
                }
                
                // Initialize new marquee slider
                new windowWithSwiper.Swiper(".marquee-slider", {
                  slidesPerView: "auto",
                  spaceBetween: 0,
                  freemode: true,
                  centeredSlides: true,
                  loop: true,
                  speed: 3000,
                  allowTouchMove: false,
                  autoplay: {
                    delay: 1,
                    disableOnInteraction: true,
                  },
                });
              } catch (error) {
                console.warn('Marquee slider initialization failed:', error);
              }
            }
          };

          // Initialize hero slider (Swiper)
          const initializeHeroSlider = () => {
            const windowWithSwiper = window as unknown as { Swiper?: any };
            if (windowWithSwiper.Swiper && document.querySelector('.hero-slider')) {
              try {
                // Destroy existing hero slider if it exists
                const existingSlider = document.querySelector('.hero-slider') as any;
                if (existingSlider && existingSlider.swiper) {
                  existingSlider.swiper.destroy(true, true);
                }
                
                // Initialize new hero slider
                new windowWithSwiper.Swiper(".hero-slider", {
                  slidesPerView: 1,
                  spaceBetween: 0,
                  loop: true,
                  speed: 1500,
                  autoplay: {
                    delay: 5000,
                    disableOnInteraction: false,
                  },
                  pagination: {
                    el: ".hero-pagination",
                    clickable: true,
                  },
                  navigation: {
                    nextEl: ".hero-next",
                    prevEl: ".hero-prev",
                  },
                });
              } catch (error) {
                console.warn('Hero slider initialization failed:', error);
              }
            }
          };

          // Initialize background images
          const initializeBackgroundImages = () => {
            const $ = (window as unknown as { jQuery?: any }).jQuery;
            if ($) {
              try {
                $("[data-bg-image]").each(function() {
                  const $this = $(this);
                  const $image = $this.data("bg-image");
                  if ($image) {
                    $this.css("background-image", "url(" + $image + ")");
                  }
                });
              } catch (error) {
                console.warn('Background image initialization failed:', error);
              }
            } else {
              // Fallback without jQuery
              const bgElements = document.querySelectorAll('[data-bg-image]');
              bgElements.forEach((element: Element) => {
                const bgImage = element.getAttribute('data-bg-image');
                if (bgImage) {
                  (element as HTMLElement).style.backgroundImage = `url(${bgImage})`;
                }
              });
            }
          };

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

          // Run all initializations
          setTimeout(() => {
            initializeBackgroundImages();
            initializeMarqueeSlider();
            initializeHeroSlider();
          }, 100);
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

    // Add navigation event listener to handle page changes
    const handleNavigation = () => {
      setTimeout(() => {
        initializeScripts();
        handleScroll();
      }, 100);
    };

    // Listen for popstate (back/forward navigation)
    window.addEventListener('popstate', handleNavigation);
    
    // Listen for page visibility changes (when returning to tab)
    document.addEventListener('visibilitychange', () => {
      if (!document.hidden) {
        setTimeout(initializeScripts, 200);
      }
    });
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('popstate', handleNavigation);
    };
  }, []);

  return null; // This component doesn't render anything
}
