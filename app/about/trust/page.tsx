import Link from 'next/link';
import Header from '../../components/Header';
import OffcanvasMenu from '../../components/OffcanvasMenu';
import Footer from '../../components/Footer';

export default function OurTrust() {
  return (
    <>
      <OffcanvasMenu />
      <Header />
      
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main id="primary" className="site-main">
            <div className="top-space-65"></div>
            

            {/* start: Faq Section */}
            <section className="tj-faq-section section-gap">
              <div className="container">
                <div className="row justify-content-between">
                  <div className="col-lg-6">
                    <div className="faq-img-area wow fadeInLeft" data-wow-delay=".3s">
                      <div className="faq-img">
                        <img data-speed=".8" src="/assets/images/hero/slider-thumb-1.jpg" alt="" />
                        
                      </div>
                      
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="accordion tj-faq style-2" >
                      <div className="accordion-item active " data-wow-delay=".3s">
                        <button className=" faq-title" type="button" >
                          Founder Message
                        </button>
                        <div id="faqTwo-1" className="collapse show" data-bs-parent="#faqTwo">
                          <div className="accordion-body faq-text">
                            <p>In sixties, the female children in Kumarapalayam had to walk 2.5 k.m. for their schooling to the nearby town Bhavani. Some parents hesitated to send, some ceased their children schooling. All resulted them to stay either at homes or to work in handlooms and dyeing industries. Realizing the need of women education, a visionary philanthropist of the zone, Shri.J.K.K.Natarajah, initiated a girls school in the town in 1965, four years before the inception of the trust.<br/><br/>The Trust, J.K.K.Rangammal Charitable Trust was established, (Reg No:33) in 1969 with the motif of providing literacy, women empowerment resulting to upgraded socio-economic status of the people. Walking on the footprints of her father, Smt.N.Sendamaraai, Managing Trustee, expanded the service by providing multi-disciplinary education to both genders. Now, under the umbrella, there are 10 institutions, inclusive of Dental, Pharmacy, Nursing, Education, Engineering, Arts and Science colleges and Govt. Aided Girls School, Matriculation schools.<br/><br/>The Trust involves itself in many social service activities inclusive of health oriented services such as free dental camps, free treatments and surgeries, blood donation camps, motivational and entrepreneurship awareness camps. The trust also extends its charitable hands; medical support to the impoverished, helping destitute, natural calamities support, education and scholarship support to poor students and culture support. A pioneering establishment of the zone, since from its inception, its grandeur service to the society not only in terms of educational but also community welfare activities is still immense</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* end: Faq Section */}
          </main>

          <Footer />
        </div>
      </div>
    </>
  );
}
