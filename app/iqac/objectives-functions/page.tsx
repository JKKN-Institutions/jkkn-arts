import Header from '../../components/Header';
import Footer from '../../components/Footer';
import OffcanvasMenu from '../../components/OffcanvasMenu';

export default function ObjectivesFunctionsPage() {
  return (
    <>
      {/* start: Offcanvas Menu */}
      <OffcanvasMenu />
      {/* end: Offcanvas Menu */}

      {/* start: Hamburger Menu */}
      <div className="hamburger-area d-lg-none">
        <div className="hamburger_bg"></div>
        <div className="hamburger_wrapper">
          <div className="hamburger_inner">
            <div className="hamburger_top d-flex align-items-center justify-content-between">
              <div className="hamburger_logo">
                <a href="/" className="mobile_logo">
                  <img src="/assets/images/logos/logo.png" alt="Logo" />
                </a>
              </div>
              <div className="hamburger_close">
                <button className="hamburger_close_btn"><i className="fa-thin fa-times"></i></button>
              </div>
            </div>
            <div className="hamburger_menu">
              <div className="mobile_menu"></div>
            </div>
            <div className="hamburger-infos">
              <h5 className="hamburger-title">Contact Info</h5>
              <div className="contact-info">
                <div className="contact-item">
                  <span className="subtitle">Phone</span>
                  <a className="contact-link" href="tel:8089091313">808-909-1313</a>
                </div>
                <div className="contact-item">
                  <span className="subtitle">Email</span>
                  <a className="contact-link" href="mailto:info@bexon.com">info@bexon.com</a>
                </div>
                <div className="contact-item">
                  <span className="subtitle">Location</span>
                  <span className="contact-link">993 Renner Burg, West Rond, MT 94251-030</span>
                </div>
              </div>
            </div>
          </div>
          <div className="hamburger-socials">
            <h5 className="hamburger-title">Follow Us</h5>
            <div className="social-links style-3">
              <ul>
                <li><a href="https://www.facebook.com/" target="_blank"><i className="fa-brands fa-facebook-f"></i></a></li>
                <li><a href="https://www.instagram.com/" target="_blank"><i className="fa-brands fa-instagram"></i></a></li>
                <li><a href="https://x.com/" target="_blank"><i className="fa-brands fa-x-twitter"></i></a></li>
                <li><a href="https://www.linkedin.com/" target="_blank"><i className="fa-brands fa-linkedin-in"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* end: Hamburger Menu */}

      {/* start: Header Area */}
      <Header />
      {/* end: Header Area */}


      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main id="primary" className="site-main">
            <div className="top-space-15"></div>


                        {/* start: Banner Section */}
                        <section className="tj-banner-section h6-hero section-gap-x">
                            <div className="banner-area">
                                <div className="banner-left-box">
                                    <div className="banner-content">
                                        <h1 className="banner-title title-anim">IQAC Objectives & Functions
                                        </h1>
                                        <p>IQAC evolves plan of action for academic and administrative excellence and implements through the activities of Departments and various Associations. It defines and promotes quality parameters for effective teaching-learning, research, students' support and progression, leadership, and management, while holding up the Institutional and cultural values.</p>
                      <div className="btn-area wow fadeInUp" data-wow-delay=".8s">
                        <a className="tj-primary-btn" href="#">
                                                <span className="btn-text"><span>Contact Us</span></span>
                          <span className="btn-icon"><i className="fas fa-arrow-right-long"></i></span>
                        </a>
                      </div>

                                        
                                        <div className="bg-shape-2">
                                            <img src="/assets/images/shape/pattern-3.svg" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="banner-right-box">
                                    <div className="banner-img wow fadeInUp" data-wow-delay=".3s">
                                        <img data-speed=".8" src="/assets/images/hero/h6-hero-banner.webp" alt="" />
                    </div>
                  </div>
                      </div>
                        </section>
                        {/* end: Banner Section */}

                        

                        {/* start: Functions Section */}
                        <section className="tj-choose-section h6-choose section-gap">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="sec-heading style-2 style-6 text-center">
                                            <span className="sub-title wow fadeInUp" data-wow-delay=".3s">
                                                <i className="fas fa-box"></i>IQAC Functions
                                            </span>
                                            <h2 className="sec-title title-anim">As per UGC Guidelines</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="row row-gap-4 rightSwipeWrap">
                                    <div className="col-lg-6">
                                        <div className="choose-box h6-choose-box right-swipe">
                                            <div className="choose-content">
                                                <div className="choose-icon">
                                                    <i className="fas fa-innovative"></i>
                                                </div>
                                                <h4 className="title">Development & Application</h4>
                                                <p className="desc">Development and application of quality benchmarks/parameters for the various academic and administrative activities of the Colleges</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="choose-box h6-choose-box right-swipe">
                                            <div className="choose-content">
                                                <div className="choose-icon">
                                                    <i className="fas fa-award"></i>
                                                </div>
                                                <h4 className="title">Learner-Centric Environment</h4>
                                                <p className="desc">Facilitating the creation of a learner-centric environment conducive for quality education and faculty maturation to adopt the required knowledge and technology for participatory teaching and learning process</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="choose-box h6-choose-box right-swipe">
                                            <div className="choose-content">
                                                <div className="choose-icon">
                                                    <i className="fas fa-support"></i>
                                                </div>
                                                <h4 className="title">Feedback Collection</h4>
                                                <p className="desc">Arrangement for feedback responses from students, parents and other stakeholders on quality-related institutional processes</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="choose-box h6-choose-box right-swipe">
                                            <div className="choose-content">
                                                <div className="choose-icon">
                                                    <i className="fas fa-innovative"></i>
                                                </div>
                                                <h4 className="title">Information Dissemination</h4>
                                                <p className="desc">Dissemination of information on the various quality parameters of higher education</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="choose-box h6-choose-box right-swipe">
                                            <div className="choose-content">
                                                <div className="choose-icon">
                                                    <i className="fas fa-award"></i>
                                                </div>
                                                <h4 className="title">Workshops & Seminars</h4>
                                                <p className="desc">Organization of inter and intra Institutional Workshops, Seminars on quality related themes and promotion of quality circles</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="choose-box h6-choose-box right-swipe">
                                            <div className="choose-content">
                                                <div className="choose-icon">
                                                    <i className="fas fa-support"></i>
                                                </div>
                                                <h4 className="title">Documentation</h4>
                                                <p className="desc">Documentation of the various programmes/activities of the College, leading to quality improvement</p>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            </section>
                        {/* end: Functions Section */}

                        <br />
          </main>

          {/* start: Footer Section */}
          <Footer />
          {/* end: Footer Section */}
        </div>
      </div>
    </>
  );
}

