import React, { useEffect, useState } from 'react';
import { FileText } from 'lucide-react';

const TypewriterEffect = ({ text }) => {
  const [displayText, setDisplayText] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= text.length) {
        setDisplayText(text.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
        setTyping(false);
      }
    }, 50);
    return () => clearInterval(timer);
  }, [text]);

  return (
    <span className="inline-block">
      {displayText}
      {typing && <span className="animate-pulse">|</span>}
    </span>
  );
};

const Home = () => {
  useEffect(() => {
    // AOS init would go here if available
    // AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section
      id="Home"
      className="min-h-screen flex items-center justify-center bg-[#F9F6F1] text-[#0A1F44] px-6 sm:px-10 md:px-20 relative overflow-hidden"
    >
      {/* Background Image - Full Screen */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: "url('/images/doctor-thinking.png')",
        }}
      />
      
      {/* Gradient Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F9F6F1]/90 via-[#F9F6F1]/80 to-[#F9F6F1]/90" />

      {/* Content */}
      <div className="max-w-5xl w-full flex flex-col items-center text-center gap-10 relative z-10" data-aos="fade-up">
        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-sm">
          Discover <span className="text-[#4169E1] drop-shadow-sm">Smarter Eye Care</span><br />
          with <span className="text-[#38BDF8] drop-shadow-sm">Optitech Eye</span>
        </h1>

        {/* Paragraph */}
        <p className="text-lg lg:text-xl max-w-3xl text-[#333333] font-medium drop-shadow-sm">
          An AI-powered research initiative focused on eye health monitoring, gaze detection,
          and diagnostic precision.
        </p>

        {/* Featured Image Card */}
        <div className="relative group">
          <div className="absolute -inset-4 bg-gradient-to-r from-[#4169E1] to-[#38BDF8] rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
          <div className="relative bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-2xl border border-white/50">
            <img
              src="/images/doctor-thinking.png"
              alt="Female doctor pointing to head, symbolizing decision-making"
              className="w-full max-w-sm rounded-lg shadow-lg mx-auto"
              loading="lazy"
            />
          </div>
        </div>

        {/* Caption */}
        <p className="text-base text-gray-600 italic font-medium bg-white/60 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
          "Smarter diagnostics begin with smarter decisions."
        </p>

       
      </div>
    </section>
  );
};

export default Home;