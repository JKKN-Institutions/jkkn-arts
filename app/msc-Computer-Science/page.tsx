

import Link from 'next/link';
import Image from 'next/image';
import PageLayout from '../components/PageLayout';

export default function MScComputerScience() {
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
                        <span><i className="fa-solid fa-arrow-right"></i></span>
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
                    <Image src="/assets/images/img/department-of-computer-science.png" alt="" width={400} height={300} style={{ width: "100%", height: "auto" }} data-speed="0.8"   />
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
                          <span><i className="fa-solid fa-plus"></i></span>
                          </li>
                        </ul>
                      </div>
                      <div className="customers-number wow fadeInUp" data-wow-delay=".5s">30K</div>
                      <h6 className="customers-text wow fadeInUp" data-wow-delay=".5s">Happy students.</h6>
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
                        <i className="fa-solid fa-box"></i>Department of Computer Science
                      </span>
                      <h2 className="sec-title title-anim">Excellence in Computer Science <span>Education</span></h2>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="department-content text-center wow fadeInUp" data-wow-delay=".5s">
                      <p className="desc mb-5">
                        The Department of Computer Science was started in 1987. M.Sc. Computer Science was started in 2002, B.C.A. in 2013 and M.Phil in 2015. Our faculty members have published nearly 60 papers. Many students have bagged University ranks. Our students have participated in various events organized in other Colleges and have brought fame to the Department and College. The Department has produced eminent professionals well placed both in India and abroad.
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
                        <h4 className="title">Academic Excellence</h4>
                        <p className="desc">Faculty members have published nearly 60 papers and students have achieved University ranks consistently.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="choose-box right-swipe">
                      <div className="choose-content text-center">
                        <div className="choose-icon">
                          <i className="fas fa-award"></i>
                        </div>
                        <h4 className="title">Student Achievements</h4>
                        <p className="desc">Students participate in various events and competitions, bringing fame to the Department and College.</p>
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



