import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import sliderImg1 from "../assets/hero-img.jpeg"

const slides = [
  {
    image: sliderImg1, // Global Welfare
    title: "Our efforts strive toward one goal",
    desc: "That every child, no matter where they are born, can reach their full potential."
  },
  {
    image: "https://unsplash.com", // Education
    title: "Empowering through Education",
    desc: "Opening doors to knowledge for the next generation of innovators."
  },
  {
    image: "https://unsplash.com", // Community
    title: "Stronger Together",
    desc: "Building resilient communities through shared vision and collective action."
  },
  {
    image: "https://unsplash.com", // Innovation
    title: "Innovating for the Future",
    desc: "Following the legacy of Dr. Kalam to solve today's most pressing challenges."
  }
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  // Auto-slide logic (every 5 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full min-h-screen bg-[#EBCB00] pt-24 pb-8 px-4 md:px-12 flex flex-col overflow-hidden">
      <div className="relative flex-grow w-full overflow-hidden rounded-[40px] md:rounded-[100px] shadow-2xl">
        
        {/* Animated Background Container */}
        <AnimatePresence mode='wait'>
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <img 
              src={slides[current].image}
              alt="Slide"
              className="w-full h-full object-cover"
            />
            {/* Subtle Overlay to make text readable */}
            <div className="absolute inset-0 bg-black/40" />
          </motion.div>
        </AnimatePresence>

        {/* Text Content Area */}
        <div className="relative z-10 h-full flex items-center px-8 md:px-20 lg:px-32">
          <AnimatePresence mode='wait'>
            <motion.div 
              key={current}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-3xl text-white"
            >
              <h2 className="text-4xl md:text-7xl font-black uppercase leading-[1.1] tracking-tight mb-6">
                {slides[current].title.split(' ').map((word, i) => (
                  <span key={i} className="inline-block mr-3">{word}</span>
                ))}
              </h2>
              
              <p className="text-lg md:text-2xl font-medium mb-10 max-w-xl opacity-90 leading-relaxed">
                {slides[current].desc}
              </p>

              <button 
                onClick={() => navigate('/gallery')}
                className="bg-[#EBCB00] hover:bg-white text-slate-900 font-bold px-8 py-4 rounded-md transition-all duration-300 text-sm md:text-base uppercase tracking-wider shadow-lg"
              >
                See our focus areas
              </button>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Custom Pagination Side-Dots */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 border-2 border-white ${
                current === index ? 'bg-white scale-125' : 'bg-transparent hover:bg-white/30'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
