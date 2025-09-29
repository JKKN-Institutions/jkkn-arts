import PageLayout from '../../components/PageLayout';
import Image from 'next/image';



export default function DepartmentOfCommerce() {
  return (
    <>
      {/* start: magic cursor */}
      <div id="magic-cursor">
        <div id="ball"></div>
      </div>
      {/* end: magic cursor */}
      {/* start: Header Area */}
      <Header />
      {/* end: Header Area */}

      

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main id="primary" className="site-main">
            <div className="top-space-15"></div>
            {/* Mobile top padding */}
            <div className="d-lg-none" style={{paddingTop: '60px'}}></div>
            {/* start: Banner Section */}
            <section className="tj-banner-section-2 h10-hero section-gap-x zoom-on-scroll-wrapper">
              <div className="container">
                <div className="row flex-column-reverse flex-lg-row">
                  <div className="col-lg-4 col-xl-3">
                    <div className="h10-hero-award-wrapper">
                      <div className="h6-hero-history wow fadeInUp" data-wow-delay=".3s">
                        <div className="h6-hero-history-title">Est. 1987</div>
                        <p className="h6-hero-history-desc">Excellence in Commerce Education with comprehensive programs since 1987-1988, fostering business acumen and financial expertise.</p>
                      </div>
                      
                    </div>
                  </div>
                  <div className="col-lg-8 col-xl-9">
                    <div className="banner-content-2">
                      <h1 className="banner-title text-anim">Department of Commerce <i className="fas fa-curve-arrow wow fadeInRight" data-wow-delay=".7s"></i>
                      </h1>
                      <div className="banner-desc-area wow fadeInUp" data-wow-delay=".7s">
                        <a className="tj-primary-btn" href="#">
                          <span className="btn-text"><span>Apply Now</span></span>
                          <span className="btn-icon"><i className="fas fa-arrow-right-long"></i></span>
                        </a>
                        <div className="banner-desc">Dedicated to cultivating business acumen and financial expertise, equipping students with the knowledge and skills to thrive in the global economy.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container-fluid gap-0">
                <div className="row">
                  <div className="col-12">
                    <div className="h10-hero-banner zoom-on-scroll">
                      <div className="h10-hero-banner-img h10-hero-banner-video">
                        <video autoPlay loop muted playsInline data-wf-ignore="true" data-object-fit="cover" poster="/assets/images/img/department-of-commerce.png">
                          <source src="/assets/video/h10-banner-videio.webp" data-wf-ignore="true" />
                          <source src="/assets/video/h10-banner-videio.webp" data-wf-ignore="true" />
                        </video>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-shape-1">
                <Image src="/assets/images/shape/pattern-2.svg" alt="" width={100} height={100} />
              </div>
              <div className="bg-shape-2">
                <Image src="/assets/images/shape/pattern-3.svg" alt="" width={100} height={100} />
              </div>
            </section>
            {/* end: Banner Section */}

            {/* start: Service Section */}
            <section className="h5-service-section h10-service section-gap">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="sec-heading-wrap style-8">
                      <div className="heading-wrap-content">
                        <div className="sec-heading style-3">
                          <span className="sub-title wow fadeInUp" data-wow-delay=".3s"><i className="fas fa-box"></i> Core Areas</span>
                          <h2 className="sec-title text-anim">Comprehensive Commerce Curriculum.</h2>
                        </div>
                        <div className="btn-area wow fadeInUp" data-wow-delay=".8s">
                          <a className="tj-primary-btn" href="/services">
                            <span className="btn-text"><span>Explore More</span></span>
                            <span className="btn-icon"><i className="fas fa-arrow-right-long"></i></span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row ">
                  <div className="col-12">
                    <div className="service-wrapper h10-service-wrapper wow fadeInUp" data-wow-delay=".4s">
                      <div className="swiper h10-service-slider">
                        <div className="swiper-wrapper">
                          <div className="swiper-slide">
                            <div className="service-item style-4 wow fadeInUp" data-wow-delay=".1s">
                              <h6 className="h10-service-sln">01.</h6>
                              <div className="service-content">
                                <h4 className="title"><a href="/department-of-commerce-sf">Accounting and Finance</a></h4>
                                <p className="desc">Comprehensive study of financial accounting, cost accounting, and financial management principles.
                                </p>
                                <a className="text-btn" href="/department-of-commerce-sf">
                                  <span className="btn-text"><span>Learn More</span></span>
                                  <span className="btn-icon"><i className="fas fa-arrow-right-long"></i></span>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="service-item style-4 wow fadeInUp" data-wow-delay=".3s">
                              <h6 className="h10-service-sln">02.</h6>
                              <div className="service-content">
                                <h4 className="title"><a href="/department-of-commerce-sf">Business Administration</a></h4>
                                <p className="desc">Advanced study of business management, organizational behavior, and strategic planning.
                                </p>
                                <a className="text-btn" href="/department-of-commerce-sf">
                                  <span className="btn-text"><span>Learn More</span></span>
                                  <span className="btn-icon"><i className="fas fa-arrow-right-long"></i></span>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="service-item style-4 wow fadeInUp" data-wow-delay=".7s">
                              <h6 className="h10-service-sln">03.</h6>
                              <div className="service-content">
                                <h4 className="title"><a href="/department-of-commerce-sf">Marketing and Management</a></h4>
                                <p className="desc">Modern marketing strategies, consumer behavior analysis, and management principles.
                                </p>
                                <a className="text-btn" href="/department-of-commerce-sf">
                                  <span className="btn-text"><span>Learn More</span></span>
                                  <span className="btn-icon"><i className="fas fa-arrow-right-long"></i></span>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="service-item style-4 wow fadeInUp" data-wow-delay=".5s">
                              <h6 className="h10-service-sln">04.</h6>
                              <div className="service-content">
                                <h4 className="title"><a href="/department-of-commerce-sf">International Business</a></h4>
                                <p className="desc">Advanced study of global trade, international finance, and cross-cultural business practices.
                                </p>
                                <a className="text-btn" href="/department-of-commerce-sf">
                                  <span className="btn-text"><span>Learn More</span></span>
                                  <span className="btn-icon"><i className="fas fa-arrow-right-long"></i></span>
                                </a>
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
            {/* end: Service Section */}

            

            {/* start: About Section */}
            <section className="h10-about section-gap">
              <div className="container">
                <div className="row flex-column-reverse flex-md-row ">
                  <div className="col-12 col-lg-5 d-block d-md-none d-lg-block">
                    <div className="about-img-area h10-about-banner wow bounceInLeft" data-wow-delay=".3s">
                      <div className="about-img overflow-hidden">
                        <Image data-speed=".8" src="/assets/images/img/department-of-computer-science.png" alt="" width={500} height={400} style={{width: '100%', height: 'auto', maxHeight: '400px', objectFit: 'cover'}} />
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-7">
                    <div className="h10-about-content-wrapper">
                      <div className="sec-heading style-3 ">
                        <span className="sub-title wow fadeInUp" data-wow-delay=".3s"><i className="fas fa-box"></i> ABOUT COMMERCE</span>
                        <h2 className="sec-title title-highlight wow fadeInUp" data-wow-delay=".3s">Dedicated to Cultivating Business Acumen and Financial Expertise.
                        </h2>
                      </div>
                      <div className="row">
                        <div className="col-12 col-md-6 d-none d-md-block d-lg-none">
                          <div className="about-img-area h10-about-banner wow bounceInLeft" data-wow-delay=".3s">
                            <div className="about-img">
                              <Image src="/assets/images/img/department-of-computer-science.png" alt="" width={500} height={300} style={{width: '100%', height: 'auto', maxHeight: '300px', objectFit: 'cover'}} />
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-12">
                          <div className="h10-about-content">
                            <div className="customers-box style-3 h10-about-clients wow fadeInUp" data-wow-delay=".4s">
                              <div className="customers">
                                <ul>
                                  <li className="wow fadeInLeft" data-wow-delay=".2s"><Image src="/assets/images/testimonial/client-1.webp" alt="" width={50} height={50} /></li>
                                  <li className="wow fadeInLeft" data-wow-delay=".3s"><Image src="/assets/images/testimonial/client-2.webp" alt="" width={50} height={50} /></li>
                                  <li className="wow fadeInLeft" data-wow-delay=".4s"><Image src="/assets/images/testimonial/client-3.webp" alt="" width={50} height={50} /></li>
                                  <li className="wow fadeInLeft" data-wow-delay=".5s"><span><i className="fas fa-plus"></i></span></li>
                                </ul>
                              </div>
                            </div>

                            <p className="desc wow fadeInUp" data-wow-delay=".4s">The Department of Commerce is dedicated to cultivating business acumen and financial expertise, equipping students with the knowledge and skills to thrive in the global economy. Through a balanced mix of theoretical concepts and practical applications, the department prepares future leaders, entrepreneurs, and professionals in commerce, finance, and management.</p>
                            
                            <p className="desc wow fadeInUp" data-wow-delay=".5s">Our department offers comprehensive undergraduate and postgraduate programs that cover a wide range of subjects, including accounting and finance, business administration, marketing and management, international business, and taxation and auditing. We focus on developing analytical thinking, problem-solving, and ethical decision-making skills.</p>
                            
                            <p className="desc wow fadeInUp" data-wow-delay=".6s">With experienced faculty comprising qualified professionals with expertise in diverse areas of commerce and business, industry exposure through guest lectures and workshops, and state-of-the-art facilities including commerce labs and comprehensive library resources, we ensure our students are well-prepared for successful careers in the business world.</p>
                            
                            <div className="h9-about-funfact h10-about-funfact">
                              <div className="countup-item">
                                <div className="inline-content">
                                  <span className="odometer countup-number" data-count="2"></span>
                                  <span className="count-plus"> Years</span>
                                </div>
                                <span className="count-text">Comprehensive Commerce programs.</span>
                              </div>
                              <div className="countup-item">
                                <div className="inline-content">
                                  <span className="odometer countup-number" data-count="95"></span>
                                  <span className="count-plus">%</span>
                                </div>
                                <span className="count-text">Graduate employment rate in business sector.</span>
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

            {/* start: Curriculum Section */}
            <section className="h10-process section-gap section-gap-x tj-sticky-panel-3-container">
              <div className="container">
                <div className="row">
                  <div className="col-12 col-lg-5">
                    <div className="sec-heading style-3 tj-sticky-panel-3">
                      <span className="sub-title"><i className="fas fa-box"></i> CURRICULUM STRUCTURE</span>
                      <h2 className="sec-title text-anim">Comprehensive Commerce Learning Experience.</h2>
                      <div className="h10-process-more">
                        <a className="tj-primary-btn" href="#">
                          <span className="btn-text"><span>Apply Now</span></span>
                          <span className="btn-icon"><i className="fas fa-arrow-right-long"></i></span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-7 ">
                    <div className="h10-process-wrapper">
                      <div className="h10-process-item tj-sticky-panel-3">
                        <h6 className="h10-process-sln">Theory</h6>
                        <div className="h10-process-icon">
                          <i className="fas fa-chart-line"></i>
                        </div>
                        <div className="h10-process-content">
                          <h4 className="title">Theoretical Lectures</h4>
                          <p className="desc">Comprehensive theoretical lectures provide students with the necessary foundational knowledge covering accounting principles, business management, financial analysis, and commerce fundamentals.</p>
                        </div>
                      </div>
                      <div className="h10-process-item tj-sticky-panel-3">
                        <h6 className="h10-process-sln">Practical</h6>
                        <div className="h10-process-icon">
                          <i className="fas fa-laptop-code"></i>
                        </div>
                        <div className="h10-process-content">
                          <h4 className="title">Laboratory Sessions</h4>
                          <p className="desc">Hands-on laboratory practical sessions allow students to gain experience in financial analysis, business simulations, market research, and project implementation using state-of-the-art commerce tools and software.</p>
                        </div>
                      </div>
                      <div className="h10-process-item tj-sticky-panel-3">
                        <h6 className="h10-process-sln">Research</h6>
                        <div className="h10-process-icon">
                          <i className="fas fa-search"></i>
                        </div>
                        <div className="h10-process-content">
                          <h4 className="title">Research Projects</h4>
                          <p className="desc">Research projects provide students with opportunities to apply their knowledge and skills to real-world business problems and contribute to the advancement of commerce and business innovation.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-shape-1">
                <Image src="/assets/images/shape/pattern-2.svg" alt="" width={100} height={100} />
              </div>
              <div className="bg-shape-2">
                <Image src="/assets/images/shape/pattern-3.svg" alt="" width={100} height={100} />
              </div>
              <div className="bg-shape-3">
                <Image src="/assets/images/shape/h7-testimonial-shape-blur.svg" alt="" width={100} height={100} />
              </div>
            </section>
            {/* end: Curriculum Section */}

            {/* start: Program Summary Section */}
            <section className="h10-blog section-gap">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="sec-heading-wrap ">
                      <div className="heading-wrap-content">
                        <div className="sec-heading style-3">
                          <span className="sub-title wow fadeInUp" data-wow-delay=".3s"><i className="fas fa-box"></i>Program Summary</span>
                          <h2 className="sec-title text-anim">Foundation for Success in Commerce.</h2>
                        </div>
                        <div className="btn-area wow fadeInUp" data-wow-delay=".8s">
                          <a className="tj-primary-btn" href="#">
                            <span className="btn-text"><span>Apply Now</span></span>
                            <span className="btn-icon"><i className="fas fa-arrow-right-long"></i></span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="blog-wrapper h8-blog-wrapper h10-blog-wrapper">
                      <div className="blog-item style-2 wow fadeInUp" data-wow-delay=".3s">
                        <div className="blog-content">
                          <div className="blog-meta">
                            <div className="blog-date-wrapper">
                              <span className="blog-author">Duration: 2 Years</span>
                            </div>
                            <span className="categories">Master&apos;s Degree</span>
                          </div>
                          <div className="title-area">
                            <h3 className="title">Career Foundation</h3>
                            <p>Overall, the Commerce program provides students with a solid foundation in the principles and applications of commerce and business, equipping them with the necessary knowledge and skills to embark on a successful career in the field of accounting, finance, management, or related disciplines.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* end: Program Summary Section */}

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
                        <div className="col-12 col-md-6 col-xl-6">
                          <div className="service-item h8-service-item">
                          
                            <h4 className="title">VISION</h4>
                            <div className="service-content">
                              <p className="desc">
                                To be a premier department delivering high-quality education and fostering innovation in commerce, finance, and management for the betterment of society.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-6">
                          <div className="service-item h8-service-item">
                            <h4 className="title">MISSION</h4>
                            <div className="service-content">
                              <p className="desc">To provide students with a strong foundation in commerce and related disciplines. To promote analytical thinking, problem-solving, and ethical decision-making. To nurture entrepreneurial and leadership skills for success in dynamic business environments. To encourage research and innovation in commerce and allied fields.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* end: Vision Mission Section */}

            {/* start: Academic Programs Section */}
            <section className="h8-service overflow-hidden section-gap">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="sec-heading style-3 sec-heading-centered">
                      <span className="sub-title wow fadeInUp" data-wow-delay=".3s">
                        <i className="fas fa-box"></i>Academic Programs
                      </span>
                      <h2 className="sec-title title-anim">Comprehensive Commerce Education.</h2>
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
                            <h4 className="title">Accounting and Finance</h4>
                            <div className="service-content">
                              <p className="desc">Comprehensive study of financial accounting, cost accounting, and financial management principles.</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-4">
                          <div className="service-item h8-service-item">
                            <h4 className="title">Business Administration</h4>
                            <div className="service-content">
                              <p className="desc">Advanced study of business management, organizational behavior, and strategic planning for effective leadership.</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-4">
                          <div className="service-item h8-service-item">
                            <h4 className="title">Marketing and Management</h4>
                            <div className="service-content">
                              <p className="desc">Modern marketing strategies, consumer behavior analysis, and management principles for business success.</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-4">
                          <div className="service-item h8-service-item">
                            <h4 className="title">International Business</h4>
                            <div className="service-content">
                              <p className="desc">Advanced study of global trade, international finance, and cross-cultural business practices for global markets.</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-4">
                          <div className="service-item h8-service-item">
                            <h4 className="title">Taxation and Auditing</h4>
                            <div className="service-content">
                              <p className="desc">Comprehensive study of tax laws, auditing principles, and compliance management strategies.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* end: Academic Programs Section */}

            {/* start: Key Features Section */}
            <section className="h8-service overflow-hidden section-gap">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="sec-heading style-3 sec-heading-centered">
                      <span className="sub-title wow fadeInUp" data-wow-delay=".3s"><i className="fas fa-box"></i> Key Features</span>
                      <h2 className="sec-title title-anim">Excellence in Commerce Education.</h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container gap-30">
                <div className="row">
                  <div className="col-12">
                    <div className="service-wrapper h8-service-wrapper wow bounceInLeft" data-wow-delay=".3s">
                      <div className="row">
                        <div className="col-12 col-md-6 col-xl-3">
                          <div className="service-item h8-service-item">
                            <h4 className="title">Commerce Lab</h4>
                            <div className="service-content">
                              <p className="desc">Advanced tools and resources for financial analysis, business simulations, and market research.</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-3">
                          <div className="service-item h8-service-item">
                            <h4 className="title">Experienced Faculty</h4>
                            <div className="service-content">
                              <p className="desc">A team of qualified professionals with expertise in diverse areas of commerce and business.</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-3">
                          <div className="service-item h8-service-item">
                            <h4 className="title">Industry Exposure</h4>
                            <div className="service-content">
                              <p className="desc">Regular interaction with industry experts through guest lectures, seminars, and workshops.</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-3">
                          <div className="service-item h8-service-item">
                            <h4 className="title">Skill Development</h4>
                            <div className="service-content">
                              <p className="desc">Focus on communication, leadership, and analytical skills to prepare students for competitive careers.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* end: Key Features Section */}

            {/* start: Activities & Initiatives Section */}
            <section className="h10-process section-gap section-gap-x tj-sticky-panel-3-container">
              <div className="container">
                <div className="row">
                  <div className="col-12 col-lg-5">
                    <div className="sec-heading style-3 tj-sticky-panel-3">
                      <span className="sub-title"><i className="fas fa-box"></i> Activities & Initiatives</span>
                      <h2 className="sec-title text-anim">Engaging Learning Experiences.</h2>
                    </div>
                  </div>
                  <div className="col-12 col-lg-7 ">
                    <div className="h10-process-wrapper">
                      <div className="h10-process-item tj-sticky-panel-3">
                        <h6 className="h10-process-sln">Competitions</h6>
                        <div className="h10-process-icon">
                        <i className="fas fa-chart-line"></i>
                        </div>
                        <div className="h10-process-content">
                          <h4 className="title">Commerce Club</h4>
                          <p className="desc">A platform for students to develop practical skills through activities like business quizzes, case studies, and group discussions.</p>
                        </div>
                      </div>
                      <div className="h10-process-item tj-sticky-panel-3">
                        <h6 className="h10-process-sln">Learning</h6>
                        <div className="h10-process-icon">
                          <i className="fas fa-laptop-code"></i>
                        </div>
                        <div className="h10-process-content">
                          <h4 className="title">Entrepreneurship Cell</h4>
                          <p className="desc">Encouraging innovation and startup culture through workshops and mentoring.</p>
                        </div>
                      </div>
                      <div className="h10-process-item tj-sticky-panel-3">
                        <h6 className="h10-process-sln">Experience</h6>
                        <div className="h10-process-icon">
                          <i className="fas fa-search"></i>
                        </div>
                        <div className="h10-process-content">
                          <h4 className="title">Industrial Visits</h4>
                          <p className="desc">Exposure to real-world business operations and practices through company visits and internships.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-shape-1">
                <Image src="/assets/images/shape/pattern-2.svg" alt="" width={100} height={100} />
              </div>
              <div className="bg-shape-2">
                <Image src="/assets/images/shape/pattern-3.svg" alt="" width={100} height={100} />
              </div>
              <div className="bg-shape-3">
                <Image src="/assets/images/shape/h7-testimonial-shape-blur.svg" alt="" width={100} height={100} />
              </div>
            </section>
            {/* end: Activities & Initiatives Section */}

            {/* start: Research & Development Section */}
            <section className="h8-service overflow-hidden section-gap">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="sec-heading style-3 sec-heading-centered">
                      <span className="sub-title wow fadeInUp" data-wow-delay=".3s">
                        <i className="fas fa-box"></i> Research & Development
                      </span>
                      <h2 className="sec-title title-anim">Cutting-Edge Research Areas.</h2>
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
                            <h4 className="title">Financial Analysis and Investment Management</h4>
                            <div className="service-content">
                              <p className="desc">Advanced research in financial modeling, investment strategies, and risk management techniques.</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-4">
                          <div className="service-item h8-service-item">
                            <h4 className="title">Marketing Research and Consumer Behavior</h4>
                            <div className="service-content">
                              <p className="desc">Advanced research in market analysis, consumer psychology, and brand management strategies.</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-4">
                          <div className="service-item h8-service-item">
                            <h4 className="title">International Trade and Economics</h4>
                            <div className="service-content">
                              <p className="desc">Research in global trade policies, economic development, and international business strategies.</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-4">
                          <div className="service-item h8-service-item">
                            <h4 className="title">Taxation and Compliance</h4>
                            <div className="service-content">
                              <p className="desc">Research in tax policies, compliance frameworks, and regulatory business environments.</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-4">
                          <div className="service-item h8-service-item">
                            <h4 className="title">Entrepreneurship and Innovation</h4>
                            <div className="service-content">
                              <p className="desc">Research in startup ecosystems, innovation management, and entrepreneurial development strategies.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* end: Research & Development Section */}

            {/* start: Career Opportunities Section */}
            <section className="h8-service overflow-hidden section-gap">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="sec-heading style-3 sec-heading-centered">
                      <span className="sub-title wow fadeInUp" data-wow-delay=".3s"><i className="fas fa-box"></i> Career Opportunities</span>
                      <h2 className="sec-title title-anim">Diverse Career Paths in Commerce.</h2>
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
                            <h4 className="title">Chartered Accountant</h4>
                            <div className="service-content">
                              <p className="desc">Provide accounting, auditing, and financial consulting services to businesses and individuals.</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-4">
                          <div className="service-item h8-service-item">
                            <h4 className="title">Financial Analyst</h4>
                            <div className="service-content">
                              <p className="desc">Analyze financial data, prepare reports, and provide investment recommendations to businesses.</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-4">
                          <div className="service-item h8-service-item">
                            <h4 className="title">Marketing Executive</h4>
                            <div className="service-content">
                              <p className="desc">Develop marketing strategies, manage campaigns, and analyze consumer behavior for business growth.</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-4">
                          <div className="service-item h8-service-item">
                            <h4 className="title">Business Consultant</h4>
                            <div className="service-content">
                              <p className="desc">Provide expert advice on business strategies and help organizations optimize their operations and growth.</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-4">
                          <div className="service-item h8-service-item">
                            <h4 className="title">Tax Consultant</h4>
                            <div className="service-content">
                              <p className="desc">Provide tax planning, compliance, and advisory services to businesses and individuals.</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-4">
                          <div className="service-item h8-service-item">
                            <h4 className="title">Entrepreneur</h4>
                            <div className="service-content">
                              <p className="desc">Start and manage your own business ventures with comprehensive knowledge of commerce and management.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* end: Career Opportunities Section */}

            {/* start: Faculty Section */}
            <section className="h8-team section-gap section-gap-x">
              <div className="container">
                <div className="row h8-team-wrapper gap-0">
                        <div className="col-lg-3 col-sm-6">
                    <div className="sec-heading style-3">
                      <span className="sub-title wow fadeInUp" data-wow-delay=".3s">MEET OUR FACULTY</span>
                      <h2 className="sec-title title-anim">Experienced Commerce Faculty Members.</h2>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 h8-team-item-wrapper">
                    <div className="team-item wow fadeInRightBig" data-wow-delay=".2s">
                      <div className="team-img">
                        <div className="team-img-inner">
                          <Image src="/assets/images/team/commerce-sf/Mrs.M.S.Punithamalar.png" alt="" width={300} height={400} />
                        </div>
                        <div className="social-links">
                          <ul>
                            <li><a href="mailto:punithamalar.m@jkkn.ac.in" target="_blank"><i className="fa-solid fa-envelope"></i></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="team-content">
                        <h5 className="title">Mrs. M. S. Punithamalar</h5>
                        <span className="designation">Assistant Professor & HOD</span>
                        <p className="qualification">M.Com(CA), MBA, M.Phil., (Ph.D)</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 h8-team-item-wrapper">
                    <div className="team-item wow fadeInRightBig" data-wow-delay=".3s">
                      <div className="team-img">
                        <div className="team-img-inner">
                          <Image src="/assets/images/team/commerce-sf/Mrs.S.Saranya.png" alt="" width={300} height={400} />
                        </div>
                        <div className="social-links">
                          <ul>
                            <li><a href="mailto:saranya.s@jkkn.ac.in" target="_blank"><i className="fa-solid fa-envelope"></i></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="team-content">
                        <h5 className="title">Mrs. S. Saranya</h5>
                        <span className="designation">Assistant Professor</span>
                        <p className="qualification">M.Com(CA), M.Phil., (Ph.D)</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 h8-team-item-wrapper">
                    <div className="team-item wow fadeInRightBig" data-wow-delay=".4s">
                      <div className="team-img">
                        <div className="team-img-inner">
                          <Image src="/assets/images/team/commerce-sf/Mrs.T.Kokila.png" alt="" width={300} height={400} />
                        </div>
                        <div className="social-links">
                          <ul>
                            <li><a href="mailto:kokila.t@jkkn.ac.in" target="_blank"><i className="fa-solid fa-envelope"></i></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="team-content">
                        <h5 className="title">Mrs. T. Kokila</h5>
                        <span className="designation">Assistant Professor</span>
                        <p className="qualification">M.Com(CA), M.Phil.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 h8-team-item-wrapper">
                    <div className="team-item wow fadeInRightBig" data-wow-delay=".5s">
                      <div className="team-img">
                        <div className="team-img-inner">
                          <Image src="/assets/images/team/commerce-sf/Mrs.P.Manimegalai.png" alt="" width={300} height={400} />
                        </div>
                        <div className="social-links">
                          <ul>
                            <li><a href="mailto:manimegalai.p@jkkn.ac.in" target="_blank"><i className="fa-solid fa-envelope"></i></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="team-content">
                        <h5 className="title">Mrs. P. Manimegalai</h5>
                        <span className="designation">Assistant Professor</span>
                        <p className="qualification">M.Com(CA), M.Phil.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 h8-team-item-wrapper">
                    <div className="team-item wow fadeInRightBig" data-wow-delay=".6s">
                      <div className="team-img">
                        <div className="team-img-inner">
                          <Image src="/assets/images/team/commerce-sf/Ms.G.Buvaneswari.png" alt="" width={300} height={400} />
                        </div>
                        <div className="social-links">
                          <ul>
                            <li><a href="mailto:buvaneswari.g@jkkn.ac.in" target="_blank"><i className="fa-solid fa-envelope"></i></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="team-content">
                        <h5 className="title">Ms. G. Buvaneswari</h5>
                        <span className="designation">Assistant Professor</span>
                        <p className="qualification">M.Com, M.Phil.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 h8-team-item-wrapper">
                    <div className="team-item wow fadeInRightBig" data-wow-delay=".7s">
                      <div className="team-img">
                        <div className="team-img-inner">
                          <Image src="/assets/images/team/commerce-sf/Mrs.N.Lingameena.png" alt="" width={300} height={400} />
                        </div>
                        <div className="social-links">
                          <ul>
                            <li><a href="mailto:lingameena.n@jkkn.ac.in" target="_blank"><i className="fa-solid fa-envelope"></i></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="team-content">
                        <h5 className="title">Mrs. N. Lingameena</h5>
                        <span className="designation">Assistant Professor</span>
                        <p className="qualification">M.A, M.Phil.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 h8-team-item-wrapper">
                    <div className="team-item wow fadeInRightBig" data-wow-delay=".8s">
                      <div className="team-img">
                        <div className="team-img-inner">
                          <Image src="/assets/images/team/commerce-sf/Mr.A.Jegadishkumar.png" alt="" width={300} height={400} />
                        </div>
                        <div className="social-links">
                          <ul>
                            <li><a href="mailto:jegadishkumar.a@jkkn.ac.in" target="_blank"><i className="fa-solid fa-envelope"></i></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="team-content">
                        <h5 className="title">Mr. A. Jegadishkumar</h5>
                        <span className="designation">Assistant Professor</span>
                        <p className="qualification">M.Com, B.Ed, MBA</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 h8-team-item-wrapper">
                    <div className="team-item wow fadeInRightBig" data-wow-delay=".9s">
                      <div className="team-img">
                        <div className="team-img-inner">
                          <Image src="/assets/images/team/commerce-sf/Ms.C.Agalya.png" alt="" width={300} height={400} />
                        </div>
                        <div className="social-links">
                          <ul>
                            <li><a href="mailto:agalya.c@jkkn.ac.in" target="_blank"><i className="fa-solid fa-envelope"></i></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="team-content">
                        <h5 className="title">Ms. C. Agalya</h5>
                        <span className="designation">Assistant Professor</span>
                        <p className="qualification">M.Com(CA)</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 h8-team-item-wrapper">
                    <div className="team-item wow fadeInRightBig" data-wow-delay="1.0s">
                      <div className="team-img">
                        <div className="team-img-inner">
                          <Image src="/assets/images/team/commerce-sf/Mrs.M.Sangeetha.png" alt="" width={300} height={400} />
                        </div>
                        <div className="social-links">
                          <ul>
                            <li><a href="mailto:sangeetha.m@jkkn.ac.in" target="_blank"><i className="fa-solid fa-envelope"></i></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="team-content">
                        <h5 className="title">Mrs. M. Sangeetha</h5>
                        <span className="designation">Assistant Professor</span>
                        <p className="qualification">M.Com(CA), B.Ed</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 h8-team-item-wrapper">
                    <div className="team-item wow fadeInRightBig" data-wow-delay="1.1s">
                      <div className="team-img">
                        <div className="team-img-inner">
                          <Image src="/assets/images/team/commerce-sf/Mr.S.Govindharaj.png" alt="" width={300} height={400} />
                        </div>
                        <div className="social-links">
                          <ul>
                            <li><a href="mailto:govindharaj.s@jkkn.ac.in" target="_blank"><i className="fa-solid fa-envelope"></i></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="team-content">
                        <h5 className="title">Mr. S. Govindharaj</h5>
                        <span className="designation">Assistant Professor</span>
                        <p className="qualification">M.Com, M.Phil., (Ph.D)</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 h8-team-item-wrapper">
                    <div className="team-item wow fadeInRightBig" data-wow-delay="1.2s">
                      <div className="team-img">
                        <div className="team-img-inner">
                          <Image src="/assets/images/team/commerce-sf/Dr.M.Palanisamy.png" alt="" width={300} height={400} />
                        </div>
                        <div className="social-links">
                          <ul>
                            <li><a href="mailto:palanisamy.m@jkkn.ac.in" target="_blank"><i className="fa-solid fa-envelope"></i></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="team-content">
                        <h5 className="title">Dr. M. Palanisamy</h5>
                        <span className="designation">Assistant Professor</span>
                        <p className="qualification">MA(ECO), M.Phil., Ph.D</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-shape-1">
                <Image src="/assets/images/shape/pattern-2.svg" alt="" width={100} height={100} />
              </div>
              <div className="bg-shape-2">
                <Image src="/assets/images/shape/pattern-3.svg" alt="" width={100} height={100} />
              </div>
            </section>
            {/* end: Faculty Section */}
          </main>

          {/* start: Footer Section */}
          <Footer />
          {/* end: Footer Section */}
        </div>
      </div>
    </>
  );
}


