import Link from 'next/link';

export default function Committees() {
  const committees = [
    {
      title: "Anti-Ragging Committee",
      description: "Prevents and addresses instances of ragging within the college premises.",
      link: "/others/committees/anti-ragging-committee",
      pdf: "/assets/pdf/commitee/Anti_Ragging-committee-2024.pdf"
    },
    {
      title: "Grievance Redressal Cell",
      description: "Addresses and resolves various grievances from students, faculty, and staff members.",
      link: "/others/committees/grievance-redressal-cell",
      pdf: "/assets/pdf/commitee/Grievance-Redressal-Cell-2024.pdf"
    },
    {
      title: "Student Grievance Form",
      description: "Online form for students to submit their grievances and complaints.",
      link: "/others/committees/student-grievance-form",
      pdf: null
    },
    {
      title: "Internal Committee",
      description: "Handles internal administrative matters and policy implementations.",
      link: "/others/committees/internal-committee",
      pdf: "/assets/pdf/commitee/Internal-committee-2024.pdf"
    },
    {
      title: "Institution Industry Cell",
      description: "Facilitates collaboration between the college and various industries.",
      link: "/others/committees/institution-industry-cell",
      pdf: "/assets/pdf/commitee/Institution-Industry-Cell-2024.pdf"
    },
    {
      title: "SC-ST Committee",
      description: "Ensures welfare and equal opportunities for SC/ST students.",
      link: "/others/committees/sc-st-committee",
      pdf: "/assets/pdf/commitee/SC-ST-Committee-2024.pdf"
    },
    {
      title: "Internal Quality Assurance Cell (IQAC)",
      description: "Ensures and maintains quality standards in academic and administrative activities.",
      link: "/others/committees/internal-quality-assurance-cell",
      pdf: "/assets/pdf/commitee/Internal-Quality-Assurance-Cell-2024.pdf"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">College Committees</h1>
        
        <div className="mb-8">
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
            Our college has various committees that work towards ensuring quality education, student welfare, 
            and smooth administrative functioning. Each committee plays a vital role in maintaining excellence 
            and addressing the needs of our academic community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {committees.map((committee, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{committee.title}</h3>
              <p className="text-gray-600 mb-4">{committee.description}</p>
              
              <div className="space-y-2">
                <Link 
                  href={committee.link}
                  className="block w-full bg-blue-600 text-white text-center py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
                >
                  View Details
                </Link>
                
                {committee.pdf && (
                  <a 
                    href={committee.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-gray-600 text-white text-center py-2 px-4 rounded-md hover:bg-gray-700 transition-colors"
                  >
                    View PDF
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-blue-50 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Contact Information</h3>
          <p className="text-gray-600">
            For any committee-related queries or concerns, please contact the college administration office 
            or reach out to the respective committee members directly.
          </p>
        </div>
      </div>
    </div>
  );
}
