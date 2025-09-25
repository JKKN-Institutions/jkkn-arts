import Link from 'next/link';
import Image from 'next/image';

export default function OffcanvasMenu() {
  return (
    <>
      {/* start: Offcanvas Menu */}
      <div className="tj-offcanvas-area d-none d-lg-block">
        <div className="hamburger_bg"></div>
        <div className="hamburger_wrapper">
          <div className="hamburger_inner">
            <div className="hamburger_top d-flex align-items-center justify-content-between">
              <div className="hamburger_logo">
                <Link href="/" className="mobile_logo">
                  <Image src="/assets/images/logos/logo-2.png" alt="Logo" width={100} height={50} />
                </Link>
              </div>
              <div className="hamburger_close">
                <button className="hamburger_close_btn">Ã—</button>
              </div>
            </div>
            <div className="offcanvas-text">
              <p>Developing personalize our customer journeys to increase satisfaction & loyalty of our expansion recognized by industry leaders.</p>
            </div>
            <div className="hamburger-search-area">
              <h5 className="hamburger-title">Search Now!</h5>
              <div className="hamburger_search">
                <form method="get" action="/">
                  <button type="submit">ðŸ”</button>
                  <input type="search" autoComplete="off" name="s" defaultValue="" placeholder="Search here..." />
                </form>
              </div>
            </div>
            <div className="hamburger-infos">
              <h5 className="hamburger-title">Contact Info</h5>
              <div className="contact-info">
                <div className="contact-item" style={{marginBottom: '15px'}}>
                  <span className="subtitle" style={{display: 'block', color: '#1e8a8a', fontWeight: '600', marginBottom: '5px'}}>Phone</span>
                  <a className="contact-link" href="tel:04288234423" style={{color: '#364e52', textDecoration: 'none'}}>04288-234423</a>
                </div>
                <div className="contact-item" style={{marginBottom: '15px'}}>
                  <span className="subtitle" style={{display: 'block', color: '#1e8a8a', fontWeight: '600', marginBottom: '5px'}}>Email</span>
                  <a className="contact-link" href="mailto:info@jkkn.ac.in" style={{color: '#364e52', textDecoration: 'none'}}>info@jkkn.ac.in</a>
                </div>
                <div className="contact-item" style={{marginBottom: '15px'}}>
                  <span className="subtitle" style={{display: 'block', color: '#1e8a8a', fontWeight: '600', marginBottom: '5px'}}>Location</span>
                  <span className="contact-link" style={{color: '#364e52', lineHeight: '1.5'}}>Komarapalayam, Namakkal District, Tamil Nadu - 638183</span>
                </div>
              </div>
            </div>
          </div>
          <div className="hamburger-socials">
            <h5 className="hamburger-title">Follow Us</h5>
            <div className="social-links style-3">
              <ul>
                <li><a href="https://www.facebook.com/" target="_blank"><i className="fa-brands fa-facebook-f"></i></a></li>
                <li><a href="https://www.instagram.com/" target="_blank"><i className="fa-brands fa-instagram"></i></a></li>
                <li><a href="https://x.com/" target="_blank"><i className="fa-brands fa-x-twitter"></i></a></li>
                <li><a href="https://www.linkedin.com/" target="_blank"><i className="fa-brands fa-linkedin-in"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* end: Offcanvas Menu */}

      {/* start: Hamburger Menu */}
      <div className="hamburger-area d-lg-none">
        <div className="hamburger_bg"></div>
        <div className="hamburger_wrapper">
          <div className="hamburger_inner">
            <div className="hamburger_top d-flex align-items-center justify-content-between">
              <div className="hamburger_logo">
                <Link href="/" className="mobile_logo">
                  <Image src="/assets/images/logos/logo-2.png" alt="Logo" width={100} height={50} />
                </Link>
              </div>
              <div className="hamburger_close">
                <button className="hamburger_close_btn">Ã—</button>
              </div>
            </div>
            <div className="hamburger-search-area">
              <h5 className="hamburger-title">Search Now!</h5>
              <div className="hamburger_search">
                <form method="get" action="/">
                  <button type="submit">ðŸ”</button>
                  <input type="search" autoComplete="off" name="s" defaultValue="" placeholder="Search here..." />
                </form>
              </div>
            </div>
            <div className="hamburger_menu">
              <div className="mobile_menu"></div>
            </div>
            <div className="hamburger-infos">
              <h5 className="hamburger-title">Contact Info</h5>
              <div className="contact-info">
                <div className="contact-item" style={{marginBottom: '15px'}}>
                  <span className="subtitle" style={{display: 'block', color: '#1e8a8a', fontWeight: '600', marginBottom: '5px'}}>Phone</span>
                  <a className="contact-link" href="tel:04288234423" style={{color: '#364e52', textDecoration: 'none'}}>04288-234423</a>
                </div>
                <div className="contact-item" style={{marginBottom: '15px'}}>
                  <span className="subtitle" style={{display: 'block', color: '#1e8a8a', fontWeight: '600', marginBottom: '5px'}}>Email</span>
                  <a className="contact-link" href="mailto:info@jkkn.ac.in" style={{color: '#364e52', textDecoration: 'none'}}>info@jkkn.ac.in</a>
                </div>
                <div className="contact-item" style={{marginBottom: '15px'}}>
                  <span className="subtitle" style={{display: 'block', color: '#1e8a8a', fontWeight: '600', marginBottom: '5px'}}>Location</span>
                  <span className="contact-link" style={{color: '#364e52', lineHeight: '1.5'}}>Komarapalayam, Namakkal District, Tamil Nadu - 638183</span>
                </div>
              </div>
            </div>
          </div>
          <div className="hamburger-socials">
            <h5 className="hamburger-title">Follow Us</h5>
            <div className="social-links style-3">
              <ul>
                <li><a href="https://www.facebook.com/" target="_blank"><i className="fa-brands fa-facebook-f"></i></a></li>
                <li><a href="https://www.instagram.com/" target="_blank"><i className="fa-brands fa-instagram"></i></a></li>
                <li><a href="https://x.com/" target="_blank"><i className="fa-brands fa-x-twitter"></i></a></li>
                <li><a href="https://www.linkedin.com/" target="_blank"><i className="fa-brands fa-linkedin-in"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* end: Hamburger Menu */}
    </>
  );
}
