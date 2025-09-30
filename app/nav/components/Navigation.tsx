import Link from 'next/link';
import Image from 'next/image';
import { useEffect } from 'react';

export default function Navigation() {
  // Hamburger menu functionality is now handled globally by Header.tsx
  // No need for duplicate event handlers

  return (
    <header className="header-area header-2 header-absolute section-gap-x">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="header-wrapper">
              {/* site logo */}
              <div className="site_logo">
                <Link className="logo" href="/"><Image src="/assets/images/logos/logo.png" alt="" width={400} height={300} style={{ width: "100%", height: "auto" }} /></Link>
              </div>

              {/* navigation */}
              <div className="menu-area d-none d-lg-inline-flex align-items-center">
                <nav id="mobile-menu" className="mainmenu">
                  <ul>
                    {/* 1. Home */}
                    <li className="current-menu-ancestor">
                      <Link href="/">Home</Link>
                    </li>

                    {/* 2. About */}
                    <li className="has-dropdown me-3">
                      <Link href="#">About</Link>
                      <ul className="sub-menu">
                        <li><Link href="/vision-mission">Our Vision and Mission</Link></li>
                        <li><Link href="/about/trust">Our Trust</Link></li>
                        <li><Link href="/about/management">Our Management</Link></li>
                        <li><Link href="/about/college">Our College</Link></li>
                        <li><Link href="/nav">Our Nav</Link></li>
                      </ul>
                    </li>

                    {/* 3. Programmes Offered */}
                    <li className="has-dropdown me-3">
                      <Link href="/programmes">Programmes Offered</Link>
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

                    {/* 4. Department */}
                    <li className="has-dropdown me-3">
                      <Link href="/departments">Department</Link>
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

                    {/* 5. Facilities */}
                    <li className="has-dropdown me-3">
                      <Link href="/facilities">Facilities</Link>
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

                    {/* 6. Others */}
                    <li className="has-dropdown me-3">
                      <Link href="/others">Others</Link>
                      <ul className="sub-menu">
                        <li className="has-dropdown">
                          <Link href="#">NIRF <i className="fas fa-chevron-right ms-1"></i></Link>
                          <ul className="sub-menu">
                            <li><a href="/assets/pdf/J.K.K-Nataraja-College-of-Arts-Science-nirf-2024.pdf" target="_blank" rel="noopener noreferrer">NIRF-2024</a></li>
                          </ul>
                        </li>
                        <li className="has-dropdown">
                          <Link href="/iqac">IQAC <i className="fas fa-chevron-right ms-1"></i></Link>
                          <ul className="sub-menu">
                            <li><Link href="/iqac/vision-mission">Vision & Mission</Link></li>
                            <li><Link href="/iqac/objectives-functions">Objectives/Function</Link></li>
                            <li><Link href="/iqac/role-responsibilities">Role/Responsibilities</Link></li>
                            <li><Link href="/iqac/naac">NAAC</Link></li>
                          </ul>
                        </li>
                        <li><Link href="/others/gallery">Gallery</Link></li>
                        <li><Link href="/others/academic-calendar">Academic Calendar</Link></li>
                        <li><Link href="/others/digital-campus">Digital Campus</Link></li>
                        <li><Link href="/others/privacy-policy">Privacy Policy</Link></li>
                      </ul>
                    </li>

                    {/* 7. Contact */}
                    <li className="me-3">
                      <Link href="/contact">Contact</Link>
                    </li>
                  </ul>
                </nav>
              </div>

              {/* header right info */}
              <div className="header-right-item d-none d-lg-inline-flex">
                <div className="header-search">
                  <button className="search">
                    <i className="tji-search"></i>
                  </button>
                  <button type="button" className="search_close_btn">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17 1L1 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M1 1L17 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
                <div className="header-button">
                  <Link className="tj-primary-btn" href="/contact">
                    <span className="btn-text"><span>Let&apos;s Talk</span></span>
                    <span className="btn-icon"><i className="tji-arrow-right-long"></i></span>
                  </Link>
                </div>
                {/* Mobile hamburger menu button - connects to global OffcanvasMenu */}
                <div className="menu_bar d-lg-none">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search Popup */}
      <div className="search_popup">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-8">
              <div className="tj_search_wrapper">
                <div className="search_form">
                  <form action="#">
                    <div className="search_input">
                      <div className="search-box">
                        <input className="search-form-input" type="text" placeholder="Type Words and Hit Enter" required />
                        <button type="submit">
                          <i className="tji-search"></i>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

