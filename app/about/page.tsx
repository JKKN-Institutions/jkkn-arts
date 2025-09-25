import Link from 'next/link';
import Header from '../components/Header';
import OffcanvasMenu from '../components/OffcanvasMenu';
import Footer from '../components/Footer';

export default function About() {
  return (
    <>
      <OffcanvasMenu />
      <Header />
      
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main id="primary" className="site-main">
            <div className="space-for-header"></div>
            
            {/* start: Breadcrumb Section */}
            <section className="tj-page-header section-gap-x" data-bg-image="/assets/images/bg/pheader-bg.webp">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="tj-page-header-content text-center">
                      <h1 className="tj-page-title">About Us</h1>
                      <div className="tj-page-link">
                        <span><i className="fas fa-home"></i></span>
                        <span>
                          <Link href="/">Home</Link>
                        </span>
                        <span><i className="fas fa-arrow-right"></i></span>
                        <span>About Us</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="page-header-overlay" data-bg-image="/assets/images/shape/pheader-overlay.webp"></div>
            </section>
            {/* end: Breadcrumb Section */}

            {/* start: Choose Section */}
            <section id="choose" className="tj-choose-section section-gap">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="sec-heading-wrap">
                      <span className="sub-title wow fadeInUp" data-wow-delay=".3s">
                        <i className="fas fa-box"></i>Choose the Best
                      </span>
                      <div className="heading-wrap-content">
                        <div className="sec-heading">
                          <h2 className="sec-title title-anim">Empowering Business with <span>Expertise.</span></h2>
                        </div>
                        <div className="btn-wrap wow fadeInUp" data-wow-delay=".6s">
                          <Link className="tj-primary-btn" href="#">
                            <span className="btn-text"><span>Request a Call</span></span>
                            <span className="btn-icon"><i className="fas fa-arrow-right-long"></i></span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row row-gap-4 rightSwipeWrap">
                  <div className="col-lg-4">
                    <div className="choose-box right-swipe">
                      <div className="choose-content">
                        <div className="choose-icon">
                          <i className="fas fa-innovative"></i>
                        </div>
                        <h4 className="title">Innovative Solutions</h4>
                        <p className="desc">We stay ahead of the curve, leveraging cutting-edge technologies and strategies to keep you competitive in a marketplace.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="choose-box right-swipe">
                      <div className="choose-content">
                        <div className="choose-icon">
                          <i className="fas fa-expertise"></i>
                        </div>
                        <h4 className="title">Proven Expertise</h4>
                        <p className="desc">Our team brings years of industry experience and specialized knowledge to deliver results that exceed expectations.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="choose-box right-swipe">
                      <div className="choose-content">
                        <div className="choose-icon">
                          <i className="fas fa-support"></i>
                        </div>
                        <h4 className="title">24/7 Support</h4>
                        <p className="desc">We provide round-the-clock support to ensure your business operations run smoothly without interruption.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* end: Choose Section */}
          </main>

          <Footer />
        </div>
      </div>
    </>
  );
}

