import PageLayout from '../../components/PageLayout';
import Image from 'next/image';



import Header from '../../components/Header';
import Footer from '../../components/Footer';
export default function DepartmentOfArtificialIntelligenceAndDataScience() {
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
                                                <p className="h6-hero-history-desc">Excellence in Artificial Intelligence and Data Science Education with comprehensive programs since 1987-1988, fostering innovation and technological advancement in AI and data analytics.</p>
                                            </div>
                                            
                                        </div>
                                    </div>
                                    <div className="col-lg-8 col-xl-9">
                                        <div className="banner-content-2">
                                            <h1 className="banner-title text-anim">Department of Artificial Intelligence and Data Science <i className="fas fa-curve-arrow wow fadeInRight" data-wow-delay=".7s"></i>
                                            </h1>
                                            <div className="banner-desc-area wow fadeInUp" data-wow-delay=".7s">
                                                <a className="tj-primary-btn" href="#">
                                                    <span className="btn-text"><span>Apply Now</span></span>
                                                    <span className="btn-icon"><i className="fas fa-arrow-right-long"></i></span>
                                                </a>
                                                <div className="banner-desc">At the forefront of technological innovation, dedicated to preparing students for careers in the rapidly growing fields of AI and data science with practical skills and cutting-edge technologies.
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
                                                <video autoPlay loop muted playsInline data-wf-ignore="true" data-object-fit="cover" poster="/assets/images/img/department-of-ai-ds-sf.png">
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
                                                                <h4 className="title"><a href="/department-of-ai-ds-sf">Big Data and Cloud Computing</a></h4>
                                                                <p className="desc">Technologies for processing massive datasets and scalable cloud-based solutions.
                                                                </p>
                                                                <a className="text-btn" href="/department-of-ai-ds-sf">
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
                                                <Image data-speed=".8" src="/assets/images/img/department-of-computer-science.png" alt="AI and Data Science Department" width={500} height={320} style={{ width: '100%', height: 'auto', maxHeight: '320px', objectFit: 'cover' }} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-7">
                                        <div className="h10-about-content-wrapper">
                                            <div className="sec-heading style-3 ">
                                                <span className="sub-title wow fadeInUp" data-wow-delay=".3s"><i className="fas fa-box"></i> ABOUT ARTIFICIAL INTELLIGENCE AND DATA SCIENCE</span>
                                                <h2 className="sec-title title-highlight wow fadeInUp" data-wow-delay=".3s">At the Forefront of Technological Innovation.
                                                </h2>
                                            </div>
                                            <div className="row">
                                                <div className="col-12 col-md-6 d-none d-md-block d-lg-none">
                                                    <div className="about-img-area h10-about-banner wow bounceInLeft" data-wow-delay=".3s">
                                                        <div className="about-img">
                                                            <Image src="/assets/images/img/department-of-computer-science.png" alt="AI and Data Science Department" width={500} height={300} style={{ width: '100%', height: 'auto', maxHeight: '300px', objectFit: 'cover' }} />
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

                                                        <p className="desc wow fadeInUp" data-wow-delay=".4s">The Department of Artificial Intelligence and Data Science is at the forefront of technological innovation, dedicated to preparing students for careers in the rapidly growing fields of AI and data science. With a focus on practical skills, advanced analytics, and cutting-edge AI technologies, the department equips students with the expertise needed to analyze data, build intelligent systems, and solve complex problems across various industries.</p>

                                                        <p className="desc wow fadeInUp" data-wow-delay=".5s">Our department offers undergraduate and postgraduate programs that provide a deep dive into both AI and data science concepts, focusing on machine learning and deep learning, natural language processing and computer vision, data analytics and data visualization, big data and cloud computing, and AI ethics and responsible AI.</p>

                                                        <p className="desc wow fadeInUp" data-wow-delay=".6s">With state-of-the-art labs equipped with powerful computing resources and tools for data science and AI model development, industry-relevant curriculum designed to keep pace with the latest advancements in AI and machine learning, experienced faculty comprising academic experts and industry practitioners, and a collaborative environment for interdisciplinary learning, we ensure our students are well-prepared for leadership roles in AI, data science, and technology-driven industries.</p>

                                                        <div className="h9-about-funfact h10-about-funfact">
                                                            <div className="countup-item">
                                                                <div className="inline-content">
                                                                    <span className="odometer countup-number" data-count="2"></span>
                                                                    <span className="count-plus"> Years</span>
                                                                </div>
                                                                <span className="count-text">Comprehensive AI and Data Science programs.</span>
                                                            </div>
                                                            <div className="countup-item">
                                                                <div className="inline-content">
                                                                    <span className="odometer countup-number" data-count="95"></span>
                                                                    <span className="count-plus">%</span>
                                                                </div>
                                                                <span className="count-text">Graduate employment rate in AI and data science sectors.</span>
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
                                            <h2 className="sec-title text-anim">Comprehensive Artificial Intelligence and Data Science Learning Experience.</h2>
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
                                                    <p className="desc">Comprehensive theoretical lectures provide students with the necessary foundational knowledge covering AI algorithms, machine learning concepts, data science methodologies, and statistical analysis techniques.</p>
                                                </div>
                                            </div>
                                            <div className="h10-process-item tj-sticky-panel-3">
                                                <h6 className="h10-process-sln">Practical</h6>
                                                <div className="h10-process-icon">
                                                    <i className="fas fa-globe"></i>
                                                </div>
                                                <div className="h10-process-content">
                                                    <h4 className="title">Practical Workshops</h4>
                                                    <p className="desc">Hands-on practical sessions allow students to gain experience in machine learning algorithms, AI frameworks, data visualization tools, and real-world data analysis projects using modern AI and data science technologies.</p>
                                                </div>
                                            </div>
                                            <div className="h10-process-item tj-sticky-panel-3">
                                                <h6 className="h10-process-sln">Research</h6>
                                                <div className="h10-process-icon">
                                                    <i className="fas fa-circle-check"></i>
                                                </div>
                                                <div className="h10-process-content">
                                                    <h4 className="title">AI and Data Science Projects</h4>
                                                    <p className="desc">AI and data science projects provide students with opportunities to apply their knowledge and skills to real-world problems, build intelligent systems, and contribute to the advancement of innovative AI and data analytics solutions.</p>
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
                                                    <h2 className="sec-title text-anim">Foundation for Success in Artificial Intelligence and Data Science.</h2>
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
                                                        <p>Overall, the Artificial Intelligence and Data Science program provides students with a solid foundation in the principles and applications of AI and data analytics, equipping them with the necessary knowledge and skills to embark on a successful career in data science, machine learning engineering, AI research, business intelligence, data analysis, and AI solutions architecture.</p>
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
                                                                To be a pioneering department in Artificial Intelligence and Data Science, fostering innovation and developing professionals who drive data-driven decisions and intelligent systems for the future.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-6 col-xl-6">
                                                    <div className="service-item h8-service-item">
                                                    
                                                        <h4 className="title">MISSION</h4>
                                                        <div className="service-content">
                                                            <p className="desc">To provide world-class education in AI and Data Science, combining theoretical concepts with hands-on applications. To encourage research and innovation in machine learning, data analytics, and artificial intelligence technologies. To develop ethical and responsible professionals who understand the societal impacts of AI and data science. To prepare students for leadership roles in AI, data science, and technology-driven industries.</p>
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
                                            <h2 className="sec-title title-anim">Comprehensive Artificial Intelligence and Data Science Education.</h2>
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
                                                    
                                                        <h4 className="title">Machine Learning and Deep Learning</h4>
                                                        <div className="service-content">
                                                            <p className="desc">Advanced algorithms and neural networks for intelligent system development.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-6 col-xl-4">
                                                    <div className="service-item h8-service-item">
                                                    
                                                        <h4 className="title">Natural Language Processing and Computer Vision</h4>
                                                        <div className="service-content">
                                                            <p className="desc">AI technologies for understanding and processing human language and visual data.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-6 col-xl-4">
                                                    <div className="service-item h8-service-item">
                                                    
                                                        <h4 className="title">Data Analytics and Data Visualization</h4>
                                                        <div className="service-content">
                                                            <p className="desc">Techniques for analyzing large datasets and creating meaningful visual representations.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-6 col-xl-4">
                                                    <div className="service-item h8-service-item">
                                                    
                                                        <h4 className="title">Big Data and Cloud Computing</h4>
                                                        <div className="service-content">
                                                            <p className="desc">Technologies for processing massive datasets and scalable cloud-based solutions.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-6 col-xl-4">
                                                    <div className="service-item h8-service-item">
                                                    
                                                        <h4 className="title">AI Ethics and Responsible AI</h4>
                                                        <div className="service-content">
                                                            <p className="desc">Ethical considerations and responsible practices in AI development and deployment.</p>
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
                                            <h2 className="sec-title title-anim">Excellence in Artificial Intelligence and Data Science Education.</h2>
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
                                                    
                                                        <h4 className="title">State-of-the-Art Labs</h4>
                                                        <div className="service-content">
                                                            <p className="desc">Advanced labs equipped with powerful computing resources and tools for data science and AI model development.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-6 col-xl-3">
                                                    <div className="service-item h8-service-item">
                                                    
                                                        <h4 className="title">Industry-Relevant Curriculum</h4>
                                                        <div className="service-content">
                                                            <p className="desc">Courses designed to keep pace with the latest advancements in AI, machine learning, and data analytics.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-6 col-xl-3">
                                                    <div className="service-item h8-service-item">
                                                    
                                                        <h4 className="title">Experienced Faculty</h4>
                                                        <div className="service-content">
                                                            <p className="desc">A mix of academic experts and industry practitioners with deep expertise in AI, data science, and related technologies.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-6 col-xl-3">
                                                    <div className="service-item h8-service-item">
                                                    
                                                        <h4 className="title">Collaborative Environment</h4>
                                                        <div className="service-content">
                                                            <p className="desc">Opportunities for interdisciplinary learning with departments in business, healthcare, and engineering.</p>
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
                                                <h6 className="h10-process-sln">AI</h6>
                                                <div className="h10-process-icon">
                                                    <i className="fas fa-chart-line"></i>
                                                </div>
                                                <div className="h10-process-content">
                                                <h4 className="title">Workshops and Training Programs</h4>
                                                <p className="desc">Hands-on sessions on machine learning algorithms, AI frameworks, and data visualization tools.</p>
                                                </div>
                                            </div>
                                            <div className="h10-process-item tj-sticky-panel-3">
                                                <h6 className="h10-process-sln">Learning</h6>
                                                <div className="h10-process-icon">
                                                    <i className="fas fa-globe"></i>
                                                </div>
                                                <div className="h10-process-content">
                                                <h4 className="title">Hackathons and Data Challenges</h4>
                                                <p className="desc">Competitions to apply AI and data science skills to real-world problems.</p>
                                                </div>
                                            </div>
                                            <div className="h10-process-item tj-sticky-panel-3">
                                                <h6 className="h10-process-sln">Experience</h6>
                                                <div className="h10-process-icon">
                                                    <i className="fas fa-circle-check"></i>
                                                </div>
                                                <div className="h10-process-content">
                                                    <h4 className="title">Research Projects and Collaborations</h4>
                                                    <p className="desc">Opportunities to work on cutting-edge research in AI, data science, and their applications.</p>
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
                                                    
                                                        <h4 className="title">Predictive Analytics and Data Mining</h4>
                                                        <div className="service-content">
                                                            <p className="desc">Advanced research in predictive modeling, pattern recognition, and data mining techniques.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-6 col-xl-4">
                                                    <div className="service-item h8-service-item">
                                                    
                                                        <h4 className="title">Artificial Intelligence and Robotics</h4>
                                                        <div className="service-content">
                                                            <p className="desc">Research in intelligent systems, autonomous robots, and AI-driven automation.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-6 col-xl-4">
                                                    <div className="service-item h8-service-item">
                                                    
                                                        <h4 className="title">AI in Healthcare and Biotechnology</h4>
                                                        <div className="service-content">
                                                            <p className="desc">Research in AI applications for medical diagnosis, drug discovery, and healthcare optimization.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-6 col-xl-4">
                                                    <div className="service-item h8-service-item">
                                                    
                                                        <h4 className="title">Big Data Processing and Cloud-based Solutions</h4>
                                                        <div className="service-content">
                                                            <p className="desc">Research in scalable data processing, cloud computing, and distributed systems.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-6 col-xl-4">
                                                    <div className="service-item h8-service-item">
                                                    
                                                        <h4 className="title">Ethical AI and Explainable AI</h4>
                                                        <div className="service-content">
                                                            <p className="desc">Research in ethical AI development, explainable AI systems, and responsible AI practices.</p>
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
                                            <h2 className="sec-title title-anim">Diverse Career Paths in Artificial Intelligence and Data Science.</h2>
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
                                                        
                                                        <h4 className="title">Data Scientist</h4>
                                                        <div className="service-content">
                                                            <p className="desc">Extract insights from complex datasets and build predictive models for business solutions.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-6 col-xl-4">
                                                    <div className="service-item h8-service-item">
                                                    
                                                        <h4 className="title">Machine Learning Engineer</h4>
                                                        <div className="service-content">
                                                            <p className="desc">Design and implement machine learning systems and algorithms for real-world applications.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-6 col-xl-4">
                                                    <div className="service-item h8-service-item">
                                                       
                                                        <h4 className="title">AI Researcher</h4>
                                                        <div className="service-content">
                                                            <p className="desc">Conduct cutting-edge research in artificial intelligence and develop innovative AI solutions.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-6 col-xl-4">
                                                    <div className="service-item h8-service-item">
                                                        
                                                        <h4 className="title">Business Intelligence Analyst</h4>
                                                        <div className="service-content">
                                                            <p className="desc">Transform data into actionable business insights and strategic recommendations.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-6 col-xl-4">
                                                    <div className="service-item h8-service-item">
                                                        
                                                        <h4 className="title">Data Analyst</h4>
                                                        <div className="service-content">
                                                            <p className="desc">Analyze data to identify trends, patterns, and insights that drive business decisions.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-6 col-xl-4">
                                                    <div className="service-item h8-service-item">
                                                        
                                                        <h4 className="title">AI Solutions Architect</h4>
                                                        <div className="service-content">
                                                            <p className="desc">Design and implement comprehensive AI solutions for enterprise-level applications.</p>
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
                                            <h2 className="sec-title title-anim">Experienced Artificial Intelligence and Data Science Faculty Members.</h2>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-sm-6 h8-team-item-wrapper">
                                        <div className="team-item wow fadeInRightBig" data-wow-delay=".1s">
                                            <div className="team-img">
                                                <div className="team-img-inner">
                                                    <Image src="/assets/images/team/ai-ds-sf/Mr.T.Sathes kumar.png" alt="Mr. T. Sathes Kumar - Assistant Professor & HOD" width={300} height={400} />
                                                </div>
                                                <div className="social-links">
                                                    <ul>
                                                        <li><a href="mailto:satheskumar.t@jkkn.ac.in" target="_blank"><i className="fa-solid fa-envelope"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="team-content">
                                                <h5 className="title">Mr. T. Sathes Kumar</h5>
                                                <span className="designation">Assistant Professor & HOD</span>
                                                <p className="qualification">M.C.A., M.Phil.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-sm-6 h8-team-item-wrapper">
                                        <div className="team-item wow fadeInRightBig" data-wow-delay=".2s">
                                            <div className="team-img">
                                                <div className="team-img-inner">
                                                    <Image src="/assets/images/team/ai-ds-sf/DR.M.GOMATHI.png" alt="Dr. M. Gomathi - Assistant Professor" width={300} height={400} />
                                                </div>
                                                <div className="social-links">
                                                    <ul>
                                                        <li><a href="mailto:gomathi.m@jkkn.ac.in" target="_blank"><i className="fa-solid fa-envelope"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="team-content">
                                                <h5 className="title">Dr. M. Gomathi</h5>
                                                <span className="designation">Assistant Professor & HOD</span>
                                                <p className="qualification">M.C.A., M.Phil., Ph.D</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-sm-6 h8-team-item-wrapper">
                                        <div className="team-item wow fadeInRightBig" data-wow-delay=".3s">
                                            <div className="team-img">
                                                <div className="team-img-inner">
                                                    <Image src="/assets/images/team/ai-ds-sf/Mr.B.N.Dhanasekaran.png" alt="Mr. B. N. Dhanasekaran - Assistant Professor" width={300} height={400} />
                                                </div>
                                                <div className="social-links">
                                                    <ul>
                                                        <li><a href="mailto:dhanasekaran.b@jkkn.ac.in" target="_blank"><i className="fa-solid fa-envelope"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="team-content">
                                                <h5 className="title">Mr. B. N. Dhanasekaran</h5>
                                                <span className="designation">Assistant Professor</span>
                                                <p className="qualification">M.C.A., M.Phil., S.E.T., N.E.T.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-sm-6 h8-team-item-wrapper">
                                        <div className="team-item wow fadeInRightBig" data-wow-delay=".4s">
                                            <div className="team-img">
                                                <div className="team-img-inner">
                                                    <Image src="/assets/images/team/ai-ds-sf/Mrs.N.Umadevi.png" alt="Mrs. N. Umadevi - Assistant Professor" width={300} height={400} />
                                                </div>
                                                <div className="social-links">
                                                    <ul>
                                                        <li><a href="mailto:umadevi.n@jkkn.ac.in" target="_blank"><i className="fa-solid fa-envelope"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="team-content">
                                                <h5 className="title">Mrs. N. Umadevi</h5>
                                                <span className="designation">Assistant Professor</span>
                                                <p className="qualification">M.C.A., M.Phil.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-sm-6 h8-team-item-wrapper">
                                        <div className="team-item wow fadeInRightBig" data-wow-delay=".5s">
                                            <div className="team-img">
                                                <div className="team-img-inner">
                                                    <Image src="/assets/images/team/ai-ds-sf/Mr.S.Balaji.png" alt="Mr. S. Balaji - Assistant Professor" width={300} height={400} />
                                                </div>
                                                <div className="social-links">
                                                    <ul>
                                                        <li><a href="mailto:balaji.s@jkkn.ac.in" target="_blank"><i className="fa-solid fa-envelope"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="team-content">
                                                <h5 className="title">Mr. S. Balaji</h5>
                                                <span className="designation">Assistant Professor</span>
                                                <p className="qualification">M.C.A., M.Phil.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-sm-6 h8-team-item-wrapper">
                                        <div className="team-item wow fadeInRightBig" data-wow-delay=".6s">
                                            <div className="team-img">
                                                <div className="team-img-inner">
                                                    <Image src="/assets/images/team/ai-ds-sf/Mrs.S.Priyanga.png" alt="Mrs. S. Priyanga - Assistant Professor" width={300} height={400} />
                                                </div>
                                                <div className="social-links">
                                                    <ul>
                                                        <li><a href="mailto:priyanga.s@jkkn.ac.in" target="_blank"><i className="fa-solid fa-envelope"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="team-content">
                                                <h5 className="title">Mrs. S. Priyanga</h5>
                                                <span className="designation">Assistant Professor</span>
                                                <p className="qualification">M.C.A., M.Phil.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-sm-6 h8-team-item-wrapper">
                                        <div className="team-item wow fadeInRightBig" data-wow-delay=".7s">
                                            <div className="team-img">
                                                <div className="team-img-inner">
                                                    <Image src="/assets/images/team/ai-ds-sf/Ms.K.Epshiba.png" alt="Ms. K. Epshiba - Assistant Professor" width={300} height={400} />
                                                </div>
                                                <div className="social-links">
                                                    <ul>
                                                        <li><a href="mailto:epshiba.k@jkkn.ac.in" target="_blank"><i className="fa-solid fa-envelope"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="team-content">
                                                <h5 className="title">Ms. K. Epshiba</h5>
                                                <span className="designation">Assistant Professor</span>
                                                <p className="qualification">M.Sc.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-sm-6 h8-team-item-wrapper">
                                        <div className="team-item wow fadeInRightBig" data-wow-delay=".8s">
                                            <div className="team-img">
                                                <div className="team-img-inner">
                                                    <Image src="/assets/images/team/ai-ds-sf/Mrs.P.Priyanka.png" alt="Mrs. P. Priyanka - Assistant Professor" width={300} height={400} />
                                                </div>
                                                <div className="social-links">
                                                    <ul>
                                                        <li><a href="mailto:priyanka.p@jkkn.ac.in" target="_blank"><i className="fa-solid fa-envelope"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="team-content">
                                                <h5 className="title">Mrs. P. Priyanka</h5>
                                                <span className="designation">Assistant Professor</span>
                                                <p className="qualification">M.Sc., M.Phil., B.Ed.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-sm-6 h8-team-item-wrapper">
                                        <div className="team-item wow fadeInRightBig" data-wow-delay=".9s">
                                            <div className="team-img">
                                                <div className="team-img-inner">
                                                    <Image src="/assets/images/team/ai-ds-sf/Dr.A.Kamalaveni.png" alt="Dr. A. Kamalaveni - Assistant Professor" width={300} height={400} />
                                                </div>
                                                <div className="social-links">
                                                    <ul>
                                                        <li><a href="mailto:kamalaveni.a@jkkn.ac.in" target="_blank"><i className="fa-solid fa-envelope"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="team-content">
                                                <h5 className="title">Dr. A. Kamalaveni</h5>
                                                <span className="designation">Assistant Professor</span>
                                                <p className="qualification">MCA., MEd., NET., SET., M.Phil., PhD., M.Sc., NET.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-sm-6 h8-team-item-wrapper">
                                        <div className="team-item wow fadeInRightBig" data-wow-delay="1.0s">
                                            <div className="team-img">
                                                <div className="team-img-inner">
                                                    <Image src="/assets/images/team/ai-ds-sf/Mrs.S.Brintha.png" alt="Mrs. S. Brintha - Assistant Professor" width={300} height={400} />
                                                </div>
                                                <div className="social-links">
                                                    <ul>
                                                        <li><a href="mailto:brintha.s@jkkn.ac.in" target="_blank"><i className="fa-solid fa-envelope"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="team-content">
                                                <h5 className="title">Mrs. S. Brintha</h5>
                                                <span className="designation">Assistant Professor</span>
                                                <p className="qualification">M.C.A., M.Phil.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-sm-6 h8-team-item-wrapper">
                                        <div className="team-item wow fadeInRightBig" data-wow-delay="1.1s">
                                            <div className="team-img">
                                                <div className="team-img-inner">
                                                    <Image src="/assets/images/team/ai-ds-sf/Mrs.P.Kowsalya.png" alt="Mrs. P. Kowsalya - Assistant Professor" width={300} height={400} />
                                                </div>
                                                <div className="social-links">
                                                    <ul>
                                                        <li><a href="mailto:kowsalya.p@jkkn.ac.in" target="_blank"><i className="fa-solid fa-envelope"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="team-content">
                                                <h5 className="title">Mrs. P. Kowsalya</h5>
                                                <span className="designation">Assistant Professor</span>
                                                <p className="qualification">M.C.A.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-sm-6 h8-team-item-wrapper">
                                        <div className="team-item wow fadeInRightBig" data-wow-delay="1.2s">
                                            <div className="team-img">
                                                <div className="team-img-inner">
                                                    <Image src="/assets/images/team/ai-ds-sf/Mrs.J.Devi.png" alt="Mrs. J. Devi - Assistant Professor" width={300} height={400} />
                                                </div>
                                                <div className="social-links">
                                                    <ul>
                                                        <li><a href="mailto:devi.j@jkkn.ac.in" target="_blank"><i className="fa-solid fa-envelope"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="team-content">
                                                <h5 className="title">Mrs. J. Devi</h5>
                                                <span className="designation">Assistant Professor</span>
                                                <p className="qualification">M.Sc., M.Phil.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-sm-6 h8-team-item-wrapper">
                                        <div className="team-item wow fadeInRightBig" data-wow-delay="1.3s">
                                            <div className="team-img">
                                                <div className="team-img-inner">
                                                    <Image src="/assets/images/team/ai-ds-sf/Mrs.A.Vennila.png" alt="Mrs. A. Vennila - Assistant Professor" width={300} height={400} />
                                                </div>
                                                <div className="social-links">
                                                    <ul>
                                                        <li><a href="mailto:vennila.a@jkkn.ac.in" target="_blank"><i className="fa-solid fa-envelope"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="team-content">
                                                <h5 className="title">Mrs. A. Vennila</h5>
                                                <span className="designation">Assistant Professor</span>
                                                <p className="qualification">M.C.A.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-sm-6 h8-team-item-wrapper">
                                        <div className="team-item wow fadeInRightBig" data-wow-delay="1.4s">
                                            <div className="team-img">
                                                <div className="team-img-inner">
                                                    <Image src="/assets/images/team/ai-ds-sf/Mr.A.Dinesh.png" alt="Mr. A. Dinesh - Assistant Professor" width={300} height={400} />
                                                </div>
                                                <div className="social-links">
                                                    <ul>
                                                        <li><a href="mailto:dinesh.a@jkkn.ac.in" target="_blank"><i className="fa-solid fa-envelope"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="team-content">
                                                <h5 className="title">Mr. A. Dinesh</h5>
                                                <span className="designation">Assistant Professor</span>
                                                <p className="qualification">M.Sc., M.Phil., B.Ed.</p>
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


