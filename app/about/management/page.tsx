
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import OffcanvasMenu from '../../components/OffcanvasMenu';
import { MarqueeSection, AboutSection, AboutSectionReversed } from './components';
import { ProjectSection, TestimonialSection } from './more-components';
import { PricingSection, ClientSection, BlogSection } from './final-components';

export default function ManagementPage() {
  return (
    <>
      <div className="body-overlay"></div>

      

      {/* back to top start */}
      <div id="tj-back-to-top"><span id="tj-back-to-top-percentage"></span></div>
      {/* back to top end */}

      {/* start: magic cursor */}
      <div id="magic-cursor">
        <div id="ball"></div>
      </div>
      {/* end: magic cursor */}

      {/* start: Search Popup */}
      <div className="search-popup-overlay"></div>
      {/* end: Search Popup */}

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
            
            

            {/* start: About Section */}
            <AboutSection />
            {/* end: About Section */}

            {/* start: About Section - Reversed Layout */}
            <AboutSectionReversed />
            {/* end: About Section - Reversed Layout */}

          </main>

          {/* start: Footer Section */}
          <Footer />
          {/* end: Footer Section */}
        </div>
      </div>
    </>
  );
}

// Service Section Component
function ServiceSection() {
  return (
    <section className="h5-service-section h10-service section-gap">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="sec-heading-wrap style-8">
              <div className="heading-wrap-content">
                <div className="sec-heading style-3">
                  <span className="sub-title wow fadeInUp" data-wow-delay=".3s"><i className="fas fa-box"></i> Our Solutions</span>
                  <h2 className="sec-title text-anim">Tailor Business Solutions for Corporates.</h2>
                </div>
                <div className="btn-area wow fadeInUp" data-wow-delay=".8s">
                  <a className="tj-primary-btn" href="/services">
                    <span className="btn-text"><span>Explore More</span></span>
                    <span className="btn-icon"><i className="fas fa-arrow-right"></i></span>
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
                      <div className="service-icon">
                        <i className="fas fa-chart-line"></i>
                      </div>
                      <div className="service-content">
                        <h4 className="title"><a href="/services/business-strategy">Business Strategy Development</a></h4>
                        <p className="desc">Through a combination of data-driven insights and innovative approaches business.</p>
                        <a className="text-btn" href="/services/business-strategy">
                          <span className="btn-text"><span>Learn More</span></span>
                          <span className="btn-icon"><i className="fas fa-arrow-right"></i></span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="service-item style-4 wow fadeInUp" data-wow-delay=".3s">
                      <h6 className="h10-service-sln">02.</h6>
                      <div className="service-icon">
                        <i className="fas fa-users"></i>
                      </div>
                      <div className="service-content">
                        <h4 className="title"><a href="/services/customer-experience">Customer Experience Solutions</a></h4>
                        <p className="desc">Through a combination of data-driven insights and innovative approaches business.</p>
                        <a className="text-btn" href="/services/customer-experience">
                          <span className="btn-text"><span>Learn More</span></span>
                          <span className="btn-icon"><i className="fas fa-arrow-right"></i></span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="service-item style-4 wow fadeInUp" data-wow-delay=".7s">
                      <h6 className="h10-service-sln">03.</h6>
                      <div className="service-icon">
                        <i className="fas fa-leaf"></i>
                      </div>
                      <div className="service-content">
                        <h4 className="title"><a href="/services/sustainability-consulting">Sustainability and ESG Consulting</a></h4>
                        <p className="desc">Through a combination of data-driven insights and innovative approaches business.</p>
                        <a className="text-btn" href="/services/sustainability-consulting">
                          <span className="btn-text"><span>Learn More</span></span>
                          <span className="btn-icon"><i className="fas fa-arrow-right"></i></span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="service-item style-4 wow fadeInUp" data-wow-delay=".5s">
                      <h6 className="h10-service-sln">04.</h6>
                      <div className="service-icon">
                        <i className="fas fa-headset"></i>
                      </div>
                      <div className="service-content">
                        <h4 className="title"><a href="/services/training-development">Training and Development Programs</a></h4>
                        <p className="desc">Through a combination of data-driven insights and innovative approaches business.</p>
                        <a className="text-btn" href="/services/training-development">
                          <span className="btn-text"><span>Learn More</span></span>
                          <span className="btn-icon"><i className="fas fa-arrow-right"></i></span>
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
  );
}

// Banner Section Component
function BannerSection() {
  return (
    <section className="tj-banner-section-2 h10-hero section-gap-x zoom-on-scroll-wrapper">
      <div className="container">
        <div className="row flex-column-reverse flex-lg-row">
          <div className="col-lg-4 col-xl-3">
            <div className="h10-hero-award-wrapper">
              <div className="h6-hero-history wow fadeInUp" data-wow-delay=".3s">
                <div className="h6-hero-history-title"></div>
                <p className="h6-hero-history-desc">Recognized by industry leaders, of our award-winning team has a proven record of delivering excellence across projects.</p>
              </div>
              <div className="circle-text-wrap wow bounceInLeft" data-wow-delay=".5s">
                <span className="circle-text" data-bg-image="/assets/images/icons/award-rounded-text.svg"></span>
                <div className="circle-icon"><i className="fas fa-circle"></i></div>
              </div>
            </div>
          </div>
          <div className="col-lg-8 col-xl-9">
            <div className="banner-content-2">
              <h1 className="banner-title text-anim">Driving Innovation to Transform Business Futures <i className="fas fa-arrow-trend-up wow fadeInRight" data-wow-delay=".7s"></i></h1>
              <div className="banner-desc-area wow fadeInUp" data-wow-delay=".7s">
                <a className="tj-primary-btn" href="#">
                  <span className="btn-text"><span>Get Started</span></span>
                  <span className="btn-icon"><i className="fas fa-arrow-right"></i></span>
                </a>
                <div className="banner-desc">Recognized by industryaward leaders, award winning team has be a proven record.</div>
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
                  <source src="/assets/video/h10-banner-videio.mp4" data-wf-ignore="true" />
                  <source src="/assets/video/h10-banner-videio.mp4" data-wf-ignore="true" />
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
  );
}

