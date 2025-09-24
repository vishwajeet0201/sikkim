import { Mountain, Facebook, Instagram, Youtube, Twitter, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer id="contact" className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <Mountain className="text-2xl mr-2" />
              <span className="text-xl font-bold">Sikkim Monasteries</span>
            </div>
            <p className="text-gray-300 mb-4">
              Discover the spiritual heritage of Sikkim through our comprehensive
              guide to sacred monasteries and cultural experiences.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
                data-testid="link-facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
                data-testid="link-instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
                data-testid="link-youtube"
              >
                <Youtube className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
                data-testid="link-twitter"
              >
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-gray-300 hover:text-white transition-colors text-left"
                  data-testid="footer-link-home"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("monasteries")}
                  className="text-gray-300 hover:text-white transition-colors text-left"
                  data-testid="footer-link-monasteries"
                >
                  Monasteries
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("experiences")}
                  className="text-gray-300 hover:text-white transition-colors text-left"
                  data-testid="footer-link-experiences"
                >
                  Experiences
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("events")}
                  className="text-gray-300 hover:text-white transition-colors text-left"
                  data-testid="footer-link-events"
                >
                  Events
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("blog")}
                  className="text-gray-300 hover:text-white transition-colors text-left"
                  data-testid="footer-link-blog"
                >
                  Blog
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Spiritual Journeys</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                  data-testid="footer-link-meditation"
                >
                  Meditation Retreats
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                  data-testid="footer-link-treks"
                >
                  Monastery Treks
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                  data-testid="footer-link-workshops"
                >
                  Cultural Workshops
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                  data-testid="footer-link-photography"
                >
                  Photography Tours
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                  data-testid="footer-link-guidance"
                >
                  Spiritual Guidance
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Phone className="w-4 h-4 mr-3" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="w-4 h-4 mr-3" />
                <span>info@sikkimmonasteries.com</span>
              </div>
              <div className="flex items-start text-gray-300">
                <MapPin className="w-4 h-4 mr-3 mt-1" />
                <span>
                  Gangtok, Sikkim
                  <br />
                  737101, India
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © 2024 Sikkim Monasteries. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-gray-300 hover:text-white text-sm transition-colors"
                data-testid="footer-link-privacy"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white text-sm transition-colors"
                data-testid="footer-link-terms"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white text-sm transition-colors"
                data-testid="footer-link-cookies"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
