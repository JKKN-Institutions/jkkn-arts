'use client';

import { useState } from 'react';
import { 
  TrendingUp, 
  Users, 
  FileText, 
  Calendar, 
  Eye, 
  MessageSquare,
  Download,
  RefreshCw,
  Filter,
  BarChart3
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  LineChart, 
  Line, 
  PieChart, 
  Pie, 
  Cell,
  AreaChart,
  Area
} from 'recharts';

// Dummy analytics data
const monthlyData = [
  { month: 'Jan', posts: 8, events: 2, users: 45, views: 12500 },
  { month: 'Feb', posts: 12, events: 1, users: 38, views: 15200 },
  { month: 'Mar', posts: 6, events: 3, users: 52, views: 11800 },
  { month: 'Apr', posts: 9, events: 2, users: 41, views: 18900 },
  { month: 'May', posts: 15, events: 4, users: 67, views: 22100 },
  { month: 'Jun', posts: 10, events: 2, users: 34, views: 16700 },
  { month: 'Jul', posts: 14, events: 3, users: 58, views: 19800 },
  { month: 'Aug', posts: 11, events: 1, users: 43, views: 17300 },
  { month: 'Sep', posts: 13, events: 5, users: 61, views: 24500 },
  { month: 'Oct', posts: 16, events: 3, users: 49, views: 21200 },
  { month: 'Nov', posts: 18, events: 4, users: 55, views: 26800 },
  { month: 'Dec', posts: 12, events: 2, users: 39, views: 18900 }
];

const trafficData = [
  { day: 'Mon', views: 1200, visitors: 890 },
  { day: 'Tue', views: 1900, visitors: 1340 },
  { day: 'Wed', views: 800, visitors: 620 },
  { day: 'Thu', views: 2100, visitors: 1580 },
  { day: 'Fri', views: 1600, visitors: 1200 },
  { day: 'Sat', views: 900, visitors: 680 },
  { day: 'Sun', views: 1400, visitors: 1050 }
];

const categoryData = [
  { name: 'Academic', value: 35, color: '#3B82F6', posts: 28 },
  { name: 'Events', value: 25, color: '#10B981', posts: 20 },
  { name: 'News', value: 20, color: '#F59E0B', posts: 16 },
  { name: 'Research', value: 20, color: '#EF4444', posts: 16 }
];

const userGrowthData = [
  { month: 'Jan', total: 120, new: 15, active: 89 },
  { month: 'Feb', total: 135, new: 18, active: 95 },
  { month: 'Mar', total: 158, new: 23, active: 112 },
  { month: 'Apr', total: 172, new: 14, active: 128 },
  { month: 'May', total: 195, new: 23, active: 145 },
  { month: 'Jun', total: 218, new: 23, active: 162 }
];

const topPosts = [
  { title: 'Welcome to Our New Academic Year 2024', views: 2540, comments: 45, date: '2024-01-15' },
  { title: 'Research Breakthrough in AI and Machine Learning', views: 1890, comments: 32, date: '2024-01-10' },
  { title: 'Student Success Stories: Scholarship Winners', views: 1654, comments: 28, date: '2024-01-08' },
  { title: 'New Library Resources and Digital Collections', views: 1432, comments: 19, date: '2024-01-25' },
  { title: 'Career Guidance Workshop Results', views: 1298, comments: 24, date: '2024-01-20' }
];

const deviceData = [
  { name: 'Desktop', value: 45, color: '#3B82F6' },
  { name: 'Mobile', value: 35, color: '#10B981' },
  { name: 'Tablet', value: 20, color: '#F59E0B' }
];

