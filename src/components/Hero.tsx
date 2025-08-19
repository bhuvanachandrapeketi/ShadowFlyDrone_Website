import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section 
      className="relative h-screen bg-cover bg-center flex items-center"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(244, 248, 249, 0) 0%, rgba(244, 248, 249, 1) 56%, rgba(244, 248, 249, 1) 71%, rgba(244, 248, 249, 1) 100%),
          url('https://img-wrapper.vercel.app/image?url=https://s3-alpha-sig.figma.com/img/3fca/cf20/4b47516ab48b763a323eb5132ec6001a?Expires=1756684800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=BUhyzvJOokHYCZzyZOorjsH42QbyYTnKDkzqNwtxSNnehgOgbkAnB96AQ9kPpTw5tRbU7r4EnKUFP~kql-NCJ3fSA98X-vt9PlB2o2vGYkz9RFDMjHK2kD9v4hvuQEoR71yL~Mtl17Cz001Cays5Y7zgmQRKLE7ygwMS1GcYZpCGYslwqT7H3C80SoKxAKNvcHt1-Ne4-L1MSTnlgjXmbcOBvi9n5XPeTR2Pzem9hM1-qUO4Rye4WRgoximSbUtJhHk7CvtoQqRMB9TaI6W3UXcuuzAkEUnuTnpt5zu9fhouOBvhOb6BhNc12S5Evn~cXj6xOu6gZ4gmonmANpkl4w__')
        `
      }}
    >
      <div className="px-6 md:px-24 max-w-4xl ml-auto mr-0 text-left">
        <div className="space-y-6">
          <h1 className="font-clash font-bold text-5xl md:text-6xl leading-tight text-darkBlue">
            Shadowfly frametidens leveranser
          </h1>
          
          <div className="max-w-2xl">
            <p className="font-archivo text-xl leading-relaxed text-darkBlue">
              ShadowFly och Adlibris kommer tillsammans lansera en testpilot för drönar leveranser med tjänsten STORK som frakt alternativ.
            </p>
          </div>
          
          <div className="pt-4">
            <button className="bg-darkBlue text-primary font-switzer text-xl px-6 py-4 rounded flex items-center gap-3 hover:bg-opacity-90 transition-colors">
              Label
              <ArrowRight className="w-8 h-8" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
