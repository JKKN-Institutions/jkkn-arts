

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
                      <i className="fa-solid fa-award"></i> JKKN
                    </span>
                    <h1 className="banner-title title-anim">Driving Excellence Through Evolution and
                      <span>Trust.</span>
                    </h1>
                    <div className="banner-desc-area wow fadeInUp" data-wow-delay=".7s">
                      <Link className="banner-link" href="#">
                        <span><i className="fa-solid fa-arrow-right-long"></i></span>
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
                    <Image src="/assets/images/img/department-bsc-visual-communication.png" alt="" width={400} height={300} style={{ width: "100%", height: "auto" }} data-speed="0.8"   />
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
                      <h6 className="customers-text wow fadeInUp" data-wow-delay=".5s">Happy Students</h6>
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
                        <i className="fas fa-box"></i>Department of Visual Communication
                      </span>
                      <h2 className="sec-title title-anim">Creative Communication for the <span>Digital Age</span></h2>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="department-content text-center wow fadeInUp" data-wow-delay=".5s">
                      <p className="desc mb-5">
                        BSc Visual Communication programs typically cover subjects such as communication theory, visual aesthetics, digital media, visual storytelling, media production techniques, and design principles. Students may also learn about the historical and cultural context of visual communication, as well as develop skills in visual storytelling, image editing, video editing, animation, and other relevant software tools. The program may also include practical training, internships, and projects to provide hands-on experience and help students build a portfolio.
                      </p>
                      <p className="desc mb-5">
                        It's important to note that course offerings, curriculum, and admission requirements can vary from one institution to another. Therefore, it's recommended to check the official website of JKKN College of Arts & Science or contact their admissions office directly for the most up-to-date and accurate information about their BSc Visual Communication program, including eligibility criteria, fees, and application procedures.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row row-gap-4 rightSwipeWrap">
                  <div className="col-lg-6">
                    <div className="choose-box right-swipe">
                      <div className="choose-content text-center">
                        <div className="choose-icon">
                          <i className="fa-solid fa-lightbulb"></i>
                        </div>
                        <h4 className="title">Program Focus</h4>
                        <p className="desc">Comprehensive coverage of communication theory, visual aesthetics, digital media, and design principles.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="choose-box right-swipe">
                      <div className="choose-content text-center">
                        <div className="choose-icon">
                          <i className="fas fa-award"></i>
                        </div>
                        <h4 className="title">Practical Training</h4>
                        <p className="desc">Hands-on experience through internships, projects, and portfolio development in visual storytelling and media production.</p>
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



