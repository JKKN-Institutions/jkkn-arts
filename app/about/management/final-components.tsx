// Pricing Section Component
export function PricingSection() {
  return (
    <section className="h10-pricing section-gap">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="sec-heading style-3 sec-heading-centered">
              <span className="sub-title wow fadeInUp" data-wow-delay=".3s"><i className="fas fa-box"></i>Our PRICING PLAN</span>
              <h2 className="sec-title text-anim">Our Pricing Plan.</h2>
            </div>
          </div>
        </div>
        <div className="row row-gap-4">
          <div className="col-xl-4 col-md-6">
            <div className="pricing-box h10-pricing-box wow fadeInUp" data-wow-delay=".5s">
              <div className="pricing-header">
                <h4 className="package-name">Basic Plan</h4>
                <div className="package-desc">
                  <p>Essential Business Services</p>
                </div>
                <div className="package-price">
                  <span className="package-currency">$</span>
                  <span className="price-number">99</span>
                  <span className="package-period">/per month</span>
                </div>
              </div>
              <div className="pricing-body">
                <div className="list-items h10-pricing-list">
                  <div className="title-wrapper">
                    <h5 className="title">Features</h5>
                    <p className="desc">Includes:</p>
                  </div>
                  <ul>
                    <li><i className="fas fa-list"></i>Access to core services</li>
                    <li><i className="fas fa-list"></i>Limited customer support (email)</li>
                    <li><i className="fas fa-list"></i>1 project per month</li>
                    <li><i className="fas fa-list"></i>Basic reporting and analytics</li>
                    <li><i className="fas fa-list"></i>Standard templates and tools</li>
                    <li><i className="fas fa-list"></i>Basic performance tracking</li>
                  </ul>
                </div>
                <div className="pricing-btn">
                  <a className="text-btn" href="#">
                    <span className="btn-text"><span>Chose Plan</span></span>
                    <span className="btn-icon"><i className="fas fa-arrow-right-long"></i></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="pricing-box h10-pricing-box active wow fadeInUp" data-wow-delay=".7s">
              <div className="pricing-header">
                <div className="pricing-badge">
                  <i className="fas fa-star-2"></i> <span>Popular</span>
                </div>
                <h4 className="package-name">Standard Plan</h4>
                <div className="package-desc">
                  <p>Complete Business Solutions</p>
                </div>
                <div className="package-price">
                  <span className="package-currency">$</span>
                  <span className="price-number">249</span>
                  <span className="package-period">/per month</span>
                </div>
              </div>
              <div className="pricing-body">
                <div className="list-items">
                  <div className="title-wrapper">
                    <h5 className="title">Features</h5>
                    <p className="desc">Includes all Basic plan and Plus:</p>
                  </div>
                  <ul>
                    <li><i className="fas fa-list"></i>All features in Basic Plan</li>
                    <li><i className="fas fa-list"></i>Priority customer support</li>
                    <li><i className="fas fa-list"></i>Up to 3 projects per month</li>
                    <li><i className="fas fa-list"></i>Monthly performance reviews</li>
                    <li><i className="fas fa-list"></i>Collaboration tools for team</li>
                    <li><i className="fas fa-list"></i>Custom templates</li>
                  </ul>
                </div>
                <div className="pricing-btn">
                  <a className="text-btn" href="#">
                    <span className="btn-text"><span>Chose Plan</span></span>
                    <span className="btn-icon"><i className="fas fa-arrow-right-long"></i></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="pricing-box h10-pricing-box wow fadeInUp" data-wow-delay=".9s">
              <div className="pricing-header">
                <h4 className="package-name">Premium Plan</h4>
                <div className="package-desc">
                  <p>Advanced Business Services</p>
                </div>
                <div className="package-price">
                  <span className="package-currency">$</span>
                  <span className="price-number">499</span>
                  <span className="package-period">/per month</span>
                </div>
              </div>
              <div className="pricing-body">
                <div className="list-items">
                  <div className="title-wrapper">
                    <h5 className="title">Features</h5>
                    <p className="desc">Includes all Standard plan and Plus:</p>
                  </div>
                  <ul>
                    <li><i className="fas fa-list"></i>All features in Standard Plan</li>
                    <li><i className="fas fa-list"></i>Dedicated account manager</li>
                    <li><i className="fas fa-list"></i>Tailored strategy sessions</li>
                    <li><i className="fas fa-list"></i>Quarterly performance audits</li>
                    <li><i className="fas fa-list"></i>Priority support</li>
                    <li><i className="fas fa-list"></i>24/7 emergency service</li>
                  </ul>
                </div>
                <div className="pricing-btn">
                  <a className="text-btn" href="#">
                    <span className="btn-text"><span>Chose Plan</span></span>
                    <span className="btn-icon"><i className="fas fa-arrow-right-long"></i></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Client Section Component
export function ClientSection() {
  return (
    <section className="tj-client-section-2 h6-client section-gap-x wow fadeInUp" data-wow-delay=".4s">
      <div className="container-fluid client-container">
        <div className="row">
          <div className="col-12">
            <div className="h6-client-title-wrapper">
              <h6 className="h6-client-title">we're proud to partner with best-in-class clients</h6>
            </div>
          </div>
          <div className="col-12">
            <div className="swiper client-slider client-slider-2 h6-client-slider">
              <div className="swiper-wrapper">
                <div className="swiper-slide client-item">
                  <div className="client-logo">
                    <img src="/assets/images/brands/brand-1-light.webp" alt="" />
                  </div>
                </div>
                <div className="swiper-slide client-item">
                  <div className="client-logo">
                    <img src="/assets/images/brands/brand-2-light.webp" alt="" />
                  </div>
                </div>
                <div className="swiper-slide client-item">
                  <div className="client-logo">
                    <img src="/assets/images/brands/brand-3-light.webp" alt="" />
                  </div>
                </div>
                <div className="swiper-slide client-item">
                  <div className="client-logo">
                    <img src="/assets/images/brands/brand-4-light.webp" alt="" />
                  </div>
                </div>
                <div className="swiper-slide client-item">
                  <div className="client-logo">
                    <img src="/assets/images/brands/brand-5-light.webp" alt="" />
                  </div>
                </div>
                <div className="swiper-slide client-item">
                  <div className="client-logo">
                    <img src="/assets/images/brands/brand-6-light.webp" alt="" />
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

// Blog Section Component
export function BlogSection() {
  return (
    <section className="h10-blog section-gap">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="sec-heading-wrap ">
              <div className="heading-wrap-content">
                <div className="sec-heading style-3">
                  <span className="sub-title wow fadeInUp" data-wow-delay=".3s"><i className="fas fa-box"></i>Insights & Ideas</span>
                  <h2 className="sec-title text-anim">The Ultimate Resource.</h2>
                </div>
                <div className="btn-area wow fadeInUp" data-wow-delay=".8s">
                  <a className="tj-primary-btn" href="/blog">
                    <span className="btn-text"><span>More Blogs</span></span>
                    <span className="btn-icon"><i className="fas fa-arrow-right-long"></i></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 ">
            <div className="blog-wrapper h8-blog-wrapper h10-blog-wrapper ">
              <div className="blog-item style-2 wow fadeInUp" data-wow-delay=".3s">
                <div className="blog-thumb">
                  <a href="/blog/digital-transform"><img src="/assets/images/blog/blog-1.webp" alt="" /></a>
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <div className="blog-date-wrapper">
                      <span className="blog-author">By <a href="/blog/digital-transform">Ellinien Loma</a></span>
                      <span className="blog-date">June 20, 2025</span>
                    </div>
                    <span className="categories"><a href="/blog/digital-transform">Business</a></span>
                  </div>
                  <div className="title-area">
                    <h3 className="title"><a href="/blog/digital-transform">Harnessing Digital Transform a Roadmap Businesses.</a></h3>
                    <a className="text-btn" href="/blog/digital-transform">
                      <span className="btn-text"><span>Read More</span></span>
                      <span className="btn-icon"><i className="fas fa-arrow-right-long"></i></span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="blog-item style-2 wow fadeInUp" data-wow-delay=".4s">
                <div className="blog-thumb">
                  <a href="/blog/change-management"><img src="/assets/images/blog/blog-5.webp" alt="" /></a>
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <div className="blog-date-wrapper">
                      <span className="blog-author">By <a href="/blog/change-management">Ellinien Loma</a></span>
                      <span className="blog-date">June 20, 2025</span>
                    </div>
                    <span className="categories"><a href="/blog/change-management">Success</a></span>
                  </div>
                  <div className="title-area">
                    <h3 className="title"><a href="/blog/change-management">Mastering Change Management Lessons for Businesses.</a></h3>
                    <a className="text-btn" href="/blog/change-management">
                      <span className="btn-text"><span>Read More</span></span>
                      <span className="btn-icon"><i className="fas fa-arrow-right-long"></i></span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="blog-item style-2 wow fadeInUp" data-wow-delay=".5s">
                <div className="blog-thumb">
                  <a href="/blog/leading-through-change"><img src="/assets/images/blog/blog-4.webp" alt="" /></a>
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <div className="blog-date-wrapper">
                      <span className="blog-author">By <a href="/blog/leading-through-change">Ellinien Loma</a></span>
                      <span className="blog-date">June 20, 2025</span>
                    </div>
                    <span className="categories"><a href="/blog/leading-through-change">Connect</a></span>
                  </div>
                  <div className="title-area">
                    <h3 className="title"><a href="/blog/leading-through-change">Leading Through Change: Proven Lessons for Effective Change Business.</a></h3>
                    <a className="text-btn" href="/blog/leading-through-change">
                      <span className="btn-text"><span>Read More</span></span>
                      <span className="btn-icon"><i className="fas fa-arrow-right-long"></i></span>
                    </a>
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

