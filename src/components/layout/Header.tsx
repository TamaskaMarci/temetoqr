
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Home, ShoppingBag, VideoIcon, User, KeyRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: "Home", link: "/", icon: <Home className="h-4 w-4" /> },
    { name: "Buy QR Sticker", link: "/buy", icon: <ShoppingBag className="h-4 w-4" /> },
    { name: "EtherQR Video Library", link: "/library", icon: <VideoIcon className="h-4 w-4" /> },
    { name: "Login / Register", link: "/login", icon: <User className="h-4 w-4" /> },
    { name: "Forgot Password", link: "/forgot-password", icon: <KeyRound className="h-4 w-4" /> },
  ];

  return (
    <header className="w-full bg-marble-dark/90 backdrop-blur-md border-b border-royal/20 fixed top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center gap-2">
              <img src="/images/logo.svg" alt="EtherQR Logo" className="h-10 w-auto" />
              <span className="text-gold font-playfair font-semibold text-lg md:text-xl hidden sm:block">
                EtherQR <span className="text-xs text-white/70 font-light">– Remember Visually</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          {!isMobile && (
            <NavigationMenu className="hidden md:flex">
              <NavigationMenuList className="flex space-x-4">
                {navItems.map((item) => (
                  <NavigationMenuItem key={item.name}>
                    <Link
                      to={item.link}
                      className={cn(
                        "flex items-center gap-2 px-3 py-2 text-sm text-gray-300 hover:text-gold transition-colors duration-300 rounded-md"
                      )}
                    >
                      <span className="text-royal-light group-hover:text-gold transition-colors duration-300">
                        {item.icon}
                      </span>
                      <span>{item.name}</span>
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          )}

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className="text-gray-300 hover:text-gold"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="md:hidden bg-marble-dark/95 backdrop-blur-lg border-t border-royal/20 animate-fade-in pb-2">
          <div className="px-4 pt-2 pb-4 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.link}
                className="text-gray-300 hover:text-gold flex items-center gap-3 px-3 py-3 border-b border-gray-700/30"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="text-royal-light">{item.icon}</span>
                <span>{item.name}</span>
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
