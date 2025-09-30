import Link from 'next/link';
import Image from 'next/image';
import PageLayout from '../../components/PageLayout';



export default function OurTrust() {
  return (
    <PageLayout>
            <div className="top-space-65"></div>
            {/* Mobile top padding */}
            <div className="d-lg-none" style={{paddingTop: '60px'}}></div>
            

            {/* start: Founder Message Section */}
            <section className="tj-about-section section-gap">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="sec-heading text-center">
                      <span className="sub-title wow fadeInUp" data-wow-delay=".3s"><i className="fas fa-box"></i>Our Foundation</span>
                      <h2 className="sec-title title-anim">Message from our <span>Founder</span></h2>
                    </div>
                  </div>
                </div>
                <div className="row justify-content-between align-items-center">
                  <div className="col-lg-6">
                    <div className="about-img-area wow fadeInLeft" data-wow-delay=".3s">
                      <div className="about-img overflow-hidden">
                        <Image 
                          src="/assets/images/founder.png" 
                          alt="Founder" 
                          width={250} 
                          height={188} 
                          style={{ width: "60%", height: "auto" }} 
                          data-speed=".8"
                          priority={true}
                          loading="eager"
                          placeholder="blur"
                          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Kcp/9k="
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="about-content-area">
                      <div className="content-text wow fadeInUp" data-wow-delay=".3s">
                        <h4 className="founder-title" style={{color: '#1e8a8a', marginBottom: '20px'}}>Shri. J.K.K. Natarajah - Visionary Philanthropist</h4>
                        <p className="desc" style={{marginBottom: '20px', textAlign: 'justify'}}>
                          In sixties, the female children in Kumarapalayam had to walk 2.5 k.m. for their schooling to the nearby town Bhavani. Some parents hesitated to send, some ceased their children schooling. All resulted them to stay either at homes or to work in handlooms and dyeing industries. Realizing the need of women education, a visionary philanthropist of the zone, Shri.J.K.K.Natarajah, initiated a girls school in the town in 1965, four years before the inception of the trust.
                        </p>
                        <p className="desc" style={{marginBottom: '20px', textAlign: 'justify'}}>
                          The Trust, J.K.K.Rangammal Charitable Trust was established, (Reg No:33) in 1969 with the motif of providing literacy, women empowerment resulting to upgraded socio-economic status of the people. Walking on the footprints of her father, Smt.N.Sendamaraai, Managing Trustee, expanded the service by providing multi-disciplinary education to both genders.
                        </p>
                        <p className="desc" style={{marginBottom: '20px', textAlign: 'justify'}}>
                          Now, under the umbrella, there are 10 institutions, inclusive of Dental, Pharmacy, Nursing, Education, Engineering, Arts and Science colleges and Govt. Aided Girls School, Matriculation schools.
                        </p>
                        <p className="desc" style={{textAlign: 'justify'}}>
                          The Trust involves itself in many social service activities inclusive of health oriented services such as free dental camps, free treatments and surgeries, blood donation camps, motivational and entrepreneurship awareness camps. The trust also extends its charitable hands; medical support to the impoverished, helping destitute, natural calamities support, education and scholarship support to poor students and culture support. A pioneering establishment of the zone, since from its inception, its grandeur service to the society not only in terms of educational but also community welfare activities is still immense.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* end: Faq Section */}
          </PageLayout>
  );
}



