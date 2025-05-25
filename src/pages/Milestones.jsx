import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const milestones = [
  {
    date: 'August 2024',
    title: 'Proposal Presentation',
    description:
      'A Proposal Presentation is a formal presentation that explains a planned project, its purpose, and how it will be carried out.',
    marks: 6,
    progress: 6,
    badgeColor: 'bg-[#4169E1]',
    badgeColorHex: '#4169E1',
    progressColor: 'from-[#4169E1] to-[#38BDF8]',
  },
  {
    date: 'December 2024',
    title: 'Progress Presentation I',
    description:
      'Formal presentation demonstrating ~50% development progress, key feature demo, and live Q&A.',
    marks: 15,
    progress: 15,
    badgeColor: 'bg-[#38BDF8]',
    badgeColorHex: '#38BDF8',
    progressColor: 'from-[#38BDF8] to-[#0EA5E9]',
  },
  {
    date: 'March 2025',
    title: 'Progress Presentation II',
    description:
      'Demonstrate 90% project completion with system functionality, UI/UX quality, and commercial readiness.',
    marks: 18,
    progress: 18,
    badgeColor: 'bg-[#0A1F44]',
    badgeColorHex: '#0A1F44',
    progressColor: 'from-[#0A1F44] to-[#1E3A8A]',
  },
  {
    date: 'March 2025',
    title: 'Research Paper',
    description:
      'An academic document presenting results from your investigation into a targeted problem area.',
    marks: 10,
    progress: 10,
    badgeColor: 'bg-[#6366F1]',
    badgeColorHex: '#6366F1',
    progressColor: 'from-[#6366F1] to-[#A855F7]',
  },
  {
    date: 'March 2025',
    title: 'Final Report',
    description:
      'A formal report documenting the complete project journey from design to evaluation.',
    marks: 19,
    progress: 19,
    badgeColor: 'bg-[#A855F7]',
    badgeColorHex: '#A855F7',
    progressColor: 'from-[#A855F7] to-[#D946EF]',
  },
  {
    date: 'May 2025',
    title: 'Final Presentation',
    description:
      'Assesses the complete product and individual contributions through a live demo and Q&A.',
    marks: 20,
    progress: 20,
    badgeColor: 'bg-[#22C55E]',
    badgeColorHex: '#22C55E',
    progressColor: 'from-[#22C55E] to-[#4ADE80]',
  },
  {
    date: 'May 2025',
    title: 'Project Website',
    description:
      'An online platform summarizing the system, features, and research in a structured format.',
    marks: 2,
    progress: 2,
    badgeColor: 'bg-[#F59E0B]',
    badgeColorHex: '#F59E0B',
    progressColor: 'from-[#F59E0B] to-[#FBBF24]',
  },
];

const Milestones = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section
      id="Milestones"
      className="min-h-screen bg-[#F9F6F1] text-[#0A1F44] py-20 px-4 sm:px-6 md:px-10"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center" data-aos="zoom-in">
          Timeline in Brief
        </h2>

        <div className="relative before:absolute before:left-1/2 before:top-0 before:bottom-0 before:w-1 before:bg-gray-300">
          {milestones.map((item, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div
                key={index}
                className={`relative mb-5 flex items-center ${
                  isLeft ? 'justify-start' : 'justify-end'
                }`}
                data-aos={isLeft ? 'fade-right' : 'fade-left'}
                data-aos-delay={index * 100}
              >
                {/* Timeline Dot */}
                <div
                  className="absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full border-4 border-white z-10 shadow-md"
                  style={{ backgroundColor: item.badgeColorHex }}
                ></div>

                {/* Timeline Card */}
                <div
                  className={`w-full max-w-md px-6 py-4 bg-white rounded-xl shadow-lg border-t-4 ${
                    isLeft ? 'ml-10' : 'mr-10'
                  }`}
                  style={{ borderColor: item.badgeColorHex }}
                >
                  <span
                    className={`inline-block text-xs text-white px-3 py-1 rounded ${item.badgeColor}`}
                  >
                    {item.date}
                  </span>
                  <h3 className="text-xl font-semibold mt-2">{item.title}</h3>
                  <p className="text-sm text-gray-700 mt-1 mb-3 leading-snug">
                    {item.description}
                  </p>
                  <p className="text-sm font-medium text-[#0A1F44]">
                    Marks Allocated:{' '}
                    <span className="font-semibold">{item.marks}</span>
                  </p>
                  <div className="w-full bg-gray-200 rounded-full h-3 mt-2">
                    <div
                      className={`h-3 rounded-full bg-gradient-to-r ${item.progressColor}`}
                      style={{ width: `${item.progress * (100 / 40)}%` }}
                    ></div>
                  </div>
                  <p className="text-right text-sm mt-1 text-[#38BDF8] font-medium">
                    {item.progress}%
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Milestones;
