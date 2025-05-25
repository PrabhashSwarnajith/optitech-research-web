import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const technologies = [
  { name: 'Python', file: 'python.png' },
  { name: 'React', file: 'react.png' },
  { name: 'TensorFlow', file: 'tensorflow.png' },
  { name: 'Keras', file: 'keras.png' },
  { name: 'MongoDB', file: 'mongodb.png' },
  { name: 'Firebase', file: 'firebase.png' },
  { name: 'Google Cloud', file: 'gcloud.png' },
  { name: 'Kafka', file: 'kafka.png' },
  { name: 'Docker', file: 'docker.png' },
  { name: 'Google Colab', file: 'colab.png' },
  { name: 'Google Maps API', file: 'gmap.png' },
  { name: 'JWT', file: 'jwt.png' },
];

const Domain = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: false });
  }, []);

  return (
    <div className="bg-gradient-to-b from-[#F0F4F8] to-[#FFFFFF] text-[#0A1F44]">
      <section id="Domain" className="py-20 px-6 sm:px-10 md:px-20">
        <div className="max-w-7xl mx-auto space-y-20">
          {/* LITERATURE SURVEY */}
          <div id="Literature" className="scroll-mt-20" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-center text-indigo-700 mb-10">
              Literature Survey
            </h2>
            <div className="bg-white rounded-xl shadow-lg border-l-4 border-indigo-400 p-6 md:p-8">
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                The domain of eye health monitoring has seen significant
                advancements...
              </p>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                The emergence of web-based eye tracking systems such as
                WebGazer...
              </p>
              <h4 className="font-semibold text-indigo-800 mb-2">
                IEEE References:
              </h4>
              <ul className="text-sm list-decimal list-inside space-y-1 text-gray-700">
                <li>
                  CataractNet (2021). IEEE Access.
                  doi:10.1109/ACCESS.2021.3112938
                </li>
                <li>
                  Xie H. et al. (2023). Fundus Cataract Detection.
                  doi:10.3389/fcell.2023.1197239
                </li>
                <li>
                  Hu X. et al. (2023). GLIM-Net. doi:10.1109/TMI.2023.3243692
                </li>
                <li>
                  Li X. et al. (2017). WebCam Eye Tracking.
                  doi:10.1109/ICE.2017.8046009
                </li>
              </ul>
            </div>
          </div>

          {/* RESEARCH PROBLEM */}
          <div id="Problem" className="scroll-mt-20" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-center text-yellow-600 mb-10">
              Research Problem
            </h2>
            <div className="bg-white rounded-xl shadow-md border-l-4 border-yellow-400 p-6 md:p-8">
              <p className="text-sm text-gray-700 font-semibold leading-relaxed">
                How can an integrated multi-modal AI system be developed to
                provide real-time...
              </p>
            </div>
          </div>

          {/* RESEARCH GAP */}
          <div id="Gap" className="scroll-mt-20" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-center text-emerald-600 mb-10">
              Research Gap
            </h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              {[
                {
                  icon: '🔍',
                  title: 'Identification & Classification',
                  desc: 'Smart solutions for real-time classification are not widely available...',
                },
                {
                  icon: '📈',
                  title: 'Severity Assessment',
                  desc: 'Most existing systems lack depth in analyzing progression...',
                },
                {
                  icon: '💬',
                  title: 'Real-Time Communication',
                  desc: 'Live communication between the system and caregivers is limited...',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="space-y-4"
                  data-aos="zoom-in"
                  data-aos-delay={i * 100}
                >
                  <div className="text-4xl">{item.icon}</div>
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-sm text-gray-600 px-2">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* OBJECTIVES */}
          <div id="Objectives" className="scroll-mt-20" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-center text-green-600 mb-16">
              Research Objectives
            </h2>
            <div className="relative flex flex-col space-y-16 before:absolute before:inset-y-0 before:left-1/2 before:w-1 before:bg-green-400/40 before:-translate-x-1/2">
              {[
                {
                  title: 'Real-Time Eye Tracking',
                  description:
                    'Develop a real-time eye-tracking system using webcams...',
                },
                {
                  title: 'AI-Based Cataract Detection',
                  description:
                    'Train deep learning models (CNN) to classify cataract severity...',
                },
                {
                  title: 'Pupil-Based Glaucoma Detection',
                  description:
                    'Use CNN-RNN hybrids to analyze pupil dilation and reaction time...',
                },
                {
                  title: 'Color Blindness & Fatigue Detection',
                  description:
                    'Combine color tasks and blink monitoring to detect fatigue...',
                },
              ].map((obj, index) => {
                const isLeft = index % 2 === 0;
                return (
                  <div
                    key={index}
                    className={`relative flex items-center ${
                      isLeft ? 'justify-start' : 'justify-end'
                    } w-full`}
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-green-500 z-10 flex items-center justify-center text-white text-xs font-bold">
                      ★
                    </div>
                    <div
                      className={`bg-white rounded-xl shadow-lg border-2 border-green-500 max-w-md p-6 ${
                        isLeft ? 'ml-10' : 'mr-10'
                      }`}
                    >
                      <h3 className="text-lg font-semibold text-[#0A1F44] mb-2">
                        {obj.title}
                      </h3>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        {obj.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* METHODOLOGY */}
          <div id="Methodology" className="scroll-mt-20" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-center text-purple-600 mb-16">
              Methodology
            </h2>
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div data-aos="fade-right">
                <img
                  src="/images/methodology-eye.png"
                  alt="Eye Health"
                  className="w-full max-w-md mx-auto rounded-xl shadow-md"
                />
              </div>
              <div data-aos="fade-left">
                <h3 className="text-xl font-semibold text-[#0A1F44] mb-4">
                  AI-Based Health Monitoring
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  The proposed system includes AI-powered modules...
                </p>
                <ul className="list-disc list-inside text-sm text-gray-700 mt-4 space-y-1">
                  <li>Webcam-based tracking</li>
                  <li>Feature extraction</li>
                  <li>CNN, RNN inference</li>
                  <li>Live feedback & reporting</li>
                  <li>Caregiver messaging dashboard</li>
                </ul>
              </div>
            </div>
          </div>

          {/* TECHNOLOGIES */}
          <div id="Technologies" className="scroll-mt-20" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-center text-sky-600 mb-10">
              Technologies Used
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-items-center">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className="text-center"
                  data-aos="zoom-in"
                  data-aos-delay={index * 50}
                >
                  <div className="bg-white rounded-full shadow-md w-20 h-20 p-3 flex items-center justify-center hover:scale-105 transition">
                    <img
                      src={`/images/tech/${tech.file}`}
                      alt={tech.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <p className="text-sm font-medium text-[#0A1F44] mt-2">
                    {tech.name}
                  </p>
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
