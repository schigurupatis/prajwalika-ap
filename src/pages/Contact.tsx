import React from 'react';

const Contact = () => {
  return (
    <div className="pt-32 pb-20 bg-white">
      {/* Header Section */}
      <div className="container mx-auto px-6 mb-16 text-center">
        <h4 className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-4">Get In Touch</h4>
        <h1 className="text-5xl font-black text-slate-900">We'd Love to <span className="text-orange-500 text-6xl italic block md:inline">Hear From You.</span></h1>
        <p className="mt-6 text-slate-500 max-w-2xl mx-auto text-lg">
          Have questions about our welfare programs or want to join our next get-together? Drop us a message below.
        </p>
      </div>

      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Side: Info & Map */}
          <div className="space-y-10">
            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
                <div className="text-3xl mb-4">📍</div>
                <h3 className="font-bold text-slate-900 mb-2">Our Office</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  123 Welfare Street, Education Hub,<br />
                  Hyderabad, Telangana - 500001
                </p>
              </div>
              <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
                <div className="text-3xl mb-4">📞</div>
                <h3 className="font-bold text-slate-900 mb-2">Call Us</h3>
                <p className="text-slate-500 text-sm">
                  Main: +91 98765 43210<br />
                  Support: +91 88888 77777
                </p>
              </div>
            </div>

            {/* Google Maps Placeholder */}
            <div className="w-full h-80 rounded-3xl overflow-hidden shadow-2xl shadow-slate-200 border-4 border-white relative">
                <iframe 
                    title="Location Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3868.4757379362604!2d79.85756257509789!3d14.166891286269642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4ce3ec9e912349%3A0x5c5d6f2fb3127ae5!2sAudisankara%20University!5e0!3m2!1sen!2sin!4v1776327652623!5m2!1sen!2sin" 
                    className="absolute inset-0 w-full h-full"
                    style={{ border: 0 }} 
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl shadow-slate-200 border border-slate-100">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Subject</label>
                <select className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all appearance-none">
                  <option>General Inquiry</option>
                  <option>Donation Support</option>
                  <option>Event Registration</option>
                  <option>Volunteer with Us</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Your Message</label>
                <textarea 
                  rows={5} 
                  placeholder="How can we help you?"
                  className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"
                ></textarea>
              </div>

              <button className="w-full bg-slate-900 text-white font-bold py-5 rounded-2xl shadow-xl hover:bg-orange-500 transition-all transform active:scale-[0.98]">
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
