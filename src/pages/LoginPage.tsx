
import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff, LogIn, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  
  const toggleView = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto elegant-card p-8">
          <div className="text-center mb-8">
            <h1 className="text-2xl md:text-3xl gold-text font-bold mb-2">
              {isLogin ? "Welcome Back" : "Create Your Account"}
            </h1>
            <p className="text-gray-300">
              {isLogin 
                ? "Sign in to manage your memorial videos" 
                : "Register to create memorial QR codes"}
            </p>
          </div>

          <form className="space-y-6">
            {/* Email Field */}
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-200">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                required
                className="w-full px-4 py-3 rounded-md bg-marble-dark border border-royal/30 text-white focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                placeholder="your@email.com"
              />
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-medium text-gray-200">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  required
                  className="w-full px-4 py-3 rounded-md bg-marble-dark border border-royal/30 text-white focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Confirm Password (Registration only) */}
            {!isLogin && (
              <div className="space-y-2">
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-200">
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    id="confirmPassword"
                    type={showPassword ? "text" : "password"}
                    required
                    className="w-full px-4 py-3 rounded-md bg-marble-dark border border-royal/30 text-white focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                    placeholder="••••••••"
                  />
                </div>
              </div>
            )}

            {/* Submit Button */}
            <Button type="submit" className="memorial-button w-full">
              {isLogin ? (
                <>
                  <LogIn className="h-5 w-5 mr-2" />
                  Sign In
                </>
              ) : (
                <>
                  <UserPlus className="h-5 w-5 mr-2" />
                  Create Account
                </>
              )}
            </Button>

            {/* Forgot Password Link */}
            {isLogin && (
              <div className="text-center">
                <Link to="/forgot-password" className="text-royal-light hover:text-gold text-sm">
                  Forgot your password?
                </Link>
              </div>
            )}
          </form>

          {/* Toggle Login/Register */}
          <div className="mt-8 pt-6 border-t border-gray-700 text-center">
            <p className="text-gray-400">
              {isLogin ? "Don't have an account?" : "Already have an account?"}
              <button
                type="button"
                onClick={toggleView}
                className="ml-2 text-gold hover:underline"
              >
                {isLogin ? "Register" : "Sign In"}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
