import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import namali from '../assets/namalie.png';
import rivoni from '../assets/Rivoni.png';
import sahan from '../assets/sahan1.png';
import prabash from '../assets/prabash.jpg';
import heshan from '../assets/image.png';
import rashmika from '../assets/Rashmika.jpg';

const placeholder = '/assets/';

const supervisors = [
  {
    name: 'Dr. Namalie Walgampaya',
    role: 'Supervisor',
    affiliation: 'Sri Lanka Institute of Information Technology',
    department: 'Information Technology',
    image: namali,
    email: 'namalie.w@sliit.lk',
    linkedin: 'https://www.linkedin.com/in/namalie/',
  },
  {
    name: 'Ms. Rivoni De Zoysa',
    role: 'Co-Supervisor',
    affiliation: 'Sri Lanka Institute of Information Technology',
    department: 'Software Engineering',
    image: rivoni,
    email: 'rivoni.d@sliit.lk',
    linkedin: 'https://www.linkedin.com/in/rivoni-poojima-98237321b/',
  },
];

const students = [
  {
    name: 'Herath H M S C',
    role: 'Team Leader',
    affiliation: 'SLIIT - Faculty of Computing',
    department: 'Information Technology',
    image: sahan,
    email: 'it21334924@my.sliit.lk',
    linkedin: 'https://www.linkedin.com/in/sahan-herath-b9b187191/',
  },
  {
    name: 'Swarnajith T H M P',
    role: 'Team Member',
    affiliation: 'SLIIT - Faculty of Computing',
    department: 'Information Technology',
    image: prabash,
    email: 'it21253676@my.sliit.lk',
    linkedin: 'https://www.linkedin.com/in/prabhash-swarnajith/',
  },
  {
    name: 'Senanayaka W S H M',
    role: 'Team Member',
    affiliation: 'SLIIT - Faculty of Computing',
    department: 'Information Systems',
    image: heshan,
    email: 'it21341540@my.sliit.lk',
    linkedin: 'https://www.linkedin.com/in/heshan-senanayaka/',
  },
  {
    name: 'Hettiarachchi H W R A',
    role: 'Team Member',
    affiliation: 'SLIIT - Faculty of Computing',
    department: 'Information Technology',
    image: rashmika,
    email: 'it21340796@my.sliit.lk',
    linkedin: 'https://www.linkedin.com/in/rashmika-hettiarachchi-/',
  },
];

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section
      id="About"
      className="min-h-screen bg-gradient-to-b from-[#E6F0FF] to-white text-[#0A1F44] py-20 px-6 sm:px-10 md:px-20"
    >
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-4xl font-bold text-center mb-16 text-[#2563EB]"
          data-aos="zoom-in"
        >
          Meet Our Team
        </h2>

        {/* Supervisors Section */}
        <h3
          className="text-2xl font-semibold text-center mb-10 text-[#0A1F44]"
          data-aos="fade-up"
        >
          Supervisors
        </h3>
        <div className="flex flex-wrap justify-center gap-10 mb-20">
          {supervisors.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl overflow-hidden text-center border border-gray-200 w-[300px] hover:shadow-2xl transition duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover"
                onError={(e) => (e.target.src = placeholder)}
              />
              <div className="p-6 space-y-2">
                <h3 className="text-xl font-bold text-[#0A1F44]">
                  {member.name}
                </h3>
                <span className="inline-block text-xs bg-[#4F46E5] text-white px-3 py-1 rounded-full">
                  {member.role}
                </span>
                <p className="text-sm text-gray-600">{member.affiliation}</p>
                <p className="text-sm font-medium text-gray-800">
                  Department:{' '}
                  <span className="text-[#1E3A8A]">{member.department}</span>
                </p>
                <div className="flex justify-center gap-3 pt-2">
                  <a
                    href={`mailto:${member.email}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs px-4 py-1 rounded-full bg-[#2563EB] text-white hover:bg-[#1D4ED8] transition"
                  >
                    Email
                  </a>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs px-4 py-1 rounded-full bg-[#06B6D4] text-white hover:bg-[#0891B2] transition"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Students Section */}
        <h3
          className="text-2xl font-semibold text-center mb-10 text-[#0A1F44]"
          data-aos="fade-up"
        >
          Student Team
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {students.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl overflow-hidden text-center border border-gray-200 hover:shadow-2xl transition duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-60 object-cover"
                onError={(e) => (e.target.src = placeholder)}
              />
              <div className="p-5 space-y-2">
                <h3 className="text-xl font-semibold text-[#0A1F44]">
                  {member.name}
                </h3>
                <span className="inline-block text-xs bg-[#06B6D4] text-white px-3 py-1 rounded-full">
                  {member.role}
                </span>
                <p className="text-sm text-gray-600">{member.affiliation}</p>
                <p className="text-sm font-medium text-gray-800">
                  Department:{' '}
                  <span className="text-[#1E3A8A]">{member.department}</span>
                </p>
                <div className="flex justify-center gap-3 pt-2">
                  <a
                    href={`mailto:${member.email}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs px-4 py-1 rounded-full bg-[#2563EB] text-white hover:bg-[#1D4ED8] transition"
                  >
                    Email
                  </a>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs px-4 py-1 rounded-full bg-[#06B6D4] text-white hover:bg-[#0891B2] transition"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
