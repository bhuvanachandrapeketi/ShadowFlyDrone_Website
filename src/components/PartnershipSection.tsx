import React from 'react';

const PartnershipSection: React.FC = () => {
  return (
    <section className="bg-darkBlue py-16 px-6 md:px-24">
      <div className="text-center space-y-8">
        <div className="space-y-4">
          <h3 className="font-clash font-bold text-3xl text-primary">
            Samarbetspartners
          </h3>
          <div className="max-w-2xl mx-auto">
            <p className="font-archivo text-xl leading-relaxed text-primary">
              ShadowFly och Adlibris kommer tillsammans lansera en testpilot för drönar leveranser med tjänsten STORK som frakt alternativ.
            </p>
          </div>
        </div>
        
        <div className="pt-8">
          <img 
            src="https://img-wrapper.vercel.app/image?url=https://s3-alpha-sig.figma.com/img/51f0/ed34/f7f1560f8410ec1a52f29f3bf8ddd90a?Expires=1756684800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=YxgFGK~XOISzSRikcLzH58p5Soy-lIqmtzo21CQp8bzvDkOsHD2Rdq39P5Vr6De2Ua0qcNdTHtMTbKkjxo0rZc7dnkAcmvyKjn4UGA84kc-MUIAVtF555XlEt-jjNerEZJenMEdPB1YH3pTBcAW7440vF7TvxvKNM9Y6q~9CZlbgd70yTMxCjKtSjspZfmQYxVy8p~FTCruF~fqTWES2vtFJGvQiElpvIBKRx~zBSF8Xls18eZf0JIBm1jLdkp3dfrK41IpsbfK4IJEUYGJXRpTT9JE0Lw4Q9QTg4KUPN86o-9wmPzJoi2QdNRJ3cWiA6mrH6UiGrLq~ECePCIkAcg__"
            alt="Adlibris Logo"
            className="w-96 h-40 object-contain mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default PartnershipSection;
