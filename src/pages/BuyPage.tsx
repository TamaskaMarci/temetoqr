
import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";

const BuyPage = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h1 className="text-3xl md:text-4xl lg:text-5xl gold-text font-bold mb-6">
            EtherQR Memorial Sticker
          </h1>
          <p className="text-xl text-gray-300">
            A dignified way to preserve memories at the final resting place
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          {/* Product Image */}
          <div className="qr-sticker-card aspect-square flex items-center justify-center animate-fade-in">
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="w-64 h-64 border-4 border-gold/80 rounded-lg overflow-hidden flex items-center justify-center">
                <div className="text-center">
                  <div className="grid grid-cols-5 grid-rows-5 gap-1">
                    {Array(25).fill(0).map((_, i) => (
                      <div key={i} className={`w-full aspect-square ${Math.random() > 0.6 ? 'bg-gold' : 'bg-transparent'}`}></div>
                    ))}
                  </div>
                  <p className="text-sm mt-4 text-gold font-playfair">Sample QR Code</p>
                </div>
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-8 animate-fade-in">
            <h2 className="text-2xl md:text-3xl royal-text font-bold">
              Weatherproof QR Memorial Sticker
            </h2>

            <p className="text-gray-300 leading-relaxed">
              Our premium QR code stickers are designed specifically for memorial use, made with UV-resistant and waterproof materials to withstand years of exposure to the elements while maintaining their dignified appearance.
            </p>

            <div className="space-y-4">
              <h3 className="text-xl gold-text font-medium">Features:</h3>
              <ul className="space-y-3">
                {[
                  "Premium weatherproof PVC material",
                  "UV and water-resistant for outdoor durability",
                  "Subtle, elegant design that blends respectfully",
                  "Easy application process",
                  "Links directly to your uploaded memorial video",
                  "Includes placement guidelines"
                ].map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <span className="text-gold mr-2">
                      <Check className="h-5 w-5" />
                    </span>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4">
              <div className="flex items-baseline mb-4">
                <span className="text-2xl md:text-3xl text-gold font-bold">$49.99</span>
                <span className="text-gray-400 ml-2">per sticker</span>
              </div>

              <p className="text-sm text-gray-400 mb-6">
                Includes unlimited video hosting and one weatherproof QR code sticker
              </p>

              <Link to="/checkout" className="memorial-button-gold w-full sm:w-auto">
                Purchase Now
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="max-w-3xl mx-auto mt-16 bg-marble-light/30 backdrop-blur-sm border border-royal/20 rounded-lg p-8 animate-fade-in">
          <h3 className="text-xl gold-text font-bold mb-4">Important Information</h3>
          
          <div className="space-y-4 text-gray-300">
            <p>
              Your EtherQR sticker will be custom-generated once you have uploaded your memorial video in the Video Library section. Each sticker contains a unique QR code that links directly to your loved one's memorial video.
            </p>
            
            <p>
              The QR codes are designed to be affixed to stone, metal, or other memorial surfaces. Detailed application instructions will be included with your purchase.
            </p>
            
            <p>
              Each purchase includes one physical QR code sticker and lifetime hosting of your memorial video. Additional stickers for the same memorial can be purchased separately if needed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyPage;
