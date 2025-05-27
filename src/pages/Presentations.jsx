import React, { useEffect } from 'react';
import { MonitorPlay } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const presentations = [
  {
    title: 'Proposal Presentation',
    submitted: '2024/07/06',
    type: 'Group',
    link: 'https://docs.google.com/presentation/d/1Sb34-vI4eFYlUm2yrHYfNL-jkOkI9p7n/edit?usp=drive_link',
    description:
      'Covers initial objectives, scope, and planned methodology for the project.',
  },
  {
    title: 'Progress Presentation I',
    submitted: '2024/12/04',
    type: 'Group',
    link: 'https://docs.google.com/presentation/d/1IUX0c-SExuxqYc9DqUlX0NQog98CSt4h/edit?usp=drive_link',
    description:
      'Presents approximately 50% completion, showcasing key features and received feedback.',
  },
  {
    title: 'Progress Presentation II',
    submitted: '2025/03/18',
    type: 'Group',
    link: 'https://docs.google.com/presentation/d/1sgYN0e0PEhxjlEJAl8tg3N_zsUDvjvxp/edit?usp=drive_link',
    description:
      'Highlights around 90% project completion, refined design, and testing outcomes.',
  },
  {
    title: 'Final Presentation',
    submitted: '2025/05/07',
    type: 'Group',
    link: 'https://docs.google.com/presentation/d/1SpmQkULnL8Akcb0qKbMzbmZg03GCGPYv/edit?usp=drive_link&ouid=109728648207284349626&rtpof=true&sd=true',
    description:
      'Final project delivery with system demo, research findings, and overall conclusions.',
  },
];

const Presentations = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section
      id="Presentations"
      className="min-h-screen bg-gradient-to-b from-[#E0F2FE] to-white text-[#0A1F44] py-20 px-6 sm:px-10 md:px-20"
    >
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-4xl font-bold mb-4 text-center text-[#3B82F6]"
          data-aos="zoom-in"
        >
          Presentations
        </h2>
        <p
          className="text-sm text-gray-700 mb-10 text-center"
          data-aos="fade-up"
        >
          Below are all the submitted presentation materials related to this
          project.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {presentations.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md border border-gray-100 p-5 flex flex-col justify-between hover:shadow-lg transition-shadow"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex items-center gap-2 mb-4">
                <MonitorPlay className="w-5 h-5 text-[#6366F1]" />
                <h3 className="text-md font-semibold text-[#0A1F44]">
                  {item.title}
                </h3>
              </div>

              <p className="text-sm text-gray-600 italic mb-2">
                {item.description}
              </p>

              <p className="text-sm text-gray-600 mb-4">
                Submitted on {item.submitted}
              </p>

              <div className="mt-auto flex justify-between items-center border-t pt-3">
                <span className="text-xs text-gray-500">{item.type}</span>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#6366F1] to-[#06B6D4] hover:underline"
                >
                  View
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
