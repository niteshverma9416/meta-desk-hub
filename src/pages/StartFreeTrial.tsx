import Header from "@/components/Header";
import { ArrowLeft, CreditCard, Shield, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const StartFreeTrialPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20 sm:pt-24 pb-12 sm:pb-16">
        <div className="container mx-auto px-4 lg:px-6">
          {/* Back Navigation */}
          <div className="text-center mb-12 animate-fade-in">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-primary hover:text-primary-hover mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Start Your Free Trial
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Enjoy full access for <span className="font-semibold">30 days</span>. 
              No hidden charges. Cancel anytime — if you cancel before the trial 
              ends, you won’t be charged.
            </p>
          </div>

          {/* Pricing Card */}
          <div className="max-w-lg mx-auto bg-card shadow-lg rounded-2xl p-8 text-center border">
            <h2 className="text-2xl font-bold mb-2">Pro Plan</h2>
            <p className="text-muted-foreground mb-6">
              Unlock all premium features with your trial.
            </p>

            <div className="mb-6">
              <span className="text-4xl font-extrabold text-primary">₹999</span>
              <span className="text-muted-foreground">/month</span>
            </div>

            <button className="w-full bg-primary text-white py-3 rounded-xl font-semibold hover:bg-primary-hover transition"
              onClick={() => {
                window.location.href = '/signup';
              }}
            >
              Start Free Trial
            </button>

            <p className="text-xs text-muted-foreground mt-3">
              Cancel within 30 days to avoid charges.
            </p>
          </div>

          {/* Benefits Section */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16">
            <div className="flex flex-col items-center text-center">
              <CreditCard className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-semibold text-lg">No Upfront Charge</h3>
              <p className="text-sm text-muted-foreground">
                Card required for trial, but no payment until after 30 days.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <Shield className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-semibold text-lg">Cancel Anytime</h3>
              <p className="text-sm text-muted-foreground">
                Stop your trial whenever you like, no questions asked.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <Clock className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-semibold text-lg">Full 30 Days</h3>
              <p className="text-sm text-muted-foreground">
                Access all premium features for a full month at no cost.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default StartFreeTrialPage;
