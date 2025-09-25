import Link from 'next/link';
import Header from '../components/Header';
import OffcanvasMenu from '../components/OffcanvasMenu';
import Footer from '../components/Footer';


export default function PhDChemistry() {
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
                      <h1 className="tj-page-title">Ph.D Chemistry</h1>
                      <div className="tj-page-link">
                        <span><i className="fas fa-home"></i></span>
                        <span>
                          <Link href="/">Home</Link>
                        </span>
                        <span><i className="fas fa-arrow-right"></i></span>
                        <span>
                          <span>Ph.D Chemistry</span>
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
                        <p className="desc">A Ph.D. in Chemistry is a doctoral level program that focuses on advanced study and research in various fields of chemistry, such as organic chemistry, inorganic chemistry, physical chemistry, analytical chemistry, biochemistry, and more. Ph.D. programs in Chemistry are typically offered by universities or research institutions and are designed for individuals who have a strong background in chemistry and wish to pursue in-depth research in their chosen field.</p>
                        
                        <p className="desc">The duration of a Ph.D. program in Chemistry can vary depending on the institution and the specific research project, but it typically takes around 3-5 years to complete. The program usually involves coursework, research, and the completion of a doctoral thesis, which is a significant contribution to the field of chemistry.</p>
                        
                        <p className="desc">Ph.D. candidates are expected to conduct original research, publish their findings in peer-reviewed journals, and defend their thesis in front of a committee of experts. The program provides students with advanced knowledge and skills in their chosen area of chemistry specialization.</p>
                        
                        <p className="desc">Admission requirements for Ph.D. programs in Chemistry may vary among institutions, but generally, applicants are required to have a master's degree in Chemistry or a related field, a strong academic record, and relevant research experience. Additionally, applicants may need to submit letters of recommendation, a statement of purpose, and qualify in entrance exams or interviews.</p>
                        
                        <p className="desc">If you are interested in pursuing a Ph.D. in Chemistry, it is recommended to research and contact specific institutions directly to inquire about their program offerings, admission requirements, and application procedures.</p>
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
                        <img data-speed=".8" src="/assets/images/img/Campus-Life.png" alt="Ph.D Chemistry Department" />
                      </div>
                      <div className="box-area style-2">
                        <div className="progress-box wow fadeInUp" data-wow-delay=".3s">
                          <h4 className="title">Program Highlights</h4>
                          <ul className="tj-progress-list">
                            <li>
                              <h6 className="tj-progress-title">Research Excellence</h6>
                              <div className="tj-progress">
                                <span className="tj-progress-percent">100%</span>
                                <div className="tj-progress-bar" data-percent="100">
                                </div>
                              </div>
                            </li>
                            <li>
                              <h6 className="tj-progress-title">Advanced Chemistry</h6>
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
                        <span className="sub-title wow fadeInUp" data-wow-delay=".3s"><i className="fas fa-box"></i>Our Purpose</span>
                        <h2 className="sec-title title-anim">Creating Excellence in <span>Chemical Sciences</span></h2>
                      </div>
                    </div>
                    <div className="about-bottom-area">
                      <div className="mission-vision-box wow fadeInLeft" data-wow-delay=".5s">
                        <h4 className="title">Vision</h4>
                        <p className="desc">To advance understanding of fundamental chemical principles and theories governing matter and molecular interactions through cutting-edge research and education.</p>
                      </div>
                      <div className="mission-vision-box wow fadeInRight" data-wow-delay=".5s">
                        <h4 className="title">Mission</h4>
                        <p className="desc">To equip students with advanced theoretical knowledge and research skills in chemistry for scientific excellence and innovation.</p>
                      </div>
                    </div>
                    <br/>
                    <div className="about-content-area">
                      <div className="content-text wow fadeInUp" data-wow-delay=".6s">
                        <p className="desc">Ph.D. graduates in Chemistry can pursue careers in academia, research institutions, pharmaceutical companies, chemical industries, government laboratories, and environmental agencies. They contribute to scientific advancements, technological innovations, and the development of new materials and processes.</p>
                        <p className="desc">Overall, a Ph.D. in Chemistry program provides students with comprehensive knowledge of chemical principles, advanced research methodologies, and practical skills, enabling them to make significant contributions to scientific knowledge and technological innovations in various fields.</p>
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
                            <td style={{padding: '20px', fontSize: '16px'}}>Ph.D. Chemistry</td>
                            <td style={{padding: '20px', fontSize: '16px'}}>3-5 years</td>
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
                        <img src="/assets/images/testimonial/testimonial-img.webp" alt="Ph.D Chemistry Career Opportunities" />
                        <div className="sec-heading style-2">
                          <h2 className="sec-title title-anim">Career <span>Opportunities</span></h2>
                        </div>
                      </div>
                      <div className="box-area">
                        <div className="rating-box wow fadeInUp" data-wow-delay=".5s">
                          <h2 className="title">100+</h2>
                          
                          <span className="rating-text">Career Opportunities Available</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 order-lg-1">
                    <div className="testimonial-wrapper wow fadeInUp" data-wow-delay=".5s">
                      <div className="content-text">
                        <h4 className="title" style={{marginBottom: '20px', color: '#1e8a8a'}}>Industry Opportunities</h4>
                        <p className="desc" style={{marginBottom: '15px'}}>Ph.D. graduates in Chemistry can pursue employment opportunities in academia, research institutions, pharmaceutical companies, chemical industries, government laboratories, and environmental agencies. The program prepares students for diverse roles in research and development, scientific innovation, and analytical problem-solving.</p>
                        
                        <p className="desc" style={{marginBottom: '15px'}}>Career paths include positions as research chemists, senior scientists, academic professors, industry consultants, and technology specialists in both private and public sectors.</p>
                        
                        <h4 className="title" style={{marginBottom: '20px', marginTop: '30px', color: '#1e8a8a'}}>Research Excellence</h4>
                        <p className="desc">Ph.D. graduates contribute to scientific advancements, technological innovations, and the development of new materials and processes. The program provides a strong foundation for advanced research and scientific innovation in chemical sciences.</p>
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
                      <h4 className="title" style={{color: '#1e8a8a', marginBottom: '20px'}}>CORE CHEMISTRY</h4>
                      <h5 style={{color: '#0c1e21', marginBottom: '15px'}}>Programme Specific Outcomes (PSOs)</h5>
                      <ul className="list-items" style={{marginBottom: '25px'}}>
                        <li><i className="fas fa-check"></i>Master advanced concepts in organic chemistry, inorganic chemistry, and physical chemistry.</li>
                        <li><i className="fas fa-check"></i>Develop expertise in analytical chemistry, biochemistry, and research methodologies.</li>
                        <li><i className="fas fa-check"></i>Apply fundamental chemical principles governing molecular interactions and reactions.</li>
                      </ul>
                      
                      <h5 style={{color: '#0c1e21', marginBottom: '15px'}}>Program Outcomes (POs)</h5>
                      <ul className="list-items">
                        <li><i className="fas fa-check"></i>Demonstrate comprehensive understanding of fundamental chemical principles and their applications.</li>
                        <li><i className="fas fa-check"></i>Develop advanced research skills and analytical problem-solving capabilities in chemistry.</li>
                        <li><i className="fas fa-check"></i>Acquire theoretical knowledge in specialized areas of chemistry and research methodologies.</li>
                        <li><i className="fas fa-check"></i>Enhance scientific communication skills through thesis defense, publications, and research presentations.</li>
                        <li><i className="fas fa-check"></i>Prepare for advanced research or professional careers in chemical sciences and technology.</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="content-area wow fadeInRight" data-wow-delay=".3s">
                      <h4 className="title" style={{color: '#1e8a8a', marginBottom: '20px'}}>SPECIALIZED AREAS</h4>
                      <h5 style={{color: '#0c1e21', marginBottom: '15px'}}>Research Specializations</h5>
                      <ul className="list-items" style={{marginBottom: '25px'}}>
                        <li><i className="fas fa-check"></i>Organic Chemistry - Synthesis and characterization of organic compounds.</li>
                        <li><i className="fas fa-check"></i>Inorganic Chemistry - Study of inorganic compounds and materials.</li>
                        <li><i className="fas fa-check"></i>Physical Chemistry - Thermodynamics, kinetics, and quantum chemistry.</li>
                      </ul>
                      
                      <h5 style={{color: '#0c1e21', marginBottom: '15px'}}>Advanced Research Areas</h5>
                      <ul className="list-items">
                        <li><i className="fas fa-check"></i>Analytical Chemistry - Advanced analytical techniques and instrumentation.</li>
                        <li><i className="fas fa-check"></i>Biochemistry - Molecular biology and biochemical processes.</li>
                        <li><i className="fas fa-check"></i>Materials Chemistry - Development of new materials and applications.</li>
                        <li><i className="fas fa-check"></i>Environmental Chemistry - Environmental analysis and remediation.</li>
                        <li><i className="fas fa-check"></i>Original research, thesis writing, and peer-reviewed publications.</li>
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