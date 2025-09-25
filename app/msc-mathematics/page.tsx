import Header from '../components/Header';
import Footer from '../components/Footer';
import OffcanvasMenu from '../components/OffcanvasMenu';
import Link from 'next/link';

export default function MScMathematics() {
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
                      <i className="fa-solid fa-award"></i> JKKN
                    </span>
                    <h1 className="banner-title title-anim">Master of Science in
                      <span> Mathematics.</span>
                    </h1>
                    <div className="banner-desc-area wow fadeInUp" data-wow-delay=".7s">
                      <Link className="banner-link" href="#">
                        <span><i className="fa-solid fa-arrow-right"></i></span>
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
                          <span><i className="fa-solid fa-plus"></i></span>
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
                        <i className="fa-solid fa-box"></i>Department of Mathematics
                      </span>
                      <h2 className="sec-title title-anim"> Mathematical <span>Education</span></h2>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="department-content text-center wow fadeInUp" data-wow-delay=".5s">
                      <p className="desc mb-4">
                        The Department of Mathematics was established in the year 1975, to offer undergraduate B.Sc. course in Mathematics. In the Self-financing wing M.Sc. Mathematics was started in 2002 and B.Sc. Mathematics in 2014.
                      </p>
                      <p className="desc mb-4">
                        The Department has produced centum results many times. The faculty members of the Department have been the Chairpersons and members of the Board of Studies in Periyar University. The Faculty members have also acted as members of the Inspection Committee for various Colleges.
                      </p>
                      <p className="desc mb-4">
                        Faculty members have published around 17 papers in Journals, Seminars and Conferences. The Department has received funds from UGC and ICHR for Minor Research Project worth Rs. 1,85,000/- and study grant worth Rs.20,000/-. Around 11 students have participated in Seminars and Conferences.
                      </p>
                      <p className="desc mb-5">
                        Every year we celebrate the great Mathematician Ramanujan's birthday to honor his contribution in Mathematics.
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
                        <p className="desc">Faculty members have published 17 papers and served as Chairpersons and members of Board of Studies in Periyar University.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="choose-box right-swipe">
                      <div className="choose-content text-center">
                        <div className="choose-icon">
                          <i className="fa-solid fa-award"></i>
                        </div>
                        <h4 className="title">Research & Recognition</h4>
                        <p className="desc">Received UGC and ICHR funds worth Rs. 2,05,000/- for research projects and study grants.</p>
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
