import React from "react";
import { MonitorPlay } from "lucide-react";

const presentations = [
  {
    title: "Proposal Presentation",
    submitted: "2024/03/20",
    type: "Individual",
    link: "#",
    description: "Introduces project goals, methodology, and initial research foundation.",
  },
  {
    title: "Progress Presentation I",
    submitted: "2024/06/05",
    type: "Group",
    link: "#",
    description: "Mid-term update highlighting completed modules, feedback, and challenges.",
  },
  {
    title: "Final Presentation",
    submitted: "2024/08/12",
    type: "Individual",
    link: "#",
    description: "Summarizes the completed system, results, and lessons learned.",
  },
  {
    title: "Poster Presentation",
    submitted: "2024/08/13",
    type: "Group",
    link: "#",
    description: "Visually summarizes the entire project for public and academic display.",
  },
];

const Presentations = () => {
  return (
    <section
      id="Presentations"
      className="min-h-screen bg-[#F0F8FF] text-[#0A1F44] py-20 px-6 sm:px-10 md:px-20"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">Presentations</h2>
        <p className="text-sm text-gray-700 mb-10">
          Below are all the submitted presentation materials related to this project.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {presentations.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md border border-gray-200 p-5 flex flex-col justify-between min-h-[240px] hover:shadow-lg transition-shadow"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex items-center gap-2 mb-4">
                <MonitorPlay className="w-5 h-5 text-[#4169E1]" />
                <h3 className="text-md font-semibold text-[#0A1F44]">
                  {item.title}
                </h3>
              </div>

              <p className="text-sm text-gray-600 italic mb-2">{item.description}</p>

              <p className="text-sm text-gray-600 mb-4">
                Submitted on {item.submitted}
              </p>

              <div className="mt-auto flex justify-between items-center border-t pt-3">
                <span className="text-xs text-gray-500">{item.type}</span>
                <a
                  href={item.link}
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

export default Presentations;
