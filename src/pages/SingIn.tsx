import Header from "@/components/Header";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useTheme } from "@/contexts/ThemeContext";

const SigninPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900' : 'bg-background'}`}>
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

          {/* sign-in form section */}
          <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
            <div className="space-y-3 mb-6">
              <button
                type="button"
                className="w-full flex items-center justify-center gap-2 py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium bg-white text-gray-700 hover:bg-gray-50 transition-colors"
              >
                {/* You can replace with an icon if you have one */}
                <span className="i-mdi-google w-5 h-5" aria-hidden="true"></span>
                Sign in with Google
              </button>
              <button
                type="button"
                className="w-full flex items-center justify-center gap-2 py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium bg-white text-gray-700 hover:bg-gray-50 transition-colors"
              >
                {/* You can replace with an icon if you have one */}
                <span className="i-mdi-github w-5 h-5" aria-hidden="true"></span>
                Sign in with GitHub
              </button>
            </div>
            <div className="flex items-center my-6">
              <div className="flex-grow border-t border-gray-200"></div>
              <span className="mx-4 text-gray-400 text-sm">or</span>
              <div className="flex-grow border-t border-gray-200"></div>
            </div>
            <form className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                  autoComplete="email"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm pr-20"
                    autoComplete="current-password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((v) => !v)}
                    className="absolute inset-y-0 right-0 px-3 py-1 text-sm text-primary hover:text-primary-hover focus:outline-none"
                    tabIndex={-1}
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember"
                    name="remember"
                    type="checkbox"
                    className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                  />
                  <label htmlFor="remember" className="ml-2 block text-sm text-gray-900">
                    Remember me
                  </label>
                </div>
                <div className="text-sm">
                  <a href="#" className="font-medium text-primary hover:text-primary-hover">
                    Forgot your password?
                  </a>
                </div>
              </div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium bg-primary text-white hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              >
                Sign In
              </button>
              <div className="text-center mt-4">
                <span className="text-sm text-gray-600">
                  Don't have an account?{" "}
                  <Link to="/signup" className="text-primary hover:text-primary-hover font-medium">
                    Sign up
                  </Link>
                </span>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SigninPage;
