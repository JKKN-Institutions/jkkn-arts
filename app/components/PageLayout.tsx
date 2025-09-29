import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface PageLayoutProps {
  children: React.ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <>
      <Header />
      
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main id="primary" className="site-main">
            {children}
          </main>

          {/* Circular Scroll Progress Indicator */}
          <div className="scroll-progress-container">
            <div className="scroll-progress-circle">
              <svg className="progress-ring" width="60" height="60">
                <circle
                  className="progress-ring-circle"
                  stroke="#1e8a8a"
                  strokeWidth="3"
                  fill="transparent"
                  r="25"
                  cx="30"
                  cy="30"
                />
              </svg>
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
}
