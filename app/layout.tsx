import type { Metadata } from "next";
import Script from "next/script";
import ClientScripts from "./components/ClientScripts";
import "./globals.css";

export const metadata: Metadata = {
  title: "jkkn arts and science college",
  description: "",
  icons: {
    icon: "/assets/images/favicon.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <meta charSet="utf-8" />
        <link rel="preload" href="/assets/fonts/bexon-icons.ttf" as="font" type="font/ttf" crossOrigin="" />
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" />
        <link rel="preload" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/webfonts/fa-solid-900.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/webfonts/fa-brands-400.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/webfonts/fa-regular-400.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="stylesheet" href="/assets/css/animate.min.css" />
        <link rel="stylesheet" href="/assets/css/bexon-icons.css" />
        <link rel="stylesheet" href="/assets/css/nice-select.css" />
        <link rel="stylesheet" href="/assets/css/swiper.min.css" />
        <link rel="stylesheet" href="/assets/css/venobox.min.css" />
        <link rel="stylesheet" href="/assets/css/odometer-theme-default.css" />
        <link rel="stylesheet" href="/assets/css/meanmenu.css" />
        <link rel="stylesheet" href="/assets/css/main.css" />
        <link rel="stylesheet" href="/assets/fontawesome/css/all.min.css" />
        <style>
          {`
            /* Ensure Font Awesome icons display properly as visual symbols */
            .fas, .fa-solid {
              font-family: "Font Awesome 6 Free" !important;
              font-weight: 900 !important;
              font-style: normal !important;
              font-variant: normal !important;
              text-rendering: auto !important;
              -webkit-font-smoothing: antialiased !important;
              -moz-osx-font-smoothing: grayscale !important;
              display: inline-block !important;
              line-height: 1 !important;
            }
            .fab, .fa-brands {
              font-family: "Font Awesome 6 Brands" !important;
              font-weight: 400 !important;
              font-style: normal !important;
              font-variant: normal !important;
              text-rendering: auto !important;
              -webkit-font-smoothing: antialiased !important;
              -moz-osx-font-smoothing: grayscale !important;
              display: inline-block !important;
              line-height: 1 !important;
            }
            .far, .fa-regular {
              font-family: "Font Awesome 6 Free" !important;
              font-weight: 400 !important;
              font-style: normal !important;
              font-variant: normal !important;
              text-rendering: auto !important;
              -webkit-font-smoothing: antialiased !important;
              -moz-osx-font-smoothing: grayscale !important;
              display: inline-block !important;
              line-height: 1 !important;
            }
            /* Override any conflicting styles for all Font Awesome icons */
            i[class*="fa-"], 
            span[class*="fa-"],
            [class*="fa-"] {
              font-style: normal !important;
              font-variant: normal !important;
              text-rendering: auto !important;
              -webkit-font-smoothing: antialiased !important;
              -moz-osx-font-smoothing: grayscale !important;
              display: inline-block !important;
              line-height: 1 !important;
            }
            
            /* Force Font Awesome font loading */
            @font-face {
              font-family: "Font Awesome 6 Free";
              font-style: normal;
              font-weight: 900;
              font-display: block;
              src: url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/webfonts/fa-solid-900.woff2") format("woff2");
            }
            
            @font-face {
              font-family: "Font Awesome 6 Brands";
              font-style: normal;
              font-weight: 400;
              font-display: block;
              src: url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/webfonts/fa-brands-400.woff2") format("woff2");
            }
            
            @font-face {
              font-family: "Font Awesome 6 Free";
              font-style: normal;
              font-weight: 400;
              font-display: block;
              src: url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/webfonts/fa-regular-400.woff2") format("woff2");
            }
            
            /* Ensure sections are visible without overriding background colors */
            section {
              visibility: visible;
            }
            
            /* Ensure main sections are displayed without background overrides */
            .tj-slider-section,
            .tj-client-section,
            .tj-about-section,
            .tj-service-section,
            .tj-project-section-2,
            .tj-working-process,
            .tj-testimonial-section-2,
            .tj-team-section,
            .tj-blog-section-2,
            .tj-footer-section {
              display: block;
            }
            
            /* Allow GSAP to control fade-in animations */
            .tj-fadein-right-on-scroll {
              opacity: 0;
              transform: translateX(40px);
            }
            
            /* Ensure theme colors are properly applied */
            :root {
              --tj-color-theme-dark: #0c1e21;
              --tj-color-theme-dark-2: #18292c;
              --tj-color-theme-primary: #1e8a8a;
              --tj-color-common-white: #ffffff;
              --tj-color-text-body-2: #a9b8b8;
              --tj-color-theme-bg: #d8e5e5;
              --tj-color-border-2: rgba(255, 255, 255, 0.15);
            }

            /* Header styling - white background with black text */
            .header-area {
              background-color: white !important;
              color: black !important;
              border-bottom: 1px solid #e0e0e0 !important;
              box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1) !important;
            }

            .header-area .header-wrapper {
              background-color: white !important;
            }

            .header-area .mainmenu ul li a {
              color: black !important;
            }

            .header-area .mainmenu ul li a:hover {
              color: var(--tj-color-theme-primary) !important;
            }

            .header-area .mainmenu ul li.has-dropdown > a::after {
              color: black !important;
            }

            .header-area .mainmenu ul li.has-dropdown > a:hover::after {
              color: var(--tj-color-theme-primary) !important;
            }

            .header-area .mainmenu ul li.has-dropdown > a i {
              color: black !important;
            }

            .header-area .mainmenu ul li.has-dropdown > a:hover i {
              color: var(--tj-color-theme-primary) !important;
            }

            .header-area .mainmenu .sub-menu li.has-dropdown > a i {
              color: black !important;
            }

            .header-area .mainmenu .sub-menu li.has-dropdown > a:hover i {
              color: var(--tj-color-theme-primary) !important;
            }

            .header-area .mainmenu .sub-menu {
              background-color: white !important;
              border: 1px solid #e0e0e0 !important;
              box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1) !important;
            }

            .header-area .mainmenu .sub-menu li a {
              color: black !important;
            }

            .header-area .mainmenu .sub-menu li a:hover {
              color: var(--tj-color-theme-primary) !important;
              background-color: #f8f9fa !important;
            }

            .header-area .mainmenu .sub-menu .sub-menu {
              background-color: white !important;
              border: 1px solid #e0e0e0 !important;
            }

            .header-area .mainmenu .sub-menu .sub-menu li a {
              color: black !important;
            }

            .header-area .mainmenu .sub-menu .sub-menu li a:hover {
              color: var(--tj-color-theme-primary) !important;
              background-color: #f8f9fa !important;
            }

            .header-area .tj-primary-btn {
              background-color: var(--tj-color-theme-primary) !important;
              color: white !important;
            }

            .header-area .tj-primary-btn:hover {
              background-color: #1a7a7a !important;
              color: white !important;
            }

            .header-area .menu_bar span {
              background-color: black !important;
            }

            .header-area .mobile_menu_bar span {
              background-color: black !important;
            }
            
            /* Menu toggle button styling */
            .menu_bar span {
              background-color: black !important;
            }
            
            .mobile_menu_bar span {
              background-color: black !important;
            }
            
            /* Ensure toggle buttons are visible and black */
            .menu_offcanvas span,
            .menu_bar span {
              background-color: black !important;
              transition: all 0.3s ease;
            }
            
            .menu_offcanvas:hover span,
            .menu_bar:hover span {
              background-color: var(--tj-color-theme-primary) !important;
            }
            
            /* Additional menu bar styling for all variations */
            .header-area .menu_bar span,
            .header-area .mobile_menu_bar span,
            .menu_bar span,
            .mobile_menu_bar span,
            .menu_offcanvas span {
              background-color: black !important;
              width: 25px !important;
              height: 3px !important;
              display: block !important;
              margin: 3px 0 !important;
              transition: all 0.3s ease !important;
            }
            
            /* Menu bar hover effects */
            .header-area .menu_bar:hover span,
            .header-area .mobile_menu_bar:hover span,
            .menu_bar:hover span,
            .mobile_menu_bar:hover span,
            .menu_offcanvas:hover span {
              background-color: var(--tj-color-theme-primary) !important;
            }

            /* Force custom icon font to apply on pseudo-elements */
            [class^="tji-"],
            [class*=" tji-"] {
              font-family: "bexon-icons" !important;
              speak: never;
              font-style: normal !important;
              font-weight: normal !important;
              font-variant: normal !important;
              text-transform: none !important;
              line-height: 1;
              -webkit-font-smoothing: antialiased !important;
              -moz-osx-font-smoothing: grayscale !important;
              display: inline-block !important;
            }
            
            /* Ensure bexon-icons font loads properly */
            @font-face {
              font-family: "bexon-icons";
              src: url("/assets/fonts/bexon-icons.ttf") format("truetype");
              font-weight: normal;
              font-style: normal;
              font-display: block;
            }
            
            /* Specific styling for back-to-top icon */
            .tji-arrow-up-long:before {
              content: "\e915" !important;
              font-family: "bexon-icons" !important;
              font-style: normal !important;
              font-weight: normal !important;
              font-variant: normal !important;
              text-transform: none !important;
              line-height: 1 !important;
              -webkit-font-smoothing: antialiased !important;
              -moz-osx-font-smoothing: grayscale !important;
              display: inline-block !important;
            }
            
            /* Circular Scroll Progress Indicator */
            .scroll-progress-container {
              position: fixed;
              top: 50%;
              right: 30px;
              transform: translateY(-50%);
              z-index: 1000;
              display: flex;
              align-items: center;
              justify-content: center;
            }
            
            .scroll-progress-circle {
              position: relative;
              width: 60px;
              height: 60px;
              display: flex;
              align-items: center;
              justify-content: center;
            }
            
            .progress-ring {
              transform: rotate(-90deg);
            }
            
            .progress-ring-circle {
              stroke-dasharray: 157; /* 2 * Ï€ * r = 2 * 3.14159 * 25 */
              stroke-dashoffset: 157;
              transition: stroke-dashoffset 0.3s ease;
            }
            
            .progress-text {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              display: flex;
              align-items: center;
              font-family: var(--tj-ff-heading);
              font-weight: var(--tj-fw-bold);
              color: var(--tj-color-theme-primary);
            }
            
            .progress-number {
              font-size: 16px;
              line-height: 1;
            }
            
            .progress-percent {
              font-size: 12px;
              line-height: 1;
              margin-left: 1px;
            }
            
            @media (max-width: 768px) {
              .scroll-progress-container {
                right: 15px;
              }
              
              .scroll-progress-circle {
                width: 50px;
                height: 50px;
              }
              
              .progress-ring {
                width: 50px;
                height: 50px;
              }
              
              .progress-ring-circle {
                r: 20;
                cx: 25;
                cy: 25;
                stroke-dasharray: 126; /* 2 * Ï€ * r = 2 * 3.14159 * 20 */
                stroke-dashoffset: 126;
              }
              
              .progress-number {
                font-size: 14px;
              }
              
              .progress-percent {
                font-size: 10px;
              }
            }
            
            [class^="tji-"]::before,
            [class*=" tji-"]::before {
              font-family: "bexon-icons" !important;
              display: inline-block;
              font-style: normal !important;
              font-weight: normal !important;
            }
            
            /* Use bexon-icons arrows for dropdown menus */
            .mainmenu ul>li.has-dropdown>a::after {
              content: "" !important;
              display: none !important;
            }
            
            .mainmenu ul>li>.sub-menu>li.has-dropdown>a::after {
              content: "" !important;
              display: none !important;
            }
            
            /* Style for text-based dropdown arrows in header */
            .mainmenu ul li.has-dropdown > a {
              padding-right: 20px !important;
              position: relative !important;
            }
            
            /* Style the text arrows */
            .mainmenu ul li.has-dropdown > a:after {
              content: "" !important;
            }
            
            /* Ensure proper spacing for menu items with arrows */
            .mainmenu ul li.has-dropdown > a {
              padding-right: 20px !important;
            }
            
            /* Style hamburger menu text icons */
            .hamburger_close_btn {
              font-size: 35px !important;
              line-height: 1 !important;
              color: var(--tj-color-common-white) !important;
              background: none !important;
              border: none !important;
              cursor: pointer !important;
              transition: all 0.3s ease !important;
            }
            
            .hamburger_close_btn:hover {
              transform: rotate(90deg) !important;
              color: var(--tj-color-theme-bg) !important;
            }
            
            .hamburger_search button {
              background: none !important;
              border: none !important;
              color: var(--tj-color-common-white) !important;
              font-size: 18px !important;
              cursor: pointer !important;
              position: absolute !important;
              right: 15px !important;
              top: 50% !important;
              transform: translateY(-50%) !important;
            }
            
            /* Ensure menu bar spans display properly */
            .menu_bar span {
              display: block !important;
              width: 18px !important;
              height: 2px !important;
              background-color: var(--tj-color-common-black) !important;
              border-radius: 10px !important;
              margin: 3px 0 !important;
              transition: all 0.3s !important;
            }
            
            .menu_bar.mobile_menu_bar span {
              background-color: var(--tj-color-common-white) !important;
            }
            
            .header-2.header-absolute .menu_bar span {
              background-color: var(--tj-color-common-white) !important;
            }
            
            /* Force correct service section background */
            .tj-service-section {
              background-color: var(--tj-color-theme-dark) !important;
            }
            
            /* Ensure service cards have proper styling */
            .service-item.style-2 {
              background-color: transparent !important;
              border: 1px dashed rgba(255, 255, 255, 0.15) !important;
            }
            
            .service-item.style-2 .title {
              color: var(--tj-color-common-white) !important;
            }
            
            .service-item.style-2 .desc {
              color: var(--tj-color-text-body-2) !important;
            }
            
            /* Fix working process section background */
            .tj-working-process {
              background-color: var(--tj-color-theme-bg) !important;
            }
            
            /* Ensure list items in service cards have correct color */
            .service-item.style-2 .list-items li {
              color: var(--tj-color-text-body-2) !important;
            }
            
            /* Fix footer section background */
            .tj-footer-section.footer-2 {
              background-color: var(--tj-color-theme-dark) !important;
            }
            
            /* Ensure footer text colors are correct */
            .tj-footer-section.footer-2 .footer-widget .title {
              color: var(--tj-color-common-white) !important;
            }
            
            .tj-footer-section.footer-2 .footer-widget ul li a {
              color: var(--tj-color-text-body-2) !important;
            }

            /* Faculty Table Styles */
            .faculty-table-wrapper {
              background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
              border-radius: 15px;
              box-shadow: 0 15px 40px rgba(255, 107, 53, 0.15);
              overflow: hidden;
              margin: 30px 0;
              border: 2px solid rgba(255, 107, 53, 0.1);
            }

            .faculty-table {
              margin: 0;
              border-collapse: collapse;
              width: 100%;
            }

            .faculty-table thead th {
              background: linear-gradient(135deg, #ff6b35 0%, #ff8c42 50%, #ffa726 100%);
              color: white;
              padding: 20px 15px;
              font-weight: 600;
              text-align: left;
              border: none;
              font-size: 14px;
              text-transform: uppercase;
              letter-spacing: 0.5px;
              position: relative;
              text-shadow: 0 2px 4px rgba(0,0,0,0.3);
            }

            .faculty-table thead th::after {
              content: '';
              position: absolute;
              bottom: 0;
              left: 0;
              right: 0;
              height: 3px;
              background: linear-gradient(90deg, #ffffff, rgba(255,255,255,0.5), #ffffff);
            }

            .faculty-table tbody tr {
              border-bottom: 1px solid rgba(255, 107, 53, 0.1);
              transition: all 0.3s ease;
              background: #ffffff;
            }

            .faculty-table tbody tr:nth-child(even) {
              background: linear-gradient(135deg, #fff8f5 0%, #ffffff 100%);
            }

            .faculty-table tbody tr:hover {
              background: linear-gradient(135deg, #fff0e6 0%, #ffe8d6 100%);
              transform: translateY(-2px);
              box-shadow: 0 8px 25px rgba(255, 107, 53, 0.2);
              border-left: 4px solid #ff6b35;
            }

            .faculty-table tbody td {
              padding: 20px 15px;
              vertical-align: middle;
              border: none;
            }

            .faculty-name {
              display: flex;
              align-items: center;
              gap: 15px;
            }

            .faculty-avatar {
              width: 50px;
              height: 50px;
              border-radius: 50%;
              overflow: hidden;
              border: 3px solid #ff6b35;
              flex-shrink: 0;
            }

            .faculty-avatar img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }

            .faculty-name span {
              font-weight: 600;
              color: #2c3e50;
              font-size: 16px;
              text-shadow: 0 1px 2px rgba(0,0,0,0.1);
            }

            .designation-badge {
              display: inline-block;
              padding: 8px 16px;
              border-radius: 20px;
              font-size: 12px;
              font-weight: 600;
              text-transform: uppercase;
              letter-spacing: 0.5px;
            }

            .designation-badge.associate {
              background: linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%);
              color: white;
              box-shadow: 0 4px 15px rgba(255, 107, 53, 0.3);
            }

            .designation-badge.assistant {
              background: linear-gradient(135deg, #ff8c42 0%, #ffa726 100%);
              color: white;
              box-shadow: 0 4px 15px rgba(255, 140, 66, 0.3);
            }

            .contact-link {
              display: inline-flex;
              align-items: center;
              justify-content: center;
              width: 40px;
              height: 40px;
              background: linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%);
              color: white;
              border-radius: 50%;
              text-decoration: none;
              transition: all 0.3s ease;
              box-shadow: 0 4px 12px rgba(255, 107, 53, 0.3);
            }

            .contact-link:hover {
              transform: scale(1.15) rotate(5deg);
              box-shadow: 0 8px 25px rgba(255, 107, 53, 0.5);
              color: white;
              background: linear-gradient(135deg, #ff8c42 0%, #ffa726 100%);
            }

            .faculty-summary {
              margin-top: 40px;
            }

            .summary-card {
              text-align: center;
              padding: 30px 20px;
              background: linear-gradient(135deg, #fff8f5 0%, #ffe8d6 100%);
              border-radius: 15px;
              transition: all 0.3s ease;
              border: 2px solid rgba(255, 107, 53, 0.2);
              box-shadow: 0 8px 25px rgba(255, 107, 53, 0.1);
            }

            .summary-card:hover {
              transform: translateY(-8px) scale(1.02);
              border-color: #ff6b35;
              box-shadow: 0 15px 40px rgba(255, 107, 53, 0.25);
              background: linear-gradient(135deg, #ffffff 0%, #fff0e6 100%);
            }

            .summary-icon {
              width: 60px;
              height: 60px;
              background: linear-gradient(135deg, #ff6b35 0%, #ff8c42 50%, #ffa726 100%);
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              margin: 0 auto 20px;
              color: white;
              font-size: 24px;
              box-shadow: 0 8px 20px rgba(255, 107, 53, 0.3);
              position: relative;
            }

            .summary-icon::before {
              content: '';
              position: absolute;
              top: -2px;
              left: -2px;
              right: -2px;
              bottom: -2px;
              background: linear-gradient(135deg, #ff6b35, #ff8c42, #ffa726);
              border-radius: 50%;
              z-index: -1;
              opacity: 0.3;
            }

            .summary-card h4 {
              font-size: 36px;
              font-weight: 700;
              background: linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              background-clip: text;
              margin-bottom: 10px;
              text-shadow: 0 2px 4px rgba(255, 107, 53, 0.2);
            }

            .summary-card p {
              color: #2c3e50;
              font-weight: 600;
              margin: 0;
              text-shadow: 0 1px 2px rgba(0,0,0,0.1);
            }

            /* Responsive Design */
            @media (max-width: 768px) {
              .faculty-table-wrapper {
                margin: 20px 0;
                border-radius: 10px;
              }

              .faculty-table thead th {
                padding: 15px 10px;
                font-size: 12px;
              }

              .faculty-table tbody td {
                padding: 15px 10px;
              }

              .faculty-name {
                flex-direction: column;
                text-align: center;
                gap: 10px;
              }

              .faculty-avatar {
                width: 40px;
                height: 40px;
              }

              .faculty-name span {
                font-size: 14px;
              }

              .designation-badge {
                padding: 6px 12px;
                font-size: 10px;
              }

              .contact-link {
                width: 35px;
                height: 35px;
              }

              .summary-card {
                padding: 20px 15px;
                margin-bottom: 20px;
              }

              .summary-icon {
                width: 50px;
                height: 50px;
                font-size: 20px;
                margin-bottom: 15px;
              }

              .summary-card h4 {
                font-size: 28px;
              }
            }
          `}
        </style>
      </head>
      <body>
        <div className="body-overlay"></div>

        {/* Preloader Start */}
        {/* <div className="tj-preloader is-loading">
          <div className="tj-preloader-inner">
            <div className="tj-preloader-ball-wrap">
              <div className="tj-preloader-ball-inner-wrap">
                <div className="tj-preloader-ball-inner">
                  <div className="tj-preloader-ball"></div>
                </div>
                <div className="tj-preloader-ball-shadow"></div>
              </div>
              <div id="tj-weave-anim" className="tj-preloader-text">Loading...</div>
            </div>
          </div>
          <div className="tj-preloader-overlay"></div>
        </div> */}
        {/* Preloader end */}

        {/* back to top start */}
        <div id="tj-back-to-top"><span id="tj-back-to-top-percentage"></span></div>
        {/* back to top end */}

        {/* start: Search Popup */}
        <div className="search-popup-overlay"></div>
        {/* end: Search Popup */}

        {children}

        <ClientScripts />

        {/* JS here */}
        <Script src="/assets/js/jquery.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/bootstrap.bundle.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/gsap.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/ScrollSmoother.js" strategy="afterInteractive" />
        <Script src="/assets/js/gsap-scroll-to-plugin.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/gsap-scroll-trigger.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/gsap-split-text.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/jquery.nice-select.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/swiper.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/odometer.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/venobox.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/appear.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/wow.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/meanmenu.js" strategy="afterInteractive" />
        <Script 
          src="https://unpkg.com/imagesloaded@5.0.0/imagesloaded.pkgd.min.js" 
          strategy="afterInteractive" 
        />
        <Script 
          src="https://unpkg.com/isotope-layout@3.0.6/dist/isotope.pkgd.min.js" 
          strategy="afterInteractive" 
        />
        <Script id="plugins-fallback" strategy="afterInteractive">
          {`
            // Fallback for imagesLoaded if CDN fails
            if (typeof window !== 'undefined' && window.jQuery && !window.jQuery.fn.imagesLoaded) {
              window.jQuery.fn.imagesLoaded = function(callback) {
                var images = this.find('img');
                var total = images.length;
                var loaded = 0;
                
                if (total === 0) {
                  if (callback) callback.call(this);
                  return this;
                }
                
                images.each(function() {
                  var img = new Image();
                  img.onload = img.onerror = function() {
                    loaded++;
                    if (loaded === total && callback) {
                      callback.call(this);
                    }
                  };
                  img.src = this.src;
                });
                
                return this;
              };
            }

            // Fallback for isotope if CDN fails
            if (typeof window !== 'undefined' && window.jQuery && !window.jQuery.fn.isotope) {
              window.jQuery.fn.isotope = function(options) {
                var $this = this;
                
                if (typeof options === 'string') {
                  // Handle method calls like .isotope('layout')
                  return $this;
                }
                
                // Basic filtering functionality
                var settings = window.jQuery.extend({
                  filter: '*',
                  layoutMode: 'masonry'
                }, options);
                
                if (settings.filter && settings.filter !== '*') {
                  $this.children().hide();
                  $this.children(settings.filter).show();
                } else {
                  $this.children().show();
                }
                
                return $this;
              };
            }
          `}
        </Script>
        <Script id="meanmenu-init" strategy="afterInteractive">
          {`
            // Initialize meanmenu after ensuring it's loaded
            function initMeanMenu() {
              if (typeof window !== 'undefined' && window.jQuery && window.jQuery.fn.meanmenu) {
                try {
                  // Mobile Menu Js
                  if (window.jQuery("#mobile-menu").length > 0) {
                    window.jQuery("#mobile-menu").meanmenu({
                      meanMenuContainer: ".mobile_menu",
                      meanScreenWidth: "991",
                      meanExpand: ['<i class="fas fa-chevron-down"></i>'],
                    });
                  }
                } catch (error) {
                  console.error('Error initializing meanmenu:', error);
                }
              } else {
                // Retry after a short delay if meanmenu isn't loaded yet
                setTimeout(initMeanMenu, 100);
              }
            }
            
            // Wait for DOM and scripts to be ready
            if (document.readyState === 'loading') {
              document.addEventListener('DOMContentLoaded', initMeanMenu);
            } else {
              setTimeout(initMeanMenu, 100);
            }
          `}
        </Script>
        <Script src="/assets/js/main.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
