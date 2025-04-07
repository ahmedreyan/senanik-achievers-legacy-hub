
import { Calendar, MapPin, Award, BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-gradient-to-br from-purple-50 to-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#8B5CF6]">About Our School</h2>
          <p className="text-gray-600">
            Established in January 2019, Senanik Achievers' College is dedicated to providing quality education in a nurturing environment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-bold mb-4 text-[#F97316]">Our Story</h3>
            <p className="mb-4 text-gray-700">
              Senanik Achievers' College was founded in January 2019 with a vision to create an exceptional learning environment where students can thrive academically, socially, and morally.
            </p>
            <p className="mb-4 text-gray-700">
              As a private institution located in Lagos, Nigeria, we offer comprehensive educational programs from crèche to secondary level, embracing both the Montessori Method and Nigerian curriculum while incorporating international standards.
            </p>
            <p className="text-gray-700">
              Our commitment to nurturing each child in a God-fearing environment sets us apart, as we focus on developing well-rounded individuals equipped for future success.
            </p>
          </div>
          <div className="order-1 md:order-2 rounded-lg p-6">
            <div className="grid grid-cols-2 gap-4 w-full">
              <div className="aspect-[4/3] bg-white rounded-lg shadow overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1232&q=80" 
                  alt="School building" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[4/3] bg-white rounded-lg shadow overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80" 
                  alt="Classroom" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[4/3] bg-white rounded-lg shadow overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1122&q=80" 
                  alt="Students" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[4/3] bg-white rounded-lg shadow overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1594608661623-aa0bd3a69799?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1248&q=80" 
                  alt="Activities" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-white to-purple-50">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-[#8B5CF6]/20 rounded-full flex items-center justify-center mb-4">
                <Calendar className="h-6 w-6 text-[#8B5CF6]" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-[#8B5CF6]">Established</h3>
              <p className="text-gray-600">Founded in January 2019 with a vision for excellence</p>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-white to-orange-50">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-[#F97316]/20 rounded-full flex items-center justify-center mb-4">
                <MapPin className="h-6 w-6 text-[#F97316]" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-[#F97316]">Location</h3>
              <p className="text-gray-600">Conveniently located in Lagos, Nigeria</p>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-white to-purple-50">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-[#8B5CF6]/20 rounded-full flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-[#8B5CF6]" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-[#8B5CF6]">Accreditation</h3>
              <p className="text-gray-600">Fully approved with qualified educators</p>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-white to-orange-50">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-[#F97316]/20 rounded-full flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-[#F97316]" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-[#F97316]">Curriculum</h3>
              <p className="text-gray-600">Montessori Method blended with Nigerian curriculum</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
