import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { toast } from "@/hooks/use-toast";
import { ArrowLeft, Check, Star } from "lucide-react";
import { Link } from "react-router-dom";

const PricingPage = () => {
  const plans = [
    {
      name: "Starter",
      price: "Free",
      period: "forever",
      description: "Perfect for small teams getting started with remote collaboration",
      features: [
        "Up to 5 team members",
        "Basic video conferencing",
        "Real-time chat",
        "5GB cloud storage",
        "Email support",
        "Basic task management"
      ],
      badge: null,
      buttonText: "Get Started Free",
      popular: false
    },
    {
      name: "Professional",
      price: "$12",
      period: "per user/month",
      description: "Advanced features for growing teams and businesses",
      features: [
        "Up to 50 team members",
        "HD video conferencing",
        "Advanced project management",
        "100GB cloud storage",
        "Priority support",
        "Meeting recording",
        "Document collaboration",
        "Calendar integration",
        "Custom branding"
      ],
      badge: "Most Popular",
      buttonText: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$29",
      period: "per user/month",
      description: "Complete solution for large organizations with advanced needs",
      features: [
        "Unlimited team members",
        "Premium video conferencing",
        "Advanced analytics",
        "Unlimited cloud storage",
        "24/7 dedicated support",
        "Advanced security features",
        "API access",
        "Custom integrations",
        "SSO authentication",
        "Compliance tools"
      ],
      badge: null,
      buttonText: "Contact Sales",
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20 sm:pt-24 pb-12 sm:pb-16">
        <div className="container mx-auto px-4 lg:px-6">
          {/* Header Section */}
          <div className="text-center mb-16 animate-fade-in">
            <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary-hover mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 px-4 sm:px-0">
              Simple, Transparent Pricing
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4 sm:px-0">
              Choose the plan that's right for your team. All plans include our core collaboration 
              features with no hidden fees.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto mb-12 sm:mb-16">
            {plans.map((plan, index) => (
              <Card 
                key={index}
                className={`relative hover:shadow-hover transition-all duration-300 transform hover:scale-105 animate-fade-in ${
                  plan.popular ? 'border-primary shadow-elegant' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground px-4 py-1">
                      <Star className="w-3 h-3 mr-1" />
                      {plan.badge}
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                    {plan.period && (
                      <span className="text-muted-foreground ml-2">/{plan.period}</span>
                    )}
                  </div>
                  <CardDescription className="mt-4 text-base">
                    {plan.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    variant={plan.popular ? "hero" : "outline"}
                    size="lg" 
                    className="w-full"
                    onClick={() => toast({ 
                      title: `${plan.name} Plan`, 
                      description: `${plan.buttonText} for ${plan.name} plan initiated!` 
                    })}
                  >
                    {plan.buttonText}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* FAQ Section */}
          <div className="text-center bg-gradient-feature rounded-3xl p-12 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Questions about pricing?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our team is here to help you choose the right plan for your organization. 
              Get in touch for a personalized consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="hero" 
                size="lg" 
                className="text-lg"
                onClick={() => toast({ title: "Contact Sales", description: "Connecting you with our sales team..." })}
              >
                Contact Sales
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg"
                onClick={() => toast({ title: "Support", description: "Opening support chat..." })}
              >
                Get Support
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PricingPage;