'use client';

import { useState, useEffect } from 'react';
import { 
  FileText, 
  Calendar, 
  Users, 
  TrendingUp, 
  Eye, 
  MessageSquare,
  Clock,
  Star
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { useAuth } from './components/AuthProvider';

// Dummy data
const analyticsData = {
  totalPosts: 45,
  totalEvents: 12,
  upcomingEvents: 3,
  totalUsers: 128,
  monthlyViews: 15420,
  comments: 89,
  averageRating: 4.6
};

const monthlyPostsData = [
  { month: 'Jan', posts: 8, events: 2 },
  { month: 'Feb', posts: 12, events: 1 },
  { month: 'Mar', posts: 6, events: 3 },
  { month: 'Apr', posts: 9, events: 2 },
  { month: 'May', posts: 15, events: 4 },
  { month: 'Jun', posts: 10, events: 2 },
];

const trafficData = [
  { day: 'Mon', views: 1200 },
  { day: 'Tue', views: 1900 },
  { day: 'Wed', views: 800 },
  { day: 'Thu', views: 2100 },
  { day: 'Fri', views: 1600 },
  { day: 'Sat', views: 900 },
  { day: 'Sun', views: 1400 },
];

const categoryData = [
  { name: 'Academic', value: 35, color: '#3B82F6' },
  { name: 'Events', value: 25, color: '#10B981' },
  { name: 'News', value: 20, color: '#F59E0B' },
  { name: 'Research', value: 20, color: '#EF4444' },
];

const recentActivities = [
  { id: 1, type: 'post', title: 'New research paper published', time: '2 hours ago' },
  { id: 2, type: 'event', title: 'Annual Science Fair registered', time: '4 hours ago' },
  { id: 3, type: 'user', title: 'New student John Doe registered', time: '6 hours ago' },
  { id: 4, type: 'comment', title: 'Comment on "AI in Education"', time: '8 hours ago' },
  { id: 5, type: 'post', title: 'Updated admission guidelines', time: '1 day ago' },
];

interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ElementType;
  change: string;
  changeType: 'increase' | 'decrease';
  color: string;
}

function StatCard({ title, value, icon: Icon, change, changeType, color }: StatCardProps) {
  return (
    <div style={{ 
      backgroundColor: 'white', 
      borderRadius: '0.75rem', 
      boxShadow: '0 1px 2px 0 rgb(0 0 0 / 0.05)', 
      border: '1px solid #e5e7eb', 
      padding: '1.5rem',
      transition: 'box-shadow 0.2s ease'
    }}
    onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)'}
    onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 1px 2px 0 rgb(0 0 0 / 0.05)'}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <p style={{ fontSize: '0.875rem', fontWeight: '500', color: '#4b5563', margin: 0 }}>{title}</p>
          <p style={{ fontSize: '1.875rem', fontWeight: '700', color: '#111827', marginTop: '0.5rem', margin: 0 }}>{value}</p>
          <div style={{ display: 'flex', alignItems: 'center', marginTop: '0.5rem' }}>
            <TrendingUp style={{ 
              width: '1rem', 
              height: '1rem', 
              color: changeType === 'increase' ? '#10b981' : '#ef4444' 
            }} />
            <span style={{ 
              fontSize: '0.875rem', 
              marginLeft: '0.25rem', 
              color: changeType === 'increase' ? '#059669' : '#dc2626' 
            }}>
              {change}
            </span>
          </div>
        </div>
        <div style={{ 
          padding: '0.75rem', 
          borderRadius: '9999px',
          backgroundColor: color === 'bg-blue-500' ? '#3b82f6' : 
                           color === 'bg-green-500' ? '#10b981' : 
                           color === 'bg-orange-500' ? '#f97316' : 
                           color === 'bg-purple-500' ? '#8b5cf6' : '#3b82f6'
        }}>
          <Icon style={{ width: '1.5rem', height: '1.5rem', color: 'white' }} />
        </div>
      </div>
    </div>
  );
}

