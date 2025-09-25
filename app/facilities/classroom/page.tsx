import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import OffcanvasMenu from '../../components/OffcanvasMenu';

export default function ClassroomPage() {
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
                <Link href="/" className="mobile_logo">
                  <img src="/assets/images/logos/logo.png" alt="Logo" />
                </Link>
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


            {/* start: About Section */}
            <section className="tj-about-section h6-about section-gap section-gap-x" style={{ backgroundColor: '#d8e5e5' }}>
              <div className="container">
                <div className="row">
                  <div className="col-xl-6 col-lg-6">
                    <div className="about-content-area h6-about-content style-1 wow fadeInLeft" data-wow-delay=".2s">
                      <div className="sec-heading style-2 style-6">
                        <span className="sub-title wow fadeInUp" data-wow-delay=".3s" style={{ backgroundColor: '#d8e5e5', color: '#000' }}><i className="fas fa-box"></i>OUR CLASSROOMS</span>
                        <p className="desc wow fadeInUp" data-wow-delay=".8s" style={{ color: '#6b7474' }}>At JKKN Educational Institutions, we prioritize the importance of exceptional classroom facilities for an excellent learning experience. Our classrooms are specifically designed to create an engaging and comfortable environment where students can immerse themselves in their studies and develop their skills.</p>
                        <p className="desc wow fadeInUp" data-wow-delay=".8s" style={{ color: '#6b7474' }}>Our facilities are equipped with state-of-the-art technology, including high-speed internet, multimedia projectors, and interactive whiteboards, to provide students with easy access to a vast amount of information. We also offer comfortable seating arrangements to ensure that students can focus on their studies without any discomfort or distractions.</p>
                        <p className="desc wow fadeInUp" data-wow-delay=".8s" style={{ color: '#6b7474' }}>Apart from functionality, we believe that the aesthetics of the learning environment are vital in inspiring creativity and encouraging positive attitudes towards learning. Thus, our classrooms are decorated with vibrant colors and motivational posters to create a welcoming atmosphere that fosters a love of learning.</p>
                        <p className="desc wow fadeInUp" data-wow-delay=".8s" style={{ color: '#6b7474' }}>We understand that each student has unique learning needs, and that's why we offer various classroom settings to cater to diverse learning styles. Our classrooms range from traditional lecture-style setups to collaborative workspaces, providing students with a comfortable environment that suits their learning preferences.</p>
                        <p className="desc wow fadeInUp" data-wow-delay=".8s" style={{ color: '#6b7474' }}>Furthermore, we maintain and clean our classrooms regularly to ensure that students can concentrate on their studies without any distractions. We are committed to providing a safe and hygienic learning environment that promotes academic success and personal growth.</p>
                        <p className="desc wow fadeInUp" data-wow-delay=".8s" style={{ color: '#6b7474' }}>In summary, at JKKN Educational Institutions, we are dedicated to providing our students with exceptional classroom facilities that inspire learning and growth. We believe that a great learning environment is crucial for academic success, and our classrooms are designed to provide just that.</p>
                      </div>
                      <div className="h6-about-funfact-wrapper">

                        <div className="h6-about-funfact-shape">
                          <img src="/assets/images/shape/about-counter-shape-blur.svg" alt="" />
                        </div>
                      </div>

                      <div className="btn-area wow fadeInUp" data-wow-delay=".8s">
                        <a className="tj-primary-btn" href="#">
                          <span className="btn-text"><span>Know More Us</span></span>
                          <span className="btn-icon"><i className="fas fa-arrow-right-long"></i></span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6">
                    <div className="about-img-area h6-about-img wow fadeInLeft" data-wow-delay=".2s">
                      <div className="about-img wow fadeInRight" data-wow-delay=".8s">
                        <img src="/assets/images/img/classroom.png" alt="" style={{ width: '100%', height: 'auto' }} />
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
            {/* end: About Section */}

<br/>







          </main>

          {/* start: Footer Section */}
          <Footer />
          {/* end: Footer Section */}
        </div>
      </div>
    </>
  );
}

