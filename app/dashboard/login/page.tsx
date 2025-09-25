'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { Eye, EyeOff, Lock, Mail, User, Shield, BookOpen, GraduationCap } from 'lucide-react';
import { useAuth } from '../components/AuthProvider';

interface LoginForm {
  email: string;
  password: string;
}

const users = [
  { email: 'admin@example.com', password: 'admin123', role: 'admin', name: 'Admin User' },
  { email: 'editor@example.com', password: 'editor123', role: 'editor', name: 'Editor User' },
  { email: 'viewer@example.com', password: 'viewer123', role: 'viewer', name: 'Viewer User' },
];

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const router = useRouter();
  const { login } = useAuth();

  const { register, handleSubmit, formState: { errors }, setValue } = useForm<LoginForm>();

  // Helper function to set demo credentials
  const setDemoCredentials = (email: string, password: string, roleName: string) => {
    setValue('email', email);
    setValue('password', password);
    setError(''); // Clear any previous errors
    setSuccessMessage(`✅ ${roleName} credentials loaded! Click "Sign In" to continue.`);
    
    // Clear success message after 3 seconds
    setTimeout(() => {
      setSuccessMessage('');
    }, 3000);
    
    // Show visual feedback
    const emailInput = document.getElementById('email') as HTMLInputElement;
    const passwordInput = document.getElementById('password') as HTMLInputElement;
    
    if (emailInput && passwordInput) {
      // Briefly highlight the fields
      emailInput.style.borderColor = '#10b981';
      passwordInput.style.borderColor = '#10b981';
      emailInput.style.boxShadow = '0 0 0 3px rgba(16, 185, 129, 0.1)';
      passwordInput.style.boxShadow = '0 0 0 3px rgba(16, 185, 129, 0.1)';
      
      // Reset after 1 second
      setTimeout(() => {
        emailInput.style.borderColor = '#e5e7eb';
        passwordInput.style.borderColor = '#e5e7eb';
        emailInput.style.boxShadow = 'none';
        passwordInput.style.boxShadow = 'none';
      }, 1000);
    }
  };

  const onSubmit = async (data: LoginForm) => {
    setIsLoading(true);
    setError('');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Find user with exact email and password match
      const foundUser = users.find(u => 
        u.email.toLowerCase() === data.email.toLowerCase() && 
        u.password === data.password
      );

      if (foundUser) {
        console.log('User found:', foundUser); // Debug log
        
        // Use the AuthProvider's login function to properly set the user state
        login({
          email: foundUser.email,
          role: foundUser.role as 'admin' | 'editor' | 'viewer',
          name: foundUser.name
        });
        
        console.log('Login successful, redirecting...'); // Debug log
        router.push('/dashboard');
      } else {
        console.log('Login failed - user not found'); // Debug log
        setError('Invalid email or password. Please check your credentials.');
      }
    } catch (error) {
      console.error('Login error:', error);
      setError('An error occurred during login. Please try again.');
    }

    setIsLoading(false);
  };

  return (
    <div className="login-container" style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      display: 'flex',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Pattern */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `url(&quot;data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        opacity: 0.3
      }} />

      {/* Left Side - Branding */}
      <div className="left-side" style={{ 
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2rem',
        color: 'white',
        textAlign: 'center',
        position: 'relative',
        zIndex: 1
      }}>
        <div className="brand-container" style={{
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          borderRadius: '20px',
          padding: '3rem 2rem',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          maxWidth: '400px'
        }}>
          <div style={{ 
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '2rem'
          }}>
            <div style={{ 
              background: 'linear-gradient(135deg, #ff6b6b, #feca57, #48dbfb, #ff9ff3)',
              borderRadius: '20px',
              padding: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <GraduationCap style={{ width: '3rem', height: '3rem', color: 'white' }} />
            </div>
          </div>
          
          <h1 style={{ 
            fontSize: '2.5rem', 
            fontWeight: '800', 
            marginBottom: '1rem',
            background: 'linear-gradient(135deg, #fff, #f0f0f0)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            College Admin
          </h1>
          
          <p style={{ 
            fontSize: '1.125rem', 
            opacity: 0.9, 
            marginBottom: '2rem',
            lineHeight: '1.6'
          }}>
            Manage your institution with powerful tools and insights
          </p>

          <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '2rem' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                background: 'rgba(255, 255, 255, 0.2)',
                borderRadius: '12px',
                padding: '1rem',
                marginBottom: '0.5rem'
              }}>
                <BookOpen style={{ width: '1.5rem', height: '1.5rem' }} />
              </div>
              <span style={{ fontSize: '0.875rem', opacity: 0.8 }}>Content</span>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                background: 'rgba(255, 255, 255, 0.2)',
                borderRadius: '12px',
                padding: '1rem',
                marginBottom: '0.5rem'
              }}>
                <User style={{ width: '1.5rem', height: '1.5rem' }} />
              </div>
              <span style={{ fontSize: '0.875rem', opacity: 0.8 }}>Users</span>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                background: 'rgba(255, 255, 255, 0.2)',
                borderRadius: '12px',
                padding: '1rem',
                marginBottom: '0.5rem'
              }}>
                <Shield style={{ width: '1.5rem', height: '1.5rem' }} />
              </div>
              <span style={{ fontSize: '0.875rem', opacity: 0.8 }}>Security</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="right-side" style={{ 
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        position: 'relative',
        zIndex: 1
      }}>
        <div className="form-container" style={{
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(20px)',
          borderRadius: '24px',
          padding: '3rem',
          border: '1px solid rgba(255, 255, 255, 0.3)',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
          width: '100%',
          maxWidth: '420px'
        }}>
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <div style={{
              background: 'linear-gradient(135deg, #667eea, #764ba2)',
              borderRadius: '16px',
              padding: '1rem',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1.5rem'
            }}>
              <Shield style={{ width: '2rem', height: '2rem', color: 'white' }} />
            </div>
            <h2 style={{ 
              fontSize: '2rem', 
              fontWeight: '700', 
              color: '#1f2937', 
              marginBottom: '0.5rem' 
            }}>
              Welcome Back
            </h2>
            <p style={{ 
              color: '#6b7280', 
              fontSize: '1rem' 
            }}>
              Sign in to access your dashboard
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Email Field */}
            <div>
              <label htmlFor="email" style={{ 
                display: 'block', 
                fontSize: '0.875rem', 
                fontWeight: '600', 
                color: '#374151', 
                marginBottom: '0.5rem' 
              }}>
                Email Address
              </label>
              <div style={{ position: 'relative' }}>
                <div style={{ 
                  position: 'absolute', 
                  top: '50%', 
                  left: '1rem', 
                  transform: 'translateY(-50%)',
                  pointerEvents: 'none' 
                }}>
                  <Mail style={{ width: '1.25rem', height: '1.25rem', color: '#9ca3af' }} />
                </div>
                <input
                  {...register('email', { 
                    required: 'Email is required',
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: 'Please enter a valid email address'
                    }
                  })}
                  type="email"
                  id="email"
                  style={{
                    width: '100%',
                    paddingLeft: '3rem',
                    paddingRight: '1rem',
                    paddingTop: '0.875rem',
                    paddingBottom: '0.875rem',
                    border: '2px solid #e5e7eb',
                    borderRadius: '12px',
                    fontSize: '1rem',
                    outline: 'none',
                    transition: 'all 0.2s ease',
                    background: 'rgba(255, 255, 255, 0.8)'
                  }}
                  placeholder="Enter your email"
                  onFocus={(e) => {
                    e.target.style.borderColor = '#667eea';
                    e.target.style.boxShadow = '0 0 0 3px rgba(102, 126, 234, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#e5e7eb';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>
              {errors.email && (
                <p style={{ marginTop: '0.5rem', fontSize: '0.875rem', color: '#ef4444' }}>
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" style={{ 
                display: 'block', 
                fontSize: '0.875rem', 
                fontWeight: '600', 
                color: '#374151', 
                marginBottom: '0.5rem' 
              }}>
                Password
              </label>
              <div style={{ position: 'relative' }}>
                <div style={{ 
                  position: 'absolute', 
                  top: '50%', 
                  left: '1rem', 
                  transform: 'translateY(-50%)',
                  pointerEvents: 'none' 
                }}>
                  <Lock style={{ width: '1.25rem', height: '1.25rem', color: '#9ca3af' }} />
                </div>
                <input
                  {...register('password', { required: 'Password is required' })}
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  style={{
                    width: '100%',
                    paddingLeft: '3rem',
                    paddingRight: '3rem',
                    paddingTop: '0.875rem',
                    paddingBottom: '0.875rem',
                    border: '2px solid #e5e7eb',
                    borderRadius: '12px',
                    fontSize: '1rem',
                    outline: 'none',
                    transition: 'all 0.2s ease',
                    background: 'rgba(255, 255, 255, 0.8)'
                  }}
                  placeholder="Enter your password"
                  onFocus={(e) => {
                    e.target.style.borderColor = '#667eea';
                    e.target.style.boxShadow = '0 0 0 3px rgba(102, 126, 234, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#e5e7eb';
                    e.target.style.boxShadow = 'none';
                  }}
                />
                <button
                  type="button"
                  style={{ 
                    position: 'absolute', 
                    top: '50%', 
                    right: '1rem', 
                    transform: 'translateY(-50%)',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center'
                  }}
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff style={{ width: '1.25rem', height: '1.25rem', color: '#9ca3af' }} />
                  ) : (
                    <Eye style={{ width: '1.25rem', height: '1.25rem', color: '#9ca3af' }} />
                  )}
                </button>
              </div>
              {errors.password && (
                <p style={{ marginTop: '0.5rem', fontSize: '0.875rem', color: '#ef4444' }}>
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Error Message */}
            {error && (
              <div style={{
                background: 'rgba(239, 68, 68, 0.1)',
                border: '1px solid rgba(239, 68, 68, 0.2)',
                color: '#dc2626',
                padding: '1rem',
                borderRadius: '12px',
                fontSize: '0.875rem'
              }}>
                {error}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              style={{
                width: '100%',
                background: isLoading ? '#9ca3af' : 'linear-gradient(135deg, #667eea, #764ba2)',
                color: 'white',
                fontWeight: '600',
                padding: '1rem',
                borderRadius: '12px',
                border: 'none',
                fontSize: '1rem',
                cursor: isLoading ? 'not-allowed' : 'pointer',
                transition: 'all 0.2s ease',
                transform: 'translateY(0)',
                boxShadow: '0 4px 12px rgba(102, 126, 234, 0.3)'
              }}
              onMouseEnter={(e) => {
                if (!isLoading) {
                  e.currentTarget.style.transform = 'translateY(-1px)';
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(102, 126, 234, 0.4)';
                }
              }}
              onMouseLeave={(e) => {
                if (!isLoading) {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(102, 126, 234, 0.3)';
                }
              }}
            >
              {isLoading ? (
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                  <div style={{
                    width: '1.25rem',
                    height: '1.25rem',
                    border: '2px solid rgba(255, 255, 255, 0.3)',
                    borderTop: '2px solid white',
                    borderRadius: '50%',
                    animation: 'spin 1s linear infinite'
                  }} />
                  Signing in...
                </div>
              ) : (
                'Sign In to Dashboard'
              )}
            </button>
          </form>

          {/* Demo Credentials */}
          <div style={{
            marginTop: '2rem',
            padding: '1.5rem',
            background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.05), rgba(118, 75, 162, 0.05))',
            borderRadius: '16px',
            border: '1px solid rgba(102, 126, 234, 0.1)'
          }}>
            <h4 style={{ 
              fontSize: '0.875rem', 
              fontWeight: '600', 
              color: '#374151', 
              marginBottom: '1rem',
              textAlign: 'center'
            }}>
              🔑 Demo Credentials (Click to auto-fill)
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.875rem' }}>
              <button 
                type="button"
                onClick={() => setDemoCredentials('admin@example.com', 'admin123', 'Admin')}
                style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  padding: '0.75rem',
                  background: 'rgba(255, 255, 255, 0.7)',
                  borderRadius: '8px',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  width: '100%'
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.7)'}
              >
                <span style={{ fontWeight: '600', color: '#667eea' }}>👑 Admin:</span>
                <span style={{ color: '#4b5563', fontFamily: 'monospace' }}>admin@example.com / admin123</span>
              </button>
              
              <button 
                type="button"
                onClick={() => setDemoCredentials('editor@example.com', 'editor123', 'Editor')}
                style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  padding: '0.75rem',
                  background: 'rgba(255, 255, 255, 0.7)',
                  borderRadius: '8px',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  width: '100%'
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.7)'}
              >
                <span style={{ fontWeight: '600', color: '#10b981' }}>✏️ Editor:</span>
                <span style={{ color: '#4b5563', fontFamily: 'monospace' }}>editor@example.com / editor123</span>
              </button>
              
              <button 
                type="button"
                onClick={() => setDemoCredentials('viewer@example.com', 'viewer123', 'Viewer')}
                style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  padding: '0.75rem',
                  background: 'rgba(255, 255, 255, 0.7)',
                  borderRadius: '8px',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  width: '100%'
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.7)'}
              >
                <span style={{ fontWeight: '600', color: '#f59e0b' }}>👁️ Viewer:</span>
                <span style={{ color: '#4b5563', fontFamily: 'monospace' }}>viewer@example.com / viewer123</span>
              </button>
            </div>
            
            <div style={{ 
              marginTop: '1rem', 
              padding: '0.75rem', 
              background: 'rgba(59, 130, 246, 0.1)', 
              borderRadius: '8px',
              fontSize: '0.75rem',
              color: '#374151',
              textAlign: 'center'
            }}>
              💡 <strong>Tip:</strong> Click any credential above to auto-fill the form, then click "Sign In"
            </div>
          </div>
        </div>
      </div>

      {/* Responsive and Animation Styles */}
      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @media (max-width: 768px) {
          .login-container {
            flex-direction: column !important;
          }
          .left-side {
            min-height: 40vh !important;
            padding: 1rem !important;
          }
          .right-side {
            padding: 1rem !important;
          }
          .form-container {
            padding: 2rem !important;
          }
          .brand-container {
            padding: 2rem 1rem !important;
          }
        }
      `}</style>
    </div>
  );
}
