import Link from 'next/link';
import Header from '../components/Header';
import OffcanvasMenu from '../components/OffcanvasMenu';
import Footer from '../components/Footer';


export default function MScChemistry() {
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
                      <h1 className="tj-page-title">MSc Chemistry</h1>
                      <div className="tj-page-link">
                        <span><i className="fas fa-list-home"></i></span>
                        <span>
                          <Link href="/">Home</Link>
                        </span>
                        <span><i className="fas fa-list-arrow-right"></i></span>
                        <span>
                          <span>MSc Chemistry</span>
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
                      <span className="sub-title wow fadeInUp" data-wow-delay=".3s"><i className="fas fa-list-box"></i>Department Overview</span>
                      <div className="heading-wrap-content">
                        <div className="sec-heading">
                          <h2 className="sec-title title-anim">Department of <span>Chemistry</span></h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="about-content-area">
                      <div className="content-text wow fadeInUp" data-wow-delay=".3s">
                        <p className="desc">A Master of Science (MSc) in Chemistry is a postgraduate degree program that offers advanced study and research opportunities in the field of chemistry. This program is designed to provide students with a deep understanding of the fundamental principles and concepts of chemistry, as well as specialized knowledge in various sub-disciplines such as organic chemistry, inorganic chemistry, physical chemistry, analytical chemistry, and biochemistry.</p>
                        
                        <p className="desc">The MSc Chemistry course typically involves a combination of coursework, laboratory work, and research projects. The coursework component covers advanced topics in chemistry, including advanced organic synthesis, spectroscopy, quantum mechanics, thermodynamics, and chemical kinetics. Students are exposed to both theoretical and practical aspects of these subjects, gaining hands-on experience in conducting experiments, analyzing data, and interpreting results.</p>
                        
                        <p className="desc">The laboratory work is a crucial aspect of the MSc Chemistry program, allowing students to develop essential practical skills and techniques. In the laboratory, students learn how to design and execute experiments, handle chemicals and equipment safely, and analyze samples using various analytical techniques such as chromatography, spectroscopy, and electrochemical methods.</p>
                        
                        <p className="desc">Research plays a significant role in an MSc Chemistry program, and students are usually required to complete a research project or thesis under the guidance of a faculty advisor. This research project enables students to delve deeper into a specific area of interest within chemistry, contribute to the existing body of knowledge, and develop critical thinking, problem-solving, and scientific communication skills.</p>
                        
                        <p className="desc">Additionally, MSc Chemistry programs often offer elective courses that allow students to specialize further in their chosen area of interest. These electives might cover topics like medicinal chemistry, environmental chemistry, polymer chemistry, or computational chemistry, among others.</p>
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
                        <img data-speed=".8" src="/assets/images/img/Campus-Life.png" alt="MSc Chemistry Department" />
                      </div>
                      <div className="box-area style-2">
                        <div className="progress-box wow fadeInUp" data-wow-delay=".3s">
                          <h4 className="title">Program Highlights</h4>
                          <ul className="tj-progress-list">
                            <li>
                              <h6 className="tj-progress-title">Advanced Coursework</h6>
                              <div className="tj-progress">
                                <span className="tj-progress-percent">100%</span>
                                <div className="tj-progress-bar" data-percent="100">
                                </div>
                              </div>
                            </li>
                            <li>
                              <h6 className="tj-progress-title">Research Projects</h6>
                              <div className="tj-progress">
                                <span className="tj-progress-percent">95%</span>
                                <div className="tj-progress-bar" data-percent="95">
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
                        <span className="sub-title wow fadeInUp" data-wow-delay=".3s"><i className="fas fa-list-box"></i>Our Purpose</span>
                        <h2 className="sec-title title-anim">Creating Excellence in <span>Chemical Sciences</span></h2>
                      </div>
                    </div>
                    <div className="about-bottom-area">
                      <div className="mission-vision-box wow fadeInLeft" data-wow-delay=".5s">
                        <h4 className="title">Vision</h4>
                        <p className="desc">To advance scientific knowledge and innovation in chemical sciences through cutting-edge research and education.</p>
                      </div>
                      <div className="mission-vision-box wow fadeInRight" data-wow-delay=".5s">
                        <h4 className="title">Mission</h4>
                        <p className="desc">To equip students with advanced theoretical knowledge and practical skills in chemistry for scientific excellence.</p>
                      </div>
                    </div>
                    <br/>
                    <div className="about-content-area">
                      <div className="content-text wow fadeInUp" data-wow-delay=".6s">
                        <p className="desc">Upon completion of an MSc Chemistry program, graduates have various career options available to them. They can pursue employment opportunities in industries such as pharmaceuticals, chemicals, materials, energy, or environmental sectors.</p>
                        <p className="desc">Graduates can also choose to continue their education by pursuing a Ph.D. in Chemistry or related disciplines, leading to research or academic positions. Overall, an MSc Chemistry degree equips students with the knowledge and skills necessary to contribute to scientific advancements, innovation, and problem-solving in the field of chemistry.</p>
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
                      <span className="sub-title wow fadeInUp" data-wow-delay=".3s"><i className="fas fa-list-box"></i>Courses Offered</span>
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
                            <td style={{padding: '20px', fontSize: '16px'}}>M.Sc. Chemistry</td>
                            <td style={{padding: '20px', fontSize: '16px'}}>2 years</td>
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
                        <img src="/assets/images/testimonial/testimonial-img.webp" alt="Career Opportunities" />
                        <div className="sec-heading style-2">
                          <h2 className="sec-title title-anim">Career <span>Opportunities</span></h2>
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
                          <span className="rating-text">Career Opportunities Available</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 order-lg-1">
                    <div className="testimonial-wrapper wow fadeInUp" data-wow-delay=".5s">
                      <div className="content-text">
                        <h4 className="title" style={{marginBottom: '20px', color: '#1e8a8a'}}>Industry Opportunities</h4>
                        <p className="desc" style={{marginBottom: '15px'}}>Graduates can pursue employment opportunities in industries such as pharmaceuticals, chemicals, materials, energy, or environmental sectors. The program prepares students for diverse roles in research and development, quality control, and analytical chemistry.</p>
                        
                        <p className="desc" style={{marginBottom: '15px'}}>Career paths include positions as research scientists, analytical chemists, quality assurance specialists, and environmental consultants in both private and public sectors.</p>
                        
                        <h4 className="title" style={{marginBottom: '20px', marginTop: '30px', color: '#1e8a8a'}}>Further Education</h4>
                        <p className="desc">Graduates can continue their education by pursuing a Ph.D. in Chemistry or related disciplines, leading to research or academic positions. The program provides a strong foundation for advanced research and scientific innovation.</p>
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
                      <span className="sub-title wow fadeInUp" data-wow-delay=".3s"><i className="fas fa-list-box"></i>Academic Excellence</span>
                      <h2 className="sec-title title-anim">Program <span>Outcomes</span></h2>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="content-area wow fadeInLeft" data-wow-delay=".3s">
                      <h4 className="title" style={{color: '#1e8a8a', marginBottom: '20px'}}>CORE CHEMISTRY</h4>
                      <h5 style={{color: '#0c1e21', marginBottom: '15px'}}>Programme Specific Outcomes (PSOs)</h5>
                      <ul className="list-items" style={{marginBottom: '25px'}}>
                        <li><i className="fas fa-list"></i>Master advanced concepts in organic, inorganic, physical, analytical, and biochemistry.</li>
                        <li><i className="fas fa-list"></i>Develop expertise in advanced analytical techniques including chromatography, spectroscopy, and electrochemical methods.</li>
                        <li><i className="fas fa-list"></i>Apply theoretical knowledge to solve complex chemical problems and conduct independent research.</li>
                      </ul>
                      
                      <h5 style={{color: '#0c1e21', marginBottom: '15px'}}>Program Outcomes (POs)</h5>
                      <ul className="list-items">
                        <li><i className="fas fa-list"></i>Demonstrate comprehensive understanding of fundamental chemical principles and their applications.</li>
                        <li><i className="fas fa-list"></i>Develop critical thinking and problem-solving skills in chemical analysis and synthesis.</li>
                        <li><i className="fas fa-list"></i>Acquire practical laboratory skills and safety protocols for chemical research.</li>
                        <li><i className="fas fa-list"></i>Enhance scientific communication skills through research presentations and thesis writing.</li>
                        <li><i className="fas fa-list"></i>Prepare for advanced research or professional careers in chemical sciences.</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="content-area wow fadeInRight" data-wow-delay=".3s">
                      <h4 className="title" style={{color: '#1e8a8a', marginBottom: '20px'}}>SPECIALIZED AREAS</h4>
                      <h5 style={{color: '#0c1e21', marginBottom: '15px'}}>Elective Specializations</h5>
                      <ul className="list-items" style={{marginBottom: '25px'}}>
                        <li><i className="fas fa-list"></i>Medicinal Chemistry - Drug design and pharmaceutical applications.</li>
                        <li><i className="fas fa-list"></i>Environmental Chemistry - Pollution control and sustainable chemistry.</li>
                        <li><i className="fas fa-list"></i>Polymer Chemistry - Materials science and polymer synthesis.</li>
                      </ul>
                      
                      <h5 style={{color: '#0c1e21', marginBottom: '15px'}}>Research Components</h5>
                      <ul className="list-items">
                        <li><i className="fas fa-list"></i>Independent research project under faculty guidance.</li>
                        <li><i className="fas fa-list"></i>Thesis writing and scientific communication skills.</li>
                        <li><i className="fas fa-list"></i>Laboratory safety and chemical handling protocols.</li>
                        <li><i className="fas fa-list"></i>Data analysis and interpretation using modern analytical tools.</li>
                        <li><i className="fas fa-list"></i>Computational chemistry and molecular modeling techniques.</li>
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