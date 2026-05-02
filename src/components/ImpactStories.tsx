import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
// import UserImg from "../assets/Prathap_Image.jpg"

const stories = [
  {
    id: 1,
    name: "Dr. Sarah Khan",
    role: "Health Specialist, Hyderabad",
    quote: "The mobile clinics provided by Prajwalika have reduced child mortality in our district by 40% in just two years.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400"
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    role: "Student, Class of 2023",
    quote: "I never thought college was an option until the scholarship program. Now I'm studying engineering.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400"
  },
  {
    id: 3,
    name: "Anita Desai",
    role: "Community Leader",
    quote: "Empowering women in our village started with the sewing machines. Now we run a full textile cooperative.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400"
  },
  {
    id: 4,
    name: "Michael Chang",
    role: "Volunteer Partner",
    quote: "The transparency and dedication of this foundation are unlike any I've seen. Every dollar truly goes to the cause.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400"
  },
  {
    id: 5,
    name: "Priya Reddy",
    role: "Teacher, Govt School",
    quote: "The new digital library has transformed how my students learn. They are more curious and engaged than ever.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400"
  },
  // Duplicating specifically to ensure the loop is long enough for all screen sizes
  {
    id: 6,
    name: "Vikram Singh",
    role: "Agricultural Advisor",
    quote: "Sustainable farming techniques introduced here have doubled the crop yield for 50 families.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400"
  },
  {
    id: 7,
    name: "Elena Rodriguez",
    role: "Donor, Global Fund",
    quote: "Seeing the direct impact of my contribution on the 'Get Together' events was incredibly moving.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400"
  },
  {
    id: 8,
    name: "Arjun Mehta",
    role: "Alumni Network",
    quote: "It’s not just about money; it’s about mentorship. I’m proud to guide the next generation.",
    image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?q=80&w=400"
  },
  {
    id: 9,
    name: "Fatima Al-Fayed",
    role: "Child Welfare Officer",
    quote: "Nutrition packets for infants have changed the health landscape of our rural centers completely.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400"
  },
  {
    id: 10,
    name: "John Doe",
    role: "Volunteer",
    quote: "A truly life-changing experience working with this team.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400"
  }
];
// Duplicate for infinite loop
const loopStories = [...stories, ...stories];

const ImpactStories = () => {
    const controls = useAnimation();
    useEffect(() => {
    controls.start({
      x: ["0%", "-50%"],
      transition: {
        ease: "linear",
        duration: 25,
        repeat: Infinity,
      },
    });
  }, [controls]);
  return (
    <section className=" py-20 overflow-hidden" style={{backgroundColor: "#f5f5f5"}}>
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-gray-400">
            Stories Of
          </span>
          <h2 className="text-5xl md:text-6xl font-medium text-zinc-900 mt-4 leading-tight">
            Impact
          </h2>
        </div>

        {/* Scroller */}
        <div
          onMouseEnter={() => controls.stop()}
          onMouseLeave={() =>
            controls.start({
              x: ["0%", "-50%"],
              transition: {
                ease: "linear",
                duration: 25,
                repeat: Infinity,
              },
            })
          }
          className="overflow-hidden"
        >
          <motion.div className="flex gap-6 w-max" animate={controls}>
            {loopStories.map((item, index) => (
              <div
                key={index}
                className="group relative w-[300px] min-w-[300px] h-[380px] rounded-2xl overflow-hidden bg-white p-6 flex flex-col justify-between transition-all duration-300"
              >
                {/* 🔹 Background Image (ONLY on hover) */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition duration-500"
                />

                {/* 🔹 Dark overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-500" />

                {/* 🔹 Top Profile Image */}
                <div className="relative z-10">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 rounded-full object-cover border border-gray-200 shadow-sm group-hover:opacity-0 transition duration-300"
                  />
                </div>

                {/* 🔹 Quote (HIDE on hover) */}
                <p className="relative z-10 text-zinc-700 text-sm leading-relaxed mt-6 group-hover:opacity-0 transition duration-300">
                  "{item.quote}"
                </p>

                {/* 🔹 Name + Role (Always visible, styled differently on hover) */}
                <div className="relative z-10 mt-auto">
                  <h4 className="text-lg font-semibold text-zinc-900 group-hover:text-white transition">
                    {item.name}
                  </h4>
                  <p className="text-xs text-gray-400 uppercase tracking-wider group-hover:text-gray-200">
                    {item.role}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ImpactStories;
