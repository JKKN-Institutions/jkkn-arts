import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Services() {
  return (
    <>      <Header />
      
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main id="primary" className="site-main">
            <div className="space-for-header"></div>
            {/* Mobile top padding */}
            <div className="d-lg-none" style={{paddingTop: '60px'}}></div>
            
            {/* start: Breadcrumb Section */}
            <section className="tj-page-header section-gap-x" data-bg-image="/assets/images/bg/pheader-bg.webp">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="tj-page-header-content text-center">
                      <h1 className="tj-page-title">Our Services</h1>
                      <div className="tj-page-link">
                        <span><i className="fas fa-home"></i></span>
                        <span>
                          <Link href="/">Home</Link>
                        </span>
                        <span><i className="fas fa-arrow-right"></i></span>
                        <span>Services</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="page-header-overlay" data-bg-image="/assets/images/shape/pheader-overlay.webp"></div>
            </section>
            {/* end: Breadcrumb Section */}

            {/* start: Services Section */}
            <section className="tj-service-section section-gap">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="sec-heading style-2 text-center">
                      <span className="sub-title">Our Solutions</span>
                      <h2 className="sec-title">Comprehensive Business Solutions</h2>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="service-item-wrapper">
                      <div className="service-item style-2">
                        <div className="title-area">
                          <div className="service-icon">
                            <i className="fas fa-chart-line"></i>
                          </div>
                          <h4 className="title">Business Strategy Development</h4>
                        </div>
                        <div className="service-content">
                          <p className="desc">Comprehensive strategies that align with your vision and drive sustainable growth across all business dimensions.</p>
                          <ul className="list-items">
                            <li><i className="fas fa-check"></i>Strategic Planning</li>
                            <li><i className="fas fa-check"></i>Market Analysis</li>
                            <li><i className="fas fa-check"></i>Growth Strategy</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="service-item-wrapper">
                      <div className="service-item style-2">
                        <div className="title-area">
                          <div className="service-icon">
                            <i className="fas fa-users"></i>
                          </div>
                          <h4 className="title">Customer Experience Solutions</h4>
                        </div>
                        <div className="service-content">
                          <p className="desc">Developing personalized customer journeys to increase satisfaction and loyalty of our expansion to keep competitive.</p>
                          <ul className="list-items">
                            <li><i className="fas fa-check"></i>Personalized Customer</li>
                            <li><i className="fas fa-check"></i>Seamless Service</li>
                            <li><i className="fas fa-check"></i>Proactive Support</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="service-item-wrapper">
                      <div className="service-item style-2">
                        <div className="title-area">
                          <div className="service-icon">
                            <i className="fas fa-leaf"></i>
                          </div>
                          <h4 className="title">Sustainability and ESG Consulting</h4>
                        </div>
                        <div className="service-content">
                          <p className="desc">Provide tailored strategies that not only drive long-term value but also build trust with stakeholders, investors.</p>
                          <ul className="list-items">
                            <li><i className="fas fa-check"></i>Strategy Development</li>
                            <li><i className="fas fa-check"></i>Sustainable Business</li>
                            <li><i className="fas fa-check"></i>Impactful Reporting</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="service-item-wrapper">
                      <div className="service-item style-2">
                        <div className="title-area">
                          <div className="service-icon">
                            <i className="fas fa-graduation-cap"></i>
                          </div>
                          <h4 className="title">Training and Development Programs</h4>
                        </div>
                        <div className="service-content">
                          <p className="desc">Training and Development Programs are designed to empower employees with the skills, knowledge, and tools they need.</p>
                          <ul className="list-items">
                            <li><i className="fas fa-check"></i>Leadership Development</li>
                            <li><i className="fas fa-check"></i>Skill Enhancement</li>
                            <li><i className="fas fa-check"></i>Employee Engagement</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="service-item-wrapper">
                      <div className="service-item style-2">
                        <div className="title-area">
                          <div className="service-icon">
                            <i className="fas fa-headset"></i>
                          </div>
                          <h4 className="title">IT Support & Maintenance</h4>
                        </div>
                        <div className="service-content">
                          <p className="desc">Comprehensive IT support and maintenance services to keep your business systems running smoothly and efficiently.</p>
                          <ul className="list-items">
                            <li><i className="fas fa-check"></i>24/7 Technical Support</li>
                            <li><i className="fas fa-check"></i>System Maintenance</li>
                            <li><i className="fas fa-check"></i>Infrastructure Management</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="service-item-wrapper">
                      <div className="service-item style-2">
                        <div className="title-area">
                          <div className="service-icon">
                            <i className="fas fa-bullhorn"></i>
                          </div>
                          <h4 className="title">Marketing Strategy & Campaigns</h4>
                        </div>
                        <div className="service-content">
                          <p className="desc">Strategic marketing solutions that drive brand awareness, customer engagement, and business growth through targeted campaigns.</p>
                          <ul className="list-items">
                            <li><i className="fas fa-check"></i>Digital Marketing</li>
                            <li><i className="fas fa-check"></i>Brand Strategy</li>
                            <li><i className="fas fa-check"></i>Campaign Management</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* end: Services Section */}

            {/* start: CTA Section */}
            <section className="tj-cta-section section-gap">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="cta-content text-center">
                      <h2 className="cta-title">Ready to Transform Your Business?</h2>
                      <p className="cta-desc">Let&apos;s discuss how our services can help you achieve your business goals and drive sustainable growth.</p>
                      <div className="cta-btn">
                        <Link className="tj-primary-btn" href="#">
                          <span className="btn-text"><span>Get Started Today</span></span>
                          <span className="btn-icon"><i className="fas fa-arrow-right"></i></span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* end: CTA Section */}
          </main>

          <Footer />
        </div>
      </div>
    </>
  );
}

