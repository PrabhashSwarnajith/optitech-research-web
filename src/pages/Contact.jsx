import React, { useState, useEffect } from 'react';
import { Share2, User, Mail, MessageSquare, Send } from 'lucide-react';
import Swal from 'sweetalert2';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    Swal.fire({
      title: 'Sending Message...',
      html: 'Please wait while we send your message',
      allowOutsideClick: false,
      didOpen: () => Swal.showLoading(),
    });

    try {
      const form = e.target;
      const formData = new FormData(form);
      await form.submit();

      Swal.fire({
        title: 'Success!',
        text: 'Your message has been sent successfully!',
        icon: 'success',
        confirmButtonColor: '#4F46E5',
        timer: 2000,
        timerProgressBar: true,
      });

      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      Swal.fire({
        title: 'Error!',
        text: 'Something went wrong. Please try again later.',
        icon: 'error',
        confirmButtonColor: '#4F46E5',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="Contact"
      className="min-h-screen bg-gradient-to-b from-[#F0F9FF] to-[#FFFFFF] text-[#0F172A] flex items-center justify-center py-20 px-4 sm:px-8 md:px-16"
    >
      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-12 items-center">
        {/* Contact Form */}
        <div
          className="bg-white rounded-2xl p-10 shadow-xl border border-gray-200"
          data-aos="fade-right"
        >
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366F1] to-[#06B6D4]">
                Contact Us
              </h2>
              <p className="text-gray-600 mt-1 text-sm">
                Got a question? Send us a message and we’ll respond promptly.
              </p>
            </div>
            <Share2 className="w-6 h-6 text-[#6366F1] opacity-80" />
          </div>

          <form
            action="https://formsubmit.co/prabhashswarnajith@gmail.com"
            method="POST"
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />

            {/* Name Field */}
            <div className="relative">
              <User className="absolute left-4 top-4 text-gray-400" />
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                disabled={isSubmitting}
                required
                className="w-full pl-12 py-3 bg-white text-[#0F172A] rounded-lg border border-gray-300 focus:border-[#6366F1] placeholder-gray-400 outline-none transition"
              />
            </div>

            {/* Email Field */}
            <div className="relative">
              <Mail className="absolute left-4 top-4 text-gray-400" />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                disabled={isSubmitting}
                required
                className="w-full pl-12 py-3 bg-white text-[#0F172A] rounded-lg border border-gray-300 focus:border-[#6366F1] placeholder-gray-400 outline-none transition"
              />
            </div>

            {/* Message Field */}
            <div className="relative">
              <MessageSquare className="absolute left-4 top-4 text-gray-400" />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                disabled={isSubmitting}
                required
                className="w-full pl-12 py-3 h-32 resize-none bg-white text-[#0F172A] rounded-lg border border-gray-300 focus:border-[#6366F1] placeholder-gray-400 outline-none transition"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-[#6366F1] to-[#06B6D4] py-3 text-white font-semibold rounded-lg flex items-center justify-center gap-2 hover:scale-105 transition-transform duration-200"
            >
              <Send className="w-5 h-5" />
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>

        {/* Contact Details */}
        <div
          className="flex flex-col justify-center space-y-4 md:pl-8"
          data-aos="fade-left"
        >
          <h3 className="text-2xl font-semibold text-[#0F172A]">
            Contact Details
          </h3>
          <p className="text-[#6366F1] font-medium break-all">
            optitechrp@gmail.com
          </p>
          <p className="text-gray-600 max-w-md text-sm">
            We’d love to hear your feedback or answer any inquiries related to
            the project or research.
          </p>
          <p className="text-[#0F172A] font-semibold">— Team OptiTech</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
