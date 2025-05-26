import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import background from '../assets/background.jpg';

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
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section
      id="Home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 sm:px-10 md:px-20 relative bg-white py-20"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'right center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Content Left-Aligned */}
      <div className="max-w-2xl z-10 text-left space-y-8" data-aos="fade-right">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-[#0A1F44]">
          Discover <span className="text-[#4169E1]">Smarter Eye Care</span>
          <br />
          with <span className="text-[#38BDF8]">OptiTech</span>
        </h1>

        <p className="text-lg lg:text-xl text-[#333333] font-medium max-w-xl">
          An AI-powered research initiative focused on eye health monitoring,
          gaze detection, and diagnostic precision.
        </p>

        <p className="text-base text-gray-600 italic font-medium">
          "Smarter diagnostics begin with smarter decisions."
        </p>
      </div>
    </section>
  );
};

export default Home;
