'use client';

import { useState, useEffect } from 'react';
import { 
  Search, 
  Filter, 
  Plus, 
  Edit, 
  Trash2, 
  Eye, 
  User,
  Mail,
  Calendar,
  Shield,
  MoreVertical,
  Download,
  UserCheck,
  UserX,
  Clock
} from 'lucide-react';
import { useAuth } from '../components/AuthProvider';

interface UserData {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'editor' | 'viewer' | 'student' | 'faculty';
  status: 'active' | 'inactive' | 'pending';
  joinDate: string;
  lastLogin?: string;
  avatar?: string;
  department?: string;
  phone?: string;
  loginCount: number;
}

// Dummy users data
const initialUsers: UserData[] = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    email: "admin@example.com",
    role: "admin",
    status: "active",
    joinDate: "2023-01-15",
    lastLogin: "2024-01-28T10:30:00",
    avatar: "/assets/images/team/team-1.webp",
    department: "Administration",
    phone: "+1 234-567-8901",
    loginCount: 245
  },
  {
    id: 2,
    name: "Prof. Michael Chen",
    email: "editor@example.com",
    role: "editor",
    status: "active",
    joinDate: "2023-02-20",
    lastLogin: "2024-01-27T14:15:00",
    avatar: "/assets/images/team/team-2.webp",
    department: "Computer Science",
    phone: "+1 234-567-8902",
    loginCount: 189
  },
  {
    id: 3,
    name: "Jane Smith",
    email: "viewer@example.com",
    role: "viewer",
    status: "active",
    joinDate: "2023-03-10",
    lastLogin: "2024-01-26T09:45:00",
    avatar: "/assets/images/team/team-3.webp",
    department: "Library",
    phone: "+1 234-567-8903",
    loginCount: 67
  },
  {
    id: 4,
    name: "Dr. Emily Rodriguez",
    email: "emily.rodriguez@college.edu",
    role: "faculty",
    status: "active",
    joinDate: "2023-04-05",
    lastLogin: "2024-01-25T16:20:00",
    avatar: "/assets/images/team/team-4.webp",
    department: "Biology",
    phone: "+1 234-567-8904",
    loginCount: 156
  },
  {
    id: 5,
    name: "John Doe",
    email: "john.doe@student.college.edu",
    role: "student",
    status: "active",
    joinDate: "2023-08-15",
    lastLogin: "2024-01-28T08:30:00",
    department: "Computer Science",
    phone: "+1 234-567-8905",
    loginCount: 89
  },
  {
    id: 6,
    name: "Lisa Wang",
    email: "lisa.wang@student.college.edu",
    role: "student",
    status: "pending",
    joinDate: "2024-01-20",
    department: "Mathematics",
    phone: "+1 234-567-8906",
    loginCount: 0
  },
  {
    id: 7,
    name: "Robert Brown",
    email: "robert.brown@college.edu",
    role: "faculty",
    status: "inactive",
    joinDate: "2022-09-01",
    lastLogin: "2023-12-15T11:00:00",
    avatar: "/assets/images/team/team-5.webp",
    department: "Physics",
    phone: "+1 234-567-8907",
    loginCount: 234
  },
  {
    id: 8,
    name: "Maria Garcia",
    email: "maria.garcia@student.college.edu",
    role: "student",
    status: "active",
    joinDate: "2023-08-20",
    lastLogin: "2024-01-27T19:45:00",
    department: "Chemistry",
    phone: "+1 234-567-8908",
    loginCount: 112
  }
];

