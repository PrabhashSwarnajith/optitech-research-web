import React from "react";
import { FileText } from "lucide-react";

const documents = [
  {
    title: "Project Charter",
    submitted: "2024/02/15",
    type: "Group",
    link: "#",
    description: "Outlines the project's scope, goals, roles, and responsibilities.",
  },
  {
    title: "Proposal Document",
    submitted: "2024/03/15",
    type: "Individual",
    link: "#",
    description: "Detailed proposal including objectives, timeline, and technologies.",
  },
  {
    title: "Check List Documents",
    submitted: "Pending",
    type: "Group",
    link: "#",
    description: "Submission checklist for final project deliverables.",
  },
  {
    title: "Final Document - Main",
    submitted: "2024/08/10",
    type: "Individual",
    link: "#",
    description: "Comprehensive report including methodology, results, and discussion.",
  },
  {
    title: "Final Document - Appendix A",
    submitted: "2024/08/10",
    type: "Group",
    link: "#",
    description: "Includes supporting diagrams, workflows, and system architecture.",
  },
  {
    title: "Final Document - Appendix B",
    submitted: "2024/08/10",
    type: "Group",
    link: "#",
    description: "Supplementary data including tables and charts used in the study.",
  },
  {
    title: "Final Document - Plagiarism Report",
    submitted: "2024/08/10",
    type: "Group",
    link: "#",
    description: "Verifies the originality of submitted written work.",
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
          This section lists all documents related to your academic project. Use the links provided to view or download submitted files.
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
                {doc.submitted === "Pending"
                  ? "Yet to be submitted"
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
