import React from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="bg-accent rounded-sm overflow-hidden max-w-sm">
      <div className="h-96">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-8 space-y-4">
        <h3 className="font-clash font-bold text-xl text-secondary">{title}</h3>
        <p className="font-archivo text-base leading-relaxed text-secondary">
          {description}
        </p>
      </div>
    </div>
  );
};

const ServicesSection: React.FC = () => {
  const services = [
    {
      title: "Hemleverans",
      description: "Upplev bekvämligheten av att ha ditt paket levererat direkt till din valda plats! Tack vare vår pålitliga leveranstjänst!",
      imageUrl: "https://img-wrapper.vercel.app/image?url=https://s3-alpha-sig.figma.com/img/1bef/91b1/c14880264d310bf61806bbc9be603560?Expires=1756684800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=fFAOL00BaE8RPv~0xcUg7MyXh6Jy~DNIBbHXR~NHMAO~kH096X08mULDBu0B3q2n4D0~R7nAm~MnVOjvvreArO3mPB7xtdTd8h2hW8rtxdE9qMVtJEIkB51yRLumqUkLQAsP~ndqQgGgh7cTUYoO45Ajq281CwrJPOljPiYcKFFDNDG1th9kPVn9Q~XcmpXYw~sfUPp0ebkFpZ3P~RRYLj1DUN~VQLfT2wrpTuZzKdwBtlwzWMEc3G0GUpDiJvtnDsgnvkVTStT80Ty0BeLuShKJTNiB1hCmrnVs54yTOnwmzADNBnCE-wf3LfzvC-pXIyrwuVoQIOT6HJqhTH31Nw__"
    },
    {
      title: "Nest",
      description: "Få ditt paket snabbt och smidigt levererat inom bekvämt avstånd för att hämta när det passar dig!",
      imageUrl: "https://img-wrapper.vercel.app/image?url=https://s3-alpha-sig.figma.com/img/ea5d/3213/fafb75d7ef63490516d522b8ff96e504?Expires=1756684800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=HH56c9dhfUFDIkXXDupV2JirpSDQNhhugd6ms2EH60ukH0h~PlqzSThk9NqYJzxKVUNUfe-dw-EOuFUrdmifKaQNt9n4LdrmDSvoqyPlVO867fP-0EPMKTL3umGL~dEDmxl10DAISdA1P7hR6PA~M966Fxh0WRNh2FQrbaBbvv7D9rjCW8G68T3pvf9HhKVm-PBPcPVOKEqUygMt8x52tONkspookCviAFw-B~Iv1WyJpHTSOvGA4lvnaEM1roRaeVBoS~dGThHDGbOwhZJLBo76FrqyQdPmD3ZXVlkQspN7lDrEYrVRVACzHwrnk6-u35fYkMSzbzV66sI9eakcTA__"
    },
    {
      title: "Drive through",
      description: "Slipp krånglet med att behöva parkera och gå in! Hämta ditt paket i bilen på väg hem istället!",
      imageUrl: "https://img-wrapper.vercel.app/image?url=https://s3-alpha-sig.figma.com/img/3a04/d759/151725011da52df3da18d4ce694ca789?Expires=1756684800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=hihRUHb16GCaV2gKw89ta58C9zz7rvBfilcQKg7n1PNFCNpeUKn6fInAuIT4pC9xEGSXyQaS01Nf5ORwQVGP-fJrmbjZesMfrqeF0KvYnzAJ03eWiDVSo2x2PbLKB6aVUOuiYfMP3r6bwOaNEPFsZTu9gCBC9GZeu1OJI5B19olj6Rq9VWT-3ReWlYMK8kaXWLNtx7pHFZJVk62mBaw2WFdyqE56O-l-Zs6OpGHgPAd3Cb8K-KV6t6T3vxI5TYcJGjZAFB~7YBahk9VlqZ27yZIP71ODqbzBQRWGXnEDU9-uqndmQWDjiTP8BLWCFhVrHOdpO5hw9dLgr7cxImiv6A__"
    }
  ];

  return (
    <section className="bg-primary py-16 px-6 md:px-24">
      <div className="text-center mb-12">
        <h2 className="font-clash font-bold text-5xl text-secondary mb-12">
          Våra tjänster
        </h2>
      </div>
      
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 mb-12">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
      
      <div className="text-right">
        <button className="bg-darkBlue text-primary font-switzer text-xl px-6 py-4 rounded hover:bg-opacity-90 transition-colors">
          Label
        </button>
      </div>
    </section>
  );
};

export default ServicesSection;
