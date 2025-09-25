import Link from 'next/link';

export default function StudentGrievanceForm() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Student Grievance Form</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Grievance Submission</h2>
            <p className="text-gray-600 mb-4">
              Students can submit their grievances using this form. All submissions will be reviewed by the Grievance Redressal Cell 
              and appropriate action will be taken in a timely manner.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Online Grievance Form</h3>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-600 mb-4">
                Please fill out the form below with your details and describe your grievance clearly. 
                All information provided will be kept confidential.
              </p>
              
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-1">
                    Department/Course
                  </label>
                  <input
                    type="text"
                    id="department"
                    name="department"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="grievance" className="block text-sm font-medium text-gray-700 mb-1">
                    Grievance Description *
                  </label>
                  <textarea
                    id="grievance"
                    name="grievance"
                    rows={5}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Please describe your grievance in detail..."
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Submit Grievance
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Alternative Contact Methods</h3>
            <p className="text-gray-600">
              You can also contact the Grievance Redressal Cell directly through the college administration office or 
              visit the committee members during their office hours.
            </p>
          </div>

          <div className="mt-8">
            <Link 
              href="/others/committees" 
              className="text-blue-600 hover:text-blue-800 transition-colors"
            >
              ← Back to Committees
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
