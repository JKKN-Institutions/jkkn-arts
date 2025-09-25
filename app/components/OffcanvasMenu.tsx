'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect } from 'react';

export default function OffcanvasMenu() {
  useEffect(() => {
    // Handle offcanvas menu functionality
    const menuBar = document.querySelector('.menu_bar');
    const offcanvasArea = document.querySelector('.tj-offcanvas-area');
    const hamburgerArea = document.querySelector('.hamburger-area');
    const closeBtns = document.querySelectorAll('.hamburger_close_btn');
    const hamburgerBg = document.querySelector('.hamburger_bg');

    const openOffcanvas = () => {
      if (window.innerWidth >= 992) {
        offcanvasArea?.classList.add('opened');
      } else {
        hamburgerArea?.classList.add('opened');
      }
      document.body.style.overflow = 'hidden';
    };

    const closeOffcanvas = () => {
      offcanvasArea?.classList.remove('opened');
      hamburgerArea?.classList.remove('opened');
      document.body.style.overflow = '';
    };

    menuBar?.addEventListener('click', openOffcanvas);
    hamburgerBg?.addEventListener('click', closeOffcanvas);
    
    closeBtns.forEach(btn => {
      btn.addEventListener('click', closeOffcanvas);
    });

    return () => {
      menuBar?.removeEventListener('click', openOffcanvas);
      hamburgerBg?.removeEventListener('click', closeOffcanvas);
      closeBtns.forEach(btn => {
        btn.removeEventListener('click', closeOffcanvas);
      });
    };
  }, []);

  return (
    <>
      {/* start: Offcanvas Menu */}
      <div className="tj-offcanvas-area d-none d-lg-block">
        <div className="hamburger_bg"></div>
        <div className="hamburger_wrapper">
          <div className="hamburger_inner">
            <div className="hamburger_top d-flex align-items-center justify-content-between">
              <div className="hamburger_logo">
                <Link href="/" className="mobile_logo">
                  <Image src="/assets/images/logos/logo-2.png" alt="Logo" width={100} height={50} />
                </Link>
              </div>
              <div className="hamburger_close">
                <button className="hamburger_close_btn" type="button">
                  <i className="fas fa-times"></i>
                </button>
              </div>
            </div>
            <div className="offcanvas-text">
              <p>Developing personalized customer journeys to increase satisfaction & loyalty of our expansion recognized by industry leaders.</p>
            </div>
            <div className="hamburger-search-area">
              <h5 className="hamburger-title">Search Now!</h5>
              <div className="hamburger_search">
                <form method="get" action="/">
                  <button type="submit">
                    <i className="fas fa-search"></i>
                  </button>
                  <input type="search" autoComplete="off" name="s" defaultValue="" placeholder="Search here..." />
                </form>
              </div>
            </div>
            <div className="hamburger-infos">
              <h5 className="hamburger-title">Contact Info</h5>
              <div className="contact-info">
                <div className="contact-item" style={{marginBottom: '20px'}}>
                  <span className="subtitle" style={{display: 'block', color: '#1e8a8a', fontWeight: '600', marginBottom: '8px', fontSize: '14px'}}>Phone</span>
                  <a className="contact-link" href="tel:04288234423" style={{color: '#364e52', textDecoration: 'none', fontSize: '16px', fontWeight: '500'}}>04288-234423</a>
                </div>
                <div className="contact-item" style={{marginBottom: '20px'}}>
                  <span className="subtitle" style={{display: 'block', color: '#1e8a8a', fontWeight: '600', marginBottom: '8px', fontSize: '14px'}}>Email</span>
                  <a className="contact-link" href="mailto:info@jkkn.ac.in" style={{color: '#364e52', textDecoration: 'none', fontSize: '16px', fontWeight: '500'}}>info@jkkn.ac.in</a>
                </div>
                <div className="contact-item" style={{marginBottom: '20px'}}>
                  <span className="subtitle" style={{display: 'block', color: '#1e8a8a', fontWeight: '600', marginBottom: '8px', fontSize: '14px'}}>Location</span>
                  <span className="contact-link" style={{color: '#364e52', lineHeight: '1.6', fontSize: '16px'}}>Komarapalayam, Namakkal District, Tamil Nadu - 638183</span>
                </div>
              </div>
            </div>
          </div>
          <div className="hamburger-socials">
            <h5 className="hamburger-title">Follow Us</h5>
            <div className="social-links style-3">
              <ul style={{display: 'flex', gap: '15px', listStyle: 'none', padding: 0, margin: 0}}>
                <li>
                  <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', backgroundColor: '#1e8a8a', color: 'white', borderRadius: '50%', textDecoration: 'none', transition: 'all 0.3s ease'}}>
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', backgroundColor: '#1e8a8a', color: 'white', borderRadius: '50%', textDecoration: 'none', transition: 'all 0.3s ease'}}>
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="https://x.com/" target="_blank" rel="noopener noreferrer" style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', backgroundColor: '#1e8a8a', color: 'white', borderRadius: '50%', textDecoration: 'none', transition: 'all 0.3s ease'}}>
                    <i className="fa-brands fa-x-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', backgroundColor: '#1e8a8a', color: 'white', borderRadius: '50%', textDecoration: 'none', transition: 'all 0.3s ease'}}>
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* end: Offcanvas Menu */}

      {/* start: Mobile Hamburger Menu */}
      <div className="hamburger-area d-lg-none">
        <div className="hamburger_bg"></div>
        <div className="hamburger_wrapper">
          <div className="hamburger_inner">
            <div className="hamburger_top d-flex align-items-center justify-content-between">
              <div className="hamburger_logo">
                <Link href="/" className="mobile_logo">
                  <Image src="/assets/images/logos/logo-2.png" alt="Logo" width={100} height={50} />
                </Link>
              </div>
              <div className="hamburger_close">
                <button className="hamburger_close_btn" type="button">
                  <i className="fas fa-times"></i>
                </button>
              </div>
            </div>
            <div className="hamburger-search-area">
              <h5 className="hamburger-title">Search Now!</h5>
              <div className="hamburger_search">
                <form method="get" action="/">
                  <button type="submit">
                    <i className="fas fa-search"></i>
                  </button>
                  <input type="search" autoComplete="off" name="s" defaultValue="" placeholder="Search here..." />
                </form>
              </div>
            </div>
            <div className="hamburger_menu">
              <div className="mobile_menu">
                {/* Mobile navigation menu will be populated by meanmenu.js */}
              </div>
            </div>
            <div className="hamburger-infos">
              <h5 className="hamburger-title">Contact Info</h5>
              <div className="contact-info">
                <div className="contact-item" style={{marginBottom: '20px'}}>
                  <span className="subtitle" style={{display: 'block', color: '#1e8a8a', fontWeight: '600', marginBottom: '8px', fontSize: '14px'}}>Phone</span>
                  <a className="contact-link" href="tel:04288234423" style={{color: '#364e52', textDecoration: 'none', fontSize: '16px', fontWeight: '500'}}>04288-234423</a>
                </div>
                <div className="contact-item" style={{marginBottom: '20px'}}>
                  <span className="subtitle" style={{display: 'block', color: '#1e8a8a', fontWeight: '600', marginBottom: '8px', fontSize: '14px'}}>Email</span>
                  <a className="contact-link" href="mailto:info@jkkn.ac.in" style={{color: '#364e52', textDecoration: 'none', fontSize: '16px', fontWeight: '500'}}>info@jkkn.ac.in</a>
                </div>
                <div className="contact-item" style={{marginBottom: '20px'}}>
                  <span className="subtitle" style={{display: 'block', color: '#1e8a8a', fontWeight: '600', marginBottom: '8px', fontSize: '14px'}}>Location</span>
                  <span className="contact-link" style={{color: '#364e52', lineHeight: '1.6', fontSize: '16px'}}>Komarapalayam, Namakkal District, Tamil Nadu - 638183</span>
                </div>
              </div>
            </div>
          </div>
          <div className="hamburger-socials">
            <h5 className="hamburger-title">Follow Us</h5>
            <div className="social-links style-3">
              <ul style={{display: 'flex', gap: '15px', listStyle: 'none', padding: 0, margin: 0}}>
                <li>
                  <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', backgroundColor: '#1e8a8a', color: 'white', borderRadius: '50%', textDecoration: 'none', transition: 'all 0.3s ease'}}>
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', backgroundColor: '#1e8a8a', color: 'white', borderRadius: '50%', textDecoration: 'none', transition: 'all 0.3s ease'}}>
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="https://x.com/" target="_blank" rel="noopener noreferrer" style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', backgroundColor: '#1e8a8a', color: 'white', borderRadius: '50%', textDecoration: 'none', transition: 'all 0.3s ease'}}>
                    <i className="fa-brands fa-x-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', backgroundColor: '#1e8a8a', color: 'white', borderRadius: '50%', textDecoration: 'none', transition: 'all 0.3s ease'}}>
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* end: Mobile Hamburger Menu */}
    </>
  );
}