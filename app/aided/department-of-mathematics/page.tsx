import Link from 'next/link';
import Header from '../../components/Header';
import OffcanvasMenu from '../../components/OffcanvasMenu';
import Footer from '../../components/Footer';

export default function DepartmentOfMathematics() {
  return (
    <>
      <OffcanvasMenu />
      <Header />
      
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main id="primary" className="site-main">
            <div className="top-space-15"></div>
            
            {/* start: Banner Section */}
            <section className="tj-banner-section-2 h10-hero section-gap-x zoom-on-scroll-wrapper pb-5">
              <div className="container">
                <div className="row flex-column-reverse flex-lg-row">
                  <div className="col-lg-4 col-xl-3">
                    <div className="h10-hero-award-wrapper">
                      <div className="h6-hero-history wow fadeInUp" data-wow-delay=".3s">
                        <div className="h6-hero-history-title">Est. 1975</div>
                        <p className="h6-hero-history-desc">Excellence in Mathematics Education with B.Sc. Mathematics since 1975 and M.Sc. Mathematics from 2002.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8 col-xl-9">
                    <div className="banner-content-2">
                      <h1 className="banner-title text-anim">Department of Mathematics <i className="fas fa-curve-arrow wow fadeInRight" data-wow-delay=".7s"></i>
                      </h1>
                      <div className="banner-desc-area wow fadeInUp" data-wow-delay=".7s">
                        <Link className="tj-primary-btn" href="#">
                          <span className="btn-text"><span>Apply Now</span></span>
                          <span className="btn-icon"><i className="fas fa-arrow-right-long"></i></span>
                        </Link>
                        <div className="banner-desc">Excellence in Mathematics with comprehensive programs in Graph Theory, Numerical Analysis, Probability and Ancient Mathematics.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-shape-1">
                <img src="/assets/images/shape/pattern-2.svg" alt="" />
              </div>
              <div className="bg-shape-2">
                <img src="/assets/images/shape/pattern-3.svg" alt="" />
              </div>
            </section>
            {/* end: Banner Section */}

            

            {/* start: About Section */}
            <section className="tj-about-section h8-about section-gap">
              <div className="container">
                <div className="row row-gap-4">
                  <div className="col-12">
                    <div className="about-content-area-2 wow fadeInUp" data-wow-delay=".3s">
                      <div className="sec-heading style-3">
                        <div className="row">
                          <div className="col-12 col-lg-4">
                            <div className="h8-about-left">
                              <span className="sub-title wow fadeInUp" data-wow-delay=".3s">
                                <i className="fas fa-box"></i>About Department
                              </span>
                            </div>
                          </div>
                          <div className="col-12 col-lg-8">
                            <div className="h8-about-content-inner">
                              <h2 className="sec-title title-highlight">
                                Department of Mathematics - Excellence in Mathematical Education Since 1975
                              </h2>
                            </div>
                          </div>
                        </div>
                        <div className="row align-items-center">
                          <div className="col-12 col-lg-4">
                            <div className="h8-about-video">
                              <img src="/assets/images/img/Department-of-Mathematics.png" alt="" />
                              <a className="h8-about-video-btn video-popup" href="https://youtu.be/gXFATcwrO-U" data-autoplay="true" data-vbtype="video">
                                <i className="fas fa-play"></i>
                              </a>
                            </div>
                          </div>
                          <div className="col-12 col-lg-8">
                            <div className="h8-about-item-wrapper">
                              <div className="h8-about-item h8-about-item-counter">
                                <div className="countup-item style-2">
                                  <div className="count-inner">
                                    <div className="inline-content">
                                    <span className="odometer countup-number" data-count="50"></span>
                                    <sup className="count-plus">+</sup>
                                  </div>
                                  <span className="count-text">Years of Academic Excellence.</span>
                                  </div>
                                </div>
                              </div>
                              <div className="h8-about-item h8-about-item-desc">
                                <div className="h8-about-item-content">
                                  <p className="desc">
                                    The Department of Mathematics was established in the year 1975 with B.Sc. Mathematics as a course. It has been elevated with M.Sc. Mathematics (in the SF Wing) from the year 2002. An additional section of B.Sc. Mathematics was started in the SF wing in order to cater the needs of the student's interest towards Mathematics. The Department of Mathematics is vibrant with 4 faculty members headed by Dr.T.Santhi, M.Sc., M.Phil, Ph.D. Our faculties are members of Board of studies in various other Colleges and Universities.
                                  </p>
                                  <p className="desc">
                                    This dynamic community of Mathematicians are dedicated to excellence in teaching, research and service. We are indulging in research activities and the areas of interest are Graph Theory, Numerical analysis, probability and Ancient Mathematics. Our faculties have presented and participated in many National and International conferences. We have published good number of research papers in peer reviewed Journals. A study grants of Rs. 20,000 was awarded by ICHR for the conduct of research. A minor research project worth 1,85,000 Rs., has been completed with the financial support of UGC, New Delhi.
                                  </p>
                                  <p className="desc">
                                    We encourage our students to participate in national level programs like MTTS, Summer fellowships etc., in order to develop their analytical skills.
                                  </p>
                                  <div className="about-btn-area-2 wow fadeInUp" data-wow-delay="1s">
                                    <Link className="tj-primary-btn" href="#">
                                      <span className="btn-text"><span>Learn More</span></span>
                                      <span className="btn-icon"><i className="fas fa-arrow-right-long"></i></span>
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
            </section>
            {/* end: About Section */}


            {/* start: Vision Mission Section */}
            <section className="h8-service overflow-hidden section-gap">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="sec-heading style-3 sec-heading-centered">
                      <span className="sub-title wow fadeInUp" data-wow-delay=".3s">
                        <i className="fas fa-box"></i>Vision & Mission
                      </span>
                      <h2 className="sec-title title-anim">Our Educational Philosophy and Goals.</h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container gap-30">
                <div className="row">
                  <div className="col-12">
                    <div className="service-wrapper h8-service-wrapper wow bounceInLeft" data-wow-delay=".3s">
                      <div className="row">
                        <div className="col-12 col-md-6 col-xl-4">
                          <div className="service-item h8-service-item">
                            <div className="service-icon">
                              <i className="fas fa-eye"></i>
                            </div>
                            <h4 className="title">VISION</h4>
                            <div className="service-content">
                              <p className="desc">
                                To inculcate Mathematical knowledge with par excellence in problem solving.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-4">
                          <div className="service-item h8-service-item">
                            <div className="service-icon">
                              <i className="fas fa-bullseye"></i>
                            </div>
                            <h4 className="title">MISSION</h4>
                            <div className="service-content">
                              <p className="desc">To develop analytical and logical thinking in the minds of young nation builders.</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-4">
                          <div className="service-item h8-service-item">
                            <div className="service-icon">
                              <i className="fas fa-graduation-cap"></i>
                            </div>
                            <h4 className="title">ACADEMIC PROGRAMS</h4>
                            <div className="service-content">
                              <p className="desc">Comprehensive programs designed to provide students with deep understanding of mathematical concepts and applications.</p>
                              <ul className="list-items">
                                <li><i className="fas fa-list"></i>B.Sc Mathematics - 3 Years</li>
                                <li><i className="fas fa-list"></i>M.Sc Mathematics - 2 Years</li>
                                <li><i className="fas fa-list"></i>Research Areas: Graph Theory, Numerical Analysis, Probability</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="h8-service-more wow fadeInUp" data-wow-delay=".8s">
                      <Link className="tj-primary-btn" href="#">
                        <span className="btn-text"><span>Apply Now</span></span>
                        <span className="btn-icon"><i className="fas fa-arrow-right-long"></i></span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* end: Vision Mission Section */}

            {/* start: Achievements Section */}
            <section className="h8-funfact section-gap">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="sec-heading style-3 sec-heading-centered">
                      <span className="sub-title wow fadeInUp" data-wow-delay=".3s">
                        <i className="fas fa-box"></i>DEPARTMENT ACHIEVEMENTS
                      </span>
                      <h2 className="sec-title title-anim">Academic Excellence and Research Contributions.</h2>
                    </div>
                  </div>
                </div>
                <div className="row justify-content-between">
                  <div className="col-12 col-lg-6">
                    <div className="h8-funfact-banner wow fadeInLeft" data-wow-delay=".3s">
                      <div className="h8-funfact-banner-img">
                        <img src="/assets/images/funfact/h8-funfact-banner.webp" alt="" />
                      </div>
                      <div className="box-area">
                        <div className="call-box wow fadeInUp" data-wow-delay=".5s">
                          <h4 className="title">Faculty Achievements</h4>
                          <span className="call-icon"><i className="fas fa-award"></i></span>
                          <p className="achievement-text">Recognition for excellence in mathematical research and teaching</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-6 pl-0">
                    <div className="h8-funfact-wrapper">
                      <div className="countup-item style-2 h8-funfact-item">
                        <div className="count-inner">
                          <div className="inline-content">
                            <span className="odometer countup-number" data-count="62"></span>
                            <span className="count-plus">+</span>
                          </div>
                          <div className="counter-desc">
                            <h4 className="counter-title">Research Papers</h4>
                            <p className="count-text">Published in peer reviewed National and International journals.</p>
                          </div>
                        </div>
                      </div>
                      <div className="countup-item style-2 h8-funfact-item">
                        <div className="count-inner">
                          <div className="inline-content">
                            <span className="odometer countup-number" data-count="605"></span>
                            <span className="count-plus">K</span>
                          </div>
                          <div className="counter-desc">
                            <h4 className="counter-title">Research Funding</h4>
                            <p className="count-text">UGC Minor Research Project worth Rs.1,85,000 completed.</p>
                          </div>
                        </div>
                      </div>
                      <div className="countup-item style-2 h8-funfact-item">
                        <div className="count-inner">
                          <div className="inline-content">
                            <span className="odometer countup-number" data-count="75"></span>
                            <span className="count-plus">K</span>
                          </div>
                          <div className="counter-desc">
                            <h4 className="counter-title">Student Awards</h4>
                            <p className="count-text">Students participating in MTTS, Summer fellowships and national programs.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* end: Achievements Section */}

            {/* start: Facilities Section */}
            <section className="h8-service overflow-hidden section-gap">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="sec-heading style-3 sec-heading-centered">
                      <span className="sub-title wow fadeInUp" data-wow-delay=".3s">
                        <i className="fas fa-box"></i>Facilities & Resources
                      </span>
                      <h2 className="sec-title title-anim">Modern Infrastructure for Mathematical Excellence.</h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container gap-30">
                <div className="row">
                  <div className="col-12">
                    <div className="service-wrapper h8-service-wrapper wow bounceInLeft" data-wow-delay=".3s">
                      <div className="row">
                        <div className="col-12 col-md-6 col-xl-6">
                          <div className="service-item h8-service-item">
                            <div className="service-icon">
                              <i className="fas fa-lightbulb"></i>
                            </div>
                            <h4 className="title">Computer Laboratory</h4>
                            <div className="service-content">
                              <p className="desc">
                                Computer laboratory with specialized software for Mathematical modelling and simulation.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-6">
                          <div className="service-item h8-service-item">
                            <div className="service-icon">
                              <i className="fas fa-chart-line"></i>
                            </div>
                            <h4 className="title">Department Library</h4>
                            <div className="service-content">
                              <p className="desc">
                                Department Library with more than 300 books sponsored by NBHM, New Delhi, for extensive reading and to facilitate research activities.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* end: Facilities Section */}

            {/* start: Student Organizations Section */}
            <section className="h8-service overflow-hidden section-gap">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="sec-heading style-3 sec-heading-centered">
                      <span className="sub-title wow fadeInUp" data-wow-delay=".3s">
                        <i className="fas fa-box"></i>Student Organizations
                      </span>
                      <h2 className="sec-title title-anim">Active Student Community and Professional Development.</h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container gap-30">
                <div className="row">
                  <div className="col-12">
                    <div className="service-wrapper h8-service-wrapper wow bounceInLeft" data-wow-delay=".3s">
                      <div className="row">
                        <div className="col-12 col-md-6 col-xl-6">
                          <div className="service-item h8-service-item">
                            <div className="service-icon">
                              <i className="fas fa-users"></i>
                            </div>
                            <h4 className="title">Mathematics Association</h4>
                            <div className="service-content">
                              <p className="desc">
                                Active student organization promoting mathematical learning and peer collaboration.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-6">
                          <div className="service-item h8-service-item">
                            <div className="service-icon">
                              <i className="fas fa-trophy"></i>
                            </div>
                            <h4 className="title">Gender Champions Club</h4>
                            <div className="service-content">
                              <p className="desc">
                                Promoting gender equality and inclusive learning environment in mathematics education.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="h8-service-more wow fadeInUp" data-wow-delay=".8s">
                      <p className="text-center">These organizations provide opportunities for the students to connect with the peers and Professionals of Mathematics.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* end: Student Organizations Section */}

            {/* start: Faculty Section */}
            <section className="h8-team section-gap section-gap-x">
              <div className="container">
                <div className="row h8-team-wrapper gap-0">
                  <div className="col-lg-3 col-sm-6">
                    <div className="sec-heading style-3">
                      <span className="sub-title wow fadeInUp" data-wow-delay=".3s">MEET OUR FACULTY</span>
                      <h2 className="sec-title title-anim">Experienced Faculty Members.</h2>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 h8-team-item-wrapper">
                    <div className="team-item wow fadeInRightBig" data-wow-delay=".2s">
                      <div className="team-img">
                        <div className="team-img-inner">
                          <img src="/assets/images/team/maths-aided/Dr.-T.-Santhi.png" alt="" />
                        </div>
                        <div className="social-links">
                          <ul>
                            <li><a href="mailto:santhi.t@jkkn.ac.in" target="_blank"><i className="fa-solid fa-envelope"></i></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="team-content">
                        <h5 className="title">Dr. T. Santhi</h5>
                        <span className="designation">Associate Professor & Head</span>
                        <p className="qualification">M.Sc., M.Phil., Ph.D.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 h8-team-item-wrapper">
                    <div className="team-item wow fadeInRightBig" data-wow-delay=".3s">
                      <div className="team-img">
                        <div className="team-img-inner">
                          <img src="/assets/images/team/maths-aided/Dr.-V.-Radhamani.png" alt="" />
                        </div>
                        <div className="social-links">
                          <ul>
                            <li><a href="mailto:radhamani.v@jkkn.ac.in" target="_blank"><i className="fa-solid fa-envelope"></i></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="team-content">
                        <h5 className="title">Dr. V. Radhamani</h5>
                        <span className="designation">Assistant Professor</span>
                        <p className="qualification">M.Sc., Ph.D., (SET)</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 h8-team-item-wrapper">
                    <div className="team-item wow fadeInRightBig" data-wow-delay=".4s">
                      <div className="team-img">
                        <div className="team-img-inner">
                          <img src="/assets/images/team/maths-aided/Dr.-A.-Kavitha.png" alt="" />
                        </div>
                        <div className="social-links">
                          <ul>
                            <li><a href="mailto:kavitha.a@jkkn.ac.in" target="_blank"><i className="fa-solid fa-envelope"></i></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="team-content">
                        <h5 className="title">Dr. A. Kavitha</h5>
                        <span className="designation">Assistant Professor</span>
                        <p className="qualification">M.Sc., B.Ed., M.Phil., Ph.D.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 h8-team-item-wrapper">
                    <div className="team-item wow fadeInRightBig" data-wow-delay=".5s">
                      <div className="team-img">
                        <div className="team-img-inner">
                          <img src="/assets/images/team/maths-aided/Dr.-G.-Sharmiladevi.png" alt="" />
                        </div>
                        <div className="social-links">
                          <ul>
                            <li><a href="mailto:sharmiladevi.g@jkkn.ac.in" target="_blank"><i className="fa-solid fa-envelope"></i></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="team-content">
                        <h5 className="title">Dr. G. Sharmiladevi</h5>
                        <span className="designation">Assistant Professor</span>
                        <p className="qualification">M.Sc., M.Phil., Ph.D., SET</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-shape-1">
                <img src="/assets/images/shape/pattern-2.svg" alt="" />
              </div>
              <div className="bg-shape-2">
                <img src="/assets/images/shape/pattern-3.svg" alt="" />
              </div>
            </section>
            {/* end: Faculty Section */}

            <Footer />
          </main>
        </div>
      </div>
    </>
  );
}


