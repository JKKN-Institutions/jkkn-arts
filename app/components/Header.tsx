import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="header-area header-2 header-absolute section-gap-x" style={{ backgroundColor: 'white', color: 'black',borderRadius: '50px' }}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="header-wrapper d-flex align-items-center justify-content-between">
              {/* site logo */}
              <div className="site_logo flex-shrink-0">
                <Link className="logo" href="/">
                  <Image src="/assets/images/logos/logo-2.png" alt="College Logo" width={80} height={80} style={{ height: '80px', width: 'auto' }} />
                </Link>
              </div>

              {/* navigation */}
              <div className="menu-area d-none d-lg-flex align-items-center flex-grow-1 justify-content-center">
                <nav id="mobile-menu" className="mainmenu">
                  <ul className="d-flex align-items-center mb-0 list-unstyled">
                    {/* 1. Home */}
                    {/* <li className="current-menu-ancestor me-3">
                      <Link href="/">Home</Link>
                    </li> */}

                    {/* 2. About */}
                    <li className="has-dropdown me-3">
                    <Link href="#">About <i className="fas fa-chevron-down ms-1"></i></Link>
                      <ul className="sub-menu">
                        <li><Link href="/vision-mission">Our Vision and Mission</Link></li>
                        <li><Link href="/about/trust">Our Trust</Link></li>
                        <li><Link href="/about/management">Our Management</Link></li>
                        <li><Link href="/about/college">Our College</Link></li>
                      </ul>
                    </li>

                    {/* 3. Programmes Offered */}
                    <li className="has-dropdown me-3">
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
                                <li><Link href="bscmaths">B.Sc Maths</Link></li>
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

                    {/* 5. Examination */}
                    {/* <li className="me-3">
                      <Link href="/examination">Examination</Link>
                    </li> */}

                    {/* 6. AICTE */}
                    {/* <li className="has-dropdown me-3">
                      <Link href="/aicte">AICTE</Link>
                      <ul className="sub-menu">
                        <li><Link href="/aicte/loa-eoa-report">LOA_EOA Report 23-24</Link></li>
                        <li><Link href="/aicte/mandatory-disclosure">Mandatory Disclosure</Link></li>
                        <li><Link href="/aicte/feedback-form">AICTE Feedback Form</Link></li>
                      </ul>
                    </li> */}

                    {/* 7. Facilities */}
                    <li className="has-dropdown me-3">
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

                    {/* 8. IQAC */}
                    {/* <li className="has-dropdown me-3">
                      <Link href="/iqac">IQAC</Link>
                      <ul className="sub-menu">
                        <li><Link href="/iqac/vision-mission">Vision & Mission</Link></li>
                        <li><Link href="/iqac/objectives">Objectives/Function</Link></li>
                        <li><Link href="/iqac/roles">Role/Responsibilities</Link></li>
                        <li><Link href="/iqac/iiqa">IIQA</Link></li>
                        <li><Link href="/iqac/ssr">Self-Study Report (SSR)</Link></li>
                        <li><Link href="/iqac/aqar">AQAR</Link></li>
                        <li><Link href="/iqac/student-survey">Student Satisfaction Survey</Link></li>
                        <li><Link href="/iqac/best-practice">Best Practice</Link></li>
                        <li><Link href="/iqac/minutes">Minutes of IQAC</Link></li>
                        <li><Link href="/iqac/student-feedback">Student's Feedback</Link></li>
                        <li><Link href="/iqac/calendar">College Calendar</Link></li>
                        <li><Link href="/iqac/magazine">College Magazine</Link></li>
                        <li><Link href="/iqac/naac">NAAC</Link></li>
                      </ul>
                    </li> */}

                    {/* 9. Others */}
                    <li className="has-dropdown me-3">
                      <Link href="/others">Others <i className="fas fa-chevron-down ms-1"></i></Link>
                      <ul className="sub-menu">
                        <li className="has-dropdown">
                          <Link href="#">NIRF <i className="fas fa-chevron-right ms-1"></i></Link>
                          <ul className="sub-menu">
                            <li><a href="/assets/pdf/J.K.K-Nataraja-College-of-Arts-Science-nirf-2024.pdf" target="_blank">NIRF-2024</a></li>
                            <li className="has-dropdown">
                              <Link href="/others/nirf/nirf-2025">NIRF-2025 <i className="fas fa-chevron-right ms-1"></i></Link>
                              <ul className="sub-menu">
                                <li><a href="/assets/pdf/NIRF-2025-OVER-All.pdf" target="_blank">OVERALL</a></li>
                                <li><a href="/assets/pdf/NIRF-2025-SDG.pdf" target="_blank">SDG</a></li>
                                <li><a href="/assets/pdf/NIRF-2025-COLLEGE.pdf" target="_blank">NIRF 2025 COLLEGE</a></li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li className="has-dropdown me-3">
                          <Link href="/iqac">IQAC <i className="fas fa-chevron-right ms-1"></i></Link>
                          <ul className="sub-menu">
                            <li><Link href="/iqac/vision-mission">Vision & Mission</Link></li>
                            <li><Link href="/iqac/objectives-functions">Objectives/Function</Link></li>
                            <li><Link href="/iqac/role-responsibilities">Role/Responsibilities</Link></li>
                            <li className="has-dropdown">
                              <Link href="/iqac/iiqa">IIQA <i className="fas fa-chevron-right ms-1"></i></Link>
                              <ul className="sub-menu">
                                <li><a href="/assets/pdf/llQA/IIQA-Cycle-I.pdf" target="_blank">Cycle-l</a></li>
                              </ul>
                            </li>
                            <li className="has-dropdown">
                              <Link href="/iqac/ssr">Self-Study Report (SSR) <i className="fas fa-chevron-right ms-1"></i></Link>
                              <ul className="sub-menu">
                                <li><a href="/assets/pdf/self-students-report/Self-Study-Report-Cycle-1.pdf" target="_blank">Cycle-l-(2013-2018)</a></li>
                              </ul>
                            </li>
                            <li className="has-dropdown">
                              <Link href="/iqac/aqar">AQAR <i className="fas fa-chevron-right ms-1"></i></Link>
                              <ul className="sub-menu">
                                <li><a href="/assets/pdf/AQAR/AQAR-2022-2023.pdf" target="_blank">AQAR 2022-2023</a></li>
                                <li><a href="/assets/pdf/AQAR/AQAR-2021-2022.pdf" target="_blank">AQAR 2021-2022</a></li>
                                <li><a href="/assets/pdf/AQAR/AQAR-2020-2021.pdf" target="_blank">AQAR 2020-2021</a></li>
                                <li><a href="/assets/pdf/AQAR/AQAR-2019-2020.pdf" target="_blank">AQAR 2019-2020</a></li>
                                <li><a href="/assets/pdf/AQAR/AQAR-2018-2019.pdf" target="_blank">AQAR 2018-2019</a></li>
                              </ul>
                            </li>
                            <li className="has-dropdown">
                              <Link href="/iqac/student-survey">Student Satisfaction Survey <i className="fas fa-chevron-right ms-1"></i></Link>
                              <ul className="sub-menu">
                                <li className="has-dropdown">
                                  <Link href="#">2022-2023 <i className="fas fa-chevron-right ms-1"></i></Link>
                                  <ul className="sub-menu">
                                    <li><a href="/assets/pdf/Student-Satisfaction-Survey/22-23/2.7.1.-Student-Satisfaction-Survey-2022-2023-Google-Forms-Questions.pdf" target="_blank">SSS-Questions</a></li>
                                    <li><a href="/assets/pdf/Student-Satisfaction-Survey/22-23/2.7.1.-Student-Satisfaction-Survey-2022-2023-Report.xlsx" target="_blank">SSS-Report</a></li>
                                    <li><a href="/assets/pdf/Student-Satisfaction-Survey/22-23/2.7.1.-Student-Satisfaction-Survey-2022-2023-Report1.xlsx" target="_blank">SSS-Response</a></li>
                                  </ul>
                                </li>
                                <li className="has-dropdown">
                                  <Link href="#">2021-2022 <i className="fas fa-chevron-right ms-1"></i></Link>
                                  <ul className="sub-menu">
                                    <li><a href="/assets/pdf/Student-Satisfaction-Survey/21-22/2.7.1.SSS-2021-2022-Google-Forms-Questions.pdf" target="_blank">SSS-Questions</a></li>
                                    <li><a href="/assets/pdf/Student-Satisfaction-Survey/21-22/Student-Satisfaction-Survey-2021-2022-Responses.pdf" target="_blank">SSS-Response</a></li>
                                    <li><a href="/assets/pdf/Student-Satisfaction-Survey/21-22/2.7.1.SSS-2021-2022-Report.xlsx" target="_blank">SSS-Report</a></li>
                                  </ul>
                                </li>
                                <li className="has-dropdown">
                                  <Link href="#">2020-2021 <i className="fas fa-chevron-right ms-1"></i></Link>
                                  <ul className="sub-menu">
                                    <li><a href="/assets/pdf/Student-Satisfaction-Survey/20-21/2.7.1.SSS-2020-2021-Google-Forms-Question.pdf" target="_blank">SSS-Questions</a></li>
                                    <li><a href="/assets/pdf/Student-Satisfaction-Survey/20-21/Student-Satisfaction-Survey-2020-2021-Response.pdf" target="_blank">SSS-Response</a></li>
                                    <li><a href="/assets/pdf/Student-Satisfaction-Survey/20-21/2.7.1.SSS-2020-2021-Report.xlsx" target="_blank">SSS-Report</a></li>
                                  </ul>
                                </li>
                                <li className="has-dropdown">
                                  <Link href="#">2019-2020 <i className="fas fa-chevron-right ms-1"></i></Link>
                                  <ul className="sub-menu">
                                    <li><a href="/assets/pdf/Student-Satisfaction-Survey/19-20/SSS-Questions.pdf" target="_blank">SSS-Questions</a></li>
                                    <li><a href="/assets/pdf/Student-Satisfaction-Survey/19-20/SSS-Responses.pdf" target="_blank">SSS-Response</a></li>
                                    <li><a href="/assets/pdf/Student-Satisfaction-Survey/19-20/SSS-Report.xlsx" target="_blank">SSS-Report</a></li>
                                  </ul>
                                </li>
                              </ul>
                            </li>
                            <li className="has-dropdown">
                              <Link href="/iqac/best-practice">Best Practice <i className="fas fa-chevron-right ms-1"></i></Link>
                              <ul className="sub-menu">
                                <li><a href="/assets/pdf/Best-Practice/Best-practice-2022-2023.pdf" target="_blank">Best practice-2022-2023</a></li>
                                <li><a href="/assets/pdf/Best-Practice/Best-practice-2021-2022.pdf" target="_blank">Best practice-2021-2022</a></li>
                                <li><a href="/assets/pdf/Best-Practice/Best-practice-2020-2021.pdf" target="_blank">Best practice-2020-2021</a></li>
                                <li><a href="/assets/pdf/Best-Practice/Best-practice-2019-2020.pdf" target="_blank">Best practice-2019-2020</a></li>
                                <li><a href="/assets/pdf/Best-Practice/Best-practice-2018-2019.pdf" target="_blank">Best practice-2018-2019</a></li>
                              </ul>
                            </li>
                            <li><Link href="/iqac/minutes">Minutes of IQAC</Link>
                              <ul className="sub-menu">
                                <li><a href="/assets/pdf/mints-of-iqac/Minutes-of-Meeting-2022-2023.pdf" target="_blank">Minutes of IQAC meeting - 2022-2023</a></li>                              
                                <li><a href="/assets/pdf/mints-of-iqac/Minutes-of-Meeting-2021-2022.pdf" target="_blank">Minutes of IQAC meeting - 2021-2022</a></li>                              
                                <li><a href="/assets/pdf/mints-of-iqac/Minutes-of-Meeting-2020-2021.pdf" target="_blank">Minutes of IQAC meeting - 2020-2021</a></li>                              
                                <li><a href="/assets/pdf/mints-of-iqac/Minutes-of-Meeting-2019-2020.pdf" target="_blank">Minutes of IQAC meeting - 2019-2020</a></li>
                                <li><a href="/assets/pdf/mints-of-iqac/Minutes-of-Meeting-2018-2019.pdf" target="_blank">Minutes of IQAC meeting - 2018-2019</a></li>
                              </ul>
                            </li>
                            <li><Link href="/iqac/student-feedback">Student's Feedback</Link></li>
                            <li className="has-dropdown">
                              <Link href="/iqac/calendar">College Calendar <i className="fas fa-chevron-right ms-1"></i></Link>
                              <ul className="sub-menu">
                                <li><a href="/assets/pdf/college-calender/2022-2023.pdf" target="_blank">2022-2023</a></li>
                              </ul>
                            </li>
                            <li className="has-dropdown">
                              <Link href="/iqac/magazine">College Magazine <i className="fas fa-chevron-right ms-1"></i></Link>
                              <ul className="sub-menu">
                                <li><a href="/assets/pdf/college-magazine/Magazine-2022-23.pdf" target="_blank">2022-2023</a></li>
                                <li><a href="/assets/pdf/college-magazine/Magazine-2020-21.pdf" target="_blank">2020-2021</a></li>
                                <li><a href="#">NAAC</a></li>
                              </ul>
                            </li>
                            <li><Link href="/iqac/naac">NAAC</Link></li>
                          </ul>
                        </li>
                        <li className="has-dropdown">
                          <Link href="/others/committees">Committees <i className="fas fa-chevron-right ms-1"></i></Link>
                          <ul className="sub-menu">
                            <li><a href="/assets/pdf/commitee/Anti_Ragging-committee-2024.pdf" target="_blank">Anti_Ragging committee</a></li>
                            <li><a href="/assets/pdf/commitee/Grievance-Redressal-Cell-2024.pdf" target="_blank">Grievance Redressal Cell</a></li>
                            <li><a href="https://docs.google.com/forms/d/e/1FAIpQLSdsEgswc7mGZIlP7NdedDOJd84J9Gqm9PG2_9RPXa6QMvusBQ/viewform" target="_blank">Student Grievance Form</a></li>
                            <li><a href="/assets/pdf/commitee/Internal-committee-2024.pdf" target="_blank">Internal committee</a></li>
                            <li><a href="/assets/pdf/commitee/Institution-Industry-Cell-2024.pdf" target="_blank">Institution Industry Cell</a></li>
                            <li><a href="/assets/pdf/commitee/SC-ST-Committee-2024.pdf" target="_blank">SC-ST Committee</a></li>
                            <li><a href="/assets/pdf/commitee/Internal-Quality-Assurance-Cell-2024.pdf" target="_blank">Internal Quality Assurance Cell (IQAC)</a></li>
                          </ul>
                        </li>
                        <li><Link href="/others/gallery">Gallery</Link></li>
                        <li><Link href="/others/academic-calendar">Academic Calendar</Link></li>
                        <li><Link href="/others/digital-campus">Digital Campus</Link></li>
                        <li><Link href="/others/privacy-policy">Privacy Policy</Link></li>
                        <li className="has-dropdown me-3">
                          <Link href="/aicte">AICTE <i className="fas fa-chevron-right ms-1"></i></Link>
                          <ul className="sub-menu">
                            <li><a href="/assets/pdf/aicte/LOA_EOA_merged_2024_240221_153622.pdf" target="_blank">LOA_EOA Report 23-24</a></li>
                            <li><a href="/assets/pdf/aicte/MANDATORY-DISCLOSURE-23-24.pdf" target="_blank">Mandatory Disclosure</a></li>
                            <li><a href="https://www.aicte.gov.in/feedback/index.php" target="_blank">AICTE Feedback Form</a></li>
                          </ul>
                        </li>
                        <li className="me-3">
                          <Link href="/examination">Examination <i className="fas fa-chevron-right ms-1"></i></Link>
                          <ul className="sub-menu">
                            <li><a href="/examination/Autonomous_Semester-Timetable_AprilMay-_2025">Time Table</a></li>
                          </ul>
                        </li>
                        <li className="has-dropdown">
                          <Link href="#">RTI <i className="fas fa-chevron-right ms-1"></i></Link>
                          <ul className="sub-menu">
                            <li><Link href="/assets/pdf/RTI/RTI-2024.pdf" target="_blank">RTI 2024</Link></li>
                          </ul>
                        </li>
                      </ul>
                    </li>

                    {/* 10. Contact */}
                    <li className="me-3">
                    <Link href="#">Contact <i className="fas fa-chevron-down ms-1"></i></Link>
                    </li>

                    {/* 11. RTI */}
                    {/* <li className="has-dropdown">
                      <Link href="/rti">RTI</Link>
                      <ul className="sub-menu">
                        <li><Link href="/rti/2024">RTI 2024</Link></li>
                      </ul>
                    </li> */}
                  </ul>
                </nav>
              </div>

              {/* header right info */}
              {/* <div className="header-right-item d-none d-lg-flex align-items-center flex-shrink-0">
                <div className="header-button me-3">
                <Link className="tj-primary-btn" href="#">
                    <span className="btn-text"><span>Let's Talk</span></span>
                    <span className="btn-icon"><i className="fas fa-arrow-right"></i></span>
                  </Link>
                </div>
                <div className="menu_bar menu_offcanvas d-flex align-items-center">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div> */}

              {/* menu bar */}
              <div className="menu_bar mobile_menu_bar d-lg-none" style={{cursor: 'pointer', zIndex: 999}}>
                <span style={{display: 'block', width: '25px', height: '3px', backgroundColor: '#1e8a8a', margin: '5px 0', transition: '0.3s'}}></span>
                <span style={{display: 'block', width: '25px', height: '3px', backgroundColor: '#1e8a8a', margin: '5px 0', transition: '0.3s'}}></span>
                <span style={{display: 'block', width: '25px', height: '3px', backgroundColor: '#1e8a8a', margin: '5px 0', transition: '0.3s'}}></span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </header>
  );
}
