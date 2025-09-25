import Header from '../components/Header';
import Footer from '../components/Footer';
import OffcanvasMenu from '../components/OffcanvasMenu';

export default function MAEnglishPage() {
  return (
    <>
      {/* start: magic cursor */}
      <div id="magic-cursor">
        <div id="ball"></div>
      </div>
      {/* end: magic cursor */}

      {/* start: Hamburger Menu */}
      <OffcanvasMenu />
      {/* end: Hamburger Menu */}

      {/* start: Header Area */}
      <Header />
      {/* end: Header Area */}

      

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main id="primary" className="site-main">
            <div className="top-space-15"></div>
            {/* start: Banner Section */}
            <section className="tj-banner-section-2 h10-hero section-gap-x zoom-on-scroll-wrapper">
              <div className="container">
                <div className="row flex-column-reverse flex-lg-row">
                  <div className="col-lg-4 col-xl-3">
                    <div className="h10-hero-award-wrapper">
                      <div className="h6-hero-history wow fadeInUp" data-wow-delay=".3s">
                        <div className="h6-hero-history-title">Est. 1974</div>
                        <p className="h6-hero-history-desc">Excellence in English Literature Education with Department established in 1974 and M.A. English program introduced in 2002.</p>
                      </div>
                      
                    </div>
                  </div>
                  <div className="col-lg-8 col-xl-9">
                    <div className="banner-content-2">
                      <h1 className="banner-title text-anim">Master of Arts in English <i className="fas fa-arrow-trend-up wow fadeInRight" data-wow-delay=".7s"></i>
                      </h1>
                      <div className="banner-desc-area wow fadeInUp" data-wow-delay=".7s">
                        <a className="tj-primary-btn" href="#">
                          <span className="btn-text"><span>Apply Now</span></span>
                          <span className="btn-icon"><i className="fas fa-arrow-right"></i></span>
                        </a>
                        <div className="banner-desc">Comprehensive postgraduate program providing advanced understanding of English language, literature, and critical analysis.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container-fluid gap-0">
                <div className="row">
                  <div className="col-12">
                    <div className="h10-hero-banner zoom-on-scroll">
                      <div className="h10-hero-banner-img h10-hero-banner-video">
                        <video autoPlay loop muted playsInline data-wf-ignore="true" data-object-fit="cover" poster="/assets/images/hero/h10-hero-banner.webp">
                          <source src="/assets/video/h10-banner-videio.webp" data-wf-ignore="true" />
                          <source src="/assets/video/h10-banner-videio.webp" data-wf-ignore="true" />
                        </video>
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
            {/* end: Banner Section */}

            {/* start: Service Section */}
            <section className="h5-service-section h10-service section-gap">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="sec-heading-wrap style-8">
                      <div className="heading-wrap-content">
                        <div className="sec-heading style-3">
                          <span className="sub-title wow fadeInUp" data-wow-delay=".3s"><i className="fas fa-box"></i> Core Subjects</span>
                          <h2 className="sec-title text-anim">Comprehensive English Literature Curriculum.</h2>
                        </div>
                        <div className="btn-area wow fadeInUp" data-wow-delay=".8s">
                          <a className="tj-primary-btn" href="/services">
                            <span className="btn-text"><span>Explore More</span></span>
                            <span className="btn-icon"><i className="fas fa-arrow-right"></i></span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row ">
                  <div className="col-12">
                    <div className="service-wrapper h10-service-wrapper wow fadeInUp" data-wow-delay=".4s">
                      <div className="swiper h10-service-slider">
                        <div className="swiper-wrapper">
                          <div className="swiper-slide">
                            <div className="service-item style-4 wow fadeInUp" data-wow-delay=".1s">
                              <h6 className="h10-service-sln">01.</h6>
                              
                              <div className="service-content">
                                <h4 className="title"><a href="/m-a-english">Literary Theory & Criticism</a></h4>
                                <p className="desc">Advanced study of literary theories, critical analysis, and interpretation of various literary texts and genres.
                                </p>
                                <a className="text-btn" href="/m-a-english">
                                  <span className="btn-text"><span>Learn More</span></span>
                                  <span className="btn-icon"><i className="fas fa-arrow-right"></i></span>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="service-item style-4 wow fadeInUp" data-wow-delay=".3s">
                              <h6 className="h10-service-sln">02.</h6>
                              
                              <div className="service-content">
                                <h4 className="title"><a href="/m-a-english">Linguistics & Language Studies</a></h4>
                                <p className="desc">Study of English language structure, phonetics, syntax, semantics, and sociolinguistics for advanced communication skills.
                                </p>
                                <a className="text-btn" href="/m-a-english">
                                  <span className="btn-text"><span>Learn More</span></span>
                                  <span className="btn-icon"><i className="fas fa-arrow-right"></i></span>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="service-item style-4 wow fadeInUp" data-wow-delay=".7s">
                              <h6 className="h10-service-sln">03.</h6>
                              
                              <div className="service-content">
                                <h4 className="title"><a href="/m-a-english">Cultural Studies & Media Analysis</a></h4>
                                <p className="desc">Analysis of cultural texts, media discourse, and interdisciplinary connections between literature and society.
                                </p>
                                <a className="text-btn" href="/m-a-english">
                                  <span className="btn-text"><span>Learn More</span></span>
                                  <span className="btn-icon"><i className="fas fa-arrow-right"></i></span>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="service-item style-4 wow fadeInUp" data-wow-delay=".5s">
                              <h6 className="h10-service-sln">04.</h6>
                              
                              <div className="service-content">
                                <h4 className="title"><a href="/m-a-english">Research Methodologies</a></h4>
                                <p className="desc">Advanced research techniques, academic writing, and methodologies for literary and linguistic research projects.
                                </p>
                                <a className="text-btn" href="/m-a-english">
                                  <span className="btn-text"><span>Learn More</span></span>
                                  <span className="btn-icon"><i className="fas fa-arrow-right-long"></i></span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-pagination-area"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* end: Service Section */}

            

            {/* start: About Section */}
            <section className="h10-about section-gap">
              <div className="container">
                <div className="row flex-column-reverse flex-md-row ">
                  <div className="col-12 col-lg-5 d-none d-md-block">
                    <div className="about-img-area h10-about-banner wow bounceInLeft" data-wow-delay=".3s">
                      <div className="about-img overflow-hidden">
                        <img data-speed=".8" src="/assets/images/img/department-of-computer-science.png" alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-7">
                    <div className="h10-about-content-wrapper">
                      <div className="sec-heading style-3 ">
                        <span className="sub-title wow fadeInUp" data-wow-delay=".3s"><i className="fas fa-box"></i> ABOUT M.A ENGLISH</span>
                        <h2 className="sec-title title-highlight wow fadeInUp" data-wow-delay=".3s">Comprehensive Postgraduate Program in English Literature.
                        </h2>
                      </div>
                      <div className="row">
                        <div className="col-12 col-md-6 col-lg-12">
                          <div className="h10-about-content">
                            <div className="customers-box style-3 h10-about-clients wow fadeInUp" data-wow-delay=".4s">
                              <div className="customers">
                                <ul>
                                  <li className="wow fadeInLeft" data-wow-delay=".2s"><img src="/assets/images/testimonial/client-1.webp" alt="" /></li>
                                  <li className="wow fadeInLeft" data-wow-delay=".3s"><img src="/assets/images/testimonial/client-2.webp" alt="" /></li>
                                  <li className="wow fadeInLeft" data-wow-delay=".4s"><img src="/assets/images/testimonial/client-3.webp" alt="" /></li>
                                  <li className="wow fadeInLeft" data-wow-delay=".5s"><span><i className="fas fa-plus"></i></span></li>
                                </ul>
                              </div>
                            </div>

                            <p className="desc wow fadeInUp" data-wow-delay=".4s">The Department of English was established in the year 1974 with just four faculty members. Branch XII English Literature was introduced in 1981 and the Department expanded. In the Self-financing wing M.A., English was introduced in 2002, B.A English in 2008 and M. Phil in 2016. We have been guiding the Ph.D. candidates since 2007.</p>
                            
                            <div className="mathematics-outcomes wow fadeInUp" data-wow-delay=".5s">
                              <h4 className="outcomes-title">Vision & Mission</h4>
                              <ul className="outcomes-list">
                                <li><strong>Vision:</strong> To create a love for literature and language.</li>
                                <li><strong>Mission:</strong> To improve the communicative skills of the students.</li>
                              </ul>
                            </div>
                            
                            <div className="mathematics-outcomes wow fadeInUp" data-wow-delay=".6s">
                              <h4 className="outcomes-title">Department Achievements</h4>
                              <ul className="outcomes-list">
                                <li>Faculty members have published around 86 papers in various journals, seminar volumes and have published 4 books.</li>
                                <li>Two of our students have presented papers in International Conference.</li>
                                <li>The Department has produced 16 Ph.D and 25 M.Phil Scholars.</li>
                                <li>Many of our alumni are placed in renowned positions as gazetted officers and most of our students are working in Government Schools and Colleges and in reputed companies.</li>
                              </ul>
                            </div>
                            
                            <div className="h9-about-funfact h10-about-funfact">
                              <div className="countup-item">
                                <div className="inline-content">
                                  <span className="odometer countup-number" data-count="3"></span>
                                  <span className="count-plus">-4</span>
                                </div>
                                <span className="count-text">Years comprehensive English literature program.</span>
                              </div>
                              <div className="countup-item">
                                <div className="inline-content">
                                  <span className="odometer countup-number" data-count="95"></span>
                                  <span className="count-plus">%</span>
                                </div>
                                <span className="count-text">Graduate employment rate in English literature and related fields.</span>
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

            {/* start: Curriculum Section */}
            <section className="h10-process section-gap section-gap-x tj-sticky-panel-3-container">
              <div className="container">
                <div className="row">
                  <div className="col-12 col-lg-5">
                    <div className="sec-heading style-3 tj-sticky-panel-3">
                      <span className="sub-title"><i className="fas fa-box"></i> CURRICULUM STRUCTURE</span>
                      <h2 className="sec-title text-anim">Comprehensive Learning Experience.</h2>
                      <div className="h10-process-more">
                        <a className="tj-primary-btn" href="#">
                          <span className="btn-text"><span>Apply Now</span></span>
                          <span className="btn-icon"><i className="fas fa-arrow-right"></i></span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-7 ">
                    <div className="h10-process-wrapper">
                      <div className="h10-process-item tj-sticky-panel-3">
                        <h6 className="h10-process-sln">Theory</h6>
                        <div className="h10-process-icon">
                          <i className="fas fa-chart-line"></i>
                        </div>
                        <div className="h10-process-content">
                          <h4 className="title">Theoretical Lectures</h4>
                          <p className="desc">Comprehensive theoretical lectures provide students with advanced knowledge covering literary theory, critical analysis, linguistics, cultural studies, and research methodologies in English literature.</p>
                        </div>
                      </div>
                      <div className="h10-process-item tj-sticky-panel-3">
                        <h6 className="h10-process-sln">Practical</h6>
                        <div className="h10-process-icon">
                          <i className="fas fa-globe"></i>
                        </div>
                        <div className="h10-process-content">
                          <h4 className="title">Practical Sessions</h4>
                          <p className="desc">Hands-on practical sessions allow students to develop effective communication skills, both written and oral, and explore interdisciplinary connections between literature and other disciplines.</p>
                        </div>
                      </div>
                      <div className="h10-process-item tj-sticky-panel-3">
                        <h6 className="h10-process-sln">Research</h6>
                        <div className="h10-process-icon">
                          <i className="fas fa-circle-check"></i>
                        </div>
                        <div className="h10-process-content">
                          <h4 className="title">Research Projects</h4>
                          <p className="desc">Research projects provide students with opportunities to apply their literary knowledge and critical thinking skills to analyze texts, contribute to academic discourse, and prepare for careers in academia, research, writing, journalism, publishing, and media.</p>
                        </div>
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
              <div className="bg-shape-3">
                <img src="/assets/images/shape/h7-testimonial-shape-blur.svg" alt="" />
              </div>
            </section>
            {/* end: Curriculum Section */}

            {/* start: Program Summary Section */}
            <section className="h10-blog section-gap">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="sec-heading-wrap ">
                      <div className="heading-wrap-content">
                        <div className="sec-heading style-3">
                          <span className="sub-title wow fadeInUp" data-wow-delay=".3s"><i className="fas fa-box"></i>Program Summary</span>
                          <h2 className="sec-title text-anim">Foundation for Success in English Literature.</h2>
                        </div>
                        <div className="btn-area wow fadeInUp" data-wow-delay=".8s">
                          <a className="tj-primary-btn" href="#">
                            <span className="btn-text"><span>Apply Now</span></span>
                            <span className="btn-icon"><i className="fas fa-arrow-right"></i></span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="blog-wrapper h8-blog-wrapper h10-blog-wrapper">
                      <div className="blog-item style-2 wow fadeInUp" data-wow-delay=".3s">
                        <div className="blog-content">
                          <div className="blog-meta">
                            <div className="blog-date-wrapper">
                              <span className="blog-author">Duration: 2 Years</span>
                            </div>
                            <span className="categories">Postgraduate Degree</span>
                          </div>
                          <div className="title-area">
                            <h3 className="title">Career Foundation</h3>
                            <p>Overall, an M.A. English program provides students with a comprehensive understanding of English language, literature, and critical analysis, equipping them with the necessary knowledge and skills to embark on successful careers in academia, research, writing, journalism, publishing, media, and other related fields, or for further advanced studies in English or related disciplines.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* end: Program Summary Section */}

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
                      <h4 className="title" style={{color: '#1e8a8a', marginBottom: '20px'}}>FOUNDATION ENGLISH</h4>
                      <h5 style={{color: '#0c1e21', marginBottom: '15px'}}>Programme Specific Outcomes (PSOs)</h5>
                      <ul className="list-items" style={{marginBottom: '25px'}}>
                        <li><i className="fas fa-check"></i>Interpret ambiguous texts, complex texts and texts of aesthetic value.</li>
                        <li><i className="fas fa-check"></i>Understand the deliberate writing process with emphasis on inquiry, audience, research, and revision.</li>
                        <li><i className="fas fa-check"></i>Engage themselves in critical conversations and prepare, organize, and deliver their work to the public</li>
                      </ul>
                      
                      <h5 style={{color: '#0c1e21', marginBottom: '15px'}}>Programme Outcomes (POs)</h5>
                      <ul className="list-items">
                        <li><i className="fas fa-check"></i>Equip with knowledge of English as a world language.</li>
                        <li><i className="fas fa-check"></i>Equip with analytical skills in linguistics, communications and literary criticism.</li>
                        <li><i className="fas fa-check"></i>Apply theoretical frame works to analyze media and other forms of public discourse.</li>
                        <li><i className="fas fa-check"></i>Develop Faculty of Skill.</li>
                        <li><i className="fas fa-check"></i>Increasing the in-depth Knowledge of the Core Areas of the Subject.</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="content-area wow fadeInRight" data-wow-delay=".3s">
                      <h4 className="title" style={{color: '#1e8a8a', marginBottom: '20px'}}>M.A ENGLISH</h4>
                      <h5 style={{color: '#0c1e21', marginBottom: '15px'}}>Programme Outcomes (POs)</h5>
                      <ul className="list-items">
                        <li><i className="fas fa-check"></i>Demonstrate a thorough command of English and its linguistics structures.</li>
                        <li><i className="fas fa-check"></i>Apply theoretical frame works to analyze media and other forms of public discourse.</li>
                        <li><i className="fas fa-check"></i>Work productively in diverse teams and solve problems collaboratively.</li>
                        <li><i className="fas fa-check"></i>Ethically gather, understand, evaluate and synthesize information from a variety of written and electronic sources.</li>
                        <li><i className="fas fa-check"></i>Develop intellectual flexibility, creativity and cultural literacy so as to engage in life-long learning.</li>
                      </ul>
                      
                      <div style={{marginTop: '30px', padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '10px'}}>
                        <h5 style={{color: '#0c1e21', marginBottom: '15px'}}>Program Overview</h5>
                        <p style={{fontSize: '14px', lineHeight: '1.6', margin: 0}}>JKKN College of Arts & Science offers a Master of Arts (M.A) program in English. This program is designed to provide students with a comprehensive understanding of English language, literature, and related fields of study. The curriculum includes courses on various genres of literature, literary theory, critical analysis, linguistics, cultural studies, and research methodologies.</p>
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
            {/* end: Programme Outcomes Section */}
          </main>

          {/* start: Footer Section */}
          <Footer />
          {/* end: Footer Section */}
        </div>
      </div>
    </>
  );
}
