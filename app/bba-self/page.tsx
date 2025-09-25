import Header from '../components/Header';
import Footer from '../components/Footer';
import OffcanvasMenu from '../components/OffcanvasMenu';
import Link from 'next/link';

export default function BBASelf() {
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
                      <i className="fa-solid fa-award"></i> JKKN
                    </span>
                    <h1 className="banner-title title-anim">BBA -
                      <span>Business Administration</span>
                    </h1>
                    <div className="banner-desc-area wow fadeInUp" data-wow-delay=".7s">
                      <Link className="banner-link" href="#">
                        <span><i className="fa-solid fa-arrow-right-long"></i></span>
                      </Link>
                      <div className="banner-desc">Comprehensive Bachelor's degree program in Business Administration, providing strong foundation in business management, finance, marketing, and entrepreneurship.</div>
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
                      <h6 className="customers-text wow fadeInUp" data-wow-delay=".5s">Students enrolled in our Business Administration programs.</h6>
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
                        <i className="fas fa-box"></i>Bachelor of Business Administration
                      </span>
                      <h2 className="sec-title title-anim">Building Strong Foundation in <span>Business Management & Leadership</span></h2>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="department-content text-center wow fadeInUp" data-wow-delay=".5s">
                      <p className="desc mb-5">
                        JKKN College of Arts and Science is a reputable institution that offers a Bachelor of Business Administration program. This program is designed to equip students with the skills and knowledge necessary to succeed in the business world. The curriculum is structured to cover a wide range of business-related topics, including accounting, finance, marketing, management, and entrepreneurship. The program also includes practical training through internships and hands-on projects, providing students with real-world experience in the business industry.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row row-gap-4 rightSwipeWrap">
                  <div className="col-lg-6">
                    <div className="choose-box right-swipe">
                      <div className="choose-content text-center">
                        <div className="choose-icon">
                          <i className="fa-solid fa-lightbulb"></i>
                        </div>
                        <h4 className="title">Practical Training</h4>
                        <p className="desc">The program includes practical training through internships and hands-on projects, providing students with real-world experience in the business industry. This ensures they are well-prepared for professional challenges and industry requirements.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="choose-box right-swipe">
                      <div className="choose-content text-center">
                        <div className="choose-icon">
                          <i className="fas fa-award"></i>
                        </div>
                        <h4 className="title">Career Readiness</h4>
                        <p className="desc">Graduates of the program are well-prepared to pursue a variety of careers in business, including positions in finance, marketing, management, and more. JKKN College of Arts and Science is committed to providing students with a high-quality education that prepares them for success in their future careers.</p>
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
                      <span className="sub-title wow fadeInUp" data-wow-delay=".3s"><i className="fas fa-box"></i>Program Details</span>
                      <h2 className="sec-title title-anim">Academic <span>Information</span></h2>
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
                            <th scope="col" style={{padding: '20px', fontSize: '18px', fontWeight: '600'}}>Duration</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td style={{padding: '20px', fontSize: '16px'}}>Bachelor of Business Administration (BBA)</td>
                            <td style={{padding: '20px', fontSize: '16px'}}>3 years</td>
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
                        <img data-speed=".8" src="/assets/images/img/Campus-Life.png" alt="BBA Program" />
                      </div>
                      <div className="box-area style-2">
                        <div className="progress-box wow fadeInUp" data-wow-delay=".3s">
                          <h4 className="title">Core Areas</h4>
                          <ul className="tj-progress-list">
                            <li>
                              <h6 className="tj-progress-title">Business Management</h6>
                              <div className="tj-progress">
                                <span className="tj-progress-percent">100%</span>
                                <div className="tj-progress-bar" data-percent="100">
                                </div>
                              </div>
                            </li>
                            <li>
                              <h6 className="tj-progress-title">Finance & Marketing</h6>
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
                        <span className="sub-title wow fadeInUp" data-wow-delay=".3s"><i className="fas fa-box"></i>Curriculum Overview</span>
                        <h2 className="sec-title title-anim">BBA <span>Program Structure</span></h2>
                      </div>
                    </div>
                    <div className="about-bottom-area">
                      <div className="mission-vision-box wow fadeInLeft" data-wow-delay=".5s">
                        <h4 className="title">Core Subjects</h4>
                        <p className="desc">The curriculum is structured to cover a wide range of business-related topics, including accounting, finance, marketing, management, and entrepreneurship.</p>
                      </div>
                      <div className="mission-vision-box wow fadeInRight" data-wow-delay=".5s">
                        <h4 className="title">Business Focus</h4>
                        <p className="desc">The program is designed to equip students with the skills and knowledge necessary to succeed in the business world, preparing them for leadership roles and entrepreneurial ventures.</p>
                      </div>
                    </div>
                    <br/>
                    <div className="about-content-area">
                      <div className="content-text wow fadeInUp" data-wow-delay=".6s">
                        <p className="desc">The BBA program provides students with a strong foundation in business management, finance, marketing, and entrepreneurship. Students gain practical experience through internships and hands-on projects, preparing them for successful careers in various business sectors and leadership positions.</p>
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
                                <span>
                                  <i className="fa-solid fa-star"></i>
                                  <i className="fa-solid fa-star"></i>
                                  <i className="fa-solid fa-star"></i>
                                  <i className="fa-solid fa-star"></i>
                                  <i className="fa-solid fa-star"></i>
                                </span>
                              </div>
                              <div className="empty-ratings">
                                <span>
                                  <i className="fa-regular fa-star"></i>
                                  <i className="fa-regular fa-star"></i>
                                  <i className="fa-regular fa-star"></i>
                                  <i className="fa-regular fa-star"></i>
                                  <i className="fa-regular fa-star"></i>
                                </span>
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
                        <p className="desc" style={{marginBottom: '15px'}}>Graduates are well-prepared to pursue a variety of careers in business, including positions in finance, marketing, management, and more. They can work in corporate organizations, financial institutions, marketing agencies, and entrepreneurial ventures.</p>
                        
                        <p className="desc" style={{marginBottom: '15px'}}>Career paths include positions in business management, financial analysis, marketing management, human resources, operations management, and business consulting across various industries and sectors.</p>
                        
                        <h4 className="title" style={{marginBottom: '20px', marginTop: '30px', color: '#1e8a8a'}}>Further Education</h4>
                        <p className="desc">Graduates can pursue higher education in business administration, management, or related fields such as MBA, M.Com, or specialized master's programs. The program provides a strong foundation for both professional practice and advanced studies in business and management.</p>
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
