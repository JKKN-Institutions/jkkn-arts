import Image from 'next/image';
import PageLayout from '../../components/PageLayout';



export default function SeminarHallPage() {
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
                                                <span className="sub-title wow fadeInUp" data-wow-delay=".3s" style={{ backgroundColor: '#d8e5e5', color: '#000' }}><i className="fas fa-box"></i>OUR SEMINAR HALL</span>
                                                <p className="desc wow fadeInUp" data-wow-delay=".8s" style={{ color: '#6b7474' }}>With a good seating capacity, our seminar hall is equipped with modern amenities that provide a comfortable and conducive learning environment for all attendees. The hall is fully air-conditioned and features a stage, projector, sound system, and lighting equipment, ensuring that every speaker's voice is heard loud and clear.</p>
                                                <p className="desc wow fadeInUp" data-wow-delay=".8s" style={{ color: '#6b7474' }}>Our seminar hall also boasts a range of convenient amenities that make event planning a breeze. From high-speed Wi-Fi to ample parking facilities, we've got you covered. Our team of skilled technicians and support staff are on hand to ensure that your event runs smoothly and efficiently.</p>
                                                <div className="desc wow fadeInUp" data-wow-delay=".8s" style={{ color: '#6b7474' }}>
                                                    <ul style={{ listStyle: 'none', padding: 0 }}>
                                                        <li style={{ marginBottom: '8px' }}>Ã¢â‚¬Â¢ Spacious and well-lit</li>
                                                        <li style={{ marginBottom: '8px' }}>Ã¢â‚¬Â¢ Audio-visual equipment</li>
                                                        <li style={{ marginBottom: '8px' }}>Ã¢â‚¬Â¢ Internet connectivity</li>
                                                        <li style={{ marginBottom: '8px' }}>Ã¢â‚¬Â¢ Comfortable seating</li>
                                                        <li style={{ marginBottom: '8px' }}>Ã¢â‚¬Â¢ Air conditioning</li>
                                                        <li style={{ marginBottom: '8px' }}>Ã¢â‚¬Â¢ Hygiene standards</li>
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



