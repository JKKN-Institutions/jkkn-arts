import Header from '../components/Header';
import Footer from '../components/Footer';
import OffcanvasMenu from '../components/OffcanvasMenu';
import Link from 'next/link';

export default function BAHistoryPage() {
  return (
    <>
      <OffcanvasMenu />

      <Header />

      

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main id="primary" className="site-main">
            <div className="space-for-header"></div>
            <br/>
            {/* start: Banner Section */}
            <section className="tj-banner-section section-gap-x">
              <div className="banner-area">
                <div className="banner-left-box">
                  <div className="banner-content">
                    <span className="sub-title wow fadeInDown" data-wow-delay=".2s">
                      <i className="fas fa-award"></i> JKKN
                    </span>
                    <h1 className="banner-title title-anim">Driving Excellence Through Evolution and
                      <span>Trust.</span>
                    </h1>
                    <div className="banner-desc-area wow fadeInUp" data-wow-delay=".7s">
                      <Link className="banner-link" href="#">
                        <span><i className="fas fa-arrow-right"></i></span>
                      </Link>
                      <div className="banner-desc">Represents growth, expansion, and modern business solution present growth, expansion.</div>
                    </div>
                  </div>
                  <div className="banner-shape">
                    <img src="/assets/images/hero/h9-hero-bg.webp" alt="" />
                  </div>
                </div>
                <div className="banner-right-box">
                  <div className="banner-img">
                    <img data-speed="0.8" src="/assets/images/hero/h9-hero-img.webp" alt="" />
                  </div>
                  <div className="box-area">
                    <div className="customers-box">
                      <div className="customers">
                        <ul>
                          <li className="wow fadeInLeft" data-wow-delay=".5s">
                            <img src="/assets/images/testimonial/client-1.webp" alt="" />
                          </li>
                          <li className="wow fadeInLeft" data-wow-delay=".6s">
                            <img src="/assets/images/testimonial/client-2.webp" alt="" />
                          </li>
                          <li className="wow fadeInLeft" data-wow-delay=".7s">
                            <img src="/assets/images/testimonial/client-3.webp" alt="" />
                          </li>
                          <li className="wow fadeInLeft" data-wow-delay=".8s">
                            <span><i className="fas fa-plus"></i></span>
                          </li>
                        </ul>
                      </div>
                      <div className="customers-number wow fadeInUp" data-wow-delay=".5s">30K</div>
                      <h6 className="customers-text wow fadeInUp" data-wow-delay=".5s">Happy customer we have world-wide.</h6>
                    </div>
                  </div>
                </div>
              </div>
              </section>
            {/* end: Banner Section */}

            {/* start: Department History Section */}
            <section id="department-history" className="tj-choose-section section-gap">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="sec-heading text-center">
                      <span className="sub-title wow fadeInUp" data-wow-delay=".3s">
                        <i className="fas fa-box"></i>Department of History
                      </span>
                      <h2 className="sec-title title-anim">Learning from the Past for a <span>Better Future</span></h2>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="department-content text-center wow fadeInUp" data-wow-delay=".5s">
                      <p className="desc mb-5">
                        The Department of History was established in 1975. M. A. (History) was started in 1984 and M. Phil., (History) in 1988. 
                        As most of the students hail from rural backgrounds the department strives to promote intellectual, moral, educational and cultural values.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row row-gap-4 rightSwipeWrap">
                  <div className="col-lg-6">
                    <div className="choose-box right-swipe">
                      <div className="choose-content text-center">
                        <div className="choose-icon">
                          <i className="fas fa-lightbulb"></i>
                        </div>
                        <h4 className="title">Vision</h4>
                        <p className="desc">To motivate the students to learn from the past for a better life in the present.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="choose-box right-swipe">
                      <div className="choose-content text-center">
                        <div className="choose-icon">
                          <i className="fas fa-award"></i>
                        </div>
                        <h4 className="title">Mission</h4>
                        <p className="desc">To promote liberal education, to understand the society, culture, art and architecture and to teach the human values.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* end: Department History Section */}

            
            
          </main>

          <Footer />
        </div>
      </div>
    </>
  );
}

