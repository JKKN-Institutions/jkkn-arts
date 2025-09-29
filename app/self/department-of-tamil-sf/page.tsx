import Image from 'next/image';
import PageLayout from '../../components/PageLayout';


import { Noto_Sans_Tamil } from 'next/font/google';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
const notoTamil = Noto_Sans_Tamil({ subsets: ['tamil'], weight: ['400','500','700'] });

export default function DepartmentOfTamilSF() {
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

      

      <div id="smooth-wrapper" className={notoTamil.className}>
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
                        <div className="h6-hero-history-title">தமிழ்த் துறை</div>
                        <p className="h6-hero-history-desc">தமிழ்த் துறை என்பது தமிழ் மொழி மற்றும் இலக்கியத்தின் பராமரிப்பு, ஊக்குவிப்பு மற்றும் மேம்பாட்டில் அர்ப்பணிக்கப்பட்டுள்ள ஒரு துறை ஆகும்.</p>
                      </div>
                      
                    </div>
                  </div>
                  <div className="col-lg-8 col-xl-9">
                    <div className="banner-content-2">
                      <h1 className="banner-title text-anim">தமிழ்த் துறை (Self-Financed) <i className="fas fa-curve-arrow wow fadeInRight" data-wow-delay=".7s"></i>
                      </h1>
                      <div className="banner-desc-area wow fadeInUp" data-wow-delay=".7s">
                        <a className="tj-primary-btn" href="#">
                          <span className="btn-text"><span>Apply Now</span></span>
                          <span className="btn-icon"><i className="fas fa-arrow-right-long"></i></span>
                        </a>
                        <div className="banner-desc">தமிழ் மொழியின் பரம்பரை மற்றும் காலநிலை சார்ந்த அடையாளங்களை முழுமையாகப் புரிந்துகொள்வதுடன், அதன் இலக்கியம், வரலாறு மற்றும் சமூக-சாமூகிய முக்கியத்துவங்களை மாணவர்களுக்கு அறிவிப்பதாக இந்த துறை நோக்கமிடுகிறது.
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
                        <video autoPlay loop muted playsInline data-wf-ignore="true" data-object-fit="cover" poster="/assets/images/img/department-of-tamil-sf.png">
                          <source src="/assets/video/h10-banner-videio.webp" data-wf-ignore="true" />
                          <source src="/assets/video/h10-banner-videio.webp" data-wf-ignore="true" />
                        </video>
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
                          <span className="sub-title wow fadeInUp" data-wow-delay=".3s"><i className="fas fa-box"></i> முக்கிய பகுதிகள்</span>
                          <h2 className="sec-title text-anim">தமிழ் மொழி மற்றும் இலக்கியத்தின் விரிவான பாடத்திட்டம்.</h2>
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
                                <h4 className="title"><a href="/self/department-of-tamil-sf">தமிழ் இலக்கியம்</a></h4>
                                <p className="desc">பண்டைய தமிழ் இலக்கியக் களங்களில் இருந்து, சமகால இலக்கியப் படிப்புகளில் விமர்சன திறனைக் கற்றுத்தரும் விரிவான கோட்பாட்டு விரிவுரைகள்.</p>
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
                                <h4 className="title"><a href="/self/department-of-tamil-sf">தமிழ் மொழியியல்</a></h4>
                                <p className="desc">தமிழ் மொழியின் கட்டமைப்பு, வளர்ச்சி மற்றும் பயன்பாட்டை ஆராயும் மொழியியல் படிப்புகள்.
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
                                <h4 className="title"><a href="/self/department-of-tamil-sf">தமிழ் கலாச்சாரம்</a></h4>
                                <p className="desc">தமிழ் கலாச்சாரத்தின் பரம்பரை, மரபுகள் மற்றும் சமூக முக்கியத்துவத்தை ஆராயும் படிப்புகள்.
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
                                <h4 className="title"><a href="/self/department-of-tamil-sf">ஆராய்ச்சி மற்றும் மேம்பாடு</a></h4>
                                <p className="desc">தமிழ் மரபு, கதைச்சொற்கள், மொழிபெயர்ப்பு படிப்புகள் போன்ற துறைகளில் ஆராய்ச்சி செய்க.
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
                        <Image src="/assets/images/img/department-of-computer-science.png" alt="" width={400} height={300} style={{width: '100%', height: 'auto', maxHeight: '320px', objectFit: 'cover'}} data-speed=".8" />
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-7">
                    <div className="h10-about-content-wrapper">
                      <div className="sec-heading style-3 ">
                        <span className="sub-title wow fadeInUp" data-wow-delay=".3s"><i className="fas fa-box"></i> தமிழ்த் துறை பற்றி</span>
                        <h2 className="sec-title title-highlight wow fadeInUp" data-wow-delay=".3s">தமிழ் மொழி மற்றும் இலக்கியத்தில் வலுவான அடித்தளம்.
                        </h2>
                      </div>
                      <div className="row">
                        <div className="col-12 col-md-6 d-none d-md-block d-lg-none">
                          <div className="about-img-area h10-about-banner wow bounceInLeft" data-wow-delay=".3s">
                            <div className="about-img">
                              <Image src="/assets/images/img/department-of-computer-science.png" alt="" width={400} height={300} style={{ width: '100%', height: 'auto', maxHeight: '320px', objectFit: 'cover' }} />
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-12">
                          <div className="h10-about-content">
                            <div className="customers-box style-3 h10-about-clients wow fadeInUp" data-wow-delay=".4s">
                              <div className="customers">
                                <ul>
                                  <li className="wow fadeInLeft" data-wow-delay=".2s"><Image src="/assets/images/testimonial/client-1.webp" alt="" width={400} height={300} style={{ width: "100%", height: "auto" }} /></li>
                                  <li className="wow fadeInLeft" data-wow-delay=".3s"><Image src="/assets/images/testimonial/client-2.webp" alt="" width={400} height={300} style={{ width: "100%", height: "auto" }} /></li>
                                  <li className="wow fadeInLeft" data-wow-delay=".4s"><Image src="/assets/images/testimonial/client-3.webp" alt="" width={400} height={300} style={{ width: "100%", height: "auto" }} /></li>
                                  <li className="wow fadeInLeft" data-wow-delay=".5s"><span><i className="fas fa-plus"></i></span></li>
                                </ul>
                              </div>
                            </div>

                            <p className="desc wow fadeInUp" data-wow-delay=".4s">தமிழ்த் துறை என்பது தமிழ் மொழி மற்றும் இலக்கியத்தின் பராமரிப்பு, ஊக்குவிப்பு மற்றும் மேம்பாட்டில் அர்ப்பணிக்கப்பட்டுள்ள ஒரு துறை ஆகும். தமிழ் மொழியின் பரம்பரை மற்றும் காலநிலை சார்ந்த அடையாளங்களை முழுமையாகப் புரிந்துகொள்வதுடன், அதன் இலக்கியம், வரலாறு மற்றும் சமூக-சாமூகிய முக்கியத்துவங்களை மாணவர்களுக்கு அறிவிப்பதாக இந்த துறை நோக்கமிடுகிறது.</p>
                            
                            <div className="h9-about-funfact h10-about-funfact">
                              <div className="countup-item">
                                <div className="inline-content">
                                  <span className="odometer countup-number" data-count="5" style={{fontSize: '0.4em'}}> </span>
                                  <span className="count-plus" style={{fontSize: '0.3em'}}> பணியாளர்கள்</span>
                                </div>
                                <span className="count-text">அனுபவமிக்க பணியாளர்கள்.</span>
                              </div>
                              <div className="countup-item">
                                <div className="inline-content">
                                  <span className="odometer countup-number" data-count="50" style={{fontSize: '0.4em'}}> </span>
                                  <span className="count-plus" style={{fontSize: '0.3em'}}> ஆண்டுகள்</span>
                                </div>
                                <span className="count-text">கல்வி சிறப்பு மற்றும் முன்னேற்றம்.</span>
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
                      <span className="sub-title"><i className="fas fa-box"></i> பாடத்திட்ட அமைப்பு</span>
                      <h2 className="sec-title text-anim">தமிழ் மொழி மற்றும் இலக்கியத்தின் விரிவான கற்றல் அனுபவம்.</h2>
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
                        <h6 className="h10-process-sln">கோட்பாடு</h6>
                        <div className="h10-process-icon">
                          <i className="fas fa-growth"></i>
                        </div>
                        <div className="h10-process-content">
                          <h4 className="title">கோட்பாட்டு விரிவுரைகள்</h4>
                          <p className="desc">தமிழ் இலக்கியம், மொழியியல் மற்றும் கலாச்சாரப் படிப்புகளில் விமர்சன திறனைக் கற்றுத்தரும் விரிவான கோட்பாட்டு விரிவுரைகள்.</p>
                        </div>
                      </div>
                      <div className="h10-process-item tj-sticky-panel-3">
                        <h6 className="h10-process-sln">நடைமுறை</h6>
                        <div className="h10-process-icon">
                          <i className="fas fa-worldwide"></i>
                        </div>
                        <div className="h10-process-content">
                          <h4 className="title">நடைமுறை பயிற்சிகள்</h4>
                          <p className="desc">தமிழ் மொழியில் எழுதும் திறன், மொழிபெயர்ப்பு மற்றும் இலக்கிய விரிவாக்கங்களை மேம்படுத்தும் கலைச்சொற்கள் மற்றும் நடைமுறை பயிற்சிகள்.</p>
                        </div>
                      </div>
                      <div className="h10-process-item tj-sticky-panel-3">
                        <h6 className="h10-process-sln">ஆராய்ச்சி</h6>
                        <div className="h10-process-icon">
                          <i className="fas fa-complete"></i>
                        </div>
                        <div className="h10-process-content">
                          <h4 className="title">ஆராய்ச்சி திட்டங்கள்</h4>
                          <p className="desc">தமிழ் மரபு, கதைச்சொற்கள், தமிழ் மொழிபெயர்ப்பு, தமிழ் இலக்கியம், கிராமிய மரபுகள் மற்றும் காலகட்டங்களுடன் கூடிய மொழியியல் ஆகிய துறைகளில் ஆராய்ச்சி செய்க.</p>
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
                <Image src="/assets/images/shape/h7-testimonial-shape-blur.svg" alt="" width={400} height={300} style={{ width: "100%", height: "auto" }} />
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
                      <span className="sub-title wow fadeInUp" data-wow-delay=".3s"><i className="fas fa-box"></i>திட்ட சுருக்கம்</span>
                      <h2 className="sec-title text-anim">தமிழ்த் துறையில் வெற்றிக்கான அடித்தளம்.</h2>
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
                            <span className="categories">தமிழ்த் துறை</span>
                          </div>
                          <div className="title-area">
                            <h3 className="title">கல்வி சிறப்பு</h3>
                            <p>தமிழ்த் துறை மாணவர்களுக்கு தமிழ் மொழி மற்றும் இலக்கியத்தில் வலுவான அடித்தளத்தையும், கல்வி, ஊடகங்கள், வெளியீடுகள் மற்றும் கலாச்சார பராமரிப்பு ஆகிய துறைகளில் சாதனைகளைக் கொண்ட நிபுணர்களை உருவாக்க நிபுணர்களை உருவாக்குகிறது.</p>
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
                        <i className="fas fa-box"></i>பட்டப்படிப்புகள்
                      </span>
                      <h2 className="sec-title title-anim">வழங்கப்படும் கல்வி திட்டங்கள்.</h2>
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
                            <h4 className="title">B.A. தமிழ் (Self-Financed)</h4>
                            <div className="service-content">
                              <p className="desc">
                                <strong>காலம்:</strong> 3 ஆண்டுகள்<br/>
                                <strong>நிலை:</strong> இளங்கலை<br/>
                                தமிழ் மொழி மற்றும் இலக்கியத்தில் விரிவான அடித்தளம்
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-4 col-xl-4">
                          <div className="service-item h8-service-item">
                            <div className="service-icon">
                              <i className="fas fa-service-2"></i>
                            </div>
                            <h4 className="title">M.A. தமிழ்</h4>
                            <div className="service-content">
                              <p className="desc">
                                <strong>காலம்:</strong> 2 ஆண்டுகள்<br/>
                                <strong>நிலை:</strong> முதுகலை<br/>
                                தமிழ் இலக்கியம் மற்றும் மொழியியலில் ஆழமான படிப்பு
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-4 col-xl-4">
                          <div className="service-item h8-service-item">
                            <div className="service-icon">
                              <i className="fas fa-service-3"></i>
                            </div>
                            <h4 className="title">Ph.D. தமிழ்</h4>
                            <div className="service-content">
                              <p className="desc">
                                <strong>காலம்:</strong> 3 ஆண்டுகள்<br/>
                                <strong>நிலை:</strong> ஆராய்ச்சி<br/>
                                தமிழ் மரபு மற்றும் இலக்கிய ஆராய்ச்சி
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
                        <i className="fas fa-box"></i>காணொளி மற்றும் பணி
                      </span>
                      <h2 className="sec-title title-anim">எங்கள் நோக்கம் மற்றும் உறுதிப்பாடு.</h2>
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
                                <li>தமிழ் மொழி, இலக்கியம் மற்றும் கலாச்சாரத்தில் முழுமையான கல்வியை வழங்கி, வாசிப்பதில், எழுதுவதிலும், பேசுவதிலும் திறமையை மேம்படுத்துவதை நோக்கமாகக் கொண்டு.</li>
                                <li>தமிழ் இலக்கியம், மொழியியல் மற்றும் கலாச்சாரப் படிப்புகளில் விமர்சன திறனைக் கற்றுத்தர.</li>
                                <li>தமிழ் மரபின் முக்கியத்துவத்தை நன்றாகப் புரிந்துகொள்பவர்கள் ஆகவும், அதை சமூகத்தில் எவ்வாறு பயன்படுத்துவது என்பதை கற்றுத்தர.</li>
                                <li>கல்வி, ஊடகங்கள், வெளியீடுகள் மற்றும் கலாச்சார பராமரிப்பு ஆகிய துறைகளில் சாதனைகளைக் கொண்ட நிபுணர்களை உருவாக்க.</li>
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
                              <li>அனுபவமிக்க பணியாளர்கள்: தமிழ் இலக்கியம், மொழியியல் மற்றும் கலாச்சாரத்தில் நிபுணத்துவம் வாய்ந்த நிபுணர்கள்.</li>
                              <li>பல்வேறு பாடத்திட்டங்கள்: பண்டைய தமிழ் இலக்கியக் களங்களில் இருந்து, சமகால இலக்கியப் படைப்புகள் வரை உள்ள விரிவான படிப்புகள்.</li>
                              <li>சமூக ஈடுபாடு: தமிழ் கலாச்சாரத்தை கொண்டாடும் நிகழ்வுகள், இலக்கியப் போட்டிகள் மற்றும் கலை நிகழ்ச்சிகள்.</li>
                              <li>ஆராய்ச்சி வாய்ப்புகள்: தமிழ் மரபு, கதைச்சொற்கள், மொழிபெயர்ப்பு படிப்புகள் போன்ற துறைகளில் ஆராய்ச்சி செய்க.</li>
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
                          <p className="desc">தமிழ் இலக்கியம் மற்றும் கலாச்சாரத்தை கொண்டாடும் இலக்கிய விவாதங்கள், நாடகக் காட்சிகள் மற்றும் கவிதை விருப்பங்கள்.</p>
                        </div>
                      </div>
                      <div className="h10-process-item">
                        <h6 className="h10-process-sln">செமினார்கள்</h6>
                        <div className="h10-process-content">
                          <h4 className="title">செமினார்கள் மற்றும் விருந்தினர் சொற்பொழிவுகள்</h4>
                          <p className="desc">தமிழ் இலக்கியத் துறையில் நவீனமடைந்த கொள்கைகள், புதிய படைப்புகள் மற்றும் பணியாளர்களுடன் நேரடி தொடர்பு.</p>
                        </div>
                      </div>
                      <div className="h10-process-item">
                        <h6 className="h10-process-sln">பயிற்சிகள்</h6>
                        <div className="h10-process-content">
                          <h4 className="title">வேலைப்பாடுகள்</h4>
                          <p className="desc">தமிழ் மொழியில் எழுதும் திறன், மொழிபெயர்ப்பு மற்றும் இலக்கிய விரிவாக்கங்களை மேம்படுத்தும் கலைச்சொற்கள்.</p>
                        </div>
                      </div>
                      <div className="h10-process-item">
                        <h6 className="h10-process-sln">சமூகம்</h6>
                        <div className="h10-process-content">
                          <h4 className="title">சமூக பங்களிப்பு</h4>
                          <p className="desc">தமிழ் கல்வி மற்றும் கலாச்சாரத்தை பராமரிக்க சமூக வட்டாரங்களில் கலந்துகொள்வது.</p>
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
                      <span className="sub-title wow fadeInUp" data-wow-delay=".3s">பணியாளர்களின் பெயர்</span>
                      <h2 className="sec-title title-anim">எங்கள் பணியாளர்கள்.</h2>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 h8-team-item-wrapper">
                    <div className="team-item wow fadeInRightBig" data-wow-delay=".2s">
                      <div className="team-img">
                        <div className="team-img-inner">
                          <Image src="/assets/images/team/tamil-sf/Dr.O.P.Karuppasamy.png" alt="Dr. O.P. Karuppasamy" width={400} height={300} style={{ width: '100%', height: 'auto', objectFit: 'contain' }} />
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
                          <Image src="/assets/images/team/tamil-sf/Mr.A.Kumar.png" alt="Mr. A. Kumar" width={400} height={300} style={{ width: '100%', height: 'auto', objectFit: 'contain' }} />
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
                          <Image src="/assets/images/team/tamil-sf/Mr.Arivazhagan.png" alt="Mr. Arivazhagan" width={400} height={300} style={{ width: '100%', height: 'auto', objectFit: 'contain' }} />
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
                          <Image src="/assets/images/team/tamil-sf/Ms.R.Manjuladevi.png" alt="Ms. R. Manjuladevi" width={400} height={300} style={{ width: '100%', height: 'auto', objectFit: 'contain' }} />
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
                          <Image src="/assets/images/team/tamil-sf/MR.K.SRIDHAR.png" alt="Mr. K. Sridhar" width={400} height={300} style={{ width: '100%', height: 'auto', objectFit: 'contain' }} />
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
                <Image src="/assets/images/shape/pattern-2.svg" alt="" width={400} height={300} style={{ width: "100%", height: "auto" }} />
              </div>
              <div className="bg-shape-2">
                <Image src="/assets/images/shape/pattern-3.svg" alt="" width={400} height={300} style={{ width: "100%", height: "auto" }} />
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


