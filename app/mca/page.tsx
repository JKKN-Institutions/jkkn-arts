import Link from 'next/link';
import Image from 'next/image';
import PageLayout from '../components/PageLayout';



export default function MCAPage() {
  return (
    <PageLayout>
            <div className="top-space-15"></div>
            {/* Mobile top padding */}
            <div className="d-lg-none" style={{paddingTop: '60px'}}></div>
            
            {/* start: Banner Section */}
            <section className="tj-banner-section-2 h10-hero section-gap-x zoom-on-scroll-wrapper pb-5">
              <div className="container">
                <div className="row flex-column-reverse flex-lg-row">
                  <div className="col-lg-4 col-xl-3">
                    <div className="h10-hero-award-wrapper">
                      <div className="h6-hero-history wow fadeInUp" data-wow-delay=".3s">
                        <div className="h6-hero-history-title">Est. 1987</div>
                        <p className="h6-hero-history-desc">Excellence in Computer Applications with MCA program established in 1987-1988, approved by AICTE in 2018-2019.</p>
                      </div>
                      
                    </div>
                  </div>
                  <div className="col-lg-8 col-xl-9">
                    <div className="banner-content-2">
                      <h1 className="banner-title text-anim">Master of Computer Applications <i className="fas fa-arrow-trend-up wow fadeInRight" data-wow-delay=".7s"></i>
                      </h1>
                      <div className="banner-desc-area wow fadeInUp" data-wow-delay=".7s">
                        <Link className="tj-primary-btn" href="#">
                          <span className="btn-text"><span>Apply Now</span></span>
                          <span className="btn-icon"><i className="fas fa-arrow-right"></i></span>
                        </Link>
                        <div className="banner-desc">Advanced postgraduate program focusing on Computer Science and Applications, providing comprehensive knowledge in software development, programming, and modern technologies.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-shape-1">
                <Image src="/assets/images/shape/pattern-2.svg" alt="" width={400} height={300} style={{ width: "100%", height: "auto" }} />
              </div>
              <div className="bg-shape-2">
                <Image src="/assets/images/shape/pattern-3.svg" alt="" width={400} height={300} style={{ width: "100%", height: "auto" }} />
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
                                <i className="fas fa-box"></i>About MCA Program
                              </span>
                            </div>
                          </div>
                          <div className="col-12 col-lg-8">
                            <div className="h8-about-content-inner">
                              <h2 className="sec-title title-highlight">
                                Master of Computer Applications - Advanced Technology Education Since 1987
                              </h2>
                            </div>
                          </div>
                        </div>
                        <div className="row align-items-center">
                          <div className="col-12 col-lg-4">
                            <div className="h8-about-video">
                              <Image src="/assets/images/img/department-of-english.png" alt="" width={400} height={300} style={{ width: "100%", height: "auto" }} />
                            </div>
                          </div>
                          <div className="col-12 col-lg-8">
                            <div className="h8-about-item-wrapper">
                              <div className="h8-about-item h8-about-item-counter">
                                <div className="countup-item style-2">
                                  <div className="count-inner">
                                    <div className="inline-content">
                                      <span className="odometer countup-number" data-count="36"></span>
                                      <sup className="count-plus">+</sup>
                                    </div>
                                    <span className="count-text">Years of Excellence in Computer Applications.</span>
                                  </div>
                                </div>
                              </div>
                              <div className="h8-about-item h8-about-item-desc">
                                <div className="h8-about-item-content">
                                  <p className="desc">
                                    The Master of Computer Applications (MCA) is a postgraduate degree program that focuses on advanced knowledge and skills in the field of Computer Science and Applications. The course is designed to provide students with a comprehensive understanding of Software development, Programming languages, Algorithms, Database management, Data Structures and various other aspects of computer science. The MCA program typically spans over a duration of two years, divided into four semesters.
                                  </p>
                                  <div className="about-btn-area-2 wow fadeInUp" data-wow-delay="1s">
                                    <Link className="tj-primary-btn" href="#">
                                      <span className="btn-text"><span>Learn More</span></span>
                                      <span className="btn-icon"><i className="fas fa-arrow-right"></i></span>
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
                        <i className="fas fa-box"></i>Program Overview
                      </span>
                      <h2 className="sec-title title-anim">MCA Program Structure and Outcomes.</h2>
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
                              <i className="fas fa-hourglass-half"></i>
                            </div>
                            <h4 className="title">PROGRAM DURATION</h4>
                            <div className="service-content">
                              <p className="desc">
                                The MCA program spans over two years, divided into four semesters. The curriculum provides a holistic understanding of both foundational and advanced concepts in Computer Applications through theoretical as well as practical modes.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-4">
                          <div className="service-item h8-service-item">
                            <div className="service-icon">
                              <i className="fas fa-code"></i>
                            </div>
                            <h4 className="title">CORE COURSES</h4>
                            <div className="service-content">
                              <p className="desc">Students delve into core courses such as Computer programming, Data structures, Data mining, Web technologies, Machine learning, Data Analytics, and Operating systems. The program also offers elective courses in Data engineering, Soft computing, Computer vision, Cyber Security, and Social networks.</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-4">
                          <div className="service-item h8-service-item">
                            <div className="service-icon">
                              <i className="fas fa-briefcase"></i>
                            </div>
                            <h4 className="title">CAREER OPPORTUNITIES</h4>
                            <div className="service-content">
                              <p className="desc">Graduates are equipped with comprehensive skills for careers as software engineers, system analysts, database administrators, web developers, IT consultants, and project managers.</p>
                              <ul className="list-items">
                                <li><i className="fas fa-check"></i>Software Development</li>
                                <li><i className="fas fa-check"></i>System Analysis</li>
                                <li><i className="fas fa-check"></i>Database Administration</li>
                                <li><i className="fas fa-check"></i>Web Development</li>
                                <li><i className="fas fa-check"></i>IT Consulting</li>
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
                        <span className="btn-icon"><i className="fas fa-arrow-right"></i></span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* end: Vision Mission Section */}

            

            

          </PageLayout>
  );
}



