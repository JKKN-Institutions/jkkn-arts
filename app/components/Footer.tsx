import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="tj-footer-section footer-2 section-gap-x">
      
      <div className="footer-main-area">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-3 col-md-6">
              <div className="footer-widget footer-col-1 wow fadeInUp" data-wow-delay=".1s">
                <div className="footer-logo">
                  <Link href="/">
                    <Image 
                      src="/assets/images/logos/logo-2.png" 
                      alt="JKKN College of Arts and Science Logo" 
                      width={200}
                      height={100}
                      style={{ width: '200px', height: 'auto', maxWidth: 'none', marginBottom: '20px' }}
                    />
                  </Link>
                </div>
                <div className="footer-text">
                  <p>Developing personalze our customer journeys to increase satisfaction & loyalty of our expansion.</p>
                </div>
                <div className="google-map-area">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d76987.97224074803!2d77.730244!3d11.443779!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba969831c528ab9%3A0xe42ccce966098e5d!2sJKKN%20College%20of%20Arts%20and%20Science!5e1!3m2!1sen!2sin!4v1758465560582!5m2!1sen!2sin" 
                    width="100%" 
                    height="300" 
                    style={{border: 0,borderRadius:"20px"}} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-md-6">
              <div className="footer-widget footer-col-2 widget-nav-menu wow fadeInUp" data-wow-delay=".3s">
                <h5 className="title">Our Institutions</h5>
                <ul>
                  <li><a href="https://dental.jkkn.ac.in" target="_blank">JKKN Dental College and Hospital</a></li>
                  <li><a href="https://ahc.jkkn.ac.in" target="_blank">JKKN College of Allied Health Science</a></li>
                  <li><a href="https://pharmacy.jkkn.ac.in" target="_blank">JKKN College of Pharmacy</a></li>
                  <li><a href="https://nursing.jkkn.ac.in" target="_blank">Sresakthimayeil Institute of Nursing and Research</a></li>
                  <li><a href="https://edu.jkkn.ac.in" target="_blank">JKKN College of Education</a></li>
                  <li><a href="https://cas.jkkn.ac.in" target="_blank">JKKN College of Arts and Science (Autonomous)</a></li>
                  <li><a href="https://engg.jkkn.ac.in" target="_blank">JKKN College of Engineering and Technology</a></li>
                  <li><a href="https://school.jkkn.ac.in" target="_blank">JKKN Matriculation Higher Secondary School</a></li>
                  <li><a href="https://nv.jkkn.ac.in" target="_blank">Nattraja Vidhyalya</a></li>
                </ul>
              </div>
            </div>
            
            <div className="col-xl-3 col-md-6">
              <div className="footer-widget widget-contact wow fadeInUp" data-wow-delay=".7s">
                <h5 className="title">Our Office</h5>
                <div className="footer-contact-info">
                  <div className="contact-item">
                    <span>J.K.K NATARAJA COLLEGE OF ARTS & SCIENCE, NH-544 (Salem To Coimbatore National Highway), Komarapalayam (TK), Namakkal (DT). Tamil Nadu. 638183.</span>
                  </div>
                  <div className="contact-item">
                    <a href="tel:+919345855001">+91 9345855001</a>
                    <a href="mailto:arts@jkkn.org">arts@jkkn.org</a>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-marquee">
        <div className="swiper marquee-slider">
          <div className="swiper-wrapper">
            <div className="swiper-slide marquee-item">
              <h4 className="marquee-text">Our</h4>
              
            </div>
            <div className="swiper-slide marquee-item">
              <h4 className="marquee-text">Jkkn</h4>
              
            </div>
            <div className="swiper-slide marquee-item">
              <h4 className="marquee-text">Arts</h4>
              
            </div>
            <div className="swiper-slide marquee-item">
              <h4 className="marquee-text">And</h4>
              
            </div>
            <div className="swiper-slide marquee-item">
              <h4 className="marquee-text">Science</h4>
              
            </div>
            <div className="swiper-slide marquee-item">
              <h4 className="marquee-text">College</h4>
              
            </div>
          </div>
        </div>
      </div>
      <div className="tj-copyright-area-2">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="copyright-content-area">
                <div className="copyright-text">
                  <p>&copy; 2025 <a href="https://jicate.solutions" target="_blank">Jicate Solutions</a> All right reserved</p>
                </div>
                <div className="social-links style-3">
                  <ul>
                    <li><a href="https://www.facebook.com/jkknarts" target="_blank"><i className="fa-brands fa-facebook-f"></i></a></li>
                    <li><a href="https://www.instagram.com/jkknarts" target="_blank"><i className="fa-brands fa-instagram"></i></a></li>
                    <li><a href="https://www.linkedin.com/school/jkknarts" target="_blank"><i className="fa-brands fa-linkedin-in"></i></a></li>
                    <li><a href="https://www.twitter.com/jkknarts" target="_blank"><i className="fa-brands fa-x-twitter"></i></a></li>
                    <li><a href="https://www.youtube.com/jkkninstitutions/" target="_blank"><i className="fab fa-youtube" style={{fontSize: '18px'}}> </i></a></li>
                  </ul>
                </div>
                <div className="copyright-menu">
                  <ul>
                    <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                    <li><Link href="#">Terms & Condition</Link></li>
                  </ul>
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
    </footer>
  );
}
