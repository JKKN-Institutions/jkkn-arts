'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { useRouter, usePathname } from 'next/navigation';

interface User {
  email: string;
  role: 'admin' | 'editor' | 'viewer';
  name: string;
}

interface AuthContextType {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
  hasPermission: (permission: string) => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const permissions = {
  admin: ['read', 'write', 'delete', 'manage_users', 'settings'],
  editor: ['read', 'write'],
  viewer: ['read']
};

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Check if user is logged in
    try {
      const savedUser = localStorage.getItem('user');
      if (savedUser) {
        const parsedUser = JSON.parse(savedUser);
        console.log('Restored user from localStorage:', parsedUser);
        setUser(parsedUser);
      } else {
        console.log('No user found in localStorage');
      }
    } catch (error) {
      console.error('Error parsing user from localStorage:', error);
      localStorage.removeItem('user'); // Clear corrupted data
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    // Redirect logic
    if (!loading) {
      if (!user && pathname !== '/dashboard/login') {
        router.push('/dashboard/login');
      } else if (user && pathname === '/dashboard/login') {
        router.push('/dashboard');
      }
    }
  }, [user, loading, pathname, router]);

  const login = (userData: User) => {
    console.log('AuthProvider login called with:', userData);
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
    console.log('User data saved to localStorage');
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    router.push('/dashboard/login');
  };

  const hasPermission = (permission: string) => {
    if (!user) {
      console.log('hasPermission: No user logged in');
      return false;
    }
    const hasAccess = permissions[user.role].includes(permission);
    console.log(`hasPermission: User ${user.email} (${user.role}) requesting '${permission}' - ${hasAccess ? 'GRANTED' : 'DENIED'}`);
    return hasAccess;
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, hasPermission }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
