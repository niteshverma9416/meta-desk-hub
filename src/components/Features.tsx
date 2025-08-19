import { toast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import iconChat from "@/assets/icon-chat.png";
import iconProject from "@/assets/icon-project.png";
import iconVideo from "@/assets/icon-video.png";

const Features = () => {
  const navigate = useNavigate();
  const features = [
    {
      icon: iconChat,
      title: "Real-time Communication",
      description: "Instant messaging, voice notes, and team channels keep everyone connected and informed.",
      color: "feature-teal"
    },
    {
      icon: iconProject,
      title: "Project Management",
      description: "Organize tasks, track progress, and collaborate on projects with intuitive boards and timelines.",
      color: "feature-coral"
    },
    {
      icon: iconVideo,
      title: "HD Video Conferencing",
      description: "Crystal-clear video calls with screen sharing, recording, and seamless integration.",
      color: "feature-purple"
    }
  ];

  return (
    <section id="features" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Everything your remote team needs
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            MetaDesk combines the best collaboration tools in one seamless platform, 
            designed to make remote work feel natural and productive.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 shadow-card hover:shadow-hover transition-all duration-300 transform hover:scale-105 animate-fade-in group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="mb-6">
                <div className={`w-16 h-16 bg-${feature.color}/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <img src={feature.icon} alt={feature.title} className="w-10 h-10" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Ready to transform your remote work experience?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="bg-primary text-primary-foreground px-8 py-3 rounded-xl font-semibold hover:bg-primary-hover transition-all duration-300 transform hover:scale-105 shadow-card hover:shadow-hover"
              onClick={() => toast({ title: "Getting Started!", description: "Redirecting to onboarding... Let's build your virtual workspace!" })}
            >
              Get Started Now
            </button>
            <button 
              className="border-2 border-primary text-primary px-8 py-3 rounded-xl font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-105 shadow-card hover:shadow-hover"
              onClick={() => {
                navigate('/features');
                toast({ title: "All Features", description: "Exploring comprehensive feature list... Chat, Projects, Video & More!" });
              }}
            >
              View All Features
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;