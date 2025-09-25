import Header from '../../components/Header';
import Footer from '../../components/Footer';
import OffcanvasMenu from '../../components/OffcanvasMenu';

export default function DepartmentOfTextileFashionDesigning() {
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
                        <p className="h6-hero-history-desc">Excellence in Textile and Fashion Designing Education with comprehensive programs since 1987-1988, fostering creativity and innovation in fashion and textile industries.</p>
                      </div>
                      
                    </div>
                  </div>
                  <div className="col-lg-8 col-xl-9">
                    <div className="banner-content-2">
                      <h1 className="banner-title text-anim">Department of Textile and Fashion Designing <i className="fas fa-curve-arrow wow fadeInRight" data-wow-delay=".7s"></i>
                      </h1>
                      <div className="banner-desc-area wow fadeInUp" data-wow-delay=".7s">
                        <a className="tj-primary-btn" href="#">
                          <span className="btn-text"><span>Apply Now</span></span>
                          <span className="btn-icon"><i className="fas fa-arrow-right-long"></i></span>
                        </a>
                        <div className="banner-desc">A creative and innovative hub that bridges the gap between art, science, and technology in the textile and fashion industries.
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
                          <h2 className="sec-title text-anim">Comprehensive Textile and Fashion Designing Curriculum.</h2>
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
                                <h4 className="title"><a href="/department-of-textile-fashion-sf">Textile Science and Technology</a></h4>
                                <p className="desc">Study of textile materials, manufacturing processes, and technological innovations.
                                </p>
                                <a className="text-btn" href="/department-of-textile-fashion-sf">
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
                                <h4 className="title"><a href="/department-of-textile-fashion-sf">Fashion Designing and Styling</a></h4>
                                <p className="desc">Creative design principles and styling techniques for fashion industry.
                                </p>
                                <a className="text-btn" href="/department-of-textile-fashion-sf">
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
                                <h4 className="title"><a href="/department-of-textile-fashion-sf">Apparel Manufacturing and Merchandising</a></h4>
                                <p className="desc">Production processes and business strategies in apparel industry.
                                </p>
                                <a className="text-btn" href="/department-of-textile-fashion-sf">
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
                                <h4 className="title"><a href="/department-of-textile-fashion-sf">Surface Ornamentation and Design</a></h4>
                                <p className="desc">Creative techniques for textile decoration and surface design.
                                </p>
                                <a className="text-btn" href="/department-of-textile-fashion-sf">
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
                        <span className="sub-title wow fadeInUp" data-wow-delay=".3s"><i className="fas fa-box"></i> ABOUT TEXTILE AND FASHION DESIGNING</span>
                        <h2 className="sec-title title-highlight wow fadeInUp" data-wow-delay=".3s">Bridging Art, Science, and Technology.
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

                            <p className="desc wow fadeInUp" data-wow-delay=".4s">The Department of Textile and Fashion Designing is a creative and innovative hub that bridges the gap between art, science, and technology in the textile and fashion industries. With a focus on nurturing creativity, technical skills, and sustainability, the department empowers students to become trailblazers in the dynamic world of fashion and design.</p>
                            
                            <p className="desc wow fadeInUp" data-wow-delay=".5s">Our department offers undergraduate and postgraduate programs that blend theoretical knowledge with practical skills in areas such as textile science and technology, fashion designing and styling, apparel manufacturing and merchandising, surface ornamentation and design, and translation and editing.</p>
                            
                            <p className="desc wow fadeInUp" data-wow-delay=".6s">With state-of-the-art labs equipped with modern tools and technologies for textile testing, garment construction, and CAD for fashion design, industry partnerships with leading fashion houses and textile industries, and a strong focus on sustainability and ethical practices, we ensure our students are well-prepared for successful careers in the global fashion and textile industries.</p>
                            
                            <div className="h9-about-funfact h10-about-funfact">
                              <div className="countup-item">
                                <div className="inline-content">
                                  <span className="odometer countup-number" data-count="2"></span>
                                  <span className="count-plus"> Years</span>
                                </div>
                                <span className="count-text">Comprehensive Textile and Fashion Designing programs.</span>
                              </div>
                              <div className="countup-item">
                                <div className="inline-content">
                                  <span className="odometer countup-number" data-count="95"></span>
                                  <span className="count-plus">%</span>
                                </div>
                                <span className="count-text">Graduate employment rate in fashion and textile industries.</span>
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
                      <h2 className="sec-title text-anim">Comprehensive Textile and Fashion Designing Learning Experience.</h2>
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
                          <p className="desc">Comprehensive theoretical lectures provide students with the necessary foundational knowledge covering textile science, fashion design principles, manufacturing processes, and industry fundamentals.</p>
                        </div>
                      </div>
                      <div className="h10-process-item tj-sticky-panel-3">
                        <h6 className="h10-process-sln">Practical</h6>
                        <div className="h10-process-icon">
                          <i className="fas fa-globe"></i>
                        </div>
                        <div className="h10-process-content">
                          <h4 className="title">Practical Workshops</h4>
                          <p className="desc">Hands-on practical sessions allow students to gain experience in garment construction, textile testing, CAD design, pattern making, and fashion illustration using modern tools and technologies.</p>
                        </div>
                      </div>
                      <div className="h10-process-item tj-sticky-panel-3">
                        <h6 className="h10-process-sln">Research</h6>
                        <div className="h10-process-icon">
                          <i className="fas fa-circle-check"></i>
                        </div>
                        <div className="h10-process-content">
                          <h4 className="title">Design Projects</h4>
                          <p className="desc">Design projects provide students with opportunities to apply their knowledge and skills to real-world fashion and textile challenges and contribute to the advancement of sustainable and innovative design practices.</p>
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
                          <h2 className="sec-title text-anim">Foundation for Success in Textile and Fashion Designing.</h2>
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
                            <p>Overall, the Textile and Fashion Designing program provides students with a solid foundation in the principles and applications of fashion and textile industries, equipping them with the necessary knowledge and skills to embark on a successful career in fashion design, textile technology, merchandising, and related creative industries.</p>
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
                                To be a leading center of excellence in textile and fashion education, fostering innovation, sustainability, and global relevance.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-6">
                          <div className="service-item h8-service-item">
                            <h4 className="title">MISSION</h4>
                            <div className="service-content">
                              <p className="desc">To provide a comprehensive education in textile science and fashion designing. To foster creativity, technical expertise, and entrepreneurial skills. To promote sustainable and ethical practices in the fashion and textile industries. To prepare students for global careers through exposure to emerging trends and technologies.</p>
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
                      <h2 className="sec-title title-anim">Comprehensive Textile and Fashion Designing Education.</h2>
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
                            
                            <h4 className="title">Textile Science and Technology</h4>
                            <div className="service-content">
                              <p className="desc">Study of textile materials, manufacturing processes, and technological innovations.</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-4">
                          <div className="service-item h8-service-item">
                            
                            <h4 className="title">Fashion Designing and Styling</h4>
                            <div className="service-content">
                              <p className="desc">Creative design principles and styling techniques for fashion industry.</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-4">
                          <div className="service-item h8-service-item">
                            
                            <h4 className="title">Apparel Manufacturing and Merchandising</h4>
                            <div className="service-content">
                              <p className="desc">Production processes and business strategies in apparel industry.</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-4">
                          <div className="service-item h8-service-item">
                            
                            <h4 className="title">Surface Ornamentation and Design</h4>
                            <div className="service-content">
                              <p className="desc">Creative techniques for textile decoration and surface design.</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-4">
                          <div className="service-item h8-service-item">
                            
                            <h4 className="title">Translation and Editing</h4>
                            <div className="service-content">
                              <p className="desc">Language skills and editing techniques for fashion and textile content.</p>
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
                      <h2 className="sec-title title-anim">Excellence in Textile and Fashion Designing Education.</h2>
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
                              <p className="desc">Equipped with modern tools and technologies for textile testing, garment construction, and CAD for fashion design.</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-3">
                          <div className="service-item h8-service-item">
                            
                            <h4 className="title">Industry Partnerships</h4>
                            <div className="service-content">
                              <p className="desc">Collaborations with leading fashion houses, textile industries, and design studios.</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-3">
                          <div className="service-item h8-service-item">
                            
                            <h4 className="title">Sustainability Focus</h4>
                            <div className="service-content">
                              <p className="desc">Emphasis on eco-friendly and ethical practices in fashion and textile production.</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-3">
                          <div className="service-item h8-service-item">
                            
                            <h4 className="title">Global Exposure</h4>
                            <div className="service-content">
                              <p className="desc">Exposure to emerging trends and technologies in the global fashion and textile industries.</p>
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
                        <h6 className="h10-process-sln">Design</h6>
                        <div className="h10-process-icon">
                          <i className="fas fa-chart-line"></i>
                        </div>
                        <div className="h10-process-content">
                          <h4 className="title">Fashion Shows</h4>
                          <p className="desc">Platforms for students to showcase their innovative designs.</p>
                        </div>
                      </div>
                      <div className="h10-process-item tj-sticky-panel-3">
                        <h6 className="h10-process-sln">Learning</h6>
                        <div className="h10-process-icon">
                          <i className="fas fa-globe"></i>
                        </div>
                        <div className="h10-process-content">
                          <h4 className="title">Workshops and Seminars</h4>
                          <p className="desc">Sessions with industry experts on emerging trends and technologies.</p>
                        </div>
                      </div>
                      <div className="h10-process-item tj-sticky-panel-3">
                        <h6 className="h10-process-sln">Experience</h6>
                        <div className="h10-process-icon">
                          <i className="fas fa-circle-check"></i>
                        </div>
                        <div className="h10-process-content">
                          <h4 className="title">Internships and Live Projects</h4>
                          <p className="desc">Hands-on experience with reputed organizations in the fashion and textile industries.</p>
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
                            
                            <h4 className="title">Textile Science and Technology</h4>
                            <div className="service-content">
                              <p className="desc">Advanced research in textile materials, manufacturing processes, and technological innovations.</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-4">
                          <div className="service-item h8-service-item">
                            
                            <h4 className="title">Fashion Designing and Styling</h4>
                            <div className="service-content">
                              <p className="desc">Advanced research in creative design principles and styling techniques for fashion industry.</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-4">
                          <div className="service-item h8-service-item">
                            
                            <h4 className="title">Apparel Manufacturing and Merchandising</h4>
                            <div className="service-content">
                              <p className="desc">Research in production processes and business strategies in apparel industry.</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-4">
                          <div className="service-item h8-service-item">
                            
                            <h4 className="title">Surface Ornamentation and Design</h4>
                            <div className="service-content">
                              <p className="desc">Research in creative techniques for textile decoration and surface design.</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-4">
                          <div className="service-item h8-service-item">
                            
                            <h4 className="title">Translation and Editing</h4>
                            <div className="service-content">
                              <p className="desc">Research in language skills and editing techniques for fashion and textile content.</p>
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
                      <h2 className="sec-title title-anim">Diverse Career Paths in Textile and Fashion Designing.</h2>
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
                            
                            <h4 className="title">Fashion Designer</h4>
                            <div className="service-content">
                              <p className="desc">Create innovative clothing and accessory designs for various markets and audiences.</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-4">
                          <div className="service-item h8-service-item">
                            
                            <h4 className="title">Textile Technologist</h4>
                            <div className="service-content">
                              <p className="desc">Develop and improve textile materials and manufacturing processes.</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-4">
                          <div className="service-item h8-service-item">
                            
                            <h4 className="title">Apparel Merchandiser</h4>
                            <div className="service-content">
                              <p className="desc">Manage product development, sourcing, and retail strategies for fashion brands.</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-4">
                          <div className="service-item h8-service-item">
                            
                            <h4 className="title">Fashion Stylist</h4>
                            <div className="service-content">
                              <p className="desc">Create visual concepts and style individuals for photoshoots, events, and media.</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-4">
                          <div className="service-item h8-service-item">
                            
                            <h4 className="title">Costume Designer</h4>
                            <div className="service-content">
                              <p className="desc">Design costumes for theater, film, television, and other performing arts.</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-4">
                          <div className="service-item h8-service-item">
                            
                            <h4 className="title">Trend Forecaster</h4>
                            <div className="service-content">
                              <p className="desc">Analyze market trends and predict future fashion and textile directions.</p>
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
                      <h2 className="sec-title title-anim">Experienced Textile and Fashion Designing Faculty Members.</h2>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 h8-team-item-wrapper">
                    <div className="team-item wow fadeInRightBig" data-wow-delay=".1s">
                      <div className="team-img">
                        <div className="team-img-inner">
                          <img src="/assets/images/team/fashion-design-sf/Mr. M. Anbusaravanan.png" alt="" />
                        </div>
                        <div className="social-links">
                          <ul>
                            <li><a href="mailto:anbusaravanan.m@jkkn.ac.in" target="_blank"><i className="fa-solid fa-envelope"></i></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="team-content">
                        <h5 className="title">Mr. M. Anbusaravanan</h5>
                        <span className="designation">Assistant Professor & Head</span>
                        <p className="qualification">M.Sc., MBA.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 h8-team-item-wrapper">
                    <div className="team-item wow fadeInRightBig" data-wow-delay=".2s">
                      <div className="team-img">
                        <div className="team-img-inner">
                          <img src="/assets/images/team/fashion-design-sf/Mr. G.Arulkumar.png" alt="" />
                        </div>
                        <div className="social-links">
                          <ul>
                            <li><a href="mailto:arulkumar.g@jkkn.ac.in" target="_blank"><i className="fa-solid fa-envelope"></i></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="team-content">
                        <h5 className="title">Mr. G. Arulkumar</h5>
                        <span className="designation">Assistant Professor</span>
                        <p className="qualification">M.Sc., PGDCA.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 h8-team-item-wrapper">
                    <div className="team-item wow fadeInRightBig" data-wow-delay=".3s">
                      <div className="team-img">
                        <div className="team-img-inner">
                          <img src="/assets/images/team/fashion-design-sf/Mrs. S.Sri Tharunya.png" alt="" />
                        </div>
                        <div className="social-links">
                          <ul>
                            <li><a href="mailto:tharunya.s@jkkn.ac.in" target="_blank"><i className="fa-solid fa-envelope"></i></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="team-content">
                        <h5 className="title">Mrs. S. Sri Tharunya</h5>
                        <span className="designation">Assistant Professor</span>
                        <p className="qualification">M.Sc.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 h8-team-item-wrapper">
                    <div className="team-item wow fadeInRightBig" data-wow-delay=".4s">
                      <div className="team-img">
                        <div className="team-img-inner">
                          <img src="/assets/images/team/fashion-design-sf/Mrs. R.Sindhupriyadharshini.png" alt="" />
                        </div>
                        <div className="social-links">
                          <ul>
                            <li><a href="mailto:sindhupriyadharshini.r@jkkn.ac.in" target="_blank"><i className="fa-solid fa-envelope"></i></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="team-content">
                        <h5 className="title">Mrs. R. Sindhupriyadharshini</h5>
                        <span className="designation">Assistant Professor</span>
                        <p className="qualification">M.Sc.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 h8-team-item-wrapper">
                    <div className="team-item wow fadeInRightBig" data-wow-delay=".5s">
                      <div className="team-img">
                        <div className="team-img-inner">
                          <img src="/assets/images/team/fashion-design-sf/MRS.KEERTHIKA.png" alt="" />
                        </div>
                        <div className="social-links">
                          <ul>
                            <li><a href="mailto:keerthika@jkkn.ac.in" target="_blank"><i className="fa-solid fa-envelope"></i></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="team-content">
                        <h5 className="title">Mrs. Keerthika</h5>
                        <span className="designation">Assistant Professor</span>
                        <p className="qualification">M.Sc (T&FD)</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 h8-team-item-wrapper">
                    <div className="team-item wow fadeInRightBig" data-wow-delay=".6s">
                      <div className="team-img">
                        <div className="team-img-inner">
                          <img src="/assets/images/team/fashion-design-sf/MS.K.KRISHNAPRIYA.png" alt="" />
                        </div>
                        <div className="social-links">
                          <ul>
                            <li><a href="mailto:krishnapriya.k@jkkn.ac.in" target="_blank"><i className="fa-solid fa-envelope"></i></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="team-content">
                        <h5 className="title">Ms. K. Krishnapriya</h5>
                        <span className="designation">Lab Instructor</span>
                        <p className="qualification">B.Sc (T&FD)</p>
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

