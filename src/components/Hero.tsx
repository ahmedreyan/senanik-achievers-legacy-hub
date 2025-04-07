
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Hero = () => {
  // Use state to handle image loading
  const [imagesLoaded, setImagesLoaded] = useState(false);
  
  useEffect(() => {
    // Set images as loaded after component mounts
    setImagesLoaded(true);
  }, []);

  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-br from-blue-100 to-green-100">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-10 md:mb-0 md:pr-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-up">
              Welcome to <span className="text-[#8B5CF6]">Senanik</span> <span className="text-[#F97316]">Achievers'</span> College
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Nurturing young minds in a God-fearing environment with quality education from crèche to secondary level.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <Button size="lg" className="bg-[#8B5CF6] hover:bg-[#8B5CF6]/90">
                Discover Our Programs
              </Button>
              <Button size="lg" variant="outline" className="border-[#F97316] text-[#F97316] hover:bg-[#F97316]/10">
                Schedule a Visit
              </Button>
            </div>
          </div>
          <div className="w-full md:w-1/2 relative animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="bg-white p-2 rounded-lg shadow-xl rotate-3 mb-4">
              <div className="aspect-[4/3] rounded overflow-hidden bg-gray-200">
                {imagesLoaded ? (
                  <img 
                    src="/heromain.jpg" 
                    alt="School children learning" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      console.log("Image failed to load");
                      e.currentTarget.src = "/placeholder.svg";
                    }}
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-400">Loading image...</span>
                  </div>
                )}
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-2 rounded-lg shadow-xl -rotate-6">
              <div className="aspect-[1/1] w-32 rounded overflow-hidden">
              <div className="aspect-[4/3] rounded overflow-hidden bg-gray-200">
                {imagesLoaded ? (
                  <img 
                    src="/herologo.jpg" 
                    alt="School children learning" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      console.log("Image failed to load");
                      e.currentTarget.src = "/placeholder.svg";
                    }}
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-400">Loading image...</span>
                  </div>
                )}
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
