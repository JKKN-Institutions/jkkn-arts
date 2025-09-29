﻿import Image from 'next/image';
import PageLayout from '../../components/PageLayout';



export default function BankPostOfficePage() {
    return (
        <>            {/* start: Header Area */}
            <Header />
            {/* end: Header Area */}

            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <main id="primary" className="site-main">
                        <div className="top-space-15"></div>
            {/* Mobile top padding */}
            <div className="d-lg-none" style={{paddingTop: '60px'}}></div>

                        {/* start: About Section */}
                        <section className="tj-about-section h6-about section-gap section-gap-x" style={{ backgroundColor: '#d8e5e5' }}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-6 col-lg-6">
                                        <div className="about-content-area h6-about-content style-1 wow fadeInLeft" data-wow-delay=".2s">
                                            <div className="sec-heading style-2 style-6">
                                                <span className="sub-title wow fadeInUp" data-wow-delay=".3s" style={{ backgroundColor: '#d8e5e5', color: '#000' }}><i className="fas fa-box"></i>OUR BANKING & POSTAL SERVICES</span>
                                                <p className="desc wow fadeInUp" data-wow-delay=".8s" style={{ color: '#6b7474' }}>Looking for hassle-free banking and postal services? Look no further than the JKKN Educational Institutions, where we offer a range of convenient and reliable banking and postal services to our students and staff. Here are some of the key benefits you can enjoy:</p>
                                                
                                                <div className="desc wow fadeInUp" data-wow-delay=".8s" style={{ color: '#6b7474' }}>
                                                    <h6 style={{ color: '#000', fontWeight: 'bold', marginTop: '20px', marginBottom: '10px' }}>BANKING FACILITIES:</h6>
                                                    <p>Our campus has a fully-functional branch of a popular bank, so you can handle all your banking needs right here on campus.</p>
                                                    <p>The bank offers a range of services, including account opening, cash deposits and withdrawals, fund transfers, and more.</p>
                                                    <p>You can also avail of special offers and discounts exclusively for JKKN students and staff.</p>
                                                    <p>With our banking facility, you can save time and effort, and focus on your studies and work without worrying about your financial transactions.</p>
                                                    
                                                    <h6 style={{ color: '#000', fontWeight: 'bold', marginTop: '20px', marginBottom: '10px' }}>POSTAL SERVICES:</h6>
                                                    <p>We have a dedicated post office on campus, so you can easily send and receive mail and packages without having to leave the campus.</p>
                                                    <p>Our post office offers a range of services, including domestic and international mail, registered post, speed post, parcel delivery, and more.</p>
                                                    <p>You can also avail of additional services such as post office savings schemes, money orders, and postal life insurance.</p>
                                                    <p>With our postal services, you can stay connected with your loved ones and business associates, and manage your important documents and packages with ease.</p>
                                                </div>
                                            </div>
                                            <div className="h6-about-funfact-wrapper">

                                                <div className="h6-about-funfact-shape">
                                                    <Image src="/assets/images/shape/about-counter-shape-blur.svg" alt="" width={400} height={300} style={{ width: "100%", height: "auto" }} />
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
                                                <Image src="/assets/images/img/classroom.png" alt="" width={400} height={300} style={{ width: "100%", height: "auto" }}   style={{ width: '100%', height: 'auto' }} />
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-shape-1">
                                <Image src="/assets/images/shape/pattern-2.svg" alt="" width={400} height={300} style={{ width: "100%", height: "auto" }} />
                            </div>
                            <div className="bg-shape-2">
                                <Image src="/assets/images/shape/pattern-3.svg" alt="" width={400} height={300} style={{ width: "100%", height: "auto" }} />
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



