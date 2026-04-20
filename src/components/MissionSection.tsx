import { Link } from 'react-router-dom';

const MissionSection = () => {
  return (
    <section className="bg-white py-24 px-6 md:px-12">
      <div className="container mx-auto max-w-6xl">
        
        {/* Main Heading Section */}
        <div className="text-center mb-20 max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-serif text-slate-800 leading-tight">
            Our mission is to create a world where <br />
            <span className="text-blue-600 italic">every person</span> has the opportunity <br />
            to live a <span className="text-blue-600 italic underline decoration-1 underline-offset-8">healthy</span>, productive life.
          </h2>
          
          <Link 
            to="/about" 
            className="inline-block mt-10 px-8 py-3 border border-slate-300 rounded-md text-sm font-bold text-slate-700 hover:bg-slate-50 transition-colors"
          >
            Learn more about our role
          </Link>
        </div>

        {/* Two Column Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Card 1: Our Work */}
          <Link to="/gallery" className="group relative flex flex-col md:flex-row gap-6 items-start p-6 rounded-2xl transition-all duration-300 hover:bg-[#F0F7FF]">
            {/* Yellow Accent Bar (Visible only on hover) */}
            <div className="absolute left-0 top-6 bottom-6 w-1.5 bg-[#EBCB00] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-r-full"></div>
            
            <div className="w-full md:w-1/2 aspect-[4/3] rounded-xl overflow-hidden shadow-sm">
              <img 
                src="https://unsplash.com" 
                alt="Our Work" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="w-full md:w-1/2 pt-2 pr-4">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Our work</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                We work with partners around the world to tackle big challenges and improve people's lives.
              </p>
              <span className="text-sm font-bold border-b-2 border-slate-900 pb-1 group-hover:text-blue-600 group-hover:border-blue-600 transition-all">
                Learn more about our work
              </span>
            </div>
          </Link>

          {/* Card 2: Our Story */}
          <Link to="/about" className="group relative flex flex-col md:flex-row gap-6 items-start p-6 rounded-2xl transition-all duration-300 hover:bg-[#F0F7FF]">
            {/* Yellow Accent Bar (Visible only on hover) */}
            <div className="absolute left-0 top-6 bottom-6 w-1.5 bg-[#EBCB00] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-r-full"></div>

            <div className="w-full md:w-1/2 aspect-[4/3] rounded-xl overflow-hidden shadow-sm">
              <img 
                src="https://unsplash.com" 
                alt="Our Story" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="w-full md:w-1/2 pt-2 pr-4">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Our story</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                For over 15 years, the Prajwalika Foundation has been committed to tackling inequities.
              </p>
              <span className="text-sm font-bold border-b-2 border-slate-900 pb-1 group-hover:text-blue-600 group-hover:border-blue-600 transition-all">
                Explore our story
              </span>
            </div>
          </Link>

        </div>
      </div>
    </section>
  );
};

export default MissionSection;
