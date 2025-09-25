import Link from 'next/link';
import Header from '../components/Header';
import OffcanvasMenu from '../components/OffcanvasMenu';
import Footer from '../components/Footer';

export default function Contact() {
  return (
    <>
      <OffcanvasMenu />
      <Header />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main id="primary" className="site-main">
            <div className="space-for-header"></div>
            <br/><br/>
            {/* start: Breadcrumb Section */}
            <section className="tj-page-header section-gap-x" data-bg-image="/assets/images/bg/pheader-bg.webp">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="tj-page-header-content text-center">
                      <h1 className="tj-page-title">Contact Us</h1>
                      <div className="tj-page-link">
                        <span><i className="fas fa-home"></i></span>
                        <span>
                          <Link href="/">Home</Link>
                        </span>
                        <span><i className="fas fa-arrow-right"></i></span>
                        <span>Contact Us</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="page-header-overlay" data-bg-image="/assets/images/shape/pheader-overlay.webp"></div>
            </section>
            {/* end: Breadcrumb Section */}

            {/* start: Contact Top Section */}
            <div className="tj-contact-area section-gap">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="sec-heading text-center">
                      <span className="sub-title wow fadeInUp" data-wow-delay=".1s"><i className="fas fa-box"></i>Contact info</span>
                      <h2 className="sec-title title-anim"><span>Reach</span> Out to Us</h2>
                    </div>
                  </div>
                </div>
                <div className="row row-gap-4">
                  <div className="col-xl-3 col-lg-6 col-sm-6">
                    <div className="contact-item style-2 wow fadeInUp" data-wow-delay=".3s">
                      <div className="contact-icon">
                        <i className="fas fa-location-3"></i>
                      </div>
                      <h3 className="contact-title">Our Location</h3>
                      <p>Natarajapuram, NH-544 (Salem to Coimbatore), Kumarapalayam â€“ 638183, Namakkal (DT)</p>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-6 col-sm-6">
                    <div className="contact-item style-2 wow fadeInUp" data-wow-delay=".5s">
                      <div className="contact-icon">
                        <i className="fas fa-envelop"></i>
                      </div>
                      <h3 className="contact-title">Email us</h3>
                      <ul className="contact-list">
                        <li><a href="mailto:info@jkkn.ac.in">info@jkkn.ac.in</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-6 col-sm-6">
                    <div className="contact-item style-2 wow fadeInUp" data-wow-delay=".7s">
                      <div className="contact-icon">
                        <i className="fas fa-phone"></i>
                      </div>
                      <h3 className="contact-title">Call us</h3>
                      <ul className="contact-list">
                        <li><a href="tel:9345855001">+91 93458 55001</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-6 col-sm-6">
                    <div className="contact-item style-2 wow fadeInUp" data-wow-delay=".9s">
                      <div className="contact-icon">
                        <i className="fas fa-chat"></i>
                      </div>
                      <h3 className="contact-title">Admission Form</h3>
                      <ul className="contact-list">
                        <li className="active"><a href="https://jkkn.in/admission-form">Click here</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* end: Contact Top Section */}

            {/* start: Contact Section */}
            <section className="tj-contact-section-2 section-bottom-gap">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="map-area wow fadeInUp" data-wow-delay=".1s">
                      <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d59472.190196556694!2d77.730244!3d11.443779!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba969831c528ab9%3A0xe42ccce966098e5d!2sJKKN%20College%20of%20Arts%20and%20Science!5e1!3m2!1sen!2sin!4v1758384898966!5m2!1sen!2sin"
                        width="100%"
                        height="500"
                        style={{border: 0}}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">
                      </iframe>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* end: Contact Section */}

            
          </main>

          <Footer />
        </div>
      </div>
    </>
  );
}
