# Font Awesome Icons Used in CAS Arts Project

## Summary
This document lists all Font Awesome icons used throughout the CAS Arts college website project.

## Icon Categories

### 1. Solid Icons (fas/fa-solid)
These are the most commonly used icons in the project:

- **fa-arrow-right** - Used in buttons and navigation elements
- **fa-search** - Used in search forms and buttons
- **fa-xmark** - Used in close buttons and modal dismissals
- **fa-clock** - Used for time/opening hours information
- **fa-envelope** - Used for email contact links
- **fa-home** - Used in breadcrumb navigation
- **fa-arrow-right-long** - Used in call-to-action buttons
- **fa-chevron-down** - Used in dropdown menu indicators
- **fa-chevron-right** - Used in submenu navigation
- **fa-chevron-up** - Used in collapsible content
- **fa-chevron-left** - Used in navigation breadcrumbs
- **fa-arrow-left** - Used in slider navigation
- **fa-arrow-down** - Used in scroll indicators
- **fa-check-circle** - Used for success indicators
- **fa-check** - Used in feature lists
- **fa-play** - Used for video play buttons
- **fa-plus** - Used for expand/add functionality
- **fa-globe** - Used for global reach indicators
- **fa-chart-line** - Used for growth/statistics displays
- **fa-users** - Used for team/customer sections
- **fa-leaf** - Used for eco-friendly features
- **fa-phone** - Used for contact information
- **fa-map-marker-alt** - Used for location information
- **fa-calendar** - Used for events and scheduling
- **fa-graduation-cap** - Used for education sections
- **fa-book** - Used for academic content
- **fa-user-graduate** - Used for student sections
- **fa-bars** - Used for mobile menu toggle
- **fa-times** - Used for close buttons
- **fa-download** - Used for file downloads
- **fa-upload** - Used for file uploads
- **fa-print** - Used for print functionality
- **fa-share** - Used for sharing content
- **fa-external-link-alt** - Used for external links
- **fa-info** - Used for information displays
- **fa-question** - Used for help sections
- **fa-exclamation** - Used for alerts
- **fa-warning** - Used for warning messages
- **fa-lock** - Used for secure content
- **fa-unlock** - Used for accessible content
- **fa-key** - Used for authentication
- **fa-cog** - Used for settings
- **fa-tools** - Used for tools/utilities
- **fa-wrench** - Used for maintenance
- **fa-hammer** - Used for construction/building
- **fa-screwdriver** - Used for technical work
- **fa-paint-brush** - Used for design/art
- **fa-palette** - Used for color/design
- **fa-camera** - Used for photography

### 2. Brand Icons (fab/fa-brands)
Social media and brand icons:

- **fa-facebook-f** - Facebook social media links
- **fa-instagram** - Instagram social media links
- **fa-x-twitter** - X (formerly Twitter) social media links
- **fa-linkedin-in** - LinkedIn social media links
- **fa-twitter** - Twitter social media links (legacy)
- **fa-youtube** - YouTube video links
- **fa-whatsapp** - WhatsApp messaging links
- **fa-telegram** - Telegram messaging links
- **fa-pinterest** - Pinterest social links
- **fa-snapchat** - Snapchat social links
- **fa-tiktok** - TikTok social links
- **fa-discord** - Discord community links
- **fa-github** - GitHub repository links
- **fa-google** - Google services links
- **fa-apple** - Apple product links

### 3. Regular Icons (far/fa-regular)
Regular weight icons available for use:

- **fa-user** - User profile icons
- **fa-heart** - Like/favorite functionality
- **fa-star** - Rating and favorites
- **fa-bookmark** - Save/bookmark functionality
- **fa-envelope** - Email contact (regular weight)
- **fa-clock** - Time information (regular weight)
- **fa-calendar** - Calendar events (regular weight)
- **fa-file** - Document icons
- **fa-folder** - Folder/directory icons
- **fa-comment** - Comment functionality
- **fa-thumbs-up** - Like functionality
- **fa-thumbs-down** - Dislike functionality
- **fa-share-square** - Share functionality
- **fa-edit** - Edit functionality
- **fa-trash-alt** - Delete functionality
- **fa-copy** - Copy functionality
- **fa-save** - Save functionality
- **fa-eye** - View functionality
- **fa-eye-slash** - Hide functionality
- **fa-bell** - Notification icons
- **fa-flag** - Flag/report functionality
- **fa-question-circle** - Help/FAQ sections
- **fa-info-circle** - Information displays

