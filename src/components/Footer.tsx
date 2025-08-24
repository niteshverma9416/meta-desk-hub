import { useTheme } from "@/contexts/ThemeContext";

const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer className={`py-8 sm:py-12 ${
      theme === 'dark' 
        ? 'bg-gray-900 text-white' 
        : 'bg-foreground text-background'
    }`}>
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                theme === 'dark' ? 'bg-emerald-500' : 'bg-primary'
              }`}>
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <span className="text-xl font-bold">MetaDesk</span>
            </div>
            <p className={`mb-4 sm:mb-6 max-w-md text-sm sm:text-base ${
              theme === 'dark' ? 'text-gray-300' : 'text-background/80'
            }`}>
              The virtual coworking platform that brings remote teams together. 
              Connect, collaborate, and create from anywhere in the world.
            </p>
            <div className="flex flex-col space-y-2">
              <div className={`w-28 h-8 sm:w-32 sm:h-10 rounded-lg flex items-center justify-center hover:opacity-80 transition-colors cursor-pointer ${
                theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600' : 'bg-background/10 hover:bg-background/20'
              }`}
                onClick={() => {
                  window.open('https://twitter.com/', '_blank');
                }}
              >
                <span className={`text-xs sm:text-sm font-bold ${
                  theme === 'dark' ? 'text-white' : 'text-background'
                }`}>Twitter</span>
              </div>
              <div className={`w-28 h-8 sm:w-32 sm:h-10 rounded-lg flex items-center justify-center hover:opacity-80 transition-colors cursor-pointer ${
                theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600' : 'bg-background/10 hover:bg-background/20'
              }`}
                onClick={() => {
                  window.open('https://www.linkedin.com/', '_blank');
                }}
              >
                <span className={`text-xs sm:text-sm font-bold ${
                  theme === 'dark' ? 'text-white' : 'text-background'
                }`}>LinkedIn</span>
              </div>
              <div className={`w-28 h-8 sm:w-32 sm:h-10 rounded-lg flex items-center justify-center hover:opacity-80 transition-colors cursor-pointer ${
                theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600' : 'bg-background/10 hover:bg-background/20'
              }`}
              >
                <span className={`text-xs sm:text-sm font-bold ${
                  theme === 'dark' ? 'text-white' : 'text-background'
                }`}>Gmail</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Product</h4>
            <ul className={`space-y-2 text-xs sm:text-sm ${
              theme === 'dark' ? 'text-gray-300' : 'text-background/80'
            }`}>
              <li>
                <a
                  href="#"
                  className={`hover:opacity-80 transition-colors ${
                    theme === 'dark' ? 'text-gray-300 hover:text-white' : 'hover:text-background'
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = '/features';
                  }}
                >
                  Features
                </a>
              </li>
              <li><a href="#" className={`hover:opacity-80 transition-colors ${
                theme === 'dark' ? 'text-gray-300 hover:text-white' : 'hover:text-background'
              }`}
              onClick={(e) => {
                e.preventDefault();
                window.location.href = '/pricing';
              }}
              >Pricing</a></li>
              <li><a href="#" className={`hover:opacity-80 transition-colors ${
                theme === 'dark' ? 'text-gray-300 hover:text-white' : 'hover:text-background'
              }`}>Security</a></li>
              <li><a href="#" className={`hover:opacity-80 transition-colors ${
                theme === 'dark' ? 'text-gray-300 hover:text-white' : 'hover:text-background'
              }`}>Enterprise</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Support</h4>
            <ul className={`space-y-2 text-xs sm:text-sm ${
              theme === 'dark' ? 'text-gray-300' : 'text-background/80'
            }`}>
              <li><a href="#" className={`hover:opacity-80 transition-colors ${
                theme === 'dark' ? 'text-gray-300 hover:text-white' : 'hover:text-background'
              }`}>Help Center</a></li>
              <li><a href="#" className={`hover:opacity-80 transition-colors ${
                theme === 'dark' ? 'text-gray-300 hover:text-white' : 'hover:text-background'
              }`}  
               onClick={(e) => {
                e.preventDefault();
                window.location.href = '/contact';
              }}
              >Contact Us</a></li>
              <li><a href="#" className={`hover:opacity-80 transition-colors ${
                theme === 'dark' ? 'text-gray-300 hover:text-white' : 'hover:text-background'
              }`}>Status</a></li>
              <li><a href="#" className={`hover:opacity-80 transition-colors ${
                theme === 'dark' ? 'text-gray-300 hover:text-white' : 'hover:text-background'
              }`}>Community</a></li>
            </ul>
          </div>
        </div>
        
        <div className={`border-t mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-xs sm:text-sm ${
          theme === 'dark' ? 'border-gray-700 text-gray-400' : 'border-background/20 text-background/60'
        }`}>
          <p>&copy; 2024 MetaDesk. All rights reserved. Built with ❤️ for remote teams.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
