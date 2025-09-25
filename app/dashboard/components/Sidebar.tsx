'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  Calendar, 
  FileText, 
  Users, 
  Settings, 
  ChevronLeft,
  ChevronRight,
  Home,
  PlusCircle,
  List,
  BarChart3
} from 'lucide-react';
import { useAuth } from './AuthProvider';

const menuItems = [
  {
    name: 'Dashboard',
    href: '/dashboard',
    icon: LayoutDashboard,
    permission: 'read'
  },
  {
    name: 'Analytics',
    href: '/dashboard/analytics',
    icon: BarChart3,
    permission: 'read'
  },
  {
    name: 'Blog Posts',
    icon: FileText,
    permission: 'read',
    submenu: [
      { name: 'All Posts', href: '/dashboard/blog', icon: List },
      { name: 'Add New', href: '/dashboard/blog/new', icon: PlusCircle, permission: 'write' },
    ]
  },
  {
    name: 'Events',
    icon: Calendar,
    permission: 'read',
    submenu: [
      { name: 'All Events', href: '/dashboard/events', icon: List },
      { name: 'Add New', href: '/dashboard/events/new', icon: PlusCircle, permission: 'write' },
      { name: 'Calendar', href: '/dashboard/events/calendar', icon: Calendar },
    ]
  },
  {
    name: 'Users',
    href: '/dashboard/users',
    icon: Users,
    permission: 'manage_users'
  },
  {
    name: 'Settings',
    href: '/dashboard/settings',
    icon: Settings,
    permission: 'settings'
  }
];

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const pathname = usePathname();
  const { hasPermission } = useAuth();

  const toggleSubmenu = (itemName: string) => {
    setOpenSubmenu(openSubmenu === itemName ? null : itemName);
  };

  const isActive = (href: string) => {
    return pathname === href;
  };

  const isSubmenuActive = (submenu: any[]) => {
    return submenu.some(item => pathname === item.href);
  };

  const filteredMenuItems = menuItems.filter(item => 
    hasPermission(item.permission || 'read')
  );

  return (
    <div 
      style={{
        width: collapsed ? '4rem' : '16rem',
        backgroundColor: '#ffffff',
        borderRight: '1px solid #e5e7eb',
        transition: 'all 0.3s ease',
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }}
    >
      {/* Logo and Toggle */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem', borderBottom: '1px solid #e5e7eb' }}>
        {!collapsed && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div style={{ 
              width: '2rem', 
              height: '2rem', 
              background: 'linear-gradient(to right, #2563eb, #7c3aed)', 
              borderRadius: '0.5rem', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center' 
            }}>
              <Home style={{ width: '1.25rem', height: '1.25rem', color: 'white' }} />
            </div>
            <span style={{ fontWeight: '600', color: '#111827' }}>Admin Panel</span>
          </div>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          style={{ 
            padding: '0.25rem', 
            borderRadius: '0.5rem', 
            backgroundColor: 'transparent', 
            border: 'none', 
            cursor: 'pointer',
            transition: 'background-color 0.2s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f3f4f6'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
        >
          {collapsed ? (
            <ChevronRight style={{ width: '1.25rem', height: '1.25rem', color: '#4b5563' }} />
          ) : (
            <ChevronLeft style={{ width: '1.25rem', height: '1.25rem', color: '#4b5563' }} />
          )}
        </button>
      </div>

      {/* Navigation */}
      <nav style={{ flex: 1, padding: '1rem', overflowY: 'auto' }}>
        {filteredMenuItems.map((item) => (
          <div key={item.name}>
            {item.submenu ? (
              <div>
                <button
                  onClick={() => toggleSubmenu(item.name)}
                  className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors ${
                    isSubmenuActive(item.submenu)
                      ? 'bg-blue-50 text-blue-700'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <item.icon className="w-5 h-5" />
                    {!collapsed && <span className="font-medium">{item.name}</span>}
                  </div>
                  {!collapsed && (
                    <ChevronRight
                      className={`w-4 h-4 transition-transform ${
                        openSubmenu === item.name ? 'rotate-90' : ''
                      }`}
                    />
                  )}
                </button>
                {!collapsed && openSubmenu === item.name && (
                  <div className="ml-4 mt-2 space-y-1">
                    {item.submenu
                      .filter(subItem => !subItem.permission || hasPermission(subItem.permission))
                      .map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className={`flex items-center space-x-3 p-2 rounded-lg transition-colors ${
                          isActive(subItem.href)
                            ? 'bg-blue-100 text-blue-700'
                            : 'text-gray-600 hover:bg-gray-50'
                        }`}
                      >
                        <subItem.icon className="w-4 h-4" />
                        <span className="text-sm">{subItem.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                href={item.href}
                className={`flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                  isActive(item.href)
                    ? 'bg-blue-50 text-blue-700'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <item.icon className="w-5 h-5" />
                {!collapsed && <span className="font-medium">{item.name}</span>}
              </Link>
            )}
          </div>
        ))}
      </nav>

      {/* Back to Main Site */}
      {!collapsed && (
        <div className="p-4 border-t border-gray-200">
          <Link
            href="/"
            className="flex items-center space-x-3 p-3 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
          >
            <Home className="w-5 h-5" />
            <span className="text-sm">Back to Website</span>
          </Link>
        </div>
      )}
    </div>
  );
}
