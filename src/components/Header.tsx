import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { toast } from "@/hooks/use-toast";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (section: string, action: () => void) => {
    setIsOpen(false);
    action();
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 lg:px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">M</span>
            </div>
            <span className="text-xl font-bold text-foreground">MetaDesk</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#features" 
              className="text-foreground/80 hover:text-primary transition-colors font-medium"
               onClick={(e) => {
                e.preventDefault();
                window.location.href = '/features';
              }}
                
              
            >
              Features
            </a>
            <a 
              href="/pricing" 
              className="text-foreground/80 hover:text-primary transition-colors font-medium"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = '/pricing';
              }}
            >
              Pricing
            </a>
            <a 
              href="/about" 
              className="text-foreground/80 hover:text-primary transition-colors font-medium"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = '/about';
              }}
            >
              About
            </a>
            
            <a 
              href="/contact" 
              className="text-foreground/80 hover:text-primary transition-colors font-medium"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = '/contact';
              }}
            >
              Contact Us
            </a>
          </div>
          
          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="ghost" 
              className="hidden lg:inline-flex"
              onClick={(e) => {
                e.preventDefault();
window.location.href = '/signin';
              }}
            >
              Sign In
            </Button>
            <Button 
              variant="hero" 
              size="lg"
              className="hidden sm:inline-flex"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = '/start-free-trial';
                toast({ title: "Free Trial Started!", description: "Welcome to MetaDesk! Setting up your workspace..." });
              }}
            >
              Start Free Trial
            </Button>
          </div>

          {/* Mobile CTA Button */}
          <div className="md:hidden">
            <Button 
              variant="hero" 
              size="sm"
              className="mr-2"
              onClick={() => toast({ title: "Free Trial Started!", description: "Welcome to MetaDesk! Setting up your workspace..." })}
            >
              Try Free
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 sm:w-96">
              <div className="flex flex-col space-y-8 mt-8">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                    <span className="text-primary-foreground font-bold text-lg">M</span>
                  </div>
                  <span className="text-xl font-bold text-foreground">MetaDesk</span>
                </div>
                
                <nav className="flex flex-col space-y-6">
                  <a 
                    href="#features" 
                    className="text-xl font-medium text-foreground/80 hover:text-primary transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick('features', () => {
                        document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
                        toast({ title: "Features", description: "Exploring MetaDesk's powerful collaboration tools" });
                      });
                    }}
                  >
                    Features
                  </a>
                  <a 
                    href="/pricing" 
                    className="text-xl font-medium text-foreground/80 hover:text-primary transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick('pricing', () => {
                        window.location.href = '/pricing';
                      });
                    }}
                  >
                    Pricing
                  </a>
                  <a 
                    href="/about" 
                    className="text-xl font-medium text-foreground/80 hover:text-primary transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick('about', () => {
                        window.location.href = '/about';
                      });
                    }}
                  >
                    About
                  </a>
                </nav>
                
                <div className="flex flex-col space-y-4 pt-8">
                  <Button 
                    variant="ghost" 
                    size="lg"
                    className="justify-start text-lg"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick('signin', () => {
                        window.location.href = '/signin';
                      });
                    }}
                  >
                    Sign In
                  </Button>
                  <Button 
                    variant="hero" 
                    size="lg"
                    className="justify-start text-lg"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick('about', () => {
                        window.location.href = '/start-free-trial';
                        toast({ title: "Free Trial Started!", description: "Welcome to MetaDesk! Setting up your workspace..."
                      });
                      });
                    }} 
                  >
                    Start Free Trial
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </header>
  );
};

export default Header;