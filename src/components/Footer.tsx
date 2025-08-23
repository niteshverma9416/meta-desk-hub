const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-8 sm:py-12">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">M</span>
              </div>
              <span className="text-xl font-bold">MetaDesk</span>
            </div>
            <p className="text-background/80 mb-4 sm:mb-6 max-w-md text-sm sm:text-base">
              The virtual coworking platform that brings remote teams together. 
              Connect, collaborate, and create from anywhere in the world.
            </p>
            <div className="flex flex-col space-y-2">
              <div className="w-28 h-8 sm:w-32 sm:h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-colors cursor-pointer"
                onClick={() => {
                  window.open('https://twitter.com/', '_blank');
                }}
              >
                <span className="text-xs sm:text-sm font-bold">Twitter</span>
              </div>
              <div className="w-28 h-8 sm:w-32 sm:h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-colors cursor-pointer"
                onClick={() => {
                  window.open('https://www.linkedin.com/', '_blank');
                }}
              >
                <span className="text-xs sm:text-sm font-bold">LinkedIn</span>
              </div>
              <div
                className="w-28 h-8 sm:w-32 sm:h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-colors cursor-pointer"
                
              >
                <span className="text-xs sm:text-sm font-bold">Gmail</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Product</h4>
            <ul className="space-y-2 text-background/80 text-xs sm:text-sm">
              <li>
                <a
                  href="#"
                  className="hover:text-background transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = '/features';
                  }}
                >
                  Features
                </a>
              </li>
              <li><a href="#" className="hover:text-background transition-colors"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = '/pricing';
              }}
              >Pricing</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Security</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Enterprise</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Support</h4>
            <ul className="space-y-2 text-background/80 text-xs sm:text-sm">
              <li><a href="#" className="hover:text-background transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-background transition-colors"  
               onClick={(e) => {
                e.preventDefault();
                window.location.href = '/contact';
              }}
              >Contact Us</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Status</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Community</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-background/20 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-background/60 text-xs sm:text-sm">
          <p>&copy; 2024 MetaDesk. All rights reserved. Built with ❤️ for remote teams.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;