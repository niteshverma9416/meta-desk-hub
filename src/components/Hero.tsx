import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import heroIllustration from "@/assets/hero-illustration.png";

const Hero = () => {
  return (
    <section className="pt-20 sm:pt-24 pb-12 sm:pb-16 bg-gradient-hero min-h-screen flex items-center">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
              Connect. Collaborate.{" "}
              <span className="text-primary">Create.</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              MetaDesk redefines remote work by bridging communication gaps and boosting productivity. 
              Join thousands of teams in our virtual coworking space.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <Button 
                variant="hero" 
                size="lg" 
                className="text-base sm:text-lg w-full sm:w-auto"
                onClick={() => {
                  window.location.href = '/start-free-trial';
                  toast({ title: "Free Trial Started!", description: "Welcome to MetaDesk! Setting up your workspace..." });
                }}
              >
                Start Free Trial
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-base sm:text-lg w-full sm:w-auto"
                onClick={() => toast({ title: "Demo Video", description: "Loading interactive demo... See MetaDesk in action!" })}
              >
                Watch Demo
              </Button>
            </div>
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-xs sm:text-sm text-muted-foreground justify-center lg:justify-start">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-feature-teal rounded-full"></div>
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-feature-coral rounded-full"></div>
                <span>Setup in 2 minutes</span>
              </div>
            </div>
          </div>
          
          <div className="relative animate-scale-in mt-8 lg:mt-0">
            <div className="absolute inset-0 bg-gradient-feature rounded-2xl sm:rounded-3xl blur-2xl sm:blur-3xl opacity-20 animate-float"></div>
            <img
              src={heroIllustration}
              alt="MetaDesk Virtual Coworking Platform"
              className="relative z-10 w-full h-auto rounded-2xl sm:rounded-3xl shadow-hover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;