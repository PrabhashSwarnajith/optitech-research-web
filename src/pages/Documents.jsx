import React from 'react';
import { FileText } from 'lucide-react';

const documents = [
  {
    title: 'Topic Assessment',
    submitted: '2024/02/15',
    type: 'Group',
    link: 'https://drive.google.com/drive/folders/1eidRRj4UAsDGYpmiYiI-bfhAeoZPlj82?usp=drive_link',
    description:
      'Initial topic evaluation outlining relevance and feasibility.',
  },
  {
    title: 'Project Charter',
    submitted: '2024/02/15',
    type: 'Group',
    link: 'https://drive.google.com/drive/folders/1AavcRUKQOW1JLYetqa5mMVEP7Uqxygp7?usp=drive_link',
    description:
      "Defines the project's purpose, scope, and key responsibilities.",
  },
  {
    title: 'Proposal Document',
    submitted: '2024/03/15',
    type: 'Individual',
    link: 'https://drive.google.com/drive/folders/1XLleeTMqQyygWFgt9LIk9g3yaxREHWNz?usp=drive_link',
    description: 'Explains project goals, timeline, and chosen technologies.',
  },
  {
    title: 'Check List Documents',
    submitted: 'Pending',
    type: 'Group',
    link: 'https://drive.google.com/drive/folders/1KtCql3jyObMObHVpjbY4W52l-1Nb4Xw-?usp=drive_link',
    description: 'Checklist to ensure all final deliverables are included.',
  },
  {
    title: 'Final Document - Main',
    submitted: '2025/04/11',
    type: 'Individual',
    link: 'https://drive.google.com/drive/folders/1UZ_SoCiXWdR4GEtk9qfsCMWmEtw-4Dkx?usp=drive_link',
    description: 'Detailed report covering research, analysis, and outcomes.',
  },
  {
    title: 'Final Document - Main (Group)',
    submitted: '2025/04/11',
    type: 'Group',
    link: 'https://drive.google.com/drive/folders/1CxYS2c5marfltrGiOTv6Y6Jn_6s-wo1Q?usp=drive_link',
    description: 'Final group submission combining all project components.',
  },
];

const Documents = () => {
  return (
    <section
      id="Documents"
      className="min-h-screen bg-[#F0F8FF] text-[#0A1F44] py-20 px-6 sm:px-10 md:px-20"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">Documents</h2>
        <p className="text-sm text-gray-700 mb-10">
          This section lists all documents related to your academic project. Use
          the links provided to view or download submitted files.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {documents.map((doc, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md border border-gray-200 p-5 flex flex-col justify-between min-h-[240px] hover:shadow-lg transition-shadow"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex items-center gap-2 mb-4">
                <FileText className="w-5 h-5 text-[#4169E1]" />
                <h3 className="text-md font-semibold text-[#0A1F44]">
                  {doc.title}
                </h3>
              </div>

              <p className="text-sm text-gray-600 mb-2 italic">
                {doc.description}
              </p>

              <p className="text-sm text-gray-600 mb-4">
                {doc.submitted === 'Pending'
                  ? 'Yet to be submitted'
                  : `Submitted on ${doc.submitted}`}
              </p>

              <div className="mt-auto flex justify-between items-center border-t pt-3">
                <span className="text-xs text-gray-500">{doc.type}</span>
                <a
                  href={doc.link}
                  className="text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#4169E1] to-[#38BDF8] hover:underline"
                >
                  Download
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Documents;