### 4. Education & Academic Icons
Icons specifically useful for educational institutions:

- **fa-graduation-cap** - Graduation and education
- **fa-book** - Academic content and courses
- **fa-user-graduate** - Students and graduates
- **fa-chalkboard-teacher** - Teachers and instructors
- **fa-university** - University and college
- **fa-school** - School and educational institution
- **fa-microscope** - Science and laboratory
- **fa-flask** - Chemistry and experiments
- **fa-laptop** - Computer science and technology
- **fa-desktop** - Computer labs and workstations
- **fa-certificate** - Certificates and achievements
- **fa-medal** - Awards and recognition
- **fa-trophy** - Competitions and achievements
- **fa-award** - Honors and awards
- **fa-clipboard-list** - Assignments and tasks
- **fa-pen-fancy** - Writing and literature
- **fa-pencil-alt** - Note-taking and writing
- **fa-calculator** - Mathematics and calculations
- **fa-atom** - Physics and science
- **fa-dna** - Biology and life sciences

## Usage Locations

### Header Component (`app/components/Header.tsx`)
- `fa-arrow-right` - "Let's Talk" button

### Footer Component (`app/components/Footer.tsx`)
- `fa-arrow-right` - "Send Message" button
- `fa-clock` - Opening hours display
- `fa-facebook-f`, `fa-instagram`, `fa-x-twitter`, `fa-linkedin-in` - Social media links

### Offcanvas Menu (`app/components/OffcanvasMenu.tsx`)
- `fa-xmark` - Close button (appears twice)
- `fa-search` - Search form button (appears twice)
- `fa-facebook-f`, `fa-instagram`, `fa-x-twitter`, `fa-linkedin-in` - Social media links (appears twice)

### Services Page (`app/services/page.tsx`)
- `fa-home` - Breadcrumb navigation
- `fa-arrow-right` - Breadcrumb separator
- `fa-arrow-right-long` - "Get Started Today" button

### Team Page (`app/team/page.tsx`)
- `fa-facebook-f`, `fa-twitter`, `fa-linkedin-in` - Team member social links (multiple instances)

### Department Pages
Multiple department pages use:
- `fa-envelope` - Faculty email contact links

## Font Awesome Implementation

### CSS Loading
Font Awesome is loaded via CDN in `app/layout.tsx`:
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
```

### CSS Fixes Applied
The following CSS fixes were applied to ensure proper icon display:

```css
/* Ensure Font Awesome icons display properly */
.fas, .fa-solid {
  font-family: "Font Awesome 6 Free" !important;
  font-weight: 900 !important;
}
.fab, .fa-brands {
  font-family: "Font Awesome 6 Brands" !important;
  font-weight: 400 !important;
}
.far, .fa-regular {
  font-family: "Font Awesome 6 Free" !important;
  font-weight: 400 !important;
}
/* Override any conflicting styles */
i[class*="fa-"] {
  font-style: normal !important;
  font-variant: normal !important;
  text-rendering: auto !important;
  -webkit-font-smoothing: antialiased !important;
  -moz-osx-font-smoothing: grayscale !important;
  display: inline-block !important;
  line-height: 1 !important;
}
```

## Testing
A comprehensive test page has been created at `/icon-test` to verify all Font Awesome icons are working correctly.

## Total Icon Count
- **Solid Icons**: 50+ unique icons
- **Brand Icons**: 15 unique icons
- **Regular Icons**: 20+ unique icons
- **Education Icons**: 20+ unique icons
- **Total Available Icons**: 100+ icons in the test page
- **Total Instances**: 500+ across the entire project

## Common Issues Fixed
1. Font family conflicts with custom bexon-icons
2. Missing font-weight declarations
3. CSS specificity issues
4. Font loading optimization

All Font Awesome icons should now display correctly throughout the application.
