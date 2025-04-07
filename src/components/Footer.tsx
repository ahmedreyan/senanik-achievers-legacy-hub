
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 font-playfair">Senanik Achievers'</h3>
            <p className="text-primary-foreground/90 mb-4">
              Providing quality education in a nurturing, God-fearing environment since 2019.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary-foreground transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-primary-foreground transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-primary-foreground transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-primary-foreground transition-colors" aria-label="YouTube">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-primary-foreground/90 hover:text-primary-foreground transition-colors">Home</a></li>
              <li><a href="#about" className="text-primary-foreground/90 hover:text-primary-foreground transition-colors">About Us</a></li>
              <li><a href="#programs" className="text-primary-foreground/90 hover:text-primary-foreground transition-colors">Programs</a></li>
              <li><a href="#values" className="text-primary-foreground/90 hover:text-primary-foreground transition-colors">Our Values</a></li>
              <li><a href="#contact" className="text-primary-foreground/90 hover:text-primary-foreground transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Programs</h3>
            <ul className="space-y-2">
              <li><a href="#programs" className="text-primary-foreground/90 hover:text-primary-foreground transition-colors">Crèche</a></li>
              <li><a href="#programs" className="text-primary-foreground/90 hover:text-primary-foreground transition-colors">Pre-School</a></li>
              <li><a href="#programs" className="text-primary-foreground/90 hover:text-primary-foreground transition-colors">Primary School</a></li>
              <li><a href="#programs" className="text-primary-foreground/90 hover:text-primary-foreground transition-colors">Secondary School</a></li>
              <li><a href="#programs" className="text-primary-foreground/90 hover:text-primary-foreground transition-colors">Admissions</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <address className="not-italic text-primary-foreground/90">
              <p className="mb-2">Lagos, Nigeria</p>
              <p className="mb-2">info@senanikachievers.edu.ng</p>
              <p className="mb-2">+234 XXX XXX XXXX</p>
            </address>
          </div>
        </div>
        
        <div className="pt-6 border-t border-primary-foreground/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-foreground/90 text-sm mb-4 md:mb-0">
            © {currentYear} Senanik Achievers' College. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-primary-foreground/90 hover:text-primary-foreground transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-primary-foreground/90 hover:text-primary-foreground transition-colors text-sm">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
