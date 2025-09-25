import Link from 'next/link';

export default function InstitutionIndustryCell() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Institution Industry Cell</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Committee Information</h2>
            <p className="text-gray-600 mb-4">
              The Institution Industry Cell facilitates collaboration between the college and various industries. 
              This cell works to bridge the gap between academic learning and industry requirements, ensuring students 
              are well-prepared for their professional careers.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Committee Documents</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <h4 className="font-medium text-gray-900">Institution Industry Cell 2024</h4>
                  <p className="text-sm text-gray-600">Committee details and members for the year 2024</p>
                </div>
                <a 
                  href="/assets/pdf/commitee/Institution-Industry-Cell-2024.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                >
                  View PDF
                </a>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Committee Functions</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Industry partnership development</li>
              <li>Internship and placement coordination</li>
              <li>Industry expert lectures and workshops</li>
              <li>Curriculum development with industry input</li>
              <li>Research collaboration with industries</li>
              <li>Skill development programs</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Contact Information</h3>
            <p className="text-gray-600">
              For industry partnerships, internships, or placement opportunities, please contact the Institution Industry Cell members.
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
