'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import Header from '../components/Header';
import OffcanvasMenu from '../components/OffcanvasMenu';
import Footer from '../components/Footer';

// Event data
const eventData = {
  'blood-donation': {
    title: 'Blood Donation Camp - Government Blood Bank Collaboration',
    image: '/assets/images/events/blood-donet.png',
    date: 'September 19, 2025',
    category: 'Social Service',
    author: 'J.K.K. Nataraja College',
    content: `
      <p>J.K.K. Nataraja College of Arts and Science successfully organized a blood donation camp in collaboration with the Government Blood Bank, Tiruchengode, on September 19, 2025. The event took place at 10:00 a.m. in the Nursing College Block.</p>
      
      <p>This noble initiative aimed to contribute to the community's healthcare needs while raising awareness about the importance of voluntary blood donation among students and faculty members.</p>
      
      <p>The event saw enthusiastic participation from students, faculty, and staff members who came forward to donate blood and save lives. The Government Blood Bank team provided professional medical supervision throughout the camp.</p>
      
      <blockquote>
        <p>&ldquo;Every drop of blood donated today can save a life tomorrow. We are proud of our college community's commitment to social service.&rdquo;</p>
        <cite>- College Administration</cite>
      </blockquote>
      
      <p>The blood donation camp was a great success, collecting numerous units of blood that will directly benefit patients in need. Such initiatives reflect the college's commitment to social responsibility and community service.</p>
    `,
    tags: ['Blood Donation', 'Social Service', 'Healthcare', 'Community Service']
  },
  'field-trip': {
    title: 'History Department Field Trip to Keezhadi Museum',
    image: '/assets/images/events/field-trip.png',
    date: 'September 12, 2025',
    category: 'Educational Trip',
    author: 'Department of History',
    content: `
      <p>J.K.K. Nataraja College of Arts and Science, Department of History students, accompanied by Head of the Department Dr. R. Kalpanadevipriya, Dr. Vennila, and Mrs. Sarala, Assistant Professors, embarked on an enriching field trip to Keezhadi Museum, Samanar Hills, and Soundararaja Perumal Temple on September 12, 2025.</p>
      
      <p>The educational expedition provided students with hands-on experience of Tamil Nadu's rich archaeological heritage and ancient history. The Keezhadi Museum, known for its significant archaeological findings, offered valuable insights into the Sangam period civilization.</p>
      
      <h3>Key Highlights of the Trip:</h3>
      <ul>
        <li><strong>Keezhadi Museum:</strong> Explored artifacts and exhibits showcasing ancient Tamil civilization</li>
        <li><strong>Samanar Hills:</strong> Visited historic Jain caves and rock-cut architecture</li>
        <li><strong>Soundararaja Perumal Temple:</strong> Studied architectural styles and historical significance</li>
      </ul>
      
      <blockquote>
        <p>&ldquo;Field trips like these bridge the gap between theoretical knowledge and practical understanding, making history come alive for our students.&rdquo;</p>
        <cite>- Dr. R. Kalpanadevipriya, Head of Department</cite>
      </blockquote>
      
      <p>The students gained valuable knowledge about archaeological methods, historical preservation, and the cultural heritage of Tamil Nadu. This experiential learning approach enhances their academic understanding and research capabilities.</p>
    `,
    tags: ['History', 'Educational Trip', 'Archaeology', 'Cultural Heritage', 'Keezhadi']
  }
};

