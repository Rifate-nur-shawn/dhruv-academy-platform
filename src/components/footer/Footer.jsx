import Logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="container pb-2">
      <div className="bg-[#080606] rounded-[3rem] py-20 px-8">
        <div className="flex flex-col lg:flex-row gap-8 mb-8">
          {/* Left side - Logo and Description */}
          <div className="lg:w-1/2">
            <img src={Logo} alt="Dhruv Rathee Academy" className="h-12 mb-6" />
            <p className="text-white text-sm md:text-base leading-relaxed">
              At Dhruv Rathee Academy, you can gain practical knowledge and
              learn real-world skills that will help you transform your life at
              work, school and home.
            </p>
          </div>

          {/* Right side - Links */}
          <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-bold text-lg mb-4 text-white">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="text-white transition-colors">
                    Login
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white transition-colors">
                    Top Courses
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4 text-white">Other Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="text-white transition-colors">
                    Testimonials
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white transition-colors">
                    Tech Support
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white transition-colors">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-white text-sm align-text-bottom">
            Copyright © 2024 Dhruv Rathee Build by The Coding Journey
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
