"use client";
import React, { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showDemoMessage, setShowDemoMessage] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setShowDemoMessage(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setShowDemoMessage(false), 5000);
  };

  const contactMethods = [
    {
      icon: (
        <svg
          className="w-5 h-5 sm:w-6 sm:h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498V19a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"
          />
        </svg>
      ),
      title: "Call Us",
      description: "+91 98765 43210",
      details: "Mon-Sat | 9am - 8pm",
    },
    {
      icon: (
        <svg
          className="w-5 h-5 sm:w-6 sm:h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      title: "Email Us",
      description: "support@mossports.com",
      details: "Replies within 24 hrs",
    },
    {
      icon: (
        <svg
          className="w-5 h-5 sm:w-6 sm:h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 11a3 3 0 11-6 0 3 3 0z"
          />
        </svg>
      ),
      title: "Visit Us",
      description: "Mos Sports Shop, Meerut",
      details: "Cricket Equipment Zone",
    },
    {
      icon: (
        <svg
          className="w-5 h-5 sm:w-6 sm:h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Store Hours",
      description: "Open All Week",
      details: "9:00 AM - 8:00 PM",
    },
  ];

  return (
    <section
      id="contact"
      className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white relative overflow-hidden"
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#10b981_1px,transparent_0)] bg-[length:20px_20px]"></div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-10 sm:top-16 left-5 sm:left-10 w-16 h-16 sm:w-20 sm:h-20 bg-emerald-100 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-12 h-12 sm:w-16 sm:h-16 bg-emerald-50 rounded-full blur-md"></div>
      <div
        className="absolute top-1/3 right-1/4 w-3 h-3 sm:w-4 sm:h-4 bg-emerald-200 rounded-full animate-ping"
        style={{ animationDuration: "3s" }}
      ></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center justify-center bg-emerald-100 text-emerald-700 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
            GET IN TOUCH
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 sm:mb-3 px-4">
            Contact <span className="text-emerald-600">Mos Sports</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base md:text-lg px-4">
            Have questions about cricket gear? We&apos;ll help you choose what suits
            your style and performance best.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 max-w-6xl mx-auto">
          {/* Left Info */}
          <div className="space-y-5 sm:space-y-6 md:space-y-8">
            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-emerald-600 mb-2 sm:mb-3 md:mb-4">
                Let&apos;s Gear Up for the Game
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg">
                From professional bats to gloves and kits, we provide everything
                a cricketer needs. Get in touch for custom orders or bulk deals.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-3 sm:space-y-4">
              {contactMethods.map((method, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 md:p-5 bg-gray-50 rounded-xl border border-gray-200 hover:border-emerald-300 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-emerald-500 rounded-lg flex items-center justify-center text-white shrink-0">
                    {method.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-gray-900 font-semibold text-sm sm:text-base md:text-lg">
                      {method.title}
                    </h4>
                    <p className="text-emerald-600 font-medium text-sm sm:text-base md:text-lg break-words">
                      {method.description}
                    </p>
                    <p className="text-gray-500 text-xs sm:text-sm md:text-base">
                      {method.details}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-3 sm:pt-4 md:pt-6">
              <h4 className="text-gray-900 font-semibold text-base sm:text-lg md:text-xl mb-3 sm:mb-4">
                Follow Us
              </h4>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {[
                  {
                    icon: "📘",
                    label: "Facebook",
                    color: "hover:bg-emerald-500",
                  },
                  {
                    icon: "📷",
                    label: "Instagram",
                    color: "hover:bg-emerald-500",
                  },
                  {
                    icon: "🐦",
                    label: "Twitter",
                    color: "hover:bg-emerald-500",
                  },
                  {
                    icon: "📺",
                    label: "YouTube",
                    color: "hover:bg-emerald-500",
                  },
                ].map((social, index) => (
                  <button
                    key={index}
                    aria-label={social.label}
                    className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gray-100 rounded-lg flex items-center justify-center text-base sm:text-lg md:text-xl border border-gray-200 transition-all duration-300 ${social.color} hover:text-white hover:scale-110 hover:border-emerald-500`}
                  >
                    {social.icon}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-emerald-50 to-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 border border-emerald-100 shadow-lg">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-4 sm:mb-5 md:mb-6">
              Send Us a Message
            </h3>

            {showDemoMessage && (
              <div className="mb-4 sm:mb-5 md:mb-6 p-3 sm:p-4 bg-emerald-100 border border-emerald-400 rounded-lg">
                <p className="text-emerald-800 font-semibold text-sm sm:text-base">
                  ✅ Demo message sent successfully!
                </p>
              </div>
            )}

            <form
              className="space-y-4 sm:space-y-5 md:space-y-6"
              onSubmit={handleSubmit}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
                <input
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  required
                  className="w-full px-3 py-2.5 sm:px-4 sm:py-3 md:px-5 md:py-3.5 bg-white border border-gray-300 rounded-lg sm:rounded-xl text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 focus:outline-none text-sm sm:text-base transition-all"
                />
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  required
                  className="w-full px-3 py-2.5 sm:px-4 sm:py-3 md:px-5 md:py-3.5 bg-white border border-gray-300 rounded-lg sm:rounded-xl text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 focus:outline-none text-sm sm:text-base transition-all"
                />
              </div>

              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-3 py-2.5 sm:px-4 sm:py-3 md:px-5 md:py-3.5 bg-white border border-gray-300 rounded-lg sm:rounded-xl text-gray-900 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 focus:outline-none text-sm sm:text-base transition-all"
              >
                <option value="">Select Topic</option>
                <option value="product">Product Inquiry</option>
                <option value="bulk">Bulk Orders</option>
                <option value="custom">Custom Equipment</option>
                <option value="other">Other</option>
              </select>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder="Your message..."
                required
                className="w-full px-3 py-2.5 sm:px-4 sm:py-3 md:px-5 md:py-3.5 bg-white border border-gray-300 rounded-lg sm:rounded-xl text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 focus:outline-none resize-none text-sm sm:text-base transition-all"
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 sm:py-3.5 md:py-4 bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-400 text-white font-medium sm:font-semibold rounded-lg sm:rounded-xl transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base md:text-lg shadow-md hover:shadow-lg"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7-7 7M5 5l7 7-7 7"
                      />
                    </svg>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Brands */}
        <div className="mt-10 sm:mt-12 md:mt-16 lg:mt-20 pt-6 sm:pt-8 md:pt-10 border-t border-gray-200">
          <h4 className="text-gray-900 text-center text-sm sm:text-base md:text-lg font-semibold mb-5 sm:mb-6 md:mb-8">
            Trusted by Top Cricket Brands
          </h4>
          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 md:gap-6">
            {["Kookaburra", "Gray-Nicolls", "GM", "SS", "MRF", "SG"].map(
              (brand) => (
                <div
                  key={brand}
                  className="text-emerald-600 text-xs sm:text-sm md:text-base font-bold px-3 py-2 sm:px-4 sm:py-2.5 md:px-6 md:py-3 bg-gray-50 rounded-lg sm:rounded-xl border border-gray-200 hover:border-emerald-400 hover:bg-emerald-50 transition-all duration-300"
                >
                  {brand}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
