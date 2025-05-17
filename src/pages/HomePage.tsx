
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-marble-dark via-marble to-marble-dark/90 z-0">
          {/* Dark overlay to enhance readability */}
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center text-center space-y-8 animate-hero">
            <h1 className="text-4xl md:text-5xl lg:text-6xl gold-text font-bold max-w-3xl leading-tight">
              Honor Their Memory. Beautifully.
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
              EtherQR allows you to preserve the memory of your loved ones for future generations – with a simple scan.
            </p>
            
            <Link to="/buy" className="memorial-button-gold mt-8">
              Buy Now
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-24 bg-marble-light/40 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl gold-text text-center font-bold mb-16">
            Preserve Memories With Dignity
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="elegant-card p-8 text-center">
              <div className="h-16 w-16 bg-royal rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-gold text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-playfair text-gold mb-4">Record a Memorial</h3>
              <p className="text-gray-300">
                Upload a cherished video memory showcasing the life and legacy of your loved one.
              </p>
            </div>
            
            <div className="elegant-card p-8 text-center">
              <div className="h-16 w-16 bg-royal rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-gold text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-playfair text-gold mb-4">Receive Your QR Sticker</h3>
              <p className="text-gray-300">
                We'll send you a weatherproof, durable QR code sticker, designed to withstand the elements.
              </p>
            </div>
            
            <div className="elegant-card p-8 text-center">
              <div className="h-16 w-16 bg-royal rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-gold text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-playfair text-gold mb-4">Share Their Story</h3>
              <p className="text-gray-300">
                Place the QR code at the memorial site, allowing visitors to connect with memories instantly.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl gold-text text-center font-bold mb-16">
            Preserving Memories For Generations
          </h2>
          
          <div className="elegant-card p-8 max-w-3xl mx-auto">
            <p className="text-xl text-gray-300 italic mb-8">
              "EtherQR helped our family create a beautiful memorial for our grandfather. Now whenever someone visits his gravesite, they can learn about his life, see his smile, and hear his voice. It's like he's still with us, sharing his stories."
            </p>
            
            <div className="flex items-center">
              <div className="h-12 w-12 rounded-full bg-royal flex items-center justify-center">
                <span className="text-gold font-bold">JM</span>
              </div>
              <div className="ml-4">
                <p className="text-white font-medium">Jessica Miller</p>
                <p className="text-gray-400 text-sm">Chicago, IL</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-royal/40 to-royal-dark/40 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h2 className="text-3xl md:text-4xl gold-text font-bold">
              One Scan – A Lifetime of Memories
            </h2>
            
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Create a lasting tribute for your loved ones with EtherQR's weatherproof memorial stickers.
            </p>
            
            <Link to="/buy" className="memorial-button-gold inline-flex mt-4">
              Preserve Their Memory
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
