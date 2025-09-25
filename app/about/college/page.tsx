import Link from 'next/link';
import Header from '../../components/Header';
import OffcanvasMenu from '../../components/OffcanvasMenu';
import Footer from '../../components/Footer';

export default function OurCollege() {
  return (
    <>
      <OffcanvasMenu />
      <Header />
      
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main id="primary" className="site-main">
            <div className="top-space-15"></div>
            <br/><br/><br/><br/><br/>
           {/* start: Cta Section */}
           <section className="h9-cta-section section-gap-x">
              <div className="cta-bg" data-bg-image="/assets/images/img/Campus-Life.png"></div>
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="cta-content">
                      <h2 className="title text-anim">
                        <span>Let's visit to</span>{' '}
                        <span className="cta-img wow fadeInUp" data-wow-delay=".3s">
                          <img src="/assets/images/img/Campus-Life.png" alt="" />
                          
                        </span>
                        <span>Our college.</span>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* end: Cta Section */}

            {/* start: About Section */}
            <section className="h9-about-section section-bottom-gap">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    
                    <div className="h9-about-area">
                      <div className="about-img-area h9-about-img wow fadeInLeft" data-wow-delay=".3s">
                        <div className="about-img overflow-hidden">
                          <img data-speed=".8" src="/assets/images/img/outside-compus.png" alt="" />
                        </div>
                        
                      </div>
                      <div className="h9-about-content">
                        <h3 className="title wow fadeInUp" data-wow-delay=".4s">
                        Jkkn Arts and Science College
                        </h3>
                        <p className="desc wow fadeInUp" data-wow-delay=".6s">
                        J.K.K. Rangammal Charitable Trust, Komarapalayam was founded by a Philanthropist, Kodaivallal J.K.K.Nataraja Chettiyar with an aim to provide quality education to the economically downtrodden rural women. Our renowned institution, J.K.K.Nataraja College of Arts and Science was started as Alamelu Angappan College for Women in 1974, with Love, Learn and Serve as its motto. The total area of the College is 15 acres and it is situated on the National Highways-544 between Salem and Coimbatore. Komarapalayam, being weaversâ€™ hub, the College was established for the benefit of the wards of weavers for promoting the literacy and to provide a better living condition. The College originated with students numbering up to just 100 and with a handful of teachers. It was started as a Government-Aided College and it grew with various Departments during the past four and a half decades. To cater to the growing demands of the society, our College was converted as a Co-Educational Institution in 2008. At present, the institution offers 15 Under Graduate programmes, 10 Post Graduate programmes, 6 M.Phil and 7 Ph.D programmes with studentsâ€™ strength of 1,969. The ideals of our Founding Father are scrupulously followed by his daughter Smt.N.Sendamaraai, our Secretary, a person of eminent skills and untiring enthusiasm; following the foot prints of her father with noble aspirations, she steers us as a beacon light. She is strengthened by her young, energetic and enthusiastic son Mr.Ommsharravana, our Managing Director who, with his innovative ideas always extend his support in all our endeavours. The College is proud in declaring itself as a donation-free Institution which offers merit based admission to students.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* end: About Section */}
          </main>

          <Footer />
        </div>
      </div>
    </>
  );
}
