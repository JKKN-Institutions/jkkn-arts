// Marquee Section Component
export function MarqueeSection() {
  return (
    <section>
      
    </section>
  );
}

// About Section Component
export function AboutSection() {
  return (
    <section className="h10-about section-gap">
      <div className="container">
        <div className="row flex-column-reverse flex-md-row ">
          <div className="col-12 col-lg-5 d-block d-md-none d-lg-block">
            <div className="about-img-area h10-about-banner wow bounceInLeft" data-wow-delay=".3s">
              <div className="about-img overflow-hidden">
                <img data-speed=".8" src="/assets/images/img/Campus-Life.png" alt="" />
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-7">
            <div className="h10-about-content-wrapper">
              <div className="sec-heading style-3 ">
                <span className="sub-title wow fadeInUp" data-wow-delay=".3s"> ABOUT OUR COMPANY</span>
                <h2 className="sec-title title-highlight wow fadeInUp" data-wow-delay=".3s">Powering Innovation Through Partnerships with our Brands and Many Companies.</h2>
              </div>
              <div className="row">
                <div className="col-12 col-md-6 d-none d-md-block d-lg-none">
                  <div className="about-img-area h10-about-banner wow bounceInLeft" data-wow-delay=".3s">
                    <div className="about-img">
                      <img src="/assets/images/img/Campus-Life.png" alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-12">
                  <div className="h10-about-content">
                    <div className="customers-box style-3 h10-about-clients wow fadeInUp" data-wow-delay=".4s">
                      
                    </div>
                    <p className="desc wow fadeInUp" data-wow-delay=".4s">Recognized by industryaward leaders, award winning team has be a proven record.</p>
                    
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

// About Section Component with Reversed Layout (Image Right, Content Left)
export function AboutSectionReversed() {
  return (
    <section className="h10-about section-gap">
      <div className="container">
        <div className="row flex-column flex-md-row">
          <div className="col-12 col-lg-7 order-1 order-md-1">
            <div className="h10-about-content-wrapper">
              <div className="sec-heading style-3 ">
                <span className="sub-title wow fadeInUp" data-wow-delay=".3s"> OUR EXPERTISE</span>
                <h2 className="sec-title title-highlight wow fadeInUp" data-wow-delay=".3s">Delivering Excellence Through Strategic Solutions and Innovative Approaches.</h2>
              </div>
              <div className="row">
                <div className="col-12 col-md-6 d-none d-md-block d-lg-none">
                  <div className="about-img-area h10-about-banner wow bounceInRight" data-wow-delay=".3s">
                    <div className="about-img">
                      <img src="/assets/images/img/Campus-Life.png" alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-12">
                  <div className="h10-about-content">
                    <div className="customers-box style-3 h10-about-clients wow fadeInUp" data-wow-delay=".4s">
                     
                    </div>
                    <p className="desc wow fadeInUp" data-wow-delay=".4s">Our commitment to excellence drives us to deliver innovative solutions that exceed expectations and create lasting value.</p>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-5 order-2 order-md-2 d-block d-md-none d-lg-block">
            <div className="about-img-area h10-about-banner wow bounceInRight" data-wow-delay=".3s">
              <div className="about-img overflow-hidden">
              <img src="/assets/images/img/Campus-Life.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

