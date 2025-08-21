import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { toast } from "@/hooks/use-toast";
import { ArrowLeft, Users, Target, Lightbulb, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const AboutPage = () => {
  const values = [
    {
      icon: Users,
      title: "Collaboration First",
      description: "We believe the best work happens when teams can collaborate seamlessly, regardless of where they are in the world."
    },
    {
      icon: Target,
      title: "Focus on Results",
      description: "Our platform is designed to eliminate distractions and help teams focus on what matters most - delivering great results."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We continuously innovate to provide cutting-edge tools that make remote work more productive and enjoyable."
    },
    {
      icon: Heart,
      title: "People-Centered",
      description: "At the heart of everything we do are the people using our platform. We build with empathy and understanding."
    }
  ];

  const team = [
    {
      name: "Sarah Chen",
      role: "CEO & Co-Founder",
      description: "Former VP of Product at leading tech companies, passionate about remote work transformation."
    },
    {
      name: "Marcus Rodriguez",
      role: "CTO & Co-Founder",
      description: "Full-stack engineer with 15+ years experience building scalable collaboration platforms."
    },
    {
      name: "Emily Watson",
      role: "Head of Design",
      description: "UX design expert focused on creating intuitive experiences for distributed teams."
    },
    {
      name: "David Kim",
      role: "VP of Engineering",
      description: "Engineering leader committed to building reliable, secure infrastructure for remote teams."
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
              About MetaDesk
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4 sm:px-0">
              We're on a mission to revolutionize remote work by creating the ultimate 
              virtual coworking platform that brings teams together, no matter where they are.
            </p>
          </div>

          {/* Mission Section */}
          <div className="mb-20 animate-fade-in">
            <div className="bg-gradient-feature rounded-3xl p-12 text-center">
              <h2 className="text-4xl font-bold text-foreground mb-6">Our Mission</h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                To bridge the gap between remote work and in-person collaboration by providing 
                intuitive tools that make distributed teams more productive, connected, and engaged. 
                We believe that great work knows no boundaries, and neither should great teamwork.
              </p>
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-center text-foreground mb-12">Our Values</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {values.map((value, index) => (
                <Card 
                  key={index}
                  className="text-center hover:shadow-hover transition-all duration-300 transform hover:scale-105 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <value.icon className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Story Section */}
          <div className="mb-20 animate-fade-in">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-center text-foreground mb-8">Our Story</h2>
              <div className="prose prose-lg mx-auto text-center">
                <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                  MetaDesk was born in 2023 when our founders, like millions of others, experienced 
                  the challenges of remote work firsthand. Despite having access to various tools, 
                  something was missing - the spontaneous collaboration and connection that happens 
                  naturally in physical offices.
                </p>
                <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                  We set out to create more than just another video conferencing tool. We envisioned 
                  a platform that would recreate the energy and serendipity of working together in 
                  the same space, while embracing the flexibility and global reach that remote work offers.
                </p>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Today, MetaDesk serves thousands of teams worldwide, helping them stay connected, 
                  productive, and engaged. We're just getting started on our journey to transform 
                  how the world works together.
                </p>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-center text-foreground mb-12">Meet Our Team</h2>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
              {team.map((member, index) => (
                <Card 
                  key={index}
                  className="hover:shadow-hover transition-all duration-300 transform hover:scale-105 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <CardTitle className="text-xl">{member.name}</CardTitle>
                    <CardDescription className="text-primary font-semibold">
                      {member.role}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{member.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-feature rounded-3xl p-12 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Ready to join our mission?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Whether you're looking to transform your remote work experience or want to be part 
              of building the future of collaboration, we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="hero" 
                size="lg" 
                className="text-lg"
                onClick={() => toast({ title: "Welcome!", description: "Starting your MetaDesk journey..." })}
              >
                Start Free Trial
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg"
                onClick={() => toast({ title: "Careers", description: "Exploring career opportunities at MetaDesk..." })}
              >
                View Careers
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;