# Admin Dashboard - College Website

A comprehensive admin dashboard for managing college website content, users, and analytics.

## 🚀 Features

### Authentication & Security
- **Role-based Access Control**: Admin, Editor, Viewer roles with different permissions
- **Secure Login**: Form validation and dummy authentication system
- **User Management**: Add, edit, delete users with role assignments

### Content Management
- **Blog Management**: 
  - Create, edit, delete blog posts
  - Rich content editor (textarea with preview)
  - Categories, tags, and featured images
  - Status management (draft, published, scheduled)
  - Search and filter functionality
  - Bulk operations and CSV export

- **Event Management**:
  - Create and manage college events
  - Calendar view with interactive date selection
  - Event categories and status tracking
  - Registration management
  - Featured events support
  - Export capabilities

### Analytics & Reporting
- **Comprehensive Analytics**:
  - Traffic analytics with charts
  - User engagement metrics
  - Content performance tracking
  - Device and browser statistics
  - Exportable reports

### User Interface
- **Modern Design**: Clean, responsive UI with Tailwind CSS
- **Interactive Charts**: Recharts integration for data visualization
- **Mobile-Friendly**: Responsive design for all devices
- **Dark/Light Theme**: Theme customization options

## 🔐 Demo Credentials

### Admin Access (Full Permissions)
- **Email**: admin@example.com
- **Password**: admin123

### Editor Access (Content Management)
- **Email**: editor@example.com
- **Password**: editor123

### Viewer Access (Read-Only)
- **Email**: viewer@example.com
- **Password**: viewer123

## 📁 Project Structure

```
app/dashboard/
├── components/
│   ├── AuthProvider.tsx      # Authentication context and logic
│   ├── Sidebar.tsx          # Navigation sidebar component
│   └── Topbar.tsx           # Top navigation bar
├── login/
│   └── page.tsx             # Login page with form validation
├── blog/
│   ├── page.tsx             # Blog posts listing with CRUD operations
│   └── new/
│       └── page.tsx         # Create new blog post form
├── events/
│   ├── page.tsx             # Events listing and management
│   ├── calendar/
│   │   └── page.tsx         # Interactive calendar view
│   └── new/
│       └── page.tsx         # Create new event form
├── users/
│   └── page.tsx             # User management interface
├── analytics/
│   └── page.tsx             # Analytics dashboard with charts
├── settings/
│   └── page.tsx             # System settings and preferences
├── layout.tsx               # Dashboard layout wrapper
└── page.tsx                 # Main dashboard with overview
```

## 🛠️ Technologies Used

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS for responsive design
- **Icons**: Lucide React for consistent iconography
- **Charts**: Recharts for data visualization
- **Forms**: React Hook Form with validation
- **Date Handling**: date-fns for date manipulation
- **TypeScript**: Full type safety throughout

## ✨ Key Features Implemented

### 1. Authentication System
- Role-based permissions (Admin, Editor, Viewer)
- Protected routes with automatic redirects
- User context for state management
- Login/logout functionality

### 2. Blog Management
- CRUD operations for blog posts
- Rich content preview
- Category and tag management
- Featured image uploads
- Search, filter, and sort capabilities
- Bulk actions (delete multiple posts)
- CSV export functionality

### 3. Event Management
- Event creation with detailed information
- Interactive calendar view
- Event status tracking (upcoming, ongoing, completed)
- Registration management
- Featured event highlighting
- Category-based filtering

### 4. User Management
- User CRUD operations
- Role assignment and management
- User activity tracking
- Status management (active, inactive, pending)
- Bulk user operations
- Export user data

### 5. Analytics Dashboard
- Real-time metrics and KPIs
- Interactive charts and graphs
- Traffic analysis
- Content performance metrics
- User engagement tracking
- Exportable reports

### 6. Settings & Configuration
- General site settings
- User profile management
- Notification preferences
- Security settings
- Appearance customization
- Advanced system settings

## 🎯 Permission System

### Admin (Full Access)
- All CRUD operations
- User management
- System settings
- Analytics access
- Export capabilities

### Editor (Content Management)
- Create and edit blog posts
- Create and edit events
- View analytics
- Export content data

### Viewer (Read-Only)
- View all content
- Access analytics
- No edit/delete permissions

## 📱 Responsive Design

The dashboard is fully responsive and works seamlessly across:
- Desktop computers (1024px+)
- Tablets (768px - 1023px)
- Mobile devices (320px - 767px)

## 🔧 Setup Instructions

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Start Development Server**:
   ```bash
   npm run dev
   ```

3. **Access Dashboard**:
   - Open browser to `http://localhost:3000/dashboard/login`
   - Use demo credentials to log in
   - Explore all features and functionality

## 🎨 Customization

The dashboard is highly customizable:
- **Colors**: Modify theme colors in Tailwind config
- **Layout**: Adjust sidebar and topbar components
- **Features**: Add/remove functionality as needed
- **Styling**: Customize with Tailwind utility classes

## 📊 Dummy Data

The dashboard includes comprehensive dummy data:
- Sample blog posts with various categories
- Mock events with different statuses
- Fake user accounts with different roles
- Analytics data with charts and metrics
- Realistic activity logs and statistics

## 🔄 Future Enhancements

Potential improvements for production use:
- Real API integration
- File upload to cloud storage
- Advanced rich text editor (Quill/TinyMCE)
- Email notifications
- Advanced user roles and permissions
- Database integration
- SEO optimization tools
- Advanced analytics with real-time data

---

**Note**: This is a demo dashboard with dummy data for demonstration purposes. In a production environment, you would integrate with real APIs, databases, and authentication systems.
