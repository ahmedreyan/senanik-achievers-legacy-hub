
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ProgramsSection = () => {
  const programs = [
    {
      title: "Crèche",
      ageRange: "3 months - 2 years",
      description: "A nurturing environment for our youngest learners with personalized care and early stimulation activities.",
      image: "creche"
    },
    {
      title: "Pre-School",
      ageRange: "3 - 5 years",
      description: "Montessori-based program developing foundational skills through play-based learning and exploration.",
      image: "preschool"
    },
    {
      title: "Primary School",
      ageRange: "6 - 11 years",
      description: "Comprehensive curriculum blending Nigerian educational standards with international best practices.",
      image: "primary"
    },
    {
      title: "Secondary School",
      ageRange: "12 - 17 years",
      description: "Rigorous academic program preparing students for higher education and future success.",
      image: "secondary"
    }
  ];

  return (
    <section id="programs" className="section-padding bg-blue-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Educational Programs</h2>
          <p className="text-gray-600">
            From crèche to secondary level, we offer comprehensive educational programs tailored to each developmental stage. Children can start from age three, and assessments are available for older transfers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <Card key={program.title} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex flex-col h-full">
                <div className={`h-48 ${
                  program.image === "creche" ? "bg-blue-200" :
                  program.image === "preschool" ? "bg-green-200" :
                  program.image === "primary" ? "bg-blue-300" :
                  "bg-green-300"
                } flex items-center justify-center`}>
                  <p className="text-white font-medium">Image of {program.title} Students</p>
                </div>
                <CardContent className="p-6 flex-grow flex flex-col">
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold mb-2">{program.title}</h3>
                    <p className="text-sm text-primary font-medium mb-3">Age: {program.ageRange}</p>
                    <p className="text-gray-600 mb-6">{program.description}</p>
                  </div>
                  <Button variant="outline" className="self-start">Learn More</Button>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">Admission Process</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-bold text-primary text-xl">1</span>
              </div>
              <h4 className="font-bold mb-2">Application</h4>
              <p className="text-gray-600">Complete our online application form and submit required documents</p>
            </div>
            
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-bold text-secondary text-xl">2</span>
              </div>
              <h4 className="font-bold mb-2">Assessment</h4>
              <p className="text-gray-600">Age-appropriate assessment for placement (for transfers)</p>
            </div>
            
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-bold text-primary text-xl">3</span>
              </div>
              <h4 className="font-bold mb-2">Enrollment</h4>
              <p className="text-gray-600">Accept offer, complete registration, and join our community</p>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Button size="lg" className="bg-primary hover:bg-primary/90">Begin Application Process</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
