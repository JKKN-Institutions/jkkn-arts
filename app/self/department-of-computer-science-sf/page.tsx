import Header from '../../components/Header';
import Footer from '../../components/Footer';
import OffcanvasMenu from '../../components/OffcanvasMenu';

export default function DepartmentOfComputerScience() {
  return (
    <>
      {/* start: magic cursor */}
      <div id="magic-cursor">
        <div id="ball"></div>
      </div>
      {/* end: magic cursor */}

      {/* start: Hamburger Menu */}
      <OffcanvasMenu />
      {/* end: Hamburger Menu */}

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
                        <p className="h6-hero-history-desc">Excellence in Computer Science Education with MCA Programme since 1987-1988, fostering innovation and technological leadership.</p>
                      </div>
                      
                    </div>
                  </div>
                  <div className="col-lg-8 col-xl-9">
                    <div className="banner-content-2">
                      <h1 className="banner-title text-anim">Department of Computer Science <i className="fas fa-curve-arrow wow fadeInRight" data-wow-delay=".7s"></i>
                      </h1>
                      <div className="banner-desc-area wow fadeInUp" data-wow-delay=".7s">
                        <a className="tj-primary-btn" href="#">
                          <span className="btn-text"><span>Apply Now</span></span>
                          <span className="btn-icon"><i className="fas fa-arrow-right-long"></i></span>
                        </a>
                        <div className="banner-desc">Vibrant centre of innovation and excellence in Computer Science, preparing students for the dynamic technology landscape with MCA Programme.
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
                        <video autoPlay loop muted playsInline data-wf-ignore="true" data-object-fit="cover" poster="/assets/images/hero/h10-hero-banner.webp">
                          <source src="/assets/video/h10-banner-videio.webp" data-wf-ignore="true" />
                          <source src="/assets/video/h10-banner-videio.webp" data-wf-ignore="true" />
                        </video>
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

            {/* start: Service Section */}
            <section className="h5-service-section h10-service section-gap">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="sec-heading-wrap style-8">
                      <div className="heading-wrap-content">
                        <div className="sec-heading style-3">
                          <span className="sub-title wow fadeInUp" data-wow-delay=".3s"><i className="fas fa-box"></i> Core Areas</span>
                          <h2 className="sec-title text-anim">Comprehensive Computer Science Curriculum.</h2>
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
                                <h4 className="title"><a href="/department-of-computer-science">Artificial Intelligence</a></h4>
                                <p className="desc">Advanced study of AI technologies, machine learning algorithms, and intelligent systems development.
                                </p>
                                <a className="text-btn" href="/department-of-computer-science">
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
                                <h4 className="title"><a href="/department-of-computer-science">Cybersecurity</a></h4>
                                <p className="desc">Comprehensive study of information security, network protection, and cyber threat management.
                                </p>
                                <a className="text-btn" href="/department-of-computer-science">
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
                                <h4 className="title"><a href="/department-of-computer-science">Software Development</a></h4>
                                <p className="desc">Comprehensive study of software engineering principles, programming methodologies, and application development.
                                </p>
                                <a className="text-btn" href="/department-of-computer-science">
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
                                <h4 className="title"><a href="/department-of-computer-science">Data Science</a></h4>
                                <p className="desc">Advanced techniques for data analysis, machine learning, and big data processing technologies.
                                </p>
                                <a className="text-btn" href="/department-of-computer-science">
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
                        <img data-speed=".8" src="/assets/images/img/department-of-computer-science.png" alt="" style={{width: '100%', height: 'auto', maxHeight: '320px', objectFit: 'cover'}} />
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-7">
                    <div className="h10-about-content-wrapper">
                      <div className="sec-heading style-3 ">
                        <span className="sub-title wow fadeInUp" data-wow-delay=".3s"><i className="fas fa-box"></i> ABOUT COMPUTER SCIENCE</span>
                        <h2 className="sec-title title-highlight wow fadeInUp" data-wow-delay=".3s">Vibrant Centre of Innovation and Excellence in Computer Science.
                        </h2>
                      </div>
                      <div className="row">
                        <div className="col-12 col-md-6 d-none d-md-block d-lg-none">
                          <div className="about-img-area h10-about-banner wow bounceInLeft" data-wow-delay=".3s">
                            <div className="about-img">
                              <img src="/assets/images/img/department-of-computer-science.png" alt="" style={{width: '100%', height: 'auto', maxHeight: '320px', objectFit: 'cover'}} />
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-12">
                          <div className="h10-about-content">
                            <div className="customers-box style-3 h10-about-clients wow fadeInUp" data-wow-delay=".4s">
                              <div className="customers">
                                <ul>
                                  <li className="wow fadeInLeft" data-wow-delay=".2s"><img src="/assets/images/testimonial/client-1.webp" alt="" /></li>
                                  <li className="wow fadeInLeft" data-wow-delay=".3s"><img src="/assets/images/testimonial/client-2.webp" alt="" /></li>
                                  <li className="wow fadeInLeft" data-wow-delay=".4s"><img src="/assets/images/testimonial/client-3.webp" alt="" /></li>
                                  <li className="wow fadeInLeft" data-wow-delay=".5s"><span><i className="fas fa-plus"></i></span></li>
                                </ul>
                              </div>
                            </div>

                            <p className="desc wow fadeInUp" data-wow-delay=".4s">The Department of Computer Science is a center of excellence dedicated to fostering innovation and expertise in the ever-evolving field of technology. With a focus on cutting-edge research, hands-on learning, and industry-relevant skills, the department prepares students to excel in diverse domains of computing and to contribute meaningfully to the digital age.</p>
                            
                            <p className="desc wow fadeInUp" data-wow-delay=".5s">Our department offers comprehensive undergraduate and postgraduate programs, providing a strong foundation in computing and opportunities for specialization in areas such as programming and software development, artificial intelligence and machine learning, data science and big data analytics, cybersecurity and network administration, and web and mobile application development.</p>
                            
                            <p className="desc wow fadeInUp" data-wow-delay=".6s">With modern labs featuring advanced computing facilities, expert faculty comprising experienced academicians and industry professionals, and an interdisciplinary approach that fosters collaboration with other fields, we ensure our students are well-prepared for dynamic careers in the technology sector.</p>
                            
                            <div className="h9-about-funfact h10-about-funfact">
                              <div className="countup-item">
                                <div className="inline-content">
                                  <span className="odometer countup-number" data-count="2"></span>
                                  <span className="count-plus"> Years</span>
                                </div>
                                <span className="count-text">MCA comprehensive program.</span>
                              </div>
                              <div className="countup-item">
                                <div className="inline-content">
                                  <span className="odometer countup-number" data-count="95"></span>
                                  <span className="count-plus">%</span>
                                </div>
                                <span className="count-text">Graduate employment rate in IT industry.</span>
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
                      <h2 className="sec-title text-anim">Comprehensive MCA Learning Experience.</h2>
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
                          <p className="desc">Comprehensive theoretical lectures provide students with the necessary foundational knowledge covering programming languages, algorithms, data structures, software engineering, and computer science principles.</p>
                        </div>
                      </div>
                      <div className="h10-process-item tj-sticky-panel-3">
                        <h6 className="h10-process-sln">Practical</h6>
                        <div className="h10-process-icon">
                          <i className="fas fa-laptop-code"></i>
                        </div>
                        <div className="h10-process-content">
                          <h4 className="title">Laboratory Sessions</h4>
                          <p className="desc">Hands-on laboratory practical sessions allow students to gain experience in programming, software development, system analysis, and project implementation using state-of-the-art computer systems.</p>
                        </div>
                      </div>
                      <div className="h10-process-item tj-sticky-panel-3">
                        <h6 className="h10-process-sln">Research</h6>
                        <div className="h10-process-icon">
                          <i className="fas fa-search"></i>
                        </div>
                        <div className="h10-process-content">
                          <h4 className="title">Research Projects</h4>
                          <p className="desc">Research projects provide students with opportunities to apply their knowledge and skills to real-world technology problems and contribute to the advancement of computer science and innovation.</p>
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
                <img src="/assets/images/shape/h7-testimonial-shape-blur.svg" alt="" />
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
                          <h2 className="sec-title text-anim">Foundation for Success in Computer Science.</h2>
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
                            <p>Overall, the MCA program provides students with a solid foundation in the principles and applications of computer science, equipping them with the necessary knowledge and skills to embark on a successful career in the field of information technology, software development, or related disciplines.</p>
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
                                To be a leading department in computer science education and research, shaping professionals and innovators to drive technological advancements for a better world.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-6">
                          <div className="service-item h8-service-item">
                            
                            <h4 className="title">MISSION</h4>
                            <div className="service-content">
                              <p className="desc">To provide high-quality education in computer science, integrating theoretical foundations with practical applications. To promote research and innovation in emerging areas of computing. To equip students with problem-solving, critical thinking, and ethical practices for dynamic careers. To foster collaboration with industry and academia to address global technological challenges.</p>
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
                      <h2 className="sec-title title-anim">Comprehensive Computing Education.</h2>
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
                            
                            <h4 className="title">Programming & Software Development</h4>
                            <div className="service-content">
                              <p className="desc">Comprehensive training in programming languages, software engineering principles, and application development methodologies.</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-4">
                          <div className="service-item h8-service-item">
                            
                            <h4 className="title">AI & Machine Learning</h4>
                            <div className="service-content">
                              <p className="desc">Advanced study of artificial intelligence, machine learning algorithms, and intelligent systems development.</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-4">
                          <div className="service-item h8-service-item">
                            
                            <h4 className="title">Data Science & Analytics</h4>
                            <div className="service-content">
                              <p className="desc">Expertise in data analysis, big data processing, and advanced analytics techniques for business intelligence.</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-4">
                          <div className="service-item h8-service-item">
                            
                            <h4 className="title">Cybersecurity & Networks</h4>
                            <div className="service-content">
                              <p className="desc">Comprehensive study of information security, network protection, and cyber threat management strategies.</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-4">
                          <div className="service-item h8-service-item">
                            
                            <h4 className="title">Web & Mobile Development</h4>
                            <div className="service-content">
                              <p className="desc">Modern web technologies, mobile application development, and responsive design principles.</p>
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
                      <h2 className="sec-title title-anim">Excellence in Computer Science Education.</h2>
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
                            <h4 className="title">Modern Labs</h4>
                            <div className="service-content">
                              <p className="desc">Advanced computing facilities with high-performance systems and industry-standard software.</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-3">
                          <div className="service-item h8-service-item">
                            
                            <h4 className="title">Expert Faculty</h4>
                            <div className="service-content">
                              <p className="desc">A team of experienced academicians and industry professionals with diverse expertise.</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-3">
                          <div className="service-item h8-service-item">
                            <h4 className="title">Interdisciplinary Approach</h4>
                            <div className="service-content">
                              <p className="desc">Collaboration with other fields such as engineering, business, and science to foster innovation.</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-3">
                          <div className="service-item h8-service-item">
                            <h4 className="title">Global Perspective</h4>
                            <div className="service-content">
                              <p className="desc">Exposure to emerging technologies and international trends in computer science.</p>
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
                          <h4 className="title">Hackathons & Coding Competitions</h4>
                          <p className="desc">Platforms for students to showcase their programming and problem-solving skills in competitive environments.</p>
                        </div>
                      </div>
                      <div className="h10-process-item tj-sticky-panel-3">
                        <h6 className="h10-process-sln">Learning</h6>
                        <div className="h10-process-icon">
                          <i className="fas fa-laptop-code"></i>
                        </div>
                        <div className="h10-process-content">
                          <h4 className="title">Workshops & Seminars</h4>
                          <p className="desc">Sessions on trending topics like AI, IoT, blockchain, and cloud computing to keep students updated with latest technologies.</p>
                        </div>
                      </div>
                      <div className="h10-process-item tj-sticky-panel-3">
                        <h6 className="h10-process-sln">Experience</h6>
                        <div className="h10-process-icon">
                          <i className="fas fa-search"></i>
                        </div>
                        <div className="h10-process-content">
                          <h4 className="title">Internships & Live Projects</h4>
                          <p className="desc">Real-world experience through partnerships with leading tech companies and industry collaborations.</p>
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
                <img src="/assets/images/shape/h7-testimonial-shape-blur.svg" alt="" />
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
                            <h4 className="title">Artificial Intelligence & Machine Learning</h4>
                            <div className="service-content">
                              <p className="desc">Advanced research in AI algorithms, neural networks, and intelligent systems development.</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-4">
                          <div className="service-item h8-service-item">
                            <h4 className="title">Internet of Things (IoT)</h4>
                            <div className="service-content">
                              <p className="desc">Research in connected devices, sensor networks, and smart systems integration.</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-4">
                          <div className="service-item h8-service-item">
                            <h4 className="title">Blockchain Technology</h4>
                            <div className="service-content">
                              <p className="desc">Exploring distributed ledger technology, cryptocurrency, and decentralized applications.</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-4">
                          <div className="service-item h8-service-item">
                            <h4 className="title">Human-Computer Interaction</h4>
                            <div className="service-content">
                              <p className="desc">Research in user interface design, usability, and human-centered computing systems.</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-4">
                          <div className="service-item h8-service-item">
                            <h4 className="title">Computational Biology</h4>
                            <div className="service-content">
                              <p className="desc">Interdisciplinary research combining computer science with biological sciences and bioinformatics.</p>
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
                      <h2 className="sec-title title-anim">Diverse Career Paths in Technology.</h2>
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

                            <h4 className="title">Software Developer</h4>
                            <div className="service-content">
                              <p className="desc">Design, develop, and maintain software applications using various programming languages and frameworks.</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-4">
                          <div className="service-item h8-service-item">
                            <h4 className="title">Data Scientist</h4>
                            <div className="service-content">
                              <p className="desc">Analyze complex data sets to extract insights and build predictive models for business intelligence.</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-4">
                          <div className="service-item h8-service-item">
                            
                            <h4 className="title">Cybersecurity Analyst</h4>
                            <div className="service-content">
                              <p className="desc">Protect organizations from cyber threats and ensure information security compliance.</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-4">
                          <div className="service-item h8-service-item">
                            
                            <h4 className="title">System Architect</h4>
                            <div className="service-content">
                              <p className="desc">Design and implement large-scale computer systems and network infrastructure solutions.</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-4">
                          <div className="service-item h8-service-item">
                            
                            <h4 className="title">Cloud Engineer</h4>
                            <div className="service-content">
                              <p className="desc">Manage cloud infrastructure and services for scalable and reliable application deployment.</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-4">
                          <div className="service-item h8-service-item">
                            
                            <h4 className="title">AI/ML Specialist</h4>
                            <div className="service-content">
                              <p className="desc">Develop and implement artificial intelligence and machine learning solutions for various industries.</p>
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
                      <h2 className="sec-title title-anim">Experienced Faculty Members.</h2>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 h8-team-item-wrapper">
                    <div className="team-item wow fadeInRightBig" data-wow-delay=".2s">
                      <div className="team-img">
                        <div className="team-img-inner">
                          <img src="/assets/images/team/cs-sf/Mr.T.Sathes kumar.png" alt="" />
                        </div>
                        <div className="social-links">
                          <ul>
                            <li><a href="mailto:satheskumar.t@jkkn.ac.in" target="_blank"><i className="fa-solid fa-envelope"></i></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="team-content">
                        <h5 className="title">Mr. T. Sathes Kumar</h5>
                        <span className="designation">Assistant Professor & HOD</span>
                        <p className="qualification">M.C.A., M.Phil.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 h8-team-item-wrapper">
                    <div className="team-item wow fadeInRightBig" data-wow-delay=".3s">
                      <div className="team-img">
                        <div className="team-img-inner">
                          <img src="/assets/images/team/cs-sf/DR.N.CHANDRAKALA.png" alt="" />
                        </div>
                        <div className="social-links">
                          <ul>
                            <li><a href="mailto:chandrakala.n@jkkn.ac.in" target="_blank"><i className="fa-solid fa-envelope"></i></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="team-content">
                        <h5 className="title">Dr. N. Chandrakala</h5>
                        <span className="designation">Assistant Professor & HOD</span>
                        <p className="qualification">M.Sc., M.Phil., B.Ed.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 h8-team-item-wrapper">
                    <div className="team-item wow fadeInRightBig" data-wow-delay=".4s">
                      <div className="team-img">
                        <div className="team-img-inner">
                          <img src="/assets/images/team/cs-sf/Mrs.S.Priyanga.png" alt="" />
                        </div>
                        <div className="social-links">
                          <ul>
                            <li><a href="mailto:priyanga.s@jkkn.ac.in" target="_blank"><i className="fa-solid fa-envelope"></i></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="team-content">
                        <h5 className="title">Mrs. S. Priyanga</h5>
                        <span className="designation">Assistant Professor</span>
                        <p className="qualification">M.C.A., M.Phil.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 h8-team-item-wrapper">
                    <div className="team-item wow fadeInRightBig" data-wow-delay=".5s">
                      <div className="team-img">
                        <div className="team-img-inner">
                          <img src="/assets/images/team/cs-sf/Ms.K.Epshiba.png" alt="" />
                        </div>
                        <div className="social-links">
                          <ul>
                            <li><a href="mailto:epshiba.k@jkkn.ac.in" target="_blank"><i className="fa-solid fa-envelope"></i></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="team-content">
                        <h5 className="title">Ms. K. Epshiba</h5>
                        <span className="designation">Assistant Professor</span>
                        <p className="qualification">M.Sc.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 h8-team-item-wrapper">
                    <div className="team-item wow fadeInRightBig" data-wow-delay=".6s">
                      <div className="team-img">
                        <div className="team-img-inner">
                          <img src="/assets/images/team/cs-sf/MRS.D.SAVIETHA.png" alt="" />
                        </div>
                        <div className="social-links">
                          <ul>
                            <li><a href="mailto:savietha.d@jkkn.ac.in" target="_blank"><i className="fa-solid fa-envelope"></i></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="team-content">
                        <h5 className="title">Mrs. D. Savietha</h5>
                        <span className="designation">Assistant Professor</span>
                        <p className="qualification">M.Sc.(CS)</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 h8-team-item-wrapper">
                    <div className="team-item wow fadeInRightBig" data-wow-delay=".7s">
                      <div className="team-img">
                        <div className="team-img-inner">
                          <img src="/assets/images/team/cs-sf/MR.R.PUGALENDHI.png" alt="" />
                        </div>
                        <div className="social-links">
                          <ul>
                            <li><a href="mailto:pugalendhi.r@jkkn.ac.in" target="_blank"><i className="fa-solid fa-envelope"></i></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="team-content">
                        <h5 className="title">Mr. R. Pugalendhi</h5>
                        <span className="designation">Assistant Professor</span>
                        <p className="qualification">M.Sc.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 h8-team-item-wrapper">
                    <div className="team-item wow fadeInRightBig" data-wow-delay=".8s">
                      <div className="team-img">
                        <div className="team-img-inner">
                          <img src="/assets/images/team/cs-sf/Mrs.P.Priyanka.png" alt="" />
                        </div>
                        <div className="social-links">
                          <ul>
                            <li><a href="mailto:priyanka.p@jkkn.ac.in" target="_blank"><i className="fa-solid fa-envelope"></i></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="team-content">
                        <h5 className="title">Mrs. P. Priyanka</h5>
                        <span className="designation">Assistant Professor</span>
                        <p className="qualification">M.Sc., M.Phil., B.Ed.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 h8-team-item-wrapper">
                    <div className="team-item wow fadeInRightBig" data-wow-delay=".9s">
                      <div className="team-img">
                        <div className="team-img-inner">
                          <img src="/assets/images/team/cs-sf/Dr.A.Kamalaveni.png" alt="" />
                        </div>
                        <div className="social-links">
                          <ul>
                            <li><a href="mailto:kamalaveni.a@jkkn.ac.in" target="_blank"><i className="fa-solid fa-envelope"></i></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="team-content">
                        <h5 className="title">Dr. A. Kamalaveni</h5>
                        <span className="designation">Assistant Professor</span>
                        <p className="qualification">MCA., MEd., NET., SET., M.Phil., PhD., M.Sc., NET.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 h8-team-item-wrapper">
                    <div className="team-item wow fadeInRightBig" data-wow-delay="1.0s">
                      <div className="team-img">
                        <div className="team-img-inner">
                          <img src="/assets/images/team/cs-sf/Mrs.J.Devi.png" alt="" />
                        </div>
                        <div className="social-links">
                          <ul>
                            <li><a href="mailto:devi.j@jkkn.ac.in" target="_blank"><i className="fa-solid fa-envelope"></i></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="team-content">
                        <h5 className="title">Mrs. J. Devi</h5>
                        <span className="designation">Assistant Professor</span>
                        <p className="qualification">M.Sc., M.Phil.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 h8-team-item-wrapper">
                    <div className="team-item wow fadeInRightBig" data-wow-delay="1.1s">
                      <div className="team-img">
                        <div className="team-img-inner">
                          <img src="/assets/images/team/cs-sf/Mrs.P.Kowsalya.png" alt="" />
                        </div>
                        <div className="social-links">
                          <ul>
                            <li><a href="mailto:kowsalya.p@jkkn.ac.in" target="_blank"><i className="fa-solid fa-envelope"></i></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="team-content">
                        <h5 className="title">Mrs. P. Kowsalya</h5>
                        <span className="designation">Assistant Professor</span>
                        <p className="qualification">M.C.A.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 h8-team-item-wrapper">
                    <div className="team-item wow fadeInRightBig" data-wow-delay="1.2s">
                      <div className="team-img">
                        <div className="team-img-inner">
                          <img src="/assets/images/team/cs-sf/Mrs.A.Vennila.png" alt="" />
                        </div>
                        <div className="social-links">
                          <ul>
                            <li><a href="mailto:vennila.a@jkkn.ac.in" target="_blank"><i className="fa-solid fa-envelope"></i></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="team-content">
                        <h5 className="title">Mrs. A. Vennila</h5>
                        <span className="designation">Assistant Professor</span>
                        <p className="qualification">M.C.A.</p>
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
          </main>

          {/* start: Footer Section */}
          <Footer />
          {/* end: Footer Section */}
        </div>
      </div>
    </>
  );
}


