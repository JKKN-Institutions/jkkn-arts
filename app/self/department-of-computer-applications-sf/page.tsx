import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function DepartmentOfComputerApplications() {
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
                        <p className="h6-hero-history-desc">Excellence in Computer Science Education with MCA Programme since 1987-1988, fostering innovation and technological leadership.</p>
                      </div>
                      
                    </div>
                  </div>
                  <div className="col-lg-8 col-xl-9">
                    <div className="banner-content-2">
                      <h1 className="banner-title text-anim">Department of Computer Applications <i className="fas fa-curve-arrow wow fadeInRight" data-wow-delay=".7s"></i>
                      </h1>
                      <div className="banner-desc-area wow fadeInUp" data-wow-delay=".7s">
                        <a className="tj-primary-btn" href="#">
                          <span className="btn-text"><span>Apply Now</span></span>
                          <span className="btn-icon"><i className="fas fa-arrow-right-long"></i></span>
                        </a>
                        <div className="banner-desc">Committed to shaping future-ready professionals with a strong foundation in software development, programming, and emerging technologies.
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
                          <h2 className="sec-title text-anim">Comprehensive Computer Applications Curriculum.</h2>
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
                                <h4 className="title"><a href="/department-of-computer-applications-sf">Software Development</a></h4>
                                <p className="desc">Comprehensive study of programming languages, software engineering principles, and application development methodologies.
                                </p>
                                <a className="text-btn" href="/department-of-computer-applications-sf">
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
                                <h4 className="title"><a href="/department-of-computer-applications-sf">Database Management</a></h4>
                                <p className="desc">Advanced study of database design, management systems, and data modeling techniques.
                                </p>
                                <a className="text-btn" href="/department-of-computer-applications-sf">
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
                                <h4 className="title"><a href="/department-of-computer-applications-sf">Web Development</a></h4>
                                <p className="desc">Modern web technologies, mobile application development, and responsive design principles.
                                </p>
                                <a className="text-btn" href="/department-of-computer-applications-sf">
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
                                <h4 className="title"><a href="/department-of-computer-applications-sf">Cloud Computing</a></h4>
                                <p className="desc">Advanced study of cloud technologies, artificial intelligence, and modern computing platforms.
                                </p>
                                <a className="text-btn" href="/department-of-computer-applications-sf">
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
                        <span className="sub-title wow fadeInUp" data-wow-delay=".3s"><i className="fas fa-box"></i> ABOUT COMPUTER APPLICATIONS</span>
                        <h2 className="sec-title title-highlight wow fadeInUp" data-wow-delay=".3s">Committed to Shaping Future-Ready IT Professionals.
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

                            <p className="desc wow fadeInUp" data-wow-delay=".4s">The Department of Computer Applications is committed to shaping future-ready professionals with a strong foundation in software development, programming, and emerging technologies. Through a blend of academic rigor and practical learning, the department equips students with the skills and knowledge required to excel in the dynamic field of information technology and software solutions.</p>
                            
                            <p className="desc wow fadeInUp" data-wow-delay=".5s">Our department offers comprehensive undergraduate and postgraduate programs designed to prepare students for diverse roles in the IT industry. Core areas of study include software development and programming languages, database management systems, web development and mobile applications, cloud computing and artificial intelligence, and networking and cybersecurity.</p>
                            
                            <p className="desc wow fadeInUp" data-wow-delay=".6s">With state-of-the-art labs equipped with the latest software and hardware, expert faculty comprising qualified educators and IT professionals, and industry-integrated curriculum designed to meet current industry requirements, we ensure our students are well-prepared for dynamic careers in the technology sector.</p>
                            
                            <div className="h9-about-funfact h10-about-funfact">
                              <div className="countup-item">
                                <div className="inline-content">
                                  <span className="odometer countup-number" data-count="2"></span>
                                  <span className="count-plus"> Years</span>
                                </div>
                                <span className="count-text">Comprehensive MCA program.</span>
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
                      <h2 className="sec-title text-anim">Comprehensive Computer Applications Learning Experience.</h2>
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
                          <p className="desc">Comprehensive theoretical lectures provide students with the necessary foundational knowledge covering programming languages, software engineering principles, database management, and computer applications fundamentals.</p>
                        </div>
                      </div>
                      <div className="h10-process-item tj-sticky-panel-3">
                        <h6 className="h10-process-sln">Practical</h6>
                        <div className="h10-process-icon">
                          <i className="fas fa-laptop-code"></i>
                        </div>
                        <div className="h10-process-content">
                          <h4 className="title">Laboratory Sessions</h4>
                          <p className="desc">Hands-on laboratory practical sessions allow students to gain experience in programming, software development, web development, database management, and project implementation using state-of-the-art computer systems.</p>
                        </div>
                      </div>
                      <div className="h10-process-item tj-sticky-panel-3">
                        <h6 className="h10-process-sln">Research</h6>
                        <div className="h10-process-icon">
                          <i className="fas fa-search"></i>
                        </div>
                        <div className="h10-process-content">
                          <h4 className="title">Research Projects</h4>
                          <p className="desc">Research projects provide students with opportunities to apply their knowledge and skills to real-world technology problems and contribute to the advancement of computer applications and innovation.</p>
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
                          <h2 className="sec-title text-anim">Foundation for Success in Computer Applications.</h2>
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
                            <p>Overall, the MCA program provides students with a solid foundation in the principles and applications of computer applications, equipping them with the necessary knowledge and skills to embark on a successful career in the field of information technology, software development, or related disciplines.</p>
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
                                To be a leader in computer applications education, fostering innovation, technical expertise, and ethical practices to meet global IT industry demands.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-6">
                          <div className="service-item h8-service-item">
                            
                            <h4 className="title">MISSION</h4>
                            <div className="service-content">
                              <p className="desc">To deliver comprehensive education in computer applications, combining theoretical knowledge with real-world applications. To promote research and development in emerging areas of information technology. To empower students with problem-solving and analytical skills for professional growth. To nurture ethical and socially responsible IT professionals.</p>
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
                      <h2 className="sec-title title-anim">Comprehensive Computer Applications Education.</h2>
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
                            <h4 className="title">Software Development and Programming Languages</h4>
                            <div className="service-content">
                              <p className="desc">Comprehensive training in programming languages, software engineering principles, and application development methodologies.</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-4">
                          <div className="service-item h8-service-item">
                            <h4 className="title">Database Management Systems</h4>
                            <div className="service-content">
                              <p className="desc">Advanced study of database design, management systems, and data modeling techniques for efficient data storage and retrieval.</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-4">
                          <div className="service-item h8-service-item">
                            <h4 className="title">Web Development and Mobile Applications</h4>
                            <div className="service-content">
                              <p className="desc">Modern web technologies, mobile application development, and responsive design principles for creating user-friendly applications.</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-4">
                          <div className="service-item h8-service-item">
                            <h4 className="title">Cloud Computing and Artificial Intelligence</h4>
                            <div className="service-content">
                              <p className="desc">Advanced study of cloud technologies, artificial intelligence, and modern computing platforms for scalable solutions.</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-4">
                          <div className="service-item h8-service-item">
                            <h4 className="title">Networking and Cybersecurity</h4>
                            <div className="service-content">
                              <p className="desc">Comprehensive study of information security, network protection, and cyber threat management strategies.</p>
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
                      <h2 className="sec-title title-anim">Excellence in Computer Applications Education.</h2>
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
                            <h4 className="title">State-of-the-Art Labs</h4>
                            <div className="service-content">
                              <p className="desc">Equipped with the latest software and hardware for programming, development, and testing.</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-3">
                          <div className="service-item h8-service-item">
                            <h4 className="title">Expert Faculty</h4>
                            <div className="service-content">
                              <p className="desc">A team of qualified educators and IT professionals with diverse expertise.</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-3">
                          <div className="service-item h8-service-item">
                            <h4 className="title">Industry Integration</h4>
                            <div className="service-content">
                              <p className="desc">Curriculum designed to meet current industry requirements with regular updates.</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-3">
                          <div className="service-item h8-service-item">
                            <h4 className="title">Interdisciplinary Learning</h4>
                            <div className="service-content">
                              <p className="desc">Encouraging integration of computer applications with business, science, and engineering domains.</p>
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
                          <h4 className="title">Coding Contests and Hackathons</h4>
                          <p className="desc">Opportunities to develop and showcase programming and problem-solving skills.</p>
                        </div>
                      </div>
                      <div className="h10-process-item tj-sticky-panel-3">
                        <h6 className="h10-process-sln">Learning</h6>
                        <div className="h10-process-icon">
                          <i className="fas fa-laptop-code"></i>
                        </div>
                        <div className="h10-process-content">
                          <h4 className="title">Workshops and Seminars</h4>
                          <p className="desc">Sessions on cutting-edge technologies like AI, blockchain, and DevOps.</p>
                        </div>
                      </div>
                      <div className="h10-process-item tj-sticky-panel-3">
                        <h6 className="h10-process-sln">Experience</h6>
                        <div className="h10-process-icon">
                          <i className="fas fa-search"></i>
                        </div>
                        <div className="h10-process-content">
                          <h4 className="title">Internships and Projects</h4>
                          <p className="desc">Practical exposure through partnerships with leading IT firms.</p>
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
                            <h4 className="title">Software Engineering and Agile Methodologies</h4>
                            <div className="service-content">
                              <p className="desc">Advanced research in software development processes, agile methodologies, and project management techniques.</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-4">
                          <div className="service-item h8-service-item">
                            <h4 className="title">Artificial Intelligence and Machine Learning</h4>
                            <div className="service-content">
                              <p className="desc">Advanced research in AI algorithms, neural networks, and intelligent systems development.</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-4">
                          <div className="service-item h8-service-item">
                            <h4 className="title">Cybersecurity and Ethical Hacking</h4>
                            <div className="service-content">
                              <p className="desc">Research in information security, ethical hacking techniques, and cyber threat protection.</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-4">
                          <div className="service-item h8-service-item">
                            <h4 className="title">Data Analytics and Visualization</h4>
                            <div className="service-content">
                              <p className="desc">Research in data analysis techniques, visualization methods, and business intelligence tools.</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-4">
                          <div className="service-item h8-service-item">
                            <h4 className="title">Mobile Computing and IoT</h4>
                            <div className="service-content">
                              <p className="desc">Research in mobile application development, Internet of Things, and connected device technologies.</p>
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
                            <h4 className="title">Web and Mobile App Developer</h4>
                            <div className="service-content">
                              <p className="desc">Create responsive web applications and mobile apps using modern development frameworks and technologies.</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-4">
                          <div className="service-item h8-service-item">
                            
                            <h4 className="title">Data Analyst</h4>
                            <div className="service-content">
                              <p className="desc">Analyze complex data sets to extract insights and build predictive models for business intelligence.</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-4">
                          <div className="service-item h8-service-item">
                            
                            <h4 className="title">IT Consultant</h4>
                            <div className="service-content">
                              <p className="desc">Provide expert advice on technology solutions and help organizations optimize their IT infrastructure.</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-4">
                          <div className="service-item h8-service-item">
                            
                            <h4 className="title">Cybersecurity Specialist</h4>
                            <div className="service-content">
                              <p className="desc">Protect organizations from cyber threats and ensure information security compliance.</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-4">
                          <div className="service-item h8-service-item">
                            
                            <h4 className="title">Cloud Administrator</h4>
                            <div className="service-content">
                              <p className="desc">Manage cloud infrastructure and services for scalable and reliable application deployment.</p>
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
                          <img src="/assets/images/team/cs-application-sf/Mr.T.Sathes kumar.png" alt="" />
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
                          <img src="/assets/images/team/cs-application-sf/Dr.M.MALATHI.png" alt="" />
                        </div>
                        <div className="social-links">
                          <ul>
                            <li><a href="mailto:malathi.m@jkkn.ac.in" target="_blank"><i className="fa-solid fa-envelope"></i></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="team-content">
                        <h5 className="title">Dr. M. Malathi</h5>
                        <span className="designation">Assistant Professor & HOD</span>
                        <p className="qualification">M.Sc., M.Phil., Ph.D</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 h8-team-item-wrapper">
                    <div className="team-item wow fadeInRightBig" data-wow-delay=".4s">
                      <div className="team-img">
                        <div className="team-img-inner">
                          <img src="/assets/images/team/cs-application-sf/Mr.B.N.Dhanasekaran.png" alt="" />
                        </div>
                        <div className="social-links">
                          <ul>
                            <li><a href="mailto:dhanasekaran.b@jkkn.ac.in" target="_blank"><i className="fa-solid fa-envelope"></i></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="team-content">
                        <h5 className="title">Mr. B. N. Dhanasekaran</h5>
                        <span className="designation">Assistant Professor</span>
                        <p className="qualification">M.C.A., M.Phil., S.E.T., N.E.T.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 h8-team-item-wrapper">
                    <div className="team-item wow fadeInRightBig" data-wow-delay=".5s">
                      <div className="team-img">
                        <div className="team-img-inner">
                          <img src="/assets/images/team/cs-application-sf/Mrs.N.Umadevi.png" alt="" />
                        </div>
                        <div className="social-links">
                          <ul>
                            <li><a href="mailto:umadevi.n@jkkn.ac.in" target="_blank"><i className="fa-solid fa-envelope"></i></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="team-content">
                        <h5 className="title">Mrs. N. Umadevi</h5>
                        <span className="designation">Assistant Professor</span>
                        <p className="qualification">M.C.A., M.Phil.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 h8-team-item-wrapper">
                    <div className="team-item wow fadeInRightBig" data-wow-delay=".6s">
                      <div className="team-img">
                        <div className="team-img-inner">
                          <img src="/assets/images/team/cs-application-sf/Mr.S.Balaji.png" alt="" />
                        </div>
                        <div className="social-links">
                          <ul>
                            <li><a href="mailto:balaji.s@jkkn.ac.in" target="_blank"><i className="fa-solid fa-envelope"></i></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="team-content">
                        <h5 className="title">Mr. S. Balaji</h5>
                        <span className="designation">Assistant Professor</span>
                        <p className="qualification">M.C.A., M.Phil.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 h8-team-item-wrapper">
                    <div className="team-item wow fadeInRightBig" data-wow-delay=".7s">
                      <div className="team-img">
                        <div className="team-img-inner">
                          <img src="/assets/images/team/cs-application-sf/Mrs.S.Priyanga.png" alt="" />
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
                    <div className="team-item wow fadeInRightBig" data-wow-delay=".8s">
                      <div className="team-img">
                        <div className="team-img-inner">
                          <img src="/assets/images/team/cs-application-sf/Ms.K.Epshiba.png" alt="" />
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
                    <div className="team-item wow fadeInRightBig" data-wow-delay=".9s">
                      <div className="team-img">
                        <div className="team-img-inner">
                          <img src="/assets/images/team/cs-application-sf/Mrs.P.Priyanka.png" alt="" />
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
                    <div className="team-item wow fadeInRightBig" data-wow-delay="1.0s">
                      <div className="team-img">
                        <div className="team-img-inner">
                          <img src="/assets/images/team/cs-application-sf/Dr.A.Kamalaveni.png" alt="" />
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
                    <div className="team-item wow fadeInRightBig" data-wow-delay="1.1s">
                      <div className="team-img">
                        <div className="team-img-inner">
                          <img src="/assets/images/team/cs-application-sf/Mrs.S.Brintha.png" alt="" />
                        </div>
                        <div className="social-links">
                          <ul>
                            <li><a href="mailto:brintha.s@jkkn.ac.in" target="_blank"><i className="fa-solid fa-envelope"></i></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="team-content">
                        <h5 className="title">Mrs. S. Brintha</h5>
                        <span className="designation">Assistant Professor</span>
                        <p className="qualification">M.C.A., M.Phil.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 h8-team-item-wrapper">
                    <div className="team-item wow fadeInRightBig" data-wow-delay="1.2s">
                      <div className="team-img">
                        <div className="team-img-inner">
                          <img src="/assets/images/team/cs-application-sf/Mrs.P.Kowsalya.png" alt="" />
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
                    <div className="team-item wow fadeInRightBig" data-wow-delay="1.3s">
                      <div className="team-img">
                        <div className="team-img-inner">
                          <img src="/assets/images/team/cs-application-sf/Mrs.J.Devi.png" alt="" />
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
                    <div className="team-item wow fadeInRightBig" data-wow-delay="1.4s">
                      <div className="team-img">
                        <div className="team-img-inner">
                          <img src="/assets/images/team/cs-application-sf/Mrs.A.Vennila.png" alt="" />
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
                  <div className="col-lg-3 col-sm-6 h8-team-item-wrapper">
                    <div className="team-item wow fadeInRightBig" data-wow-delay="1.5s">
                      <div className="team-img">
                        <div className="team-img-inner">
                          <img src="/assets/images/team/cs-application-sf/Mr.A.Dinesh.png" alt="" />
                        </div>
                        <div className="social-links">
                          <ul>
                            <li><a href="mailto:dinesh.a@jkkn.ac.in" target="_blank"><i className="fa-solid fa-envelope"></i></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="team-content">
                        <h5 className="title">Mr. A. Dinesh</h5>
                        <span className="designation">Assistant Professor</span>
                        <p className="qualification">M.Sc., M.Phil., B.Ed.</p>
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

