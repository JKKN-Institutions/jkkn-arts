import Header from '../../components/Header';
import Footer from '../../components/Footer';
import OffcanvasMenu from '../../components/OffcanvasMenu';

export default function SportsClubPage() {
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
                                                <span className="sub-title wow fadeInUp" data-wow-delay=".3s" style={{ backgroundColor: '#d8e5e5', color: '#000' }}><i className="fas fa-box"></i>OUR SPORTS CLUB</span>
                                                <p className="desc wow fadeInUp" data-wow-delay=".8s" style={{ color: '#6b7474' }}>where fitness and fun come together! Our top-notch facility is designed to cater to all your sporting and fitness needs. Here's why our Sports Clubs stands out from the rest:</p>
                                                
                                                <div className="desc wow fadeInUp" data-wow-delay=".8s" style={{ color: '#6b7474' }}>
                                                    <h6 style={{ color: '#000', fontWeight: 'bold', marginTop: '20px', marginBottom: '10px' }}>World-class Facilities:</h6>
                                                    <p>Our facility boasts world-class amenities including a fully equipped gym, swimming pool, basketball court, tennis court, football field, and more. Whether you're looking to pump some iron, practice your free throws, or perfect your backstroke, we've got you covered.</p>
                                                    
                                                    <h6 style={{ color: '#000', fontWeight: 'bold', marginTop: '20px', marginBottom: '10px' }}>Expert Instructors:</h6>
                                                    <p>Our team of expert instructors is passionate about helping you achieve your fitness goals. They are certified, experienced, and always ready to provide guidance and support. They'll motivate you to push past your limits and achieve your full potential.</p>
                                                    
                                                    <h6 style={{ color: '#000', fontWeight: 'bold', marginTop: '20px', marginBottom: '10px' }}>Cutting-edge Equipment:</h6>
                                                    <p>We're proud to offer state-of-the-art equipment that's regularly maintained and updated. Our gym is packed with the latest cardio and weight training machines, and our outdoor sports facilities are built to the highest standards. You won't find better equipment anywhere else!</p>
                                                    
                                                    <h6 style={{ color: '#000', fontWeight: 'bold', marginTop: '20px', marginBottom: '10px' }}>Free Memberships:</h6>
                                                    <p>We believe that everyone should have access to top-quality sports facilities, which is why we offer memberships for students, staff, and members of the community. Our flexible membership options make it easy for you to find the perfect package that suits your needs.</p>
                                                    
                                                    <h6 style={{ color: '#000', fontWeight: 'bold', marginTop: '20px', marginBottom: '10px' }}>Community Spirit:</h6>
                                                    <p>We believe in building a strong community through sports and fitness. Our sports club is a place where you'll meet new people, make friends, and have fun. We regularly organize events and competitions that bring people together and foster healthy competition and camaraderie.</p>
                                                    
                                                    <p style={{ marginTop: '20px', fontWeight: 'bold' }}>So why wait? Join the Sports Club Facility at JKKN Educational Institutions and experience the ultimate fitness and sporting experience. Whether you're a beginner or a seasoned pro, we've got something for everyone. Come and join our vibrant community of sports enthusiasts today!</p>
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

