'use client';

import React, { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';

interface PageLayoutProps {
  children: React.ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  useEffect(() => {
    // Handle page navigation and image loading issues
    const handlePageLoad = () => {
      // Force refresh of images and animations after navigation
      const images = document.querySelectorAll('img');
      images.forEach((img) => {
        // Force image reload if it failed to load
        if (!img.complete || img.naturalHeight === 0) {
          const src = img.src;
          img.src = '';
          img.src = src;
        }
      });

      // Re-initialize background images
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

      // Re-initialize Swiper sliders
      const initializeSwiper = () => {
        const windowWithSwiper = window as unknown as { Swiper?: any };
        if (windowWithSwiper.Swiper) {
          // Initialize marquee slider
          if (document.querySelector('.marquee-slider')) {
            try {
              const existingSlider = document.querySelector('.marquee-slider') as any;
              if (existingSlider && existingSlider.swiper) {
                existingSlider.swiper.destroy(true, true);
              }
              
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

          // Initialize hero slider
          if (document.querySelector('.hero-slider')) {
            try {
              const existingSlider = document.querySelector('.hero-slider') as any;
              if (existingSlider && existingSlider.swiper) {
                existingSlider.swiper.destroy(true, true);
              }
              
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
        }
      };

      // Re-initialize WOW.js animations
      const windowWithWOW = window as unknown as { WOW?: new () => { init(): void } };
      if (windowWithWOW.WOW) {
        try {
          new windowWithWOW.WOW().init();
        } catch (error) {
          console.warn('WOW.js re-initialization failed:', error);
        }
      }

      // Re-initialize GSAP ScrollTrigger
      const windowWithGSAP = window as unknown as { 
        gsap?: any; 
        ScrollTrigger?: any; 
      };
      if (windowWithGSAP.gsap && windowWithGSAP.ScrollTrigger) {
        try {
          windowWithGSAP.ScrollTrigger.refresh();
        } catch (error) {
          console.warn('ScrollTrigger refresh failed:', error);
        }
      }

      // Run all initializations
      initializeBackgroundImages();
      setTimeout(initializeSwiper, 200);
    };

    // Run immediately
    handlePageLoad();

    // Also run after a short delay to catch any delayed content
    const timeoutId = setTimeout(handlePageLoad, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [children]); // Re-run when children change (page navigation)
  return (
    <>
      <Header />
      
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main id="primary" className="site-main">
            {children}
          </main>

          {/* Circular Scroll Progress Indicator */}
          <div className="scroll-progress-container">
            <div className="scroll-progress-circle">
              <svg className="progress-ring" width="60" height="60">
                <circle
                  className="progress-ring-circle"
                  stroke="#1e8a8a"
                  strokeWidth="3"
                  fill="transparent"
                  r="25"
                  cx="30"
                  cy="30"
                />
              </svg>
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
}
