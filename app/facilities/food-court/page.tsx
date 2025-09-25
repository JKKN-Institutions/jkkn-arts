import Header from '../../components/Header';
import Footer from '../../components/Footer';
import OffcanvasMenu from '../../components/OffcanvasMenu';

export default function FoodCourtPage() {
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
                                                <span className="sub-title wow fadeInUp" data-wow-delay=".3s" style={{ backgroundColor: '#d8e5e5', color: '#000' }}><i className="fas fa-box"></i>OUR FOOD COURT</span>
                                                <p className="desc wow fadeInUp" data-wow-delay=".8s" style={{ color: '#6b7474' }}>Our canteen is more than just a place to grab a quick bite. It's a social hub where students can come together to relax, catch up with friends, and recharge before diving back into their studies. With comfortable seating and a warm and welcoming atmosphere, it's the perfect place to take a break and refuel.</p>
                                                
                                                <p className="desc wow fadeInUp" data-wow-delay=".8s" style={{ color: '#6b7474' }}>And speaking of refueling, you won't be disappointed with the variety of options available in our canteen. From fresh salads and sandwiches to hearty hot meals and snacks, we've got something for everyone. Our menu is designed to cater to a range of dietary needs and preferences, so you can feel confident that you'll find something delicious and satisfying no matter what your tastes.</p>
                                                
                                                <div className="desc wow fadeInUp" data-wow-delay=".8s" style={{ color: '#6b7474' }}>
                                                    <ul style={{ listStyle: 'none', padding: 0 }}>
                                                        <li style={{ marginBottom: '8px' }}>â€¢ Diverse menu</li>
                                                        <li style={{ marginBottom: '8px' }}>â€¢ Quality ingredients</li>
                                                        <li style={{ marginBottom: '8px' }}>â€¢ Healthy options</li>
                                                        <li style={{ marginBottom: '8px' }}>â€¢ Affordable prices</li>
                                                        <li style={{ marginBottom: '8px' }}>â€¢ Hygiene and safety</li>
                                                    </ul>
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

