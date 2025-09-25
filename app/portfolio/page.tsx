import Link from 'next/link';
import Header from '../components/Header';
import OffcanvasMenu from '../components/OffcanvasMenu';
import Footer from '../components/Footer';

export default function Portfolio() {
  return (
    <>
      <OffcanvasMenu />
      <Header />
      
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main id="primary" className="site-main">
            <div className="space-for-header"></div>
            
            {/* start: Breadcrumb Section */}
            <section className="tj-page-header section-gap-x" data-bg-image="/assets/images/bg/pheader-bg.webp">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="tj-page-header-content text-center">
                      <h1 className="tj-page-title">Our Portfolio</h1>
                      <div className="tj-page-link">
                        <span><i className="fas fa-home"></i></span>
                        <span>
                          <Link href="/">Home</Link>
                        </span>
                        <span><i className="fas fa-arrow-right"></i></span>
                        <span>Portfolio</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="page-header-overlay" data-bg-image="/assets/images/shape/pheader-overlay.webp"></div>
            </section>
            {/* end: Breadcrumb Section */}

            {/* start: Portfolio Section */}
            <section className="tj-project-section section-gap">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="sec-heading style-2 text-center">
                      <span className="sub-title">Our Work</span>
                      <h2 className="sec-title">Breaking Boundaries, Building Dreams</h2>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-4 col-md-6">
                    <div className="project-item">
                      <div className="project-img" data-bg-image="/assets/images/img/department-of-computer-science.png">
                        <img src="/assets/images/img/department-of-computer-science.png" alt="Event Management Platform" />
                      </div>
                      <div className="project-content">
                        <span className="categories"><Link href="/portfolio-details">Business</Link></span>
                        <div className="project-text">
                          <h3 className="title"><Link href="/portfolio-details">Event Management Platform</Link></h3>
                          <p className="desc">A comprehensive platform for managing corporate events and conferences with advanced scheduling capabilities.</p>
                          <Link className="project-btn" href="/portfolio-details">
                            <i className="fas fa-arrow-right"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="project-item">
                      <div className="project-img" data-bg-image="/assets/images/img/department-of-chemistry.png">
                        <img src="/assets/images/img/department-of-chemistry.png" alt="Environmental Impact Dashboard" />
                      </div>
                      <div className="project-content">
                        <span className="categories"><Link href="/portfolio-details">Sustainability</Link></span>
                        <div className="project-text">
                          <h3 className="title"><Link href="/portfolio-details">Environmental Impact Dashboard</Link></h3>
                          <p className="desc">Real-time monitoring dashboard for tracking environmental metrics and sustainability goals.</p>
                          <Link className="project-btn" href="/portfolio-details">
                            <i className="fas fa-arrow-right"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="project-item">
                      <div className="project-img" data-bg-image="/assets/images/img/department-of-physics.png">
                        <img src="/assets/images/img/department-of-physics.png" alt="Digital Transformation" />
                      </div>
                      <div className="project-content">
                        <span className="categories"><Link href="/portfolio-details">Technology</Link></span>
                        <div className="project-text">
                          <h3 className="title"><Link href="/portfolio-details">Digital Transformation</Link></h3>
                          <p className="desc">Complete digital transformation initiative for a Fortune 500 company, improving efficiency by 300%.</p>
                          <Link className="project-btn" href="/portfolio-details">
                            <i className="fas fa-arrow-right"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="project-item">
                      <div className="project-img" data-bg-image="/assets/images/img/department-of-mathematics.png">
                        <img src="/assets/images/img/department-of-mathematics.png" alt="Customer Analytics Platform" />
                      </div>
                      <div className="project-content">
                        <span className="categories"><Link href="/portfolio-details">Analytics</Link></span>
                        <div className="project-text">
                          <h3 className="title"><Link href="/portfolio-details">Customer Analytics Platform</Link></h3>
                          <p className="desc">Advanced customer behavior analytics platform with AI-powered insights and predictive modeling.</p>
                          <Link className="project-btn" href="/portfolio-details">
                            <i className="fas fa-arrow-right"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="project-item">
                      <div className="project-img" data-bg-image="/assets/images/img/department-of-economics.png">
                        <img src="/assets/images/img/department-of-economics.png" alt="Supply Chain Optimization" />
                      </div>
                      <div className="project-content">
                        <span className="categories"><Link href="/portfolio-details">Operations</Link></span>
                        <div className="project-text">
                          <h3 className="title"><Link href="/portfolio-details">Supply Chain Optimization</Link></h3>
                          <p className="desc">Streamlined supply chain processes resulting in 40% cost reduction and improved delivery times.</p>
                          <Link className="project-btn" href="/portfolio-details">
                            <i className="fas fa-arrow-right"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="project-item">
                      <div className="project-img" data-bg-image="/assets/images/img/department-of-english.png">
                        <img src="/assets/images/img/department-of-english.png" alt="Employee Training System" />
                      </div>
                      <div className="project-content">
                        <span className="categories"><Link href="/portfolio-details">HR Tech</Link></span>
                        <div className="project-text">
                          <h3 className="title"><Link href="/portfolio-details">Employee Training System</Link></h3>
                          <p className="desc">Comprehensive learning management system with personalized training paths and progress tracking.</p>
                          <Link className="project-btn" href="/portfolio-details">
                            <i className="fas fa-arrow-right"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* end: Portfolio Section */}

            {/* start: CTA Section */}
            <section className="tj-cta-section section-gap">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="cta-content text-center">
                      <h2 className="cta-title">Have a Project in Mind?</h2>
                      <p className="cta-desc">Let&apos;s collaborate to create something amazing together. Our team is ready to bring your vision to life.</p>
                      <div className="cta-btn">
                        <Link className="tj-primary-btn" href="#">
                          <span className="btn-text"><span>Start Your Project</span></span>
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

