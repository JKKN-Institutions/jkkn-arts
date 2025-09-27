import Link from 'next/link';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function VisionMission() {
  return (
    <>      <Header />

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main id="primary" className="site-main">
            <div className="top-space-15"></div>
            {/* Mobile top padding */}
            <div className="d-lg-none" style={{paddingTop: '60px'}}></div>

            {/* start: Banner Section */}
            <section className="tj-banner-section h6-hero section-gap-x">
              <div className="banner-area">
                <div className="banner-left-box">
                  <div className="banner-content">
                    <h1 className="banner-title title-anim">Our Vision & Mission: Shaping Tomorrow&apos;s Excellence Today.
                    </h1>
                    <div className="btn-area wow fadeInUp" data-wow-delay=".8s">
                      <Link className="tj-primary-btn" href="#">
                        <span className="btn-text"><span>Get Started</span></span>
                        <span className="btn-icon"><i className="fas fa-arrow-right-long"></i></span>
                      </Link>
                    </div>

                    
                    <div className="bg-shape-2">
                      <Image src="/assets/images/shape/pattern-3.svg" alt="" width={100} height={100} />
                    </div>
                  </div>
                </div>
                <div className="banner-right-box">
                  <div className="banner-img wow fadeInUp" data-wow-delay=".3s">
                    <Image data-speed=".8" src="/assets/images/img/Campus-Life.png" alt="" width={600} height={400} />
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
                        <i className="fas fa-box"></i>Our Core Values
                      </span>
                      <h2 className="sec-title title-anim">Vision, Mission & Values That Drive Us.</h2>
                    </div>
                  </div>
                </div>
                <div className="row row-gap-4 rightSwipeWrap">
                  <div className="col-lg-4">
                    <div className="choose-box h6-choose-box right-swipe">
                      <div className="choose-content">
                        <div className="choose-icon">
                          <i className="fas fa-lightbulb fa-sm"></i>
                        </div>
                        <h4 className="title">Our Vision</h4>
                        <p className="desc">To be a globally recognized institution of higher learning that cultivates innovative leaders, fosters academic excellence, and creates transformative solutions for society&apos;s challenges.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="choose-box h6-choose-box right-swipe">
                      <div className="choose-content">
                        <div className="choose-icon">
                          <i className="fas fa-award fa-sm"></i>
                        </div>
                        <h4 className="title">Our Mission</h4>
                        <p className="desc">To provide quality education that empowers students with knowledge, skills, and values necessary for personal growth, professional success, and meaningful contribution to society through innovative teaching, research, and community engagement.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="choose-box h6-choose-box right-swipe">
                      <div className="choose-content">
                        <div className="choose-icon">
                          <i className="fas fa-headset fa-sm"></i>
                        </div>
                        <h4 className="title">Our Values</h4>
                        <p className="desc">Excellence, Integrity, Innovation, Inclusivity, and Service. We are committed to fostering an environment where students, faculty, and staff can thrive while making positive impacts in their communities and beyond.</p>
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

