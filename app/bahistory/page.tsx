

import Link from 'next/link';
import Image from 'next/image';
import PageLayout from '../components/PageLayout';

export default function BAHistoryPage() {
  return (
    <PageLayout>
            <div className="space-for-header"></div>
            {/* Mobile top padding */}
            <div className="d-lg-none" style={{paddingTop: '60px'}}></div>
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
                    <Image src="/assets/images/hero/h9-hero-bg.webp" alt="" width={400} height={300} style={{ width: "100%", height: "auto" }} />
                  </div>
                </div>
                <div className="banner-right-box">
                  <div className="banner-img">
                    <Image src="/assets/images/img/History.png" alt="" width={400} height={300} style={{ width: "100%", height: "auto" }} data-speed="0.8"   />
                  </div>
                  <div className="box-area">
                    <div className="customers-box">
                      <div className="customers">
                        <ul>
                          <li className="wow fadeInLeft" data-wow-delay=".5s">
                            <Image src="/assets/images/testimonial/client-1.webp" alt="" width={400} height={300} style={{ width: "100%", height: "auto" }} />
                          </li>
                          <li className="wow fadeInLeft" data-wow-delay=".6s">
                            <Image src="/assets/images/testimonial/client-2.webp" alt="" width={400} height={300} style={{ width: "100%", height: "auto" }} />
                          </li>
                          <li className="wow fadeInLeft" data-wow-delay=".7s">
                            <Image src="/assets/images/testimonial/client-3.webp" alt="" width={400} height={300} style={{ width: "100%", height: "auto" }} />
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

            
            
          </PageLayout>
  );
}



