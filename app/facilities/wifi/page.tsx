import Image from 'next/image';
import PageLayout from '../../components/PageLayout';



export default function WiFiPage() {
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
                                                <span className="sub-title wow fadeInUp" data-wow-delay=".3s" style={{ backgroundColor: '#d8e5e5', color: '#000' }}><i className="fas fa-box"></i>OUR WIFI FACILITIES</span>
                                                <p className="desc wow fadeInUp" data-wow-delay=".8s" style={{ color: '#6b7474' }}>With our free WiFi, you can access the internet from anywhere on our campuses, whether you're in a lecture hall, library, or even outside enjoying the fresh air. You can easily connect your laptop, tablet, or smartphone to our secure network and stay connected all day long.</p>
                                                
                                                <p className="desc wow fadeInUp" data-wow-delay=".8s" style={{ color: '#6b7474' }}>We understand that access to the internet is essential for students to be able to access course materials, conduct research, and collaborate with classmates. That's why we're committed to providing reliable and high-speed internet to everyone on our campuses.</p>
                                                
                                                <p className="desc wow fadeInUp" data-wow-delay=".8s" style={{ color: '#6b7474' }}>So, whether you're studying for an exam, attending a lecture, or simply catching up on social media, you can count on our free WiFi facilities to keep you connected. At JKKN Educational Institutions, we strive to provide our students with the best possible experience, and free WiFi is just one of the ways we do that.</p>
                                                
                                                <div className="desc wow fadeInUp" data-wow-delay=".8s" style={{ color: '#6b7474' }}>
                                                    <ul style={{ listStyle: 'none', padding: 0 }}>
                                                        <li style={{ marginBottom: '8px' }}>Ã¢â‚¬Â¢ Stay connected on the go</li>
                                                        <li style={{ marginBottom: '8px' }}>Ã¢â‚¬Â¢ Save your data</li>
                                                        <li style={{ marginBottom: '8px' }}>Ã¢â‚¬Â¢ Faster internet speeds</li>
                                                        <li style={{ marginBottom: '8px' }}>Ã¢â‚¬Â¢ Convenient access</li>
                                                        <li style={{ marginBottom: '8px' }}>Ã¢â‚¬Â¢ Secure connection</li>
                                                    </ul>
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



