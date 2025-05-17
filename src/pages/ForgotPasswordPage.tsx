
import { KeyRound } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const ForgotPasswordPage = () => {
  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto elegant-card p-8">
          <div className="text-center mb-8">
            <div className="h-16 w-16 bg-royal rounded-full flex items-center justify-center mx-auto mb-4">
              <KeyRound className="h-8 w-8 text-gold" />
            </div>
            <h1 className="text-2xl md:text-3xl gold-text font-bold mb-2">
              Forgot Your Password?
            </h1>
            <p className="text-gray-300">
              Enter your email address and we'll send you a link to reset your password.
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

            {/* Submit Button */}
            <Button type="submit" className="memorial-button w-full">
              Reset Password
            </Button>
          </form>

          {/* Back to Login */}
          <div className="mt-8 pt-6 border-t border-gray-700 text-center">
            <p className="text-gray-400">
              Remember your password?
              <Link
                to="/login"
                className="ml-2 text-gold hover:underline"
              >
                Back to Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
