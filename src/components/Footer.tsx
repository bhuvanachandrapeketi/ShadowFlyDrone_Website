import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary">
      {/* Top section with cyan background */}
      <div className="bg-accent py-16 px-6 md:px-24">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex-1">
            <h3 className="font-clash font-bold text-4xl md:text-5xl text-secondary">
              Empowering Business Through Innovation
            </h3>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-primary text-secondary font-switzer text-lg px-8 py-4 rounded-full hover:bg-opacity-90 transition-colors">
              Explore Drone Delivery
            </button>
            <button className="bg-darkBlue text-primary font-switzer text-lg px-8 py-4 rounded-full hover:bg-opacity-90 transition-colors">
              Experience the Future
            </button>
          </div>
        </div>
      </div>

      {/* Bottom section with dark blue background */}
      <div className="bg-darkBlue py-16 px-6 md:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Logo and Copyright */}
          <div className="space-y-6">
            <div className="w-16 h-16">
              <img 
                src="https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://s3-alpha-sig.figma.com/img/9de7/ae20/0259b1e206b00d521876d0f9d6e242b7?Expires=1756684800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=dGE2NNOfGEBeLVPfOmCQUtr1YzjN1P7JtANR79K38xN7qHNKNQxyW9XXMrJVxmGE3U-a-EH5aqnL9NdqeM-jBhY-eXGlycjoqRmSA7XhRxpJCSrgm5gkKKCR1ZI0~z8vYOQvC9PR-qF6k8KHMv7oCEwfnwkmB6ETd6AghuDx2ZTnQCWELqMTw~FdeEOLqAsQlq5CIE6CndPcheiLFyJiVQz5thayTS2QJKggY1QjyfmzPBkVXdDhT85iO2H2Qj1yMX7UMS0eP1~Q~fYdsjuecSZUFuRy00vHW3xXb-rlS3R6Yp9lAF8suf2TESFjuX-ReO5Moi~6YaenqWUe6TNwjg__"
                alt="ShadowFly Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <p className="font-archivo text-sm text-primary">
                © 2025 ShadowFly, Inc.
              </p>
              <p className="font-archivo text-sm text-primary">
                All rights reserved.
              </p>
            </div>
          </div>

          {/* Company Links */}
          <div className="space-y-6">
            <h4 className="font-switzer font-semibold text-lg text-primary">
              Company
            </h4>
            <ul className="space-y-3">
              <li><a href="#" className="font-archivo text-primary hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#" className="font-archivo text-primary hover:text-accent transition-colors">Our Mission</a></li>
              <li><a href="#" className="font-archivo text-primary hover:text-accent transition-colors">Leadership</a></li>
              <li><a href="#" className="font-archivo text-primary hover:text-accent transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Resources Links */}
          <div className="space-y-6">
            <h4 className="font-switzer font-semibold text-lg text-primary">
              Resources
            </h4>
            <ul className="space-y-3">
              <li><a href="#" className="font-archivo text-primary hover:text-accent transition-colors">FAQs</a></li>
              <li><a href="#" className="font-archivo text-primary hover:text-accent transition-colors">Blog</a></li>
              <li><a href="#" className="font-archivo text-primary hover:text-accent transition-colors">Whitepaper</a></li>
              <li><a href="#" className="font-archivo text-primary hover:text-accent transition-colors">Case Studies</a></li>
            </ul>
          </div>

          {/* Connect Links */}
          <div className="space-y-6">
            <h4 className="font-switzer font-semibold text-lg text-primary">
              Connect
            </h4>
            <ul className="space-y-3">
              <li><a href="#" className="font-archivo text-primary hover:text-accent transition-colors">Facebook</a></li>
              <li><a href="#" className="font-archivo text-primary hover:text-accent transition-colors">Twitter</a></li>
              <li><a href="#" className="font-archivo text-primary hover:text-accent transition-colors">LinkedIn</a></li>
              <li><a href="#" className="font-archivo text-primary hover:text-accent transition-colors">Instagram</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
