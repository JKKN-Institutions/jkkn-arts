import Link from 'next/link';
import Header from './components/Header';
import OffcanvasMenu from './components/OffcanvasMenu';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <OffcanvasMenu />
      <Header />
      
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main id="primary" className="site-main">
            <div className="top-space-15"></div>
            
            {/* start: Banner Slider */}
            <section className="tj-slider-section">
              <div className="swiper hero-slider">
                <div className="swiper-wrapper">
                  <div className="swiper-slide tj-slider-item">
                    <div className="slider-bg-image" data-bg-image="/assets/images/hero/slider-1.jpg"></div>
                    <div className="container">
                      <div className="slider-wrapper">
                        <div className="slider-content">
                          <h1 className="slider-title">Wellcome our <span>Arts College</span></h1>
                          <div className="slider-desc">To cater to the growing demands of society, our College was converted into a Co-Educational institution in 2008.</div>
                          <div className="slider-btn">
                            <Link className="tj-primary-btn" href="#">
                              <span className="btn-text"><span>Get Started</span></span>
                              <span className="btn-icon"><i className="fas fa-arrow-right"></i></span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide tj-slider-item">
                    <div className="slider-bg-image" data-bg-image="/assets/images/hero/slider-2.jpg"></div>
                    <div className="container">
                      <div className="slider-wrapper">
                        <div className="slider-content">
                        <h1 className="slider-title">Wellcome our <span>Arts College</span></h1>
                          <div className="slider-desc">To cater to the growing demands of society, our College was converted into a Co-Educational institution in 2008.</div>
                          <div className="slider-btn">
                            <Link className="tj-primary-btn" href="#">
                              <span className="btn-text"><span>Get Started</span></span>
                              <span className="btn-icon"><i className="fas fa-arrow-right"></i></span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide tj-slider-item">
                    <div className="slider-bg-image" data-bg-image="/assets/images/hero/slider-3.jpg"></div>
                    <div className="container">
                      <div className="slider-wrapper">
                        <div className="slider-content">
                          <h1 className="slider-title">Wellcome our <span>Arts College</span></h1>
                          <div className="slider-desc">To cater to the growing demands of society, our College was converted into a Co-Educational institution in 2008.</div>
                          <div className="slider-btn">
                            <Link className="tj-primary-btn" href="#">
                              <span className="btn-text"><span>Get Started</span></span>
                              <span className="btn-icon"><i className="fas fa-arrow-right"></i></span>
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
                      <i className="fas fa-arrow-left"></i>
                      <i className="fas fa-arrow-left"></i>
                    </span>
                  </div>
                  <div className="slider-next">
                    <span className="anim-icon">
                      <i className="fas fa-arrow-right"></i>
                      <i className="fas fa-arrow-right"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div className="swiper hero-thumb wow fadeIn" data-wow-delay="2s">
                <div className="swiper-wrapper">
                  <div className="swiper-slide thumb-item">
                    <img src="/assets/images/hero/slider-thumb-1.jpg" alt="Thumbnail" />
                  </div>
                  <div className="swiper-slide thumb-item">
                    <img src="/assets/images/hero/slider-thumb-2.jpg" alt="Thumbnail" />
                  </div>
                  <div className="swiper-slide thumb-item">
                    <img src="/assets/images/hero/slider-thumb-3.jpg" alt="Thumbnail" />
                  </div>
                </div>
              </div>
              <div className="circle-text-wrap wow fadeInUp" data-wow-delay="1s">
                <span className="circle-text" data-bg-image="/assets/images/hero/circle-text.webp"></span>
                <a className="circle-icon" href="#"><i className="fas fa-arrow-down"></i></a>
              </div>
            </section>
            {/* end: Banner Slider */}

            

            {/* start: About Section */}
            {/* <section className="tj-about-section section-gap">
              <div className="container">
                <div className="row row-gap-4">
                  <div className="col-lg-4 col-md-6 order-lg-1 order-3">
                    <div className="countup-item style-2 wow fadeInUp" data-wow-delay=".1s">
                      <span className="count-icon"><i className="fas fa-check-circle"></i></span>
                      <span className="steps">01.</span>
                      <div className="count-inner">
                        <span className="count-text">Projects Completed.</span>
                        <div className="inline-content">
                          <span className="odometer countup-number" data-count="93"></span>
                          <span className="count-plus">%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8 col-sm-12 order-lg-2 order-1">
                    <div className="about-content-area-2 wow fadeInUp" data-wow-delay=".3s">
                      <div className="about-content">
                        <div className="sec-heading style-2">
                          <span className="sub-title">About Us</span>
                          <h2 className="sec-title title-highlight">Driving into Excellence & Innovation: Your Trusted Partner for Sustainable Business Success.</h2>
                        </div>
                        <div className="wow fadeInUp" data-wow-delay=".3s">
                          <Link className="text-btn" href="#">
                            <span className="btn-text"><span>Learn More</span></span>
                            <span className="btn-icon"><i className="fas fa-arrow-right"></i></span>
                          </Link>
                        </div>
                      </div>
                      <div className="video-img wow fadeInRight" data-wow-delay=".7s">
                        <img src="/assets/images/img/classroom.png" alt="Image" />
                        <a className="video-btn video-popup" data-autoplay="true" data-vbtype="video" data-maxwidth="1200px" href="https://www.youtube.com/watch?v=MLpWrANjFbI&ab_channel=eidelchteinadvogados">
                          <span><i className="fas fa-play"></i></span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 order-lg-3 order-2">
                    <div className="customers-box style-2 wow fadeInUp" data-wow-delay=".3s">
                      <div className="customers-bg" data-bg-image="/assets/images/img/library.png"></div>
                      <div className="customers">
                        <ul>
                          <li className="wow fadeInLeft" data-wow-delay=".3s"><img src="/assets/images/testimonial/client-1.webp" alt="" /></li>
                          <li className="wow fadeInLeft" data-wow-delay=".4s"><img src="/assets/images/testimonial/client-2.webp" alt="" /></li>
                          <li className="wow fadeInLeft" data-wow-delay=".5s"><img src="/assets/images/testimonial/client-3.webp" alt="" /></li>
                          <li className="wow fadeInLeft" data-wow-delay=".6s"><span><i className="fas fa-plus"></i></span></li>
                        </ul>
                      </div>
                      <h6 className="customers-text wow fadeInLeft" data-wow-delay=".6s">We have 100+ happy customer.</h6>
                      <div className="star-icon zoomInOut"><img src="/assets/images/shape/star.svg" alt="" /></div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 order-lg-4 order-4">
                    <div className="countup-item style-2 wow fadeInUp" data-wow-delay=".5s">
                      <span className="count-icon"><i className="fas fa-globe"></i></span>
                      <span className="steps">02.</span>
                      <div className="count-inner">
                        <span className="count-text">Reach Worldwide</span>
                        <div className="inline-content">
                          <span className="odometer countup-number" data-count="20"></span>
                          <span className="count-plus">M</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 order-lg-5 order-5">
                    <div className="countup-item style-2 wow fadeInUp" data-wow-delay=".7s">
                      <span className="count-icon"><i className="fas fa-chart-line"></i></span>
                      <span className="steps">03.</span>
                      <div className="count-inner">
                        <span className="count-text">Faster Growth</span>
                        <div className="inline-content">
                          <span className="odometer countup-number" data-count="8.5"></span>
                          <span className="count-plus">X</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section> */}
            {/* end: About Section */}
              <br/>
            {/* start: About Section */}
            <section className="tj-about-section h6-about section-gap section-gap-x" style={{ backgroundColor: '#d8e5e5' }}>
              <div className="container">
                <div className="row">
                  <div className="col-xl-6 col-lg-6">
                    <div className="about-content-area h6-about-content style-1 wow fadeInLeft" data-wow-delay=".2s">
                      <div className="sec-heading style-2 style-6">
                        <span className="sub-title wow fadeInUp" data-wow-delay=".3s" style={{ backgroundColor: '#d8e5e5', color: '#000' }}><i className="fas fa-box"></i>About Our College</span>
                        <p className="desc wow fadeInUp" data-wow-delay=".8s" style={{ color: '#6b7474' }}>The College originated with students numbering up to just 100 and with a handful of teachers. It was started as a Government-Aided College and it grew with various Departments over the past four and a half decades. To cater to the growing demands of society, our College was converted into a Co-Educational institution in 2008. At present, the institution offers 13 Under Graduate programs, 9 Post Graduate programs and 10 Research programs with a student strength of 1,969.</p>
                
                      </div>
                      

                      <div className="btn-area wow fadeInUp" data-wow-delay=".8s">
                        <a className="tj-primary-btn" href="#">
                          <span className="btn-text"><span>Know More Us</span></span>
                          <span className="btn-icon"><i className="fas fa-arrow-right"></i></span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6">
                    <div className="about-img-area h6-about-img wow fadeInLeft" data-wow-delay=".2s">
                      <div className="about-img overflow-hidden wow fadeInRight" data-wow-delay=".8s">
                        <img data-speed=".8" src="/assets/images/img/Campus-Life.png" alt="" />
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
            {/* end: About Section */}

            {/* start: Service Section */}
            {/* <section className="tj-service-section service-2 section-gap section-gap-x slidebar-stickiy-container">
              <div className="container">
                <div className="row">
                  <div className="col-lg-4">
                    <div className="content-wrap slidebar-stickiy">
                      <div className="sec-heading style-2">
                        <span className="sub-title wow fadeInUp" data-wow-delay=".3s">Our Solutions</span>
                        <h2 className="sec-title text-white text-anim">Tailored Business Solutions for our <span>Corporates.</span></h2>
                      </div>
                      <div className="wow fadeInUp" data-wow-delay=".6s">
                        <Link className="tj-primary-btn" href="/services">
                          <span className="btn-text"><span>More Services</span></span>
                          <span className="btn-icon"><i className="fas fa-arrow-right"></i></span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <div className="service-wrapper-2">
                      <div className="service-item-wrapper tj-fadein-right-on-scroll">
                        <div className="service-item style-2">
                          <div className="title-area">
                            <div className="service-icon">
                              <i className="fas fa-chart-line"></i>
                            </div>
                            <h4 className="title"><Link href="/service-details">Business Strategy Development</Link></h4>
                          </div>
                          <div className="service-content">
                            <p className="desc">Comprehensive strategies that align with your vision and drive sustainable growth across all business dimensions.</p>
                            <ul className="list-items">
                              <li><i className="fas fa-check"></i>Strategic Planning</li>
                              <li><i className="fas fa-check"></i>Market Analysis</li>
                              <li><i className="fas fa-check"></i>Growth Strategy</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="service-item-wrapper tj-fadein-right-on-scroll">
                        <div className="service-item style-2">
                          <div className="title-area">
                            <div className="service-icon">
                              <i className="fas fa-users"></i>
                            </div>
                            <h4 className="title"><Link href="/service-details">Customer Experience Solutions</Link></h4>
                          </div>
                          <div className="service-content">
                            <p className="desc">Developing personalized customer journeys to increase satisfaction and loyalty of our expansion to keep competitive.</p>
                            <ul className="list-items">
                              <li><i className="fas fa-check"></i>Personalized Customer</li>
                              <li><i className="fas fa-check"></i>Seamless Service</li>
                              <li><i className="fas fa-check"></i>Proactive Support</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="service-item-wrapper tj-fadein-right-on-scroll">
                        <div className="service-item style-2">
                          <div className="title-area">
                            <div className="service-icon">
                              <i className="fas fa-leaf"></i>
                            </div>
                            <h4 className="title"><Link href="/service-details">Sustainability and ESG Consulting</Link></h4>
                          </div>
                          <div className="service-content">
                            <p className="desc">Provide tailored strategies that not only drive long-term value but also build trust with stakeholders, investors.</p>
                            <ul className="list-items">
                              <li><i className="fas fa-check"></i>Strategy Development</li>
                              <li><i className="fas fa-check"></i>Sustainable Business</li>
                              <li><i className="fas fa-check"></i>Impactful Reporting</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="service-item-wrapper tj-fadein-right-on-scroll">
                        <div className="service-item style-2">
                          <div className="title-area">
                            <div className="service-icon">
                              <i className="fas fa-graduation-cap"></i>
                            </div>
                            <h4 className="title"><Link href="/service-details">Training and Development Programs</Link></h4>
                          </div>
                          <div className="service-content">
                            <p className="desc">Training and Development Programs are designed to empower employees with the skills, knowledge, and tools they need.</p>
                            <ul className="list-items">
                              <li><i className="fas fa-check"></i>Leadership Development</li>
                              <li><i className="fas fa-check"></i>Skill Enhancement</li>
                              <li><i className="fas fa-check"></i>Employee Engagement</li>
                            </ul>
                          </div>
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
              <div className="bg-shape-3">
                <img src="/assets/images/shape/shape-blur.svg" alt="" />
              </div>
            </section> */}
            {/* end: Service Section */}

            {/* start: Project Section */}
            {/* <section className="tj-project-section-2 section-gap">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="sec-heading style-2 text-center">
                      <span className="sub-title wow fadeInUp" data-wow-delay=".3s">Proud Projects</span>
                      <h2 className="sec-title text-anim">Breaking Boundaries, Building <span>Dreams.</span></h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-12">
                    <div className="project-wrapper wow fadeInUp" data-wow-delay=".5s">
                      <div className="swiper project-slider">
                        <div className="swiper-wrapper">
                          <div className="swiper-slide">
                            <div className="project-item">
                              <div className="project-img" data-bg-image="/assets/images/img/department-of-computer-science.png"></div>
                              <div className="project-content">
                                <span className="categories"><Link href="/portfolio-details">Business</Link></span>
                                <div className="project-text">
                                  <h3 className="title"><Link href="/portfolio-details">Event Management Platform</Link></h3>
                                  <Link className="project-btn" href="/portfolio-details">
                                    <i className="fas fa-arrow-right-big"></i>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="project-item">
                              <div className="project-img" data-bg-image="/assets/images/img/department-of-chemistry.png"></div>
                              <div className="project-content">
                                <span className="categories"><Link href="/portfolio-details">Business</Link></span>
                                <div className="project-text">
                                  <h3 className="title"><Link href="/portfolio-details">Environmental Impact Dashboard</Link></h3>
                                  <Link className="project-btn" href="/portfolio-details">
                                    <i className="fas fa-arrow-right-big"></i>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="project-item">
                              <div className="project-img" data-bg-image="/assets/images/img/department-of-physics.png"></div>
                              <div className="project-content">
                                <span className="categories"><Link href="/portfolio-details">Business</Link></span>
                                <div className="project-text">
                                  <h3 className="title"><Link href="/portfolio-details">Digital Transformation</Link></h3>
                                  <Link className="project-btn" href="/portfolio-details">
                                    <i className="fas fa-arrow-right-big"></i>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-pagination-area"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section> */}
            {/* end: Project Section */}

            {/* start: Blog Section */}
            <section className="tj-blog-section-2 section-gap">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="sec-heading-wrap">
                      <span className="sub-title wow fadeInUp" data-wow-delay=".3s">Latest Events</span>
                      <div className="heading-wrap-content">
                        <div className="sec-heading style-2">
                          <h2 className="sec-title text-anim">College <span>Events.</span></h2>
                        </div>
                        <div className="slider-navigation d-none d-md-inline-flex wow fadeInUp" data-wow-delay=".7s">
                          <div className="slider-prev">
                            <span className="anim-icon">
                              <i className="fas fa-arrow-left"></i>
                              <i className="fas fa-arrow-left"></i>
                            </span>
                          </div>
                          <div className="slider-next">
                            <span className="anim-icon">
                              <i className="fas fa-arrow-right"></i>
                              <i className="fas fa-arrow-right"></i>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="blog-wrapper wow fadeIn" data-wow-delay=".5s">
                      <div className="swiper blog-slider">
                        <div className="swiper-wrapper">
                          <div className="swiper-slide">
                            <div className="blog-item style-2">
                              <div className="blog-thumb">
                                <Link href="/blog-details?event=blood-donation">
                                  <img src="/assets/images/events/blood-donet.png" alt="Blood Donation Camp" />
                                </Link>
                                <div className="blog-date">
                                  <span className="date">19</span>
                                  <span className="month">Sep</span>
                                </div>
                              </div>
                              <div className="blog-content">
                                <div className="title-area">
                                  <div className="blog-meta">
                                    <span className="categories">
                                      <Link href="#">Social Service</Link>
                                    </span>
                                    <span>By <Link href="#">J.K.K. Nataraja College</Link></span>
                                  </div>
                                  <h4 className="title">
                                    <Link href="/blog-details?event=blood-donation">Blood Donation Camp - Government Blood Bank Collaboration</Link>
                                  </h4>
                                  <p className="description">
                                    J.K.K. Nataraja College of Arts and Science successfully organized a blood donation camp in collaboration with the Government Blood Bank, Tiruchengode, on September 19, 2025. The event took place at 10:00 a.m. in the Nursing College Block.
                                  </p>
                                </div>
                                <Link className="text-btn" href="/blog-details?event=blood-donation">
                                  <span className="btn-text"><span>Read More</span></span>
                                  <span className="btn-icon"><i className="fas fa-arrow-right"></i></span>
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="blog-item style-2">
                              <div className="blog-thumb">
                                <Link href="/blog-details?event=field-trip">
                                  <img src="/assets/images/events/field-trip.png" alt="History Department Field Trip" />
                                </Link>
                                <div className="blog-date">
                                  <span className="date">12</span>
                                  <span className="month">Sep</span>
                                </div>
                              </div>
                              <div className="blog-content">
                                <div className="title-area">
                                  <div className="blog-meta">
                                    <span className="categories">
                                      <Link href="#">Educational Trip</Link>
                                    </span>
                                    <span>By <Link href="#">Department of History</Link></span>
                                  </div>
                                  <h4 className="title">
                                    <Link href="/blog-details?event=field-trip">History Department Field Trip to Keezhadi Museum</Link>
                                  </h4>
                                  <p className="description">
                                    J.K.K. Nataraja College of Arts and Science, Department of History students, accompanied by Head of the Department Dr. R. Kalpanadevipriya, Dr. Vennila, and Mrs. Sarala, Assistant Professors, embarked on an enriching field trip to Keezhadi Museum, Samanar Hills, and Soundararaja Perumal Temple on September 12, 2025.
                                  </p>
                                </div>
                                <Link className="text-btn" href="/blog-details?event=field-trip">
                                  <span className="btn-text"><span>Read More</span></span>
                                  <span className="btn-icon"><i className="fas fa-arrow-right"></i></span>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-pagination-area"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* end: Blog Section */}

            {/* start: Campus Life Section */}
            <div className="tj-working-process section-gap section-gap-x">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="sec-heading-wrap">
                      <span className="sub-title wow fadeInUp" data-wow-delay=".3s">Campus Life</span>
                      <div className="heading-wrap-content">
                        <div className="sec-heading style-2">
                          <h2 className="sec-title text-anim">Vibrant Campus, Endless <span>Opportunities.</span></h2>
                        </div>
                        <p className="desc wow fadeInUp" data-wow-delay=".5s">JKKN Educational Institutions is a vibrant residential campus that allows students to flourish both personally and professionally. Campus life at JKKN is not just about classrooms, libraries and labs.</p>
                        <div className="btn-wrap wow fadeInUp" data-wow-delay=".6s">
                          <Link className="tj-primary-btn" href="#">
                            <span className="btn-text"><span>Explore Campus</span></span>
                            <span className="btn-icon"><i className="fas fa-arrow-right"></i></span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="working-process-area">
                      <div className="process-item wow fadeInLeft" data-wow-delay=".5s">
                        <div className="process-step">
                          <span>01</span>
                        </div>
                        <div className="process-content">
                          <h4 className="title">Academic Excellence</h4>
                          <p className="desc">Our campus provides world-class classrooms, modern libraries, and state-of-the-art laboratories that create an ideal learning environment for students to excel academically.</p>
                        </div>
                      </div>
                      <div className="process-item wow fadeInLeft" data-wow-delay=".7s">
                        <div className="process-step">
                          <span>02</span>
                        </div>
                        <div className="process-content">
                          <h4 className="title">Co-curricular Activities</h4>
                          <p className="desc">Students have numerous opportunities to pursue their favorite activities, refine their skills, and discover new talents through various co-curricular programs and events.</p>
                        </div>
                      </div>
                      <div className="process-item wow fadeInLeft" data-wow-delay=".9s">
                        <div className="process-step">
                          <span>03</span>
                        </div>
                        <div className="process-content">
                          <h4 className="title">Extracurricular Events</h4>
                          <p className="desc">The campus buzzes with varied activities and events throughout the year, providing students with platforms to showcase their talents and develop new interests.</p>
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
            </div>
            {/* end: Campus Life Section */}


            {/* start: Team Section */}
            {/* <section className="tj-team-section section-separator">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="sec-heading text-center style-2">
                      <span className="sub-title wow fadeInUp" data-wow-delay=".3s">Meet Our Team</span>
                      <h2 className="sec-title text-anim">People Behind <span>Bexon.</span></h2>
                    </div>
                  </div>
                </div>
                <div className="row leftSwipeWrap">
                  <div className="col-lg-3 col-sm-6">
                    <div className="team-item left-swipe">
                      <div className="team-img">
                        <div className="team-img-inner">
                          <img src="/assets/images/team/team-1.webp" alt="" />
                        </div>
                        <div className="social-links">
                          <ul>
                            <li><a href="https://www.facebook.com/" target="_blank"><i className="fa-brands fa-facebook-f"></i></a></li>
                            <li><a href="https://www.instagram.com/" target="_blank"><i className="fa-brands fa-instagram"></i></a></li>
                            <li><a href="https://x.com/" target="_blank"><i className="fa-brands fa-x-twitter"></i></a></li>
                            <li><a href="https://www.linkedin.com/" target="_blank"><i className="fa-brands fa-linkedin-in"></i></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="team-content">
                        <h4 className="title"><Link href="/team-details">Eade Marren</Link></h4>
                        <span className="designation">Chief Executive</span>
                        <a className="mail-at" href="mailto:info@bexon.com"><i className="fas fa-at"></i></a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                    <div className="team-item left-swipe">
                      <div className="team-img">
                        <div className="team-img-inner">
                          <img src="/assets/images/team/team-2.webp" alt="" />
                        </div>
                        <div className="social-links">
                          <ul>
                            <li><a href="https://www.facebook.com/" target="_blank"><i className="fa-brands fa-facebook-f"></i></a></li>
                            <li><a href="https://www.instagram.com/" target="_blank"><i className="fa-brands fa-instagram"></i></a></li>
                            <li><a href="https://x.com/" target="_blank"><i className="fa-brands fa-x-twitter"></i></a></li>
                            <li><a href="https://www.linkedin.com/" target="_blank"><i className="fa-brands fa-linkedin-in"></i></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="team-content">
                        <h4 className="title"><Link href="/team-details">Savannah Nguyen</Link></h4>
                        <span className="designation">Operations Head</span>
                        <a className="mail-at" href="mailto:info@bexon.com"><i className="fas fa-at"></i></a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                    <div className="team-item left-swipe">
                      <div className="team-img">
                        <div className="team-img-inner">
                          <img src="/assets/images/team/team-3.webp" alt="" />
                        </div>
                        <div className="social-links">
                          <ul>
                            <li><a href="https://www.facebook.com/" target="_blank"><i className="fa-brands fa-facebook-f"></i></a></li>
                            <li><a href="https://www.instagram.com/" target="_blank"><i className="fa-brands fa-instagram"></i></a></li>
                            <li><a href="https://x.com/" target="_blank"><i className="fa-brands fa-x-twitter"></i></a></li>
                            <li><a href="https://www.linkedin.com/" target="_blank"><i className="fa-brands fa-linkedin-in"></i></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="team-content">
                        <h4 className="title"><Link href="/team-details">Kristin Watson</Link></h4>
                        <span className="designation">Marketing Head</span>
                        <a className="mail-at" href="mailto:info@bexon.com"><i className="fas fa-at"></i></a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                    <div className="team-item left-swipe">
                      <div className="team-img">
                        <div className="team-img-inner">
                          <img src="/assets/images/team/team-4.webp" alt="" />
                        </div>
                        <div className="social-links">
                          <ul>
                            <li><a href="https://www.facebook.com/" target="_blank"><i className="fa-brands fa-facebook-f"></i></a></li>
                            <li><a href="https://www.instagram.com/" target="_blank"><i className="fa-brands fa-instagram"></i></a></li>
                            <li><a href="https://x.com/" target="_blank"><i className="fa-brands fa-x-twitter"></i></a></li>
                            <li><a href="https://www.linkedin.com/" target="_blank"><i className="fa-brands fa-linkedin-in"></i></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="team-content">
                        <h4 className="title"><Link href="/team-details">Albert Flores</Link></h4>
                        <span className="designation">Product Designer</span>
                        <a className="mail-at" href="mailto:info@bexon.com"><i className="fas fa-at"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section> */}
            {/* end: Team Section */}

            <br/>
          </main>

          {/* Circular Scroll Progress Indicator */}
          <div className="scroll-progress-container">
            <div className="scroll-progress-circle">
              <svg className="progress-ring" width="60" height="60">
                <circle
                  className="progress-ring-circle"
                  stroke="#1e8a8a"
                  strokeWidth="3"
                  fill="transparent"
                  r="25"
                  cx="30"
                  cy="30"
                />
              </svg>
              <div className="progress-text">
                <span className="progress-number">0</span>
                <span className="progress-percent">%</span>
              </div>
            </div>
          </div>

          <Footer />
        </div>
    </div>
    </>
  );
}
