import Image from 'next/image';
import React from 'react';

const MainContent: React.FC = () => {
  return (
    <>
      {/* start: Client Section */}
      <section className="tj-client-section section-top-gap">
        <div className="container-fluid client-container">
          <div className="row">
            <div className="col-12">
              <div className="client-content style-2 wow fadeIn" data-wow-delay=".3s">
                <h5 className="sec-title">Join Over <span className="client-numbers">1000+</span> Students with
                  <span className="client-text">J.K.K. Nataraja College</span> Here
                </h5>
              </div>
              <div className="swiper client-slider client-slider-1 wow fadeIn" data-wow-delay=".5s">
                <div className="swiper-wrapper">
                  <div className="swiper-slide client-item">
                    <div className="client-logo">
                      <Image src="/assets/images/brands/brand-1.webp" alt="" width={400} height={300} style={{ width: "100%", height: "auto" }} />
                    </div>
                  </div>
                  <div className="swiper-slide client-item">
                    <div className="client-logo">
                      <Image src="/assets/images/brands/brand-2.webp" alt="" width={400} height={300} style={{ width: "100%", height: "auto" }} />
                    </div>
                  </div>
                  <div className="swiper-slide client-item">
                    <div className="client-logo">
                      <Image src="/assets/images/brands/brand-3.webp" alt="" width={400} height={300} style={{ width: "100%", height: "auto" }} />
                    </div>
                  </div>
                  <div className="swiper-slide client-item">
                    <div className="client-logo">
                      <Image src="/assets/images/brands/brand-4.webp" alt="" width={400} height={300} style={{ width: "100%", height: "auto" }} />
                    </div>
                  </div>
                  <div className="swiper-slide client-item">
                    <div className="client-logo">
                      <Image src="/assets/images/brands/brand-5.webp" alt="" width={400} height={300} style={{ width: "100%", height: "auto" }} />
                    </div>
                  </div>
                  <div className="swiper-slide client-item">
                    <div className="client-logo">
                      <Image src="/assets/images/brands/brand-6.webp" alt="" width={400} height={300} style={{ width: "100%", height: "auto" }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end: Client Section */}

      {/* start: About Section */}
      <section className="tj-about-section section-gap">
        <div className="container">
          <div className="row row-gap-4">
            <div className="col-lg-4 col-md-6 order-lg-1 order-3">
              <div className="countup-item style-2 wow fadeInUp" data-wow-delay=".1s">
                <span className="count-icon"><i className="tji-complete"></i></span>
                <span className="steps">01.</span>
                <div className="count-inner">
                  <span className="count-text">Courses Offered.</span>
                  <div className="inline-content">
                    <span className="odometer countup-number" data-count="50"></span>
                    <span className="count-plus">+</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-sm-12 order-lg-2 order-1">
              <div className="about-content-area-2 wow fadeInUp" data-wow-delay=".3s">
                <div className="about-content">
                  <div className="sec-heading style-2">
                    <span className="sub-title">Get to Know Us</span>
                    <h2 className="sec-title title-highlight">Driving Excellence & Innovation: Your Trusted Partner for Quality Education and Student Success.</h2>
                  </div>
                  <div className="wow fadeInUp" data-wow-delay=".3s">
                    <a className="text-btn" href="/about/college">
                      <span className="btn-text"><span>Learn More</span></span>
                      <span className="btn-icon"><i className="tji-arrow-right-long"></i></span>
                    </a>
                  </div>
                </div>
                <div className="video-img wow fadeInRight" data-wow-delay=".7s">
                  <Image src="/assets/images/about/about-3.webp" alt="Image" width={400} height={300} style={{ width: "100%", height: "auto" }} />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 order-lg-3 order-2">
              <div className="customers-box style-2 wow fadeInUp" data-wow-delay=".3s">
                <div className="customers-bg" data-bg-image="/assets/images/about/about-4.webp"></div>
                <div className="customers">
                  <ul>
                    <li className="wow fadeInLeft" data-wow-delay=".3s"><Image src="/assets/images/testimonial/client-1.webp" alt="" width={400} height={300} style={{ width: "100%", height: "auto" }} /></li>
                    <li className="wow fadeInLeft" data-wow-delay=".4s"><Image src="/assets/images/testimonial/client-2.webp" alt="" width={400} height={300} style={{ width: "100%", height: "auto" }} /></li>
                    <li className="wow fadeInLeft" data-wow-delay=".5s"><Image src="/assets/images/testimonial/client-3.webp" alt="" width={400} height={300} style={{ width: "100%", height: "auto" }} /></li>
                    <li className="wow fadeInLeft" data-wow-delay=".6s"><span><i className="tji-plus"></i></span></li>
                  </ul>
                </div>
                <h6 className="customers-text wow fadeInLeft" data-wow-delay=".6s">We have 1000+ happy students.</h6>
                <div className="star-icon zoomInOut"><Image src="/assets/images/shape/star.svg" alt="" width={400} height={300} style={{ width: "100%", height: "auto" }} /></div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 order-lg-4 order-4">
              <div className="countup-item style-2 wow fadeInUp" data-wow-delay=".5s">
                <span className="count-icon"><i className="tji-worldwide"></i></span>
                <span className="steps">02.</span>
                <div className="count-inner">
                  <span className="count-text">Students Enrolled</span>
                  <div className="inline-content">
                    <span className="odometer countup-number" data-count="5000"></span>
                    <span className="count-plus">+</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 order-lg-5 order-5">
              <div className="countup-item style-2 wow fadeInUp" data-wow-delay=".7s">
                <span className="count-icon"><i className="tji-growth"></i></span>
                <span className="steps">03.</span>
                <div className="count-inner">
                  <span className="count-text">Years of Excellence</span>
                  <div className="inline-content">
                    <span className="odometer countup-number" data-count="25"></span>
                    <span className="count-plus">+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end: About Section */}

      {/* start: Service Section */}
      <section className="tj-service-section service-2 section-gap section-gap-x slidebar-stickiy-container">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="content-wrap slidebar-stickiy">
                <div className="sec-heading style-2">
                  <span className="sub-title wow fadeInUp" data-wow-delay=".3s">Our Programs</span>
                  <h2 className="sec-title text-white text-anim">Quality Education Programs for <span>Students.</span></h2>
                </div>
                <div className="wow fadeInUp" data-wow-delay=".6s">
                  <a className="tj-primary-btn" href="/programmes">
                    <span className="btn-text"><span>View Programs</span></span>
                    <span className="btn-icon"><i className="tji-arrow-right-long"></i></span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="service-wrapper-2">
                <div className="service-item-wrapper tj-fadein-right-on-scroll">
                  <div className="service-item style-2">
                    <div className="title-area">
                      <div className="service-icon">
                        <i className="tji-service-1"></i>
                      </div>
                      <h4 className="title"><a href="/programmes/aided">Aided Programs</a></h4>
                    </div>
                    <div className="service-content">
                      <p className="desc">Comprehensive undergraduate and postgraduate programs with government support and excellent faculty guidance.</p>
                      <ul className="list-items">
                        <li><i className="tji-list"></i>UG Courses</li>
                        <li><i className="tji-list"></i>PG Courses</li>
                        <li><i className="tji-list"></i>Ph.D. Programs</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="service-item-wrapper tj-fadein-right-on-scroll">
                  <div className="service-item style-2">
                    <div className="title-area">
                      <div className="service-icon">
                        <i className="tji-service-2"></i>
                      </div>
                      <h4 className="title"><a href="/programmes/self-finance">Self Finance Programs</a></h4>
                    </div>
                    <div className="service-content">
                      <p className="desc">Modern and industry-relevant courses designed to meet current market demands and career opportunities.</p>
                      <ul className="list-items">
                        <li><i className="tji-list"></i>Professional Courses</li>
                        <li><i className="tji-list"></i>Technical Programs</li>
                        <li><i className="tji-list"></i>Skill Development</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="service-item-wrapper tj-fadein-right-on-scroll">
                  <div className="service-item style-2">
                    <div className="title-area">
                      <div className="service-icon">
                        <i className="tji-service-3"></i>
                      </div>
                      <h4 className="title"><a href="/facilities">Campus Facilities</a></h4>
                    </div>
                    <div className="service-content">
                      <p className="desc">State-of-the-art facilities including modern labs, library, sports complex, and comfortable hostel accommodation.</p>
                      <ul className="list-items">
                        <li><i className="tji-list"></i>Modern Laboratories</li>
                        <li><i className="tji-list"></i>Digital Library</li>
                        <li><i className="tji-list"></i>Sports Facilities</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="service-item-wrapper tj-fadein-right-on-scroll">
                  <div className="service-item style-2">
                    <div className="title-area">
                      <div className="service-icon">
                        <i className="tji-service-4"></i>
                      </div>
                      <h4 className="title"><a href="/departments">Academic Departments</a></h4>
                    </div>
                    <div className="service-content">
                      <p className="desc">Diverse academic departments with experienced faculty members dedicated to providing quality education and research opportunities.</p>
                      <ul className="list-items">
                        <li><i className="tji-list"></i>Arts & Science</li>
                        <li><i className="tji-list"></i>Commerce & Management</li>
                        <li><i className="tji-list"></i>Computer Applications</li>
                      </ul>
                    </div>
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
        <div className="bg-shape-3">
          <Image src="/assets/images/shape/shape-blur.svg" alt="" width={400} height={300} style={{ width: "100%", height: "auto" }} />
        </div>
      </section>
      {/* end: Service Section */}
    </>
  );
};

export default MainContent;




