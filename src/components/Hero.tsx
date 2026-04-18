import { useNavigate } from 'react-router-dom';
import heroImage from '../assets/hero-img.jpeg';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative h-screen w-full bg-yellow-400 p-4 md:p-8"> {/* Yellow outer background like Gates */}
      <div className="relative h-full w-full overflow-hidden rounded-[40px] md:rounded-[80px]"> {/* The Frame Effect */}
        
        {/* Background Image */}
        <img 
          src={heroImage} 
          className="absolute inset-0 h-full w-full object-cover"
          alt="Hero"
        />
        
        {/* Subtle Darkening Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Text Content - Left Aligned */}
        <div className="relative z-10 flex h-full items-center px-8 md:px-20">
          <div className="max-w-2xl text-white">
            <h1 className="mb-6 text-5xl font-bold leading-tight md:text-7xl uppercase">
              Our efforts strive toward one goal
            </h1>
            <p className="mb-10 text-xl font-medium md:text-2xl">
              That every child, no matter where they are born, can reach their full potential.
            </p>
            <button 
              onClick={() => navigate('/gallery')}
              className="bg-yellow-400 text-slate-900 px-8 py-4 font-bold text-lg rounded-sm hover:bg-white transition-colors"
            >
              See our focus areas
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
