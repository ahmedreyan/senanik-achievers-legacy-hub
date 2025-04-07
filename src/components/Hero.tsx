
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-10 md:mb-0 md:pr-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-up">
              Welcome to <span className="text-primary">Senanik</span> <span className="text-secondary">Achievers'</span> College
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Nurturing young minds in a God-fearing environment with quality education from crèche to secondary level.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Discover Our Programs
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                Schedule a Visit
              </Button>
            </div>
          </div>
          <div className="w-full md:w-1/2 relative animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="bg-white p-2 rounded-lg shadow-xl rotate-3 mb-4">
              <div className="aspect-[4/3] bg-gray-200 rounded overflow-hidden">
                <div className="w-full h-full bg-gradient-to-r from-blue-400 to-green-400 flex items-center justify-center">
                  <p className="text-white text-center px-4">School children learning image</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-2 rounded-lg shadow-xl -rotate-6">
              <div className="aspect-[1/1] w-32 bg-gray-200 rounded overflow-hidden">
                <div className="w-full h-full bg-gradient-to-r from-green-400 to-blue-400 flex items-center justify-center">
                  <p className="text-white text-center px-4">School logo</p>
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
