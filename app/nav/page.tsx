'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import PageLayout from '../components/PageLayout';
import Navigation from './components/Navigation';
// import MainContent from './components/MainContent';

export default function NavPage() {
  useEffect(() => {
    // All hamburger menu styles are now handled in globals.css
    // No need for dynamic CSS injection

    // Load external scripts
    const loadScript = (src: string) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
      });
    };

    // Load all required scripts in sequence
    const loadAllScripts = async () => {
      try {
        await loadScript('/assets/js/jquery.min.js');
        await loadScript('/assets/js/bootstrap.bundle.min.js');
        await loadScript('/assets/js/gsap.min.js');
        await loadScript('/assets/js/ScrollSmoother.js');
        await loadScript('/assets/js/gsap-scroll-to-plugin.min.js');
        await loadScript('/assets/js/gsap-scroll-trigger.min.js');
        await loadScript('/assets/js/gsap-split-text.min.js');
        await loadScript('/assets/js/jquery.nice-select.min.js');
        await loadScript('/assets/js/swiper.min.js');
        await loadScript('/assets/js/odometer.min.js');
        await loadScript('/assets/js/venobox.min.js');
        await loadScript('/assets/js/appear.min.js');
        await loadScript('/assets/js/wow.min.js');
        await loadScript('/assets/js/meanmenu.js');
        await loadScript('/assets/js/main.js');
      } catch (error) {
        console.error('Error loading scripts:', error);
      }
    };

    // Load CSS files
    const loadCSS = (href: string) => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = href;
      document.head.appendChild(link);
    };

    // Load all CSS files
    loadCSS('/assets/css/bootstrap.min.css');
    loadCSS('/assets/css/font-awesome-pro.min.css');
    loadCSS('/assets/css/animate.min.css');
    loadCSS('/assets/css/bexon-icons.css');
    loadCSS('/assets/css/nice-select.css');
    loadCSS('/assets/css/swiper.min.css');
    loadCSS('/assets/css/venobox.min.css');
    loadCSS('/assets/css/odometer-theme-default.css');
    loadCSS('/assets/css/meanmenu.css');
    loadCSS('/assets/css/main.css');

    loadAllScripts();

    // No cleanup needed since we removed dynamic CSS injection
  }, []);

  return (
    <>
      <div className="body-overlay"></div>

      {/* back to top start */}
      <div id="tj-back-to-top"><span id="tj-back-to-top-percentage"></span></div>
      {/* back to top end */}

      {/* start: Search Popup */}
      <div className="search-popup-overlay"></div>
      {/* end: Search Popup */}

      {/* Hamburger menu is now handled globally by layout.tsx */}
      {/* Hamburger menu content removed - using global OffcanvasMenu.tsx instead */}

      <Navigation />

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main id="primary" className="site-main">
            <div className="top-space-15"></div>
            
            {/* start: Banner Slider */}
            <section className="tj-slider-section">
              <div className="swiper hero-slider">
                <div className="swiper-wrapper">
                  <div className="swiper-slide tj-slider-item">
                    <div className="slider-bg-image" data-bg-image="/assets/images/hero/slider-1.webp"></div>
                    <div className="container">
                      <div className="slider-wrapper">
                        <div className="slider-content">
                          <h1 className="slider-title">Leading Future for <span>Education.</span></h1>
                          <div className="slider-desc">J.K.K. Nataraja College of Arts and Science - Empowering students with quality education and innovative learning experiences.</div>
                          <div className="slider-btn">
                            <Link className="tj-primary-btn" href="/contact">
                              <span className="btn-text"><span>Get Started</span></span>
                              <span className="btn-icon"><i className="tji-arrow-right-long"></i></span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide tj-slider-item">
                    <div className="slider-bg-image" data-bg-image="/assets/images/hero/slider-2.webp"></div>
                    <div className="container">
                      <div className="slider-wrapper">
                        <div className="slider-content">
                          <h1 className="slider-title">Excellence in <span>Learning.</span></h1>
                          <div className="slider-desc">Committed to delivering innovative education that drives success. With a focus on quality and student development.</div>
                          <div className="slider-btn">
                            <Link className="tj-primary-btn" href="/contact">
                              <span className="btn-text"><span>Learn More</span></span>
                              <span className="btn-icon"><i className="tji-arrow-right-long"></i></span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide tj-slider-item">
                    <div className="slider-bg-image" data-bg-image="/assets/images/hero/slider-3.webp"></div>
                    <div className="container">
                      <div className="slider-wrapper">
                        <div className="slider-content">
                          <h1 className="slider-title">Building Future <span>Leaders.</span></h1>
                          <div className="slider-desc">Nurturing talent and fostering innovation through comprehensive academic programs and research opportunities.</div>
                          <div className="slider-btn">
                            <Link className="tj-primary-btn" href="/contact">
                              <span className="btn-text"><span>Join Us</span></span>
                              <span className="btn-icon"><i className="tji-arrow-right-long"></i></span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hero-navigation d-inline-flex wow fadeIn" data-wow-delay="1.5s">
                  <div className="slider-prev">
                    <span className="anim-icon">
                      <i className="tji-arrow-left"></i>
                      <i className="tji-arrow-left"></i>
                    </span>
                  </div>
                  <div className="slider-next">
                    <span className="anim-icon">
                      <i className="tji-arrow-right"></i>
                      <i className="tji-arrow-right"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div className="swiper hero-thumb wow fadeIn" data-wow-delay="2s">
                <div className="swiper-wrapper">
                  <div className="swiper-slide thumb-item">
                    <Image src="/assets/images/hero/slider-thumb-1.webp" alt="Thumbnail" width={400} height={300} style={{ width: "100%", height: "auto" }} />
                  </div>
                  <div className="swiper-slide thumb-item">
                    <Image src="/assets/images/hero/slider-thumb-2.webp" alt="Thumbnail" width={400} height={300} style={{ width: "100%", height: "auto" }} />
                  </div>
                  <div className="swiper-slide thumb-item">
                    <Image src="/assets/images/hero/slider-thumb-3.webp" alt="Thumbnail" width={400} height={300} style={{ width: "100%", height: "auto" }} />
                  </div>
                </div>
              </div>
              <div className="circle-text-wrap wow fadeInUp" data-wow-delay="1s">
                <span className="circle-text" data-bg-image="/assets/images/hero/circle-text.webp"></span>
                <Link className="circle-icon" href="/programmes"><i className="tji-arrow-down-big"></i></Link>
              </div>
            </section>
            {/* end: Banner Slider */}

            {/* Main content sections */}
            <section className="tj-client-section section-top-gap">
              <div className="container-fluid client-container">
                <div className="row">
                  <div className="col-12">
                    <div className="client-content style-2 wow fadeIn" data-wow-delay=".3s">
                      <h5 className="sec-title">Join Over <span className="client-numbers">1000+</span> Students with
                        <span className="client-text">J.K.K. Nataraja College</span> Here
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
}


