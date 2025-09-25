'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import OffcanvasMenu from '../../components/OffcanvasMenu';

export default function RoleResponsibilitiesPage() {
    return (
        <>
            <style jsx>{`
                .iqac-member-card {
                    background: #fff;
                    border-radius: 12px;
                    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
                    overflow: hidden;
                    transition: all 0.3s ease;
                    margin-bottom: 30px;
                    border: 1px solid #f0f0f0;
                }
                .iqac-member-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.12);
                    border-color: #007bff;
                }
                .member-info {
                    padding: 25px 20px;
                    text-align: center;
                }
                .member-name {
                    font-size: 18px;
                    font-weight: 600;
                    color: #333;
                    margin-bottom: 8px;
                    line-height: 1.3;
                }
                .member-designation {
                    color: #666;
                    font-size: 14px;
                    margin-bottom: 8px;
                    line-height: 1.4;
                }
                .member-role {
                    color: #007bff;
                    font-size: 13px;
                    font-weight: 500;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    background: rgba(0, 123, 255, 0.1);
                    padding: 4px 12px;
                    border-radius: 20px;
                    display: inline-block;
                }
                .section-subtitle {
                    font-size: 24px;
                    font-weight: 600;
                    color: #333;
                    margin-bottom: 30px;
                }
            `}</style>
            {/* start: Offcanvas Menu */}
            <OffcanvasMenu />
            {/* end: Offcanvas Menu */}

            {/* start: Hamburger Menu */}
            <div className="hamburger-area d-lg-none">
                <div className="hamburger_bg"></div>
                <div className="hamburger_wrapper">
                    <div className="hamburger_inner">
                        <div className="hamburger_top d-flex align-items-center justify-content-between">
                            <div className="hamburger_logo">
                                <a href="/" className="mobile_logo">
                                    <img src="/assets/images/logos/logo.png" alt="Logo" />
                                </a>
                            </div>
                            <div className="hamburger_close">
                                <button className="hamburger_close_btn"><i className="fa-thin fa-times"></i></button>
                            </div>
                        </div>
                        <div className="hamburger_menu">
                            <div className="mobile_menu"></div>
                        </div>
                        <div className="hamburger-infos">
                            <h5 className="hamburger-title">Contact Info</h5>
                            <div className="contact-info">
                                <div className="contact-item">
                                    <span className="subtitle">Phone</span>
                                    <a className="contact-link" href="tel:8089091313">808-909-1313</a>
                                </div>
                                <div className="contact-item">
                                    <span className="subtitle">Email</span>
                                    <a className="contact-link" href="mailto:info@bexon.com">info@bexon.com</a>
                                </div>
                                <div className="contact-item">
                                    <span className="subtitle">Location</span>
                                    <span className="contact-link">993 Renner Burg, West Rond, MT 94251-030</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hamburger-socials">
                        <h5 className="hamburger-title">Follow Us</h5>
                        <div className="social-links style-3">
                            <ul>
                                <li><a href="https://www.facebook.com/" target="_blank"><i className="fa-brands fa-facebook-f"></i></a></li>
                                <li><a href="https://www.instagram.com/" target="_blank"><i className="fa-brands fa-instagram"></i></a></li>
                                <li><a href="https://x.com/" target="_blank"><i className="fa-brands fa-x-twitter"></i></a></li>
                                <li><a href="https://www.linkedin.com/" target="_blank"><i className="fa-brands fa-linkedin-in"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* end: Hamburger Menu */}

            {/* start: Header Area */}
            <Header />
            {/* end: Header Area */}


            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <main id="primary" className="site-main">
                        <div className="top-space-15"></div>


                        {/* start: Banner Section */}
                        <section className="tj-banner-section h6-hero section-gap-x">
                            <div className="banner-area">
                                <div className="banner-left-box">
                                    <div className="banner-content">
                                        <h1 className="banner-title title-anim">IQAC Role & Responsibilities
                                        </h1>
                                        <p>The Internal Quality Assurance Cell (IQAC) plays a crucial role in ensuring quality enhancement and continuous improvement in all aspects of institutional functioning. Our dedicated team works towards maintaining and enhancing the quality standards of our educational institution.</p>
                                        <div className="btn-area wow fadeInUp" data-wow-delay=".8s">
                                            <a className="tj-primary-btn" href="#">
                                                <span className="btn-text"><span>Contact Us</span></span>
                                                <span className="btn-icon"><i className="fas fa-arrow-right-long"></i></span>
                                            </a>
                                        </div>

                                        
                                        <div className="bg-shape-2">
                                            <img src="/assets/images/shape/pattern-3.svg" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="banner-right-box">
                                    <div className="banner-img wow fadeInUp" data-wow-delay=".3s">
                                        <img data-speed=".8" src="/assets/images/hero/h6-hero-banner.webp" alt="" />
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* end: Banner Section */}

                        

                        {/* start: Role & Responsibilities Section */}
                        <section className="tj-choose-section h6-choose section-gap">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="sec-heading style-2 style-6 text-center">
                                            <span className="sub-title wow fadeInUp" data-wow-delay=".3s">
                                                <i className="fas fa-box"></i>IQAC Role & Responsibilities
                                            </span>
                                            <h2 className="sec-title title-anim">Key Areas of Focus</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="row row-gap-4 rightSwipeWrap">
                                    <div className="col-lg-6">
                                        <div className="choose-box h6-choose-box right-swipe">
                                            <div className="choose-content">
                                                <div className="choose-icon">
                                                    <i className="fas fa-innovative"></i>
                                                </div>
                                                <h4 className="title">Quality Assurance Systems</h4>
                                                <p className="desc">To ensure institutionalization of quality assurance through established systems</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="choose-box h6-choose-box right-swipe">
                                            <div className="choose-content">
                                                <div className="choose-icon">
                                                    <i className="fas fa-award"></i>
                                                </div>
                                                <h4 className="title">Departmental Oversight</h4>
                                                <p className="desc">To oversee the activities carried out by the Departments in conjunction with the vision and mission of the Institution</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="choose-box h6-choose-box right-swipe">
                                            <div className="choose-content">
                                                <div className="choose-icon">
                                                    <i className="fas fa-support"></i>
                                                </div>
                                                <h4 className="title">Policy Administration</h4>
                                                <p className="desc">To administer policies to govern the functions of the Institution for the overall development</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="choose-box h6-choose-box right-swipe">
                                            <div className="choose-content">
                                                <div className="choose-icon">
                                                    <i className="fas fa-innovative"></i>
                                                </div>
                                                <h4 className="title">Process Review</h4>
                                                <p className="desc">To review the process of the Institution through academic, administrative and financial audits</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="choose-box h6-choose-box right-swipe">
                                            <div className="choose-content">
                                                <div className="choose-icon">
                                                    <i className="fas fa-award"></i>
                                                </div>
                                                <h4 className="title">Student Engagement</h4>
                                                <p className="desc">To encourage the students to participate in co-curricular and extra-curricular activities</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="choose-box h6-choose-box right-swipe">
                                            <div className="choose-content">
                                                <div className="choose-icon">
                                                    <i className="fas fa-support"></i>
                                                </div>
                                                <h4 className="title">Environmental Awareness</h4>
                                                <p className="desc">To sensitize young minds to maintain a plastic-free environment</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="choose-box h6-choose-box right-swipe">
                                            <div className="choose-content">
                                                <div className="choose-icon">
                                                    <i className="fas fa-innovative"></i>
                                                </div>
                                                <h4 className="title">Skill Development</h4>
                                                <p className="desc">To tap the inherent skills of the pupils through inter and intra-Department/Collegiate competitions</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="choose-box h6-choose-box right-swipe">
                                            <div className="choose-content">
                                                <div className="choose-icon">
                                                    <i className="fas fa-award"></i>
                                                </div>
                                                <h4 className="title">Expert Collaboration</h4>
                                                <p className="desc">To invite external experts to bridge the void between the potential of the students with the ground reality</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="choose-box h6-choose-box right-swipe">
                                            <div className="choose-content">
                                                <div className="choose-icon">
                                                    <i className="fas fa-support"></i>
                                                </div>
                                                <h4 className="title">Community Development</h4>
                                                <p className="desc">To enhance the level of under-privileged people by means of reciprocal activities</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="choose-box h6-choose-box right-swipe">
                                            <div className="choose-content">
                                                <div className="choose-icon">
                                                    <i className="fas fa-innovative"></i>
                                                </div>
                                                <h4 className="title">Sports Recognition</h4>
                                                <p className="desc">To kindle and recognize the spirit and activities of sports</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* end: Role & Responsibilities Section */}

                        {/* start: IQAC Panel Section */}
                        <section className="tj-about-section h6-about section-gap section-gap-x" style={{ backgroundColor: '#f8f9fa' }}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="sec-heading style-2 style-6 text-center">
                                            <span className="sub-title wow fadeInUp" data-wow-delay=".3s" style={{ backgroundColor: '#f8f9fa', color: '#000' }}><i className="fas fa-box"></i>IQAC PANEL</span>
                                            <h2 className="sec-title title-anim">Our Dedicated Team Members</h2>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Faculty Members Cards */}
                                <div className="row">
                                    <div className="col-12">
                                        <h3 className="section-subtitle text-center mb-5 wow fadeInUp" data-wow-delay=".4s">Faculty Members</h3>
                                    </div>
                                </div>
                                <div className="row row-gap-4">
                                    <div className="col-lg-4 col-md-6">
                                        <div className="iqac-member-card wow fadeInUp" data-wow-delay=".2s">
                                            <div className="member-info">
                                                <h4 className="member-name">Mrs. C. Seeranganayaki</h4>
                                                <p className="member-designation">Associate Professor of Commerce</p>
                                                <p className="member-role">Coordinator</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="iqac-member-card wow fadeInUp" data-wow-delay=".3s">
                                            <div className="member-info">
                                                <h4 className="member-name">Mrs. K. Veena</h4>
                                                <p className="member-designation">Assistant Professor of Computer Science</p>
                                                <p className="member-role">Member</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="iqac-member-card wow fadeInUp" data-wow-delay=".4s">
                                            <div className="member-info">
                                                <h4 className="member-name">Dr. S. Sumathi</h4>
                                                <p className="member-designation">Assistant Professor of English</p>
                                                <p className="member-role">Member</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="iqac-member-card wow fadeInUp" data-wow-delay=".5s">
                                            <div className="member-info">
                                                <h4 className="member-name">Dr. S. V. Ramesh</h4>
                                                <p className="member-designation">Assistant Professor of Commerce</p>
                                                <p className="member-role">Member</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="iqac-member-card wow fadeInUp" data-wow-delay=".6s">
                                            <div className="member-info">
                                                <h4 className="member-name">Dr. K. Kalaiselvi</h4>
                                                <p className="member-designation">Assistant Professor of Chemistry</p>
                                                <p className="member-role">Member</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="iqac-member-card wow fadeInUp" data-wow-delay=".7s">
                                            <div className="member-info">
                                                <h4 className="member-name">Mrs. G. Malaiyammal</h4>
                                                <p className="member-designation">Assistant Professor of Commerce</p>
                                                <p className="member-role">Member</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="iqac-member-card wow fadeInUp" data-wow-delay=".8s">
                                            <div className="member-info">
                                                <h4 className="member-name">Mr. S. Balaji</h4>
                                                <p className="member-designation">Assistant Professor of Computer Science</p>
                                                <p className="member-role">Member</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* External Members */}
                                <div className="row mt-5">
                                    <div className="col-12">
                                        <h3 className="section-subtitle text-center mb-5 wow fadeInUp" data-wow-delay=".4s">External Members</h3>
                                    </div>
                                </div>
                                <div className="row row-gap-4">
                                    <div className="col-lg-4 col-md-6">
                                        <div className="iqac-member-card wow fadeInUp" data-wow-delay=".5s">
                                            <div className="member-info">
                                                <h4 className="member-name">Suresh Baskaran</h4>
                                                <p className="member-designation">Local Nominee</p>
                                                <p className="member-role">MD & Centre Head, CSC Computer Education</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="iqac-member-card wow fadeInUp" data-wow-delay=".6s">
                                            <div className="member-info">
                                                <h4 className="member-name">Mr. S.K.P. Murugan</h4>
                                                <p className="member-designation">Industrialist</p>
                                                <p className="member-role">External Member</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="iqac-member-card wow fadeInUp" data-wow-delay=".7s">
                                            <div className="member-info">
                                                <h4 className="member-name">Mrs. T. Radhiga</h4>
                                                <p className="member-designation">Alumna</p>
                                                <p className="member-role">Principal JKKN Matriculation School</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Student Representatives */}
                                <div className="row mt-5">
                                    <div className="col-12">
                                        <h3 className="section-subtitle text-center mb-5 wow fadeInUp" data-wow-delay=".4s">Student Representatives</h3>
                                    </div>
                                </div>
                                <div className="row row-gap-4">
                                    <div className="col-lg-6 col-md-6">
                                        <div className="iqac-member-card wow fadeInUp" data-wow-delay=".5s">
                                            <div className="member-info">
                                                <h4 className="member-name">Ms. V. Nila</h4>
                                                <p className="member-designation">III B.A. English (2019-2022)</p>
                                                <p className="member-role">Student Representative</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="iqac-member-card wow fadeInUp" data-wow-delay=".6s">
                                            <div className="member-info">
                                                <h4 className="member-name">Ms. S. Arularasi</h4>
                                                <p className="member-designation">II B.Sc. Computer Science (2019-2022)</p>
                                                <p className="member-role">Student Representative</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* end: IQAC Panel Section */}

                        <br />
                    </main>

                    {/* start: Footer Section */}
                    <Footer />
                    {/* end: Footer Section */}
                </div>
            </div>
        </>
    );
}

