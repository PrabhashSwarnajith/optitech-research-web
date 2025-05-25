import React, { useEffect } from "react";
import { Search, Lightbulb, Code } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const Domain = () => {
  const technologies = [
    { name: "Python & TensorFlow", purpose: "for training hybrid CNN-RNN and fatigue detection models", icon: "🐍" },
    { name: "OpenCV", purpose: "for eye and pupil detection", icon: "👁️" },
    { name: "Flask", purpose: "for backend API and real-time inference", icon: "⚡" },
    { name: "React", purpose: "for interactive front-end interface", icon: "⚛️" },
    { name: "Mediapipe", purpose: "for facial landmark and EAR detection", icon: "🎯" },
    { name: "Firebase", purpose: "for data storage and real-time user feedback", icon: "🔥" }
  ];

  const objectives = [
    "To develop a real-time eye-tracking system for personalized digital eye strain exercises.",
    "To implement an AI-based cataract detection module using retinal image classification.",
    "To introduce a glaucoma detection module analyzing pupil dynamics using hybrid models.",
    "To build a multi-modal system for detecting color blindness and eye fatigue with real-time feedback."
  ];

  useEffect(() => {
    AOS.init({ once: false });
  }, []);

  return (
    <div className="bg-[#F9F6F1] text-[#0A1F44]">
      <section id="Domain" className="py-20 px-6 sm:px-10 md:px-20">
        <div className="max-w-7xl mx-auto space-y-20">

          {/* Research Gap */}
          {/* Research Gap */}
<div id="Gap" className="scroll-mt-20">
  <h2
    className="text-4xl font-bold mb-4 text-center"
    data-aos="fade-down"
  >
    Research Gap
  </h2>
  <p className="text-center text-gray-600 mb-10" data-aos="fade-up">
    Following areas are the research gaps found in most of the recent research.
  </p>

  <div className="grid md:grid-cols-3 gap-8 text-center">
    <div data-aos="zoom-in" className="space-y-4">
      <div className="text-green-700 text-4xl">🔍</div>
      <h3 className="text-lg font-semibold">Identification & Classification</h3>
      <p className="text-sm text-gray-700 px-2">
        There are no records of smart solutions for coconut pest and disease identification in Sri Lanka. Symptoms are hard to distinguish and pose classification challenges.
      </p>
    </div>

    <div data-aos="zoom-in" data-aos-delay="100" className="space-y-4">
      <div className="text-green-700 text-4xl">📈</div>
      <h3 className="text-lg font-semibold">Severity Assessment</h3>
      <p className="text-sm text-gray-700 px-2">
        Smart pest identification exists in India, but assessing disease severity and progression level in Sri Lanka remains unaddressed.
      </p>
    </div>

    <div data-aos="zoom-in" data-aos-delay="200" className="space-y-4">
      <div className="text-green-700 text-4xl">💬</div>
      <h3 className="text-lg font-semibold">Information Sharing</h3>
      <p className="text-sm text-gray-700 px-2">
        There's a lack of real-time systems for efficient communication between growers, researchers, and extension agents to tackle pest and disease control effectively.
      </p>
    </div>
  </div>
</div>


          {/* Research Objectives */}
          <div id="Objectives" className="scroll-mt-20">
            <div className="flex items-center gap-4 mb-8" data-aos="fade-right">
              <div className="p-3 bg-gradient-to-r from-[#0EA5E9] to-[#38BDF8] rounded-lg text-white">
                <Lightbulb className="w-8 h-8" />
              </div>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-[#0EA5E9] to-[#38BDF8] bg-clip-text text-transparent">
                Research Objectives
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {objectives.map((objective, index) => (
                <div key={index} className="group relative" data-aos="fade-up" data-aos-delay={`${index * 100}`}>
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#0EA5E9] to-[#38BDF8] rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
                  <div className="relative bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-blue-100">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-[#0EA5E9] to-[#38BDF8] rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {index + 1}
                      </div>
                      <p className="text-[#333333] leading-relaxed">{objective}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Used */}
          <div id="Technologies" className="scroll-mt-20">
            <div className="flex items-center gap-4 mb-8" data-aos="fade-right">
              <div className="p-3 bg-gradient-to-r from-[#34D399] to-[#0EA5E9] rounded-lg text-white">
                <Code className="w-8 h-8" />
              </div>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-[#34D399] to-[#0EA5E9] bg-clip-text text-transparent">
                Technologies Used
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {technologies.map((tech, index) => (
                <div key={index} className="group relative" data-aos="fade-up" data-aos-delay={`${index * 100}`}>
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#34D399] to-[#0EA5E9] rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
                  <div className="relative bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-green-100 hover:-translate-y-1 transition duration-300">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-2xl">{tech.icon}</span>
                      <h3 className="font-bold text-[#0A1F44]">{tech.name}</h3>
                    </div>
                    <p className="text-[#333333] text-sm">{tech.purpose}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Domain;
