import Header from '../components/Header';
import Footer from '../components/Footer';
import OffcanvasMenu from '../components/OffcanvasMenu';
import Link from 'next/link';

export default function MScZoologyPage() {
    return (
        <>
            <OffcanvasMenu />

            <Header />



            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <main id="primary" className="site-main">
                        <div className="space-for-header"></div>
                        <br />
                        {/* start: Banner Section */}
                        <section className="tj-banner-section section-gap-x">
                            <div className="banner-area">
                                <div className="banner-left-box">
                                    <div className="banner-content">
                                        <span className="sub-title wow fadeInDown" data-wow-delay=".2s">
                                            <i className="fas fa-award"></i> JKKN
                                        </span>
                                        <h1 className="banner-title title-anim">Master of Science in Zoology - Advanced
                                            <span>Animal Sciences.</span>
                                        </h1>
                                        <div className="banner-desc-area wow fadeInUp" data-wow-delay=".7s">
                                            <Link className="banner-link" href="#">
                                                <span><i className="fas fa-arrow-right"></i></span>
                                            </Link>
                                            <div className="banner-desc">The Department of Zoology was established in 1976, offering comprehensive M.Sc, M.Phil and Ph.D programs in animal sciences with extensive research and academic excellence.</div>
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
                                            <h6 className="customers-text wow fadeInUp" data-wow-delay=".5s">Happy Students</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </section>
                        {/* end: Banner Section */}

                        {/* start: Department Commerce Section */}
                        <section id="department-commerce" className="tj-about-section section-gap">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-xl-6 col-lg-6">
                                        <div className="about-img-area wow fadeInLeft" data-wow-delay=".3s">
                                            <div className="about-img overflow-hidden">
                                                <img data-speed=".8" src="/assets/images/img/Campus-Life.png" alt="M.Sc Zoology Program" />
                                            </div>
                                            <div className="box-area">
                                                <div className="progress-box wow fadeInUp" data-wow-delay=".5s">
                                                    <h4 className="title">M.Sc Zoology</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6">
                                        <div className="about-content-area">
                                            <div className="sec-heading style-3">
                                                <span className="sub-title wow fadeInUp" data-wow-delay=".3s">
                                                    <i className="fas fa-box"></i>Department of Zoology
                                                </span>
                                                <h2 className="sec-title title-anim">Master of Science in Zoology for <span>Scientific Excellence</span></h2>
                                            </div>
                                            <div className="about-content wow fadeInUp" data-wow-delay=".5s">
                                                <p className="desc">
                                                    The Department of Zoology was established in 1976. Subsequently, M.Sc, M.Phil and Ph.D programmes were started in 1979, 1984 and 2001 respectively. The faculty members have been the Chairpersons and members of the Board of Studies in Periyar University and Sri Sarada College for Women, Salem.
                                                </p>
                                                <p className="desc">
                                                    The faculty members have published around 65 papers in various Journals, Book chapters and Magazines and 10 books. The Department has produced around 100 M.Phil scholars and 3 Ph.D scholars. Our students have brought credit to the Department and College by producing 39 University Ranks.
                                                </p>
                                                <div className="about-features">
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <div className="feature-item">
                                                                <div className="feature-icon">
                                                                    <i className="fas fa-lightbulb"></i>
                                                                </div>
                                                                <h5>Program Outcomes</h5>
                                                                <p>Students gain knowledge in animal sciences, understand complex interactions among living organisms and their environment.</p>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="feature-item">
                                                                <div className="feature-icon">
                                                                    <i className="fas fa-award"></i>
                                                                </div>
                                                                <h5>Program Specific Outcomes</h5>
                                                                <p>Understanding cell biology, genetics, taxonomy, physiology, ecology and applied Zoology with evolutionary perspectives.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="about-btn-area wow fadeInUp" data-wow-delay=".7s">
                                                    <Link className="tj-primary-btn" href="#">
                                                        <span className="btn-text"><span>Apply Now</span></span>
                                                        <span className="btn-icon"><i className="fas fa-arrow-right"></i></span>
                                                    </Link>
                                                </div>
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
                        {/* end: Department Zoology Section */}

                        {/* start: Programme Outcomes Section */}
                        <section className="tj-service-section section-gap">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="sec-heading style-3 sec-heading-centered">
                                            <span className="sub-title wow fadeInUp" data-wow-delay=".3s">
                                                <i className="fas fa-box"></i>Programme Outcomes
                                            </span>
                                            <h2 className="sec-title title-anim">M.Sc Zoology Learning Outcomes and Objectives.</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="service-wrapper wow fadeInUp" data-wow-delay=".5s">
                                            <div className="row">
                                                <div className="col-12 col-md-6 col-xl-4">
                                                    <div className="service-item">
                                                        <div className="service-icon">
                                                            <i className="fas fa-dna" style={{ fontSize: '20px' }}></i>
                                                        </div>
                                                        <h4 className="title">Programme Specific Outcomes (PSOs)</h4>
                                                        <div className="service-content">
                                                            <ul className="list-items">
                                                                <li><i className="fas fa-check"></i>Understood the nature and basic concepts of cell biology, genetics, taxonomy, physiology, ecology and applied Zoology.</li>
                                                                <li><i className="fas fa-check"></i>Subjects such as invasive or endangered species, embryonic development in mammals and ageing in social insects, lead to advances in medicine.</li>
                                                                <li><i className="fas fa-check"></i>Developed knowledge on living organisms at several levels of Zoological and Biological organization from the molecular, through cells to whole organisms and ecosystems of evolutionary perspectives.</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-6 col-xl-4">
                                                    <div className="service-item">
                                                        <div className="service-icon">
                                                            <i className="fas fa-microscope" style={{ fontSize: '20px' }}></i>
                                                        </div>
                                                        <h4 className="title">Programme Outcomes (POs)</h4>
                                                        <div className="service-content">
                                                            <ul className="list-items">
                                                                <li><i className="fas fa-check"></i>Students gain knowledge and skill in the fundamentals of animal sciences, understand the complex interactions among various living organisms.</li>
                                                                <li><i className="fas fa-check"></i>Analyze complex interactions among the various animals of different phyla, their distribution and their relationship with the environment.</li>
                                                                <li><i className="fas fa-check"></i>Apply the knowledge of internal structure of cell and its functions in control of various metabolic functions of organisms.</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-6 col-xl-4">
                                                    <div className="service-item">
                                                        <div className="service-icon">
                                                            <i className="fas fa-flask" style={{ fontSize: '20px' }}></i>
                                                        </div>
                                                        <h4 className="title">Advanced Learning</h4>
                                                        <div className="service-content">
                                                            <ul className="list-items">
                                                                <li><i className="fas fa-check"></i>Understands the complex evolutionary processes and behaviour of animals.</li>
                                                                <li><i className="fas fa-check"></i>Correlates the physiological processes of animals and relationship of organ systems.</li>
                                                                <li><i className="fas fa-check"></i>Research activities include national level conferences and best paper presentation awards.</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* end: Programme Outcomes Section */}

                        {/* start: Department Commerce Section */}
                        <section id="department-commerce" className="tj-choose-section section-gap">
                            <div className="container">
                            
                                <div className="row row-gap-4 rightSwipeWrap">
                                    <div className="col-lg-6">
                                        <div className="choose-box right-swipe">
                                            <div className="choose-content text-center">
                                                <div className="choose-icon">
                                                    <i className="fas fa-lightbulb"></i>
                                                </div>
                                                <h4 className="title">Program Focus</h4>
                                                <p className="desc">Advanced knowledge in cell biology, genetics, taxonomy, physiology, ecology and applied Zoology with focus on evolutionary perspectives and biological organization.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="choose-box right-swipe">
                                            <div className="choose-content text-center">
                                                <div className="choose-icon">
                                                    <i className="fas fa-award"></i>
                                                </div>
                                                <h4 className="title">Research Excellence</h4>
                                                <p className="desc">Faculty members have published 65 papers in journals, authored 10 books, and produced 100 M.Phil and 3 Ph.D scholars with national conference organization.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* end: Department Commerce Section */}

                    </main>

                    <Footer />
                </div>
            </div>
        </>
    );
}

