// import { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { useNavigate } from 'react-router-dom';
// import sliderImg1 from "../assets/hero-img.jpeg";
// import sliderImg2 from "../assets/mrv2.jpg";
// // import HeadetBg from "../assets/headebg.jpg"

// const slides = [
//   {
//     image: sliderImg1,
//     title: "EMPOWERING YOUNG LIVES",
//     // desc: "A Letter from M.Ravi Chandra IAS."
//   },
//   {
//     image: sliderImg2, 
//     title: "EMPOWERING THE FUTURE",
//     // desc: "Join us in our mission to provide every child with the opportunity to live a healthy, productive life through education and welfare."
//     desc: "A Message from M.Ravi Chandra IAS."
    
//   }
// ];

// const Hero = () => {
//   const [current, setCurrent] = useState(0);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
//     }, 6000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <section className="elative w-full h-screen bg-[#EBCB00] pt-24 pb-8 pl-4 pr-4 md:pl-12 md:pr-12 flex flex-col overflow-hidden">
//     {/* <section className="elative w-full h-screen pt-24 pb-8 pl-4 pr-4 md:pl-12 md:pr-12 flex flex-col overflow-hidden header-bg-img" style={{backgroundImage: "HeadetBg"}}> */}
//       {/* The "Gated" Container: Rounded ONLY on the left side */}
//       <div className="relative flex-grow w-full overflow-hidden rounded-[40px] md:rounded-[100px] shadow-2xl bg-slate-900">
        
//         {/* Animated Background */}
//         <AnimatePresence mode='wait'>
//           <motion.div
//             key={current}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 1 }}
//             className="absolute inset-0 w-full h-full"
//           >
//             <img 
//               src={slides[current].image}
//               alt="Slide"
//               className="w-full h-full object-cover object-center"
//             />
//             {/* Gradient Overlay for text readability (matches the dark left side in screenshot) */}
//             <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent" />
//           </motion.div>
//         </AnimatePresence>

//         {/* Content Area - Left Aligned with precise spacing */}
//         <div className="relative z-10 h-full flex flex-col justify-center px-10 md:px-24 lg:px-40">
//           <AnimatePresence mode='wait'>
//             <motion.div 
//               key={current}
//               initial={{ x: -30, opacity: 0 }}
//               animate={{ x: 0, opacity: 1 }}
//               exit={{ x: 20, opacity: 0 }}
//               transition={{ duration: 0.8 }}
//               className="max-w-2xl text-white"
//             >
//               {/* Title: All Caps, Extra Bold */}
//               <h2 className="text-5xl md:text-5xl font-black leading-[0.95] tracking-tighter mb-8 drop-shadow-md">
//                 {slides[current].title}
//               </h2>
              
//               {/* Description */}
//               <p className="text-lg md:text-md font-bold mb-10 max-w-lg opacity-90 leading-snug">
//                 {slides[current].desc}
//               </p>

//               {/* Button: Squareish with specific yellow bg */}
//               <button 
//                 onClick={() => navigate('/gallery')}
//                 className="bg-[#EBCB00] hover:bg-white text-slate-900 font-bold px-8 py-3 rounded-sm transition-all duration-300 text-sm tracking-wide shadow-lg cursor-pointer"
//               >
//                 Read It Here
//               </button>
//             </motion.div>
//           </AnimatePresence>
//         </div>

//         {/* Pagination Dots - Positioned on the Right Edge as per screenshot */}
//         <div className="absolute right-10 top-1/2 -translate-y-1/2 flex flex-col gap-5 z-20">
//           {slides.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrent(index)}
//               className={`w-2.5 h-2.5 rounded-full transition-all duration-300 border-2 border-white ${
//                 current === index ? 'bg-white scale-125' : 'bg-transparent'
//               }`}
//             />
//           ))}
//           {/* Pause Icon at the bottom of dots */}
//           <div className="mt-4 text-white/70 text-xs cursor-pointer hover:text-white">
//             ⏸
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Search, X, ChevronRight } from 'lucide-react';
import sliderImg1 from "../assets/hero-img.jpeg";
import sliderImg2 from "../assets/mrv2.jpg";

