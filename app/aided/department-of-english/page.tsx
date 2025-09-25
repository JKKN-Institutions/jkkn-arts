import Link from 'next/link';
import Header from '../../components/Header';
import OffcanvasMenu from '../../components/OffcanvasMenu';
import Footer from '../../components/Footer';

export default function DepartmentOfEnglish() {
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
                        <div className="h6-hero-history-title">Est. 1974</div>
                        <p className="h6-hero-history-desc">Excellence in English Language and Literature Education with comprehensive programs in literature, linguistics, and research.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8 col-xl-9">
                    <div className="banner-content-2">
                      <h1 className="banner-title text-anim">Department of English <i className="fas fa-curve-arrow wow fadeInRight" data-wow-delay=".7s"></i>
                      </h1>
                      <div className="banner-desc-area wow fadeInUp" data-wow-delay=".7s">
                        <Link className="tj-primary-btn" href="#">
                          <span className="btn-text"><span>Apply Now</span></span>
                          <span className="btn-icon"><i className="fas fa-arrow-right-long"></i></span>
                        </Link>
                        <div className="banner-desc">Excellence in English Language and Literature with comprehensive programs in literature, linguistics, and critical analysis.
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
                                Department of English - Excellence in English Language and Literature Since 1974
                              </h2>
                            </div>
                          </div>
                        </div>
                        <div className="row align-items-center">
                          <div className="col-12 col-lg-4">
                            <div className="h8-about-video">
                              <img src="/assets/images/img/department-of-english.png" alt="" />
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
                                    The Department of English was established in the year 1974 with four faculty members. Branch XII English Literature was introduced in 1981 and the Department expanded. In the Self-financing wing M.A., English was introduced in 2002, B.A English in 2008 and M. Phil in 2016. We have been guiding the Ph.D. candidates since 2007. The faculty members have published around 95 papers in various journals, seminar volumes and have published 4 books. Many of our students have presented papers in International Conference. The faculty members of the Department have been the Chairpersons and members of the Board of studies in Periyar University. Few of our faculties are members of the Board of studies in other Autonomous Colleges like Vellalar College for Women, Erode, Sri Sarada College for Women, Salem and Vivekanandha College of Arts and Science for Women, Elayampalayam. The members of our Department have acted as Resource Persons in many Seminars and Conferences and have also acted as members of the Inspection Committee for various Colleges. The Department has organized National Level Seminar and and Conferences. The Department has produced 38 Ph.D and 58 M.Phil Scholars. At present nearly 3 M.Phil scholars are pursuing their research. Many students from our Department are office bearers in various associations. They have brought laurels to the Department by winning in various competitions organized by various associations of our College and in other inter collegiate competitions. Many of our alumni are placed in renowned positions as gazetted officers and most of our students are working in Government Schools and Colleges and in reputed companies.
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
                                To empower students with a profound understanding of literature, language, and its multifaceted applications in a global context.
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
                              <p className="desc">To develop linguistic proficiency and critical analysis skills. To nurture creativity and an appreciation for diverse literary traditions. To prepare students for careers in academia, media, publishing, and other industries requiring exceptional communication skills.</p>
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
                              <p className="desc">Comprehensive programs designed to provide students with deep understanding of English language and literature.</p>
                              <ul className="list-items">
                                <li><i className="fas fa-list"></i>B.A. English - 3 Years</li>
                                <li><i className="fas fa-list"></i>M.A. English - 2 Years</li>
                                <li><i className="fas fa-list"></i>M.Phil - 2 Years</li>
                                <li><i className="fas fa-list"></i>Ph.D (FT/PT) - Research Program</li>
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
                          <p className="achievement-text">95+ Research Papers Published, 4 Books Published, Board of Studies Members</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-6 pl-0">
                    <div className="h8-funfact-wrapper">
                      <div className="countup-item style-2 h8-funfact-item">
                        <div className="count-inner">
                          <div className="inline-content">
                            <span className="odometer countup-number" data-count="95"></span>
                            <span className="count-plus">+</span>
                          </div>
                          <div className="counter-desc">
                            <h4 className="counter-title">Research Papers</h4>
                            <p className="count-text">Published in various journals and seminar volumes.</p>
                          </div>
                        </div>
                      </div>
                      <div className="countup-item style-2 h8-funfact-item">
                        <div className="count-inner">
                          <div className="inline-content">
                            <span className="odometer countup-number" data-count="38"></span>
                            <span className="count-plus">+</span>
                          </div>
                          <div className="counter-desc">
                            <h4 className="counter-title">Ph.D Scholars</h4>
                            <p className="count-text">Successfully completed Ph.D programs.</p>
                          </div>
                        </div>
                      </div>
                      <div className="countup-item style-2 h8-funfact-item">
                        <div className="count-inner">
                          <div className="inline-content">
                            <span className="odometer countup-number" data-count="58"></span>
                            <span className="count-plus">+</span>
                          </div>
                          <div className="counter-desc">
                            <h4 className="counter-title">M.Phil Scholars</h4>
                            <p className="count-text">Successfully completed M.Phil programs.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* end: Achievements Section */}

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
                          <img src="/assets/images/team/english-aided/Dr.-K.-Radhai.png" alt="" />
                        </div>
                        <div className="social-links">
                          <ul>
                            <li><a href="mailto:radhai.k@jkkn.ac.in" target="_blank"><i className="fa-solid fa-envelope"></i></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="team-content">
                        <h5 className="title">Dr. K. Radhai</h5>
                        <span className="designation">Associate Professor & Head</span>
                        <p className="qualification">M.A., M.Phil., Ph.D.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 h8-team-item-wrapper">
                    <div className="team-item wow fadeInRightBig" data-wow-delay=".3s">
                      <div className="team-img">
                        <div className="team-img-inner">
                          <img src="/assets/images/team/english-aided/Dr.-M.-Eshwari.png" alt="" />
                        </div>
                        <div className="social-links">
                          <ul>
                            <li><a href="mailto:eshwari.m@jkkn.ac.in" target="_blank"><i className="fa-solid fa-envelope"></i></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="team-content">
                        <h5 className="title">Dr. M. Eshwari</h5>
                        <span className="designation">Assistant Professor</span>
                        <p className="qualification">M.A., M.Phil., Ph.D.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 h8-team-item-wrapper">
                    <div className="team-item wow fadeInRightBig" data-wow-delay=".4s">
                      <div className="team-img">
                        <div className="team-img-inner">
                          <img src="/assets/images/team/english-aided/Dr.-R.-Malathi.png" alt="" />
                        </div>
                        <div className="social-links">
                          <ul>
                            <li><a href="mailto:malathi.m@jkkn.ac.in" target="_blank"><i className="fa-solid fa-envelope"></i></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="team-content">
                        <h5 className="title">Dr. R. Malathi</h5>
                        <span className="designation">Assistant Professor</span>
                        <p className="qualification">M.A., M.Phil., Ph.D.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 h8-team-item-wrapper">
                    <div className="team-item wow fadeInRightBig" data-wow-delay=".5s">
                      <div className="team-img">
                        <div className="team-img-inner">
                          <img src="/assets/images/team/english-aided/Dr.-C.-Bharathi.png" alt="" />
                        </div>
                        <div className="social-links">
                          <ul>
                            <li><a href="mailto:bharathi.c@jkkn.ac.in" target="_blank"><i className="fa-solid fa-envelope"></i></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="team-content">
                        <h5 className="title">Dr. C. Bharathi</h5>
                        <span className="designation">Assistant Professor</span>
                        <p className="qualification">M.A., M.Phil., Ph.D.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 h8-team-item-wrapper">
                    <div className="team-item wow fadeInRightBig" data-wow-delay=".6s">
                      <div className="team-img">
                        <div className="team-img-inner">
                          <img src="/assets/images/team/english-aided/Dr.-S.-Sumathi.png" alt="" />
                        </div>
                        <div className="social-links">
                          <ul>
                            <li><a href="mailto:sumathi.s@jkkn.ac.in" target="_blank"><i className="fa-solid fa-envelope"></i></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="team-content">
                        <h5 className="title">Dr. S. Sumathi</h5>
                        <span className="designation">Assistant Professor</span>
                        <p className="qualification">M.A., M.Phil., Ph.D.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 h8-team-item-wrapper">
                    <div className="team-item wow fadeInRightBig" data-wow-delay=".7s">
                      <div className="team-img">
                        <div className="team-img-inner">
                          <img src="/assets/images/team/english-aided/Dr.-A.-Aravinth-Raja.png" alt="" />
                        </div>
                        <div className="social-links">
                          <ul>
                            <li><a href="mailto:aravinthraja.a@jkkn.ac.in" target="_blank"><i className="fa-solid fa-envelope"></i></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="team-content">
                        <h5 className="title">Dr. A. Aravinth Raja</h5>
                        <span className="designation">Assistant Professor</span>
                        <p className="qualification">M.A., M.A.(Linguistics), PGDTE, Ph.D., NET, SET</p>
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


