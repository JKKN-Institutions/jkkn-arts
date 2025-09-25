import Header from '../components/Header';
import Footer from '../components/Footer';
import OffcanvasMenu from '../components/OffcanvasMenu';
import Link from 'next/link';

export default function MScComputerScienceDataAnalytics() {
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
                    <h1 className="banner-title title-anim">Master of Science 
                      <span>(MSc)</span>
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
                        <i className="fa-solid fa-box"></i>M.Sc Computer Science Data Analytics
                      </span>
                      <h2 className="sec-title title-anim">Advanced Data Analytics for the <span>Digital Future</span></h2>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="department-content text-center wow fadeInUp" data-wow-delay=".5s">
                      <p className="desc mb-5">
                        JKKN College of Arts & Science offers a Master of Science (MSc) program in Computer Science with a specialization in Data Analytics. This program is designed for students who are interested in advanced studies in computer science with a specific focus on data analytics. Students will gain a deep understanding of the principles, theories, and technologies used in the field of data analytics, including data mining, data visualization, machine learning, and statistical analysis.
                      </p>
                      <p className="desc mb-5">
                        The curriculum is comprehensive and covers both theoretical and practical aspects of data analytics, providing students with the knowledge and skills necessary to analyze large datasets, extract insights, and make data-driven decisions. With state-of-the-art facilities, experienced faculty, and industry-relevant curriculum, JKKN College of Arts & Science prepares students for successful careers in the field of data analytics, equipping them with the expertise to thrive in the fast-growing field of data science and analytics.
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
                        <h4 className="title">Comprehensive Curriculum</h4>
                        <p className="desc">Covers data mining, data visualization, machine learning, and statistical analysis with both theoretical and practical aspects.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="choose-box right-swipe">
                      <div className="choose-content text-center">
                        <div className="choose-icon">
                          <i className="fa-solid fa-award"></i>
                        </div>
                        <h4 className="title">Industry-Ready Skills</h4>
                        <p className="desc">State-of-the-art facilities and experienced faculty prepare students for successful careers in data science and analytics.</p>
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
