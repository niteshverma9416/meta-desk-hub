import React from "react";
import Header from "@/components/Header";


import { ArrowLeft, Users, Target, Lightbulb, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const ContactPage = () => {
  const contactMethods = [
    {
      icon: Users,
      title: "Community Support",
      description: "Join our community forums to connect with other users and get help."
    },
    {
      icon: Target,
      title: "Email Support",
      description: "For specific issues, reach out to our support team via email."
    },
    {
      icon: Lightbulb,
      title: "Feedback",
      description: "We value your feedback! Share your thoughts to help us improve."
    },
    {
      icon: Heart,
      title: "Follow Us",
      description: "Stay updated with the latest news and updates on our social media channels."
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
              Contact Us
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4 sm:px-0">
              We’re here to help! Whether you have a question about our platform, need assistance, or just want to share your feedback, feel free to reach out.
            </p>
          </div>

          {/* Contact Methods Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <div key={index}>
                <div className="flex items-center space-x-3 mb-2">
                  <method.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold">{method.title}</h3>
                <p className="text-muted-foreground">{method.description}</p>
              </div>
            ))}
            </div>
          </div>
          </main>
                </div> 
  );
};

export default ContactPage;
         
        