export default function AnalyticsPage() {
  const [timeRange, setTimeRange] = useState('6months');
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = async () => {
    setIsRefreshing(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsRefreshing(false);
  };

  const exportData = () => {
    // Create comprehensive analytics CSV
    const csvContent = [
      ['Month', 'Posts', 'Events', 'New Users', 'Page Views'],
      ...monthlyData.map(row => [row.month, row.posts, row.events, row.users, row.views])
    ].map(row => row.join(',')).join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'analytics-report.csv';
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h1 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#111827', margin: 0 }}>Analytics Dashboard</h1>
          <p style={{ color: '#4b5563', marginTop: '0.25rem', fontSize: '0.875rem' }}>Track website performance and user engagement</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="7days">Last 7 days</option>
            <option value="30days">Last 30 days</option>
            <option value="3months">Last 3 months</option>
            <option value="6months">Last 6 months</option>
            <option value="1year">Last year</option>
          </select>
          <button
            onClick={handleRefresh}
            disabled={isRefreshing}
            className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors flex items-center space-x-2 disabled:opacity-50"
          >
            <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
            <span>Refresh</span>
          </button>
          <button
            onClick={exportData}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
          >
            <Download className="w-4 h-4" />
            <span>Export</span>
          </button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Page Views</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">245,680</p>
              <div className="flex items-center mt-2">
                <TrendingUp className="w-4 h-4 text-green-500" />
                <span className="text-sm text-green-600 ml-1">+12.5%</span>
              </div>
            </div>
            <div className="p-3 bg-blue-100 rounded-full">
              <Eye className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Users</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">8,245</p>
              <div className="flex items-center mt-2">
                <TrendingUp className="w-4 h-4 text-green-500" />
                <span className="text-sm text-green-600 ml-1">+8.2%</span>
              </div>
            </div>
            <div className="p-3 bg-green-100 rounded-full">
              <Users className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Blog Posts</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">156</p>
              <div className="flex items-center mt-2">
                <TrendingUp className="w-4 h-4 text-green-500" />
                <span className="text-sm text-green-600 ml-1">+15.3%</span>
              </div>
            </div>
            <div className="p-3 bg-purple-100 rounded-full">
              <FileText className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Events</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">32</p>
              <div className="flex items-center mt-2">
                <TrendingUp className="w-4 h-4 text-green-500" />
                <span className="text-sm text-green-600 ml-1">+22.1%</span>
              </div>
            </div>
            <div className="p-3 bg-orange-100 rounded-full">
              <Calendar className="w-6 h-6 text-orange-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Monthly Overview */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Monthly Overview</h3>
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-500 rounded mr-2"></div>
                <span>Posts</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded mr-2"></div>
                <span>Events</span>
              </div>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={monthlyData.slice(-6)}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="posts" fill="#3B82F6" name="Blog Posts" />
              <Bar dataKey="events" fill="#10B981" name="Events" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Traffic Trends */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Weekly Traffic</h3>
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-purple-500 rounded mr-2"></div>
                <span>Views</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-pink-500 rounded mr-2"></div>
                <span>Visitors</span>
              </div>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={trafficData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="views" stackId="1" stroke="#8B5CF6" fill="#8B5CF6" fillOpacity={0.6} />
              <Area type="monotone" dataKey="visitors" stackId="1" stroke="#EC4899" fill="#EC4899" fillOpacity={0.6} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Additional Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Content Categories */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Content Categories</h3>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={categoryData}
                cx="50%"
                cy="50%"
                outerRadius={80}
                dataKey="value"
                label={({ name, value }) => `${name}: ${value}%`}
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
                <span className="text-sm font-medium">{item.posts} posts</span>
              </div>
            ))}
          </div>
        </div>

        {/* User Growth */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">User Growth</h3>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={userGrowthData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="total" stroke="#3B82F6" strokeWidth={3} name="Total Users" />
              <Line type="monotone" dataKey="active" stroke="#10B981" strokeWidth={2} name="Active Users" />
            </LineChart>
          </ResponsiveContainer>
          <div className="mt-4 grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-2xl font-bold text-blue-600">218</p>
              <p className="text-xs text-gray-500">Total Users</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-green-600">162</p>
              <p className="text-xs text-gray-500">Active Users</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-orange-600">23</p>
              <p className="text-xs text-gray-500">New This Month</p>
            </div>
          </div>
        </div>

        {/* Device Analytics */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Device Usage</h3>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={deviceData}
                cx="50%"
                cy="50%"
                innerRadius={40}
                outerRadius={80}
                dataKey="value"
              >
                {deviceData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="mt-4 space-y-2">
            {deviceData.map((item) => (
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
      </div>

      {/* Top Content */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Top Performing Posts</h3>
          <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">View All</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-medium text-gray-500">Title</th>
                <th className="text-left py-3 px-4 font-medium text-gray-500">Views</th>
                <th className="text-left py-3 px-4 font-medium text-gray-500">Comments</th>
                <th className="text-left py-3 px-4 font-medium text-gray-500">Date</th>
              </tr>
            </thead>
            <tbody>
              {topPosts.map((post, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4">
                    <div className="font-medium text-gray-900 truncate max-w-md">
                      {post.title}
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center text-gray-600">
                      <Eye className="w-4 h-4 mr-1" />
                      {post.views.toLocaleString()}
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center text-gray-600">
                      <MessageSquare className="w-4 h-4 mr-1" />
                      {post.comments}
                    </div>
                  </td>
                  <td className="py-3 px-4 text-gray-600">
                    {new Date(post.date).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100">Avg. Session Duration</p>
              <p className="text-2xl font-bold">4:32</p>
            </div>
            <BarChart3 className="w-8 h-8 text-blue-200" />
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-100">Bounce Rate</p>
              <p className="text-2xl font-bold">32.4%</p>
            </div>
            <TrendingUp className="w-8 h-8 text-green-200" />
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-100">Page Load Time</p>
              <p className="text-2xl font-bold">1.8s</p>
            </div>
            <RefreshCw className="w-8 h-8 text-purple-200" />
          </div>
        </div>

        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-orange-100">Conversion Rate</p>
              <p className="text-2xl font-bold">12.8%</p>
            </div>
            <Users className="w-8 h-8 text-orange-200" />
          </div>
        </div>
      </div>
    </div>
  );
}
