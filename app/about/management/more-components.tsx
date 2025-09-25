// Project Section Component
export function ProjectSection() {
  return (
    <section className="h10-project section-gap tj-sticky-panel-container">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="sec-heading style-3 sec-heading-centered">
              <span className="sub-title wow fadeInUp" data-wow-delay=".3s"><i className="fas fa-box"></i>Latest Projects</span>
              <h2 className="sec-title text-anim">Breaking Boundaries, Building Dreams.</h2>
              <div className="portfolio-filter h10-project-filter text-center wow fadeInUp" data-wow-delay=".5s">
                <div className="button-group h10-project-button-group filter-button-group">
                  <button data-filter="*" className="active">All</button>
                  <button data-filter=".success">Success</button>
                  <button data-filter=".innovate">Innovate</button>
                  <button data-filter=".lead">Lead</button>
                  <button data-filter=".impact">Impact</button>
                  <div className="active-bg"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="project-wrapper h7-project-wrapper h10-project-wrapper  portfolio-filter-box">
              <div className="portfolio-sizer"></div>
              <div className="gutter-sizer"></div>
              <div className="project-item h4-project-item portfolio-filter-item impact innovate">
                <div className="project-img " data-cursor-text="View Project">
                  <a href="/portfolio/event-management">
                    <img src="/assets/images/project/h10-project-1.webp" alt="Image" />
                  </a>
                </div>
                <div className="project-content">
                  <div className="project-text">
                    <div>
                      <h4 className="title"><a href="/portfolio/event-management">Event Management Platform</a></h4>
                      <span className="categories"><a href="/portfolio/event-management">Connect</a></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="project-item h4-project-item portfolio-filter-item success lead impact">
                <div className="project-img " data-cursor-text="View Project">
                  <a href="/portfolio/digital-marketing">
                    <img src="/assets/images/project/h10-project-2.webp" alt="Image" />
                  </a>
                </div>
                <div className="project-content">
                  <div className="project-text">
                    <div>
                      <h4 className="title"><a href="/portfolio/digital-marketing">Digital Marketing Campaign</a></h4>
                      <span className="categories"><a href="/portfolio/digital-marketing">Empower</a></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="project-item h4-project-item portfolio-filter-item lead innovate">
                <div className="project-img " data-cursor-text="View Project">
                  <a href="/portfolio/learning-platform">
                    <img src="/assets/images/project/h10-project-3.webp" alt="Image" />
                  </a>
                </div>
                <div className="project-content">
                  <div className="project-text">
                    <div>
                      <h4 className="title"><a href="/portfolio/learning-platform">Interactive Learning Platform</a></h4>
                      <span className="categories"><a href="/portfolio/learning-platform">Support</a></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="project-item h4-project-item portfolio-filter-item success innovate">
                <div className="project-img " data-cursor-text="View Project">
                  <a href="/portfolio/environmental-dashboard">
                    <img src="/assets/images/project/h10-project-4.webp" alt="Image" />
                  </a>
                </div>
                <div className="project-content">
                  <div className="project-text">
                    <div>
                      <h4 className="title"><a href="/portfolio/environmental-dashboard">Environmental Impact Dashboard</a></h4>
                      <span className="categories"><a href="/portfolio/environmental-dashboard">Business</a></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Testimonial Section Component
export function TestimonialSection() {
  return (
    <section className="h10-testimonial section-gap section-gap-x">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-12">
            <div className="sec-heading-wrap">
              <div className="heading-wrap-content">
                <div className="sec-heading style-3">
                  <span className="sub-title wow fadeInUp" data-wow-delay=".3s"><i className="fas fa-box"></i>Clients Feedback</span>
                  <h2 className="sec-title text-anim">Our Clients Share Their Success Stories.</h2>
                </div>
                <div className="slider-navigation d-none d-md-inline-flex wow fadeInUp" data-wow-delay=".5s">
                  <div className="slider-prev">
                    <span className="anim-icon">
                      <i className="fas fa-arrow-left"></i>
                      <i className="fas fa-arrow-left"></i>
                    </span>
                  </div>
                  <div className="slider-next">
                    <span className="anim-icon">
                      <i className="fas fa-arrow-right"></i>
                      <i className="fas fa-arrow-right"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid gap-0">
        <div className="row">
          <div className="col-12">
            <div className="testimonial-wrapper h8-testimonial-wrapper h10-testimonial-wrapper wow fadeInUp" data-wow-delay=".3s">
              <div className="swiper swiper-container h10-testimonial-slider">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="testimonial-item">
                      <div className="testimonial-author">
                        <div className="author-inner">
                          <div className="author-img">
                            <img src="/assets/images/testimonial/client-1.webp" alt="" />
                          </div>
                          <div className="author-header">
                            <h5 className="title">Guy Hawkins</h5>
                            <span className="designation">Co. Founder</span>
                          </div>
                        </div>
                      </div>
                      <div className="desc">
                        <p>Working with Bexon has been a game-changer for our business. Their team's professionalism, attention to detail, and innovative solutions have helped us achieve our goals faster than we imagined. We truly feel like a valued partner.</p>
                      </div>
                      <div className="star-ratings">
                        <div className="fill-ratings" style={{width: '100%'}}>
                          <span>â˜…â˜…â˜…â˜…â˜…</span>
                        </div>
                        <div className="empty-ratings">
                          <span>â˜…â˜…â˜…â˜…â˜…</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="testimonial-item">
                      <div className="testimonial-author">
                        <div className="author-inner">
                          <div className="author-img">
                            <img src="/assets/images/testimonial/client-2.webp" alt="" />
                          </div>
                          <div className="author-header">
                            <h5 className="title">Ralph Edwards</h5>
                            <span className="designation">Co. Founder</span>
                          </div>
                        </div>
                      </div>
                      <div className="desc">
                        <p>The results we've seen after partnering with Bexon are beyond our expectations. They not only understood our vision but also brought new ideas to the table that have taken our business to the next level. Their expertise and commitment to success make them a trusted.</p>
                      </div>
                      <div className="star-ratings">
                        <div className="fill-ratings" style={{width: '100%'}}>
                          <span>â˜…â˜…â˜…â˜…â˜…</span>
                        </div>
                        <div className="empty-ratings">
                          <span>â˜…â˜…â˜…â˜…â˜…</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="testimonial-item">
                      <div className="testimonial-author">
                        <div className="author-inner">
                          <div className="author-img">
                            <img src="/assets/images/testimonial/client-3.webp" alt="" />
                          </div>
                          <div className="author-header">
                            <h5 className="title">Devon Lane</h5>
                            <span className="designation">Co. Founder</span>
                          </div>
                        </div>
                      </div>
                      <div className="desc">
                        <p>We've been working with Bexonfor years, and they continue to deliver outstanding results. Their team is proactive and responsive to ensure our needs are met. They've become a key contributor to our growth and success that really help us</p>
                      </div>
                      <div className="star-ratings">
                        <div className="fill-ratings" style={{width: '100%'}}>
                          <span>â˜…â˜…â˜…â˜…â˜…</span>
                        </div>
                        <div className="empty-ratings">
                          <span>â˜…â˜…â˜…â˜…â˜…</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-pagination-area"></div>
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
  );
}
