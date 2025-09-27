import Image from 'next/image';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function DepartmentOfBusinessAdministration() {
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
                                                <p className="h6-hero-history-desc">Excellence in Business Administration Education with comprehensive programs since 1987-1988, fostering leadership and innovation in business and management.</p>
                                            </div>
                                            
                                        </div>
                                    </div>
                                    <div className="col-lg-8 col-xl-9">
                                        <div className="banner-content-2">
                                            <h1 className="banner-title text-anim">Department of Business Administration <i className="fas fa-curve-arrow wow fadeInRight" data-wow-delay=".7s"></i>
                                            </h1>
                                            <div className="banner-desc-area wow fadeInUp" data-wow-delay=".7s">
                                                <a className="tj-primary-btn" href="#">
                                                    <span className="btn-text"><span>Apply Now</span></span>
                                                    <span className="btn-icon"><i className="fas fa-arrow-right-long"></i></span>
                                                </a>
                                                <div className="banner-desc">A dynamic center for nurturing future business leaders and entrepreneurs with comprehensive understanding of management principles and real-world business practices.
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
                                                <video autoPlay loop muted playsInline data-wf-ignore="true" data-object-fit="cover" poster="/assets/images/hero/h10-hero-banner.webp">
                                                    <source src="/assets/video/h10-banner-videio.webp" data-wf-ignore="true" />
                                                    <source src="/assets/video/h10-banner-videio.webp" data-wf-ignore="true" />
                                                </video>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-shape-1">
                                <Image src="/assets/images/shape/pattern-2.svg" alt="Decorative pattern" width={100} height={100} />
                            </div>
                            <div className="bg-shape-2">
                                <Image src="/assets/images/shape/pattern-3.svg" alt="Decorative pattern" width={100} height={100} />
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
                                                    <h2 className="sec-title text-anim">Comprehensive Business Administration Curriculum.</h2>
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
                                                                <h4 className="title"><a href="/department-of-bba-sf">Principles of Management</a></h4>
                                                                <p className="desc">Fundamental concepts and practices of effective management and organizational behavior.
                                                                </p>
                                                                <a className="text-btn" href="/department-of-bba-sf">
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
                                                                <h4 className="title"><a href="/department-of-bba-sf">Financial Accounting and Economics</a></h4>
                                                                <p className="desc">Core financial principles, accounting practices, and economic analysis.
                                                                </p>
                                                                <a className="text-btn" href="/department-of-bba-sf">
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
                                                                <h4 className="title"><a href="/department-of-bba-sf">Marketing Management</a></h4>
                                                                <p className="desc">Strategic marketing principles and customer relationship management.
                                                                </p>
                                                                <a className="text-btn" href="/department-of-bba-sf">
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
                                                                <h4 className="title"><a href="/department-of-bba-sf">Human Resource Management</a></h4>
                                                                <p className="desc">People management, organizational development, and talent acquisition.
                                                                </p>
                                                                <a className="text-btn" href="/department-of-bba-sf">
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
                                                <Image data-speed=".8" src="/assets/images/img/department-of-computer-science.png" alt="Business Administration Department" width={500} height={320} style={{ width: '100%', height: 'auto', maxHeight: '320px', objectFit: 'cover' }} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-7">
                                        <div className="h10-about-content-wrapper">
                                            <div className="sec-heading style-3 ">
                                                <span className="sub-title wow fadeInUp" data-wow-delay=".3s"><i className="fas fa-box"></i> ABOUT BUSINESS ADMINISTRATION</span>
                                                <h2 className="sec-title title-highlight wow fadeInUp" data-wow-delay=".3s">Nurturing Future Business Leaders.
                                                </h2>
                                            </div>
                                            <div className="row">
                                                <div className="col-12 col-md-6 d-none d-md-block d-lg-none">
                                                    <div className="about-img-area h10-about-banner wow bounceInLeft" data-wow-delay=".3s">
                                                        <div className="about-img">
                                                            <Image src="/assets/images/img/department-of-computer-science.png" alt="Business Administration Department" width={500} height={300} style={{ width: '100%', height: 'auto', maxHeight: '300px', objectFit: 'cover' }} />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-6 col-lg-12">
                                                    <div className="h10-about-content">
                                                        <div className="customers-box style-3 h10-about-clients wow fadeInUp" data-wow-delay=".4s">
                                                            <div className="customers">
                                                                <ul>
                                                                    <li className="wow fadeInLeft" data-wow-delay=".2s"><Image src="/assets/images/testimonial/client-1.webp" alt="Student testimonial" width={50} height={50} /></li>
                                                                    <li className="wow fadeInLeft" data-wow-delay=".3s"><Image src="/assets/images/testimonial/client-2.webp" alt="Student testimonial" width={50} height={50} /></li>
                                                                    <li className="wow fadeInLeft" data-wow-delay=".4s"><Image src="/assets/images/testimonial/client-3.webp" alt="Student testimonial" width={50} height={50} /></li>
                                                                    <li className="wow fadeInLeft" data-wow-delay=".5s"><span><i className="fas fa-plus"></i></span></li>
                                                                </ul>
                                                            </div>
                                                        </div>

                                                        <p className="desc wow fadeInUp" data-wow-delay=".4s">The Department of Business Administration is a dynamic center for nurturing future business leaders and entrepreneurs. Focused on providing a comprehensive understanding of management principles and real-world business practices, the department equips students with the knowledge, skills, and confidence to excel in today&apos;s competitive global marketplace.</p>

                                                        <p className="desc wow fadeInUp" data-wow-delay=".5s">Our BBA program offers a robust curriculum designed to cover core areas of business and management, including principles of management, financial accounting and economics, marketing management, human resource management, business analytics and information systems, and strategic management and entrepreneurship.</p>

                                                        <p className="desc wow fadeInUp" data-wow-delay=".6s">With industry-relevant curriculum designed to meet the evolving demands of the corporate world, experienced faculty comprising qualified academicians and industry professionals, practical exposure through case studies, live projects, internships, and industrial visits, and leadership development programs, we ensure our students are well-prepared for successful careers in diverse industries and entrepreneurial ventures.</p>

                                                        <div className="h9-about-funfact h10-about-funfact">
                                                            <div className="countup-item">
                                                                <div className="inline-content">
                                                                    <span className="odometer countup-number" data-count="2"></span>
                                                                    <span className="count-plus"> Years</span>
                                                                </div>
                                                                <span className="count-text">Comprehensive Business Administration programs.</span>
                                                            </div>
                                                            <div className="countup-item">
                                                                <div className="inline-content">
                                                                    <span className="odometer countup-number" data-count="95"></span>
                                                                    <span className="count-plus">%</span>
                                                                </div>
                                                                <span className="count-text">Graduate employment rate in business and management sectors.</span>
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
                                            <h2 className="sec-title text-anim">Comprehensive Business Administration Learning Experience.</h2>
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
                                                    <p className="desc">Comprehensive theoretical lectures provide students with the necessary foundational knowledge covering management principles, business theories, financial concepts, and industry fundamentals.</p>
                                                </div>
                                            </div>
                                            <div className="h10-process-item tj-sticky-panel-3">
                                                <h6 className="h10-process-sln">Practical</h6>
                                                <div className="h10-process-icon">
                                                    <i className="fas fa-globe"></i>
                                                </div>
                                                <div className="h10-process-content">
                                                    <h4 className="title">Practical Workshops</h4>
                                                    <p className="desc">Hands-on practical sessions allow students to gain experience in business simulations, case studies, project management, and decision-making using modern business tools and technologies.</p>
                                                </div>
                                            </div>
                                            <div className="h10-process-item tj-sticky-panel-3">
                                                <h6 className="h10-process-sln">Research</h6>
                                                <div className="h10-process-icon">
                                                    <i className="fas fa-circle-check"></i>
                                                </div>
                                                <div className="h10-process-content">
                                                    <h4 className="title">Business Projects</h4>
                                                    <p className="desc">Business projects provide students with opportunities to apply their knowledge and skills to real-world business challenges and contribute to the advancement of innovative and sustainable business practices.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-shape-1">
                                <Image src="/assets/images/shape/pattern-2.svg" alt="Decorative pattern" width={100} height={100} />
                            </div>
                            <div className="bg-shape-2">
                                <Image src="/assets/images/shape/pattern-3.svg" alt="Decorative pattern" width={100} height={100} />
                            </div>
                            <div className="bg-shape-3">
                                <Image src="/assets/images/shape/h7-testimonial-shape-blur.svg" alt="Decorative blur effect" width={100} height={100} />
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
                                                    <h2 className="sec-title text-anim">Foundation for Success in Business Administration.</h2>
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
                                                        <p>Overall, the Business Administration program provides students with a solid foundation in the principles and applications of business and management, equipping them with the necessary knowledge and skills to embark on a successful career in business analysis, marketing, human resources, finance, operations, and entrepreneurship.</p>
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
                                                                To be a leading department in business education, fostering innovation, leadership, and ethical practices for sustainable growth and global impact.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-6 col-xl-6">
                                                    <div className="service-item h8-service-item">
                                                    
                                                        <h4 className="title">MISSION</h4>
                                                        <div className="service-content">
                                                            <p className="desc">To deliver quality education in business administration, blending theory with practical applications. To foster critical thinking, leadership, and entrepreneurial skills in students. To promote ethical and socially responsible practices in business and management. To prepare students for dynamic careers in diverse industries and entrepreneurial ventures.</p>
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
                                            <h2 className="sec-title title-anim">Comprehensive Business Administration Education.</h2>
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
                                                        
                                                        <h4 className="title">Principles of Management</h4>
                                                        <div className="service-content">
                                                            <p className="desc">Fundamental concepts and practices of effective management and organizational behavior.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-6 col-xl-4">
                                                    <div className="service-item h8-service-item">
                                                       
                                                        <h4 className="title">Financial Accounting and Economics</h4>
                                                        <div className="service-content">
                                                            <p className="desc">Core financial principles, accounting practices, and economic analysis.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-6 col-xl-4">
                                                    <div className="service-item h8-service-item">
                                                        
                                                        <h4 className="title">Marketing Management</h4>
                                                        <div className="service-content">
                                                            <p className="desc">Strategic marketing principles and customer relationship management.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-6 col-xl-4">
                                                    <div className="service-item h8-service-item">
                                                        
                                                        <h4 className="title">Human Resource Management</h4>
                                                        <div className="service-content">
                                                            <p className="desc">People management, organizational development, and talent acquisition.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-6 col-xl-4">
                                                    <div className="service-item h8-service-item">
                                                        
                                                        <h4 className="title">Business Analytics and Information Systems</h4>
                                                        <div className="service-content">
                                                            <p className="desc">Data analysis, business intelligence, and information technology applications.</p>
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
                                            <h2 className="sec-title title-anim">Excellence in Business Administration Education.</h2>
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
                                                        
                                                        <h4 className="title">Industry-Relevant Curriculum</h4>
                                                        <div className="service-content">
                                                            <p className="desc">Designed to meet the evolving demands of the corporate world.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-6 col-xl-3">
                                                    <div className="service-item h8-service-item">
                                                        
                                                        <h4 className="title">Experienced Faculty</h4>
                                                        <div className="service-content">
                                                            <p className="desc">A team of qualified academicians and industry professionals.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-6 col-xl-3">
                                                    <div className="service-item h8-service-item">
                                                        
                                                        <h4 className="title">Practical Exposure</h4>
                                                        <div className="service-content">
                                                            <p className="desc">Case studies, live projects, internships, and industrial visits.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-6 col-xl-3">
                                                    <div className="service-item h8-service-item">
                                                        
                                                        <h4 className="title">Leadership Development</h4>
                                                        <div className="service-content">
                                                            <p className="desc">Training programs and activities to foster leadership and teamwork skills.</p>
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
                                                <h6 className="h10-process-sln">Business</h6>
                                                <div className="h10-process-icon">
                                                    <i className="fas fa-chart-line"></i>
                                                </div>
                                                <div className="h10-process-content">
                                                    <h4 className="title">Management Club</h4>
                                                    <p className="desc">A platform for students to engage in business quizzes, debates, and competitions.</p>
                                                </div>
                                            </div>
                                            <div className="h10-process-item tj-sticky-panel-3">
                                                <h6 className="h10-process-sln">Learning</h6>
                                                <div className="h10-process-icon">
                                                    <i className="fas fa-globe"></i>
                                                </div>
                                                <div className="h10-process-content">
                                                    <h4 className="title">Workshops and Seminars</h4>
                                                    <p className="desc">Sessions with industry experts on contemporary business topics.</p>
                                                </div>
                                            </div>
                                            <div className="h10-process-item tj-sticky-panel-3">
                                                <h6 className="h10-process-sln">Experience</h6>
                                                <div className="h10-process-icon">
                                                    <i className="fas fa-circle-check"></i>
                                                </div>
                                                <div className="h10-process-content">
                                                    <h4 className="title">Community Engagement</h4>
                                                    <p className="desc">CSR initiatives and projects to instill a sense of responsibility toward society.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-shape-1">
                                <Image src="/assets/images/shape/pattern-2.svg" alt="Decorative pattern" width={100} height={100} />
                            </div>
                            <div className="bg-shape-2">
                                <Image src="/assets/images/shape/pattern-3.svg" alt="Decorative pattern" width={100} height={100} />
                            </div>
                            <div className="bg-shape-3">
                                <Image src="/assets/images/shape/h7-testimonial-shape-blur.svg" alt="Decorative blur effect" width={100} height={100} />
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
                                                        
                                                        <h4 className="title">Principles of Management</h4>
                                                        <div className="service-content">
                                                            <p className="desc">Advanced research in management theories, organizational behavior, and leadership practices.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-6 col-xl-4">
                                                    <div className="service-item h8-service-item">
                                                        
                                                        <h4 className="title">Financial Accounting and Economics</h4>
                                                        <div className="service-content">
                                                            <p className="desc">Advanced research in financial management, accounting practices, and economic analysis.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-6 col-xl-4">
                                                    <div className="service-item h8-service-item">
                                                        
                                                        <h4 className="title">Marketing Management</h4>
                                                        <div className="service-content">
                                                            <p className="desc">Research in strategic marketing, consumer behavior, and digital marketing trends.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-6 col-xl-4">
                                                    <div className="service-item h8-service-item">
                                                        
                                                        <h4 className="title">Human Resource Management</h4>
                                                        <div className="service-content">
                                                            <p className="desc">Research in talent management, organizational development, and workplace dynamics.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-6 col-xl-4">
                                                    <div className="service-item h8-service-item">
                                                        
                                                        <h4 className="title">Business Analytics and Information Systems</h4>
                                                        <div className="service-content">
                                                            <p className="desc">Research in data analytics, business intelligence, and information technology applications.</p>
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
                                            <h2 className="sec-title title-anim">Diverse Career Paths in Business Administration.</h2>
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
                                                        
                                                        <h4 className="title">Business Analyst</h4>
                                                        <div className="service-content">
                                                            <p className="desc">Analyze business processes and data to improve efficiency and drive strategic decisions.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-6 col-xl-4">
                                                    <div className="service-item h8-service-item">
                                                        
                                                        <h4 className="title">Marketing Executive</h4>
                                                        <div className="service-content">
                                                            <p className="desc">Develop and implement marketing strategies to promote products and services.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-6 col-xl-4">
                                                    <div className="service-item h8-service-item">
                                                        
                                                        <h4 className="title">Human Resources Manager</h4>
                                                        <div className="service-content">
                                                            <p className="desc">Oversee recruitment, employee relations, and organizational development.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-6 col-xl-4">
                                                    <div className="service-item h8-service-item">
                                                        
                                                        <h4 className="title">Financial Consultant</h4>
                                                        <div className="service-content">
                                                            <p className="desc">Provide financial advice and investment strategies to individuals and businesses.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-6 col-xl-4">
                                                    <div className="service-item h8-service-item">
                                                        
                                                        <h4 className="title">Operations Manager</h4>
                                                        <div className="service-content">
                                                            <p className="desc">Oversee daily operations and ensure efficient business processes.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-6 col-xl-4">
                                                    <div className="service-item h8-service-item">
                                                        
                                                        <h4 className="title">Entrepreneur</h4>
                                                        <div className="service-content">
                                                            <p className="desc">Start and manage your own business ventures and innovative enterprises.</p>
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

                        {/* start: Faculty Section */}
                        <section className="h8-team section-gap section-gap-x">
                            <div className="container">
                                <div className="row h8-team-wrapper gap-0">
                                    <div className="col-lg-3 col-sm-6">
                                        <div className="sec-heading style-3">
                                            <span className="sub-title wow fadeInUp" data-wow-delay=".3s">MEET OUR FACULTY</span>
                                            <h2 className="sec-title title-anim">Experienced Business Administration Faculty Members.</h2>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-sm-6 h8-team-item-wrapper">
                                        <div className="team-item wow fadeInRightBig" data-wow-delay=".1s">
                                            <div className="team-img">
                                                <div className="team-img-inner">
                                                    <Image src="/assets/images/team/bba-sf/Mrs.M.Umarani.png" alt="Mrs. M. Umarani - Assistant Professor & HOD" width={300} height={400} />
                                                </div>
                                                <div className="social-links">
                                                    <ul>
                                                        <li><a href="mailto:umarani.m@jkkn.ac.in" target="_blank"><i className="fa-solid fa-envelope"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="team-content">
                                                <h5 className="title">Mrs. M. Umarani</h5>
                                                <span className="designation">Assistant Professor & HOD</span>
                                                <p className="qualification">M.Com., MBA., M.Phil.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-sm-6 h8-team-item-wrapper">
                                        <div className="team-item wow fadeInRightBig" data-wow-delay=".2s">
                                            <div className="team-img">
                                                <div className="team-img-inner">
                                                    <Image src="/assets/images/team/bba-sf/Mrs.P.Mathiananthi.png" alt="Mrs. P. Mathiananthi - Assistant Professor" width={300} height={400} />
                                                </div>
                                                <div className="social-links">
                                                    <ul>
                                                        <li><a href="mailto:mathiananthi.p@jkkn.ac.in" target="_blank"><i className="fa-solid fa-envelope"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="team-content">
                                                <h5 className="title">Mrs. P. Mathiananthi</h5>
                                                <span className="designation">Assistant Professor</span>
                                                <p className="qualification">MBA.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-sm-6 h8-team-item-wrapper">
                                        <div className="team-item wow fadeInRightBig" data-wow-delay=".3s">
                                            <div className="team-img">
                                                <div className="team-img-inner">
                                                    <Image src="/assets/images/team/bba-sf/Mr.A.K.Prithiviraja.png" alt="Mr. A. K. Prithiviraja - Assistant Professor" width={300} height={400} />
                                                </div>
                                                <div className="social-links">
                                                    <ul>
                                                        <li><a href="mailto:prithiviraja.a@jkkn.ac.in" target="_blank"><i className="fa-solid fa-envelope"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="team-content">
                                                <h5 className="title">Mr. A. K. Prithiviraja</h5>
                                                <span className="designation">Assistant Professor</span>
                                                <p className="qualification">MBA., M.Phil.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-sm-6 h8-team-item-wrapper">
                                        <div className="team-item wow fadeInRightBig" data-wow-delay=".4s">
                                            <div className="team-img">
                                                <div className="team-img-inner">
                                                    <Image src="/assets/images/team/bba-sf/Mr.A.Jegadishkumar.png" alt="Mr. A. Jegadishkumar - Assistant Professor" width={300} height={400} />
                                                </div>
                                                <div className="social-links">
                                                    <ul>
                                                        <li><a href="mailto:jegadishkumar.a@jkkn.ac.in" target="_blank"><i className="fa-solid fa-envelope"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="team-content">
                                                <h5 className="title">Mr. A. Jegadishkumar</h5>
                                                <span className="designation">Assistant Professor</span>
                                                <p className="qualification">M.Com., B.Ed., MBA.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-shape-1">
                                <Image src="/assets/images/shape/pattern-2.svg" alt="Decorative pattern" width={100} height={100} />
                            </div>
                            <div className="bg-shape-2">
                                <Image src="/assets/images/shape/pattern-3.svg" alt="Decorative pattern" width={100} height={100} />
                            </div>
                        </section>
                        {/* end: Faculty Section */}
                    </main>

                    {/* start: Footer Section */}
                    <Footer />
                    {/* end: Footer Section */}
                </div>
            </div>
        </>
    );
}