export default function UsersPage() {
  const [users, setUsers] = useState<UserData[]>(initialUsers);
  const [filteredUsers, setFilteredUsers] = useState<UserData[]>(initialUsers);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRole, setSelectedRole] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [selectedUsers, setSelectedUsers] = useState<number[]>([]);
  const [showActions, setShowActions] = useState<number | null>(null);
  const { hasPermission } = useAuth();

  const roles = ['all', 'admin', 'editor', 'viewer', 'faculty', 'student'];
  const statuses = ['all', 'active', 'inactive', 'pending'];

  // Filter users based on search and filters
  useEffect(() => {
    let filtered = users;

    if (searchTerm) {
      filtered = filtered.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (user.department && user.department.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    if (selectedRole !== 'all') {
      filtered = filtered.filter(user => user.role === selectedRole);
    }

    if (selectedStatus !== 'all') {
      filtered = filtered.filter(user => user.status === selectedStatus);
    }

    setFilteredUsers(filtered);
  }, [users, searchTerm, selectedRole, selectedStatus]);

  const handleDelete = (id: number) => {
    if (confirm('Are you sure you want to delete this user?')) {
      setUsers(users.filter(user => user.id !== id));
      setSelectedUsers(selectedUsers.filter(userId => userId !== id));
    }
  };

  const handleBulkDelete = () => {
    if (confirm(`Are you sure you want to delete ${selectedUsers.length} selected users?`)) {
      setUsers(users.filter(user => !selectedUsers.includes(user.id)));
      setSelectedUsers([]);
    }
  };

  const handleStatusChange = (id: number, newStatus: 'active' | 'inactive' | 'pending') => {
    setUsers(users.map(user => 
      user.id === id ? { ...user, status: newStatus } : user
    ));
  };

  const handleRoleChange = (id: number, newRole: 'admin' | 'editor' | 'viewer' | 'student' | 'faculty') => {
    setUsers(users.map(user => 
      user.id === id ? { ...user, role: newRole } : user
    ));
  };

  const handleSelectUser = (id: number) => {
    setSelectedUsers(prev =>
      prev.includes(id)
        ? prev.filter(userId => userId !== id)
        : [...prev, id]
    );
  };

  const handleSelectAll = () => {
    if (selectedUsers.length === filteredUsers.length) {
      setSelectedUsers([]);
    } else {
      setSelectedUsers(filteredUsers.map(user => user.id));
    }
  };

  const exportData = () => {
    const csvContent = [
      ['Name', 'Email', 'Role', 'Status', 'Department', 'Join Date', 'Last Login', 'Login Count'],
      ...filteredUsers.map(user => [
        user.name,
        user.email,
        user.role,
        user.status,
        user.department || '',
        user.joinDate,
        user.lastLogin ? new Date(user.lastLogin).toLocaleString() : 'Never',
        user.loginCount
      ])
    ].map(row => row.join(',')).join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'users.csv';
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'admin':
        return 'bg-red-100 text-red-800';
      case 'editor':
        return 'bg-blue-100 text-blue-800';
      case 'viewer':
        return 'bg-gray-100 text-gray-800';
      case 'faculty':
        return 'bg-purple-100 text-purple-800';
      case 'student':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'inactive':
        return 'bg-red-100 text-red-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active':
        return <UserCheck className="w-4 h-4" />;
      case 'inactive':
        return <UserX className="w-4 h-4" />;
      case 'pending':
        return <Clock className="w-4 h-4" />;
      default:
        return <User className="w-4 h-4" />;
    }
  };

  const activeUsers = users.filter(u => u.status === 'active').length;
  const inactiveUsers = users.filter(u => u.status === 'inactive').length;
  const pendingUsers = users.filter(u => u.status === 'pending').length;
  const totalLogins = users.reduce((sum, u) => sum + u.loginCount, 0);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h1 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#111827', margin: 0 }}>User Management</h1>
          <p style={{ color: '#4b5563', marginTop: '0.25rem', fontSize: '0.875rem' }}>Manage user accounts and permissions</p>
        </div>
        {hasPermission('manage_users') && (
          <button style={{
            backgroundColor: '#2563eb',
            color: 'white',
            padding: '0.5rem 1rem',
            borderRadius: '0.5rem',
            border: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontSize: '0.875rem',
            fontWeight: '500',
            cursor: 'pointer',
            transition: 'background-color 0.2s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1d4ed8'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#2563eb'}
          >
            <Plus style={{ width: '1.25rem', height: '1.25rem' }} />
            <span>Add User</span>
          </button>
        )}
      </div>

      {/* Stats Cards */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
        gap: '1rem' 
      }}>
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center">
            <div className="p-2 bg-green-100 rounded-lg">
              <UserCheck className="w-5 h-5 text-green-600" />
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-600">Active Users</p>
              <p className="text-2xl font-bold text-gray-900">{activeUsers}</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center">
            <div className="p-2 bg-yellow-100 rounded-lg">
              <Clock className="w-5 h-5 text-yellow-600" />
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-600">Pending</p>
              <p className="text-2xl font-bold text-gray-900">{pendingUsers}</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center">
            <div className="p-2 bg-red-100 rounded-lg">
              <UserX className="w-5 h-5 text-red-600" />
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-600">Inactive</p>
              <p className="text-2xl font-bold text-gray-900">{inactiveUsers}</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Eye className="w-5 h-5 text-blue-600" />
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-600">Total Logins</p>
              <p className="text-2xl font-bold text-gray-900">{totalLogins}</p>
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
                placeholder="Search users..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full sm:w-64"
              />
            </div>

            {/* Role Filter */}
            <select
              value={selectedRole}
              onChange={(e) => setSelectedRole(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {roles.map(role => (
                <option key={role} value={role}>
                  {role === 'all' ? 'All Roles' : role.charAt(0).toUpperCase() + role.slice(1)}
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
            {selectedUsers.length > 0 && hasPermission('manage_users') && (
              <button
                onClick={handleBulkDelete}
                className="bg-red-600 text-white px-3 py-2 rounded-lg hover:bg-red-700 transition-colors flex items-center space-x-1"
              >
                <Trash2 className="w-4 h-4" />
                <span>Delete ({selectedUsers.length})</span>
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

      {/* Users Table */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-4 py-3 text-left">
                  <input
                    type="checkbox"
                    checked={selectedUsers.length === filteredUsers.length && filteredUsers.length > 0}
                    onChange={handleSelectAll}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  User
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Role
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Department
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Last Login
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Activity
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredUsers.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="px-4 py-4">
                    <input
                      type="checkbox"
                      checked={selectedUsers.includes(user.id)}
                      onChange={() => handleSelectUser(user.id)}
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center space-x-3">
                      {user.avatar ? (
                        <img
                          src={user.avatar}
                          alt={user.name}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                      ) : (
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                          <User className="w-5 h-5 text-gray-600" />
                        </div>
                      )}
                      <div>
                        <h3 className="font-medium text-gray-900">{user.name}</h3>
                        <div className="flex items-center text-sm text-gray-500">
                          <Mail className="w-4 h-4 mr-1" />
                          {user.email}
                        </div>
                        {user.phone && (
                          <p className="text-sm text-gray-500">{user.phone}</p>
                        )}
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getRoleColor(user.role)}`}>
                      <Shield className="w-3 h-3 mr-1" />
                      {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(user.status)}`}>
                      {getStatusIcon(user.status)}
                      <span className="ml-1">{user.status.charAt(0).toUpperCase() + user.status.slice(1)}</span>
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <span className="text-sm text-gray-900">{user.department || '-'}</span>
                  </td>
                  <td className="px-4 py-4">
                    <div className="text-sm text-gray-900">
                      {user.lastLogin ? (
                        <>
                          <div>{new Date(user.lastLogin).toLocaleDateString()}</div>
                          <div className="text-xs text-gray-500">
                            {new Date(user.lastLogin).toLocaleTimeString()}
                          </div>
                        </>
                      ) : (
                        <span className="text-gray-500">Never</span>
                      )}
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <div className="text-sm text-gray-900">
                      <div className="flex items-center">
                        <Eye className="w-4 h-4 text-gray-400 mr-1" />
                        {user.loginCount} logins
                      </div>
                      <div className="text-xs text-gray-500">
                        Joined {new Date(user.joinDate).toLocaleDateString()}
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <div className="relative">
                      <button
                        onClick={() => setShowActions(showActions === user.id ? null : user.id)}
                        className="p-1 rounded-lg hover:bg-gray-100 transition-colors"
                      >
                        <MoreVertical className="w-4 h-4 text-gray-600" />
                      </button>
                      {showActions === user.id && (
                        <div className="absolute right-0 mt-1 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-10">
                          <div className="py-1">
                            <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                              <Eye className="w-4 h-4 mr-2" />
                              View Profile
                            </button>
                            {hasPermission('manage_users') && (
                              <>
                                <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                  <Edit className="w-4 h-4 mr-2" />
                                  Edit User
                                </button>
                                <div className="border-t border-gray-100 my-1"></div>
                                <div className="px-4 py-2">
                                  <p className="text-xs text-gray-500 mb-2">Change Status:</p>
                                  <div className="space-y-1">
                                    <button
                                      onClick={() => handleStatusChange(user.id, 'active')}
                                      className="flex items-center w-full text-left text-xs text-green-600 hover:bg-green-50 px-2 py-1 rounded"
                                    >
                                      <UserCheck className="w-3 h-3 mr-1" />
                                      Active
                                    </button>
                                    <button
                                      onClick={() => handleStatusChange(user.id, 'inactive')}
                                      className="flex items-center w-full text-left text-xs text-red-600 hover:bg-red-50 px-2 py-1 rounded"
                                    >
                                      <UserX className="w-3 h-3 mr-1" />
                                      Inactive
                                    </button>
                                  </div>
                                </div>
                                <div className="border-t border-gray-100 my-1"></div>
                                <button
                                  onClick={() => handleDelete(user.id)}
                                  className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                                >
                                  <Trash2 className="w-4 h-4 mr-2" />
                                  Delete User
                                </button>
                              </>
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

      {filteredUsers.length === 0 && (
        <div className="bg-white rounded-lg border border-gray-200 p-8 text-center">
          <User className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No users found</h3>
          <p className="text-gray-600 mb-4">
            {searchTerm || selectedRole !== 'all' || selectedStatus !== 'all'
              ? 'Try adjusting your search or filters'
              : 'Get started by adding your first user'
            }
          </p>
          {hasPermission('manage_users') && (
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center space-x-2">
              <Plus className="w-5 h-5" />
              <span>Add User</span>
            </button>
          )}
        </div>
      )}
    </div>
  );
}
