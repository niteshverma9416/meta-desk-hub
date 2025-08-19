import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">M</span>
            </div>
            <span className="text-xl font-bold text-foreground">MetaDesk</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#features" 
              className="text-foreground/80 hover:text-primary transition-colors font-medium"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
                toast({ title: "Features", description: "Exploring MetaDesk's powerful collaboration tools" });
              }}
            >
              Features
            </a>
            <a 
              href="#pricing" 
              className="text-foreground/80 hover:text-primary transition-colors font-medium"
              onClick={(e) => {
                e.preventDefault();
                toast({ title: "Pricing", description: "Check out our flexible pricing plans for teams of all sizes" });
              }}
            >
              Pricing
            </a>
            <a 
              href="#about" 
              className="text-foreground/80 hover:text-primary transition-colors font-medium"
              onClick={(e) => {
                e.preventDefault();
                toast({ title: "About Us", description: "Learn more about MetaDesk's mission to revolutionize remote work" });
              }}
            >
              About
            </a>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              className="hidden sm:inline-flex"
              onClick={() => toast({ title: "Sign In", description: "Redirecting to sign in page..." })}
            >
              Sign In
            </Button>
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => toast({ title: "Free Trial Started!", description: "Welcome to MetaDesk! Setting up your workspace..." })}
            >
              Start Free Trial
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;