import Link from 'next/link';
import Header from '../components/Header';
import OffcanvasMenu from '../components/OffcanvasMenu';
import Footer from '../components/Footer';


export default function BSCAIDataScience() {
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
                      <h1 className="tj-page-title">BSC AI & DS</h1>
                      <div className="tj-page-link">
                        <span><i className="fas fa-home"></i></span>
                        <span>
                          <Link href="/">Home</Link>
                        </span>
                        <span><i className="fas fa-arrow-right"></i></span>
                        <span>
                          <span>BSC AI & DS</span>
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
                          <h2 className="sec-title title-anim">Department of <span>Artificial Intelligence & Data Science</span></h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="about-content-area">
                      <div className="content-text wow fadeInUp" data-wow-delay=".3s">
                        <p className="desc">B.Sc. Artificial Intelligence & Data Science programme was started in year 2023-2024. The department has experienced faculty members and lab facility with advanced computer systems for fostering innovation, technological understanding, and practical skills in AI & DS.</p>
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
                        <img data-speed=".8" src="/assets/images/img/Campus-Life.png" alt="BSC AI & DS Department" />
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
                        <h2 className="sec-title title-anim">Creating Excellence in <span>AI & Data Science</span></h2>
                      </div>
                    </div>
                    <div className="about-bottom-area">
                      <div className="mission-vision-box wow fadeInLeft" data-wow-delay=".5s">
                        <h4 className="title">Vision</h4>
                        <p className="desc">To revolutionize the future through education in Artificial Intelligence, shaping leaders capable of technological innovation and transformative contributions to society.</p>
                      </div>
                      <div className="mission-vision-box wow fadeInRight" data-wow-delay=".5s">
                        <h4 className="title">Mission</h4>
                        <p className="desc">To deliver a comprehensive, properly grounded Artificial Intelligence education that equips learners with advanced skills, promotes innovative research, and prepares them for global challenges and opportunities.</p>
                      </div>
                    </div>
                    <br/>
                    <div className="about-content-area">
                      <div className="content-text wow fadeInUp" data-wow-delay=".6s">
                        <p className="desc">The Department offers state-of-the-art facilities with advanced computer systems and experienced faculty members dedicated to fostering innovation and technological understanding in the field of Artificial Intelligence and Data Science.</p>
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
                            <td style={{padding: '20px', fontSize: '16px'}}>B.Sc. Artificial Intelligence & Data Science</td>
                            <td style={{padding: '20px', fontSize: '16px'}}>3 YEARS</td>
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
                      <h4 className="title" style={{color: '#1e8a8a', marginBottom: '20px'}}>B.SC. ARTIFICIAL INTELLIGENCE & DATA SCIENCE</h4>
                      <h5 style={{color: '#0c1e21', marginBottom: '15px'}}>Programme Specific Outcomes (PSOs)</h5>
                      <ul className="list-items" style={{marginBottom: '25px'}}>
                        <li><i className="fas fa-list"></i>Apply artificial intelligence and machine learning techniques to solve real-world problems.</li>
                        <li><i className="fas fa-list"></i>Analyze and interpret complex datasets using statistical and computational methods.</li>
                        <li><i className="fas fa-list"></i>Design and implement intelligent systems and data-driven solutions.</li>
                      </ul>
                      
                      <h5 style={{color: '#0c1e21', marginBottom: '15px'}}>Program Outcomes (POs)</h5>
                      <ul className="list-items">
                        <li><i className="fas fa-list"></i>Develop proficiency in programming languages and AI frameworks.</li>
                        <li><i className="fas fa-list"></i>Master data analysis, visualization, and interpretation skills.</li>
                        <li><i className="fas fa-list"></i>Apply ethical principles in AI development and data science practices.</li>
                        <li><i className="fas fa-list"></i>Demonstrate critical thinking and problem-solving abilities in technological contexts.</li>
                        <li><i className="fas fa-list"></i>Prepare for advanced studies and research in AI and data science fields.</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="content-area wow fadeInRight" data-wow-delay=".3s">
                      <h4 className="title" style={{color: '#1e8a8a', marginBottom: '20px'}}>CAREER OPPORTUNITIES</h4>
                      <h5 style={{color: '#0c1e21', marginBottom: '15px'}}>Industry Roles</h5>
                      <ul className="list-items" style={{marginBottom: '25px'}}>
                        <li><i className="fas fa-list"></i>Data Scientist and Machine Learning Engineer</li>
                        <li><i className="fas fa-list"></i>AI Research Analyst and Business Intelligence Specialist</li>
                        <li><i className="fas fa-list"></i>Software Developer with AI specialization</li>
                      </ul>
                      
                      <h5 style={{color: '#0c1e21', marginBottom: '15px'}}>Key Skills Developed</h5>
                      <ul className="list-items">
                        <li><i className="fas fa-list"></i>Programming in Python, R, and other AI/ML languages</li>
                        <li><i className="fas fa-list"></i>Machine Learning algorithms and deep learning frameworks</li>
                        <li><i className="fas fa-list"></i>Data visualization and statistical analysis</li>
                        <li><i className="fas fa-list"></i>Big data processing and cloud computing platforms</li>
                        <li><i className="fas fa-list"></i>Ethical AI development and responsible data science practices</li>
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