import Link from 'next/link';
import Header from '../components/Header';
import OffcanvasMenu from '../components/OffcanvasMenu';
import Footer from '../components/Footer';


export default function MScPhysics() {
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
                      <h1 className="tj-page-title">MSc Physics</h1>
                      <div className="tj-page-link">
                        <span><i className="fas fa-home"></i></span>
                        <span>
                          <Link href="/">Home</Link>
                        </span>
                        <span><i className="fas fa-arrow-right"></i></span>
                        <span>
                          <span>MSc Physics</span>
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
                          <h2 className="sec-title title-anim">Department of <span>Physics</span></h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="about-content-area">
                      <div className="content-text wow fadeInUp" data-wow-delay=".3s">
                        <p className="desc">A Master of Science (MSc) in Physics is a postgraduate program that provides an in-depth understanding of the fundamental principles and theories governing the physical world. This course is designed to cater to individuals who have a strong foundation in physics and wish to specialize in a specific area or pursue further research in the field.</p>
                        
                        <p className="desc">The curriculum of an MSc Physics program typically includes a combination of core and elective courses. These courses aim to develop a deep conceptual understanding of the fundamental laws and principles that govern the behavior of matter and energy.</p>
                        
                        <p className="desc">In addition to the core courses, students have the opportunity to choose elective courses based on their interests and career goals. These elective courses can cover a wide range of specialized topics such as astrophysics, particle physics, condensed matter physics, nuclear physics, quantum field theory, optics, or computational physics.</p>
                        
                        <p className="desc">Throughout the program, students are expected to engage in rigorous problem-solving, mathematical modeling, and critical thinking. They may also be required to participate in seminars, workshops, and discussions to enhance their understanding of current research and developments in physics.</p>
                        
                        <p className="desc">Upon successful completion of an MSc Physics program, graduates can pursue various career paths. Many graduates choose to continue their studies by pursuing a Ph.D. in Physics or a related field, which can lead to research and academic positions in universities, research institutions, or industry.</p>
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
                        <img data-speed=".8" src="/assets/images/img/Campus-Life.png" alt="MSc Physics Department" />
                      </div>
                      <div className="box-area style-2">
                        <div className="progress-box wow fadeInUp" data-wow-delay=".3s">
                          <h4 className="title">Program Highlights</h4>
                          <ul className="tj-progress-list">
                            <li>
                              <h6 className="tj-progress-title">Theoretical Physics</h6>
                              <div className="tj-progress">
                                <span className="tj-progress-percent">100%</span>
                                <div className="tj-progress-bar" data-percent="100">
                                </div>
                              </div>
                            </li>
                            <li>
                              <h6 className="tj-progress-title">Mathematical Modeling</h6>
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
                        <h2 className="sec-title title-anim">Creating Excellence in <span>Physical Sciences</span></h2>
                      </div>
                    </div>
                    <div className="about-bottom-area">
                      <div className="mission-vision-box wow fadeInLeft" data-wow-delay=".5s">
                        <h4 className="title">Vision</h4>
                        <p className="desc">To advance understanding of fundamental physical principles and theories governing the physical world through cutting-edge research and education.</p>
                      </div>
                      <div className="mission-vision-box wow fadeInRight" data-wow-delay=".5s">
                        <h4 className="title">Mission</h4>
                        <p className="desc">To equip students with advanced theoretical knowledge and mathematical modeling skills in physics for scientific excellence.</p>
                      </div>
                    </div>
                    <br/>
                    <div className="about-content-area">
                      <div className="content-text wow fadeInUp" data-wow-delay=".6s">
                        <p className="desc">Others may seek employment in industries such as aerospace, telecommunications, energy, materials science, data science, or finance, where their analytical and problem-solving skills are highly valued.</p>
                        <p className="desc">Overall, an MSc Physics program provides students with a comprehensive knowledge of physics principles, theoretical concepts, and practical skills, enabling them to contribute to scientific advancements, technological innovations, and a wide range of industries.</p>
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
                            <td style={{padding: '20px', fontSize: '16px'}}>M.Sc. Physics</td>
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
                        <p className="desc" style={{marginBottom: '15px'}}>Graduates can pursue employment opportunities in industries such as aerospace, telecommunications, energy, materials science, data science, or finance. The program prepares students for diverse roles in research and development, technology innovation, and analytical problem-solving.</p>
                        
                        <p className="desc" style={{marginBottom: '15px'}}>Career paths include positions as research physicists, data scientists, engineering consultants, and technology specialists in both private and public sectors.</p>
                        
                        <h4 className="title" style={{marginBottom: '20px', marginTop: '30px', color: '#1e8a8a'}}>Further Education</h4>
                        <p className="desc">Graduates can continue their education by pursuing a Ph.D. in Physics or related disciplines, leading to research and academic positions. The program provides a strong foundation for advanced research and scientific innovation in physical sciences.</p>
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
                      <h4 className="title" style={{color: '#1e8a8a', marginBottom: '20px'}}>CORE PHYSICS</h4>
                      <h5 style={{color: '#0c1e21', marginBottom: '15px'}}>Programme Specific Outcomes (PSOs)</h5>
                      <ul className="list-items" style={{marginBottom: '25px'}}>
                        <li><i className="fas fa-check"></i>Master advanced concepts in theoretical physics, quantum mechanics, and mathematical modeling.</li>
                        <li><i className="fas fa-check"></i>Develop expertise in problem-solving, mathematical modeling, and critical thinking in physics.</li>
                        <li><i className="fas fa-check"></i>Apply fundamental laws and principles governing the behavior of matter and energy.</li>
                      </ul>
                      
                      <h5 style={{color: '#0c1e21', marginBottom: '15px'}}>Program Outcomes (POs)</h5>
                      <ul className="list-items">
                        <li><i className="fas fa-check"></i>Demonstrate comprehensive understanding of fundamental physical principles and their applications.</li>
                        <li><i className="fas fa-check"></i>Develop advanced mathematical modeling and analytical problem-solving skills.</li>
                        <li><i className="fas fa-check"></i>Acquire theoretical knowledge in specialized areas of physics and research methodologies.</li>
                        <li><i className="fas fa-check"></i>Enhance scientific communication skills through seminars, workshops, and research presentations.</li>
                        <li><i className="fas fa-check"></i>Prepare for advanced research or professional careers in physical sciences and technology.</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="content-area wow fadeInRight" data-wow-delay=".3s">
                      <h4 className="title" style={{color: '#1e8a8a', marginBottom: '20px'}}>SPECIALIZED AREAS</h4>
                      <h5 style={{color: '#0c1e21', marginBottom: '15px'}}>Elective Specializations</h5>
                      <ul className="list-items" style={{marginBottom: '25px'}}>
                        <li><i className="fas fa-check"></i>Astrophysics - Study of celestial objects and cosmic phenomena.</li>
                        <li><i className="fas fa-check"></i>Particle Physics - Fundamental particles and their interactions.</li>
                        <li><i className="fas fa-check"></i>Condensed Matter Physics - Properties of solid and liquid materials.</li>
                      </ul>
                      
                      <h5 style={{color: '#0c1e21', marginBottom: '15px'}}>Research Components</h5>
                      <ul className="list-items">
                        <li><i className="fas fa-check"></i>Nuclear Physics - Atomic nuclei and nuclear reactions.</li>
                        <li><i className="fas fa-check"></i>Quantum Field Theory - Advanced quantum mechanical frameworks.</li>
                        <li><i className="fas fa-check"></i>Optics - Light behavior and optical systems.</li>
                        <li><i className="fas fa-check"></i>Computational Physics - Numerical methods and simulations.</li>
                        <li><i className="fas fa-check"></i>Seminars and workshops on current research developments.</li>
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