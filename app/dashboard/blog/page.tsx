'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Search, 
  Filter, 
  Plus, 
  Edit, 
  Trash2, 
  Eye, 
  Calendar,
  User,
  Tag,
  MoreVertical,
  Download,
  MessageSquare,
  FileText
} from 'lucide-react';
import { useAuth } from '../components/AuthProvider';

interface BlogPost {
  id: number;
  title: string;
  slug: string;
  category: string;
  author: string;
  status: 'published' | 'draft' | 'scheduled';
  publishDate: string;
  views: number;
  comments: number;
  tags: string[];
  excerpt: string;
  featuredImage?: string;
}

// Dummy blog posts data
const initialPosts: BlogPost[] = [
  {
    id: 1,
    title: "Welcome to Our New Academic Year 2024",
    slug: "welcome-new-academic-year-2024",
    category: "Academic",
    author: "Dr. Sarah Johnson",
    status: "published",
    publishDate: "2024-01-15",
    views: 1250,
    comments: 23,
    tags: ["academic", "announcement", "new-year"],
    excerpt: "We are excited to welcome all students to the new academic year with enhanced facilities and new programs.",
    featuredImage: "/assets/images/blog/blog-1.webp"
  },
  {
    id: 2,
    title: "Research Breakthrough in AI and Machine Learning",
    slug: "research-breakthrough-ai-machine-learning",
    category: "Research",
    author: "Prof. Michael Chen",
    status: "published",
    publishDate: "2024-01-10",
    views: 890,
    comments: 15,
    tags: ["research", "ai", "technology"],
    excerpt: "Our computer science department has made significant progress in developing new AI algorithms.",
    featuredImage: "/assets/images/blog/blog-2.webp"
  },
  {
    id: 3,
    title: "Student Success Stories: Scholarship Winners",
    slug: "student-success-stories-scholarship-winners",
    category: "News",
    author: "Admin Team",
    status: "published",
    publishDate: "2024-01-08",
    views: 654,
    comments: 8,
    tags: ["students", "success", "scholarships"],
    excerpt: "Celebrating our outstanding students who received prestigious scholarships this year.",
    featuredImage: "/assets/images/blog/blog-3.webp"
  },
  {
    id: 4,
    title: "Upcoming Science Fair 2024: Call for Participants",
    slug: "upcoming-science-fair-2024-call-participants",
    category: "Events",
    author: "Event Committee",
    status: "draft",
    publishDate: "2024-01-20",
    views: 0,
    comments: 0,
    tags: ["events", "science", "fair", "students"],
    excerpt: "Join us for the annual science fair showcasing innovative projects from our talented students.",
    featuredImage: "/assets/images/blog/blog-4.webp"
  },
  {
    id: 5,
    title: "New Library Resources and Digital Collections",
    slug: "new-library-resources-digital-collections",
    category: "Academic",
    author: "Library Staff",
    status: "scheduled",
    publishDate: "2024-01-25",
    views: 0,
    comments: 0,
    tags: ["library", "resources", "digital", "academic"],
    excerpt: "Discover our expanded library resources including new digital collections and study spaces.",
    featuredImage: "/assets/images/blog/blog-5.webp"
  }
];

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>(initialPosts);
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>(initialPosts);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [selectedPosts, setSelectedPosts] = useState<number[]>([]);
  const [showActions, setShowActions] = useState<number | null>(null);
  const { hasPermission } = useAuth();

  const categories = ['all', 'Academic', 'Research', 'News', 'Events'];
  const statuses = ['all', 'published', 'draft', 'scheduled'];

  // Filter posts based on search and filters
  useEffect(() => {
    let filtered = posts;

    if (searchTerm) {
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(post => post.category === selectedCategory);
    }

    if (selectedStatus !== 'all') {
      filtered = filtered.filter(post => post.status === selectedStatus);
    }

    setFilteredPosts(filtered);
  }, [posts, searchTerm, selectedCategory, selectedStatus]);

  const handleDelete = (id: number) => {
    if (confirm('Are you sure you want to delete this post?')) {
      setPosts(posts.filter(post => post.id !== id));
      setSelectedPosts(selectedPosts.filter(postId => postId !== id));
    }
  };

  const handleBulkDelete = () => {
    if (confirm(`Are you sure you want to delete ${selectedPosts.length} selected posts?`)) {
      setPosts(posts.filter(post => !selectedPosts.includes(post.id)));
      setSelectedPosts([]);
    }
  };

  const handleSelectPost = (id: number) => {
    setSelectedPosts(prev =>
      prev.includes(id)
        ? prev.filter(postId => postId !== id)
        : [...prev, id]
    );
  };

  const handleSelectAll = () => {
    if (selectedPosts.length === filteredPosts.length) {
      setSelectedPosts([]);
    } else {
      setSelectedPosts(filteredPosts.map(post => post.id));
    }
  };

  const exportData = () => {
    const csvContent = [
      ['Title', 'Category', 'Author', 'Status', 'Publish Date', 'Views', 'Comments'],
      ...filteredPosts.map(post => [
        post.title,
        post.category,
        post.author,
        post.status,
        post.publishDate,
        post.views,
        post.comments
      ])
    ].map(row => row.join(',')).join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'blog-posts.csv';
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'published':
        return 'bg-green-100 text-green-800';
      case 'draft':
        return 'bg-yellow-100 text-yellow-800';
      case 'scheduled':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h1 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#111827', margin: 0 }}>Blog Posts</h1>
          <p style={{ color: '#4b5563', marginTop: '0.25rem', fontSize: '0.875rem' }}>Manage your blog content and publications</p>
        </div>
        {hasPermission('write') && (
          <Link
            href="/dashboard/blog/new"
            style={{
              backgroundColor: '#2563eb',
              color: 'white',
              padding: '0.5rem 1rem',
              borderRadius: '0.5rem',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '0.875rem',
              fontWeight: '500',
              transition: 'background-color 0.2s ease',
              border: 'none'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1d4ed8'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#2563eb'}
          >
            <Plus style={{ width: '1.25rem', height: '1.25rem' }} />
            <span>New Post</span>
          </Link>
        )}
      </div>

      {/* Stats Cards */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
        gap: '1rem' 
      }}>
        <div style={{ 
          backgroundColor: 'white', 
          borderRadius: '0.5rem', 
          border: '1px solid #e5e7eb', 
          padding: '1rem' 
        }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ 
              padding: '0.5rem', 
              backgroundColor: '#dbeafe', 
              borderRadius: '0.5rem' 
            }}>
              <Eye style={{ width: '1.25rem', height: '1.25rem', color: '#2563eb' }} />
            </div>
            <div style={{ marginLeft: '0.75rem' }}>
              <p style={{ fontSize: '0.875rem', fontWeight: '500', color: '#4b5563', margin: 0 }}>Total Posts</p>
              <p style={{ fontSize: '1.5rem', fontWeight: '700', color: '#111827', margin: 0 }}>{posts.length}</p>
            </div>
          </div>
        </div>
        <div style={{ 
          backgroundColor: 'white', 
          borderRadius: '0.5rem', 
          border: '1px solid #e5e7eb', 
          padding: '1rem' 
        }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ 
              padding: '0.5rem', 
              backgroundColor: '#dcfce7', 
              borderRadius: '0.5rem' 
            }}>
              <Eye style={{ width: '1.25rem', height: '1.25rem', color: '#16a34a' }} />
            </div>
            <div style={{ marginLeft: '0.75rem' }}>
              <p style={{ fontSize: '0.875rem', fontWeight: '500', color: '#4b5563', margin: 0 }}>Published</p>
              <p style={{ fontSize: '1.5rem', fontWeight: '700', color: '#111827', margin: 0 }}>
                {posts.filter(p => p.status === 'published').length}
              </p>
            </div>
          </div>
        </div>
        <div style={{ 
          backgroundColor: 'white', 
          borderRadius: '0.5rem', 
          border: '1px solid #e5e7eb', 
          padding: '1rem' 
        }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ 
              padding: '0.5rem', 
              backgroundColor: '#fef3c7', 
              borderRadius: '0.5rem' 
            }}>
              <Edit style={{ width: '1.25rem', height: '1.25rem', color: '#d97706' }} />
            </div>
            <div style={{ marginLeft: '0.75rem' }}>
              <p style={{ fontSize: '0.875rem', fontWeight: '500', color: '#4b5563', margin: 0 }}>Drafts</p>
              <p style={{ fontSize: '1.5rem', fontWeight: '700', color: '#111827', margin: 0 }}>
                {posts.filter(p => p.status === 'draft').length}
              </p>
            </div>
          </div>
        </div>
        <div style={{ 
          backgroundColor: 'white', 
          borderRadius: '0.5rem', 
          border: '1px solid #e5e7eb', 
          padding: '1rem' 
        }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ 
              padding: '0.5rem', 
              backgroundColor: '#e9d5ff', 
              borderRadius: '0.5rem' 
            }}>
              <Calendar style={{ width: '1.25rem', height: '1.25rem', color: '#9333ea' }} />
            </div>
            <div style={{ marginLeft: '0.75rem' }}>
              <p style={{ fontSize: '0.875rem', fontWeight: '500', color: '#4b5563', margin: 0 }}>Scheduled</p>
              <p style={{ fontSize: '1.5rem', fontWeight: '700', color: '#111827', margin: 0 }}>
                {posts.filter(p => p.status === 'scheduled').length}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-white rounded-lg border border-gray-200 p-4">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full sm:w-64"
              />
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>

            {/* Status Filter */}
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {statuses.map(status => (
                <option key={status} value={status}>
                  {status === 'all' ? 'All Status' : status.charAt(0).toUpperCase() + status.slice(1)}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center space-x-2">
            {selectedPosts.length > 0 && hasPermission('delete') && (
              <button
                onClick={handleBulkDelete}
                className="bg-red-600 text-white px-3 py-2 rounded-lg hover:bg-red-700 transition-colors flex items-center space-x-1"
              >
                <Trash2 className="w-4 h-4" />
                <span>Delete ({selectedPosts.length})</span>
              </button>
            )}
            <button
              onClick={exportData}
              className="bg-green-600 text-white px-3 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-1"
            >
              <Download className="w-4 h-4" />
              <span>Export</span>
            </button>
          </div>
        </div>
      </div>

      {/* Posts Table */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-4 py-3 text-left">
                  <input
                    type="checkbox"
                    checked={selectedPosts.length === filteredPosts.length && filteredPosts.length > 0}
                    onChange={handleSelectAll}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Post
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Author
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Stats
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredPosts.map((post) => (
                <tr key={post.id} className="hover:bg-gray-50">
                  <td className="px-4 py-4">
                    <input
                      type="checkbox"
                      checked={selectedPosts.includes(post.id)}
                      onChange={() => handleSelectPost(post.id)}
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-start space-x-3">
                      {post.featuredImage && (
                        <img
                          src={post.featuredImage}
                          alt={post.title}
                          className="w-12 h-12 rounded-lg object-cover"
                        />
                      )}
                      <div>
                        <h3 className="font-medium text-gray-900 line-clamp-2">{post.title}</h3>
                        <p className="text-sm text-gray-500 mt-1 line-clamp-2">{post.excerpt}</p>
                        <div className="flex flex-wrap gap-1 mt-2">
                          {post.tags.slice(0, 2).map((tag) => (
                            <span
                              key={tag}
                              className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-gray-100 text-gray-800"
                            >
                              <Tag className="w-3 h-3 mr-1" />
                              {tag}
                            </span>
                          ))}
                          {post.tags.length > 2 && (
                            <span className="text-xs text-gray-500">+{post.tags.length - 2} more</span>
                          )}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center">
                      <User className="w-4 h-4 text-gray-400 mr-2" />
                      <span className="text-sm text-gray-900">{post.author}</span>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {post.category}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(post.status)}`}>
                      {post.status.charAt(0).toUpperCase() + post.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center text-sm text-gray-900">
                      <Calendar className="w-4 h-4 text-gray-400 mr-2" />
                      {new Date(post.publishDate).toLocaleDateString()}
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <div className="text-sm text-gray-900">
                      <div className="flex items-center">
                        <Eye className="w-4 h-4 text-gray-400 mr-1" />
                        {post.views}
                      </div>
                      <div className="flex items-center mt-1">
                        <MessageSquare className="w-4 h-4 text-gray-400 mr-1" />
                        {post.comments}
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <div className="relative">
                      <button
                        onClick={() => setShowActions(showActions === post.id ? null : post.id)}
                        className="p-1 rounded-lg hover:bg-gray-100 transition-colors"
                      >
                        <MoreVertical className="w-4 h-4 text-gray-600" />
                      </button>
                      {showActions === post.id && (
                        <div className="absolute right-0 mt-1 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-10">
                          <div className="py-1">
                            <Link
                              href={`/dashboard/blog/${post.id}`}
                              className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                              <Eye className="w-4 h-4 mr-2" />
                              View
                            </Link>
                            {hasPermission('write') && (
                              <Link
                                href={`/dashboard/blog/${post.id}/edit`}
                                className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                              >
                                <Edit className="w-4 h-4 mr-2" />
                                Edit
                              </Link>
                            )}
                            {hasPermission('delete') && (
                              <button
                                onClick={() => handleDelete(post.id)}
                                className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                              >
                                <Trash2 className="w-4 h-4 mr-2" />
                                Delete
                              </button>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {filteredPosts.length === 0 && (
        <div className="bg-white rounded-lg border border-gray-200 p-8 text-center">
          <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No posts found</h3>
          <p className="text-gray-600 mb-4">
            {searchTerm || selectedCategory !== 'all' || selectedStatus !== 'all'
              ? 'Try adjusting your search or filters'
              : 'Get started by creating your first blog post'
            }
          </p>
          {hasPermission('write') && (
            <Link
              href="/dashboard/blog/new"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center space-x-2"
            >
              <Plus className="w-5 h-5" />
              <span>Create New Post</span>
            </Link>
          )}
        </div>
      )}
    </div>
  );
}
