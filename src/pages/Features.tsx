import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { toast } from "@/hooks/use-toast";
import { Toaster } from "@/components/ui/toaster";
import { ArrowLeft, MessageCircle, FolderOpen, Video, Users, FileText, Calendar, BarChart3, Lock, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const FeaturesPage = () => {
  const featureCategories = [
    {
      category: "Communication",
      icon: MessageCircle,
      features: [
        {
          title: "Real-time Chat",
          description: "Instant messaging with emoji reactions, file sharing, and thread discussions",
          benefits: ["Instant team communication", "File sharing up to 100MB", "Message history & search"],
          badge: "Core"
        },
        {
          title: "Voice Notes",
          description: "Quick voice messages for faster communication when typing isn't convenient",
          benefits: ["Quick voice recording", "Auto-transcription", "Playback speed control"],
          badge: "Premium"
        },
        {
          title: "Team Channels",
          description: "Organized conversations by department, project, or topic",
          benefits: ["Unlimited channels", "Private & public options", "Channel moderation tools"],
          badge: "Core"
        }
      ]
    },
    {
      category: "Project Management",
      icon: FolderOpen,
      features: [
        {
          title: "Task Boards",
          description: "Kanban-style boards to visualize and manage project workflows",
          benefits: ["Drag & drop interface", "Custom board layouts", "Progress tracking"],
          badge: "Core"
        },
        {
          title: "Timeline Views",
          description: "Gantt charts and timeline visualization for project planning",
          benefits: ["Timeline dependencies", "Milestone tracking", "Resource allocation"],
          badge: "Premium"
        },
        {
          title: "Team Collaboration",
          description: "Assign tasks, set deadlines, and track team member contributions",
          benefits: ["Task assignments", "Due date reminders", "Activity logs"],
          badge: "Core"
        }
      ]
    },
    {
      category: "Video Conferencing",
      icon: Video,
      features: [
        {
          title: "HD Video Calls",
          description: "Crystal-clear video conferencing with up to 100 participants",
          benefits: ["1080p video quality", "Noise cancellation", "Virtual backgrounds"],
          badge: "Core"
        },
        {
          title: "Screen Sharing",
          description: "Share your entire screen or specific applications with the team",
          benefits: ["Full screen sharing", "Application sharing", "Remote control"],
          badge: "Core"
        },
        {
          title: "Meeting Recording",
          description: "Record important meetings for team members who couldn't attend",
          benefits: ["Cloud storage", "Auto-transcription", "Searchable recordings"],
          badge: "Premium"
        }
      ]
    },
    {
      category: "Productivity Tools",
      icon: Zap,
      features: [
        {
          title: "Document Collaboration",
          description: "Real-time document editing and collaboration with version control",
          benefits: ["Real-time editing", "Version history", "Comment system"],
          badge: "Premium"
        },
        {
          title: "Calendar Integration",
          description: "Sync with Google Calendar, Outlook, and other calendar applications",
          benefits: ["Calendar sync", "Meeting scheduling", "Availability tracking"],
          badge: "Core"
        },
        {
          title: "Analytics Dashboard",
          description: "Track team productivity, meeting statistics, and project progress",
          benefits: ["Productivity metrics", "Custom reports", "Export capabilities"],
          badge: "Premium"
        }
      ]
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
              Complete Feature Overview
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4 sm:px-0">
              Discover all the powerful tools and features that make MetaDesk the ultimate 
              virtual coworking platform for remote teams.
            </p>
          </div>

          {/* Feature Categories */}
          {featureCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground">{category.category}</h2>
              </div>
              
              <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {category.features.map((feature, index) => (
                  <Card 
                    key={index} 
                    className="hover:shadow-hover transition-all duration-300 transform hover:scale-105 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <CardTitle className="text-xl">{feature.title}</CardTitle>
                        <Badge variant={feature.badge === "Premium" ? "default" : "secondary"}>
                          {feature.badge}
                        </Badge>
                      </div>
                      <CardDescription className="text-base">
                        {feature.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-foreground mb-3">Key Benefits:</h4>
                        <ul className="space-y-2">
                          {feature.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-center gap-2 text-muted-foreground">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}

          {/* CTA Section */}
          <div className="text-center mt-20 bg-gradient-feature rounded-3xl p-12 animate-fade-in">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4 px-4 sm:px-0">
              Ready to experience all these features?
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto px-4 sm:px-0">
              Start your free trial today and discover how MetaDesk can transform 
              your remote work experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
              <Button 
                variant="hero" 
                size="lg" 
                className="text-lg"
                onClick={() => toast({ title: "Free Trial Started!", description: "Welcome to MetaDesk! Setting up your workspace with all features..." })}
              >
                Start Free Trial
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg"
                onClick={() => toast({ title: "Demo Scheduled", description: "Booking a personalized demo to show you all features in action!" })}
              >
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};

export default FeaturesPage;