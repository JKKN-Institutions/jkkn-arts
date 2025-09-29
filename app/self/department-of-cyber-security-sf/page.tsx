import Image from 'next/image';
import PageLayout from '../../components/PageLayout';



import Header from '../../components/Header';
import Footer from '../../components/Footer';
export default function DepartmentOfCyberSecurity() {
    return (
        <>
            {/* start: magic cursor */}
            <div id="magic-cursor">
                <div id="ball"></div>
            </div>
            {/* end: magic cursor */}
            {/* start: Header Area */}
            <Header />
            {/* end: Header Area */}

            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <main id="primary" className="site-main">
                        <div className="top-space-15"></div>
            {/* Mobile top padding */}
            <div className="d-lg-none" style={{paddingTop: '60px'}}></div>
                        {/* start: Banner Section */}
                        <section className="tj-banner-section-2 h10-hero section-gap-x zoom-on-scroll-wrapper">
                            <div className="container">
                                <div className="row flex-column-reverse flex-lg-row">
                                    <div className="col-lg-4 col-xl-3">
                                        <div className="h10-hero-award-wrapper">
                                            <div className="h6-hero-history wow fadeInUp" data-wow-delay=".3s">
                                                <div className="h6-hero-history-title">Est. 1987</div>
                                                <p className="h6-hero-history-desc">Excellence in Cyber Security Education with comprehensive programs since 1987-1988, fostering innovation and expertise in safeguarding the digital world.</p>
                                            </div>
                                            
                                        </div>
                                    </div>
                                    <div className="col-lg-8 col-xl-9">
                                        <div className="banner-content-2">
                                            <h1 className="banner-title text-anim">Department of Cyber Security <i className="fas fa-curve-arrow wow fadeInRight" data-wow-delay=".7s"></i>
                                            </h1>
                                            <div className="banner-desc-area wow fadeInUp" data-wow-delay=".7s">
                                                <a className="tj-primary-btn" href="#">
                                                    <span className="btn-text"><span>Apply Now</span></span>
                                                    <span className="btn-icon"><i className="fas fa-arrow-right-long"></i></span>
                                                </a>
                                                <div className="banner-desc">A hub of excellence dedicated to safeguarding the digital world, focused on addressing the growing challenges of cybersecurity in a technology-driven era.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="container-fluid gap-0">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="h10-hero-banner zoom-on-scroll">
                                            <div className="h10-hero-banner-img h10-hero-banner-video">
                                                <video autoPlay loop muted playsInline data-wf-ignore="true" data-object-fit="cover" poster="/assets/images/img/department-of-cyber-security-sf.png">
                                                    <source src="/assets/video/h10-banner-videio.webp" data-wf-ignore="true" />
                                                    <source src="/assets/video/h10-banner-videio.webp" data-wf-ignore="true" />
                                                </video>
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
                        {/* end: Banner Section */}

                        {/* start: Service Section */}
                        <section className="h5-service-section h10-service section-gap">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="sec-heading-wrap style-8">
                                            <div className="heading-wrap-content">
                                                <div className="sec-heading style-3">
                                                    <span className="sub-title wow fadeInUp" data-wow-delay=".3s"><i className="fas fa-box"></i> Core Areas</span>
                                                    <h2 className="sec-title text-anim">Comprehensive Artificial Intelligence and Data Science Curriculum.</h2>
                                                </div>
                                                <div className="btn-area wow fadeInUp" data-wow-delay=".8s">
                                                    <a className="tj-primary-btn" href="/services">
                                                        <span className="btn-text"><span>Explore More</span></span>
                                                        <span className="btn-icon"><i className="fas fa-arrow-right-long"></i></span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row ">
                                    <div className="col-12">
                                        <div className="service-wrapper h10-service-wrapper wow fadeInUp" data-wow-delay=".4s">
                                            <div className="swiper h10-service-slider">
                                                <div className="swiper-wrapper">
                                                    <div className="swiper-slide">
                                                        <div className="service-item style-4 wow fadeInUp" data-wow-delay=".1s">
                                                            <h6 className="h10-service-sln">01.</h6>
                                                            
                                                            <div className="service-content">
                                                                <h4 className="title"><a href="/department-of-ai-ds-sf">Machine Learning and Deep Learning</a></h4>
                                                                <p className="desc">Advanced algorithms and neural networks for intelligent system development.
                                                                </p>
                                                                <a className="text-btn" href="/department-of-ai-ds-sf">
                                                                    <span className="btn-text"><span>Learn More</span></span>
                                                                    <span className="btn-icon"><i className="fas fa-arrow-right-long"></i></span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="swiper-slide">
                                                        <div className="service-item style-4 wow fadeInUp" data-wow-delay=".3s">
                                                            <h6 className="h10-service-sln">02.</h6>
                                                            
                                                            <div className="service-content">
                                                                <h4 className="title"><a href="/department-of-ai-ds-sf">Natural Language Processing and Computer Vision</a></h4>
                                                                <p className="desc">AI technologies for understanding and processing human language and visual data.
                                                                </p>
                                                                <a className="text-btn" href="/department-of-ai-ds-sf">
                                                                    <span className="btn-text"><span>Learn More</span></span>
                                                                    <span className="btn-icon"><i className="fas fa-arrow-right-long"></i></span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="swiper-slide">
                                                        <div className="service-item style-4 wow fadeInUp" data-wow-delay=".7s">
                                                            <h6 className="h10-service-sln">03.</h6>
                                                            
                                                            <div className="service-content">
                                                                <h4 className="title"><a href="/department-of-ai-ds-sf">Data Analytics and Data Visualization</a></h4>
                                                                <p className="desc">Techniques for analyzing large datasets and creating meaningful visual representations.
                                                                </p>
                                                                <a className="text-btn" href="/department-of-ai-ds-sf">
                                                                    <span className="btn-text"><span>Learn More</span></span>
                                                                    <span className="btn-icon"><i className="fas fa-arrow-right-long"></i></span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="swiper-slide">
                                                        <div className="service-item style-4 wow fadeInUp" data-wow-delay=".5s">
                                                            <h6 className="h10-service-sln">04.</h6>
                                                            
                                                            <div className="service-content">
                                                                <h4 className="title"><a href="/department-of-cyber-security-sf">Cloud Security and IoT Security</a></h4>
                                                                <p className="desc">Securing cloud environments and protecting Internet of Things devices from cyber threats.
                                                                </p>
                                                                <a className="text-btn" href="/department-of-cyber-security-sf">
                                                                    <span className="btn-text"><span>Learn More</span></span>
                                                                    <span className="btn-icon"><i className="fas fa-arrow-right-long"></i></span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="swiper-pagination-area"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* end: Service Section */}

                        {/* start: About Section */}
                        <section className="h10-about section-gap">
                            <div className="container">
                                <div className="row flex-column-reverse flex-md-row ">
                                    <div className="col-12 col-lg-5 d-block d-md-none d-lg-block">
                                        <div className="about-img-area h10-about-banner wow bounceInLeft" data-wow-delay=".3s">
                                            <div className="about-img overflow-hidden">
                                                <Image src="/assets/images/img/department-of-computer-science.png" alt="" width={400} height={300} style={{ width: '100%', height: 'auto', maxHeight: '320px', objectFit: 'cover' }} data-speed=".8" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-7">
                                        <div className="h10-about-content-wrapper">
                                            <div className="sec-heading style-3 ">
                                                <span className="sub-title wow fadeInUp" data-wow-delay=".3s"><i className="fas fa-box"></i> ABOUT CYBER SECURITY</span>
                                                <h2 className="sec-title title-highlight wow fadeInUp" data-wow-delay=".3s">Safeguarding the Digital World.
                                                </h2>
                                            </div>
                                            <div className="row">
                                                <div className="col-12 col-md-6 d-none d-md-block d-lg-none">
                                                    <div className="about-img-area h10-about-banner wow bounceInLeft" data-wow-delay=".3s">
                                                        <div className="about-img">
                                                            <Image src="/assets/images/img/department-of-computer-science.png" alt="" width={400} height={300} style={{ width: '100%', height: 'auto', maxHeight: '300px', objectFit: 'cover'  }} />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-6 col-lg-12">
                                                    <div className="h10-about-content">
                                                        <div className="customers-box style-3 h10-about-clients wow fadeInUp" data-wow-delay=".4s">
                                                            <div className="customers">
                                                                <ul>
                                                                    <li className="wow fadeInLeft" data-wow-delay=".2s"><Image src="/assets/images/testimonial/client-1.webp" alt="" width={400} height={300} style={{ width: "100%", height: "auto" }} /></li>
                                                                    <li className="wow fadeInLeft" data-wow-delay=".3s"><Image src="/assets/images/testimonial/client-2.webp" alt="" width={400} height={300} style={{ width: "100%", height: "auto" }} /></li>
                                                                    <li className="wow fadeInLeft" data-wow-delay=".4s"><Image src="/assets/images/testimonial/client-3.webp" alt="" width={400} height={300} style={{ width: "100%", height: "auto" }} /></li>
                                                                    <li className="wow fadeInLeft" data-wow-delay=".5s"><span><i className="fas fa-plus"></i></span></li>
                                                                </ul>
                                                            </div>
                                                        </div>

                                                        <p className="desc wow fadeInUp" data-wow-delay=".4s">The Department of Cyber Security is a hub of excellence dedicated to safeguarding the digital world. Focused on addressing the growing challenges of cybersecurity in a technology-driven era, the department equips students with the knowledge, skills, and ethical practices required to protect critical systems, data, and networks from evolving cyber threats.</p>

                                                        <p className="desc wow fadeInUp" data-wow-delay=".5s">Our department offers undergraduate and postgraduate programs designed to develop a deep understanding of cybersecurity principles and practices. Core areas of study include network security and cryptography, ethical hacking and penetration testing, cyber laws and digital forensics, cloud security and IoT security, and artificial intelligence in cyber defense.</p>

                                                        <p className="desc wow fadeInUp" data-wow-delay=".6s">With advanced labs featuring cutting-edge facilities for practicing ethical hacking, network security, and vulnerability assessments, industry-driven curriculum designed to meet current and future cybersecurity demands, experienced faculty comprising academicians and industry experts specializing in cybersecurity and IT, and support for global certifications like CEH, CISSP, and CISM, we ensure our students are well-prepared for dynamic careers in information security, risk management, and related domains.</p>

                                                        <div className="h9-about-funfact h10-about-funfact">
                                                            <div className="countup-item">
                                                                <div className="inline-content">
                                                                    <span className="odometer countup-number" data-count="2"></span>
                                                                    <span className="count-plus"> Years</span>
                                                                </div>
                                                                <span className="count-text">Comprehensive Cyber Security programs.</span>
                                                            </div>
                                                            <div className="countup-item">
                                                                <div className="inline-content">
                                                                    <span className="odometer countup-number" data-count="95"></span>
                                                                    <span className="count-plus">%</span>
                                                                </div>
                                                                <span className="count-text">Graduate employment rate in cybersecurity sectors.</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* end: About Section */}

                        {/* start: Curriculum Section */}
                        <section className="h10-process section-gap section-gap-x tj-sticky-panel-3-container">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12 col-lg-5">
                                        <div className="sec-heading style-3 tj-sticky-panel-3">
                                            <span className="sub-title"><i className="fas fa-box"></i> CURRICULUM STRUCTURE</span>
                                            <h2 className="sec-title text-anim">Comprehensive Cyber Security Learning Experience.</h2>
                                            <div className="h10-process-more">
                                                <a className="tj-primary-btn" href="#">
                                                    <span className="btn-text"><span>Apply Now</span></span>
                                                    <span className="btn-icon"><i className="fas fa-arrow-right-long"></i></span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-7 ">
                                        <div className="h10-process-wrapper">
                                            <div className="h10-process-item tj-sticky-panel-3">
                                                <h6 className="h10-process-sln">Theory</h6>
                                                <div className="h10-process-icon">
                                                    <i className="fas fa-chart-line"></i>
                                                </div>
                                                <div className="h10-process-content">
                                                    <h4 className="title">Theoretical Lectures</h4>
                                                    <p className="desc">Comprehensive theoretical lectures provide students with the necessary foundational knowledge covering cybersecurity principles, network security concepts, cryptographic methods, and digital forensics techniques.</p>
                                                </div>
                                            </div>
                                            <div className="h10-process-item tj-sticky-panel-3">
                                                <h6 className="h10-process-sln">Practical</h6>
                                                <div className="h10-process-icon">
                                                    <i className="fas fa-globe"></i>
                                                </div>
                                                <div className="h10-process-content">
                                                    <h4 className="title">Practical Workshops</h4>
                                                    <p className="desc">Hands-on practical sessions allow students to gain experience in ethical hacking techniques, penetration testing tools, vulnerability assessments, and real-world cybersecurity projects using modern security technologies.</p>
                                                </div>
                                            </div>
                                            <div className="h10-process-item tj-sticky-panel-3">
                                                <h6 className="h10-process-sln">Research</h6>
                                                <div className="h10-process-icon">
                                                    <i className="fas fa-circle-check"></i>
                                                </div>
                                                <div className="h10-process-content">
                                                    <h4 className="title">Cyber Security Projects</h4>
                                                    <p className="desc">Cyber security projects provide students with opportunities to apply their knowledge and skills to real-world security challenges, develop secure systems, and contribute to the advancement of innovative cybersecurity solutions.</p>
                                                </div>
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
                            <div className="bg-shape-3">
                                <Image src="/assets/images/shape/h7-testimonial-shape-blur.svg" alt="" width={400} height={300} style={{ width: "100%", height: "auto" }} />
                            </div>
                        </section>
                        {/* end: Curriculum Section */}

                        {/* start: Program Summary Section */}
                        <section className="h10-blog section-gap">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="sec-heading-wrap ">
                                            <div className="heading-wrap-content">
                                                <div className="sec-heading style-3">
                                                    <span className="sub-title wow fadeInUp" data-wow-delay=".3s"><i className="fas fa-box"></i>Program Summary</span>
                                                    <h2 className="sec-title text-anim">Foundation for Success in Cyber Security.</h2>
                                                </div>
                                                <div className="btn-area wow fadeInUp" data-wow-delay=".8s">
                                                    <a className="tj-primary-btn" href="#">
                                                        <span className="btn-text"><span>Apply Now</span></span>
                                                        <span className="btn-icon"><i className="fas fa-arrow-right-long"></i></span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="blog-wrapper h8-blog-wrapper h10-blog-wrapper">
                                            <div className="blog-item style-2 wow fadeInUp" data-wow-delay=".3s">
                                                <div className="blog-content">
                                                    <div className="blog-meta">
                                                        <div className="blog-date-wrapper">
                                                            <span className="blog-author">Duration: 2 Years</span>
                                                        </div>
                                                        <span className="categories">Master&apos;s Degree</span>
                                                    </div>
                                                    <div className="title-area">
                                                        <h3 className="title">Career Foundation</h3>
                                                        <p>Overall, the Cyber Security program provides students with a solid foundation in the principles and applications of cybersecurity, equipping them with the necessary knowledge and skills to embark on a successful career in cybersecurity analysis, ethical hacking, digital forensics, information security management, security consulting, and cyber risk analysis.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* end: Program Summary Section */}

                        {/* start: Vision Mission Section */}
                        <section className="h8-service overflow-hidden section-gap">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="sec-heading style-3 sec-heading-centered">
                                            <span className="sub-title wow fadeInUp" data-wow-delay=".3s">
                                                <i className="fas fa-box"></i>Vision & Mission
                                            </span>
                                            <h2 className="sec-title title-anim">Our Educational Philosophy and Goals.</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="container gap-30">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="service-wrapper h8-service-wrapper wow bounceInLeft" data-wow-delay=".3s">
                                            <div className="row">
                                                <div className="col-12 col-md-6 col-xl-6">
                                                    <div className="service-item h8-service-item">
                                                        <h4 className="title">VISION</h4>
                                                        <div className="service-content">
                                                            <p className="desc">
                                                                To be a leader in cybersecurity education and research, fostering professionals who contribute to a safer digital environment.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-6 col-xl-6">
                                                    <div className="service-item h8-service-item">
                                                        <h4 className="title">MISSION</h4>
                                                        <div className="service-content">
                                                            <p className="desc">To provide high-quality education in cybersecurity, blending theoretical foundations with practical expertise. To promote research and innovation in the field of cybersecurity and digital forensics. To nurture professionals with a strong ethical foundation to tackle global cybersecurity challenges. To prepare students for dynamic careers in information security, risk management, and related domains.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* end: Vision Mission Section */}

                        {/* start: Academic Programs Section */}
                        <section className="h8-service overflow-hidden section-gap">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="sec-heading style-3 sec-heading-centered">
                                            <span className="sub-title wow fadeInUp" data-wow-delay=".3s">
                                                <i className="fas fa-box"></i>Academic Programs
                                            </span>
                                            <h2 className="sec-title title-anim">Comprehensive Cyber Security Education.</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="container gap-30">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="service-wrapper h8-service-wrapper wow bounceInLeft" data-wow-delay=".3s">
                                            <div className="row">
                                                <div className="col-12 col-md-6 col-xl-4">
                                                    <div className="service-item h8-service-item">
                                                        <h4 className="title">Network Security and Cryptography</h4>
                                                        <div className="service-content">
                                                            <p className="desc">Protecting network infrastructure and implementing cryptographic solutions for secure communications.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-6 col-xl-4">
                                                    <div className="service-item h8-service-item">
                                                        <h4 className="title">Ethical Hacking and Penetration Testing</h4>
                                                        <div className="service-content">
                                                            <p className="desc">Learning to identify vulnerabilities and test security systems through ethical hacking practices.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-6 col-xl-4">
                                                    <div className="service-item h8-service-item">
                                                        <h4 className="title">Cyber Laws and Digital Forensics</h4>
                                                        <div className="service-content">
                                                            <p className="desc">Understanding legal frameworks and investigating digital crimes through forensic techniques.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-6 col-xl-4">
                                                    <div className="service-item h8-service-item">
                                                        <h4 className="title">Cloud Security and IoT Security</h4>
                                                        <div className="service-content">
                                                            <p className="desc">Securing cloud environments and protecting Internet of Things devices from cyber threats.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-6 col-xl-4">
                                                    <div className="service-item h8-service-item">
                                                        <h4 className="title">Artificial Intelligence in Cyber Defense</h4>
                                                        <div className="service-content">
                                                            <p className="desc">Leveraging AI and machine learning technologies for advanced cyber threat detection and response.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* end: Academic Programs Section */}

                        {/* start: Key Features Section */}
                        <section className="h8-service overflow-hidden section-gap">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="sec-heading style-3 sec-heading-centered">
                                            <span className="sub-title wow fadeInUp" data-wow-delay=".3s"><i className="fas fa-box"></i> Key Features</span>
                                            <h2 className="sec-title title-anim">Excellence in Cyber Security Education.</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="container gap-30">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="service-wrapper h8-service-wrapper wow bounceInLeft" data-wow-delay=".3s">
                                            <div className="row">
                                                <div className="col-12 col-md-6 col-xl-3">
                                                    <div className="service-item h8-service-item">
                                                        
                                                        <h4 className="title">Advanced Labs</h4>
                                                        <div className="service-content">
                                                            <p className="desc">Cutting-edge facilities for practicing ethical hacking, network security, and vulnerability assessments.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-6 col-xl-3">
                                                    <div className="service-item h8-service-item">
                                                        
                                                        <h4 className="title">Industry-Driven Curriculum</h4>
                                                        <div className="service-content">
                                                            <p className="desc">Courses designed to meet current and future cybersecurity demands.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-6 col-xl-3">
                                                    <div className="service-item h8-service-item">
                                                        
                                                        <h4 className="title">Experienced Faculty</h4>
                                                        <div className="service-content">
                                                            <p className="desc">A blend of academicians and industry experts specializing in cybersecurity and IT.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-6 col-xl-3">
                                                    <div className="service-item h8-service-item">
                                                        
                                                        <h4 className="title">Certifications</h4>
                                                        <div className="service-content">
                                                            <p className="desc">Support for global certifications like CEH (Certified Ethical Hacker), CISSP, and CISM.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* end: Key Features Section */}

                        {/* start: Activities & Initiatives Section */}
                        <section className="h10-process section-gap section-gap-x tj-sticky-panel-3-container">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12 col-lg-5">
                                        <div className="sec-heading style-3 tj-sticky-panel-3">
                                            <span className="sub-title"><i className="fas fa-box"></i> Activities & Initiatives</span>
                                            <h2 className="sec-title text-anim">Engaging Learning Experiences.</h2>
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-7 ">
                                        <div className="h10-process-wrapper">
                                            <div className="h10-process-item tj-sticky-panel-3">
                                                <h6 className="h10-process-sln">Security</h6>
                                                <div className="h10-process-icon">
                                                    <i className="fas fa-chart-line"></i>
                                                </div>
                                                <div className="h10-process-content">
                                                <h4 className="title">Cybersecurity Workshops and Bootcamps</h4>
                                                <p className="desc">Hands-on sessions with industry professionals on tools, techniques, and frameworks.</p>
                                                </div>
                                            </div>
                                            <div className="h10-process-item tj-sticky-panel-3">
                                                <h6 className="h10-process-sln">Learning</h6>
                                                <div className="h10-process-icon">
                                                    <i className="fas fa-globe"></i>
                                                </div>
                                                <div className="h10-process-content">
                                                <h4 className="title">Hackathons and Competitions</h4>
                                                <p className="desc">Platforms to test skills in ethical hacking and security solutions.</p>
                                                </div>
                                            </div>
                                            <div className="h10-process-item tj-sticky-panel-3">
                                                <h6 className="h10-process-sln">Experience</h6>
                                                <div className="h10-process-icon">
                                                    <i className="fas fa-circle-check"></i>
                                                </div>
                                                <div className="h10-process-content">
                                                    <h4 className="title">Internships and Industry Projects</h4>
                                                    <p className="desc">Real-world exposure through partnerships with cybersecurity firms.</p>
                                                </div>
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
                            <div className="bg-shape-3">
                                <Image src="/assets/images/shape/h7-testimonial-shape-blur.svg" alt="" width={400} height={300} style={{ width: "100%", height: "auto" }} />
                            </div>
                        </section>
                        {/* end: Activities & Initiatives Section */}

                        {/* start: Research & Development Section */}
                        <section className="h8-service overflow-hidden section-gap">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="sec-heading style-3 sec-heading-centered">
                                            <span className="sub-title wow fadeInUp" data-wow-delay=".3s">
                                                <i className="fas fa-box"></i> Research & Development
                                            </span>
                                            <h2 className="sec-title title-anim">Cutting-Edge Research Areas.</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="container gap-30">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="service-wrapper h8-service-wrapper wow bounceInLeft" data-wow-delay=".3s">
                                            <div className="row">
                                                <div className="col-12 col-md-6 col-xl-4">
                                                    <div className="service-item h8-service-item">
                                                        
                                                        <h4 className="title">Malware Analysis and Prevention</h4>
                                                        <div className="service-content">
                                                            <p className="desc">Advanced research in malware detection, analysis techniques, and prevention strategies.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-6 col-xl-4">
                                                    <div className="service-item h8-service-item">
                                                        
                                                        <h4 className="title">Threat Intelligence and Incident Response</h4>
                                                        <div className="service-content">
                                                            <p className="desc">Research in threat detection, incident response strategies, and security intelligence gathering.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-6 col-xl-4">
                                                    <div className="service-item h8-service-item">
                                                        
                                                        <h4 className="title">Secure Software Development</h4>
                                                        <div className="service-content">
                                                            <p className="desc">Research in secure coding practices, vulnerability assessment, and secure software lifecycle management.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-6 col-xl-4">
                                                    <div className="service-item h8-service-item">
                                                        
                                                        <h4 className="title">Blockchain Security and Cryptographic Solutions</h4>
                                                        <div className="service-content">
                                                            <p className="desc">Research in blockchain security, cryptographic protocols, and distributed ledger security.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-6 col-xl-4">
                                                    <div className="service-item h8-service-item">
                                                        
                                                        <h4 className="title">AI and Machine Learning in Cyber Threat Detection</h4>
                                                        <div className="service-content">
                                                            <p className="desc">Research in AI-powered threat detection, machine learning for cybersecurity, and automated security systems.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* end: Research & Development Section */}

                        {/* start: Career Opportunities Section */}
                        <section className="h8-service overflow-hidden section-gap">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="sec-heading style-3 sec-heading-centered">
                                            <span className="sub-title wow fadeInUp" data-wow-delay=".3s"><i className="fas fa-box"></i> Career Opportunities</span>
                                            <h2 className="sec-title title-anim">Diverse Career Paths in Cyber Security.</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="container gap-30">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="service-wrapper h8-service-wrapper wow bounceInLeft" data-wow-delay=".3s">
                                            <div className="row">
                                                <div className="col-12 col-md-6 col-xl-4">
                                                    <div className="service-item h8-service-item">
                                                        
                                                        <h4 className="title">Cybersecurity Analyst</h4>
                                                        <div className="service-content">
                                                            <p className="desc">Monitor and analyze security threats, implement protective measures, and respond to security incidents.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-6 col-xl-4">
                                                    <div className="service-item h8-service-item">
                                                        
                                                        <h4 className="title">Ethical Hacker</h4>
                                                        <div className="service-content">
                                                            <p className="desc">Identify vulnerabilities in systems and networks through authorized penetration testing and security assessments.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-6 col-xl-4">
                                                    <div className="service-item h8-service-item">
                                                        
                                                        <h4 className="title">Digital Forensics Expert</h4>
                                                        <div className="service-content">
                                                            <p className="desc">Investigate cybercrimes, recover digital evidence, and analyze digital artifacts for legal proceedings.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-6 col-xl-4">
                                                    <div className="service-item h8-service-item">
                                                        
                                                        <h4 className="title">Information Security Manager</h4>
                                                        <div className="service-content">
                                                            <p className="desc">Oversee organizational security policies, manage security teams, and ensure compliance with security standards.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-6 col-xl-4">
                                                    <div className="service-item h8-service-item">
                                                        
                                                        <h4 className="title">Security Consultant</h4>
                                                        <div className="service-content">
                                                            <p className="desc">Provide expert advice on security strategies, risk assessment, and implementation of security solutions.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-6 col-xl-4">
                                                    <div className="service-item h8-service-item">
                                                        
                                                        <h4 className="title">Cyber Risk Analyst</h4>
                                                        <div className="service-content">
                                                            <p className="desc">Assess and analyze cyber risks, develop risk mitigation strategies, and ensure organizational resilience.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* end: Career Opportunities Section */}

                        
                    </main>

                    {/* start: Footer Section */}
                    <Footer />
                    {/* end: Footer Section */}
                </div>
            </div>
        </>
    );
}



