
import { Check } from "lucide-react";

const ValuesSection = () => {
  const values = [
    {
      title: "Self-Acceptance",
      description: "We encourage each child to embrace their unique qualities and develop a positive self-image."
    },
    {
      title: "Respect",
      description: "We foster mutual respect among our community members, appreciating diversity and different perspectives."
    },
    {
      title: "Creativity",
      description: "We nurture creative thinking and innovative problem-solving skills in all areas of learning."
    },
    {
      title: "Rational Thinking",
      description: "We develop critical thinking skills, encouraging students to analyze information and make informed decisions."
    },
    {
      title: "Faith-Based Learning",
      description: "We integrate moral values and spiritual growth in a God-fearing environment."
    },
    {
      title: "Academic Excellence",
      description: "We maintain high academic standards while supporting each student's individual learning journey."
    }
  ];

  return (
    <section id="values" className="section-padding bg-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="w-full md:w-5/12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Core Values</h2>
            <p className="text-gray-600 mb-8">
              At Senanik Achievers' College, our educational philosophy is built on strong values that shape our approach to teaching and nurturing young minds.
            </p>
            <div className="relative h-80 bg-gray-100 rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <p className="text-center text-gray-600 px-4">
                  Image of students engaged in values-based activities
                </p>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-7/12">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div 
                  key={index} 
                  className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start">
                    <div className="mr-4 mt-1">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">{value.title}</h3>
                      <p className="text-gray-600">{value.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-6 border border-primary/20 rounded-lg bg-blue-50">
              <h3 className="font-bold text-xl mb-4">Our Educational Approach</h3>
              <p className="text-gray-700 mb-4">
                We believe in a holistic approach to education, blending the Montessori Method with the Nigerian curriculum while incorporating international standards. This unique combination allows us to focus on both academic achievement and character development.
              </p>
              <p className="text-gray-700">
                Our goal is to create an environment where students develop self-acceptance, respect for others, creativity, and rational thinking skills that will serve them throughout their lives.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
