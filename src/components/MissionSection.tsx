import { Link } from 'react-router-dom';
import HeroImg from "../assets/hero-img.jpeg"

const MissionSection = () => {
  return (
    <section className="bg-white py-24 px-6 md:px-12">
      <div className="container mx-auto max-w-6xl">
        
        {/* Main Heading Section */}
        <div className="text-center mb-20 max-w-5xl mx-auto">
          {/* <h2 className="text-4xl md:text-6xl font-serif text-slate-800 leading-tight">
            Our mission is to create a world where <br />
            <span className="text-blue-600 italic">every person</span> has the opportunity <br />
            to live a <span className="text-blue-600 italic underline decoration-1 underline-offset-8">healthy</span>, productive life.
          </h2> */}
          <h2 className="text-4xl md:text-6xl font-serif text-slate-800 leading-tight">
            Prajwalika is committed to inspiring confidence, supporting talent, and creating a platform where <span className="text-blue-600 italic">every student</span> can realize their full <span className="text-blue-600 italic underline decoration-1 underline-offset-8">potential</span>.
          </h2>
          
          <Link 
            to="/about" 
            className="inline-block mt-10 px-8 py-3 border border-slate-300 rounded-md text-sm font-bold text-slate-700 hover:bg-slate-50 transition-colors"
          >
            Learn more about our role
          </Link>
        </div>

        {/* Two Column Grid */}
        {/* 🔥 MODERN CARDS */}
<div className="grid md:grid-cols-2 gap-10 lg:gap-14">

  {/* 🔥 CARD 1 */}
  <Link
    to="/gallery"
    className="group block"
  >
    {/* Image */}
    <div className="overflow-hidden rounded-2xl">
      <img
        src={HeroImg}
        alt="Our Work"
        className="w-full h-[280px] object-cover transition-transform duration-700 group-hover:scale-105"
      />
    </div>

    {/* Content */}
    <div className="mt-6">
      <h3 className="text-2xl font-semibold text-slate-900 mb-2">
        Our Work
      </h3>

      <p className="text-slate-600 text-sm leading-relaxed mb-4 max-w-md">
        We work with partners to create opportunities and improve student outcomes through meaningful programs.
      </p>

      <span className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-semibold text-slate-900 border border-slate-300 rounded-md transition-all duration-300 hover:bg-slate-900 hover:text-white hover:border-slate-900">
  Explore work →
</span>
    </div>
  </Link>

  {/* 🔥 CARD 2 */}
  <Link
    to="/about"
    className="group block"
  >
    {/* Image */}
    <div className="overflow-hidden rounded-2xl">
      <img
        src={HeroImg}
        alt="Our Story"
        className="w-full h-[280px] object-cover transition-transform duration-700 group-hover:scale-105"
      />
    </div>

    {/* Content */}
    <div className="mt-6">
      <h3 className="text-2xl font-semibold text-slate-900 mb-2">
        Our Story
      </h3>

      <p className="text-slate-600 text-sm leading-relaxed mb-4 max-w-md">
        A journey of empowering students and building impact through education over the years.
      </p>

      <span className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-semibold text-slate-900 border border-slate-300 rounded-md transition-all duration-300 hover:bg-slate-900 hover:text-white hover:border-slate-900">
  Read Story →
</span>
    </div>
  </Link>

</div>
      </div>
    </section>
  );
};

export default MissionSection;
