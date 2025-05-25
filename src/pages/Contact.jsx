import React, { useState, useEffect } from "react";
import { Share2, User, Mail, MessageSquare, Send } from "lucide-react";
import Swal from "sweetalert2";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    AOS.init({ once: false });
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
        confirmButtonColor: '#4169E1',
        timer: 2000,
        timerProgressBar: true
      });

      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      Swal.fire({
        title: 'Error!',
        text: 'Something went wrong. Please try again later.',
        icon: 'error',
        confirmButtonColor: '#4169E1'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F9F6F1] text-[#0A1F44] flex items-center justify-center py-20 px-5">
      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div
          className="bg-white rounded-2xl p-10 shadow-xl border border-gray-200"
          data-aos="fade-right"
          data-aos-duration="1200"
        >
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#4169E1] to-[#38BDF8]">
                Contact Me
              </h2>
              <p className="text-[#333333] mt-1 text-sm">
                Got a question? Send me a message, and I’ll get back to you soon.
              </p>
            </div>
            <Share2 className="w-6 h-6 text-[#4169E1] opacity-80" />
          </div>

          <form
            action="https://formsubmit.co/prabhashswarnajith@gmail.com"
            method="POST"
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />

            {/* Name */}
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
                className="w-full pl-12 py-3 bg-white text-[#0A1F44] rounded-lg border border-gray-300 focus:border-[#4169E1] placeholder-gray-400 outline-none"
              />
            </div>

            {/* Email */}
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
                className="w-full pl-12 py-3 bg-white text-[#0A1F44] rounded-lg border border-gray-300 focus:border-[#4169E1] placeholder-gray-400 outline-none"
              />
            </div>

            {/* Message */}
            <div className="relative">
              <MessageSquare className="absolute left-4 top-4 text-gray-400" />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                disabled={isSubmitting}
                required
                className="w-full pl-12 py-3 h-32 resize-none bg-white text-[#0A1F44] rounded-lg border border-gray-300 focus:border-[#4169E1] placeholder-gray-400 outline-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-[#4169E1] to-[#38BDF8] py-3 text-white font-semibold rounded-lg flex items-center justify-center gap-2 hover:scale-105 transition-transform duration-200"
            >
              <Send className="w-5 h-5" />
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

        {/* Contact Details */}
        <div
          className="flex flex-col justify-center space-y-4 pl-6 border-l border-gray-300"
          data-aos="fade-left"
          data-aos-duration="1200"
        >
          <h3 className="text-xl font-semibold text-[#0A1F44]">Contact Details</h3>
          <p className="text-[#4169E1] break-all">prabhashswarnajith@gmail.com</p>
          <p className="text-[#333333] max-w-md">
            Hope this project helped you in some manner. Thank you!
          </p>
          <p className="text-[#0A1F44] font-medium">– Team CocoRemedy</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
