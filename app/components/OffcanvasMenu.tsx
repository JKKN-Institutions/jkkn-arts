  'use client';

  import Link from 'next/link';
  import Image from 'next/image';
  import { useEffect } from 'react';

  export default function OffcanvasMenu() {
    useEffect(() => {
      // Handle mobile menu dropdown functionality
      const handleDropdownClick = (e: Event) => {
        e.preventDefault();
        const target = e.currentTarget as HTMLElement;
        const parentLi = target.closest('li');
        const subMenu = parentLi?.querySelector('.sub-menu');
        
        if (parentLi && subMenu) {
          // Toggle the current dropdown
          parentLi.classList.toggle('open');
          subMenu.classList.toggle('show');
          
          // Close other dropdowns at the same level
          const siblings = parentLi.parentElement?.children;
          if (siblings) {
            Array.from(siblings).forEach((sibling) => {
              if (sibling !== parentLi && sibling.classList.contains('has-dropdown')) {
                sibling.classList.remove('open');
                const siblingSubMenu = sibling.querySelector('.sub-menu');
                if (siblingSubMenu) {
                  siblingSubMenu.classList.remove('show');
                }
              }
            });
          }
        }
      };

      // Add click listeners to dropdown links
      const dropdownLinks = document.querySelectorAll('.mobile-menu-list .has-dropdown > a');
      dropdownLinks.forEach(link => {
        link.addEventListener('click', handleDropdownClick);
      });

      // Cleanup
      return () => {
        dropdownLinks.forEach(link => {
          link.removeEventListener('click', handleDropdownClick);
        });
      };
    }, []);

    return (
      <>
        {/* start: Mobile Hamburger Menu */}
        <div className="hamburger-area">
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
              
              <div className="hamburger_menu">
                <div className="mobile_menu">
                  <nav className="mobile-nav">
                    <ul className="mobile-menu-list">
                      <li>
                        <Link href="/"><i className="fas fa-home me-2"></i>Home</Link>
                      </li>
                      <li className="has-dropdown">
                        <Link href="#"><i className="fas fa-info-circle me-2"></i>About <i className="fas fa-chevron-down ms-1"></i></Link>
                        <ul className="sub-menu">
                          <li><Link href="/vision-mission"><i className="fas fa-eye me-2"></i>Our Vision and Mission</Link></li>
                          <li><Link href="/about/trust"><i className="fas fa-handshake me-2"></i>Our Trust</Link></li>
                          <li><Link href="/about/management"><i className="fas fa-users me-2"></i>Our Management</Link></li>
                          <li><Link href="/about/college"><i className="fas fa-university me-2"></i>Our College</Link></li>
                        </ul>
                      </li>
                      <li className="has-dropdown">
                        <Link href="/programmes"><i className="fas fa-graduation-cap me-2"></i>Programmes Offered <i className="fas fa-chevron-down ms-1"></i></Link>
                        <ul className="sub-menu">
                          <li><Link href="/programmes/aided">Aided</Link></li>
                          <li><Link href="/programmes/self-finance">Self Finance</Link></li>
                        </ul>
                      </li>
                      <li className="has-dropdown">
                        <Link href="/departments"><i className="fas fa-building me-2"></i>Department <i className="fas fa-chevron-down ms-1"></i></Link>
                        <ul className="sub-menu">
                          <li><Link href="/departments/aided">Aided</Link></li>
                          <li><Link href="/departments/self-finance">Self Finance</Link></li>
                        </ul>
                      </li>
                      <li className="has-dropdown">
                        <Link href="/facilities"><i className="fas fa-tools me-2"></i>Facilities <i className="fas fa-chevron-down ms-1"></i></Link>
                        <ul className="sub-menu">
                          <li><Link href="/facilities/lab"><i className="fas fa-flask me-2"></i>Labs</Link></li>
                          <li><Link href="/facilities/library"><i className="fas fa-book me-2"></i>Library</Link></li>
                          <li><Link href="/facilities/classroom"><i className="fas fa-chalkboard me-2"></i>Class Room</Link></li>
                          <li><Link href="/facilities/seminar-hall"><i className="fas fa-presentation-screen me-2"></i>Seminar Hall</Link></li>
                          <li><Link href="/facilities/hostel"><i className="fas fa-bed me-2"></i>Hostel</Link></li>
                          <li><Link href="/facilities/sports-club"><i className="fas fa-running me-2"></i>Sports Club</Link></li>
                          <li><Link href="/facilities/auditorium"><i className="fas fa-theater-masks me-2"></i>Auditorium</Link></li>
                          <li><Link href="/facilities/ambulance-services"><i className="fas fa-ambulance me-2"></i>Ambulance Services</Link></li>
                          <li><Link href="/facilities/food-court"><i className="fas fa-utensils me-2"></i>Food Court</Link></li>
                          <li><Link href="/facilities/transport"><i className="fas fa-bus me-2"></i>Transport</Link></li>
                          <li><Link href="/facilities/emergency-care"><i className="fas fa-first-aid me-2"></i>Emergency Care</Link></li>
                          <li><Link href="/facilities/wifi"><i className="fas fa-wifi me-2"></i>Wi-Fi</Link></li>
                          <li><Link href="/facilities/bank-post-office"><i className="fas fa-university me-2"></i>Bank & Post Office</Link></li>
                        </ul>
                      </li>
                      <li className="has-dropdown">
                        <Link href="/others"><i className="fas fa-ellipsis-h me-2"></i>Others <i className="fas fa-chevron-down ms-1"></i></Link>
                        <ul className="sub-menu">
                          <li><Link href="/iqac">IQAC</Link></li>
                          <li><Link href="/others/committees">Committees</Link></li>
                          <li><Link href="/others/gallery">Gallery</Link></li>
                          <li><Link href="/others/academic-calendar">Academic Calendar</Link></li>
                          <li><Link href="/others/digital-campus">Digital Campus</Link></li>
                          <li><Link href="/others/privacy-policy">Privacy Policy</Link></li>
                        </ul>
                      </li>
                      <li><Link href="/contact"><i className="fas fa-phone me-2"></i>Contact</Link></li>
                    </ul>
                  </nav>
                </div>
              </div>
              
              
            </div>
            <div className="hamburger-socials">
              <h5 className="hamburger-title">Follow Us</h5>
              <div className="social-links style-3">
                <ul className="d-flex gap-3 list-unstyled p-0 m-0 flex-wrap justify-content-start justify-content-sm-center">
                  <li>
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="d-inline-flex align-items-center justify-content-center text-white text-decoration-none rounded-circle social-icon" style={{width: '40px', height: '40px', backgroundColor: '#1e8a8a', transition: 'all 0.3s ease'}}>
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="d-inline-flex align-items-center justify-content-center text-white text-decoration-none rounded-circle social-icon" style={{width: '40px', height: '40px', backgroundColor: '#1e8a8a', transition: 'all 0.3s ease'}}>
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://x.com/" target="_blank" rel="noopener noreferrer" className="d-inline-flex align-items-center justify-content-center text-white text-decoration-none rounded-circle social-icon" style={{width: '40px', height: '40px', backgroundColor: '#1e8a8a', transition: 'all 0.3s ease'}}>
                      <i className="fa-brands fa-x-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="d-inline-flex align-items-center justify-content-center text-white text-decoration-none rounded-circle social-icon" style={{width: '40px', height: '40px', backgroundColor: '#1e8a8a', transition: 'all 0.3s ease'}}>
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