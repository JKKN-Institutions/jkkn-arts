// Marquee Section Component
export function MarqueeSection() {
  return (
    <section>
      
    </section>
  );
}

// Management Team Section Component
export function AboutSection() {
  return (
    <section className="h10-about section-gap">
      <div className="container">
        <div className="row flex-column-reverse flex-md-row">
          <div className="col-12 col-lg-5 d-block d-md-none d-lg-block">
            <div className="about-img-area h10-about-banner wow bounceInLeft" data-wow-delay=".3s">
              <div className="about-img overflow-hidden">
                <img data-speed=".8" src="/assets/images/management/SMT.N.SENDAMARAAI.webp" alt="Smt. N. Sendamaraai - Management Team" />
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-7">
            <div className="h10-about-content-wrapper">
              <div className="sec-heading style-3">
                <span className="sub-title wow fadeInUp" data-wow-delay=".3s">OUR LEADERSHIP</span>
                <h2 className="sec-title title-highlight wow fadeInUp" data-wow-delay=".3s">Visionary Leadership Driving Educational Excellence and Innovation.</h2>
              </div>
              <div className="row">
                <div className="col-12 col-md-6 d-none d-md-block d-lg-none">
                  <div className="about-img-area h10-about-banner wow bounceInLeft" data-wow-delay=".3s">
                    <div className="about-img">
                      <img src="/assets/images/management/SMT.N.SENDAMARAAI.webp" alt="Smt. N. Sendamaraai - Management Team" />
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-12">
                  <div className="h10-about-content">
                    <div className="management-profile wow fadeInUp" data-wow-delay=".4s">
                      <h4 className="profile-name">Smt. N. Sendamaraai</h4>
                      <p className="profile-designation">CHAIRPERSON - JKKN EDUCATIONAL INSTITUTIONS</p>
                    </div>
                    <div className="management-message wow fadeInUp" data-wow-delay=".5s">
                      <p className="desc">
                        Happy to hold the immense responsibility as Chairperson of "JKKN Educational Institutions," I am proud to say that we have made exceptional progress and have achieved the status of one of the most prestigious colleges. "Leadership and Excellence" is our motto, a fact that is evident from our state-of-the-art infrastructure and the quality of each individual.
                      </p>
                      <p className="desc">
                        The institution with its team of competent and committed faculty provides high quality education in a well-equipped campus for the student's community. Besides providing world-class education, the institution inculcates progressive attitude blended with innovation towards the improvement of society. The excellent symbiosis of academic excellence and industrial relevance is the unique feature of J.K.K.NATTRAJA COLLEGE OF ARTS AND SCIENCE.
                      </p>
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

// Second Management Member Section with Reversed Layout
export function AboutSectionReversed() {
  return (
    <section className="h10-about section-gap">
      <div className="container">
        <div className="row flex-column flex-md-row">
          <div className="col-12 col-lg-7 order-1 order-md-1">
            <div className="h10-about-content-wrapper">
              <div className="sec-heading style-3">
                <span className="sub-title wow fadeInUp" data-wow-delay=".3s">EXECUTIVE LEADERSHIP</span>
                <h2 className="sec-title title-highlight wow fadeInUp" data-wow-delay=".3s">Strategic Vision and Operational Excellence in Educational Leadership.</h2>
              </div>
              <div className="row">
                <div className="col-12 col-md-6 d-none d-md-block d-lg-none">
                  <div className="about-img-area h10-about-banner wow bounceInRight" data-wow-delay=".3s">
                    <div className="about-img">
                      <img src="/assets/images/management/SHRI.S.OMMSHARRAVANA.webp" alt="Shri. S. Ommsharravana - Management Team" />
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-12">
                  <div className="h10-about-content">
                    <div className="management-profile wow fadeInUp" data-wow-delay=".4s">
                      <h4 className="profile-name">Mr. S. Ommsharravana</h4>
                      <p className="profile-designation">DIRECTOR - JKKN EDUCATIONAL INSTITUTIONS</p>
                    </div>
                    <div className="management-message wow fadeInUp" data-wow-delay=".5s">
                      <p className="desc">
                        I heartily congratulate the college for taking an ardent and intense interest in molding the smart future of students. We are set to take the mission of implementing new education methodologies to enable quality learning. It also encourages independent thinking and helps the student in developing a wholesome personality so that they can contribute their best to the society and the country.
                      </p>
                      <p className="desc">
                        We work together to make JKKN the best temple of learning, guiding and encouraging them in their own way. JKKN aims to produce top-notch professionals with their colorful flag flying in the air of success in this pulsating world of competition.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-5 order-2 order-md-2 d-block d-md-none d-lg-block">
            <div className="about-img-area h10-about-banner wow bounceInRight" data-wow-delay=".3s">
              <div className="about-img overflow-hidden">
                <img src="/assets/images/management/SHRI.S.OMMSHARRAVANA.webp" alt="Shri. S. Ommsharravana - Management Team" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

