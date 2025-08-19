import { Button } from "@/components/ui/button";
import heroIllustration from "@/assets/hero-illustration.png";

const Hero = () => {
  return (
    <section className="pt-24 pb-16 bg-gradient-hero min-h-screen flex items-center">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Connect. Collaborate.{" "}
              <span className="text-primary">Create.</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl">
              MetaDesk redefines remote work by bridging communication gaps and boosting productivity. 
              Join thousands of teams in our virtual coworking space.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="lg" className="text-lg">
                Start Free Trial
              </Button>
              <Button variant="outline" size="lg" className="text-lg">
                Watch Demo
              </Button>
            </div>
            <div className="mt-8 flex items-center gap-8 text-sm text-muted-foreground justify-center lg:justify-start">
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
          
          <div className="relative animate-scale-in">
            <div className="absolute inset-0 bg-gradient-feature rounded-3xl blur-3xl opacity-20 animate-float"></div>
            <img
              src={heroIllustration}
              alt="MetaDesk Virtual Coworking Platform"
              className="relative z-10 w-full h-auto rounded-3xl shadow-hover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;