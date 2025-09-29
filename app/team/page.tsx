import Link from 'next/link';
import PageLayout from '../components/PageLayout';
import Image from 'next/image';



export default function Team() {
  return (
    <PageLayout>
            <div className="space-for-header"></div>
            {/* Mobile top padding */}
            <div className="d-lg-none" style={{paddingTop: '60px'}}></div>
            
            {/* start: Breadcrumb Section */}
            <section className="tj-page-header section-gap-x" data-bg-image="/assets/images/bg/pheader-bg.webp">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="tj-page-header-content text-center">
                      <h1 className="tj-page-title">Our Team</h1>
                      <div className="tj-page-link">
                        <span><i className="fas fa-home"></i></span>
                        <span>
                          <Link href="/">Home</Link>
                        </span>
                        <span><i className="fas fa-arrow-right"></i></span>
                        <span>Team</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="page-header-overlay" data-bg-image="/assets/images/shape/pheader-overlay.webp"></div>
            </section>
            {/* end: Breadcrumb Section */}

            {/* start: Team Section */}
            <section className="tj-team-section section-gap">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="sec-heading style-2 text-center">
                      <span className="sub-title">Our Team</span>
                      <h2 className="sec-title">Meet Our Professional Team</h2>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-3 col-md-6">
                    <div className="team-item wow fadeInUp" data-wow-delay=".1s">
                      <div className="team-image">
                        <Image src="/assets/images/team/team-1.webp" alt="Team Member" width={300} height={400} />
                      </div>
                      <div className="team-content">
                        <h4 className="name">John Smith</h4>
                        <span className="designation">CEO & Founder</span>
                        <div className="team-social">
                          <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                          <a href="#"><i className="fa-brands fa-twitter"></i></a>
                          <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="team-item wow fadeInUp" data-wow-delay=".3s">
                      <div className="team-image">
                        <Image src="/assets/images/team/team-2.webp" alt="Team Member" width={300} height={400} />
                      </div>
                      <div className="team-content">
                        <h4 className="name">Sarah Johnson</h4>
                        <span className="designation">Business Strategist</span>
                        <div className="team-social">
                          <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                          <a href="#"><i className="fa-brands fa-twitter"></i></a>
                          <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="team-item wow fadeInUp" data-wow-delay=".5s">
                      <div className="team-image">
                        <Image src="/assets/images/team/team-3.webp" alt="Team Member" width={300} height={400} />
                      </div>
                      <div className="team-content">
                        <h4 className="name">Michael Brown</h4>
                        <span className="designation">Lead Developer</span>
                        <div className="team-social">
                          <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                          <a href="#"><i className="fa-brands fa-twitter"></i></a>
                          <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="team-item wow fadeInUp" data-wow-delay=".7s">
                      <div className="team-image">
                        <Image src="/assets/images/team/team-4.webp" alt="Team Member" width={300} height={400} />
                      </div>
                      <div className="team-content">
                        <h4 className="name">Emily Davis</h4>
                        <span className="designation">Marketing Director</span>
                        <div className="team-social">
                          <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                          <a href="#"><i className="fa-brands fa-twitter"></i></a>
                          <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* end: Team Section */}
          </PageLayout>
  );
}


