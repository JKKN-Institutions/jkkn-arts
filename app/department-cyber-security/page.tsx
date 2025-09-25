import Link from 'next/link';
import Header from '../components/Header';
import OffcanvasMenu from '../components/OffcanvasMenu';
import Footer from '../components/Footer';


export default function DepartmentCyberSecurity() {
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
                      <h1 className="tj-page-title">Department of Cyber Security</h1>
                      <div className="tj-page-link">
                        <span><i className="fas fa-home"></i></span>
                        <span>
                          <Link href="/">Home</Link>
                        </span>
                        <span><i className="fas fa-arrow-right"></i></span>
                        <span>
                          <span>Department of Cyber Security</span>
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
                          <h2 className="sec-title title-anim">Department of <span>Cyber Security</span></h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="about-content-area">
                      <div className="content-text wow fadeInUp" data-wow-delay=".3s">
                        <p className="desc">The BSc Cyber Security course at JKKN College is a three-year undergraduate program, which includes six semesters. The course curriculum is designed to provide students with a strong foundation in the theory and practical aspects of cybersecurity.</p>
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
                        <img data-speed=".8" src="/assets/images/img/Campus-Life.png" alt="Department of Cyber Security" />
                      </div>
                      <div className="box-area style-2">
                        <div className="progress-box wow fadeInUp" data-wow-delay=".3s">
                          <h4 className="title">Department Statistics</h4>
                          <ul className="tj-progress-list">
                            <li>
                              <h6 className="tj-progress-title">Research Papers Published</h6>
                              <div className="tj-progress">
                                <span className="tj-progress-percent">50+</span>
                                <div className="tj-progress-bar" data-percent="85">
                                </div>
                              </div>
                            </li>
                            <li>
                              <h6 className="tj-progress-title">Industry Partnerships</h6>
                              <div className="tj-progress">
                                <span className="tj-progress-percent">25+</span>
                                <div className="tj-progress-bar" data-percent="90">
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
                        <h2 className="sec-title title-anim">Creating Excellence in <span>Cyber Security</span></h2>
                      </div>
                    </div>
                    <div className="about-bottom-area">
                      <div className="mission-vision-box wow fadeInLeft" data-wow-delay=".5s">
                        <h4 className="title">Vision</h4>
                        <p className="desc">To be a leading center of excellence in cybersecurity education, producing skilled professionals who can protect digital infrastructure and combat cyber threats effectively.</p>
                      </div>
                      <div className="mission-vision-box wow fadeInRight" data-wow-delay=".5s">
                        <h4 className="title">Mission</h4>
                        <p className="desc">To provide comprehensive cybersecurity education that combines theoretical knowledge with practical skills, preparing students for successful careers in the rapidly evolving field of cybersecurity.</p>
                      </div>
                    </div>
                    <br/>
                    <div className="about-content-area">
                      <div className="content-text wow fadeInUp" data-wow-delay=".6s">
                        <p className="desc">Overall, the BSc Cyber Security course at JKKN College is an excellent option for students who are interested in pursuing a career in the field of cybersecurity. The course is designed to provide students with a strong foundation in the theory and practical aspects of cybersecurity, which will help them to secure a job in this rapidly growing field.</p>
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
                            <td style={{padding: '20px', fontSize: '16px'}}>B.Sc. Cyber Security</td>
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

            {/* start: Core Subjects Section */}
            <section className="tj-team-section-3 section-gap section-gap-x">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="sec-heading text-center">
                      <span className="sub-title wow fadeInUp" data-wow-delay=".3s"><i className="fas fa-box"></i>Curriculum</span>
                      <h2 className="sec-title title-anim">Core <span>Subjects</span></h2>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="content-area wow fadeInLeft" data-wow-delay=".3s">
                      <h4 className="title" style={{color: '#1e8a8a', marginBottom: '20px'}}>CORE SUBJECTS</h4>
                      <ul className="list-items" style={{marginBottom: '25px'}}>
                        <li><i className="fas fa-list"></i>Computer Networks</li>
                        <li><i className="fas fa-list"></i>Cyber Threats and Risk Management</li>
                        <li><i className="fas fa-list"></i>Information Security</li>
                        <li><i className="fas fa-list"></i>Cyber Forensics</li>
                        <li><i className="fas fa-list"></i>Cryptography and Network Security</li>
                        <li><i className="fas fa-list"></i>Ethical Hacking and Penetration Testing</li>
                        <li><i className="fas fa-list"></i>Cyber Laws and Regulations</li>
                        <li><i className="fas fa-list"></i>Digital Forensics</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="content-area wow fadeInRight" data-wow-delay=".3s">
                      <h4 className="title" style={{color: '#1e8a8a', marginBottom: '20px'}}>ELECTIVE SUBJECTS</h4>
                      <ul className="list-items" style={{marginBottom: '25px'}}>
                        <li><i className="fas fa-list"></i>Artificial Intelligence</li>
                        <li><i className="fas fa-list"></i>Machine Learning</li>
                        <li><i className="fas fa-list"></i>Big Data Analytics</li>
                      </ul>
                      
                      <h5 style={{color: '#0c1e21', marginBottom: '15px', marginTop: '30px'}}>Program Benefits</h5>
                      <ul className="list-items">
                        <li><i className="fas fa-list"></i>Strong foundation in cybersecurity theory and practice</li>
                        <li><i className="fas fa-list"></i>Hands-on experience with security tools and technologies</li>
                        <li><i className="fas fa-list"></i>Industry-relevant curriculum designed by experts</li>
                        <li><i className="fas fa-list"></i>Preparation for various cybersecurity certifications</li>
                        <li><i className="fas fa-list"></i>Career opportunities in rapidly growing field</li>
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
            {/* end: Core Subjects Section */}
            <br/>
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
                          <h2 className="title">95%</h2>
                          <div className="rating-area">
                            <div className="star-ratings">
                              <div className="fill-ratings" style={{width: '95%'}}>
                                <span>â˜…â˜…â˜…â˜…â˜…</span>
                              </div>
                              <div className="empty-ratings">
                                <span>â˜…â˜…â˜…â˜…â˜…</span>
                              </div>
                            </div>
                          </div>
                          <span className="rating-text">Placement Success Rate</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 order-lg-1">
                    <div className="testimonial-wrapper wow fadeInUp" data-wow-delay=".5s">
                      <div className="content-text">
                        <h4 className="title" style={{marginBottom: '20px', color: '#1e8a8a'}}>Career Achievements</h4>
                        <p className="desc" style={{marginBottom: '15px'}}>Our graduates are successfully placed in leading organizations as cybersecurity analysts, information security specialists, and ethical hackers.</p>
                        
                        <p className="desc" style={{marginBottom: '15px'}}>Many alumni work with top IT companies, government agencies, and financial institutions, protecting critical digital infrastructure.</p>
                        
                        <h4 className="title" style={{marginBottom: '20px', marginTop: '30px', color: '#1e8a8a'}}>Industry Recognition</h4>
                        <p className="desc">Our program is recognized by industry leaders and provides students with the skills needed to excel in the rapidly growing cybersecurity field.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* end: Alumni Success Section */}

           

            
          </main>

          <Footer />
        </div>
      </div>
    </>
  );
}