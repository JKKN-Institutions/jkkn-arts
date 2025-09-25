import Header from '../../components/Header';
import Footer from '../../components/Footer';
import OffcanvasMenu from '../../components/OffcanvasMenu';

export default function TransportPage() {
    return (
        <>
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


                        {/* start: About Section */}
                        <section className="tj-about-section h6-about section-gap section-gap-x" style={{ backgroundColor: '#d8e5e5' }}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-6 col-lg-6">
                                        <div className="about-content-area h6-about-content style-1 wow fadeInLeft" data-wow-delay=".2s">
                                            <div className="sec-heading style-2 style-6">
                                                <span className="sub-title wow fadeInUp" data-wow-delay=".3s" style={{ backgroundColor: '#d8e5e5', color: '#000' }}><i className="fas fa-box"></i>OUR TRANSPORT FACILITY</span>
                                                <p className="desc wow fadeInUp" data-wow-delay=".8s" style={{ color: '#6b7474' }}>Transportation is an essential aspect of any educational institution. It provides students and faculty members with a convenient way to reach the campus and enhances the overall educational experience. JKKN Educational Institutions understand the importance of transportation and have made significant efforts to improve their transport facilities. Here are some of the best features of the transport facility at JKKN Educational Institutions.</p>
                                                
                                                <div className="desc wow fadeInUp" data-wow-delay=".8s" style={{ color: '#6b7474' }}>
                                                    <h6 style={{ color: '#000', fontWeight: 'bold', marginTop: '20px', marginBottom: '10px' }}>Well-Maintained Buses:</h6>
                                                    <p>The transport facility at JKKN Educational Institutions is equipped with a well-maintained fleet of buses. These buses are regularly serviced and cleaned to ensure the safety and comfort of the passengers. Moreover, the buses are equipped with modern amenities like air-conditioning, comfortable seating, and GPS tracking.</p>
                                                    
                                                    <h6 style={{ color: '#000', fontWeight: 'bold', marginTop: '20px', marginBottom: '10px' }}>Trained Drivers:</h6>
                                                    <p>The drivers who operate the buses at JKKN Educational Institutions are highly trained and experienced. They have a good understanding of the local routes and traffic conditions, which helps them provide a safe and efficient transportation service. Additionally, they undergo regular training sessions to keep their skills up-to-date.</p>
                                                    
                                                    <h6 style={{ color: '#000', fontWeight: 'bold', marginTop: '20px', marginBottom: '10px' }}>Affordable Fees:</h6>
                                                    <p>The transport facility at JKKN Educational Institutions is available to all students and faculty members at an affordable fee. The fee is calculated based on the distance of the student's residence from the campus, ensuring that the transportation cost is reasonable for everyone.</p>
                                                    
                                                    <h6 style={{ color: '#000', fontWeight: 'bold', marginTop: '20px', marginBottom: '10px' }}>Safe and Secure:</h6>
                                                    <p>The safety and security of the passengers are of utmost importance at JKKN Educational Institutions. The buses are equipped with CCTV cameras, and there are female attendants on board to ensure the safety of female passengers. Additionally, the transport facility operates within a strict set of rules and regulations, ensuring that the passengers are always safe.</p>
                                                    
                                                    <h6 style={{ color: '#000', fontWeight: 'bold', marginTop: '20px', marginBottom: '10px' }}>Timely Service:</h6>
                                                    <p>The transport facility at JKKN Educational Institutions operates on a strict schedule, ensuring that the buses arrive and depart from the campus on time. This allows the students and faculty members to plan their day accordingly, without worrying about delays or missed buses.</p>
                                                    
                                                    <h6 style={{ color: '#000', fontWeight: 'bold', marginTop: '20px', marginBottom: '10px' }}>Accessibility:</h6>
                                                    <p>The transport facility at JKKN Educational Institutions is accessible to all students, regardless of their physical abilities. The buses are equipped with wheelchair ramps and other accessibility features, making it easy for students with disabilities to use the service.</p>
                                                    
                                                    <p style={{ marginTop: '20px', fontWeight: 'bold' }}>The transport facility at JKKN Educational Institutions is well-equipped to provide safe, reliable, and affordable transportation to all its students and faculty members. The institution has taken significant steps to ensure that the transport facility is accessible, secure, and comfortable for everyone.</p>
                                                </div>
                                            </div>
                                            <div className="h6-about-funfact-wrapper">

                                                <div className="h6-about-funfact-shape">
                                                    <img src="/assets/images/shape/about-counter-shape-blur.svg" alt="" />
                                                </div>
                                            </div>

                                            <div className="btn-area wow fadeInUp" data-wow-delay=".8s">
                                                <a className="tj-primary-btn" href="#">
                                                    <span className="btn-text"><span>Know More Us</span></span>
                                                    <span className="btn-icon"><i className="fas fa-arrow-right-long"></i></span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6">
                                        <div className="about-img-area h6-about-img wow fadeInLeft" data-wow-delay=".2s">
                                            <div className="about-img wow fadeInRight" data-wow-delay=".8s">
                                                <img src="/assets/images/img/classroom.png" alt="" style={{ width: '100%', height: 'auto' }} />
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

