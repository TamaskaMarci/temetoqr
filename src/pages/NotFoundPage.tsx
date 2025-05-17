
import { Home } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto text-center elegant-card p-8">
          <h1 className="text-4xl md:text-5xl gold-text font-bold mb-6">404</h1>
          <p className="text-2xl text-white font-playfair mb-4">Page Not Found</p>
          <p className="text-gray-300 mb-8">
            The page you are looking for doesn't exist or has been moved.
          </p>

          <Link to="/">
            <Button className="memorial-button">
              <Home className="h-5 w-5 mr-2" />
              Return Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
