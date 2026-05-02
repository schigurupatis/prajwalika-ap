import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import sliderImg1 from "../assets/hero-img.jpeg";
// import HeadetBg from "../assets/headebg.jpg"

const slides = [
  {
    image: sliderImg1,
    title: "EMPOWERING YOUNG LIVES",
    desc: "A Letter from M.Ravi Chandra IAS."
  },
  {
    image: "https://unsplash.com", 
    title: "EMPOWERING THE FUTURE",
    desc: "Join us in our mission to provide every child with the opportunity to live a healthy, productive life through education and welfare."
  }
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="elative w-full h-screen bg-[#EBCB00] pt-24 pb-8 pl-4 pr-4 md:pl-12 md:pr-12 flex flex-col overflow-hidden">
    {/* <section className="elative w-full h-screen pt-24 pb-8 pl-4 pr-4 md:pl-12 md:pr-12 flex flex-col overflow-hidden header-bg-img" style={{backgroundImage: "HeadetBg"}}> */}
      {/* The "Gated" Container: Rounded ONLY on the left side */}
      <div className="relative flex-grow w-full overflow-hidden rounded-[40px] md:rounded-[100px] shadow-2xl bg-slate-900">
        
        {/* Animated Background */}
        <AnimatePresence mode='wait'>
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 w-full h-full"
          >
            <img 
              src={slides[current].image}
              alt="Slide"
              className="w-full h-full object-cover object-center"
            />
            {/* Gradient Overlay for text readability (matches the dark left side in screenshot) */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent" />
          </motion.div>
        </AnimatePresence>

        {/* Content Area - Left Aligned with precise spacing */}
        <div className="relative z-10 h-full flex flex-col justify-center px-10 md:px-24 lg:px-40">
          <AnimatePresence mode='wait'>
            <motion.div 
              key={current}
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 20, opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl text-white"
            >
              {/* Title: All Caps, Extra Bold */}
              <h2 className="text-5xl md:text-5xl font-black leading-[0.95] tracking-tighter mb-8 drop-shadow-md">
                {slides[current].title}
              </h2>
              
              {/* Description */}
              <p className="text-lg md:text-md font-bold mb-10 max-w-lg opacity-90 leading-snug">
                {slides[current].desc}
              </p>

              {/* Button: Squareish with specific yellow bg */}
              <button 
                onClick={() => navigate('/gallery')}
                className="bg-[#EBCB00] hover:bg-white text-slate-900 font-bold px-8 py-3 rounded-sm transition-all duration-300 text-sm tracking-wide shadow-lg cursor-pointer"
              >
                Read It Here
              </button>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pagination Dots - Positioned on the Right Edge as per screenshot */}
        <div className="absolute right-10 top-1/2 -translate-y-1/2 flex flex-col gap-5 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 border-2 border-white ${
                current === index ? 'bg-white scale-125' : 'bg-transparent'
              }`}
            />
          ))}
          {/* Pause Icon at the bottom of dots */}
          <div className="mt-4 text-white/70 text-xs cursor-pointer hover:text-white">
            ⏸
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
