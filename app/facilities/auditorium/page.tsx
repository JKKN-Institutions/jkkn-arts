import Image from 'next/image';
import PageLayout from '../../components/PageLayout';



import Header from '../../components/Header';
import Footer from '../../components/Footer';
export default function AuditoriumPage() {
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
                                                <span className="sub-title wow fadeInUp" data-wow-delay=".3s" style={{ backgroundColor: '#d8e5e5', color: '#000' }}><i className="fas fa-box"></i>OUR AUDITORIUM</span>
                                                <p className="desc wow fadeInUp" data-wow-delay=".8s" style={{ color: '#6b7474' }}>The JKKN auditorium is a spacious facility that can accommodate a large number of guests comfortably. The seating arrangement is well-designed to provide an uninterrupted view of the stage, and the acoustics are impeccable, ensuring that every note and word is heard clearly. The stage is equipped with the latest audio-visual technology, making it possible to host a wide range of events, including concerts, lectures, and theatrical performances.</p>
                                                
                                                <p className="desc wow fadeInUp" data-wow-delay=".8s" style={{ color: '#6b7474' }}>In addition to its impressive features, the auditorium is designed with utmost attention to detail, making it a truly elegant space. The interior decor features a combination of modern and traditional elements that blend perfectly to create a warm and welcoming atmosphere. The lighting is also carefully selected to enhance the ambiance and mood of the event.</p>
                                                
                                                <p className="desc wow fadeInUp" data-wow-delay=".8s" style={{ color: '#6b7474' }}>The JKKN auditorium is not just an impressive facility, but it is also a versatile one. It can be used for various purposes, including graduation ceremonies, workshops, and seminars, making it an essential resource for the institution. The auditorium is also well-maintained, ensuring that it remains in top condition at all times.</p>
                                                
                                                <div className="desc wow fadeInUp" data-wow-delay=".8s" style={{ color: '#6b7474' }}>
                                                    <ul style={{ listStyle: 'none', padding: 0 }}>
                                                        <li style={{ marginBottom: '8px' }}>â€¢ Spacious seating</li>
                                                        <li style={{ marginBottom: '8px' }}>â€¢ High-tech sound and lighting systems</li>
                                                        <li style={{ marginBottom: '8px' }}>â€¢ Stage equipment and props</li>
                                                        <li style={{ marginBottom: '8px' }}>â€¢ Excellent acoustics</li>
                                                        <li style={{ marginBottom: '8px' }}>â€¢ Professional staff</li>
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



