import Link from 'next/link';
import Header from '../../components/Header';
import OffcanvasMenu from '../../components/OffcanvasMenu';
import Footer from '../../components/Footer';

export default function VisionMission() {
  return (
    <>
      <OffcanvasMenu />
      <Header />

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main id="primary" className="site-main">
            <div className="top-space-15"></div>

            {/* start: Banner Section */}
            <section className="tj-banner-section h6-hero section-gap-x">
              <div className="banner-area">
                <div className="banner-left-box">
                  <div className="banner-content">
                    <h1 className="banner-title title-anim">Our Vision & Mission: Shaping Tomorrow's Excellence Today.
                    </h1>
                    <div className="btn-area wow fadeInUp" data-wow-delay=".8s">
                      <Link className="tj-primary-btn" href="#">
                        <span className="btn-text"><span>Get Started</span></span>
                        <span className="btn-icon"><i className="fas fa-arrow-right-long"></i></span>
                      </Link>
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

            {/* start: Choose Section */}
            <section id="choose" className="tj-choose-section h6-choose section-gap">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="sec-heading style-2 style-6 text-center">
                      <span className="sub-title wow fadeInUp" data-wow-delay=".3s">
                        <i className="fas fa-box"></i>IQAC Core Values
                      </span>
                      <h2 className="sec-title title-anim">Vision, Mission & Values That Drive Us.</h2>
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
                        <h4 className="title">Vision</h4>
                        <p className="desc">The IQAC envisions a culture of excellence, innovation, and continuous improvement that enhances the quality of teaching and learning, research, and community engagement, and that fosters a culture of academic and research integrity.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="choose-box h6-choose-box right-swipe">
                      <div className="choose-content">
                        <div className="choose-icon">
                          <i className="fas fa-award"></i>
                        </div>
                        <h4 className="title">Mission</h4>
                        <p className="desc">The mission is to facilitate the development and implementation of quality assurance mechanisms that promote excellence and continuous improvement in all aspects of institutional functioning. The IQAC works towards achieving this mission through:</p>
                        <ul className="desc" style={{marginTop: '15px', paddingLeft: '20px'}}>
                          <li>Developing and implementing policies, programs, and initiatives that promote quality enhancement and continuous improvement.</li>
                          <li>Creating a culture of academic and research integrity that values honesty, integrity, and ethical conduct.</li>
                          <li>Promoting interdisciplinary collaboration and innovative approaches to teaching and learning.</li>
                          <li>Developing partnerships with industries, businesses, and other organizations to enhance the employability and career readiness of students.</li>
                          <li>Engaging with the community and addressing societal issues and challenges through research, innovation, and community engagement.</li>
                          <li>Facilitating the preparation and submission of quality assurance reports to regulatory bodies such as NAAC, NIRF, ARIA, etc.</li>
                        </ul>
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

