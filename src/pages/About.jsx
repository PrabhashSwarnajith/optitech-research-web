import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const placeholder = '/images/placeholder-profile.png';

const supervisors = [
  {
    name: 'Dr. Namalie Walgampaya',
    role: 'Supervisor',
    affiliation: 'Sri Lanka Institute of Information Technology',
    department: 'Information Technology',
    image: '/images/Namalie.png',
  },
  {
    name: 'Ms. Rivoni De Zoysa',
    role: 'Co-Supervisor',
    affiliation: 'Sri Lanka Institute of Information Technology',
    department: 'Software Engineering',
    image: '/images/Rivoni.png',
  },
];

const students = [
  {
    name: 'Herath H M S C',
    role: 'Team Leader',
    affiliation: 'SLIIT - Faculty of Computing',
    department: 'Information Technology',
    image: '/images/sahan1.png',
  },
  {
    name: 'Swarnajith T H M P',
    role: 'Team Member',
    affiliation: 'SLIIT - Faculty of Computing',
    department: 'Information Technology',
    image: '/images/placeholder-profile.png',
  },
  {
    name: 'Senanayaka W S H M',
    role: 'Team Member',
    affiliation: 'SLIIT - Faculty of Computing',
    department: 'Information Systems',
    image: '/images/image.png',
  },
  {
    name: 'Hettiarachchi H W R A',
    role: 'Team Member',
    affiliation: 'SLIIT - Faculty of Computing',
    department: 'Information Technology',
    image: '/images/Rashmika.jpg',
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
              className="bg-white rounded-xl shadow-md overflow-hidden text-center border border-gray-100 w-[280px] hover:shadow-xl transition duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover"
                onError={(e) => (e.target.src = placeholder)}
              />
              <div className="p-6">
                <h3 className="text-lg font-bold text-[#0A1F44]">
                  {member.name}
                </h3>
                <span className="inline-block mt-1 mb-2 text-xs bg-[#4F46E5] text-white px-3 py-1 rounded-full">
                  {member.role}
                </span>
                <p className="text-sm text-gray-600">{member.affiliation}</p>
                <p className="text-sm font-medium mt-1 text-gray-800">
                  Department:{' '}
                  <span className="text-[#1E3A8A]">{member.department}</span>
                </p>
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
              className="bg-white rounded-xl shadow-md overflow-hidden text-center border border-gray-100 hover:shadow-xl transition duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-60 object-cover"
                onError={(e) => (e.target.src = placeholder)}
              />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-[#0A1F44]">
                  {member.name}
                </h3>
                <span className="inline-block mt-1 mb-2 text-xs bg-[#06B6D4] text-white px-3 py-1 rounded-full">
                  {member.role}
                </span>
                <p className="text-sm text-gray-600">{member.affiliation}</p>
                <p className="text-sm font-medium text-gray-800 mt-1">
                  Department:{' '}
                  <span className="text-[#1E3A8A]">{member.department}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
