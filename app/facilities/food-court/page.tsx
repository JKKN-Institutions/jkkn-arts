import Image from 'next/image';
import PageLayout from '../../components/PageLayout';



export default function FoodCourtPage() {
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
                                                <span className="sub-title wow fadeInUp" data-wow-delay=".3s" style={{ backgroundColor: '#d8e5e5', color: '#000' }}><i className="fas fa-box"></i>OUR FOOD COURT</span>
                                                <p className="desc wow fadeInUp" data-wow-delay=".8s" style={{ color: '#6b7474' }}>Our canteen is more than just a place to grab a quick bite. It's a social hub where students can come together to relax, catch up with friends, and recharge before diving back into their studies. With comfortable seating and a warm and welcoming atmosphere, it's the perfect place to take a break and refuel.</p>
                                                
                                                <p className="desc wow fadeInUp" data-wow-delay=".8s" style={{ color: '#6b7474' }}>And speaking of refueling, you won't be disappointed with the variety of options available in our canteen. From fresh salads and sandwiches to hearty hot meals and snacks, we've got something for everyone. Our menu is designed to cater to a range of dietary needs and preferences, so you can feel confident that you'll find something delicious and satisfying no matter what your tastes.</p>
                                                
                                                <div className="desc wow fadeInUp" data-wow-delay=".8s" style={{ color: '#6b7474' }}>
                                                    <ul style={{ listStyle: 'none', padding: 0 }}>
                                                        <li style={{ marginBottom: '8px' }}>Ã¢â‚¬Â¢ Diverse menu</li>
                                                        <li style={{ marginBottom: '8px' }}>Ã¢â‚¬Â¢ Quality ingredients</li>
                                                        <li style={{ marginBottom: '8px' }}>Ã¢â‚¬Â¢ Healthy options</li>
                                                        <li style={{ marginBottom: '8px' }}>Ã¢â‚¬Â¢ Affordable prices</li>
                                                        <li style={{ marginBottom: '8px' }}>Ã¢â‚¬Â¢ Hygiene and safety</li>
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



