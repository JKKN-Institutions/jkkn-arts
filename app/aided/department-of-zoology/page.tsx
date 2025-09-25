import Header from '../../components/Header';
import Footer from '../../components/Footer';
import OffcanvasMenu from '../../components/OffcanvasMenu';

export default function DepartmentOfZoology() {
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
                        <div className="h6-hero-history-title">Est. 1976</div>
                        <p className="h6-hero-history-desc">Excellence in Zoology Education with M.Sc., M.Phil., and Ph.D. programs since 1979, 1984, and 2001 respectively, fostering research and academic excellence.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8 col-xl-9">
                    <div className="banner-content-2">
                      <h1 className="banner-title text-anim">Department of Zoology <i className="fas fa-curve-arrow wow fadeInRight" data-wow-delay=".7s"></i>
                      </h1>
                      <div className="banner-desc-area wow fadeInUp" data-wow-delay=".7s">
                        <a className="tj-primary-btn" href="#">
                          <span className="btn-text"><span>Apply Now</span></span>
                          <span className="btn-icon"><i className="fas fa-arrow-right-long"></i></span>
                        </a>
                        <div className="banner-desc">Premier centre for academic and research excellence in Zoology, preparing students for competitive exams and successful careers in life sciences.
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
                        <video autoPlay loop muted playsInline data-wf-ignore="true" data-object-fit="cover" poster="/assets/images/img/department-of-zoology.png">
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
                          <h2 className="sec-title text-anim">Comprehensive Zoology Curriculum.</h2>
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
                                <h4 className="title"><a href="/department-of-zoology">Animal Biology</a></h4>
                                <p className="desc">Comprehensive study of animal structure, function, behavior, and evolutionary biology.
                                </p>
                                <a className="text-btn" href="/department-of-zoology">
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
                                <h4 className="title"><a href="/department-of-zoology">Environmental Biology</a></h4>
                                <p className="desc">Study of environmental toxicology, ecosystem dynamics, and conservation biology.
                                </p>
                                <a className="text-btn" href="/department-of-zoology">
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
                                <h4 className="title"><a href="/department-of-zoology">Research & Innovation</a></h4>
                                <p className="desc">Cutting-edge research in nanotoxicology, entomology, crustacean biology, and cancer biology.
                                </p>
                                <a className="text-btn" href="/department-of-zoology">
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
                                <h4 className="title"><a href="/department-of-zoology">Laboratory Studies</a></h4>
                                <p className="desc">Hands-on laboratory work with modern equipment, zoological museum, and extensive library resources.
                                </p>
                                <a className="text-btn" href="/department-of-zoology">
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
                      <div className="about-img overflow-hidden" style={{ height: '400px' }}>
                        <img data-speed=".8" src="/assets/images/img/department-of-computer-science.png" alt="" style={{ height: '100%', objectFit: 'cover' }} />
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-7">
                    <div className="h10-about-content-wrapper">
                      <div className="sec-heading style-3 ">
                        <span className="sub-title wow fadeInUp" data-wow-delay=".3s"><i className="fas fa-box"></i> ABOUT ZOOLOGY</span>
                        <h2 className="sec-title title-highlight wow fadeInUp" data-wow-delay=".3s">Premier Centre for Academic and Research Excellence in Zoology.
                        </h2>
                      </div>
                      <div className="row">
                        <div className="col-12 col-md-6 d-none d-md-block d-lg-none">
                          <div className="about-img-area h10-about-banner wow bounceInLeft" data-wow-delay=".3s">
                            <div className="about-img">
                              <img src="/assets/images/img/department-of-computer-science.png" alt="" />
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

                            <p className="desc wow fadeInUp" data-wow-delay=".4s">The PG and Research Department of Zoology at J. K. K. Nataraja College of Arts and Science, affiliated with Periyar University and managed by the J. K. K. Rangammal Charitable Trust, was established in 1976 and has grown into a premier centre for academic and research excellence. Offering M.Sc., M.Phil., and Ph.D. programs since 1979, 1984, and 2001 respectively, the department focuses on nurturing students for competitive exams like NET and SET while fostering leadership and research skills.</p>
                            
                            <p className="desc wow fadeInUp" data-wow-delay=".5s">The department is well-equipped with modern laboratories, a zoological museum, and an extensive library. Faculty members are actively engaged in innovative research across fields such as nanotoxicology, entomology, environmental toxicology, crustacean biology, and cancer biology, publishing their work in reputed journals. Students are encouraged to participate in workshops, seminars, and field studies, enhancing their practical and theoretical knowledge.</p>
                            
                            <p className="desc wow fadeInUp" data-wow-delay=".6s">With a strong emphasis on academic rigor, research excellence, and skill development, the department prepares students for successful careers in academia, research, and various life science industries. The department's commitment to excellence has made it a leading institution in the field of zoological sciences.</p>
                            
                            <div className="h9-about-funfact h10-about-funfact">
                              <div className="countup-item">
                                <div className="inline-content">
                                  <span className="odometer countup-number" data-count="9"></span>
                                  <span className="count-plus" style={{fontSize: '0.8em'}}> Faculty</span>
                                </div>
                                <span className="count-text" style={{fontSize: '0.75em'}}> Experienced faculty members.</span>
                              </div>
                              <div className="countup-item">
                                <div className="inline-content">
                                  <span className="odometer countup-number" data-count="47"></span>
                                  <span className="count-plus" style={{fontSize: '0.8em'}}> Years</span>
                                </div>
                                <span className="count-text" style={{fontSize: '0.75em'}}> Of academic excellence since 1976.</span>
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
                      <h2 className="sec-title text-anim">Comprehensive Zoology Learning Experience.</h2>
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
                          <i className="fa fa-book"></i>
                        </div>
                        <div className="h10-process-content">
                          <h4 className="title">Theoretical Lectures</h4>
                          <p className="desc">Comprehensive theoretical lectures provide students with the necessary foundational knowledge covering animal biology, ecology, evolution, genetics, and modern zoological principles.</p>
                        </div>
                      </div>
                      <div className="h10-process-item tj-sticky-panel-3">
                        <h6 className="h10-process-sln">Practical</h6>
                        <div className="h10-process-icon">
                          <i className="fa fa-flask"></i>
                        </div>
                        <div className="h10-process-content">
                          <h4 className="title">Laboratory Sessions</h4>
                          <p className="desc">Hands-on laboratory practical sessions allow students to gain experience in specimen preparation, microscopy, biochemical analysis, and research techniques using modern laboratory equipment and zoological museum.</p>
                        </div>
                      </div>
                      <div className="h10-process-item tj-sticky-panel-3">
                        <h6 className="h10-process-sln">Research</h6>
                        <div className="h10-process-icon">
                          <i className="fa fa-search"></i>
                        </div>
                        <div className="h10-process-content">
                          <h4 className="title">Research Projects</h4>
                          <p className="desc">Research projects provide students with opportunities to apply their knowledge and skills to real-world biological problems and contribute to the advancement of zoological sciences and environmental conservation.</p>
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
                          <h2 className="sec-title text-anim">Foundation for Success in Zoology.</h2>
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
                              <span className="blog-author">Established: 1976</span>
                            </div>
                            <span className="categories">PG & Research Department</span>
                          </div>
                          <div className="title-area">
                            <h3 className="title">Academic Excellence</h3>
                            <p>The Zoology department provides students with a solid foundation in the principles and applications of zoological sciences, equipping them with the necessary knowledge and skills to pursue careers in research, academia, environmental conservation, or related life science industries.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* end: Program Summary Section */}

            {/* start: Degree Programs Section */}
            <section className="h8-service overflow-hidden section-gap">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="sec-heading style-3 sec-heading-centered">
                      <span className="sub-title wow fadeInUp" data-wow-delay=".3s">
                        <i className="fas fa-box"></i>Degree Programs
                      </span>
                      <h2 className="sec-title title-anim">Academic Programs Offered.</h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container gap-30">
                <div className="row">
                  <div className="col-12">
                    <div className="service-wrapper h8-service-wrapper wow bounceInLeft" data-wow-delay=".3s">
                      <div className="row">
                        <div className="col-12 col-md-4 col-xl-4">
                          <div className="service-item h8-service-item">
                            <div className="service-icon">
                              <i className="fas fa-bullseye"></i>
                            </div>
                            <h4 className="title">B.Sc., Zoology</h4>
                            <div className="service-content">
                              <p className="desc">
                                <strong>Duration:</strong> 3 years<br/>
                                <strong>Level:</strong> Undergraduate<br/>
                                Comprehensive foundation in zoological sciences
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-4 col-xl-4">
                          <div className="service-item h8-service-item">
                            <div className="service-icon">
                              <i className="fas fa-lightbulb"></i>
                            </div>
                            <h4 className="title">M.Sc., Zoology</h4>
                            <div className="service-content">
                              <p className="desc">
                                <strong>Duration:</strong> 2 years<br/>
                                <strong>Level:</strong> Postgraduate<br/>
                                Advanced study in specialized zoological fields
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-4 col-xl-4">
                          <div className="service-item h8-service-item">
                            <div className="service-icon">
                              <i className="fas fa-graduation-cap"></i>
                            </div>
                            <h4 className="title">Ph.D (FT/PT)</h4>
                            <div className="service-content">
                              <p className="desc">
                                <strong>Duration:</strong> Flexible<br/>
                                <strong>Level:</strong> Doctoral<br/>
                                Research-based advanced studies
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
            {/* end: Degree Programs Section */}

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
                            <div className="service-icon">
                              <i className="fas fa-eye"></i>
                            </div>
                            <h4 className="title">VISION</h4>
                            <div className="service-content">
                              <p className="desc">
                                Education is the most Powerful weapon which you can use to change the World Department.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-6">
                          <div className="service-item h8-service-item">
                            <div className="service-icon">
                              <i className="fas fa-bullseye"></i>
                            </div>
                            <h4 className="title">MISSION</h4>
                            <div className="service-content">
                              <p className="desc">Generate new Knowledge through broad array of Scholarly research and creative endeavors.</p>
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
                          <img src="/assets/images/team/zoology-aided/Dr.-S.-Umavathi.png" alt="" />
                        </div>
                        <div className="social-links">
                          <ul>
                            <li><a href="mailto:umavathi.s@jkkn.ac.in" target="_blank"><i className="fa-solid fa-envelope"></i></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="team-content">
                        <h5 className="title">Dr. S. Umavathi</h5>
                        <span className="designation">Associate Professor & Head</span>
                        <p className="qualification">M.Sc., Ph.D., PGDCA.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 h8-team-item-wrapper">
                    <div className="team-item wow fadeInRightBig" data-wow-delay=".3s">
                      <div className="team-img">
                        <div className="team-img-inner">
                          <img src="/assets/images/team/zoology-aided/Dr.-Y.-Thangam.png" alt="" />
                        </div>
                        <div className="social-links">
                          <ul>
                            <li><a href="mailto:thangam.y@jkkn.ac.in" target="_blank"><i className="fa-solid fa-envelope"></i></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="team-content">
                        <h5 className="title">Dr. Y. Thangam</h5>
                        <span className="designation">Assistant Professor</span>
                        <p className="qualification">M.Sc., M.Phil., M.Ed., Ph.D.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 h8-team-item-wrapper">
                    <div className="team-item wow fadeInRightBig" data-wow-delay=".4s">
                      <div className="team-img">
                        <div className="team-img-inner">
                          <img src="/assets/images/team/zoology-aided/Dr.-R.-Sowdeswari.png" alt="" />
                        </div>
                        <div className="social-links">
                          <ul>
                            <li><a href="mailto:sowdeswari.r@jkkn.ac.in" target="_blank"><i className="fa-solid fa-envelope"></i></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="team-content">
                        <h5 className="title">Dr. R. Sowdeswari</h5>
                        <span className="designation">Assistant Professor</span>
                        <p className="qualification">M.Sc., Ph.D.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 h8-team-item-wrapper">
                    <div className="team-item wow fadeInRightBig" data-wow-delay=".5s">
                      <div className="team-img">
                        <div className="team-img-inner">
                          <img src="/assets/images/team/zoology-aided/Dr.-K.-M.-Syed-Ali-Fathima.png" alt="" />
                        </div>
                        <div className="social-links">
                          <ul>
                            <li><a href="mailto:syedalifathima.km@jkkn.ac.in" target="_blank"><i className="fa-solid fa-envelope"></i></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="team-content">
                        <h5 className="title">Dr. K. M. Syed Ali Fathima</h5>
                        <span className="designation">Assistant Professor</span>
                        <p className="qualification">M.Sc., M.Phil., Ph.D., D.C.A.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 h8-team-item-wrapper">
                    <div className="team-item wow fadeInRightBig" data-wow-delay=".6s">
                      <div className="team-img">
                        <div className="team-img-inner">
                          <img src="/assets/images/team/zoology-aided/Dr.-P.-Madhiyazhagan.png" alt="" />
                        </div>
                        <div className="social-links">
                          <ul>
                            <li><a href="mailto:madhiyazhagan.p@jkkn.ac.in" target="_blank"><i className="fa-solid fa-envelope"></i></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="team-content">
                        <h5 className="title">Dr. P. Madhiyazhagan</h5>
                        <span className="designation">Assistant Professor</span>
                        <p className="qualification">M.Sc., M.Phil., B.Ed., Ph.D.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 h8-team-item-wrapper">
                    <div className="team-item wow fadeInRightBig" data-wow-delay=".7s">
                      <div className="team-img">
                        <div className="team-img-inner">
                          <img src="/assets/images/team/zoology-aided/Dr.-S.-Umamaheswari.png" alt="" />
                        </div>
                        <div className="social-links">
                          <ul>
                            <li><a href="mailto:uma.maheswari@jkkn.ac.in" target="_blank"><i className="fa-solid fa-envelope"></i></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="team-content">
                        <h5 className="title">Dr. S. Umamaheswari</h5>
                        <span className="designation">Assistant Professor</span>
                        <p className="qualification">M.Sc., M.Phil., B.Ed., Ph.D.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 h8-team-item-wrapper">
                    <div className="team-item wow fadeInRightBig" data-wow-delay=".8s">
                      <div className="team-img">
                        <div className="team-img-inner">
                          <img src="/assets/images/team/zoology-aided/Dr.-K.-Shenkani.png" alt="" />
                        </div>
                        <div className="social-links">
                          <ul>
                            <li><a href="mailto:shenkani.k@jkkn.ac.in" target="_blank"><i className="fa-solid fa-envelope"></i></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="team-content">
                        <h5 className="title">Dr. K. Shenkani</h5>
                        <span className="designation">Assistant Professor</span>
                        <p className="qualification">M.Sc., M.Phil., Ph.D., PGDBI., (SET)</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 h8-team-item-wrapper">
                    <div className="team-item wow fadeInRightBig" data-wow-delay=".9s">
                      <div className="team-img">
                        <div className="team-img-inner">
                          <img src="/assets/images/team/zoology-aided/Dr.-S.-Kalaimani.png" alt="" />
                        </div>
                        <div className="social-links">
                          <ul>
                            <li><a href="mailto:kalaimani.s@jkkn.ac.in" target="_blank"><i className="fa-solid fa-envelope"></i></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="team-content">
                        <h5 className="title">Dr. S. Kalaimani</h5>
                        <span className="designation">Assistant Professor</span>
                        <p className="qualification">M.Sc., M.Phil., M.Ed., Ph.D., DCA., (SET)</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 h8-team-item-wrapper">
                    <div className="team-item wow fadeInRightBig" data-wow-delay="1.0s">
                      <div className="team-img">
                        <div className="team-img-inner">
                          <img src="/assets/images/team/zoology-aided/Mrs.-S.-Kowsalya.png" alt="" />
                        </div>
                        <div className="social-links">
                          <ul>
                            <li><a href="mailto:kowsalya_s@jkkn.ac.in" target="_blank"><i className="fa-solid fa-envelope"></i></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="team-content">
                        <h5 className="title">Mrs. S. Kowsalya</h5>
                        <span className="designation">Assistant Professor</span>
                        <p className="qualification">M.Sc., M.Ed., (SET)</p>
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

