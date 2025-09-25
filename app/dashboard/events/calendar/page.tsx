'use client';

import { useState } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Calendar as CalendarIcon,
  Clock,
  MapPin,
  Users,
  Plus,
  Filter,
  List
} from 'lucide-react';
import Link from 'next/link';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay, addMonths, subMonths } from 'date-fns';
import { useAuth } from '../../components/AuthProvider';

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
  organizer: string;
  color: string;
}

// Dummy events data with colors
const events: Event[] = [
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
    organizer: "Science Department",
    color: "#3B82F6"
  },
  {
    id: 2,
    name: "Career Guidance Workshop",
    description: "Professional development and career planning session",
    date: "2024-02-08",
    time: "14:00",
    location: "Conference Hall",
    status: "upcoming",
    attendees: 89,
    maxAttendees: 150,
    category: "Workshop",
    organizer: "Placement Cell",
    color: "#10B981"
  },
  {
    id: 3,
    name: "Cultural Fest - Artistry 2024",
    description: "Annual cultural celebration",
    date: "2024-02-20",
    time: "10:00",
    location: "College Campus",
    status: "upcoming",
    attendees: 450,
    maxAttendees: 500,
    category: "Cultural",
    organizer: "Student Council",
    color: "#F59E0B"
  },
  {
    id: 4,
    name: "Guest Lecture: AI in Healthcare",
    description: "AI researcher discusses medical applications",
    date: "2024-02-25",
    time: "11:00",
    location: "Lecture Hall A",
    status: "upcoming",
    attendees: 120,
    maxAttendees: 150,
    category: "Seminar",
    organizer: "Computer Science Dept",
    color: "#8B5CF6"
  },
  {
    id: 5,
    name: "Sports Meet 2024",
    description: "Inter-department sports competition",
    date: "2024-02-28",
    time: "08:00",
    location: "Sports Complex",
    status: "upcoming",
    attendees: 180,
    maxAttendees: 300,
    category: "Sports",
    organizer: "Sports Committee",
    color: "#EF4444"
  },
  {
    id: 6,
    name: "Library Orientation",
    description: "New student library orientation session",
    date: "2024-02-10",
    time: "15:00",
    location: "Library",
    status: "upcoming",
    attendees: 45,
    maxAttendees: 60,
    category: "Orientation",
    organizer: "Library Staff",
    color: "#06B6D4"
  },
  {
    id: 7,
    name: "Research Symposium",
    description: "Faculty and student research presentations",
    date: "2024-02-22",
    time: "09:30",
    location: "Research Center",
    status: "upcoming",
    attendees: 75,
    maxAttendees: 100,
    category: "Research",
    organizer: "Research Committee",
    color: "#84CC16"
  }
];

const categories = [
  { name: 'All', color: '#6B7280' },
  { name: 'Academic', color: '#3B82F6' },
  { name: 'Workshop', color: '#10B981' },
  { name: 'Cultural', color: '#F59E0B' },
  { name: 'Seminar', color: '#8B5CF6' },
  { name: 'Sports', color: '#EF4444' },
  { name: 'Orientation', color: '#06B6D4' },
  { name: 'Research', color: '#84CC16' }
];

