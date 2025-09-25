import Link from 'next/link';
import Header from '../components/Header';
import OffcanvasMenu from '../components/OffcanvasMenu';
import Footer from '../components/Footer';


export default function BAEnglish() {
  return (
    <>
      <OffcanvasMenu />
      <Header />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main id="primary" className="site-main">
            <div className="space-for-header"></div>
            <br/>
            {/* start: Breadcrumb Section */}
            <section className="tj-page-header section-gap-x" data-bg-image="/assets/images/bg/pheader-bg.webp">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="tj-page-header-content text-center">
                      <h1 className="tj-page-title">BA English</h1>
                      <div className="tj-page-link">
                        <span><i className="fas fa-home"></i></span>
                        <span>
                          <Link href="/">Home</Link>
                        </span>
                        <span><i className="fas fa-arrow-right"></i> </span>
                        <span>
                          <span>BA English</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="page-header-overlay" data-bg-image="/assets/images/shape/pheader-overlay.webp"></div>
            </section>
            {/* end: Breadcrumb Section */}

            {/* start: Department Overview Section */}
            <section id="overview" className="tj-choose-section section-gap">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="sec-heading-wrap">
                      <span className="sub-title wow fadeInUp" data-wow-delay=".3s"><i className="fas fa-box"></i>Department Overview</span>
                      <div className="heading-wrap-content">
                        <div className="sec-heading">
                          <h2 className="sec-title title-anim">Department of <span>English Literature</span></h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="about-content-area">
                      <div className="content-text wow fadeInUp" data-wow-delay=".3s">
                        <p className="desc">The Department of English was established in the year 1974 with just four faculty members. Branch XII English Literature was introduced in 1981 and the Department expanded.</p>
                        
                        <p className="desc">In the Self-financing wing M.A., English was introduced in 2002, B.A English in 2008 and M. Phil in 2016. We have been guiding the Ph.D. candidates since 2007.</p>
                        
                        <p className="desc">The faculty members have published around 86 papers in various journals, seminar volumes and have published 4 books. Two of our students have presented papers in International Conference.</p>
                        
                        <p className="desc">The faculty members of the Department have been the Chairpersons and members of the Board of studies in Periyar University. Few of our faculty are members of the Board of studies in other Autonomous Colleges like Vellalar College for Women, Erode, Sri Sarada College for Women, Salem and Vivekanandha College of Arts and Science for Women, Elayampalayam.</p>
                        
                        <p className="desc">Five members of our Department have acted as Resource Persons in many Seminars and Conferences and have also acted as members of the Inspection Committee for various Colleges.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* end: Department Overview Section */}

            {/* start: Vision Mission Section */}
            <section className="tj-about-section-2 section-gap section-gap-x">
              <div className="container">
                <div className="row">
                  <div className="col-xl-6 col-lg-6 order-lg-1 order-2">
                    <div className="about-img-area style-2 wow fadeInLeft" data-wow-delay=".3s">
                      <div className="about-img overflow-hidden">
                        <img data-speed=".8" src="/assets/images/img/Campus-Life.png" alt="BA English Department" />
                      </div>
                      <div className="box-area style-2">
                        <div className="progress-box wow fadeInUp" data-wow-delay=".3s">
                          <h4 className="title">Department Statistics</h4>
                          <ul className="tj-progress-list">
                            <li>
                              <h6 className="tj-progress-title">Research Papers Published</h6>
                              <div className="tj-progress">
                                <span className="tj-progress-percent">86</span>
                                <div className="tj-progress-bar" data-percent="90">
                                </div>
                              </div>
                            </li>
                            <li>
                              <h6 className="tj-progress-title">Ph.D. & M.Phil Scholars</h6>
                              <div className="tj-progress">
                                <span className="tj-progress-percent">41</span>
                                <div className="tj-progress-bar" data-percent="85">
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
                        <span className="sub-title wow fadeInUp" data-wow-delay=".3s"><i className="fas fa-box"></i>Our Purpose</span>
                        <h2 className="sec-title title-anim">Creating Excellence in <span>Literature & Language</span></h2>
                      </div>
                    </div>
                    <div className="about-bottom-area">
                      <div className="mission-vision-box wow fadeInLeft" data-wow-delay=".5s">
                        <h4 className="title">Vision</h4>
                        <p className="desc">To create a love for literature and language.</p>
                      </div>
                      <div className="mission-vision-box wow fadeInRight" data-wow-delay=".5s">
                        <h4 className="title">Mission</h4>
                        <p className="desc">To improve the communicative skills of the students.</p>
                      </div>
                    </div>
                    <br/>
                    <div className="about-content-area">
                      <div className="content-text wow fadeInUp" data-wow-delay=".6s">
                        <p className="desc">The Department has organized a National Level Seminar and a State Level Workshop. The Department has 3 Ph.D guides and 5 M.Phil guides.</p>
                        <p className="desc">The Department has produced 16 Ph.D. and 25 M.Phil Scholars. Five research scholars have submitted their Ph.D. thesis. At present nearly 18 Ph.D. and 8 M.Phil scholars are pursuing their research.</p>
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
            {/* end: Vision Mission Section */}

            {/* start: Courses Section */}
            <section className="tj-client-section client-section-gap-2 wow fadeInUp" data-wow-delay=".4s">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="sec-heading text-center">
                      <span className="sub-title wow fadeInUp" data-wow-delay=".3s"><i className="fas fa-box"></i>Courses Offered</span>
                      <h2 className="sec-title title-anim">Academic <span>Programs</span></h2>
                    </div>
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <div className="table-responsive wow fadeInUp" data-wow-delay=".5s">
                      <table className="table table-bordered" style={{backgroundColor: '#fff', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)'}}>
                        <thead style={{backgroundColor: '#1e8a8a', color: '#fff'}}>
                          <tr>
                            <th scope="col" style={{padding: '20px', fontSize: '18px', fontWeight: '600'}}>Name of the Degree</th>
                            <th scope="col" style={{padding: '20px', fontSize: '18px', fontWeight: '600'}}>Duration</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td style={{padding: '20px', fontSize: '16px'}}>B.A. English Literature</td>
                            <td style={{padding: '20px', fontSize: '16px'}}>3 years</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* end: Courses Section */}

            {/* start: Alumni Success Section */}
            <section className="tj-testimonial-section-2 section-bottom-gap">
              <div className="container">
                <div className="row row-gap-3">
                  <div className="col-lg-6 order-lg-2">
                    <div className="testimonial-img-area wow fadeInUp" data-wow-delay=".3s">
                      <div className="testimonial-img">
                        <img src="/assets/images/testimonial/testimonial-img.webp" alt="Alumni Success" />
                        <div className="sec-heading style-2">
                          <h2 className="sec-title title-anim">Alumni <span>Success Stories</span></h2>
                        </div>
                      </div>
                      <div className="box-area">
                        <div className="rating-box wow fadeInUp" data-wow-delay=".5s">
                          <h2 className="title">100+</h2>
                          <div className="rating-area">
                            <div className="star-ratings">
                              <div className="fill-ratings" style={{width: '100%'}}>
                                <span>â˜…â˜…â˜…â˜…â˜…</span>
                              </div>
                              <div className="empty-ratings">
                                <span>â˜…â˜…â˜…â˜…â˜…</span>
                              </div>
                            </div>
                          </div>
                          <span className="rating-text">Successful Alumni Placements</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 order-lg-1">
                    <div className="testimonial-wrapper wow fadeInUp" data-wow-delay=".5s">
                      <div className="content-text">
                        <h4 className="title" style={{marginBottom: '20px', color: '#1e8a8a'}}>Career Achievements</h4>
                        <p className="desc" style={{marginBottom: '15px'}}>Many students from our Department are office bearers in various associations. They have brought laurels to the Department by winning in various competitions organized by various associations of our College and in other inter collegiate competitions.</p>
                        
                        <p className="desc" style={{marginBottom: '15px'}}>Many of our alumni are placed in renowned positions as gazetted officers and most of our students are working in Government Schools and Colleges and in reputed companies.</p>
                        
                        <h4 className="title" style={{marginBottom: '20px', marginTop: '30px', color: '#1e8a8a'}}>Academic Excellence</h4>
                        <p className="desc">Our students consistently excel in academic pursuits, with many pursuing higher education and research opportunities both nationally and internationally.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* end: Alumni Success Section */}

            {/* start: Program Outcomes Section */}
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
                        <li><i className="fas fa-list"></i>Interpret ambiguous texts, complex texts and texts of aesthetic value.</li>
                        <li><i className="fas fa-list"></i>Understand the deliberate writing process with emphasis on inquiry, audience, research, and revision.</li>
                        <li><i className="fas fa-list"></i>Engage themselves in critical conversations and prepare, organize, and deliver their work to the public</li>
                      </ul>
                      
                      <h5 style={{color: '#0c1e21', marginBottom: '15px'}}>Program Outcomes (POs)</h5>
                      <ul className="list-items">
                        <li><i className="fas fa-list"></i>Equip with knowledge of English as a world language.</li>
                        <li><i className="fas fa-list"></i>Equip with analytical skills in linguistics, communications and literary criticism.</li>
                        <li><i className="fas fa-list"></i>Apply theoretical frame works to analyze media and other forms of public discourse.</li>
                        <li><i className="fas fa-list"></i>Develop Faculty of Skill.</li>
                        <li><i className="fas fa-list"></i>Increasing the in-depth Knowledge of the Core Areas of the Subject.</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="content-area wow fadeInRight" data-wow-delay=".3s">
                      <h4 className="title" style={{color: '#1e8a8a', marginBottom: '20px'}}>BACHELOR OF ENGLISH</h4>
                      <h5 style={{color: '#0c1e21', marginBottom: '15px'}}>Programme Specific Outcomes (PSOs)</h5>
                      <ul className="list-items" style={{marginBottom: '25px'}}>
                        <li><i className="fas fa-list"></i>Communicate accurately and precisely both in oral and written, in a variety of contexts and genres.</li>
                        <li><i className="fas fa-list"></i>Pursue advanced studies in English, public relations or communication fields and to do original research.</li>
                        <li><i className="fas fa-list"></i>Think critically and creatively, conceptualizing real world problems from different perspectives.</li>
                      </ul>
                      
                      <h5 style={{color: '#0c1e21', marginBottom: '15px'}}>Programme Outcomes (POs)</h5>
                      <ul className="list-items">
                        <li><i className="fas fa-list"></i>Demonstrate a thorough command of English and its linguistic structures.</li>
                        <li><i className="fas fa-list"></i>Apply theoretical frameworks to analyze media and other forms of public discourse.</li>
                        <li><i className="fas fa-list"></i>Work productively in diverse teams and solve problems collaboratively.</li>
                        <li><i className="fas fa-list"></i>Ethically gather, understand, evaluate and synthesize information from a variety of written and electronic sources.</li>
                        <li><i className="fas fa-list"></i>Develop intellectual flexibility, creativity and cultural literacy so as to engage in life-long learning.</li>
                      </ul>
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
            {/* end: Program Outcomes Section */}

           

            
          </main>

          <Footer />
        </div>
      </div>
    </>
  );
}