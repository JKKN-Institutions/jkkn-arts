import Header from '../components/Header';
import Footer from '../components/Footer';
import OffcanvasMenu from '../components/OffcanvasMenu';
import Link from 'next/link';

export default function MComPage() {
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
                                        <h1 className="banner-title title-anim">Master of Commerce - Advanced
                                            <span>Commerce Education.</span>
                                        </h1>
                                        <div className="banner-desc-area wow fadeInUp" data-wow-delay=".7s">
                                            <Link className="banner-link" href="#">
                                                <span><i className="fas fa-arrow-right"></i></span>
                                            </Link>
                                            <div className="banner-desc">JKKN College of Arts & Science offers a comprehensive M.Com program designed to provide advanced knowledge in accounting, finance, taxation, economics, and business management.</div>
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
                                                <p className="desc">Advanced knowledge and skills in accounting, finance, taxation, economics, business management, and marketing to prepare students for professional excellence.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="choose-box right-swipe">
                                            <div className="choose-content text-center">
                                                <div className="choose-icon">
                                                    <i className="fas fa-award"></i>
                                                </div>
                                                <h4 className="title">Career Preparation</h4>
                                                <p className="desc">Equipping students for careers in accounting, banking, finance, and commerce-related research and academia with critical thinking and problem-solving skills.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* end: Department Commerce Section */}

                        {/* start: Department Commerce Section */}
                        <section id="department-commerce" className="tj-about-section section-gap">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-xl-6 col-lg-6">
                                        <div className="about-img-area wow fadeInLeft" data-wow-delay=".3s">
                                            <div className="about-img overflow-hidden">
                                                <img data-speed=".8" src="/assets/images/img/Campus-Life.png" alt="M.Com Program" />
                                            </div>
                                            <div className="box-area">
                                                <div className="progress-box wow fadeInUp" data-wow-delay=".5s">
                                                    <h4 className="title">M.Com </h4>
                                                </div>
                                            </div>
                                                                </div>
                                                            </div>
                                    <div className="col-xl-6 col-lg-6">
                                        <div className="about-content-area">
                                            <div className="sec-heading style-3">
                                                <span className="sub-title wow fadeInUp" data-wow-delay=".3s">
                                                    <i className="fas fa-box"></i>JKKN College of Arts & Science
                                                </span>
                                                <h2 className="sec-title title-anim">Master of Commerce Program for <span>Professional Excellence</span></h2>
                                            </div>
                                            <div className="about-content wow fadeInUp" data-wow-delay=".5s">
                                                <p className="desc">
                                                    JKKN College of Arts & Science offers a Master of Commerce (M.Com) program, which is a postgraduate degree in the field of commerce. The M.Com program is designed to provide students with advanced knowledge and skills in areas such as accounting, finance, taxation, economics, business management, and marketing.
                                                </p>
                                                <p className="desc">
                                                    The program is structured to equip students with a deep understanding of theoretical concepts and practical applications related to commerce and business, and prepare them for careers in fields such as accounting, banking, finance, and commerce-related research and academia.
                                                </p>
                                                <div className="about-features">
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <div className="feature-item">
                                                                <div className="feature-icon">
                                                                    <i className="fas fa-lightbulb"></i>
                                                                </div>
                                                                <h5>Program Focus</h5>
                                                                <p>Advanced knowledge in accounting, finance, taxation, economics, and business management.</p>
                                                                </div>
                                                            </div>
                                                        <div className="col-md-6">
                                                            <div className="feature-item">
                                                                <div className="feature-icon">
                                                                    <i className="fas fa-award"></i>
                                                                </div>
                                                                <h5>Career Preparation</h5>
                                                                <p>Critical thinking and problem-solving skills for professional excellence.</p>
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
                        {/* end: Department Commerce Section */}


                    </main>

                    <Footer />
                </div>
            </div>
        </>
    );
}

