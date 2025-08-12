import { motion } from 'framer-motion';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useEffect } from 'react';

const Gallery = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//www.instagram.com/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const images = [
    {
      src: "/lovable-uploads/9858f506-dbeb-4741-bb8a-4f7f37ad0853.png",
      alt: "Musician performing at sunset",
      caption: "Live Music Performance"
    },
    {
      src: "/lovable-uploads/60fd67fe-ed05-4f4f-ba2e-e91a51e6678e.png",
      alt: "Night event atmosphere with crowd",
      caption: "Evening Vibes at Vizphoria"
    },
    {
      src: "/photo-1473177104440-ffee2f376098",
      alt: "Festival performance",
      caption: "Live Performances"
    },
    {
      src: "/photo-1494891848038-7bd202a2afeb",
      alt: "Cultural event",
      caption: "Cultural Showcase"
    },
    {
      src: "/photo-1551038247-3d9af20df552",
      alt: "Dance performance",
      caption: "Dance Extravaganza"
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-background/95 to-background">
      <div className="container px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12 gradient-text"
        >
          Festival Highlights
        </motion.h2>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto mb-20"
        >
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
                <Dialog>
                  <DialogTrigger asChild>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      className="relative aspect-[4/3] overflow-hidden rounded-xl glass-card group cursor-pointer"
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-carnival-red/0 group-hover:bg-carnival-red/20 transition-all duration-300 flex items-center justify-center">
                        <span className="text-carnival-cream opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-bold text-lg">
                          View Image
                        </span>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                        <p className="text-carnival-cream text-sm font-medium">
                          {image.caption}
                        </p>
                      </div>
                    </motion.div>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl w-full h-auto">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-auto object-contain rounded-lg"
                    />
                  </DialogContent>
                </Dialog>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:block">
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </div>
        </Carousel>

        {/* Stay Tuned Section with Instagram Embed */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
            Stay Tuned For More Updates
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Instagram Embed */}
            <div className="glass-card p-4 rounded-2xl backdrop-blur-lg h-full">
              <div className="instagram-media-container relative overflow-hidden rounded-xl shadow-2xl">
                <blockquote 
                  className="instagram-media" 
                  data-instgrm-permalink="https://www.instagram.com/reel/DE2GGNnyOao/"
                  data-instgrm-version="14"
                  style={{
                    background: '#FFF',
                    border: '0',
                    borderRadius: '12px',
                    boxShadow: '0 0 20px rgba(0,0,0,0.1)',
                    margin: '1px',
                    maxWidth: '540px',
                    minWidth: '326px',
                    padding: '0',
                    width: '99.375%'
                  }}
                >
                </blockquote>
              </div>
            </div>

            {/* Follow Section */}
            <div className="glass-card p-8 rounded-2xl backdrop-blur-lg flex flex-col justify-center items-center">
              <h3 className="text-2xl font-bold mb-6 gradient-text">Follow Us on Instagram</h3>
              <p className="text-carnival-brown mb-8 text-center">
                Stay updated with the latest news, behind-the-scenes content, and exclusive announcements!
              </p>
              <a 
                href="https://www.instagram.com/vizphoria.fest"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-carnival-red text-carnival-cream rounded-full transition-all duration-300 font-medium hover:bg-carnival-darkRed group"
              >
                Follow @vizphoria.fest
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className="group-hover:rotate-12 transition-transform duration-300"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;