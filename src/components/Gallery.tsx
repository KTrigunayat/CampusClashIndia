import { motion } from 'framer-motion';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useEffect } from 'react';

const Gallery = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/lightgallery@2.0.0-beta.4/lightgallery.min.js';
    script.async = true;
    document.head.appendChild(script);

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdn.jsdelivr.net/npm/lightgallery@2.0.0-beta.4/css/lightgallery.css';
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(script);
      document.head.removeChild(link);
    };
  }, []);

  const images = [
    {
      src: "/lovable-uploads/3e56aa76-9b3c-491a-b201-47e8a3f6f5f2.png",
      alt: "Gaming Tournament",
      caption: "Gaming Tournament"
    },
    {
      src: "/lovable-uploads/3d84e030-1b89-432f-96bd-f5c311737bb1.png",
      alt: "Esports Championship",
      caption: "Esports Championship"
    },
    {
      src: "/lovable-uploads/656573e7-9298-40ff-be35-8b964adad8e0.png",
      alt: "LAN Event",
      caption: "LAN Event"
    },
    {
      src: "/lovable-uploads/9858f506-dbeb-4741-bb8a-4f7f37ad0853.png",
      alt: "Team Competition",
      caption: "Team Competition"
    },
    {
      src: "/lovable-uploads/9818cc8b-d7ae-4d58-8b3f-aa0776cb8d8d.png",
      alt: "Prize Ceremony",
      caption: "Prize Ceremony"
    },
    {
      src: "/lovable-uploads/962ddb8d-f9e2-40e2-8e3e-cc4aa4b065c1.png",
      alt: "Gaming Arena",
      caption: "Gaming Arena"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-ai-light to-ai-dark">
      <div className="container px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12 text-white gradient-text"
        >
          Tournament Highlights
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
                      className="relative aspect-[4/3] overflow-hidden rounded-xl bg-ai-card border border-ai-border group cursor-pointer card-hover"
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-ai-primary/0 group-hover:bg-ai-primary/20 transition-all duration-300 flex items-center justify-center">
                        <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-bold text-lg">
                          View Image
                        </span>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                        <p className="text-white text-sm font-medium">
                          {image.caption}
                        </p>
                      </div>
                    </motion.div>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl w-full h-auto bg-ai-card border-ai-border">
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
            <CarouselPrevious className="bg-ai-surface border-ai-border text-white hover:bg-ai-hover" />
            <CarouselNext className="bg-ai-surface border-ai-border text-white hover:bg-ai-hover" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Gallery;