export default function EventCalendarPage() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState<'month' | 'week'>('month');
  const { hasPermission } = useAuth();

  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const calendarDays = eachDayOfInterval({ start: monthStart, end: monthEnd });

  // Add padding days for complete weeks
  const startDay = monthStart.getDay();
  const endDay = monthEnd.getDay();
  
  const paddingStart = Array.from({ length: startDay }, (_, i) => {
    const date = new Date(monthStart);
    date.setDate(date.getDate() - (startDay - i));
    return date;
  });

  const paddingEnd = Array.from({ length: 6 - endDay }, (_, i) => {
    const date = new Date(monthEnd);
    date.setDate(date.getDate() + (i + 1));
    return date;
  });

  const allDays = [...paddingStart, ...calendarDays, ...paddingEnd];

  const filteredEvents = selectedCategory === 'All' 
    ? events 
    : events.filter(event => event.category === selectedCategory);

  const getEventsForDate = (date: Date) => {
    return filteredEvents.filter(event => 
      isSameDay(new Date(event.date), date)
    );
  };

  const selectedDateEvents = selectedDate ? getEventsForDate(selectedDate) : [];

  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentDate(prev => 
      direction === 'prev' ? subMonths(prev, 1) : addMonths(prev, 1)
    );
  };

  const goToToday = () => {
    setCurrentDate(new Date());
    setSelectedDate(new Date());
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Event Calendar</h1>
          <p className="text-gray-600 mt-1">View and manage events in calendar format</p>
        </div>
        <div className="flex items-center space-x-3">
          <Link
            href="/dashboard/events"
            className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors flex items-center space-x-2"
          >
            <List className="w-5 h-5" />
            <span>List View</span>
          </Link>
          {hasPermission('write') && (
            <Link
              href="/dashboard/events/new"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
            >
              <Plus className="w-5 h-5" />
              <span>New Event</span>
            </Link>
          )}
        </div>
      </div>

      {/* Calendar Controls */}
      <div className="bg-white rounded-lg border border-gray-200 p-4">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
          {/* Date Navigation */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <button
                onClick={() => navigateMonth('prev')}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <h2 className="text-xl font-semibold text-gray-900 min-w-[200px] text-center">
                {format(currentDate, 'MMMM yyyy')}
              </h2>
              <button
                onClick={() => navigateMonth('next')}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
            <button
              onClick={goToToday}
              className="px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
            >
              Today
            </button>
          </div>

          {/* Filters and Legend */}
          <div className="flex items-center space-x-4">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {categories.map(category => (
                <option key={category.name} value={category.name}>
                  {category.name} Events
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Category Legend */}
        <div className="mt-4 flex flex-wrap gap-3">
          {categories.slice(1).map(category => (
            <div key={category.name} className="flex items-center space-x-2">
              <div 
                className="w-3 h-3 rounded-full" 
                style={{ backgroundColor: category.color }}
              />
              <span className="text-sm text-gray-600">{category.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
        {/* Calendar */}
        <div className="xl:col-span-3">
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            {/* Calendar Header */}
            <div className="grid grid-cols-7 bg-gray-50">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                <div key={day} className="p-3 text-center text-sm font-medium text-gray-900 border-r border-gray-200 last:border-r-0">
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar Body */}
            <div className="grid grid-cols-7">
              {allDays.map((day, index) => {
                const dayEvents = getEventsForDate(day);
                const isCurrentMonth = isSameMonth(day, currentDate);
                const isSelected = selectedDate && isSameDay(day, selectedDate);
                const isToday = isSameDay(day, new Date());

                return (
                  <div
                    key={index}
                    className={`min-h-[120px] border-r border-b border-gray-200 last:border-r-0 p-2 cursor-pointer hover:bg-gray-50 ${
                      !isCurrentMonth ? 'bg-gray-50 text-gray-400' : ''
                    } ${isSelected ? 'bg-blue-50' : ''}`}
                    onClick={() => setSelectedDate(day)}
                  >
                    <div className={`text-sm font-medium mb-1 ${
                      isToday ? 'bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center' : ''
                    }`}>
                      {format(day, 'd')}
                    </div>
                    <div className="space-y-1">
                      {dayEvents.slice(0, 3).map(event => (
                        <div
                          key={event.id}
                          className="text-xs p-1 rounded truncate"
                          style={{ 
                            backgroundColor: event.color + '20', 
                            borderLeft: `3px solid ${event.color}`,
                            color: event.color
                          }}
                          title={event.name}
                        >
                          {event.name}
                        </div>
                      ))}
                      {dayEvents.length > 3 && (
                        <div className="text-xs text-gray-500 pl-1">
                          +{dayEvents.length - 3} more
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Event Details Sidebar */}
        <div className="space-y-6">
          {/* Selected Date Info */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              {selectedDate ? format(selectedDate, 'EEEE, MMMM d, yyyy') : 'Select a date'}
            </h3>
            
            {selectedDate && selectedDateEvents.length > 0 ? (
              <div className="space-y-4">
                {selectedDateEvents.map(event => (
                  <div key={event.id} className="border-l-4 pl-4 pb-4 border-b border-gray-100 last:border-b-0" style={{ borderLeftColor: event.color }}>
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-medium text-gray-900 text-sm">{event.name}</h4>
                      <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full">
                        {event.category}
                      </span>
                    </div>
                    <div className="space-y-1 text-xs text-gray-600">
                      <div className="flex items-center">
                        <Clock className="w-3 h-3 mr-2" />
                        {event.time}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-3 h-3 mr-2" />
                        {event.location}
                      </div>
                      <div className="flex items-center">
                        <Users className="w-3 h-3 mr-2" />
                        {event.attendees} attendees
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 mt-2 line-clamp-2">{event.description}</p>
                  </div>
                ))}
              </div>
            ) : selectedDate ? (
              <div className="text-center py-8">
                <CalendarIcon className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                <p className="text-sm text-gray-500">No events scheduled for this date</p>
                {hasPermission('write') && (
                  <Link
                    href="/dashboard/events/new"
                    className="mt-3 inline-flex items-center space-x-1 text-sm text-blue-600 hover:text-blue-800"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Add Event</span>
                  </Link>
                )}
              </div>
            ) : (
              <div className="text-center py-8">
                <CalendarIcon className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                <p className="text-sm text-gray-500">Click on a date to view events</p>
              </div>
            )}
          </div>

          {/* Upcoming Events */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Events</h3>
            <div className="space-y-3">
              {filteredEvents
                .filter(event => new Date(event.date) >= new Date())
                .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
                .slice(0, 5)
                .map(event => (
                <div key={event.id} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50">
                  <div 
                    className="w-3 h-3 rounded-full flex-shrink-0" 
                    style={{ backgroundColor: event.color }}
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">{event.name}</p>
                    <p className="text-xs text-gray-500">
                      {format(new Date(event.date), 'MMM d')} at {event.time}
                    </p>
                  </div>
                </div>
              ))}
              {filteredEvents.filter(event => new Date(event.date) >= new Date()).length === 0 && (
                <p className="text-sm text-gray-500 text-center py-4">No upcoming events</p>
              )}
            </div>
          </div>

          {/* Quick Stats */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">This Month</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Total Events</span>
                <span className="font-semibold text-gray-900">
                  {filteredEvents.filter(event => 
                    isSameMonth(new Date(event.date), currentDate)
                  ).length}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Total Attendees</span>
                <span className="font-semibold text-gray-900">
                  {filteredEvents
                    .filter(event => isSameMonth(new Date(event.date), currentDate))
                    .reduce((sum, event) => sum + event.attendees, 0)}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Categories</span>
                <span className="font-semibold text-gray-900">
                  {new Set(filteredEvents
                    .filter(event => isSameMonth(new Date(event.date), currentDate))
                    .map(event => event.category)
                  ).size}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
