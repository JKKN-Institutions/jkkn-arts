import Link from 'next/link';
import Image from 'next/image';
import PageLayout from '../components/PageLayout';


import { Noto_Sans_Tamil } from 'next/font/google';

const notoTamil = Noto_Sans_Tamil({ subsets: ['tamil'], weight: ['400','500','700'] });

export default function PhDTamil() {
  return (
    <PageLayout>
      <div className={notoTamil.className}>
        <div className="top-space-15"></div>
            {/* Mobile top padding */}
            <div className="d-lg-none" style={{paddingTop: '60px'}}></div>
            
            {/* start: Banner Section */}
            <section className="tj-banner-section-2 h10-hero section-gap-x zoom-on-scroll-wrapper pb-5">
              <div className="container">
                <div className="row flex-column-reverse flex-lg-row">
                  <div className="col-lg-4 col-xl-3">
                    <div className="h10-hero-award-wrapper">
                      <div className="h6-hero-history wow fadeInUp" data-wow-delay=".3s">
                        <div className="h6-hero-history-title">Est. 1987</div>
                        <p className="h6-hero-history-desc">Excellence in Tamil Language Education with Department established in 1987 and Ph.D program in Tamil Literature.</p>
                      </div>
                      
                    </div>
                  </div>
                  <div className="col-lg-8 col-xl-9">
                    <div className="banner-content-2">
                      <h1 className="banner-title text-anim">Department of Tamil <i className="fas fa-arrow-trend-up wow fadeInRight" data-wow-delay=".7s"></i>
                      </h1>
                      <div className="banner-desc-area wow fadeInUp" data-wow-delay=".7s">
                        <Link className="tj-primary-btn" href="#">
                          <span className="btn-text"><span>Apply Now</span></span>
                          <span className="btn-icon"><i className="fas fa-arrow-right"></i></span>
                        </Link>
                        <div className="banner-desc">Comprehensive programs in Tamil language and literature providing deep understanding of classical Tamil language and cultural heritage.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-shape-1">
                <Image src="/assets/images/shape/pattern-2.svg" alt="" width={400} height={300} style={{ width: "100%", height: "auto" }} />
              </div>
              <div className="bg-shape-2">
                <Image src="/assets/images/shape/pattern-3.svg" alt="" width={400} height={300} style={{ width: "100%", height: "auto" }} />
              </div>
            </section>
            {/* end: Banner Section */}

            

            {/* start: About Section */}
            <section className="tj-about-section h8-about section-gap">
              <div className="container">
                <div className="row row-gap-4">
                  <div className="col-12">
                    <div className="about-content-area-2 wow fadeInUp" data-wow-delay=".3s">
                      <div className="sec-heading style-3">
                        <div className="row">
                          <div className="col-12 col-lg-4">
                            <div className="h8-about-left">
                              <span className="sub-title wow fadeInUp" data-wow-delay=".3s">
                                <i className="fas fa-box"></i>About Department
                              </span>
                            </div>
                          </div>
                          <div className="col-12 col-lg-8">
                            <div className="h8-about-content-inner">
                              <h2 className="sec-title title-highlight">
                                Department of Tamil - Excellence in Tamil Language Education Since 1987
                              </h2>
                            </div>
                          </div>
                        </div>
                        <div className="row align-items-center">
                          <div className="col-12 col-lg-4">
                            <div className="h8-about-video">
                              <Image src="/assets/images/img/department-of-english.png" alt="" width={400} height={300} style={{ width: "100%", height: "auto" }} />
                            </div>
                          </div>
                          <div className="col-12 col-lg-8">
                            <div className="h8-about-item-wrapper">
                              <div className="h8-about-item h8-about-item-counter">
                                <div className="countup-item style-2">
                                  <div className="count-inner">
                                    <div className="inline-content">
                                      <span className="odometer countup-number" data-count="47"></span>
                                      <sup className="count-plus">+</sup>
                                    </div>
                                    <span className="count-text">Years of Tamil Language Excellence.</span>
                                  </div>
                                </div>
                              </div>
                              <div className="h8-about-item h8-about-item-desc">
                                <div className="h8-about-item-content">
                                  <p className="desc">
                                    The Department of Tamil was started in the year 1987. Two of our staff members were awarded the "Best Paper Presenter" at the National level Seminar. To enrich the language skill of the students, various competitions are conducted within the campus and they are also motivated to participate in the competitions conducted by other Colleges. Consecutively for the past three years, our students have won cash prize of Rs.13,000/- and trophies in various competitions organized by various organizations.
                                  </p>
                                  <div className="about-btn-area-2 wow fadeInUp" data-wow-delay="1s">
                                    <Link className="tj-primary-btn" href="#">
                                      <span className="btn-text"><span>Learn More</span></span>
                                      <span className="btn-icon"><i className="fas fa-arrow-right"></i></span>
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
            </section>
            {/* end: About Section */}

            {/* start: Vision Mission Section */}
            <section className="h8-service overflow-hidden section-gap">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="sec-heading style-3 sec-heading-centered">
                      <span className="sub-title wow fadeInUp" data-wow-delay=".3s">
                        <i className="fas fa-box"></i>Vision & Mission
                      </span>
                      <h2 className="sec-title title-anim">Our Educational Philosophy and Goals.</h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container gap-30">
                <div className="row">
                  <div className="col-12">
                    <div className="service-wrapper h8-service-wrapper wow bounceInLeft" data-wow-delay=".3s">
                      <div className="row">
                        <div className="col-12 col-md-6 col-xl-4">
                          <div className="service-item h8-service-item">
                            <div className="service-icon">
                              <i className="fas fa-lightbulb"></i>
                            </div>
                            <h4 className="title">VISION</h4>
                            <div className="service-content">
                              <p className="desc">
                                To educate students on the special qualities of classical Tamil language.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-4">
                          <div className="service-item h8-service-item">
                            <div className="service-icon">
                              <i className="fas fa-bullseye"></i>
                            </div>
                            <h4 className="title">MISSION</h4>
                            <div className="service-content">
                              <p className="desc">To teach the students to appreciate the nuances of Tamil language and Literature.</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-4">
                          <div className="service-item h8-service-item">
                            <div className="service-icon">
                              <i className="fas fa-graduation-cap"></i>
                            </div>
                            <h4 className="title">ACADEMIC PROGRAMS</h4>
                            <div className="service-content">
                              <p className="desc">Comprehensive programs designed to provide students with deep understanding of Tamil language, literature, and cultural heritage.</p>
                              <ul className="list-items">
                                <li><i className="fas fa-check"></i>B.A Tamil - 3 Years</li>
                                <li><i className="fas fa-check"></i>M.A Tamil - 2 Years</li>
                                <li><i className="fas fa-check"></i>Ph.D Tamil Literature</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="h8-service-more wow fadeInUp" data-wow-delay=".8s">
                      <Link className="tj-primary-btn" href="#">
                        <span className="btn-text"><span>Apply Now</span></span>
                        <span className="btn-icon"><i className="fas fa-arrow-right"></i></span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* end: Vision Mission Section */}

            

            {/* start: Faculty Section */}
            <section className="h8-team section-gap section-gap-x">
              <div className="container">
                <div className="row h8-team-wrapper gap-0">
                  <div className="col-lg-3 col-sm-6">
                    <div className="sec-heading style-3">
                      <span className="sub-title wow fadeInUp" data-wow-delay=".3s">MEET OUR FACULTY</span>
                      <h2 className="sec-title title-anim">Experienced Tamil Faculty Members.</h2>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 h8-team-item-wrapper">
                    <div className="team-item wow fadeInRightBig" data-wow-delay=".2s">
                      <div className="team-img">
                        <div className="team-img-inner">
                          <Image src="/assets/images/team/tamil/placeholder.png" alt="" width={400} height={300} style={{ width: "100%", height: "auto" }} />
                        </div>
                        <div className="social-links">
                          <ul>
                            <li><a href="mailto:reginamary.r@jkkn.ac.in" target="_blank"><i className="fa-solid fa-envelope"></i></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="team-content">
                        <h5 className="title">Dr. R. Reginamary</h5>
                        <span className="designation">Assistant Professor & Head</span>
                        <p className="qualification">M.A., M.Phil., Ph.D.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 h8-team-item-wrapper">
                    <div className="team-item wow fadeInRightBig" data-wow-delay=".3s">
                      <div className="team-img">
                        <div className="team-img-inner">
                          <Image src="/assets/images/team/tamil/placeholder.png" alt="" width={400} height={300} style={{ width: "100%", height: "auto" }} />
                        </div>
                        <div className="social-links">
                          <ul>
                            <li><a href="mailto:kumar.a@jkkn.ac.in" target="_blank"><i className="fa-solid fa-envelope"></i></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="team-content">
                        <h5 className="title">A. Kumar</h5>
                        <span className="designation">Assistant Professor</span>
                        <p className="qualification">M.A., B.Ed., M.Phil.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 h8-team-item-wrapper">
                    <div className="team-item wow fadeInRightBig" data-wow-delay=".4s">
                      <div className="team-img">
                        <div className="team-img-inner">
                          <Image src="/assets/images/team/tamil/placeholder.png" alt="" width={400} height={300} style={{ width: "100%", height: "auto" }} />
                        </div>
                        <div className="social-links">
                          <ul>
                            <li><a href="mailto:arivazhagan.s@jkkn.ac.in" target="_blank"><i className="fa-solid fa-envelope"></i></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="team-content">
                        <h5 className="title">S. Arivazhagan</h5>
                        <span className="designation">Assistant Professor</span>
                        <p className="qualification">M.A., B.Ed., M.Phil.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 h8-team-item-wrapper">
                    <div className="team-item wow fadeInRightBig" data-wow-delay=".5s">
                      <div className="team-img">
                        <div className="team-img-inner">
                          <Image src="/assets/images/team/tamil/placeholder.png" alt="" width={400} height={300} style={{ width: "100%", height: "auto" }} />
                        </div>
                        <div className="social-links">
                          <ul>
                            <li><a href="mailto:manjuladevi.r@jkkn.ac.in" target="_blank"><i className="fa-solid fa-envelope"></i></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="team-content">
                        <h5 className="title">R. Manjuladevi</h5>
                        <span className="designation">Assistant Professor</span>
                        <p className="qualification">M.A., M.Phil.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-shape-1">
                <Image src="/assets/images/shape/pattern-2.svg" alt="" width={400} height={300} style={{ width: "100%", height: "auto" }} />
              </div>
              <div className="bg-shape-2">
                <Image src="/assets/images/shape/pattern-3.svg" alt="" width={400} height={300} style={{ width: "100%", height: "auto" }} />
              </div>
            </section>
            {/* end: Faculty Section */}

            {/* start: Programme Outcomes Section */}
            <section className="tj-team-section-3 section-gap section-gap-x">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="sec-heading text-center">
                      <span className="sub-title wow fadeInUp" data-wow-delay=".3s"><i className="fas fa-box"></i>Academic Excellence</span>
                      <h2 className="sec-title title-anim">Program <span>Outcomes</span></h2>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="content-area wow fadeInLeft" data-wow-delay=".3s">
                      <h4 className="title" style={{color: '#1e8a8a', marginBottom: '20px'}}>à®¤à®¿à®Ÿà¯à®Ÿà®¤à¯à®¤à®¿à®©à¯ à®•à¯à®±à®¿à®ªà¯à®ªà®¿à®Ÿà¯à®Ÿ à®®à¯à®Ÿà®¿à®µà¯à®•à®³à¯ (PSOs)</h4>
                      <ul className="list-items" style={{marginBottom: '25px'}}>
                        <li><i className="fas fa-check"></i>à®¤à®®à®¿à®´à¯ à®®à¯Šà®´à®¿ à®®à®±à¯à®±à¯à®®à¯ à®‡à®²à®•à¯à®•à®¿à®¯à®¤à¯à®¤à®¿à®©à¯ à®•à¯‹à®Ÿà¯à®ªà®¾à®Ÿà¯à®•à®³à¯, à®µà®°à®²à®¾à®±à¯, à®šà®®à®•à®¾à®² à®†à®¯à¯à®µà¯à®•à®³à®¿à®²à¯ à®†à®´à¯à®¨à¯à®¤ à®…à®±à®¿à®µà¯.</li>
                        <li><i className="fas fa-check"></i>à®®à¯Šà®´à®¿à®¯à®¿à®¯à®²à¯, à®‰à®°à¯ˆà®¨à®Ÿà¯ˆ/à®ªà®¾à®Ÿà®²à¯ à®µà®¿à®®à®°à¯à®šà®©à®®à¯, à®†à®¯à¯à®µà¯à®®à¯à®±à¯ˆ à®†à®•à®¿à®¯à®µà®±à¯à®±à®¿à®²à¯ à®¨à®Ÿà¯ˆà®®à¯à®±à¯ˆ à®¤à®¿à®±à®©à¯.</li>
                        <li><i className="fas fa-check"></i>à®†à®°à®¾à®¯à¯à®šà¯à®šà®¿ à®®à¯à®©à¯à®µà¯ˆà®ªà¯à®ªà¯à®•à®³à¯ à®¤à®¯à®¾à®°à®¿à®¤à¯à®¤à®²à¯, à®¤à®°à®µà¯à®šà¯ à®šà¯‡à®•à®°à®¿à®ªà¯à®ªà¯, à®…à®•à®¾à®Ÿà®®à®¿à®•à¯ à®Žà®´à¯à®¤à¯à®¤à®²à¯ à®¤à®¿à®±à®©à¯.</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="content-area wow fadeInRight" data-wow-delay=".3s">
                      <h4 className="title" style={{color: '#1e8a8a', marginBottom: '20px'}}>à®¤à®¿à®Ÿà¯à®Ÿ à®®à¯à®Ÿà®¿à®µà¯à®•à®³à¯ (POs)</h4>
                      <ul className="list-items">
                        <li><i className="fas fa-check"></i>à®¤à®®à®¿à®´à¯ à®‡à®²à®•à¯à®•à®¿à®¯à®®à¯, à®®à¯Šà®´à®¿à®¯à®¿à®¯à®²à¯ à®¤à¯à®±à¯ˆà®•à®³à®¿à®²à¯ à®®à¯à®©à¯à®©à¯‡à®±à¯à®±à®®à®¾à®© à®…à®±à®¿à®µà¯ à®®à®±à¯à®±à¯à®®à¯ à®¤à®¿à®±à®©à¯.</li>
                        <li><i className="fas fa-check"></i>à®®à¯‚à®²à®ªà¯à®ªà®¤à®¿à®ªà¯à®ªà¯à®•à®³à¯, à®®à¯€à®³à¯à®ªà®¤à®¿à®ªà¯à®ªà¯à®•à®³à¯, à®Šà®Ÿà®• à®‰à®°à¯ˆà®•à®³à¯ à®†à®•à®¿à®¯à®µà®±à¯à®±à®¿à®©à¯ à®µà®¿à®®à®°à¯à®šà®©à®ªà¯ à®ªà®•à¯à®ªà¯à®ªà®¾à®¯à¯à®µà¯.</li>
                        <li><i className="fas fa-check"></i>à®¤à¯Šà®´à®¿à®²à¯à®®à¯à®±à¯ˆ à®’à®´à¯à®•à¯à®•à®®à¯, à®•à¯à®´à¯à®ªà¯à®ªà®£à®¿, à®¤à¯Šà®Ÿà®°à¯à®ªà¯à®¤à¯à®¤à®¿à®±à®©à¯ à®†à®•à®¿à®¯à®µà®±à¯à®±à®¿à®²à¯ à®¨à®¿à®ªà¯à®£à®¤à¯à®¤à¯à®µà®®à¯.</li>
                        <li><i className="fas fa-check"></i>à®¤à®•à®µà®²à¯ à®šà¯‡à®•à®°à®¿à®ªà¯à®ªà¯/à®®à¯à®•à®¾à®®à¯ˆà®ªà¯à®ªà¯ à®®à®±à¯à®±à¯à®®à¯ à®®à¯‡à®±à¯à®•à¯‹à®³à¯à®•à®¾à®Ÿà¯à®Ÿà®²à¯ à®¨à®Ÿà¯ˆà®®à¯à®±à¯ˆà®•à®³à¯ à®®à¯€à®¤à¯ à®ªà®¿à®´à¯ˆà®¯à®±à¯à®± à®ªà®¿à®©à¯â€‹à®ªà®±à¯à®±à®²à¯.</li>
                        <li><i className="fas fa-check"></i>à®†à®¯à¯à®µà¯, à®®à¯Šà®´à®¿à®ªà¯†à®¯à®°à¯à®ªà¯à®ªà¯, à®ªà®¤à®¿à®ªà¯à®ªà®¿à®¯à®²à¯, à®Šà®Ÿà®•à®®à¯ à®ªà¯‹à®©à¯à®± à®¤à¯à®±à¯ˆà®•à®³à®¿à®²à¯ à®¤à¯Šà®´à®¿à®²à¯ à®¤à®¯à®¾à®°à¯à®šà¯à®šà®¿.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-shape-1">
                <Image src="/assets/images/shape/pattern-2.svg" alt="" width={400} height={300} style={{ width: "100%", height: "auto" }} />
              </div>
              <div className="bg-shape-2">
                <Image src="/assets/images/shape/pattern-3.svg" alt="" width={400} height={300} style={{ width: "100%", height: "auto" }} />
              </div>
            </section>
            {/* end: Programme Outcomes Section */}

            {/* start: Achievements Details Section */}
            <section className="h8-funfact section-gap">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="sec-heading style-3 sec-heading-centered">
                      <span className="sub-title wow fadeInUp" data-wow-delay=".3s">
                        <i className="fas fa-box"></i>DETAILED ACHIEVEMENTS
                      </span>
                      <h2 className="sec-title title-anim">Faculty and Student Achievements in Tamil Studies.</h2>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="achievements-content wow fadeInUp" data-wow-delay=".5s">
                      <div className="achievement-item" style={{marginBottom: '20px', padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '10px'}}>
                        <h5 style={{color: '#1e8a8a', marginBottom: '10px'}}>Research Grants</h5>
                        <p style={{margin: 0}}>Dr. K. Essaki received grants for Minor Research projects from University Grants Commission Rs. 2,00,000/- during 2015-2017.</p>
                      </div>
                      <div className="achievement-item" style={{marginBottom: '20px', padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '10px'}}>
                        <h5 style={{color: '#1e8a8a', marginBottom: '10px'}}>Student Competition Awards</h5>
                        <p style={{margin: 0}}>M. Gomathi of II B.Sc Mathematics won the second prize and a shield, in the Oratorical Competition conducted by Ulaga Thirukural Peravai, Madurai on 04.04.2015.</p>
                      </div>
                      <div className="achievement-item" style={{marginBottom: '20px', padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '10px'}}>
                        <h5 style={{color: '#1e8a8a', marginBottom: '10px'}}>Best Paper Presentation</h5>
                        <p style={{margin: 0}}>Dr. K.Essaki received the Best Paper Presentation Award at the International Seminar conducted by Dr.Zakir Hussian College, Illayankudi on 15.10.2015.</p>
                      </div>
                      <div className="achievement-item" style={{marginBottom: '20px', padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '10px'}}>
                        <h5 style={{color: '#1e8a8a', marginBottom: '10px'}}>Cash Prize Awards</h5>
                        <p style={{margin: 0}}>J.Sandhiya of II B.Sc Mathematics won the third prize and a cash award of Rs.1000/- for Oratorical Competition conducted by Vidiyal Kalai Elakkiya Mandram, Madurai on 13.07.2016.</p>
                      </div>
                      <div className="achievement-item" style={{marginBottom: '20px', padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '10px'}}>
                        <h5 style={{color: '#1e8a8a', marginBottom: '10px'}}>High Value Competition Win</h5>
                        <p style={{margin: 0}}>S. Anandhakumar of II. M.Sc Chemistry won the second prize of Rs.7000/- in Oratorical Competition conducted by Tamil Valarchi Kazhagam, Namakkal on 20.12.2016</p>
                      </div>
                      <div className="achievement-item" style={{marginBottom: '20px', padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '10px'}}>
                        <h5 style={{color: '#1e8a8a', marginBottom: '10px'}}>National Seminar Recognition</h5>
                        <p style={{margin: 0}}>Dr. K.Essaki received the Best Paper Presentation Award at the National Seminar conducted by KSR Women&apos;s Arts and Science College on 12.12.2017</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* end: Achievements Details Section */}
      </div>
    </PageLayout>
  );
}