export default function DashboardPage() {
  const { user } = useAuth();
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      {/* Welcome Header */}
      <div style={{ 
        background: 'linear-gradient(to right, #2563eb, #7c3aed)', 
        borderRadius: '0.75rem', 
        color: 'white', 
        padding: '1.5rem' 
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <h1 style={{ fontSize: '1.5rem', fontWeight: '700', margin: 0 }}>Welcome back, {user?.name}!</h1>
            <p style={{ color: '#bfdbfe', marginTop: '0.25rem', fontSize: '0.875rem' }}>
              Here's what's happening with your college website today.
            </p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <p style={{ color: '#bfdbfe', fontSize: '0.875rem', margin: 0 }}>Current Time</p>
            <p style={{ fontSize: '1.25rem', fontWeight: '600', margin: 0 }}>
              {currentTime.toLocaleTimeString()}
            </p>
            <p style={{ color: '#bfdbfe', fontSize: '0.875rem', margin: 0 }}>
              {currentTime.toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
        gap: '1.5rem' 
      }}>
        <StatCard
          title="Total Blog Posts"
          value={analyticsData.totalPosts}
          icon={FileText}
          change="+12%"
          changeType="increase"
          color="bg-blue-500"
        />
        <StatCard
          title="Total Events"
          value={analyticsData.totalEvents}
          icon={Calendar}
          change="+8%"
          changeType="increase"
          color="bg-green-500"
        />
        <StatCard
          title="Upcoming Events"
          value={analyticsData.upcomingEvents}
          icon={Clock}
          change="2 this week"
          changeType="increase"
          color="bg-orange-500"
        />
        <StatCard
          title="Total Users"
          value={analyticsData.totalUsers}
          icon={Users}
          change="+15%"
          changeType="increase"
          color="bg-purple-500"
        />
      </div>

      {/* Secondary Stats */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
        gap: '1.5rem' 
      }}>
        <div style={{ 
          backgroundColor: 'white', 
          borderRadius: '0.75rem', 
          boxShadow: '0 1px 2px 0 rgb(0 0 0 / 0.05)', 
          border: '1px solid #e5e7eb', 
          padding: '1.5rem' 
        }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Eye style={{ width: '2rem', height: '2rem', color: '#3b82f6', marginRight: '0.75rem' }} />
            <div>
              <p style={{ fontSize: '0.875rem', fontWeight: '500', color: '#4b5563', margin: 0 }}>Monthly Views</p>
              <p style={{ fontSize: '1.5rem', fontWeight: '700', color: '#111827', margin: 0 }}>{analyticsData.monthlyViews.toLocaleString()}</p>
            </div>
          </div>
        </div>
        <div style={{ 
          backgroundColor: 'white', 
          borderRadius: '0.75rem', 
          boxShadow: '0 1px 2px 0 rgb(0 0 0 / 0.05)', 
          border: '1px solid #e5e7eb', 
          padding: '1.5rem' 
        }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <MessageSquare style={{ width: '2rem', height: '2rem', color: '#10b981', marginRight: '0.75rem' }} />
            <div>
              <p style={{ fontSize: '0.875rem', fontWeight: '500', color: '#4b5563', margin: 0 }}>Total Comments</p>
              <p style={{ fontSize: '1.5rem', fontWeight: '700', color: '#111827', margin: 0 }}>{analyticsData.comments}</p>
            </div>
          </div>
        </div>
        <div style={{ 
          backgroundColor: 'white', 
          borderRadius: '0.75rem', 
          boxShadow: '0 1px 2px 0 rgb(0 0 0 / 0.05)', 
          border: '1px solid #e5e7eb', 
          padding: '1.5rem' 
        }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Star style={{ width: '2rem', height: '2rem', color: '#eab308', marginRight: '0.75rem' }} />
            <div>
              <p style={{ fontSize: '0.875rem', fontWeight: '500', color: '#4b5563', margin: 0 }}>Average Rating</p>
              <p style={{ fontSize: '1.5rem', fontWeight: '700', color: '#111827', margin: 0 }}>{analyticsData.averageRating}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Charts Grid */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', 
        gap: '1.5rem' 
      }}>
        {/* Monthly Posts Chart */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Monthly Content</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={monthlyPostsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="posts" fill="#3B82F6" name="Blog Posts" />
              <Bar dataKey="events" fill="#10B981" name="Events" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Traffic Chart */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Weekly Traffic</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={trafficData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="views" stroke="#8B5CF6" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Bottom Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Content Categories */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Content Categories</h3>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={categoryData}
                cx="50%"
                cy="50%"
                outerRadius={80}
                dataKey="value"
              >
                {categoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="mt-4 space-y-2">
            {categoryData.map((item) => (
              <div key={item.name} className="flex items-center justify-between">
                <div className="flex items-center">
                  <div 
                    className="w-3 h-3 rounded-full mr-2" 
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-sm text-gray-600">{item.name}</span>
                </div>
                <span className="text-sm font-medium">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <div className={`p-2 rounded-full ${
                  activity.type === 'post' ? 'bg-blue-100 text-blue-600' :
                  activity.type === 'event' ? 'bg-green-100 text-green-600' :
                  activity.type === 'user' ? 'bg-purple-100 text-purple-600' :
                  'bg-yellow-100 text-yellow-600'
                }`}>
                  {activity.type === 'post' && <FileText className="w-4 h-4" />}
                  {activity.type === 'event' && <Calendar className="w-4 h-4" />}
                  {activity.type === 'user' && <Users className="w-4 h-4" />}
                  {activity.type === 'comment' && <MessageSquare className="w-4 h-4" />}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">{activity.title}</p>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
