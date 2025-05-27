import React, { useEffect } from 'react';
import { FileText } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const documents = [
  {
    title: 'Topic Assessment',
    submitted: '2024/05/13',
    type: 'Group',
    link: 'https://drive.google.com/file/d/1xUaLITGAC2zHTFVyS3fJyzmpXrm5gL8F/view?usp=drive_link',
    description:
      'Initial topic evaluation outlining relevance and feasibility.',
  },
  {
    title: 'Proposal Document',
    submitted: '2024/08/23',
    type: 'Individual',
    link: 'https://drive.google.com/drive/folders/1XLleeTMqQyygWFgt9LIk9g3yaxREHWNz?usp=drive_link',
    description: 'Explains project goals, timeline, and chosen technologies.',
  },
  {
    title: 'Individual Reports',
    submitted: '2025/04/11',
    type: 'Individual',
    link: 'https://drive.google.com/drive/folders/1UZ_SoCiXWdR4GEtk9qfsCMWmEtw-4Dkx?usp=drive_link',
    description: 'Detailed report covering research, analysis, and outcomes.',
  },
  {
    title: 'Final Report',
    submitted: '2025/04/11',
    type: 'Group',
    link: 'https://drive.google.com/drive/folders/1CxYS2c5marfltrGiOTv6Y6Jn_6s-wo1Q?usp=drive_link',
    description: 'Final group submission combining all project components.',
  },
  {
    title: 'Research Paper',
    submitted: '2025/03/30',
    type: 'Group',
    link: 'https://drive.google.com/file/d/12Ip7gOb-nEhOSVXlqmMTwldDRVddIUFF/view?usp=drive_link',
    description: 'The Final product of the research.',
  },
];

const Documents = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section
      id="Documents"
      className="min-h-screen bg-gradient-to-b from-[#E6F0FF] to-white text-[#0A1F44] py-20 px-6 sm:px-10 md:px-20"
    >
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-4xl font-bold mb-4 text-center text-[#1D4ED8]"
          data-aos="zoom-in"
        >
          Documents
        </h2>
        <p
          className="text-sm text-gray-700 mb-10 text-center"
          data-aos="fade-up"
        >
          This section lists all documents related to your academic project. Use
          the links provided to view or download submitted files.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {documents.map((doc, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md border border-gray-100 p-5 flex flex-col justify-between hover:shadow-lg transition-shadow"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex items-center gap-2 mb-4">
                <FileText className="w-5 h-5 text-[#2563EB]" />
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
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] hover:underline"
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
