import Hero from '../components/Hero';
import MissionSection from '../components/MissionSection';
import ImpactStories from '../components/ImpactStories';

const Home = () => {
  return (
    <div className="relative">
      <Hero />
      
      {/* New Gates Foundation Style Mission Section */}
      <MissionSection />

      {/* 2. New Infinite Scrolling Stories Section */}
      <ImpactStories />
      
    </div>
  );
};

export default Home;
