import Image from 'next/image';
import PageLayout from '../../components/PageLayout';



import Header from '../../components/Header';
import Footer from '../../components/Footer';
export default function HostelPage() {
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
                                                <span className="sub-title wow fadeInUp" data-wow-delay=".3s" style={{ backgroundColor: '#d8e5e5', color: '#000' }}><i className="fas fa-box"></i>OUR HOSTEL</span>
                                                <p className="desc wow fadeInUp" data-wow-delay=".8s" style={{ color: '#6b7474' }}>Our hostel is located within the campus premises, making it an ideal choice for students who prefer a hassle-free commute to their classes. The hostel is well-maintained and equipped with all the necessary amenities to cater to your needs. We offer single and shared rooms that are spacious and well-ventilated, ensuring a comfortable living experience for our residents.</p>
                                                <p className="desc wow fadeInUp" data-wow-delay=".8s" style={{ color: '#6b7474' }}>At JKKN, we understand the importance of academics, and hence we provide an environment that is conducive to studying. Our hostel provides a peaceful and quiet atmosphere, enabling students to concentrate on their studies without any distractions. With our high-speed internet connectivity, students can easily access online resources and complete their academic assignments with ease.</p>
                                                <div className="desc wow fadeInUp" data-wow-delay=".8s" style={{ color: '#6b7474' }}>
                                                    <ul style={{ listStyle: 'none', padding: 0 }}>
                                                        <li style={{ marginBottom: '8px' }}>â€¢ JKKN Educational Institutions' Boys Hostel is a community where you can make lifelong friendships and memories.</li>
                                                        <li style={{ marginBottom: '8px' }}>â€¢ The hostel's dedicated staff is always available to assist you with any issues you may face during your stay.</li>
                                                        <li style={{ marginBottom: '8px' }}>â€¢ The Boys Hostel offers a comfortable and safe living experience for students.</li>
                                                        <li style={{ marginBottom: '8px' }}>â€¢ State-of-the-art facilities and amenities are available to ensure a memorable stay.</li>
                                                        <li style={{ marginBottom: '8px' }}>â€¢ Ideal for students looking for a supportive and conducive living environment during their academic journey.</li>
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
                                                <Image src="/assets/images/img/classroom.png" alt="" width={400} height={300} style={{ width: '100%', height: 'auto'  }} />
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



