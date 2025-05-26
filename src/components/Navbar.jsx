import React, { useEffect, useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('Home');
  const [openDropdown, setOpenDropdown] = useState(null);

  const navItems = [
    { href: '#Home', label: 'Home' },
    {
      href: '#Domain',
      label: 'Domain',
    },
    { href: '#Milestones', label: 'Milestones' },
    { href: '#Documents', label: 'Documents' },
    { href: '#Presentations', label: 'Presentations' },
    { href: '#About', label: 'About us' },
    { href: '#Contact', label: 'Contact us' },
  ];

  // Scroll Detection & Active Section Highlight
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navItems
        .flatMap((item) =>
          item.subtopics ? [item, ...item.subtopics] : [item]
        )
        .map((item) => {
          const el = document.querySelector(item.href);
          if (el) {
            const rect = el.getBoundingClientRect();
            return {
              id: item.href.replace('#', ''),
              top: rect.top + window.scrollY,
              height: rect.height,
            };
          }
          return null;
        })
        .filter(Boolean);

      const scrollY = window.scrollY + 200;
      const current = sections.find(
        (s) => scrollY >= s.top && scrollY < s.top + s.height
      );

      if (current) setActiveSection(current.id);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
  }, [isOpen]);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const section = document.querySelector(href);
    if (section) {
      const top = section.offsetTop - 100;
      window.scrollTo({ top, behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const baseLink =
    'text-[#E0E7FF] hover:text-white transition-all duration-300 ease';
  const activeGradient =
    'bg-gradient-to-r from-[#4169E1] to-[#38BDF8] bg-clip-text text-transparent font-semibold';

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        isOpen
          ? 'bg-[#0A1F44]'
          : scrolled
          ? 'bg-[#0A1F44]/70 backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-[8%]">
        <div className="flex items-center justify-between h-16">
          <a
            href="#Home"
            onClick={(e) => scrollToSection(e, '#Home')}
            className="text-2xl font-bold bg-gradient-to-r from-[#4169E1] to-[#38BDF8] bg-clip-text text-transparent"
          >
            OptiTech
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-8 flex items-center space-x-8">
              {navItems.map((item) =>
                item.subtopics ? (
                  <div className="group relative" key={item.label}>
                    <button className="flex items-center gap-1 text-sm font-medium text-[#E0E7FF] hover:text-white">
                      {item.label}
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    <div className="absolute left-0 mt-2 w-56 rounded-lg bg-white text-[#0A1F44] shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-50">
                      {item.subtopics.map((sub, idx) => (
                        <a
                          key={idx}
                          href={sub.href}
                          onClick={(e) => scrollToSection(e, sub.href)}
                          className="block px-4 py-2 text-sm hover:bg-[#F1F5F9]"
                        >
                          {sub.label}
                        </a>
                      ))}
                    </div>
                  </div>
                ) : (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href)}
                    className="group relative px-1 py-2 text-sm font-medium"
                  >
                    <span
                      className={`${
                        activeSection === item.href.substring(1)
                          ? activeGradient
                          : baseLink
                      }`}
                    >
                      {item.label}
                    </span>
                    <span
                      className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#4169E1] to-[#38BDF8] transform origin-left transition-transform duration-300 ${
                        activeSection === item.href.substring(1)
                          ? 'scale-x-100'
                          : 'scale-x-0 group-hover:scale-x-100'
                      }`}
                    />
                  </a>
                )
              )}
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`relative p-2 text-[#E0E7FF] hover:text-white transition-transform duration-300 ease-in-out transform ${
                isOpen ? 'rotate-90 scale-125' : 'rotate-0 scale-100'
              }`}
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden fixed inset-x-0 bg-[#0A1F44] transition-all duration-300 ease-in-out ${
          isOpen
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
        style={{ top: '64px' }}
      >
        <div className="flex flex-col h-full px-4 py-6 space-y-3">
          {navItems.map((item, index) =>
            item.subtopics ? (
              <div key={item.label}>
                <button
                  onClick={() =>
                    setOpenDropdown(
                      openDropdown === item.label ? null : item.label
                    )
                  }
                  className="w-full flex items-center justify-between px-4 py-3 text-lg font-medium text-[#E0E7FF] hover:text-white"
                >
                  {item.label}
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      openDropdown === item.label ? 'rotate-180' : 'rotate-0'
                    }`}
                  />
                </button>
                {openDropdown === item.label && (
                  <div className="ml-4 border-l border-white/20 pl-4">
                    {item.subtopics.map((sub, i) => (
                      <a
                        key={i}
                        href={sub.href}
                        onClick={(e) => scrollToSection(e, sub.href)}
                        className={`block py-2 text-sm font-medium ${
                          activeSection === sub.href.substring(1)
                            ? 'bg-gradient-to-r from-[#4169E1] to-[#38BDF8] bg-clip-text text-transparent'
                            : 'text-[#E0E7FF] hover:text-white'
                        }`}
                      >
                        {sub.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className={`block px-4 py-3 text-lg font-medium transition-all duration-300 ease ${
                  activeSection === item.href.substring(1)
                    ? 'bg-gradient-to-r from-[#4169E1] to-[#38BDF8] bg-clip-text text-transparent font-semibold'
                    : 'text-[#E0E7FF] hover:text-white'
                }`}
                style={{
                  transitionDelay: `${index * 80}ms`,
                  transform: isOpen ? 'translateX(0)' : 'translateX(50px)',
                  opacity: isOpen ? 1 : 0,
                }}
              >
                {item.label}
              </a>
            )
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
