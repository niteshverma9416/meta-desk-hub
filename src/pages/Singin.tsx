import Header from "@/components/Header";


import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const SinginPage = () => {
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
              Sign In
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4 sm:px-0">
              Please enter your credentials to access your account.
            </p>
          </div>

          {/* Sign In Form Section */}
          {/* Add your sign-in form here */}
        </div>
      </main>
    </div>
  );
};

export default SinginPage;