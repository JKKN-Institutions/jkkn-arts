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
            
            <div className="hamburger_menu">
              <div className="mobile_menu">
                <nav className="mobile-nav">
                  <ul className="mobile-menu-list">
                    <li className="has-dropdown">
                      <Link href="#">About <i className="fas fa-chevron-down ms-1"></i></Link>
                      <ul className="sub-menu">
                        <li><Link href="/vision-mission">Our Vision and Mission</Link></li>
                        <li><Link href="/about/trust">Our Trust</Link></li>
                        <li><Link href="/about/management">Our Management</Link></li>
                        <li><Link href="/about/college">Our College</Link></li>
                      </ul>
                    </li>
                    <li className="has-dropdown">
                      <Link href="/programmes">Programmes Offered <i className="fas fa-chevron-down ms-1"></i></Link>
                      <ul className="sub-menu">
                        <li className="has-dropdown">
                          <Link href="/programmes/aided">Aided <i className="fas fa-chevron-right ms-1"></i></Link>
                          <ul className="sub-menu">
                            <li className="has-dropdown">
                              <Link href="/programmes/aided/ug">UG Courses <i className="fas fa-chevron-right ms-1"></i></Link>
                              <ul className="sub-menu">
                                <li><Link href="/baenglish">BA English</Link></li>
                                <li><Link href="/bahistory">BA History</Link></li>
                                <li><Link href="/bscchemistry">B.Sc Chemistry</Link></li>
                                <li><Link href="/bscmaths">B.Sc Maths</Link></li>
                                <li><Link href="/bsc-zoology">B.Sc Zoology</Link></li>
                                <li><Link href="/bcom">B.Com</Link></li>
                              </ul>
                            </li>
                            <li className="has-dropdown">
                              <Link href="/programmes/aided/pg">PG Courses <i className="fas fa-chevron-right ms-1"></i></Link>
                              <ul className="sub-menu">
                                <li><Link href="/mca">M.C.A</Link></li>
                                <li><Link href="/mcom">M.Com</Link></li>
                                <li><Link href="/m-sc-zoology">M.Sc Zoology</Link></li>
                                <li><Link href="/msc-chemistry">MSc Chemistry</Link></li>
                                <li><Link href="/msc-physics">M.Sc Physics</Link></li>
                                <li><Link href="/m-a-english">M.A English</Link></li>
                              </ul>
                            </li>
                            <li className="has-dropdown">
                              <Link href="/programmes/aided/phd">Ph.D. <i className="fas fa-chevron-right ms-1"></i></Link>
                              <ul className="sub-menu">
                                <li><Link href="/ph-d-tamil">Ph.D Tamil</Link></li>
                                <li><Link href="/ph-d-chemistry">Ph.D Chemistry</Link></li>
                                <li><Link href="/ph-d-zoology">Ph.D Zoology</Link></li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li className="has-dropdown">
                          <Link href="/programmes/self-finance">Self Finance <i className="fas fa-chevron-right ms-1"></i></Link>
                          <ul className="sub-menu">
                            <li className="has-dropdown">
                              <Link href="/programmes/self-finance/ug">UG Courses <i className="fas fa-chevron-right ms-1"></i></Link>
                              <ul className="sub-menu">
                                <li><Link href="/bsc-physics-self">B.Sc. Physics</Link></li>
                                <li><Link href="/bcom-ca-self">B.Com. CA</Link></li>
                                <li><Link href="/b-c-a-self">B.C.A</Link></li>
                                <li><Link href="/bba-self">B.B.A</Link></li>
                                <li><Link href="/b-com-banking-and-insurance">B.Com Banking and Insurance</Link></li>
                                <li><Link href="/b-com-accounting-and-finance">B.Com Accounting and Finance</Link></li>
                                <li><Link href="/department-of-computer-science">B.SC Computer Science</Link></li>
                                <li><Link href="/bsc-ai-ds">B.SC AI & DS</Link></li>
                                <li><Link href="/department-cyber-security">B.Sc. CS Cyber Security</Link></li>
                                <li><Link href="/department-of-textile-and-fashion-designing">B.Sc Textile and Fashion Designing</Link></li>
                                <li><Link href="/department-bsc-visual-communication">B.Sc Visual Communication</Link></li>
                              </ul>
                            </li>
                            <li className="has-dropdown">
                              <Link href="/programmes/self-finance/pg">PG Courses <i className="fas fa-chevron-right ms-1"></i></Link>
                              <ul className="sub-menu">
                                <li><Link href="/msc-Computer-Science">M.Sc Computer Science</Link></li>
                                <li><Link href="/msc-mathematics">M.Sc Mathematics</Link></li>
                                <li><Link href="/msc-computer-science-data-analytics">MSc Computer Science Data Analytics</Link></li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="has-dropdown">
                      <Link href="/departments">Department <i className="fas fa-chevron-down ms-1"></i></Link>
                      <ul className="sub-menu">
                        <li className="has-dropdown">
                          <Link href="/departments/aided">Aided <i className="fas fa-chevron-right ms-1"></i></Link>
                          <ul className="sub-menu">
                            <li><Link href="/aided/department-of-tamil">Department of Tamil</Link></li>
                            <li><Link href="/aided/department-of-english">Department of English</Link></li>
                            <li><Link href="/aided/department-of-mathematics">Department of Mathematics</Link></li>
                            <li><Link href="/aided/department-of-computer-science">Department of Computer Science</Link></li>
                            <li><Link href="/aided/department-of-commerce">Department of Commerce</Link></li>
                            <li><Link href="/aided/department-of-economics">Department of Economics</Link></li>
                            <li><Link href="/aided/department-of-history">Department of History</Link></li>
                            <li><Link href="/aided/department-of-physics">Department of Physics</Link></li>
                            <li><Link href="/aided/department-of-zoology">Department of Zoology</Link></li>
                            <li><Link href="/aided/department-of-chemistry">Department of Chemistry</Link></li>
                            <li><Link href="/aided/department-of-geography">Department of Geography</Link></li>
                            <li><Link href="/aided/department-of-physical-education">Department of Physical Education</Link></li>
                            <li><Link href="/aided/department-of-library">Department of Library</Link></li>
                            <li><Link href="/aided/department-of-botany">Department of Botany</Link></li>
                          </ul>
                        </li>
                        <li className="has-dropdown">
                          <Link href="/departments/self-finance">Self Finance <i className="fas fa-chevron-right ms-1"></i></Link>
                          <ul className="sub-menu">
                            <li><Link href="/self/department-of-tamil-sf">Department of Tamil (SF)</Link></li>
                            <li><Link href="/self/department-of-english-sf">Department of English (SF)</Link></li>
                            <li><Link href="/self/department-of-mathematics-sf">Department of Mathematics (SF)</Link></li>
                            <li><Link href="/self/department-of-computer-science-sf">Department of Computer Science (SF)</Link></li>
                            <li><Link href="/self/department-of-computer-applications-sf">Department of Computer Applications (SF)</Link></li>
                            <li><Link href="/self/department-of-commerce-sf">Department of Commerce (SF)</Link></li>
                            <li><Link href="/self/department-of-physics-sf">Department of Physics (SF)</Link></li>
                            <li><Link href="/self/department-of-microbiology-sf">Department of Microbiology (SF)</Link></li>
                            <li><Link href="/self/department-of-visual-communication-sf">Department of Visual Communication (SF)</Link></li>
                            <li><Link href="/self/department-of-textile-fashion-sf">Department of Textile and Fashion Designing (SF)</Link></li>
                            <li><Link href="/self/department-of-bba-sf">Department of Business Administration (BBA) (SF)</Link></li>
                            <li><Link href="/self/department-of-ai-ds-sf">Department of Artificial Intelligence and Data Science (SF)</Link></li>
                            <li><Link href="/self/department-of-cyber-security-sf">Department of Cyber Security (SF)</Link></li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="has-dropdown">
                      <Link href="/facilities">Facilities <i className="fas fa-chevron-down ms-1"></i></Link>
                      <ul className="sub-menu">
                        <li><Link href="/facilities/lab">Labs</Link></li>
                        <li><Link href="/facilities/library">Library</Link></li>
                        <li><Link href="/facilities/classroom">Class Room</Link></li>
                        <li><Link href="/facilities/seminar-hall">Seminar Hall</Link></li>
                        <li><Link href="/facilities/hostel">Hostel</Link></li>
                        <li><Link href="/facilities/sports-club">Sports Club</Link></li>
                        <li><Link href="/facilities/auditorium">Auditorium</Link></li>
                        <li><Link href="/facilities/ambulance-services">Ambulance Services</Link></li>
                        <li><Link href="/facilities/food-court">Food Court</Link></li>
                        <li><Link href="/facilities/transport">Transport</Link></li>
                        <li><Link href="/facilities/emergency-care">Emergency Care</Link></li>
                        <li><Link href="/facilities/wifi">Wi-Fi</Link></li>
                        <li><Link href="/facilities/bank-post-office">Bank & Post Office</Link></li>
                      </ul>
                    </li>
                    <li className="has-dropdown">
                      <Link href="/others">Others <i className="fas fa-chevron-down ms-1"></i></Link>
                      <ul className="sub-menu">
                        <li><Link href="/iqac">IQAC</Link></li>
                        <li><Link href="/others/committees">Committees</Link></li>
                        <li><Link href="/others/gallery">Gallery</Link></li>
                        <li><Link href="/others/academic-calendar">Academic Calendar</Link></li>
                        <li><Link href="/others/digital-campus">Digital Campus</Link></li>
                        <li><Link href="/others/privacy-policy">Privacy Policy</Link></li>
                      </ul>
                    </li>
                    <li><Link href="/contact">Contact</Link></li>
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