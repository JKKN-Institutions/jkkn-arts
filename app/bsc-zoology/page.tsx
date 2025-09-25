import Header from '../components/Header';
import Footer from '../components/Footer';
import OffcanvasMenu from '../components/OffcanvasMenu';
import Link from 'next/link';

export default function BScZoologyPage() {
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
                      <h1 className="banner-title title-anim">Bachelor of Science
                        <span> Zoology.</span>
                      </h1>
                    <div className="banner-desc-area wow fadeInUp" data-wow-delay=".7s">
                      <Link className="banner-link" href="#">
                        <span><i className="fas fa-arrow-right"></i></span>
                      </Link>
                      <div className="banner-desc">Study the diversity of animal life, their behavior, evolution, and ecological relationships in our comprehensive BSc Zoology program.</div>
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
                      <h6 className="customers-text wow fadeInUp" data-wow-delay=".5s">Happy students</h6>
                    </div>
                  </div>
                </div>
              </div>
              
            </section>
            {/* end: Banner Section */}

            {/* start: Department Zoology Section */}
            <section id="department-zoology" className="tj-choose-section section-gap">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="sec-heading text-center">
                      <span className="sub-title wow fadeInUp" data-wow-delay=".3s">
                        <i className="fas fa-box"></i>Department of Zoology
                      </span>
                      <h2 className="sec-title title-anim">Exploring Animal Life for a <span>Better Understanding</span></h2>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="department-content text-center wow fadeInUp" data-wow-delay=".5s">
                      <p className="desc mb-5">
                        The Department of Zoology was established in 1976. Subsequently, M.Sc, M.Phil and Ph.D programmes were started in 1979, 1984 and 2001 respectively.
                      </p>
                      <p className="desc mb-5">
                        The faculty members of the Department have been the Chairpersons and members of the Board of Studies in Periyar University and Sri Sarada College for Women, Salem.
                      </p>
                      <p className="desc mb-5">
                        The Faculty members have also acted as members of the Inspection Committee for various Colleges.
                      </p>
                      <p className="desc mb-5">
                        The faculty members have published around 65 papers in various Journals, Book chapters and Magazines and 10 books.
                      </p>
                      <p className="desc mb-5">
                        Few faculty members are members of the Editorial board of various Journals.
                      </p>
                      <p className="desc mb-5">
                        The Department has produced around 100 M.Phil scholars and 3 Ph.D scholars.
                      </p>
                      <p className="desc mb-5">
                        To enhance the research activity, our Department has organized a National Level Conference.
                      </p>
                      <p className="desc mb-5">
                        Many of our students have participated in Seminars and Conferences and received awards for best paper presentations.
                      </p>
                      <p className="desc mb-5">
                        Our students have brought credit to the Department and College by producing 39 University Ranks.
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
                        <h4 className="title">Vision</h4>
                        <p className="desc">To inspire students to explore and understand the fascinating world of animal life and biodiversity.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="choose-box right-swipe">
                      <div className="choose-content text-center">
                        <div className="choose-icon">
                          <i className="fas fa-award"></i>
                        </div>
                        <h4 className="title">Mission</h4>
                        <p className="desc">To provide comprehensive education in zoological sciences, fostering research, conservation awareness, and scientific thinking.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* end: Department Zoology Section */}

            
            
          </main>

          <Footer />
        </div>
      </div>
    </>
  );
}

