'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { 
  Save, 
  Eye, 
  Upload, 
  X, 
  Calendar,
  MapPin,
  Users,
  Clock,
  Image as ImageIcon,
  Star
} from 'lucide-react';

interface EventFormData {
  name: string;
  description: string;
  date: string;
  time: string;
  location: string;
  category: string;
  maxAttendees?: number;
  organizer: string;
  registrationDeadline?: string;
  isFeature: boolean;
  status: 'upcoming' | 'ongoing' | 'cancelled';
  featuredImage?: string;
}

const categories = [
  'Academic',
  'Workshop',
  'Cultural',
  'Seminar',
  'Sports',
  'Conference',
  'Orientation',
  'Research'
];

export default function NewEventPage() {
  const [isPreview, setIsPreview] = useState(false);
  const [featuredImage, setFeaturedImage] = useState<string>('');
  const router = useRouter();

  const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm<EventFormData>({
    defaultValues: {
      status: 'upcoming',
      date: new Date().toISOString().split('T')[0],
      time: '09:00',
      isFeature: false
    }
  });

  const watchedName = watch('name');
  const watchedDescription = watch('description');
  const watchedDate = watch('date');
  const watchedTime = watch('time');
  const watchedLocation = watch('location');
  const watchedCategory = watch('category');
  const watchedMaxAttendees = watch('maxAttendees');
  const watchedOrganizer = watch('organizer');
  const watchedIsFeature = watch('isFeature');

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // In a real app, upload to server and get URL
      const imageUrl = URL.createObjectURL(file);
      setFeaturedImage(imageUrl);
      setValue('featuredImage', imageUrl);
    }
  };

  const onSubmit = async (data: EventFormData) => {
    try {
      // In a real app, send to API
      console.log('Saving event:', data);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Redirect back to events list
      router.push('/dashboard/events');
    } catch (error) {
      console.error('Error saving event:', error);
    }
  };

  const PreviewContent = () => (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        {/* Event Image */}
        {featuredImage && (
          <div className="relative h-64">
            <img 
              src={featuredImage} 
              alt="Event" 
              className="w-full h-full object-cover"
            />
            {watchedIsFeature && (
              <div className="absolute top-4 left-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
                  <Star className="w-4 h-4 mr-1" />
                  Featured Event
                </span>
              </div>
            )}
          </div>
        )}

        {/* Event Content */}
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
              {watchedCategory || 'Category'}
            </span>
            <span className="text-sm text-gray-500">by {watchedOrganizer || 'Organizer'}</span>
          </div>

          <h1 className="text-2xl font-bold text-gray-900 mb-3">
            {watchedName || 'Event Name'}
          </h1>

          <p className="text-gray-600 mb-6">
            {watchedDescription || 'Event description will appear here...'}
          </p>

          {/* Event Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="flex items-center text-gray-600">
              <Calendar className="w-5 h-5 mr-3 text-gray-400" />
              <div>
                <p className="font-medium">Date</p>
                <p className="text-sm">{watchedDate ? new Date(watchedDate).toLocaleDateString() : 'Select date'}</p>
              </div>
            </div>
            <div className="flex items-center text-gray-600">
              <Clock className="w-5 h-5 mr-3 text-gray-400" />
              <div>
                <p className="font-medium">Time</p>
                <p className="text-sm">{watchedTime || 'Select time'}</p>
              </div>
            </div>
            <div className="flex items-center text-gray-600">
              <MapPin className="w-5 h-5 mr-3 text-gray-400" />
              <div>
                <p className="font-medium">Location</p>
                <p className="text-sm">{watchedLocation || 'Event location'}</p>
              </div>
            </div>
            {watchedMaxAttendees && (
              <div className="flex items-center text-gray-600">
                <Users className="w-5 h-5 mr-3 text-gray-400" />
                <div>
                  <p className="font-medium">Capacity</p>
                  <p className="text-sm">{watchedMaxAttendees} attendees</p>
                </div>
              </div>
            )}
          </div>

          {/* Registration Button */}
          <div className="border-t border-gray-200 pt-6">
            <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors">
              Register for Event
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Create New Event</h1>
          <p className="text-gray-600 mt-1">Set up and organize a new college event</p>
        </div>
        <div className="flex items-center space-x-3">
          <button
            type="button"
            onClick={() => setIsPreview(!isPreview)}
            className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <Eye className="w-4 h-4" />
            <span>{isPreview ? 'Edit' : 'Preview'}</span>
          </button>
        </div>
      </div>

      {isPreview ? (
        /* Preview Mode */
        <div className="py-8">
          <PreviewContent />
        </div>
      ) : (
        /* Edit Mode */
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Basic Info Card */}
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Event Information</h2>
                
                {/* Event Name */}
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Event Name *
                  </label>
                  <input
                    {...register('name', { required: 'Event name is required' })}
                    type="text"
                    id="name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter event name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                  )}
                </div>

                {/* Description */}
                <div className="mb-4">
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                    Description *
                  </label>
                  <textarea
                    {...register('description', { required: 'Description is required' })}
                    id="description"
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Describe your event in detail..."
                  />
                  {errors.description && (
                    <p className="mt-1 text-sm text-red-600">{errors.description.message}</p>
                  )}
                </div>

                {/* Date and Time */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
                      Event Date *
                    </label>
                    <input
                      {...register('date', { required: 'Date is required' })}
                      type="date"
                      id="date"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    {errors.date && (
                      <p className="mt-1 text-sm text-red-600">{errors.date.message}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-2">
                      Event Time *
                    </label>
                    <input
                      {...register('time', { required: 'Time is required' })}
                      type="time"
                      id="time"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    {errors.time && (
                      <p className="mt-1 text-sm text-red-600">{errors.time.message}</p>
                    )}
                  </div>
                </div>

                {/* Location */}
                <div className="mb-4">
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                    Location *
                  </label>
                  <input
                    {...register('location', { required: 'Location is required' })}
                    type="text"
                    id="location"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Event venue or location"
                  />
                  {errors.location && (
                    <p className="mt-1 text-sm text-red-600">{errors.location.message}</p>
                  )}
                </div>

                {/* Organizer */}
                <div>
                  <label htmlFor="organizer" className="block text-sm font-medium text-gray-700 mb-2">
                    Organizer *
                  </label>
                  <input
                    {...register('organizer', { required: 'Organizer is required' })}
                    type="text"
                    id="organizer"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Department or organization name"
                  />
                  {errors.organizer && (
                    <p className="mt-1 text-sm text-red-600">{errors.organizer.message}</p>
                  )}
                </div>
              </div>

              {/* Featured Image */}
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Event Image</h2>
                
                {featuredImage ? (
                  <div className="relative">
                    <img 
                      src={featuredImage} 
                      alt="Event" 
                      className="w-full h-48 object-cover rounded-lg"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        setFeaturedImage('');
                        setValue('featuredImage', '');
                      }}
                      className="absolute top-2 right-2 p-1 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <ImageIcon className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-sm text-gray-600 mb-4">Upload an image for your event</p>
                    <label htmlFor="image-upload" className="cursor-pointer">
                      <span className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center space-x-2">
                        <Upload className="w-4 h-4" />
                        <span>Choose Image</span>
                      </span>
                      <input
                        id="image-upload"
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                      />
                    </label>
                  </div>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Event Settings */}
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Event Settings</h2>
                
                {/* Category */}
                <div className="mb-4">
                  <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                    Category *
                  </label>
                  <select
                    {...register('category', { required: 'Category is required' })}
                    id="category"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select a category</option>
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                  {errors.category && (
                    <p className="mt-1 text-sm text-red-600">{errors.category.message}</p>
                  )}
                </div>

                {/* Status */}
                <div className="mb-4">
                  <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-2">
                    Status
                  </label>
                  <select
                    {...register('status')}
                    id="status"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="upcoming">Upcoming</option>
                    <option value="ongoing">Ongoing</option>
                    <option value="cancelled">Cancelled</option>
                  </select>
                </div>

                {/* Max Attendees */}
                <div className="mb-4">
                  <label htmlFor="maxAttendees" className="block text-sm font-medium text-gray-700 mb-2">
                    Maximum Attendees
                  </label>
                  <input
                    {...register('maxAttendees', { 
                      min: { value: 1, message: 'Must be at least 1' },
                      valueAsNumber: true 
                    })}
                    type="number"
                    id="maxAttendees"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Leave empty for unlimited"
                  />
                  {errors.maxAttendees && (
                    <p className="mt-1 text-sm text-red-600">{errors.maxAttendees.message}</p>
                  )}
                </div>

                {/* Registration Deadline */}
                <div className="mb-4">
                  <label htmlFor="registrationDeadline" className="block text-sm font-medium text-gray-700 mb-2">
                    Registration Deadline
                  </label>
                  <input
                    {...register('registrationDeadline')}
                    type="date"
                    id="registrationDeadline"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                {/* Featured Event */}
                <div className="flex items-center">
                  <input
                    {...register('isFeature')}
                    type="checkbox"
                    id="isFeature"
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <label htmlFor="isFeature" className="ml-2 text-sm text-gray-700">
                    Mark as featured event
                  </label>
                </div>
              </div>

              {/* Actions */}
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="space-y-3">
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
                  >
                    <Save className="w-4 h-4" />
                    <span>Create Event</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => router.push('/dashboard/events')}
                    className="w-full bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
