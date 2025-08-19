import React from 'react';
import { ArrowRight } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-darkBlue py-8 px-6 md:px-24">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src="https://img-wrapper.vercel.app/image?url=https://s3-alpha-sig.figma.com/img/9de7/ae20/0259b1e206b00d521876d0f9d6e242b7?Expires=1756684800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=dGE2NNOfGEBeLVPfOmCQUtr1YzjN1P7JtANR79K38xN7qHNKNQxyW9XXMrJVxmGE3U-a-EH5aqnL9NdqeM-jBhY-eXGlycjoqRmSA7XhRxpJCSrgm5gkKKCR1ZI0~z8vYOQvC9PR-qF6k8KHMv7oCEwfnwkmB6ETd6AghuDx2ZTnQCWELqMTw~FdeEOLqAsQlq5CIE6CndPcheiLFyJiVQz5thayTS2QJKggY1QjyfmzPBkVXdDhT85iO2H2Qj1yMX7UMS0eP1~Q~fYdsjuecSZUFuRy00vHW3xXb-rlS3R6Yp9lAF8suf2TESFjuX-ReO5Moi~6YaenqWUe6TNwjg__"
            alt="ShadowFly Logo"
            className="w-16 h-16"
          />
        </div>
        
        <div className="flex items-center gap-6">
          <button className="bg-darkBlue text-primary font-switzer text-xl px-6 py-4 rounded-full hover:bg-opacity-80 transition-colors">
            Hem
          </button>
          <button className="bg-darkBlue text-primary font-switzer text-xl px-6 py-4 rounded-full hover:bg-opacity-80 transition-colors">
            Om oss
          </button>
          <button className="bg-accent text-secondary font-switzer text-xl px-6 py-4 rounded hover:bg-opacity-80 transition-colors">
            Spåra leverans
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
