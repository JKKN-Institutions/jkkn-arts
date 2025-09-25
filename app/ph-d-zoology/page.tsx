import Header from '../components/Header';
import Footer from '../components/Footer';
import OffcanvasMenu from '../components/OffcanvasMenu';
import Link from 'next/link';

export default function PhDZoology() {
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
                    <h1 className="banner-title title-anim">Department of Zoology - Excellence in
                      <span>Animal Sciences</span>
                    </h1>
                    <div className="banner-desc-area wow fadeInUp" data-wow-delay=".7s">
                      <Link className="banner-link" href="#">
                        <span><i className="fas fa-arrow-right"></i></span>
                      </Link>
                      <div className="banner-desc">Advanced research and education in zoological sciences since 1976, producing exceptional scholars and researchers.</div>
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
                      <h6 className="customers-text wow fadeInUp" data-wow-delay=".5s">Students graduated from our department.</h6>
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
                        <i className="fas fa-box"></i>Department of Zoology
                      </span>
                      <h2 className="sec-title title-anim">Excellence in <span>Animal Sciences Research</span></h2>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="department-content text-center wow fadeInUp" data-wow-delay=".5s">
                      <p className="desc mb-5">
                        The Department of Zoology was established in 1976. Subsequently, M.Sc, M.Phil and Ph.D programmes were started in 1979, 1984 and 2001 respectively.
                        The faculty members of the Department have been the Chairpersons and members of the Board of Studies in Periyar University and Sri Sarada College for Women, Salem.
                        The Faculty members have also acted as members of the Inspection Committee for various Colleges.
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
                        <h4 className="title">Research Excellence</h4>
                        <p className="desc">The faculty members have published around 65 papers in various Journals, Book chapters and Magazines and 10 books. Few faculty members are members of the Editorial board of various Journals.</p>
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
                        <p className="desc">The Department has produced around 100 M.Phil scholars and 3 Ph.D scholars. Our students have brought credit to the Department and College by producing 39 University Ranks.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* end: Department History Section */}

            {/* start: Academic Programs Section */}
            <section className="tj-client-section client-section-gap-2 wow fadeInUp" data-wow-delay=".4s">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="sec-heading text-center">
                      <span className="sub-title wow fadeInUp" data-wow-delay=".3s"><i className="fas fa-box"></i>Academic Programs</span>
                      <h2 className="sec-title title-anim">Program <span>Timeline</span></h2>
                    </div>
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <div className="table-responsive wow fadeInUp" data-wow-delay=".5s">
                      <table className="table table-bordered" style={{backgroundColor: '#fff', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)'}}>
                        <thead style={{backgroundColor: '#1e8a8a', color: '#fff'}}>
                          <tr>
                            <th scope="col" style={{padding: '20px', fontSize: '18px', fontWeight: '600'}}>Program</th>
                            <th scope="col" style={{padding: '20px', fontSize: '18px', fontWeight: '600'}}>Year Started</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td style={{padding: '20px', fontSize: '16px'}}>Department Establishment</td>
                            <td style={{padding: '20px', fontSize: '16px'}}>1976</td>
                          </tr>
                          <tr>
                            <td style={{padding: '20px', fontSize: '16px'}}>M.Sc Zoology</td>
                            <td style={{padding: '20px', fontSize: '16px'}}>1979</td>
                          </tr>
                          <tr>
                            <td style={{padding: '20px', fontSize: '16px'}}>M.Phil Zoology</td>
                            <td style={{padding: '20px', fontSize: '16px'}}>1984</td>
                          </tr>
                          <tr>
                            <td style={{padding: '20px', fontSize: '16px'}}>Ph.D Zoology</td>
                            <td style={{padding: '20px', fontSize: '16px'}}>2001</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* end: Academic Programs Section */}

            {/* start: Research & Conference Section */}
            <section className="tj-about-section-2 section-gap section-gap-x">
              <div className="container">
                <div className="row">
                  <div className="col-xl-6 col-lg-6 order-lg-1 order-2">
                    <div className="about-img-area style-2 wow fadeInLeft" data-wow-delay=".3s">
                      <div className="about-img overflow-hidden">
                        <img data-speed=".8" src="/assets/images/img/Campus-Life.png" alt="Zoology Research" />
                      </div>
                      <div className="box-area style-2">
                        <div className="progress-box wow fadeInUp" data-wow-delay=".3s">
                          <h4 className="title">Research Statistics</h4>
                          <ul className="tj-progress-list">
                            <li>
                              <h6 className="tj-progress-title">Publications</h6>
                              <div className="tj-progress">
                                <span className="tj-progress-percent">65</span>
                                <div className="tj-progress-bar" data-percent="100">
                                </div>
                              </div>
                            </li>
                            <li>
                              <h6 className="tj-progress-title">Books Published</h6>
                              <div className="tj-progress">
                                <span className="tj-progress-percent">10</span>
                                <div className="tj-progress-bar" data-percent="100">
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 order-lg-2 order-1">
                    <div className="about-content-area">
                      <div className="sec-heading">
                        <span className="sub-title wow fadeInUp" data-wow-delay=".3s"><i className="fas fa-box"></i>Research Excellence</span>
                        <h2 className="sec-title title-anim">Advancing <span>Zoological Sciences</span></h2>
                      </div>
                    </div>
                    <div className="about-bottom-area">
                      <div className="mission-vision-box wow fadeInLeft" data-wow-delay=".5s">
                        <h4 className="title">National Conference</h4>
                        <p className="desc">To enhance the research activity, our Department has organised a National Level Conference to promote academic excellence and research collaboration.</p>
                      </div>
                      <div className="mission-vision-box wow fadeInRight" data-wow-delay=".5s">
                        <h4 className="title">Student Recognition</h4>
                        <p className="desc">Many of our students have participated in Seminars and Conferences and received awards for best paper presentations, showcasing their research capabilities.</p>
                      </div>
                    </div>
                    <br/>
                    <div className="about-content-area">
                      <div className="content-text wow fadeInUp" data-wow-delay=".6s">
                        <p className="desc">The Department of Zoology continues to maintain its reputation for academic excellence and research innovation. Our faculty members serve in key academic positions and contribute significantly to the advancement of zoological sciences through their research publications and editorial contributions.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-shape-1">
                <img src="/assets/images/shape/pattern-2.svg" alt="" />
              </div>
              <div className="bg-shape-2">
                <img src="/assets/images/shape/pattern-3.svg" alt="" />
              </div>
            </section>
            {/* end: Research & Conference Section */}

            {/* start: Achievements Section */}
            <section className="h8-funfact section-gap">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="sec-heading style-3 sec-heading-centered">
                      <span className="sub-title wow fadeInUp" data-wow-delay=".3s">
                        <i className="fas fa-box"></i>DEPARTMENT ACHIEVEMENTS
                      </span>
                      <h2 className="sec-title title-anim">Academic Excellence and Research Contributions.</h2>
                    </div>
                  </div>
                </div>
                <div className="row justify-content-between">
                  <div className="col-12 col-lg-6">
                    <div className="h8-funfact-banner wow fadeInLeft" data-wow-delay=".3s">
                      <div className="h8-funfact-banner-img">
                        <img src="/assets/images/funfact/h8-funfact-banner.webp" alt="" />
                      </div>
                      <div className="box-area">
                        <div className="call-box wow fadeInUp" data-wow-delay=".5s">
                          <h4 className="title">Faculty Leadership</h4>
                          <span className="call-icon"><i className="fas fa-award"></i></span>
                          <p className="achievement-text">Chairpersons and members of Board of Studies in Periyar University and Sri Sarada College for Women, Salem</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-6 pl-0">
                    <div className="h8-funfact-wrapper">
                      <div className="countup-item style-2 h8-funfact-item">
                        <div className="count-inner">
                          <div className="inline-content">
                            <span className="odometer countup-number" data-count="100"></span>
                            <span className="count-plus">+</span>
                          </div>
                          <div className="counter-desc">
                            <h4 className="counter-title">M.Phil Scholars</h4>
                            <p className="count-text">Produced by the Department of Zoology.</p>
                          </div>
                        </div>
                      </div>
                      <div className="countup-item style-2 h8-funfact-item">
                        <div className="count-inner">
                          <div className="inline-content">
                            <span className="odometer countup-number" data-count="3"></span>
                            <span className="count-plus">+</span>
                          </div>
                          <div className="counter-desc">
                            <h4 className="counter-title">Ph.D Scholars</h4>
                            <p className="count-text">Successfully completed doctoral research.</p>
                          </div>
                        </div>
                      </div>
                      <div className="countup-item style-2 h8-funfact-item">
                        <div className="count-inner">
                          <div className="inline-content">
                            <span className="odometer countup-number" data-count="39"></span>
                            <span className="count-plus">+</span>
                          </div>
                          <div className="counter-desc">
                            <h4 className="counter-title">University Ranks</h4>
                            <p className="count-text">Achieved by our outstanding students.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* end: Achievements Section */}
            
          </main>

          <Footer />
        </div>
      </div>
    </>
  );
}

