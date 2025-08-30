import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Facebook, Instagram, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-darkBlue">
      {/* Main Footer Content */}
      <div className="py-12 px-6 md:px-24">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link to="/">
              <img 
                src="https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://s3-alpha-sig.figma.com/img/9de7/ae20/0259b1e206b00d521876d0f9d6e242b7?Expires=1756684800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=dGE2NNOfGEBeLVPfOmCQUtr1YzjN1P7JtANR79K38xN7qHNKNQxyW9XXMrJVxmGE3U-a-EH5aqnL9NdqeM-jBhY-eXGlycjoqRmSA7XhRxpJCSrgm5gkKKCR1ZI0~z8vYOQvC9PR-qF6k8KHMv7oCEwfnwkmB6ETd6AghuDx2ZTnQCWELqMTw~FdeEOLqAsQlq5CIE6CndPcheiLFyJiVQz5thayTS2QJKggY1QjyfmzPBkVXdDhT85iO2H2Qj1yMX7UMS0eP1~Q~fYdsjuecSZUFuRy00vHW3xXb-rlS3R6Yp9lAF8suf2TESFjuX-ReO5Moi~6YaenqWUe6TNwjg__"
                alt="ShadowFly Logo"
                className="w-16 h-16 hover:opacity-80 transition-opacity"
              />
            </Link>
          </div>
          
          {/* Navigation Links */}
          <div className="flex items-center gap-12">
            <Link 
              to="/contact" 
              className="font-archivo text-lg text-primary hover:text-accent transition-colors"
            >
              Kontakta oss
            </Link>
            <Link 
              to="/#services" 
              className="font-archivo text-lg text-primary hover:text-accent transition-colors"
            >
              Våra tjänster
            </Link>
            <Link 
              to="/about" 
              className="font-archivo text-lg text-primary hover:text-accent transition-colors"
            >
              Om oss
            </Link>
          </div>
          
          {/* Social Media Icons */}
          <div className="flex items-center gap-4">
            <a 
              href="#" 
              className="w-8 h-8 text-primary hover:text-accent transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-full h-full" />
            </a>
            <a 
              href="#" 
              className="w-8 h-8 text-primary hover:text-accent transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-full h-full" />
            </a>
            <a 
              href="#" 
              className="w-8 h-8 text-primary hover:text-accent transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-full h-full" />
            </a>
            <a 
              href="#" 
              className="w-8 h-8 text-primary hover:text-accent transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-full h-full" />
            </a>
          </div>
        </div>
      </div>
      
      {/* White Divider Line */}
      <div className="border-t border-primary border-opacity-20"></div>
      
      {/* Copyright Section */}
      <div className="py-6 px-6 md:px-24">
        <div className="text-center">
          <p className="font-archivo text-primary text-sm">
            © Copyright 2025, All Rights Reserved by ShadowFly
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
