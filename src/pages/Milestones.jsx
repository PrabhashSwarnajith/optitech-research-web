import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const milestones = [
  {
    date: "March 2021",
    title: "Project Proposal",
    description:
      "Initial idea and plan presented to gain approval and define the project scope clearly.",
    marks: 6,
    progress: 6,
    badgeColor: "bg-[#10B981]",
  },
  {
    date: "June 2021",
    title: "Progress Presentation I",
    description:
      "Midway progress review covering implemented features and existing gaps.",
    marks: 6,
    progress: 6,
    badgeColor: "bg-black",
  },
  {
    date: "August 2021",
    title: "Final Presentation",
    description:
      "Presentation of completed system with evaluation based on outcome.",
    marks: 20,
    progress: 20,
    badgeColor: "bg-[#3B82F6]",
  },
  {
    date: "September 2021",
    title: "Final Report Submission",
    description:
      "Complete project report with system design, testing, and results.",
    marks: 8,
    progress: 8,
    badgeColor: "bg-[#F59E0B]",
  },
];

const Milestones = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <section
      id="Milestones"
      className="min-h-screen bg-[#E8F5F1] text-[#0A1F44] py-20 px-4 sm:px-6 md:px-10"
    >
      <div className="max-w-4xl mx-auto">
        <h2
          className="text-4xl font-bold mb-16 w-fit"
          data-aos="fade-down"
        >
          Timeline in Brief
        </h2>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Left Sidebar Topic */}
          <div className="md:w-1/3">
            <h3 className="text-xl font-semibold text-[#0A1F44] mb-4" data-aos="fade-right">
              Project Milestones Overview
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed" data-aos="fade-right" data-aos-delay="100">
              This timeline summarizes each key step of the academic project development process, from proposal to final reporting.
            </p>
          </div>

          {/* Timeline Content */}
          <div className="md:w-2/3">
            <div className="relative border-l-4 border-gray-300 ml-6">
              {milestones.map((item, index) => (
                <div
                  key={index}
                  className="mb-14 ml-6 relative"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className={`w-6 h-6 absolute -left-9 top-1 rounded-full border-4 border-white ${item.badgeColor}`}></div>

                  <div className="mb-2">
                    <span
                      className={`px-3 py-1 text-xs text-white rounded ${item.badgeColor}`}
                    >
                      {item.date}
                    </span>
                  </div>

                  <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-700 mb-3 text-sm leading-snug">
                    {item.description}
                  </p>
                  <p className="font-medium text-sm mb-1">
                    <span className="text-[#0A1F44] font-semibold">Marks Allocated</span>: {item.marks}
                  </p>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-[#10B981] to-[#34D399] h-3 rounded-full"
                      style={{ width: `${item.progress * (100 / 40)}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-right mt-1 font-medium text-green-600">
                    {item.progress}%
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Milestones;