
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-marble-dark/95 backdrop-blur-md border-t border-royal/20 mt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <div className="flex items-center gap-2">
                <img src="/images/logo.svg" alt="EtherQR Logo" className="h-8 w-auto" />
                <span className="text-gold font-playfair font-semibold text-xl">EtherQR</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm">
              Preserve the memory of your loved ones with a simple scan. Create lasting visual memorials that connect generations.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-playfair text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-gold transition-colors duration-300">Home</Link>
              </li>
              <li>
                <Link to="/buy" className="text-gray-400 hover:text-gold transition-colors duration-300">Buy QR Sticker</Link>
              </li>
              <li>
                <Link to="/library" className="text-gray-400 hover:text-gold transition-colors duration-300">Video Library</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-playfair text-lg mb-4">Account</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/login" className="text-gray-400 hover:text-gold transition-colors duration-300">Login / Register</Link>
              </li>
              <li>
                <Link to="/forgot-password" className="text-gray-400 hover:text-gold transition-colors duration-300">Forgot Password</Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} EtherQR. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-gray-500 hover:text-gold transition-colors duration-300 text-sm">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-500 hover:text-gold transition-colors duration-300 text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
