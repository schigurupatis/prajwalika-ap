import Hero from '../components/Hero';
import MissionSection from '../components/MissionSection'; // Import here

const Home = () => {
  return (
    <div className="relative">
      <Hero />
      
      {/* New Gates Foundation Style Mission Section */}
      <MissionSection />

      {/* Your previous About Section */}
      <section className="bg-slate-50 py-24 px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-6 font-serif italic">
            "Dreams are not what you see in sleep..."
          </h2>
          <p className="text-slate-600 leading-relaxed text-lg">
            Our annual "Get Together" is more than just a meeting; it's a celebration of 
            the vision shared by our mentors and the bright future of our students.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
