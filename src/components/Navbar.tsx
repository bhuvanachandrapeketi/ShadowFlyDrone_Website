import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-darkBlue py-8 px-6 md:px-24">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/">
            <img 
              src="https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://s3-alpha-sig.figma.com/img/9de7/ae20/0259b1e206b00d521876d0f9d6e242b7?Expires=1756684800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=dGE2NNOfGEBeLVPfOmCQUtr1YzjN1P7JtANR79K38xN7qHNKNQxyW9XXMrJVxmGE3U-a-EH5aqnL9NdqeM-jBhY-eXGlycjoqRmSA7XhRxpJCSrgm5gkKKCR1ZI0~z8vYOQvC9PR-qF6k8KHMv7oCEwfnwkmB6ETd6AghuDx2ZTnQCWELqMTw~FdeEOLqAsQlq5CIE6CndPcheiLFyJiVQz5thayTS2QJKggY1QjyfmzPBkVXdDhT85iO2H2Qj1yMX7UMS0eP1~Q~fYdsjuecSZUFuRy00vHW3xXb-rlS3R6Yp9lAF8suf2TESFjuX-ReO5Moi~6YaenqWUe6TNwjg__"
              alt="ShadowFly Logo"
              className="w-16 h-16 hover:opacity-80 transition-opacity"
            />
          </Link>
        </div>
        
        <div className="flex items-center gap-6">
          <Link 
            to="/"
            className={`${
              isActive('/') ? 'bg-accent text-secondary' : 'bg-darkBlue text-primary hover:bg-opacity-80'
            } font-switzer text-xl px-6 py-4 rounded-full transition-colors`}
          >
            Hem
          </Link>
          <Link 
            to="/about"
            className={`${
              isActive('/about') ? 'bg-accent text-secondary' : 'bg-darkBlue text-primary hover:bg-opacity-80'
            } font-switzer text-xl px-6 py-4 rounded-full transition-colors`}
          >
            Om oss
          </Link>
          <Link 
            to="/tracking"
            className={`${
              isActive('/tracking') ? 'bg-accent text-secondary' : 'bg-accent text-secondary hover:bg-opacity-80'
            } font-switzer text-xl px-6 py-4 rounded transition-colors`}
          >
            Spåra leverans
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
