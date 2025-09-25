import Link from 'next/link';
import Header from '../components/Header';
import OffcanvasMenu from '../components/OffcanvasMenu';
import Footer from '../components/Footer';

export default function DepartmentOfTextileAndFashionDesigning() {
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
                        <div className="h6-hero-history-title">Est. 2015</div>
                        <p className="h6-hero-history-desc">Excellence in Textile and Fashion Designing Education with passionate faculty members and active student participation in national-level seminars and conferences.</p>
                      </div>
                      <div className="circle-text-wrap wow bounceInLeft" data-wow-delay=".5s">
                        <span className="circle-text" data-bg-image="/assets/images/icons/award-rounded-text.svg"></span>
                        <div className="circle-icon"><i className="fas fa-w-dot"></i></div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8 col-xl-9">
                    <div className="banner-content-2">
                      <h1 className="banner-title text-anim">Department of Textile and Fashion Designing <i className="fas fa-curve-arrow wow fadeInRight" data-wow-delay=".7s"></i>
                      </h1>
                      <div className="banner-desc-area wow fadeInUp" data-wow-delay=".7s">
                        <Link className="tj-primary-btn" href="#">
                          <span className="btn-text"><span>Apply Now</span></span>
                          <span className="btn-icon"><i className="fas fa-arrow-right-long"></i></span>
                        </Link>
                        <div className="banner-desc">Comprehensive programs in textile and fashion designing with passionate faculty members and active student participation in academic conferences and seminars.
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
                                Department of Textile and Fashion Designing - Excellence in Design Education Since 2015
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
                                    <span className="odometer countup-number" data-count="9"></span>
                                    <sup className="count-plus">+</sup>
                                  </div>
                                  <span className="count-text">Years of Academic Excellence.</span>
                                  </div>
                                </div>
                              </div>
                              <div className="h8-about-item h8-about-item-desc">
                                <div className="h8-about-item-content">
                                  <p className="desc">
                                    The Department of Textile and Fashion Designing, established in 2015, has made significant achievements and contributions through passionate faculty members who have presented papers and served as guest lecturers at esteemed institutions. This engagement enhances the department's reputation and brings valuable insights to students. Numerous students actively participated in national-level seminars and conferences in 2018, held at Periyar University, demonstrating commitment to academic and professional growth.
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
                              <i className="fas fa-service-5"></i>
                            </div>
                            <h4 className="title">VISION</h4>
                            <div className="service-content">
                              <p className="desc">
                                To be a leading center of excellence in textile and fashion designing education, fostering creativity, innovation, and professional growth through continuous learning and industry engagement.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-4">
                          <div className="service-item h8-service-item">
                            <div className="service-icon">
                              <i className="fas fa-service-1"></i>
                            </div>
                            <h4 className="title">MISSION</h4>
                            <div className="service-content">
                              <p className="desc">To provide comprehensive education in textile and fashion designing that combines theoretical knowledge with practical skills, encouraging active participation in academic conferences and seminars to enhance learning and professional development.</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-4">
                          <div className="service-item h8-service-item">
                            <div className="service-icon">
                              <i className="fas fa-service-3"></i>
                            </div>
                            <h4 className="title">ACADEMIC PROGRAMS</h4>
                            <div className="service-content">
                              <p className="desc">Comprehensive programs designed to provide students with practical knowledge and skills required in the textile and fashion designing industry.</p>
                              <ul className="list-items">
                                <li><i className="fas fa-list"></i>Textile Design - 3 Years</li>
                                <li><i className="fas fa-list"></i>Fashion Design - 3 Years</li>
                                <li><i className="fas fa-list"></i>Professional Development</li>
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
                      <h2 className="sec-title title-anim">Faculty Excellence and Student Participation in Academic Events.</h2>
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
                          <p className="achievement-text">Passionate faculty members presenting papers and serving as guest lecturers at esteemed institutions</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-6 pl-0">
                    <div className="h8-funfact-wrapper">
                      <div className="countup-item style-2 h8-funfact-item">
                        <div className="count-inner">
                          <div className="inline-content">
                            <span className="odometer countup-number" data-count="100"></span>
                            <span className="count-plus">+</span>
                          </div>
                          <div className="counter-desc">
                            <h4 className="counter-title">Faculty Presentations</h4>
                            <p className="count-text">Papers presented and guest lectures delivered at esteemed institutions.</p>
                          </div>
                        </div>
                      </div>
                      <div className="countup-item style-2 h8-funfact-item">
                        <div className="count-inner">
                          <div className="inline-content">
                            <span className="odometer countup-number" data-count="188"></span>
                            <span className="count-plus">+</span>
                          </div>
                          <div className="counter-desc">
                            <h4 className="counter-title">Student Participation</h4>
                            <p className="count-text">Active participation in national-level seminars and conferences at Periyar University in 2018.</p>
                          </div>
                        </div>
                      </div>
                      <div className="countup-item style-2 h8-funfact-item">
                        <div className="count-inner">
                          <div className="inline-content">
                            <span className="odometer countup-number" data-count="2"></span>
                            <span className="count-plus">+</span>
                          </div>
                          <div className="counter-desc">
                            <h4 className="counter-title">Academic Growth</h4>
                            <p className="count-text">Continuous cycle of learning and improvement benefiting students and department reputation.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* end: Achievements Section */}

            

            <br/>
            <Footer />
          </main>
        </div>
      </div>
    </>
  );
}


