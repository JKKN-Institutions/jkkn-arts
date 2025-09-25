import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import OffcanvasMenu from '../../components/OffcanvasMenu';

export default function LibraryPage() {
  return (
    <>
      <OffcanvasMenu />

      <Header />

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main id="primary" className="site-main">
            <br />
            <div className="space-for-header"></div>
            {/* start: Breadcrumb Section */}
            <section className="tj-page-header section-gap-x" data-bg-image="/assets/images/bg/pheader-bg.webp">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="tj-page-header-content text-center">
                      <h1 className="tj-page-title">Library</h1>
                      <div className="tj-page-link">
                        <span><i className="fas fa-home"></i></span>
                        <span>
                          <Link href="/">Home</Link>
                        </span>
                        <span><i className="fas fa-arrow-right"></i></span>
                        <span>
                          <span>Facilities</span>
                        </span>
                        <span><i className="fas fa-arrow-right"></i></span>
                        <span>
                          <span>Library</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="page-header-overlay" data-bg-image="/assets/images/shape/pheader-overlay.webp"></div>
            </section>
            {/* end: Breadcrumb Section */}

            {/* start: Choose Section */}
            <section id="choose" className="tj-choose-section section-gap">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="sec-heading-wrap">
                      <span className="sub-title wow fadeInUp" data-wow-delay=".3s"><i className="fas fa-box"></i>College
                        Library</span>
                      <div className="heading-wrap-content">
                        <div className="sec-heading">
                          <h2 className="sec-title title-anim">Knowledge Hub for <span>Academic Excellence.</span></h2>
                        </div>
                        <div className="btn-wrap wow fadeInUp" data-wow-delay=".6s">
                          <Link className="tj-primary-btn" href="#">
                            <span className="btn-text"><span>Visit Library</span></span>
                            <span className="btn-icon"><i className="fa-solid fa-arrow-right-long"></i></span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row row-gap-4 rightSwipeWrap">
                  <div className="col-lg-4">
                    <div className="choose-box right-swipe">
                      <div className="choose-content">
                        <div className="choose-icon">
                          <i className="fas fa-solid fa-lightbulb"></i>
                        </div>
                        <h4 className="title">Modern Facilities</h4>
                        <p className="desc">Equipped with advanced automation software "Campes I Lib" and barcode technology for efficient book transactions and seamless user experience.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="choose-box right-swipe">
                      <div className="choose-content">
                        <div className="choose-icon">
                          <i className="fas fa-solid fa-book"></i>
                        </div>
                        <h4 className="title">Extensive Collection</h4>
                        <p className="desc">Over 26,700 books, 23 journals, 31 magazines, 636 back volumes, and access to 6,00,000 e-books through National Digital Library.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="choose-box right-swipe">
                      <div className="choose-content">
                        <div className="choose-icon">
                          <i className="fas fa-solid fa-globe"></i>
                        </div>
                        <h4 className="title">Digital Resources</h4>
                        <p className="desc">WEB OPAC service, digital library with 10 computer systems, internet facilities, and remote access to e-resources through N-LIST program.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* end: Choose Section */}

            {/* start: About Section */}
            <section className="tj-about-section-2 section-gap section-gap-x">
              <div className="container">
                <div className="row">
                  <div className="col-xl-6 col-lg-6 order-lg-1 order-2">
                    <div className="about-img-area style-2 wow fadeInLeft" data-wow-delay=".3s">
                      <div className="about-img overflow-hidden">
                        <img data-speed=".8" src="/assets/images/img/Campus-Life.png" alt="" style={{ width: '100%', height: 'auto', maxHeight: '320px', objectFit: 'cover' }} />
                      </div>

                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 order-lg-2 order-1">
                    <div className="about-content-area">
                      <div className="sec-heading">
                        <span className="sub-title wow fadeInUp" data-wow-delay=".3s"><i className="fas fa-box"></i>About Our
                          Library</span>
                        <h2 className="sec-title title-anim">Established in 1974, Serving Academic Excellence for
                          <span>50 Years.</span>
                        </h2>
                      </div>
                      <p className="desc wow fadeInUp" data-wow-delay=".4s">
                        Established in 1974, College Library serves as an invaluable knowledge hub for students and faculty members, fostering academic growth and intellectual exploration. Spanning an area of 3,328 square feet with a seating capacity for 130 readers, the library is thoughtfully designed to provide a comfortable and conducive environment for learning.
                      </p>
                      <p className="desc wow fadeInUp" data-wow-delay=".5s">
                        It boasts a remarkable collection of over 26,700 books across diverse disciplines, 23 esteemed national and international journals, 31 magazines, 4 newspapers, 636 back volumes, and a wealth of e-resources. Recent publications and journals in the fields of arts, science, and social sciences further enrich the library's comprehensive offerings, along with access to online resources through the N-LIST program under UGC-INFONET, available free of cost.
                      </p>
                    </div>
                    <div className="about-bottom-area">
                      <div className="mission-vision-box wow fadeInLeft" data-wow-delay=".5s">
                        <h4 className="title">Our Mission</h4>
                        <ul className="list-items">
                          <li><i className="fas fa-list"></i>Provide comprehensive access to diverse learning resources and services to the academic community</li>
                          <li><i className="fas fa-list"></i>Provide a technologically advanced, inclusive, and student-centric environment for holistic research and academic enrichment</li>
                        </ul>
                      </div>
                      <div className="mission-vision-box wow fadeInRight" data-wow-delay=".5s">
                        <h4 className="title">Our Vision</h4>
                        <p className="desc">To be a dynamic hub of knowledge, empowering students and faculty with resources, technology, and inspiration to achieve academic excellence and foster lifelong learning.
                        </p>
                      </div>
                    </div>
                    <div className="about-btn-area wow fadeInUp" data-wow-delay=".6s">
                      <div className="library-hours">
                        <h5 className="title">Working Hours</h5>
                        <p><strong>Monday to Friday:</strong> 9:00 AM  4:45 PM</p>
                        <p><strong>Book Issue & Return:</strong> 9:00 AM  4:30 PM</p>
                        <p><strong>Contact:</strong> <a href="mailto:jkkncaslibrary@gmail.com">jkkncaslibrary@gmail.com</a></p>
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
            {/* end: About Section */}

            {/* start: Library Rules Section */}
            <section className="tj-faq-section section-gap">
              <div className="container">
                <div className="row justify-content-between">
                  <div className="col-lg-4">
                    <div className="content-wrap">
                      <div className="sec-heading">
                        <span className="sub-title wow fadeInUp" data-wow-delay=".3s"><i className="fas fa-box"></i>Library
                          Guidelines</span>
                        <h2 className="sec-title title-anim">Rules & <span>Regulations</span></h2>
                      </div>
                      <p className="desc wow fadeInUp" data-wow-delay=".6s">Please follow these guidelines to ensure a peaceful and productive environment for all library users.</p>
                      <div className="wow fadeInUp" data-wow-delay=".8s">
                        <a className="tj-primary-btn" href="https://jkkncaslibrary.wordpress.com/" target="_blank">
                          <span className="btn-text"><span>Visit Library Blog</span></span>
                          <span className="btn-icon"><i className="fa-solid fa-arrow-right-long"></i></span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <div className="accordion tj-faq" id="faqOne">
                      <div className="accordion-item active wow fadeInUp" data-wow-delay=".3s">
                        <button className="faq-title" type="button" data-bs-toggle="collapse" data-bs-target="#faq-0" aria-expanded="true">
                          <span className="btn-text"><span>General Library Rules</span></span>
                          <span className="btn-icon"><i className="fa-solid fa-arrow-right-long"></i></span>
                        </button>
                        <div id="faq-0" className="collapse show" data-bs-parent="#faqOne">
                          <div className="accordion-body faq-text">
                            <ul>
                              <li>Silence should be strictly maintained in the library</li>
                              <li>Students and staff must scan their ID cards at the E-gate register scanner when entering</li>
                              <li>Personal books and files are not allowed inside the library. Only plain sheets for notes may be brought in</li>
                              <li>Books will be issued solely upon presentation of a valid ID card</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item wow fadeInUp" data-wow-delay=".4s">
                        <button className="faq-title collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-2" aria-expanded="false">
                          <span className="btn-text"><span>Borrowing Guidelines</span></span>
                          <span className="btn-icon"><i className="fa-solid fa-arrow-right-long"></i></span>
                        </button>
                        <div id="faq-2" className="collapse" data-bs-parent="#faqOne">
                          <div className="accordion-body faq-text">
                            <ul>
                              <li>Undergraduate students may borrow two books</li>
                              <li>Postgraduate students may borrow three books</li>
                              <li>Research scholars may borrow five books at a time</li>
                              <li>Books are issued for 14 days, with renewal option based on demand</li>
                              <li>Fine of Rs.2 per day will be charged for overdue books</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item wow fadeInUp" data-wow-delay=".5s">
                        <button className="faq-title collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-3" aria-expanded="false">
                          <span className="btn-text"><span>Damage and Loss Policy</span></span>
                          <span className="btn-icon"><i className="fa-solid fa-arrow-right-long"></i></span>
                        </button>
                        <div id="faq-3" className="collapse" data-bs-parent="#faqOne">
                          <div className="accordion-body faq-text">
                            <ul>
                              <li>Any form of damage to books (underlining, scribbling, tearing pages) will attract penalties</li>
                              <li>Borrowers must inspect books for damages before borrowing</li>
                              <li>Lost or damaged books must be replaced, or penalty equivalent to three times the cost will be imposed</li>
                              <li>Students must clear all dues before obtaining certificates</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item wow fadeInUp" data-wow-delay=".6s">
                        <button className="faq-title collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-4" aria-expanded="false">
                          <span className="btn-text"><span>Library Services</span></span>
                          <span className="btn-icon"><i className="fa-solid fa-arrow-right-long"></i></span>
                        </button>
                        <div id="faq-4" className="collapse" data-bs-parent="#faqOne">
                          <div className="accordion-body faq-text">
                            <ul>
                              <li>Automated and Barcoded Circulation</li>
                              <li>Reference Service and User Awareness Service</li>
                              <li>Internet Browsing and WEB OPAC</li>
                              <li>Current Awareness Service and New Arrivals Display</li>
                              <li>Remote Access to E-Resources through N-LIST</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* end: Library Rules Section */}

            {/* start: Faculty Section */}
            <section className="h8-team section-gap section-gap-x">
              <div className="container">
                <div className="row h8-team-wrapper gap-0">
                  <div className="col-lg-3 col-sm-6">
                    <div className="sec-heading style-3">
                      <span className="sub-title wow fadeInUp" data-wow-delay=".3s">MEET OUR STAFF</span>
                      <h2 className="sec-title title-anim">Dedicated Library Staff.</h2>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 h8-team-item-wrapper">
                    <div className="team-item wow fadeInRightBig" data-wow-delay=".2s">
                      <div className="team-img">
                        <div className="team-img-inner">
                          <img src="/assets/images/team/library-aided/sasikala.png" alt="" />
                        </div>
                        <div className="social-links">
                          <ul>
                            <li><a href="mailto:jkkncaslibrary@gmail.com" target="_blank"><i className="fa-solid fa-envelope"></i></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="team-content">
                        <h5 className="title">Dr. S. Sasikala</h5>
                        <span className="designation">Librarian</span>
                        <p className="qualification">B.Com., M.L.I.S., Ph.D., PGDLAN., NET</p>
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
            {/* end: Faculty Section */}

            <br /><br />
          </main>

          <Footer />
        </div>
      </div>
    </>
  );
}


