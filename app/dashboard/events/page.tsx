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
  MapPin,
  Clock,
  Users,
  MoreVertical,
  Download,
  Star
} from 'lucide-react';
import { useAuth } from '../components/AuthProvider';
import { format, isAfter, isBefore, addDays } from 'date-fns';

interface Event {
  id: number;
  name: string;
  description: string;
  date: string;
  time: string;
  location: string;
  status: 'upcoming' | 'ongoing' | 'completed' | 'cancelled';
  attendees: number;
  maxAttendees?: number;
  category: string;
  image?: string;
  organizer: string;
  registrationDeadline?: string;
  isFeature?: boolean;
}

// Dummy events data
const initialEvents: Event[] = [
  {
    id: 1,
    name: "Annual Science Fair 2024",
    description: "Showcase of innovative student projects from all departments",
    date: "2024-02-15",
    time: "09:00",
    location: "Main Auditorium",
    status: "upcoming",
    attendees: 245,
    maxAttendees: 500,
    category: "Academic",
    image: "/assets/images/events/science-fair.webp",
    organizer: "Science Department",
    registrationDeadline: "2024-02-10",
    isFeature: true
  },
  {
    id: 2,
    name: "Career Guidance Workshop",
    description: "Professional development and career planning session for final year students",
    date: "2024-02-08",
    time: "14:00",
    location: "Conference Hall",
    status: "upcoming",
    attendees: 89,
    maxAttendees: 150,
    category: "Workshop",
    image: "/assets/images/events/career-workshop.webp",
    organizer: "Placement Cell",
    registrationDeadline: "2024-02-05"
  },
  {
    id: 3,
    name: "Cultural Fest - Artistry 2024",
    description: "Annual cultural celebration featuring music, dance, and art competitions",
    date: "2024-01-20",
    time: "10:00",
    location: "College Campus",
    status: "completed",
    attendees: 450,
    maxAttendees: 500,
    category: "Cultural",
    image: "/assets/images/events/cultural-fest.webp",
    organizer: "Student Council",
    isFeature: true
  },
  {
    id: 4,
    name: "Guest Lecture: AI in Healthcare",
    description: "Renowned AI researcher Dr. Smith discusses applications of AI in medical field",
    date: "2024-01-25",
    time: "11:00",
    location: "Lecture Hall A",
    status: "completed",
    attendees: 120,
    maxAttendees: 150,
    category: "Seminar",
    image: "/assets/images/events/ai-lecture.webp",
    organizer: "Computer Science Dept"
  },
  {
    id: 5,
    name: "Sports Meet 2024",
    description: "Inter-department sports competition including various indoor and outdoor games",
    date: "2024-03-10",
    time: "08:00",
    location: "Sports Complex",
    status: "upcoming",
    attendees: 180,
    maxAttendees: 300,
    category: "Sports",
    image: "/assets/images/events/sports-meet.webp",
    organizer: "Sports Committee",
    registrationDeadline: "2024-03-05"
  }
];

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>(initialEvents);
  const [filteredEvents, setFilteredEvents] = useState<Event[]>(initialEvents);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [selectedEvents, setSelectedEvents] = useState<number[]>([]);
  const [showActions, setShowActions] = useState<number | null>(null);
  const { hasPermission } = useAuth();

  const categories = ['all', 'Academic', 'Workshop', 'Cultural', 'Seminar', 'Sports', 'Conference'];
  const statuses = ['all', 'upcoming', 'ongoing', 'completed', 'cancelled'];

  // Filter events based on search and filters
  useEffect(() => {
    let filtered = events;

    if (searchTerm) {
      filtered = filtered.filter(event =>
        event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.organizer.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(event => event.category === selectedCategory);
    }

    if (selectedStatus !== 'all') {
      filtered = filtered.filter(event => event.status === selectedStatus);
    }

    setFilteredEvents(filtered);
  }, [events, searchTerm, selectedCategory, selectedStatus]);

  const handleDelete = (id: number) => {
    if (confirm('Are you sure you want to delete this event?')) {
      setEvents(events.filter(event => event.id !== id));
      setSelectedEvents(selectedEvents.filter(eventId => eventId !== id));
    }
  };

  const handleBulkDelete = () => {
    if (confirm(`Are you sure you want to delete ${selectedEvents.length} selected events?`)) {
      setEvents(events.filter(event => !selectedEvents.includes(event.id)));
      setSelectedEvents([]);
    }
  };

  const handleSelectEvent = (id: number) => {
    setSelectedEvents(prev =>
      prev.includes(id)
        ? prev.filter(eventId => eventId !== id)
        : [...prev, id]
    );
  };

  const handleSelectAll = () => {
    if (selectedEvents.length === filteredEvents.length) {
      setSelectedEvents([]);
    } else {
      setSelectedEvents(filteredEvents.map(event => event.id));
    }
  };

  const exportData = () => {
    const csvContent = [
      ['Name', 'Date', 'Time', 'Location', 'Status', 'Attendees', 'Category', 'Organizer'],
      ...filteredEvents.map(event => [
        event.name,
        event.date,
        event.time,
        event.location,
        event.status,
        event.attendees,
        event.category,
        event.organizer
      ])
    ].map(row => row.join(',')).join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'events.csv';
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'upcoming':
        return 'bg-blue-100 text-blue-800';
      case 'ongoing':
        return 'bg-green-100 text-green-800';
      case 'completed':
        return 'bg-gray-100 text-gray-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'upcoming':
        return <Clock className="w-4 h-4" />;
      case 'ongoing':
        return <Users className="w-4 h-4" />;
      case 'completed':
        return <Calendar className="w-4 h-4" />;
      case 'cancelled':
        return <Trash2 className="w-4 h-4" />;
      default:
        return <Calendar className="w-4 h-4" />;
    }
  };

  const upcomingEvents = events.filter(e => e.status === 'upcoming').length;
  const ongoingEvents = events.filter(e => e.status === 'ongoing').length;
  const completedEvents = events.filter(e => e.status === 'completed').length;
  const totalAttendees = events.reduce((sum, e) => sum + e.attendees, 0);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h1 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#111827', margin: 0 }}>Events Management</h1>
          <p style={{ color: '#4b5563', marginTop: '0.25rem', fontSize: '0.875rem' }}>Organize and manage college events and activities</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <Link
            href="/dashboard/events/calendar"
            style={{
              backgroundColor: '#4b5563',
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
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#374151'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#4b5563'}
          >
            <Calendar style={{ width: '1.25rem', height: '1.25rem' }} />
            <span>Calendar View</span>
          </Link>
          {hasPermission('write') && (
            <Link
              href="/dashboard/events/new"
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
              <span>New Event</span>
            </Link>
          )}
        </div>
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
              <Clock style={{ width: '1.25rem', height: '1.25rem', color: '#2563eb' }} />
            </div>
            <div style={{ marginLeft: '0.75rem' }}>
              <p style={{ fontSize: '0.875rem', fontWeight: '500', color: '#4b5563', margin: 0 }}>Upcoming</p>
              <p style={{ fontSize: '1.5rem', fontWeight: '700', color: '#111827', margin: 0 }}>{upcomingEvents}</p>
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
              <Users style={{ width: '1.25rem', height: '1.25rem', color: '#16a34a' }} />
            </div>
            <div style={{ marginLeft: '0.75rem' }}>
              <p style={{ fontSize: '0.875rem', fontWeight: '500', color: '#4b5563', margin: 0 }}>Ongoing</p>
              <p style={{ fontSize: '1.5rem', fontWeight: '700', color: '#111827', margin: 0 }}>{ongoingEvents}</p>
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
              backgroundColor: '#f3f4f6', 
              borderRadius: '0.5rem' 
            }}>
              <Calendar style={{ width: '1.25rem', height: '1.25rem', color: '#4b5563' }} />
            </div>
            <div style={{ marginLeft: '0.75rem' }}>
              <p style={{ fontSize: '0.875rem', fontWeight: '500', color: '#4b5563', margin: 0 }}>Completed</p>
              <p style={{ fontSize: '1.5rem', fontWeight: '700', color: '#111827', margin: 0 }}>{completedEvents}</p>
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
              <Users style={{ width: '1.25rem', height: '1.25rem', color: '#9333ea' }} />
            </div>
            <div style={{ marginLeft: '0.75rem' }}>
              <p style={{ fontSize: '0.875rem', fontWeight: '500', color: '#4b5563', margin: 0 }}>Total Attendees</p>
              <p style={{ fontSize: '1.5rem', fontWeight: '700', color: '#111827', margin: 0 }}>{totalAttendees}</p>
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
                placeholder="Search events..."
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
            {selectedEvents.length > 0 && hasPermission('delete') && (
              <button
                onClick={handleBulkDelete}
                className="bg-red-600 text-white px-3 py-2 rounded-lg hover:bg-red-700 transition-colors flex items-center space-x-1"
              >
                <Trash2 className="w-4 h-4" />
                <span>Delete ({selectedEvents.length})</span>
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

      {/* Events Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredEvents.map((event) => (
          <div key={event.id} className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
            {/* Event Image */}
            {event.image && (
              <div className="relative h-48">
                <img 
                  src={event.image} 
                  alt={event.name}
                  className="w-full h-full object-cover"
                />
                {event.isFeature && (
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                      <Star className="w-3 h-3 mr-1" />
                      Featured
                    </span>
                  </div>
                )}
                <div className="absolute top-3 right-3">
                  <input
                    type="checkbox"
                    checked={selectedEvents.includes(event.id)}
                    onChange={() => handleSelectEvent(event.id)}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 bg-white"
                  />
                </div>
              </div>
            )}

            {/* Event Content */}
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  {event.category}
                </span>
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(event.status)}`}>
                  {getStatusIcon(event.status)}
                  <span className="ml-1">{event.status.charAt(0).toUpperCase() + event.status.slice(1)}</span>
                </span>
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">{event.name}</h3>
              <p className="text-sm text-gray-600 mb-4 line-clamp-2">{event.description}</p>

              {/* Event Details */}
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-gray-600">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{format(new Date(event.date), 'MMM dd, yyyy')} at {event.time}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Users className="w-4 h-4 mr-2" />
                  <span>{event.attendees} attendees</span>
                  {event.maxAttendees && (
                    <span className="text-gray-400 ml-1">/ {event.maxAttendees}</span>
                  )}
                </div>
              </div>

              {/* Registration Progress */}
              {event.maxAttendees && (
                <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>Registration</span>
                    <span>{Math.round((event.attendees / event.maxAttendees) * 100)}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full" 
                      style={{ width: `${(event.attendees / event.maxAttendees) * 100}%` }}
                    ></div>
                  </div>
                </div>
              )}

              {/* Organizer */}
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">by {event.organizer}</span>
                <div className="relative">
                  <button
                    onClick={() => setShowActions(showActions === event.id ? null : event.id)}
                    className="p-1 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <MoreVertical className="w-4 h-4 text-gray-600" />
                  </button>
                  {showActions === event.id && (
                    <div className="absolute right-0 mt-1 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-10">
                      <div className="py-1">
                        <Link
                          href={`/dashboard/events/${event.id}`}
                          className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          <Eye className="w-4 h-4 mr-2" />
                          View Details
                        </Link>
                        {hasPermission('write') && (
                          <Link
                            href={`/dashboard/events/${event.id}/edit`}
                            className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            <Edit className="w-4 h-4 mr-2" />
                            Edit Event
                          </Link>
                        )}
                        {hasPermission('delete') && (
                          <button
                            onClick={() => handleDelete(event.id)}
                            className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                          >
                            <Trash2 className="w-4 h-4 mr-2" />
                            Delete Event
                          </button>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredEvents.length === 0 && (
        <div className="bg-white rounded-lg border border-gray-200 p-8 text-center">
          <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No events found</h3>
          <p className="text-gray-600 mb-4">
            {searchTerm || selectedCategory !== 'all' || selectedStatus !== 'all'
              ? 'Try adjusting your search or filters'
              : 'Get started by creating your first event'
            }
          </p>
          {hasPermission('write') && (
            <Link
              href="/dashboard/events/new"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center space-x-2"
            >
              <Plus className="w-5 h-5" />
              <span>Create New Event</span>
            </Link>
          )}
        </div>
      )}
    </div>
  );
}
