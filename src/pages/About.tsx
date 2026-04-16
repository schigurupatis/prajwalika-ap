

const About = () => {
  return (
    <div className="pt-32 pb-20">
      {/* Header Section */}
      <div className="container mx-auto px-6 mb-20 text-center">
        <h4 className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-4">Our Story</h4>
        <h1 className="text-5xl md:text-6xl font-black text-slate-900 leading-tight">
          Continuing the Legacy <br /> of <span className="text-orange-500 underline decoration-slate-200 underline-offset-8">Inspiration.</span>
        </h1>
      </div>

      {/* Mission & Vision Section */}
      <section className="bg-slate-50 py-20 px-6">
        <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-12">
          {/* Mission Card */}
          <div className="bg-white p-10 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center text-2xl mb-6 font-bold">M</div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Mission</h2>
            <p className="text-slate-600 leading-relaxed text-lg">
              To empower the youth through educational support, community welfare, and the shared values of Dr. A.P.J. Abdul Kalam. We strive to create a network of excellence where every student has the tools to succeed.
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-blue-900 p-10 rounded-3xl shadow-xl shadow-blue-900/20 text-white">
            <div className="w-12 h-12 bg-orange-500 text-white rounded-2xl flex items-center justify-center text-2xl mb-6 font-bold">V</div>
            <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
            <p className="text-blue-100 leading-relaxed text-lg">
              To build a global community of inspired leaders who contribute to society’s growth. We envision a future where the "Jewels of Welfare" serve as the backbone of social and scientific innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values Grid */}
      <section className="py-24 px-6 container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900">What Drives Us</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            { title: "Integrity", desc: "Walking the path of honesty and hard work.", icon: "💎" },
            { title: "Innovation", desc: "Using knowledge to solve modern problems.", icon: "🚀" },
            { title: "Inclusion", desc: "Leaving no student behind in the journey.", icon: "🤝" }
          ].map((item, index) => (
            <div key={index} className="p-8 rounded-2xl border border-slate-100 hover:bg-white hover:shadow-2xl transition-all group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-slate-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