const slides = [
  { image: sliderImg1, title: "Creating Impact Together." },
  { image: sliderImg2, title: "EMPOWERING THE FUTURE" }
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      if (!activeMenu && !isSearchOpen) {
        setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      }
    }, 6000);
    return () => clearInterval(timer);
  }, [activeMenu, isSearchOpen]);

  // 🔁 Toggle Search
  const toggleSearch = () => {
    if (isSearchOpen) {
      setIsSearchOpen(false);
    } else {
      setActiveMenu(null);
      setIsSearchOpen(true);
    }
  };

  // 🔁 Toggle Menu
  const toggleMenu = (menu: string) => {
    setIsSearchOpen(false);
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  // 🔁 Close everything
  const closeAll = () => {
    setActiveMenu(null);
    setIsSearchOpen(false);
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">

      {/* 🔥 HEADER */}
      <nav className="absolute top-0 left-0 w-full z-50 text-white">
        
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />

        <div className="relative z-10">

          {/* Top Bar */}
          <div className="flex justify-end px-6 md:px-12 py-2 text-[13px] gap-6 border-b border-white/20">
            <a href="#">Events</a>
            <a href="#">Careers</a>
            <a href="#">Press</a>
            <a href="#">FAQs</a>

            {/* 🔥 Search Toggle Button */}
            <button 
              onClick={toggleSearch}
              className="flex items-center gap-2 hover:text-orange-400 transition"
            >
              {isSearchOpen ? <X size={16}/> : <Search size={16}/>}
              {isSearchOpen ? 'Close' : 'Search'}
            </button>
          </div>

          {/* Main Nav */}
          <div className="flex items-center px-6 md:px-12 h-20">
            <div className="flex items-center gap-4 mr-12">
              {/* <img src="/logo-icon.png" className="h-10" /> */}
              Prajwalika <br /> Foundation
              <div className="h-10 w-[1px] bg-white/40"/>
              <div className="text-orange-400 font-bold leading-none">
                <span className="text-2xl block">20</span>
                <span className="text-[10px] uppercase">Years</span>
              </div>
            </div>

            <ul className="flex items-center h-full font-bold text-[15px]">
              {['What We Do', 'Where We Work', 'About Us', 'Our Research'].map((item) => (
                <li
                  key={item}
                  onClick={() => toggleMenu(item)}
                  className="h-full flex items-center px-4 cursor-pointer hover:text-orange-400"
                >
                  {item}
                  <ChevronDown size={14} className={`ml-1 ${activeMenu === item ? 'rotate-180' : ''}`} />
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 🔥 SEARCH OVERLAY */}
<AnimatePresence>
  {isSearchOpen && (
    <>
      {/* Background dim */}
      <motion.div
        className="fixed inset-0 bg-black/50 z-[60]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={closeAll}
      />

      {/* Search Panel */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -100, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 w-full bg-white z-[70] pt-10 pb-8 px-6 md:px-16 shadow-lg"
      >
        <div className="max-w-7xl mx-auto relative">

          {/* 🔥 Close Button (top-right like screenshot) */}
          <button
  onClick={closeAll}
  className="absolute right-0 top-0 p-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
>
  <X size={20} className="text-black" />
</button>

          {/* 🔥 Search Input Row */}
          <div className="flex items-center gap-4 border-b border-gray-300 pb-4 mt-6">

            {/* Icon */}
            <Search className="text-orange-500" size={22} />

            {/* Input */}
            <input
              type="text"
              placeholder="Search the site"
              autoFocus
              className="w-full text-lg outline-none placeholder-gray-500"
            />
          </div>

        </div>
      </motion.div>
    </>
  )}
</AnimatePresence>

        {/* 🔥 MEGA MENU */}
        <AnimatePresence>
          {activeMenu && !isSearchOpen && (
            <>
              <motion.div
                className="fixed inset-0 bg-black/50 z-[55]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={closeAll}
              />

              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                className="absolute top-full left-0 w-full bg-white text-black z-[60]"
              >
                <div className="max-w-7xl mx-auto px-12 py-12 flex justify-between">
                  <div className="flex flex-col gap-6 w-1/3">
                    <h2 className="text-3xl font-black flex items-center gap-2">
                      {activeMenu} <ChevronRight size={28} />
                    </h2>

                    <nav className="flex flex-col gap-4">
                      <button className="text-left font-bold text-lg hover:text-blue-800">Our Strategy</button>
                      <button className="text-left font-bold text-lg flex justify-between hover:text-blue-800">
                        Programs <ChevronRight size={18} />
                      </button>
                      <button className="text-left font-bold text-lg flex justify-between hover:text-blue-800">
                        Focus Areas <ChevronRight size={18} />
                      </button>
                      <button className="text-left font-bold text-lg hover:text-blue-800">Impact Stories</button>
                    </nav>
                  </div>

                  <button
  onClick={closeAll}
  className="absolute right-8 top-8 p-2 border border-gray-300 rounded-md hover:bg-gray-100 transition h-fit"
>
  <X size={18} className="text-black" />
</button>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

      </nav>

      {/* 🔥 SLIDER */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={current}
            src={slides[current].image}
            className="w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* TEXT */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-24 px-6 md:px-24">
        <h1 className="text-white text-6xl md:text-[100px] font-black mb-8">
          {slides[current].title}
        </h1>

        <button className="inline-flex items-center gap-3 border-2 border-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-500 w-fit self-start">
          → What we do
        </button>
      </div>
    </section>
  );
};

export default Hero;
