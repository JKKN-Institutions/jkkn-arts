import Header from '../components/Header';
import Footer from '../components/Footer';
import OffcanvasMenu from '../components/OffcanvasMenu';
import Link from 'next/link';

export default function BComCAAllied() {
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
                    <h1 className="banner-title title-anim">BCom CA in
                      <span>Commerce & Computer Applications</span>
                    </h1>
                    <div className="banner-desc-area wow fadeInUp" data-wow-delay=".7s">
                      <Link className="banner-link" href="#">
                        <span><i className="fas fa-arrow-right"></i></span>
                      </Link>
                      <div className="banner-desc">Comprehensive undergraduate program in Commerce with Computer Applications, providing strong foundation in business and technology.</div>
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
                      <h6 className="customers-text wow fadeInUp" data-wow-delay=".5s">Students enrolled in our Commerce programs.</h6>
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
                        <i className="fas fa-box"></i>Department of Commerce (CA)
                      </span>
                      <h2 className="sec-title title-anim">Building Strong Foundation in <span>Commerce & Technology</span></h2>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="department-content text-center wow fadeInUp" data-wow-delay=".5s">
                      <p className="desc mb-5">
                        The Department of Commerce (CA) was established in the year 2001 with B.Com(CA). M.Com(CA) was introduced in 2002 & B.B.A in 2013. 
                        The Department creates a platform to develop the interests of students with industrial expectations. The Department adopts global standards in the field of commerce through its eminent and efficient faculty members to inspire aspiring, enthusiastic students to inculcate academic and career growth along with the real values of life. Students are eternally motivated to transform their thoughts and inherent skills into ground reality pertaining to the discipline.
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
                        <h4 className="title">B.Com (CA) Programme</h4>
                        <p className="desc">To get hold of different positions as experts in areas of commerce and computer application. To recognise features and roles of businessmen, entrepreneurs, managers and consultants.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="choose-box right-swipe">
                      <div className="choose-content text-center">
                        <div className="choose-icon">
                          <i className="fas fa-award"></i>
                        </div>
                        <h4 className="title">Professional Excellence</h4>
                        <p className="desc">To prove proficiency as Chartered Accountant, Company Secretaries, Cost and Management Accounting. The program prepares students for professional certifications and career advancement.</p>
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
                      <span className="sub-title wow fadeInUp" data-wow-delay=".3s"><i className="fas fa-box"></i>Program Timeline</span>
                      <h2 className="sec-title title-anim">Department <span>History</span></h2>
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
                            <td style={{padding: '20px', fontSize: '16px'}}>B.Com (CA)</td>
                            <td style={{padding: '20px', fontSize: '16px'}}>2001</td>
                          </tr>
                          <tr>
                            <td style={{padding: '20px', fontSize: '16px'}}>M.Com (CA)</td>
                            <td style={{padding: '20px', fontSize: '16px'}}>2002</td>
                          </tr>
                          <tr>
                            <td style={{padding: '20px', fontSize: '16px'}}>B.B.A</td>
                            <td style={{padding: '20px', fontSize: '16px'}}>2013</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* end: Academic Programs Section */}

            {/* start: Eligibility & Requirements Section */}
            <section className="tj-about-section-2 section-gap section-gap-x">
              <div className="container">
                <div className="row">
                  <div className="col-xl-6 col-lg-6 order-lg-1 order-2">
                    <div className="about-img-area style-2 wow fadeInLeft" data-wow-delay=".3s">
                      <div className="about-img overflow-hidden">
                        <img data-speed=".8" src="/assets/images/img/Campus-Life.png" alt="BCom CA Program" />
                      </div>
                      <div className="box-area style-2">
                        <div className="progress-box wow fadeInUp" data-wow-delay=".3s">
                          <h4 className="title">Program Focus</h4>
                          <ul className="tj-progress-list">
                            <li>
                              <h6 className="tj-progress-title">Commerce</h6>
                              <div className="tj-progress">
                                <span className="tj-progress-percent">100%</span>
                                <div className="tj-progress-bar" data-percent="100">
                                </div>
                              </div>
                            </li>
                            <li>
                              <h6 className="tj-progress-title">Computer Applications</h6>
                              <div className="tj-progress">
                                <span className="tj-progress-percent">100%</span>
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
                          <span className="sub-title wow fadeInUp" data-wow-delay=".3s"><i className="fas fa-box"></i>Programme Specific Outcomes</span>
                        <h2 className="sec-title title-anim">B.Com (CA) <span>PSOs</span></h2>
                      </div>
                    </div>
                    <div className="about-bottom-area">
                      <div className="mission-vision-box wow fadeInLeft" data-wow-delay=".5s">
                        <h4 className="title">Expertise Development</h4>
                        <p className="desc">To get hold of different positions as experts in areas of commerce and computer application. Students develop specialized knowledge in both commerce and technology domains.</p>
                      </div>
                      <div className="mission-vision-box wow fadeInRight" data-wow-delay=".5s">
                        <h4 className="title">Professional Recognition</h4>
                        <p className="desc">To recognise features and roles of businessmen, entrepreneurs, managers and consultants. Students understand various business roles and professional responsibilities.</p>
                      </div>
                    </div>
                    <br/>
                    <div className="about-content-area">
                      <div className="content-text wow fadeInUp" data-wow-delay=".6s">
                        <p className="desc">To prove proficiency as Chartered Accountant, Company Secretaries, Cost and Management Accounting. The B.Com (CA) program prepares students for professional certifications and career advancement in commerce and computer applications, combining business knowledge with technological expertise.</p>
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
            {/* end: Eligibility & Requirements Section */}
            <br/>
            {/* start: Career Opportunities Section */}
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
                        <h4 className="title" style={{marginBottom: '20px', color: '#1e8a8a'}}>Career Opportunities</h4>
                        <p className="desc" style={{marginBottom: '15px'}}>Graduates can pursue careers as Chartered Accountants, Company Secretaries, Cost and Management Accountants, business analysts, financial consultants, and IT professionals in various industries.</p>
                        
                        <p className="desc" style={{marginBottom: '15px'}}>Career paths include positions in accounting firms, corporate finance departments, banking sector, IT companies, and government organizations requiring commerce and computer application expertise.</p>
                        
                        <h4 className="title" style={{marginBottom: '20px', marginTop: '30px', color: '#1e8a8a'}}>Professional Development</h4>
                        <p className="desc">Graduates can pursue professional certifications like CA, CS, CMA, or continue with M.Com (CA) and MBA programs. The program provides a strong foundation for both professional practice and advanced studies in commerce and technology.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* end: Career Opportunities Section */}
            
          </main>

          <Footer />
        </div>
      </div>
    </>
  );
}

