import heroImage from '../assets/hero-img.jpeg';


const Hero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} // Ensure your image name matches exactly
          alt="Dr. APJ Abdul Kalam with students"
          className="h-full w-full object-cover"
        />
        {/* Dark overlay to make the white header text pop */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/60"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
        <h1 className="mb-6 text-5xl font-black uppercase tracking-tighter md:text-7xl">
          Empowering <span className="text-orange-500">Dreams</span>
        </h1>
        <p className="max-w-2xl text-lg font-medium opacity-90 md:text-xl">
          Continuing the legacy of Dr. A.P.J. Abdul Kalam through student welfare, 
          innovation, and community excellence.
        </p>
        <div className="mt-10 flex gap-4">
          <button className="rounded-full bg-orange-500 px-8 py-4 font-bold transition-transform hover:scale-105 active:scale-95">
            Explore Gallery
          </button>
          <button className="rounded-full border-2 border-white px-8 py-4 font-bold backdrop-blur-md transition-all hover:bg-white hover:text-black">
            Our Mission
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
