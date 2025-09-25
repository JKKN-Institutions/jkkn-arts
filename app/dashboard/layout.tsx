'use client';

import { AuthProvider } from './components/AuthProvider';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import { useAuth } from './components/AuthProvider';
import { usePathname } from 'next/navigation';
import './dashboard.css';

function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  const pathname = usePathname();

  // Don't show sidebar/topbar on login page
  if (pathname === '/dashboard/login') {
    return (
      <div 
        className="dashboard-container"
        style={{
          minHeight: '100vh',
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
          margin: 0,
          padding: 0,
          boxSizing: 'border-box'
        }}
      >
        {children}
      </div>
    );
  }

  // Don't render layout if not authenticated
  if (!user) {
    return null;
  }

  return (
    <div 
      className="dashboard-container"
      style={{
        height: '100vh',
        display: 'flex',
        backgroundColor: '#f9fafb',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
        margin: 0,
        padding: 0,
        boxSizing: 'border-box'
      }}
    >
      <Sidebar />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <Topbar />
        <main style={{ flex: 1, overflowY: 'auto', padding: '1.5rem' }}>
          {children}
        </main>
      </div>
    </div>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <DashboardLayout>{children}</DashboardLayout>
    </AuthProvider>
  );
}
