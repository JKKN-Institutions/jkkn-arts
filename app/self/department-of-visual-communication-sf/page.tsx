import Header from '../../components/Header';
import Footer from '../../components/Footer';
import OffcanvasMenu from '../../components/OffcanvasMenu';

export default function DepartmentOfVisualCommunication() {
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
            {/* start: Banner Section */}
            <section className="tj-banner-section-2 h10-hero section-gap-x zoom-on-scroll-wrapper">
              <div className="container">
                <div className="row flex-column-reverse flex-lg-row">
                  <div className="col-lg-4 col-xl-3">
                    <div className="h10-hero-award-wrapper">
                      <div className="h6-hero-history wow fadeInUp" data-wow-delay=".3s">
                        <div className="h6-hero-history-title">Est. 1987</div>
                        <p className="h6-hero-history-desc">Excellence in Visual Communication Education with comprehensive programs since 1987-1988, fostering creativity and innovation in visual arts and media.</p>
                      </div>
                      
                    </div>
                  </div>
                  <div className="col-lg-8 col-xl-9">
                    <div className="banner-content-2">
                      <h1 className="banner-title text-anim">Department of Visual Communication <i className="fas fa-curve-arrow wow fadeInRight" data-wow-delay=".7s"></i>
                      </h1>
                      <div className="banner-desc-area wow fadeInUp" data-wow-delay=".7s">
                        <a className="tj-primary-btn" href="#">
                          <span className="btn-text"><span>Apply Now</span></span>
                          <span className="btn-icon"><i className="fas fa-arrow-right-long"></i></span>
                        </a>
                        <div className="banner-desc">A vibrant space where creativity meets technology, empowering students to convey ideas and stories through dynamic visual media.
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
                          <h2 className="sec-title text-anim">Comprehensive Microbiology Curriculum.</h2>
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
                                <h4 className="title"><a href="/department-of-microbiology-sf">Microbial Physiology and Genetics</a></h4>
                                <p className="desc">Study of microbial cell structure, metabolism, and genetic mechanisms.
                                </p>
                                <a className="text-btn" href="/department-of-microbiology-sf">
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
                                <h4 className="title"><a href="/department-of-microbiology-sf">Immunology and Medical Microbiology</a></h4>
                                <p className="desc">Study of immune system responses and pathogenic microorganisms.
                                </p>
                                <a className="text-btn" href="/department-of-microbiology-sf">
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
                                <h4 className="title"><a href="/department-of-microbiology-sf">Environmental and Industrial Microbiology</a></h4>
                                <p className="desc">Study of microorganisms in environmental processes and industrial applications.
                                </p>
                                <a className="text-btn" href="/department-of-microbiology-sf">
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
                                <h4 className="title"><a href="/department-of-visual-communication-sf">Film and Television Production</a></h4>
                                <p className="desc">Complete filmmaking and television production processes.
                                </p>
                                <a className="text-btn" href="/department-of-visual-communication-sf">
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
                        <span className="sub-title wow fadeInUp" data-wow-delay=".3s"><i className="fas fa-box"></i> ABOUT VISUAL COMMUNICATION</span>
                        <h2 className="sec-title title-highlight wow fadeInUp" data-wow-delay=".3s">Where Creativity Meets Technology.
                        </h2>
                      </div>
                      <div className="row">
                        <div className="col-12 col-md-6 d-none d-md-block d-lg-none">
                          <div className="about-img-area h10-about-banner wow bounceInLeft" data-wow-delay=".3s">
                            <div className="about-img">
                              <img src="/assets/images/img/department-of-computer-science.png" alt="" style={{width: '100%', height: 'auto', maxHeight: '300px', objectFit: 'cover'}} />
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

                            <p className="desc wow fadeInUp" data-wow-delay=".4s">The Department of Visual Communication is a vibrant space where creativity meets technology, empowering students to convey ideas and stories through dynamic visual media. Combining theory with hands-on learning, the department nurtures creative thinkers, communicators, and professionals who excel in the fast-paced world of visual arts and media.</p>
                            
                            <p className="desc wow fadeInUp" data-wow-delay=".5s">Our department offers undergraduate and postgraduate programs designed to provide a strong foundation in visual arts, communication strategies, and media production, covering areas such as graphic design, photography and videography, animation and motion graphics, film and television production, and advertising and branding.</p>
                            
                            <p className="desc wow fadeInUp" data-wow-delay=".6s">With design and editing labs equipped with industry-standard software and tools, photography studios with advanced equipment, sound and film studios for audio recording and filmmaking, and screening rooms for showcasing student projects, we ensure our students are well-prepared for successful careers in media, entertainment, advertising, and related industries.</p>
                            
                            <div className="h9-about-funfact h10-about-funfact">
                              <div className="countup-item">
                                <div className="inline-content">
                                  <span className="odometer countup-number" data-count="2"></span>
                                  <span className="count-plus"> Years</span>
                                </div>
                                <span className="count-text">Comprehensive Visual Communication programs.</span>
                              </div>
                              <div className="countup-item">
                                <div className="inline-content">
                                  <span className="odometer countup-number" data-count="95"></span>
                                  <span className="count-plus">%</span>
                                </div>
                                <span className="count-text">Graduate employment rate in media and creative industries.</span>
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
                      <h2 className="sec-title text-anim">Comprehensive Visual Communication Learning Experience.</h2>
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
                          <i className="fa-solid fa-chart-line"></i>
                        </div>
                        <div className="h10-process-content">
                          <h4 className="title">Theoretical Lectures</h4>
                          <p className="desc">Comprehensive theoretical lectures provide students with the necessary foundational knowledge covering visual arts principles, communication strategies, design theory, and media production fundamentals.</p>
                        </div>
                      </div>
                      <div className="h10-process-item tj-sticky-panel-3">
                        <h6 className="h10-process-sln">Practical</h6>
                        <div className="h10-process-icon">
                          <i className="fa-solid fa-globe"></i>
                        </div>
                        <div className="h10-process-content">
                          <h4 className="title">Practical Workshops</h4>
                          <p className="desc">Hands-on practical sessions allow students to gain experience in graphic design, photography, videography, animation, and film production using industry-standard software and equipment.</p>
                        </div>
                      </div>
                      <div className="h10-process-item tj-sticky-panel-3">
                        <h6 className="h10-process-sln">Research</h6>
                        <div className="h10-process-icon">
                          <i className="fa-solid fa-circle-check"></i>
                        </div>
                        <div className="h10-process-content">
                          <h4 className="title">Creative Projects</h4>
                          <p className="desc">Creative projects provide students with opportunities to apply their knowledge and skills to real-world visual communication challenges and contribute to the advancement of media and creative arts innovation.</p>
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
                          <h2 className="sec-title text-anim">Foundation for Success in Visual Communication.</h2>
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
                            <p>Overall, the Visual Communication program provides students with a solid foundation in the principles and applications of visual arts and media, equipping them with the necessary knowledge and skills to embark on a successful career in media, entertainment, advertising, and related creative industries.</p>
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
                                To be a leading center of excellence in visual communication, inspiring innovation and creativity while fostering cultural and social impact.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-6">
                          <div className="service-item h8-service-item">
                            <h4 className="title">MISSION</h4>
                            <div className="service-content">
                              <p className="desc">To provide a comprehensive education in visual communication, integrating art, design, and technology. To cultivate critical thinking, creativity, and storytelling skills in students. To prepare students for successful careers in media, entertainment, advertising, and related industries.</p>
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
                      <h2 className="sec-title title-anim">Comprehensive Visual Communication Education.</h2>
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
                            <h4 className="title">Graphic Design</h4>
                            <div className="service-content">
                              <p className="desc">Creative design principles and visual communication strategies.</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-4">
                          <div className="service-item h8-service-item">
                            <h4 className="title">Photography and Videography</h4>
                            <div className="service-content">
                              <p className="desc">Professional photography and video production techniques.</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-4">
                          <div className="service-item h8-service-item">
                            <h4 className="title">Animation and Motion Graphics</h4>
                            <div className="service-content">
                              <p className="desc">Creating dynamic visual content and animated storytelling.</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-4">
                          <div className="service-item h8-service-item">
                            <h4 className="title">Film and Television Production</h4>
                            <div className="service-content">
                              <p className="desc">Complete filmmaking and television production processes.</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-4">
                          <div className="service-item h8-service-item">
                            <h4 className="title">Advertising and Branding</h4>
                            <div className="service-content">
                              <p className="desc">Strategic communication and brand development techniques.</p>
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
                      <h2 className="sec-title title-anim">Excellence in Visual Communication Education.</h2>
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
                            <h4 className="title">Design and Editing Labs</h4>
                            <div className="service-content">
                              <p className="desc">Equipped with industry-standard software and tools for graphic design, video editing, and animation.</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-3">
                          <div className="service-item h8-service-item">
                            <h4 className="title">Photography Studio</h4>
                            <div className="service-content">
                              <p className="desc">Advanced equipment for professional photography and videography.</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-3">
                          <div className="service-item h8-service-item">
                            <h4 className="title">Sound and Film Studios</h4>
                            <div className="service-content">
                              <p className="desc">Facilities for audio recording, filmmaking, and post-production.</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-3">
                          <div className="service-item h8-service-item">
                            <h4 className="title">Screening Room</h4>
                            <div className="service-content">
                              <p className="desc">A space for showcasing student projects, films, and creative works.</p>
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
                        <h6 className="h10-process-sln">Creative</h6>
                        <div className="h10-process-icon">
                          <i className="fas fa-chart-line"></i>
                        </div>
                        <div className="h10-process-content">
                          <h4 className="title">Media Club</h4>
                          <p className="desc">A platform for students to showcase their creative talents through collaborative projects.</p>
                        </div>
                      </div>
                      <div className="h10-process-item tj-sticky-panel-3">
                        <h6 className="h10-process-sln">Learning</h6>
                        <div className="h10-process-icon">
                          <i className="fas fa-globe"></i>
                        </div>
                        <div className="h10-process-content">
                          <h4 className="title">Workshops and Seminars</h4>
                          <p className="desc">Regular interactions with industry professionals and artists.</p>
                        </div>
                      </div>
                      <div className="h10-process-item tj-sticky-panel-3">
                        <h6 className="h10-process-sln">Experience</h6>
                        <div className="h10-process-icon">
                          <i className="fas fa-circle-check"></i>
                        </div>
                        <div className="h10-process-content">
                          <h4 className="title">Internships and Live Projects</h4>
                          <p className="desc">Collaborations with leading media houses, production studios, and advertising agencies.</p>
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
                            <div className="service-icon">
                              <i className="fas fa-service-1"></i>
                            </div>
                            <h4 className="title">Graphic Design</h4>
                            <div className="service-content">
                              <p className="desc">Advanced research in creative design principles and visual communication strategies.</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-4">
                          <div className="service-item h8-service-item">
                            <div className="service-icon">
                              <i className="fas fa-service-2"></i>
                            </div>
                            <h4 className="title">Photography and Videography</h4>
                            <div className="service-content">
                              <p className="desc">Advanced research in professional photography and video production techniques.</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-4">
                          <div className="service-item h8-service-item">
                            <div className="service-icon">
                              <i className="fas fa-service-3"></i>
                            </div>
                            <h4 className="title">Animation and Motion Graphics</h4>
                            <div className="service-content">
                              <p className="desc">Research in creating dynamic visual content and animated storytelling.</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-4">
                          <div className="service-item h8-service-item">
                            <div className="service-icon">
                              <i className="fas fa-service-5"></i>
                            </div>
                            <h4 className="title">Film and Television Production</h4>
                            <div className="service-content">
                              <p className="desc">Research in complete filmmaking and television production processes.</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-4">
                          <div className="service-item h8-service-item">
                            <div className="service-icon">
                              <i className="fas fa-service-1"></i>
                            </div>
                            <h4 className="title">Advertising and Branding</h4>
                            <div className="service-content">
                              <p className="desc">Research in strategic communication and brand development techniques.</p>
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
                      <h2 className="sec-title title-anim">Diverse Career Paths in Visual Communication.</h2>
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
                            <h4 className="title">Graphic Designer</h4>
                            <div className="service-content">
                              <p className="desc">Create visual concepts and designs for various media and communication needs.</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-4">
                          <div className="service-item h8-service-item">
                            <h4 className="title">Photographer or Videographer</h4>
                            <div className="service-content">
                              <p className="desc">Capture and produce visual content for various media and commercial purposes.</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-4">
                          <div className="service-item h8-service-item">
                            <h4 className="title">Film and TV Producer</h4>
                            <div className="service-content">
                              <p className="desc">Oversee and manage the production of films, television shows, and video content.</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-4">
                          <div className="service-item h8-service-item">
                            <h4 className="title">Animator or Motion Graphics Artist</h4>
                            <div className="service-content">
                              <p className="desc">Create animated content and motion graphics for various media platforms.</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-4">
                          <div className="service-item h8-service-item">
                            <h4 className="title">Advertising Specialist</h4>
                            <div className="service-content">
                              <p className="desc">Develop creative advertising campaigns and marketing strategies.</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-4">
                          <div className="service-item h8-service-item">
                            <h4 className="title">Media Planner</h4>
                            <div className="service-content">
                              <p className="desc">Plan and coordinate media campaigns across various platforms and channels.</p>
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
                          <img src="/assets/images/team/Visual-Communication-sf/MR.B.BARANIDHARAN.png" alt="" />
                        </div>
                        <div className="social-links">
                          <ul>
                            <li><a href="mailto:baranidharan.b@jkkn.ac.in" target="_blank"><i className="fa-solid fa-envelope"></i></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="team-content">
                        <h5 className="title">Mr. B. Baranidharan</h5>
                        <span className="designation">Assistant Professor & HOD</span>
                        <p className="qualification">M.Sc (EM).</p>
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

