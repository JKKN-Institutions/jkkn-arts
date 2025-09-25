import Header from '../../components/Header';
import Footer from '../../components/Footer';
import OffcanvasMenu from '../../components/OffcanvasMenu';
import { Noto_Sans_Tamil } from 'next/font/google';

const notoTamil = Noto_Sans_Tamil({ subsets: ['tamil'], weight: ['400','500','700'] });

export default function DepartmentOfTamilSF() {
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

      

      <div id="smooth-wrapper" className={notoTamil.className}>
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
                        <div className="h6-hero-history-title">à®¤à®®à®¿à®´à¯à®¤à¯ à®¤à¯à®±à¯ˆ</div>
                        <p className="h6-hero-history-desc">à®¤à®®à®¿à®´à¯ à®®à¯Šà®´à®¿ à®®à®±à¯à®±à¯à®®à¯ à®‡à®²à®•à¯à®•à®¿à®¯à®¤à¯à®¤à®¿à®©à¯ à®ªà®°à®¾à®®à®°à®¿à®ªà¯à®ªà¯, à®Šà®•à¯à®•à¯à®µà®¿à®ªà¯à®ªà¯ à®®à®±à¯à®±à¯à®®à¯ à®®à¯‡à®®à¯à®ªà®¾à®Ÿà¯à®Ÿà®¿à®²à¯ à®…à®°à¯à®ªà¯à®ªà®£à®¿à®•à¯à®•à®ªà¯à®ªà®Ÿà¯à®Ÿà¯à®³à¯à®³ à®’à®°à¯ à®¤à¯à®±à¯ˆ.</p>
                      </div>
                      
                    </div>
                  </div>
                  <div className="col-lg-8 col-xl-9">
                    <div className="banner-content-2">
                      <h1 className="banner-title text-anim">à®¤à®®à®¿à®´à¯à®¤à¯ à®¤à¯à®±à¯ˆ (Self-Financed) <i className="fas fa-curve-arrow wow fadeInRight" data-wow-delay=".7s"></i>
                      </h1>
                      <div className="banner-desc-area wow fadeInUp" data-wow-delay=".7s">
                        <a className="tj-primary-btn" href="#">
                          <span className="btn-text"><span>Apply Now</span></span>
                          <span className="btn-icon"><i className="fas fa-arrow-right-long"></i></span>
                        </a>
                        <div className="banner-desc">à®¤à®®à®¿à®´à¯ à®®à¯Šà®´à®¿à®¯à®¿à®©à¯ à®ªà®°à®®à¯à®ªà®°à¯ˆ à®®à®±à¯à®±à¯à®®à¯ à®•à®¾à®²à®¨à®¿à®²à¯ˆ à®šà®¾à®°à¯à®¨à¯à®¤ à®…à®Ÿà¯ˆà®¯à®¾à®³à®™à¯à®•à®³à¯ˆ à®®à¯à®´à¯à®®à¯ˆà®¯à®¾à®•à®ªà¯ à®ªà¯à®°à®¿à®¨à¯à®¤à¯à®•à¯Šà®³à¯à®µà®¤à¯à®Ÿà®©à¯, à®…à®¤à®©à¯ à®‡à®²à®•à¯à®•à®¿à®¯à®®à¯, à®µà®°à®²à®¾à®±à¯ à®®à®±à¯à®±à¯à®®à¯ à®šà®®à¯‚à®•-à®šà®¾à®®à¯‚à®•à®¿à®¯ à®®à¯à®•à¯à®•à®¿à®¯à®¤à¯à®¤à¯à®µà®™à¯à®•à®³à¯ˆ à®®à®¾à®£à®µà®°à¯à®•à®³à¯à®•à¯à®•à¯ à®…à®±à®¿à®µà®¿à®ªà¯à®ªà®¤à®¾à®• à®‡à®¨à¯à®¤ à®¤à¯à®±à¯ˆ à®¨à¯‹à®•à¯à®•à®®à®¿à®Ÿà¯à®•à®¿à®±à®¤à¯.
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
                          <span className="sub-title wow fadeInUp" data-wow-delay=".3s"><i className="fas fa-box"></i> à®®à¯à®•à¯à®•à®¿à®¯ à®ªà®•à¯à®¤à®¿à®•à®³à¯</span>
                          <h2 className="sec-title text-anim">à®¤à®®à®¿à®´à¯ à®®à¯Šà®´à®¿ à®®à®±à¯à®±à¯à®®à¯ à®‡à®²à®•à¯à®•à®¿à®¯à®¤à¯à®¤à®¿à®©à¯ à®µà®¿à®°à®¿à®µà®¾à®© à®ªà®¾à®Ÿà®¤à¯à®¤à®¿à®Ÿà¯à®Ÿà®®à¯.</h2>
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
                                <h4 className="title"><a href="/self/department-of-tamil-sf">à®¤à®®à®¿à®´à¯ à®‡à®²à®•à¯à®•à®¿à®¯à®®à¯</a></h4>
                                <p className="desc">à®ªà®£à¯à®Ÿà¯ˆà®¯ à®¤à®®à®¿à®´à¯ à®‡à®²à®•à¯à®•à®¿à®¯à®•à¯ à®•à®³à®™à¯à®•à®³à®¿à®²à¯ à®‡à®°à¯à®¨à¯à®¤à¯, à®šà®®à®•à®¾à®² à®‡à®²à®•à¯à®•à®¿à®¯à®ªà¯ à®ªà®Ÿà®¿à®ªà¯à®ªà¯à®•à®³à®¿à®²à¯ à®µà®¿à®®à®°à¯à®šà®© à®¤à®¿à®±à®©à¯ˆà®•à¯ à®•à®±à¯à®±à¯à®¤à¯à®¤à®°à¯à®®à¯ à®µà®¿à®°à®¿à®µà®¾à®© à®•à¯‹à®Ÿà¯à®ªà®¾à®Ÿà¯à®Ÿà¯ à®µà®¿à®°à®¿à®µà¯à®°à¯ˆà®•à®³à¯.</p>
                                <a className="text-btn" href="/self/department-of-tamil-sf">
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
                                <h4 className="title"><a href="/self/department-of-tamil-sf">à®¤à®®à®¿à®´à¯ à®®à¯Šà®´à®¿à®¯à®¿à®¯à®²à¯</a></h4>
                                <p className="desc">à®¤à®®à®¿à®´à¯ à®®à¯Šà®´à®¿à®¯à®¿à®©à¯ à®•à®Ÿà¯à®Ÿà®®à¯ˆà®ªà¯à®ªà¯, à®µà®³à®°à¯à®šà¯à®šà®¿ à®®à®±à¯à®±à¯à®®à¯ à®ªà®¯à®©à¯à®ªà®¾à®Ÿà¯à®Ÿà¯ˆ à®†à®°à®¾à®¯à¯à®®à¯ à®®à¯Šà®´à®¿à®¯à®¿à®¯à®²à¯ à®ªà®Ÿà®¿à®ªà¯à®ªà¯à®•à®³à¯.
                                </p>
                                <a className="text-btn" href="/self/department-of-tamil-sf">
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
                                <h4 className="title"><a href="/self/department-of-tamil-sf">à®¤à®®à®¿à®´à¯ à®•à®²à®¾à®šà¯à®šà®¾à®°à®®à¯</a></h4>
                                <p className="desc">à®¤à®®à®¿à®´à¯ à®•à®²à®¾à®šà¯à®šà®¾à®°à®¤à¯à®¤à®¿à®©à¯ à®ªà®°à®®à¯à®ªà®°à¯ˆ, à®®à®°à®ªà¯à®•à®³à¯ à®®à®±à¯à®±à¯à®®à¯ à®šà®®à¯‚à®• à®®à¯à®•à¯à®•à®¿à®¯à®¤à¯à®¤à¯à®µà®¤à¯à®¤à¯ˆ à®†à®°à®¾à®¯à¯à®®à¯ à®ªà®Ÿà®¿à®ªà¯à®ªà¯à®•à®³à¯.
                                </p>
                                <a className="text-btn" href="/self/department-of-tamil-sf">
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
                                <h4 className="title"><a href="/self/department-of-tamil-sf">à®†à®°à®¾à®¯à¯à®šà¯à®šà®¿ à®®à®±à¯à®±à¯à®®à¯ à®®à¯‡à®®à¯à®ªà®¾à®Ÿà¯</a></h4>
                                <p className="desc">à®¤à®®à®¿à®´à¯ à®®à®°à®ªà¯, à®•à®¤à¯ˆà®šà¯à®šà¯Šà®±à¯à®•à®³à¯, à®®à¯Šà®´à®¿à®ªà¯†à®¯à®°à¯à®ªà¯à®ªà¯ à®ªà®Ÿà®¿à®ªà¯à®ªà¯à®•à®³à¯ à®ªà¯‹à®©à¯à®± à®¤à¯à®±à¯ˆà®•à®³à®¿à®²à¯ à®†à®°à®¾à®¯à¯à®šà¯à®šà®¿ à®šà¯†à®¯à¯à®•.
                                </p>
                                <a className="text-btn" href="/self/department-of-tamil-sf">
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
                        <span className="sub-title wow fadeInUp" data-wow-delay=".3s"><i className="fas fa-box"></i> à®¤à®®à®¿à®´à¯à®¤à¯ à®¤à¯à®±à¯ˆ à®ªà®±à¯à®±à®¿</span>
                        <h2 className="sec-title title-highlight wow fadeInUp" data-wow-delay=".3s">à®¤à®®à®¿à®´à¯ à®®à¯Šà®´à®¿ à®®à®±à¯à®±à¯à®®à¯ à®‡à®²à®•à¯à®•à®¿à®¯à®¤à¯à®¤à®¿à®²à¯ à®µà®²à¯à®µà®¾à®© à®…à®Ÿà®¿à®¤à¯à®¤à®³à®®à¯.
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

                            <p className="desc wow fadeInUp" data-wow-delay=".4s">தமிழ்த் துறை என்பது தமிழ் மொழி மற்றும் இலக்கியத்தின் பராமரிப்பு, ஊக்குவிப்பு மற்றும் மேம்பாட்டில் அர்ப்பணிக்கப்பட்டுள்ள ஒரு துறை ஆகும். தமிழ் மொழியின் பரம்பரை மற்றும் காலநிலை சார்ந்த அடையாளங்களை முழுமையாகப் புரிந்துகொள்வதுடன், அதன் இலக்கியம், வரலாறு மற்றும் சமூக-சாமூகிய முக்கியத்துவங்களை மாணவர்களுக்கு அறிவிப்பதாக இந்த துறை நோக்கமிடுகிறது.</p>
                            
                            <div className="h9-about-funfact h10-about-funfact">
                              <div className="countup-item">
                                <div className="inline-content">
                                  <span className="odometer countup-number" data-count="5" style={{fontSize: '0.4em'}}> </span>
                                  <span className="count-plus" style={{fontSize: '0.3em'}}> à®ªà®£à®¿à®¯à®¾à®³à®°à¯à®•à®³à¯</span>
                                </div>
                                <span className="count-text">à®…à®©à¯à®ªà®µà®®à®¿à®•à¯à®• à®ªà®£à®¿à®¯à®¾à®³à®°à¯à®•à®³à¯.</span>
                              </div>
                              <div className="countup-item">
                                <div className="inline-content">
                                  <span className="odometer countup-number" data-count="50" style={{fontSize: '0.4em'}}> </span>
                                  <span className="count-plus" style={{fontSize: '0.3em'}}> à®†à®£à¯à®Ÿà¯à®•à®³à¯</span>
                                </div>
                                <span className="count-text">à®•à®²à¯à®µà®¿ à®šà®¿à®±à®ªà¯à®ªà¯ à®®à®±à¯à®±à¯à®®à¯ à®®à¯à®©à¯à®©à¯‡à®±à¯à®±à®®à¯.</span>
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
                      <span className="sub-title"><i className="fas fa-box"></i> à®ªà®¾à®Ÿà®¤à¯à®¤à®¿à®Ÿà¯à®Ÿ à®…à®®à¯ˆà®ªà¯à®ªà¯</span>
                      <h2 className="sec-title text-anim">à®¤à®®à®¿à®´à¯ à®®à¯Šà®´à®¿ à®®à®±à¯à®±à¯à®®à¯ à®‡à®²à®•à¯à®•à®¿à®¯à®¤à¯à®¤à®¿à®©à¯ à®µà®¿à®°à®¿à®µà®¾à®© à®•à®±à¯à®±à®²à¯ à®…à®©à¯à®ªà®µà®®à¯.</h2>
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
                        <h6 className="h10-process-sln">à®•à¯‹à®Ÿà¯à®ªà®¾à®Ÿà¯</h6>
                        <div className="h10-process-icon">
                          <i className="fas fa-growth"></i>
                        </div>
                        <div className="h10-process-content">
                          <h4 className="title">à®•à¯‹à®Ÿà¯à®ªà®¾à®Ÿà¯à®Ÿà¯ à®µà®¿à®°à®¿à®µà¯à®°à¯ˆà®•à®³à¯</h4>
                          <p className="desc">à®¤à®®à®¿à®´à¯ à®‡à®²à®•à¯à®•à®¿à®¯à®®à¯, à®®à¯Šà®´à®¿à®¯à®¿à®¯à®²à¯ à®®à®±à¯à®±à¯à®®à¯ à®•à®²à®¾à®šà¯à®šà®¾à®°à®ªà¯ à®ªà®Ÿà®¿à®ªà¯à®ªà¯à®•à®³à®¿à®²à¯ à®µà®¿à®®à®°à¯à®šà®© à®¤à®¿à®±à®©à¯ˆà®•à¯ à®•à®±à¯à®±à¯à®¤à¯à®¤à®°à¯à®®à¯ à®µà®¿à®°à®¿à®µà®¾à®© à®•à¯‹à®Ÿà¯à®ªà®¾à®Ÿà¯à®Ÿà¯ à®µà®¿à®°à®¿à®µà¯à®°à¯ˆà®•à®³à¯.</p>
                        </div>
                      </div>
                      <div className="h10-process-item tj-sticky-panel-3">
                        <h6 className="h10-process-sln">à®¨à®Ÿà¯ˆà®®à¯à®±à¯ˆ</h6>
                        <div className="h10-process-icon">
                          <i className="fas fa-worldwide"></i>
                        </div>
                        <div className="h10-process-content">
                          <h4 className="title">à®¨à®Ÿà¯ˆà®®à¯à®±à¯ˆ à®ªà®¯à®¿à®±à¯à®šà®¿à®•à®³à¯</h4>
                          <p className="desc">à®¤à®®à®¿à®´à¯ à®®à¯Šà®´à®¿à®¯à®¿à®²à¯ à®Žà®´à¯à®¤à¯à®®à¯ à®¤à®¿à®±à®©à¯, à®®à¯Šà®´à®¿à®ªà¯†à®¯à®°à¯à®ªà¯à®ªà¯ à®®à®±à¯à®±à¯à®®à¯ à®‡à®²à®•à¯à®•à®¿à®¯ à®µà®¿à®°à®¿à®µà®¾à®•à¯à®•à®™à¯à®•à®³à¯ˆ à®®à¯‡à®®à¯à®ªà®Ÿà¯à®¤à¯à®¤à¯à®®à¯ à®•à®²à¯ˆà®šà¯à®šà¯Šà®±à¯à®•à®³à¯ à®®à®±à¯à®±à¯à®®à¯ à®¨à®Ÿà¯ˆà®®à¯à®±à¯ˆ à®ªà®¯à®¿à®±à¯à®šà®¿à®•à®³à¯.</p>
                        </div>
                      </div>
                      <div className="h10-process-item tj-sticky-panel-3">
                        <h6 className="h10-process-sln">à®†à®°à®¾à®¯à¯à®šà¯à®šà®¿</h6>
                        <div className="h10-process-icon">
                          <i className="fas fa-complete"></i>
                        </div>
                        <div className="h10-process-content">
                          <h4 className="title">à®†à®°à®¾à®¯à¯à®šà¯à®šà®¿ à®¤à®¿à®Ÿà¯à®Ÿà®™à¯à®•à®³à¯</h4>
                          <p className="desc">à®¤à®®à®¿à®´à¯ à®®à®°à®ªà¯, à®•à®¤à¯ˆà®šà¯à®šà¯Šà®±à¯à®•à®³à¯, à®¤à®®à®¿à®´à¯ à®®à¯Šà®´à®¿à®ªà¯†à®¯à®°à¯à®ªà¯à®ªà¯, à®¤à®®à®¿à®´à¯ à®‡à®²à®•à¯à®•à®¿à®¯à®®à¯, à®•à®¿à®°à®¾à®®à®¿à®¯ à®®à®°à®ªà¯à®•à®³à¯ à®®à®±à¯à®±à¯à®®à¯ à®•à®¾à®²à®•à®Ÿà¯à®Ÿà®™à¯à®•à®³à¯à®Ÿà®©à¯ à®•à¯‚à®Ÿà®¿à®¯ à®®à¯Šà®´à®¿à®¯à®¿à®¯à®²à¯ à®†à®•à®¿à®¯ à®¤à¯à®±à¯ˆà®•à®³à®¿à®²à¯ à®†à®°à®¾à®¯à¯à®šà¯à®šà®¿ à®šà¯†à®¯à¯à®•.</p>
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
                      <span className="sub-title wow fadeInUp" data-wow-delay=".3s"><i className="fas fa-box"></i>à®¤à®¿à®Ÿà¯à®Ÿ à®šà¯à®°à¯à®•à¯à®•à®®à¯</span>
                      <h2 className="sec-title text-anim">à®¤à®®à®¿à®´à¯à®¤à¯ à®¤à¯à®±à¯ˆà®¯à®¿à®²à¯ à®µà¯†à®±à¯à®±à®¿à®•à¯à®•à®¾à®© à®…à®Ÿà®¿à®¤à¯à®¤à®³à®®à¯.</h2>
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
                            <span className="blog-author">Self-Financed Department</span>
                            </div>
                            <span className="categories">à®¤à®®à®¿à®´à¯à®¤à¯ à®¤à¯à®±à¯ˆ</span>
                          </div>
                          <div className="title-area">
                            <h3 className="title">à®•à®²à¯à®µà®¿ à®šà®¿à®±à®ªà¯à®ªà¯</h3>
                            <p>à®¤à®®à®¿à®´à¯à®¤à¯ à®¤à¯à®±à¯ˆ à®®à®¾à®£à®µà®°à¯à®•à®³à¯à®•à¯à®•à¯ à®¤à®®à®¿à®´à¯ à®®à¯Šà®´à®¿ à®®à®±à¯à®±à¯à®®à¯ à®‡à®²à®•à¯à®•à®¿à®¯à®¤à¯à®¤à®¿à®²à¯ à®µà®²à¯à®µà®¾à®© à®…à®Ÿà®¿à®¤à¯à®¤à®³à®¤à¯à®¤à¯ˆà®¯à¯à®®à¯, à®•à®²à¯à®µà®¿, à®Šà®Ÿà®•à®™à¯à®•à®³à¯, à®µà¯†à®³à®¿à®¯à¯€à®Ÿà¯à®•à®³à¯ à®®à®±à¯à®±à¯à®®à¯ à®•à®²à®¾à®šà¯à®šà®¾à®° à®ªà®°à®¾à®®à®°à®¿à®ªà¯à®ªà¯ à®†à®•à®¿à®¯ à®¤à¯à®±à¯ˆà®•à®³à®¿à®²à¯ à®šà®¾à®¤à®©à¯ˆà®•à®³à¯ˆà®•à¯ à®•à¯Šà®£à¯à®Ÿ à®¨à®¿à®ªà¯à®£à®°à¯à®•à®³à¯ˆ à®‰à®°à¯à®µà®¾à®•à¯à®•à¯à®•à®¿à®±à®¤à¯.</p>
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
                        <i className="fas fa-box"></i>à®ªà®Ÿà¯à®Ÿà®ªà¯à®ªà®Ÿà®¿à®ªà¯à®ªà¯à®•à®³à¯
                      </span>
                      <h2 className="sec-title title-anim">à®µà®´à®™à¯à®•à®ªà¯à®ªà®Ÿà¯à®®à¯ à®•à®²à¯à®µà®¿ à®¤à®¿à®Ÿà¯à®Ÿà®™à¯à®•à®³à¯.</h2>
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
                              <i className="fas fa-service-1"></i>
                            </div>
                            <h4 className="title">B.A. à®¤à®®à®¿à®´à¯ (Self-Financed)</h4>
                            <div className="service-content">
                              <p className="desc">
                                <strong>à®•à®¾à®²à®®à¯:</strong> 3 à®†à®£à¯à®Ÿà¯à®•à®³à¯<br/>
                                <strong>à®¨à®¿à®²à¯ˆ:</strong> à®‡à®³à®™à¯à®•à®²à¯ˆ<br/>
                                à®¤à®®à®¿à®´à¯ à®®à¯Šà®´à®¿ à®®à®±à¯à®±à¯à®®à¯ à®‡à®²à®•à¯à®•à®¿à®¯à®¤à¯à®¤à®¿à®²à¯ à®µà®¿à®°à®¿à®µà®¾à®© à®…à®Ÿà®¿à®¤à¯à®¤à®³à®®à¯
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-4 col-xl-4">
                          <div className="service-item h8-service-item">
                            <div className="service-icon">
                              <i className="fas fa-service-2"></i>
                            </div>
                            <h4 className="title">M.A. à®¤à®®à®¿à®´à¯</h4>
                            <div className="service-content">
                              <p className="desc">
                                <strong>à®•à®¾à®²à®®à¯:</strong> 2 à®†à®£à¯à®Ÿà¯à®•à®³à¯<br/>
                                <strong>à®¨à®¿à®²à¯ˆ:</strong> à®®à¯à®¤à¯à®•à®²à¯ˆ<br/>
                                à®¤à®®à®¿à®´à¯ à®‡à®²à®•à¯à®•à®¿à®¯à®®à¯ à®®à®±à¯à®±à¯à®®à¯ à®®à¯Šà®´à®¿à®¯à®¿à®¯à®²à®¿à®²à¯ à®†à®´à®®à®¾à®© à®ªà®Ÿà®¿à®ªà¯à®ªà¯
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-4 col-xl-4">
                          <div className="service-item h8-service-item">
                            <div className="service-icon">
                              <i className="fas fa-service-3"></i>
                            </div>
                            <h4 className="title">Ph.D. à®¤à®®à®¿à®´à¯</h4>
                            <div className="service-content">
                              <p className="desc">
                                <strong>à®•à®¾à®²à®®à¯:</strong> 3 à®†à®£à¯à®Ÿà¯à®•à®³à¯<br/>
                                <strong>à®¨à®¿à®²à¯ˆ:</strong> à®†à®°à®¾à®¯à¯à®šà¯à®šà®¿<br/>
                                à®¤à®®à®¿à®´à¯ à®®à®°à®ªà¯ à®®à®±à¯à®±à¯à®®à¯ à®‡à®²à®•à¯à®•à®¿à®¯ à®†à®°à®¾à®¯à¯à®šà¯à®šà®¿
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
                        <i className="fas fa-box"></i>à®•à®¾à®£à¯Šà®³à®¿ à®®à®±à¯à®±à¯à®®à¯ à®ªà®£à®¿
                      </span>
                      <h2 className="sec-title title-anim">à®Žà®™à¯à®•à®³à¯ à®¨à¯‹à®•à¯à®•à®®à¯ à®®à®±à¯à®±à¯à®®à¯ à®‰à®±à¯à®¤à®¿à®ªà¯à®ªà®¾à®Ÿà¯.</h2>
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
                            
                            <h4 className="title">காணொளி</h4>
                            <div className="service-content">
                              <p className="desc">தமிழ் மொழி மற்றும் இலக்கியத் கல்வியில் முன்னணி துறையாக இருக்க, தமிழ் கலாச்சாரத்தை உலக அளவில் வளர்க்கும் மாணவர்களை உருவாக்குவதே எங்கள் நோக்கம்.</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-6">
                          <div className="service-item h8-service-item">
                            
                            <h4 className="title">பணி</h4>
                            <div className="service-content">
                              <ul className="desc" style={{paddingLeft: '1.2rem'}}>
                                <li>தமிழ் மொழி, இலக்கியம் மற்றும் கலாச்சாரத்தில் முழுமையான கல்வியை வழங்கி, வாசிப்பில், எழுத்துதல், பேச்சு திறன்களில் மேம்பாடு.</li>
                                <li>தமிழ் இலக்கியம், மொழியியல் மற்றும் கலாச்சாரப் படிப்புகளில் விமர்சன திறனை வளர்த்தல்.</li>
                                <li>தமிழ் மரபின் முக்கியத்துவத்தைப் புரிந்து, அதை சமூகத்தில் பயன்படுத்தக் கற்றுத்தல்.</li>
                                <li>கலவி, ஊடகம், வெளியீடு, கலாச்சார பராமரிப்பு துறைகளில் சாதிக்க நிபுணர்களை உருவாக்குதல்.</li>
                                <li>தமிழ் மொழி மற்றும் இலக்கியத்தில் ஆய்வு மற்றும் ஆராய்ச்சிக்கு ஊக்கமளித்தல்.</li>
                              </ul>
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

            {/* start: Highlights & Activities Section */}
            <section className="h10-blog section-gap">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="sec-heading-wrap ">
                      <div className="heading-wrap-content">
                        <div className="sec-heading style-3">
                          <span className="sub-title wow fadeInUp" data-wow-delay=".3s"><i className="fas fa-box"></i> முக்கிய அம்சங்கள்</span>
                          <h2 className="sec-title text-anim">அறிய வேண்டிய அம்சங்கள்</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="blog-wrapper h8-blog-wrapper h10-blog-wrapper">
                      <div className="blog-item style-2 wow fadeInUp" data-wow-delay=".3s">
                        <div className="blog-content">
                          <div className="title-area">
                            <ul className="desc" style={{paddingLeft: '1.2rem'}}>
                              <li>தமிழ் மொழி மற்றும் இலக்கியத்தில் ஆய்வு மற்றும் ஆராய்ச்சிக்கு முக்கியத்துவம் அளிக்கும் கல்வி முறைகள்.</li>
                              <li>அனுபவமிக்க பணியாளர்கள்: தமிழ் இலக்கியம், மொழியியல் மற்றும் கலாச்சாரத்தில் நிபுணத்துவம்.</li>
                              <li>பல்வேறு பாடத்திட்டங்கள்: பண்டைய தமிழ் இலக்கியம் முதல் சமகால படைப்புகள் வரை.</li>
                              <li>சமூக ஈடுபாடு: தமிழ் கலாச்சாரத்தை கொண்டாடும் நிகழ்வுகள், போட்டிகள், கலை நிகழ்ச்சிகள்.</li>
                              <li>ஆராய்ச்சி வாய்ப்புகள்: தமிழ் மரபு, கதைச்சொற்கள், மொழிபெயர்ப்பு போன்ற துறைகள்.</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* end: Highlights & Activities Section */}

            {/* start: Activities Section */}
            <section className="h10-process section-gap section-gap-x">
              <div className="container">
                <div className="row">
                  <div className="col-12 col-lg-5">
                    <div className="sec-heading style-3">
                      <span className="sub-title"><i className="fas fa-box"></i> செயற்பாடுகள்</span>
                      <h2 className="sec-title text-anim">செயற்பாடுகள் மற்றும் முன்னேற்றங்கள்</h2>
                    </div>
                  </div>
                  <div className="col-12 col-lg-7 ">
                    <div className="h10-process-wrapper">
                      <div className="h10-process-item">
                        <h6 className="h10-process-sln">நிகழ்வுகள்</h6>
                        <div className="h10-process-content">
                          <h4 className="title">இலக்கிய மற்றும் கலாச்சார நிகழ்வுகள்</h4>
                          <p className="desc">இலக்கிய விவாதங்கள், நாடகக் காட்சிகள், கவிதை விருப்பங்கள் மூலம் தமிழ் இலக்கியம் மற்றும் கலாச்சாரத்தை கொண்டாடுதல்.</p>
                        </div>
                      </div>
                      <div className="h10-process-item">
                        <h6 className="h10-process-sln">செமினார்கள்</h6>
                        <div className="h10-process-content">
                          <h4 className="title">செமினார்கள் & விருந்தினர் சொற்பொழிவுகள்</h4>
                          <p className="desc">நவீன கோட்பாடுகள், புதிய படைப்புகள் மற்றும் நிபுணர்களுடன் நேரடி தொடர்பை ஏற்படுத்தும் அமர்வுகள்.</p>
                        </div>
                      </div>
                      <div className="h10-process-item">
                        <h6 className="h10-process-sln">பயிற்சிகள்</h6>
                        <div className="h10-process-content">
                          <h4 className="title">வேலைப்பாடுகள்</h4>
                          <p className="desc">எழுத்துத் திறன், மொழிபெயர்ப்பு மற்றும் இலக்கிய விரிவாக்கங்களை மேம்படுத்தும் பட்டறைகள்.</p>
                        </div>
                      </div>
                      <div className="h10-process-item">
                        <h6 className="h10-process-sln">சமூகம்</h6>
                        <div className="h10-process-content">
                          <h4 className="title">சமூக பங்களிப்பு</h4>
                          <p className="desc">தமிழ் கல்வி மற்றும் கலாச்சார பராமரிப்பில் சமூக வட்டாரங்களில் செயல்பாடுகள்.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* end: Activities Section */}

            {/* start: Research & Careers Section */}
            <section className="h10-blog section-gap">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="sec-heading-wrap ">
                      <div className="heading-wrap-content">
                        <div className="sec-heading style-3">
                          <span className="sub-title wow fadeInUp" data-wow-delay=".3s"><i className="fas fa-box"></i> ஆராய்ச்சி & தொழில்முனைவுகள்</span>
                          <h2 className="sec-title text-anim">ஆராய்ச்சி மற்றும் மேம்பாடு</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="blog-wrapper h8-blog-wrapper h10-blog-wrapper">
                      <div className="blog-item style-2 wow fadeInUp" data-wow-delay=".3s">
                        <div className="blog-content">
                          <div className="title-area">
                            <p className="desc">தமிழ் மரபு, கதைச்சொற்கள், தமிழ் மொழிபெயர்ப்பு, தமிழ் இலக்கியம், கிராமிய மரபுகள் மற்றும் காலகட்டங்களுடன் கூடிய மொழியியல் போன்ற துறைகளில் ஆராய்ச்சி.</p>
                          </div>
                          <div className="title-area" style={{marginTop: '16px'}}>
                            <h3 className="title">தொழில்முனைவுகள்</h3>
                            <ul className="desc" style={{paddingLeft: '1.2rem'}}>
                              <li>தமிழ் மொழி ஆசிரியர்</li>
                              <li>தமிழ் இலக்கிய ஆராய்ச்சியாளர்</li>
                              <li>மொழிபெயர்ப்பாளர் / பொருள்மொழிபெயர்ப்பாளர்</li>
                              <li>தமிழ் பதிப்பியல் ஆசிரியர்</li>
                              <li>கலாச்சார நிகழ்ச்சி ஒருங்கிணைப்பாளர்</li>
                              <li>ஊடக வல்லுநர் (தொலைக்காட்சி, ரேடியோ, சமூக ஊடகம்)</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* end: Research & Careers Section */}

            {/* start: Faculty Section */}
            <section className="h8-team section-gap section-gap-x">
              <div className="container">
                <div className="row h8-team-wrapper gap-0">
                  <div className="col-lg-3 col-sm-6">
                    <div className="sec-heading style-3">
                      <span className="sub-title wow fadeInUp" data-wow-delay=".3s">à®ªà®£à®¿à®¯à®¾à®³à®°à¯à®•à®³à®¿à®©à¯ à®ªà¯†à®¯à®°à¯</span>
                      <h2 className="sec-title title-anim">à®Žà®™à¯à®•à®³à¯ à®ªà®£à®¿à®¯à®¾à®³à®°à¯à®•à®³à¯.</h2>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 h8-team-item-wrapper">
                    <div className="team-item wow fadeInRightBig" data-wow-delay=".2s">
                      <div className="team-img">
                        <div className="team-img-inner">
                          <img src="/assets/images/team/tamil-sf/Dr.O.P.Karuppasamy.png" alt="Dr. O.P. Karuppasamy" style={{width: '100%', height: 'auto', objectFit: 'contain'}} />
                        </div>
                        <div className="social-links">
                          <ul>
                            <li><a href="mailto:karuppasamy.op@jkkn.ac.in" target="_blank"><i className="fa-solid fa-envelope"></i></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="team-content">
                        <h5 className="title">Dr. O.P. Karuppasamy</h5>
                        <span className="designation">Assistant Professor & Head</span>
                        <p className="qualification">M.A., M.Phil., Ph.D</p>
                        <div className="social-links">
                          <ul>
                            <li><a href="mailto:karuppasamy.op@jkkn.ac.in" target="_blank"><i className="fa-solid fa-envelope"></i></a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 h8-team-item-wrapper">
                    <div className="team-item wow fadeInRightBig" data-wow-delay=".3s">
                      <div className="team-img">
                        <div className="team-img-inner">
                          <img src="/assets/images/team/tamil-sf/Mr.A.Kumar.png" alt="Mr. A. Kumar" style={{width: '100%', height: 'auto', objectFit: 'contain'}} />
                        </div>
                        <div className="social-links">
                          <ul>
                            <li><a href="mailto:kumar.a@jkkn.ac.in" target="_blank"><i className="fa-solid fa-envelope"></i></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="team-content">
                        <h5 className="title">Mr. A. Kumar</h5>
                        <span className="designation">Assistant Professor</span>
                        <p className="qualification">M.A., B.Ed., M.Phil.</p>
                        <div className="social-links">
                          <ul>
                            <li><a href="mailto:kumar.a@jkkn.ac.in" target="_blank"><i className="fa-solid fa-envelope"></i></a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 h8-team-item-wrapper">
                    <div className="team-item wow fadeInRightBig" data-wow-delay=".4s">
                      <div className="team-img">
                        <div className="team-img-inner">
                          <img src="/assets/images/team/tamil-sf/Mr.Arivazhagan.png" alt="Mr. Arivazhagan" style={{width: '100%', height: 'auto', objectFit: 'contain'}} />
                        </div>
                        <div className="social-links">
                          <ul>
                            <li><a href="mailto:arivazhagan@jkkn.ac.in" target="_blank"><i className="fa-solid fa-envelope"></i></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="team-content">
                        <h5 className="title">Mr. Arivazhagan</h5>
                        <span className="designation">Assistant Professor</span>
                        <p className="qualification">M.A., B.Ed., M.Phil.</p>
                        <div className="social-links">
                          <ul>
                            <li><a href="mailto:arivazhagan@jkkn.ac.in" target="_blank"><i className="fa-solid fa-envelope"></i></a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 h8-team-item-wrapper">
                    <div className="team-item wow fadeInRightBig" data-wow-delay=".5s">
                      <div className="team-img">
                        <div className="team-img-inner">
                          <img src="/assets/images/team/tamil-sf/Ms.R.Manjuladevi.png" alt="Ms. R. Manjuladevi" style={{width: '100%', height: 'auto', objectFit: 'contain'}} />
                        </div>
                        <div className="social-links">
                          <ul>
                            <li><a href="mailto:manjuladevi.r@jkkn.ac.in" target="_blank"><i className="fa-solid fa-envelope"></i></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="team-content">
                        <h5 className="title">Ms. R. Manjuladevi</h5>
                        <span className="designation">Assistant Professor</span>
                        <p className="qualification">M.A., M.Phil.</p>
                        <div className="social-links">
                          <ul>
                            <li><a href="mailto:manjuladevi.r@jkkn.ac.in" target="_blank"><i className="fa-solid fa-envelope"></i></a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 h8-team-item-wrapper">
                    <div className="team-item wow fadeInRightBig" data-wow-delay=".6s">
                      <div className="team-img">
                        <div className="team-img-inner">
                          <img src="/assets/images/team/tamil-sf/MR.K.SRIDHAR.png" alt="Mr. K. Sridhar" style={{width: '100%', height: 'auto', objectFit: 'contain'}} />
                        </div>
                        <div className="social-links">
                          <ul>
                            <li><a href="mailto:sridhar.k@jkkn.ac.in" target="_blank"><i className="fa-solid fa-envelope"></i></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="team-content">
                        <h5 className="title">Mr. K. Sridhar</h5>
                        <span className="designation">Assistant Professor</span>
                        <p className="qualification">M.A.</p>
                        <div className="social-links">
                          <ul>
                            <li><a href="mailto:sridhar.k@jkkn.ac.in" target="_blank"><i className="fa-solid fa-envelope"></i></a></li>
                          </ul>
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

