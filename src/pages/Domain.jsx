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
      <section
        id="Domain"
        className="py-20 px-6 sm:px-10 md:px-20"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <div className="max-w-7xl mx-auto space-y-10">
          {/* LITERATURE SURVEY */}
          <div id="Literature" className="scroll-mt-20" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-center text-indigo-700 mb-10">
              Literature Survey
            </h2>
            <div className="bg-white rounded-xl shadow-lg border-l-4 border-indigo-400 p-6 md:p-8">
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                he field of ophthalmic diagnostics has seen substantial progress
                with the adoption of artificial intelligence and computer
                vision. Initial efforts in automated cataract detection utilized
                classical machine learning techniques, where features such as
                texture, wavelet coefficients, and local standard deviations
                were extracted from fundus images and fed into models like
                Linear Discriminant Analysis and Backpropagation Neural
                Networks. While these approaches yielded promising outcomes,
                they were limited by the need for manual feature extraction and
                were not scalable for large datasets. With the advent of deep
                learning, Convolutional Neural Networks (CNNs) revolutionized
                medical image analysis by enabling automatic feature extraction
                and end-to-end learning. These models have been applied to not
                only detect but also grade cataracts with high accuracy. Several
                advanced techniques, such as transfer learning with pre-trained
                networks and ensemble models, further enhanced performance.
                However, high computational complexity and large model sizes
                pose challenges for deployment on mobile and edge devices,
                necessitating lightweight yet accurate alternatives. In the
                realm of surgical tool detection within ocular imagery, earlier
                methods relying on color segmentation proved inadequate due to
                visual distortion and overlapping structures. Deep
                learning-based object detection methods, including Faster R-CNN
                and YOLO, were explored but lacked adaptation for intraocular
                tools. A recent breakthrough involved the application of the
                Single Shot Detector (SSD), capable of detecting small surgical
                instruments like handpieces and hooks even under distortion
                marking the first such use in live eye surgery recordings. For
                eye strain management, various systems have employed
                webcam-based gaze tracking and blink rate analysis. Notably,
                Kuwahara et al. used facial landmark detection to measure blink
                frequency and visual fatigue, although their system depended
                heavily on high-quality video input and controlled lighting
                conditions. Other researchers like Wang et al. introduced
                behavioral monitoring through facial expressions and head
                movement, achieving decent accuracy but struggling under poor
                lighting or when subjects wore glasses. Color Vision Deficiency
                (CVD) detection has also evolved, with traditional Ishihara
                tests now digitized for interactive web use. CNN-based systems
                trained on modified Ishihara plates have shown promise in
                distinguishing between types of color blindness like protanopia
                and deuteranopia. However, many existing models lack
                adaptability and real-time responsiveness, and often do not
                account for variability in user devices or lighting conditions.
                Recent works, such as that by Sun et al., utilized eye-tracking
                signals for CVD and fatigue detection. They employed models
                combining fuzzy clustering with SVMs and ELMs for red-green
                deficiency classification, though with limitations in broader
                CVD detection and real-time deployment feasibility.
              </p>
              <h4 className="font-semibold text-indigo-800 mb-2">
                IEEE References:
              </h4>
              <ul className="text-sm list-decimal list-inside space-y-1 text-gray-700">
                <li>
                  M. S. Junayed et al., "An Automated Cataract Detection," IEEE
                  Access, vol. 9, pp. 10, 2021.
                </li>
                <li>
                  X. Hu et al., “Attention-based segmentation for retinal
                  analysis,” IEEE, 2023
                </li>
                <li>
                  W. Sun, Y. Wang, and B. Hu, “Exploration of Eye Fatigue
                  Detection Features and Algorithm Based on Eye-Tracking
                  Signal,” MDPI Electronics, vol. 13, no. 10, 2024.
                </li>
                <li>
                  Z. Lin et al., “Fatigue Detection via Visual Behavior
                  Analysis,” ScienceDirect, Apr. 2022.
                </li>
                <li>
                  <li>
                    Z. Lin et al., “Fatigue Detection via Visual Behavior
                    Analysis,” ScienceDirect, Apr. 2022.
                  </li>
                </li>
                <li>
                  X. Zhang, Y. Sugano, M. Fritz, and A. Bulling,
                  “Appearance-Based Gaze Estimation in the Wild,” IEEE, 2017.
                </li>
              </ul>
            </div>
          </div>

          {/* RESEARCH PROBLEM CARDS */}
          <div id="Problem" className="scroll-mt-20 py-20 " data-aos="fade-up">
            <h2 className="text-4xl font-bold text-center text-yellow-600 mb-16">
              Research Problem
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 px-6 md:px-20">
              {/* Card 1 */}
              <div
                className="rounded-xl p-6 shadow-lg bg-white hover:shadow-xl transition border-2 border-yellow-400"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <h3 className="text-lg font-bold text-[#0A1F44] mb-2">
                  1. Fragmentation in Eye Health Systems
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Current AI tools are specialized and isolated, requiring users
                  to switch between platforms. There's a need for an integrated,
                  unified system that delivers comprehensive eye diagnostics in
                  a single environment.
                </p>
              </div>

              {/* Card 2 */}
              <div
                className="rounded-xl p-6 shadow-lg bg-white hover:shadow-xl transition border-2 border-yellow-400"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <h3 className="text-lg font-bold text-[#0A1F44] mb-2">
                  2. Limitations in Cataract Detection Devices
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Most AI models require high-end imaging to detect cataracts.
                  Developing lightweight, accurate models that run on common
                  webcams or phone cameras is vital for telemedicine and rural
                  diagnostics.
                </p>
              </div>

              {/* Card 3 */}
              <div
                className="rounded-xl p-6 shadow-lg bg-white hover:shadow-xl transition border-2 border-yellow-400"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <h3 className="text-lg font-bold text-[#0A1F44] mb-2">
                  3. Behavioral Blind Spots in Fatigue Detection
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Fatigue tools often overlook behavior like gaze direction or
                  head movement. A system that integrates multiple behavioral
                  indicators can offer more accurate, adaptive fatigue tracking.
                </p>
              </div>

              {/* Card 4 */}
              <div
                className="rounded-xl p-6 shadow-lg bg-white hover:shadow-xl transition border-2 border-yellow-400"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <h3 className="text-lg font-bold text-[#0A1F44] mb-2">
                  4. Static Nature of Color Blindness & Glaucoma Tests
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Traditional tests lack personalization and real-time analysis.
                  AI can modernize color blindness and pupil-based glaucoma
                  detection using standard webcams in uncontrolled settings.
                </p>
              </div>
            </div>
          </div>

          {/* RESEARCH GAP */}
          <div
            id="Gap"
            className="scroll-mt-20 py-10"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h2 className="text-4xl font-bold text-center text-emerald-600 mb-10">
              Research Gap
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center px-6 md:px-20">
              {[
                {
                  icon: '🖼️',
                  title: 'Cataract Detection',
                  desc: 'Current AI models require clinical-grade images and lack adaptability to low-resource devices. There’s a need for portable, accurate detection via webcams and mobile phones.',
                },
                {
                  icon: '🧘‍♂️',
                  title: 'Adaptive Eye Exercises',
                  desc: 'Existing systems use static routines and ignore real-time user feedback. Personalized, fatigue-aware therapy models are still missing in practice.',
                },
                {
                  icon: '🧠',
                  title: 'Color Blindness & Fatigue',
                  desc: 'Conventional tests lack interaction and behavioral insight. Integrated, multi-feature models for real-time diagnosis are underexplored.',
                },
                {
                  icon: '🩺',
                  title: 'Glaucoma Detection',
                  desc: 'Glaucoma tools rely on costly OCT scans. Webcam-based, real-time pupil tracking for early detection remains a key unmet need.',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="space-y-4 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
                  data-aos="zoom-in"
                  data-aos-delay={i * 100}
                >
                  <div className="text-5xl">{item.icon}</div>
                  <h3 className="text-lg font-semibold text-[#0A1F44]">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
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
                  title: 'AI-Powered Cataract Detection Module',
                  description:
                    'Implement deep learning models to accurately identify cataract presence (positive/negative) from retinal images. The system will prioritize early-stage detection while minimizing false positives to assist in timely clinical interventions.',
                },
                {
                  title: 'Real-Time Adaptive Eye Exercise System',
                  description:
                    'Design a personalized visual wellness platform that monitors user eye behavior (e.g., blink rate, gaze) and delivers dynamic, interactive eye exercises to reduce strain and support long-term digital eye health.',
                },
                {
                  title: 'Pupil-Based Glaucoma Detection',
                  description:
                    'Deploy a real-time pupil tracking mechanism using computer vision to analyze pupil response under varying light conditions, enabling early identification of potential glaucoma signs in a non-invasive manner.',
                },
                {
                  title: 'Color Blindness & Fatigue Detection',
                  description:
                    'Develop a dual-function module combining a color grid test for detecting color vision deficiencies with live fatigue detection based on blink frequency, gaze stability, and facial strain analysis through webcam input.',
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
                <p className="text-sm text-gray-700 leading-relaxed">
                  OptiTech is a comprehensive AI-powered eye health platform
                  designed with a modular architecture that integrates four core
                  diagnostic systems: Cataract Detection, Eye Exercise &
                  Therapy, Color Blindness & Fatigue Monitoring, and Glaucoma
                  Detection. Leveraging cutting-edge technologies such as CNNs,
                  RNNs, OpenCV, and real-time webcam processing, each module
                  operates independently yet synergizes through a unified web
                  interface and a secure Flask-based backend. The system ensures
                  high diagnostic accuracy, real-time performance, and
                  personalized feedback, while maintaining compliance with
                  global data privacy standards like HIPAA and GDPR. Built with
                  responsive frontend technologies, OptiTech offers accessible,
                  intelligent, and adaptive solutions for early detection and
                  proactive eye care across various devices.
                </p>
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
