import Header from "@/components/Header";
import { ArrowLeft, CreditCard, Shield, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "@/contexts/ThemeContext";

const TermsPage = () => {
  const { theme } = useTheme();
  
  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900' : 'bg-background'}`}>
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
              Terms of Service
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Please read these terms of service ("terms", "terms of service") 
              carefully before using the MetaDesk website (the "service") operated 
              by MetaDesk ("us", 'we", "our").
            </p>
          </div>

          {/* Terms Content Section */}
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-2">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground">
                By accessing and using our service, you accept and agree to be bound 
                by the terms and provision of this agreement. In addition, when using 
                our service, you shall be subject to any posted guidelines or rules 
                applicable to such services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">2. Description of Service</h2>
              <p className="text-muted-foreground">
                MetaDesk provides a platform that enhances remote work experiences 
                through various tools and features. We reserve the right to modify 
                or discontinue, temporarily or permanently, the service (or any part 
                thereof) with or without notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">3. User Responsibilities</h2>
              <p className="text-muted-foreground">
                Users are responsible for maintaining the confidentiality of their 
                account and password and for restricting access to their computer, 
                and you agree to accept responsibility for all activities that occur 
                under your account or password. You agree to use the service only  
                for lawful purposes and in a way that does not infringe the rights
                of, restrict or inhibit anyone else's use and enjoyment of the service.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-2">4. Termination</h2>
              <p className="text-muted-foreground">
                We may terminate or suspend access to our service immediately, without 
                prior notice or liability, for any reason whatsoever, including without 
                limitation if you breach the terms. All provisions of the terms which 
                by their nature should survive termination shall survive termination, 
                including, without limitation, ownership provisions, warranty disclaimers, 
                indemnity and limitations of liability.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-2">5. Changes to Terms</h2>
              <p className="text-muted-foreground">
                We reserve the right, at our sole discretion, to modify or replace 
                these terms at any time. If a revision is material we will provide 
                at least 30 days' notice prior to any new terms taking effect. 
                What constitutes a material change will be determined at our sole discretion.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-2">6. Contact Us</h2>
              <p className="text-muted-foreground">
                If you have any questions about these terms, please contact us at  
                <a href="mailto:jituedj@exampel.com " className="text-primary hover:text-primary-hover"></a>.
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
export default TermsPage;



