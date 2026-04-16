import { useState } from 'react';

const Gallery = () => {
  const [filter, setFilter] = useState('All');
  
  const categories = ['All', '2024', '2023', '2022', 'Events'];
  
  // Sample data - You can add your actual image paths here
  const images = [
    { id: 1, category: '2024', url: 'https://unsplash.com', size: 'tall' },
    { id: 2, category: '2023', url: 'https://unsplash.com', size: 'wide' },
    { id: 3, category: '2024', url: 'https://unsplash.com', size: 'square' },
    { id: 4, category: 'Events', url: 'https://unsplash.com', size: 'tall' },
    { id: 5, category: '2022', url: 'https://unsplash.com', size: 'square' },
    { id: 6, category: '2023', url: 'https://unsplash.com', size: 'wide' },
  ];

  const filteredImages = filter === 'All' ? images : images.filter(img => img.category === filter);

  return (
    <div className="pt-32 pb-20 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-6">
        
        {/* Title Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-black text-slate-900 mb-4">Explore our <span className="text-orange-500">Moments.</span></h1>
          <p className="text-slate-500 text-lg">A visual journey through our community and growth.</p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-8 py-3 rounded-full font-bold transition-all ${
                filter === cat 
                ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/30 scale-105' 
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Modern Masonry-style Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredImages.map((img) => (
            <div 
              key={img.id} 
              className="relative group overflow-hidden rounded-[2rem] border-4 border-white shadow-xl hover:shadow-2xl transition-all cursor-zoom-in"
            >
              <img 
                src={img.url} 
                alt="Gallery" 
                className="w-full object-cover group-hover:scale-110 transition-transform duration-700" 
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                <div className="text-white">
                  <span className="bg-orange-500 text-[10px] font-bold uppercase px-3 py-1 rounded-full mb-2 block w-fit">
                    {img.category}
                  </span >
                  <h3 className="text-xl font-bold">Annual Get-Together</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;





// import { useState, useEffect } from 'react';

// // Define the shape of the data from the API
// interface Photo {
//   id: number;
//   title: string;
//   url: string;
//   thumbnailUrl: string;
// }

// const Gallery = () => {
//   const [photos, setPhotos] = useState<Photo[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Correct full URL with the /photos endpoint and limit
//     fetch('https://typicode.com')
//         .then((res) => {
//         if (!res.ok) throw new Error('Network response was not ok');
//         return res.json();
//         })
//         .then((data) => {
//         setPhotos(data);
//         setLoading(false);
//         })
//         .catch((err) => {
//         console.error("Gallery Load Error:", err);
//         setLoading(false); // Stop loading even if it fails
//         });
//     }, []);


//   if (loading) {
//     return (
//       <div className="h-screen flex items-center justify-center">
//         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-orange-500"></div>
//       </div>
//     );
//   }

//   return (
//     <div className="pt-32 pb-20 bg-slate-50 min-h-screen">
//       <div className="container mx-auto px-6">
//         <div className="text-center mb-16">
//           <h1 className="text-5xl font-black text-slate-900 mb-4">
//             Explore our <span className="text-orange-500">Moments.</span>
//           </h1>
//           <p className="text-slate-500 text-lg">Sample images pulled from live API.</p>
//         </div>

//         {/* Masonry-style Grid */}
//         <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
//           {photos.map((photo) => (
//             <div 
//               key={photo.id} 
//               className="relative group overflow-hidden rounded-[2rem] border-4 border-white shadow-xl hover:shadow-2xl transition-all"
//             >
//               {/* API returns 600x600 images */}
//               {/* Replace your <img> tag with this to get random heights for a better masonry look */}
//                 <img 
//                 src={`https://picsum.photos{photo.id + 10}/400/${photo.id % 2 === 0 ? '600' : '400'}`} 
//                 alt={photo.title} 
//                 className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500" 
//                 />

              
//               {/* Hover Overlay */}
//               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
//                 <p className="text-white text-sm font-semibold capitalize leading-tight">
//                   {photo.title}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Gallery;
