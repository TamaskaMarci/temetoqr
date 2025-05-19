
import { ArrowRight, Check, Flame } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const BuyPage = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h1 className="text-3xl md:text-4xl lg:text-5xl purple-text font-bold mb-6">
            EtherQR Memorial Sticker
          </h1>
          <p className="text-xl text-gray-300">
            A dignified way to preserve memories at the final resting place
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          {/* Product Image - Updated to match the uploaded design */}
          <div className="elegant-card aspect-square flex items-center justify-center p-8 animate-fade-in">
            <Card className="w-full h-full bg-purple/80 border-2 border-purple/30 overflow-hidden relative">
              <AspectRatio ratio={1/1}>
                <div className="absolute inset-0 border-2 border-[#D6A95B] m-3 rounded-md"></div>
                <div className="flex flex-col items-center justify-center h-full p-6 relative">
                  <div className="grid grid-cols-1 gap-4 w-full max-w-xs">
                    {/* QR Code */}
                    <div className="bg-purple/90 p-2 border border-[#D6A95B] rounded-md">
                      <div className="aspect-square w-full grid grid-cols-10 gap-0.5">
                        {Array(100).fill(0).map((_, i) => (
                          <div key={i} className={`w-full aspect-square ${Math.random() > 0.7 ? 'bg-[#D6A95B]' : 'bg-transparent'}`}></div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Flame icon */}
                    <div className="flex justify-center">
                      <Flame className="h-14 w-14 text-[#D6A95B]" />
                    </div>
                    
                    {/* EtherQR text */}
                    <div className="text-center">
                      <h3 className="text-3xl font-playfair text-[#D6A95B] font-bold">EtherQR</h3>
                    </div>
                  </div>
                </div>
              </AspectRatio>
            </Card>
          </div>

          {/* Product Details */}
          <div className="space-y-8 animate-fade-in">
            <h2 className="text-2xl md:text-3xl purple-text font-bold">
              Weatherproof QR Memorial Sticker
            </h2>

            <p className="text-gray-300 leading-relaxed">
              Our premium QR code stickers are designed specifically for memorial use, made with UV-resistant and waterproof materials to withstand years of exposure to the elements while maintaining their dignified appearance.
            </p>

            <div className="space-y-4">
              <h3 className="text-xl text-[#D6A95B] font-medium">Features:</h3>
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
                    <span className="text-[#D6A95B] mr-2">
                      <Check className="h-5 w-5" />
                    </span>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4">
              <div className="flex items-baseline mb-4">
                <span className="text-2xl md:text-3xl text-[#D6A95B] font-bold">$49.99</span>
                <span className="text-gray-400 ml-2">per sticker</span>
              </div>

              <p className="text-sm text-gray-400 mb-6">
                Includes unlimited video hosting and one weatherproof QR code sticker
              </p>

              <Link to="/checkout" className="memorial-button w-full sm:w-auto">
                Purchase Now
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="max-w-3xl mx-auto mt-16 bg-purple-deep/30 backdrop-blur-sm border border-purple/20 rounded-lg p-8 animate-fade-in">
          <h3 className="text-xl text-[#D6A95B] font-bold mb-4">Important Information</h3>
          
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