function BlogDetailsContent() {
  const searchParams = useSearchParams();
  const eventId = searchParams.get('event') || 'blood-donation';
  const event = eventData[eventId as keyof typeof eventData] || eventData['blood-donation'];

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        {/* start: Breadcrumb Section */}
        <br/>
        <section 
          className="tj-page-header section-gap-x" 
          style={{
            backgroundImage: "url('/assets/images/cta/h9-cta-bg.webp')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            position: 'relative'
          }}
        >
          <div className="container" style={{ position: 'relative', zIndex: 2 }}>
            <div className="row">
              <div className="col-lg-12">
                <div className="tj-page-header-content text-center">
                  <h1 className="tj-page-title">Event Details</h1>
                  <div className="tj-page-link">
                    <span><i className="fas fa-home"></i></span>
                    <span>
                      <Link href="/">Home</Link>
                    </span>
                    <span><i className="fas fa-arrow-right"></i></span>
                    <span>
                      <Link href="/blog">Events</Link>
                    </span>
                    <span><i className="fas fa-arrow-right"></i></span>
                    <span>Event Details</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div 
            className="page-header-overlay" 
            style={{
              backgroundImage: "url('/assets/images/shape/pheader-overlay.webp')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 1
            }}
          ></div>
        </section>
      {/* end: Breadcrumb Section */}

      {/* start: Blog Details Section */}
      <section className="tj-blog-details-section section-gap" style={{ flex: 1 }}>
        <div className="container">
          <div className="row" style={{ display: 'flex', flexWrap: 'wrap' }}>
            <div className="col-lg-8" style={{ marginBottom: '2rem' }}>
              <div className="blog-details-content" style={{ 
                backgroundColor: '#fff', 
                padding: '2rem', 
                borderRadius: '10px', 
                boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                marginBottom: '2rem'
              }}>
                <div className="blog-image" style={{ marginBottom: '2rem' }}>
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    style={{ 
                      width: '100%', 
                      height: 'auto', 
                      borderRadius: '10px',
                      objectFit: 'cover',
                      maxHeight: '400px'
                    }} 
                  />
                </div>
                <div className="blog-content">
                  <div className="blog-meta" style={{ 
                    display: 'flex', 
                    flexWrap: 'wrap', 
                    gap: '1rem', 
                    marginBottom: '1.5rem',
                    paddingBottom: '1rem',
                    borderBottom: '1px solid #eee'
                  }}>
                    <span className="date" style={{ color: '#666' }}>
                      <i className="fas fa-calendar" style={{ marginRight: '0.5rem' }}></i> 
                      {event.date}
                    </span>
                    <span className="author" style={{ color: '#666' }}>
                      <i className="fas fa-user" style={{ marginRight: '0.5rem' }}></i> 
                      By {event.author}
                    </span>
                    <span className="category" style={{ color: '#666' }}>
                      <i className="fas fa-folder" style={{ marginRight: '0.5rem' }}></i> 
                      {event.category}
                    </span>
                  </div>
                  
                  <h2 className="title" style={{ 
                    fontSize: '2rem', 
                    fontWeight: '700', 
                    color: '#333', 
                    marginBottom: '1.5rem',
                    lineHeight: '1.3'
                  }}>
                    {event.title}
                  </h2>
                  
                  <div 
                    className="content-body" 
                    style={{ 
                      fontSize: '1.1rem', 
                      lineHeight: '1.8', 
                      color: '#555',
                      marginBottom: '2rem'
                    }}
                    dangerouslySetInnerHTML={{ __html: event.content }}
                  />
                  
                  <div className="blog-tags" style={{ 
                    display: 'flex', 
                    flexWrap: 'wrap', 
                    alignItems: 'center', 
                    gap: '0.5rem',
                    paddingTop: '1.5rem',
                    borderTop: '1px solid #eee'
                  }}>
                    <h5 style={{ margin: 0, marginRight: '1rem', color: '#333' }}>Tags:</h5>
                    {event.tags.map((tag, index) => (
                      <a 
                        key={index}
                        href="#" 
                        style={{ 
                          padding: '0.25rem 0.75rem', 
                          backgroundColor: '#f8f9fa', 
                          border: '1px solid #dee2e6',
                          borderRadius: '20px', 
                          textDecoration: 'none', 
                          color: '#495057',
                          fontSize: '0.875rem',
                          transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = '#007bff';
                          e.currentTarget.style.color = 'white';
                          e.currentTarget.style.borderColor = '#007bff';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = '#f8f9fa';
                          e.currentTarget.style.color = '#495057';
                          e.currentTarget.style.borderColor = '#dee2e6';
                        }}
                      >
                        {tag}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4">
              <div className="sidebar" style={{ position: 'sticky', top: '2rem' }}>
                <div className="sidebar-widget" style={{ 
                  backgroundColor: '#fff', 
                  padding: '1.5rem', 
                  borderRadius: '10px', 
                  boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                  marginBottom: '2rem'
                }}>
                  <h4 className="widget-title" style={{ 
                    fontSize: '1.25rem', 
                    fontWeight: '600', 
                    color: '#333', 
                    marginBottom: '1.5rem',
                    paddingBottom: '0.5rem',
                    borderBottom: '2px solid #007bff'
                  }}>
                    Recent Events
                  </h4>
                  <div className="recent-posts">
                    <div className="recent-post-item" style={{ 
                      display: 'flex', 
                      gap: '1rem', 
                      marginBottom: '1.5rem',
                      paddingBottom: '1rem',
                      borderBottom: '1px solid #eee'
                    }}>
                      <div className="post-thumb" style={{ flexShrink: 0 }}>
                        <img 
                          src="/assets/images/events/blood-donet.png" 
                          alt="Blood Donation" 
                          style={{ 
                            width: '80px', 
                            height: '60px', 
                            objectFit: 'cover', 
                            borderRadius: '5px' 
                          }} 
                        />
                      </div>
                      <div className="post-content">
                        <h5 style={{ margin: 0, marginBottom: '0.5rem' }}>
                          <Link 
                            href="/blog-details?event=blood-donation"
                            style={{ 
                              textDecoration: 'none', 
                              color: '#333', 
                              fontSize: '0.9rem',
                              fontWeight: '500',
                              lineHeight: '1.3'
                            }}
                          >
                            Blood Donation Camp
                          </Link>
                        </h5>
                        <span className="post-date" style={{ fontSize: '0.8rem', color: '#666' }}>
                          Sep 19, 2025
                        </span>
                      </div>
                    </div>
                    
                    <div className="recent-post-item" style={{ 
                      display: 'flex', 
                      gap: '1rem', 
                      marginBottom: '1rem'
                    }}>
                      <div className="post-thumb" style={{ flexShrink: 0 }}>
                        <img 
                          src="/assets/images/events/field-trip.png" 
                          alt="Field Trip" 
                          style={{ 
                            width: '80px', 
                            height: '60px', 
                            objectFit: 'cover', 
                            borderRadius: '5px' 
                          }} 
                        />
                      </div>
                      <div className="post-content">
                        <h5 style={{ margin: 0, marginBottom: '0.5rem' }}>
                          <Link 
                            href="/blog-details?event=field-trip"
                            style={{ 
                              textDecoration: 'none', 
                              color: '#333', 
                              fontSize: '0.9rem',
                              fontWeight: '500',
                              lineHeight: '1.3'
                            }}
                          >
                            History Department Field Trip
                          </Link>
                        </h5>
                        <span className="post-date" style={{ fontSize: '0.8rem', color: '#666' }}>
                          Sep 12, 2025
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="sidebar-widget" style={{ 
                  backgroundColor: '#fff', 
                  padding: '1.5rem', 
                  borderRadius: '10px', 
                  boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
                }}>
                  <h4 className="widget-title" style={{ 
                    fontSize: '1.25rem', 
                    fontWeight: '600', 
                    color: '#333', 
                    marginBottom: '1.5rem',
                    paddingBottom: '0.5rem',
                    borderBottom: '2px solid #007bff'
                  }}>
                    Categories
                  </h4>
                  <ul className="category-list" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    <li style={{ marginBottom: '0.75rem' }}>
                      <a 
                        href="#" 
                        style={{ 
                          textDecoration: 'none', 
                          color: '#555', 
                          display: 'flex', 
                          justifyContent: 'space-between',
                          padding: '0.5rem 0',
                          borderBottom: '1px solid #f0f0f0',
                          transition: 'color 0.3s ease'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.color = '#007bff'}
                        onMouseLeave={(e) => e.currentTarget.style.color = '#555'}
                      >
                        Social Service <span style={{ color: '#999' }}>(2)</span>
                      </a>
                    </li>
                    <li style={{ marginBottom: '0.75rem' }}>
                      <a 
                        href="#" 
                        style={{ 
                          textDecoration: 'none', 
                          color: '#555', 
                          display: 'flex', 
                          justifyContent: 'space-between',
                          padding: '0.5rem 0',
                          borderBottom: '1px solid #f0f0f0',
                          transition: 'color 0.3s ease'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.color = '#007bff'}
                        onMouseLeave={(e) => e.currentTarget.style.color = '#555'}
                      >
                        Educational Trip <span style={{ color: '#999' }}>(1)</span>
                      </a>
                    </li>
                    <li style={{ marginBottom: '0.75rem' }}>
                      <a 
                        href="#" 
                        style={{ 
                          textDecoration: 'none', 
                          color: '#555', 
                          display: 'flex', 
                          justifyContent: 'space-between',
                          padding: '0.5rem 0',
                          borderBottom: '1px solid #f0f0f0',
                          transition: 'color 0.3s ease'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.color = '#007bff'}
                        onMouseLeave={(e) => e.currentTarget.style.color = '#555'}
                      >
                        Cultural Events <span style={{ color: '#999' }}>(3)</span>
                      </a>
                    </li>
                    <li>
                      <a 
                        href="#" 
                        style={{ 
                          textDecoration: 'none', 
                          color: '#555', 
                          display: 'flex', 
                          justifyContent: 'space-between',
                          padding: '0.5rem 0',
                          transition: 'color 0.3s ease'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.color = '#007bff'}
                        onMouseLeave={(e) => e.currentTarget.style.color = '#555'}
                      >
                        Academic Activities <span style={{ color: '#999' }}>(4)</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end: Blog Details Section */}
    </div>
  );
}

export default function BlogDetails() {
  return (
    <>
      <OffcanvasMenu />
      <Header />
      
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main id="primary" className="site-main">
            <div className="space-for-header"></div>
            
            <Suspense fallback={<div>Loading...</div>}>
              <BlogDetailsContent />
            </Suspense>
          </main>

          <Footer />
        </div>
      </div>
    </>
  );
}
