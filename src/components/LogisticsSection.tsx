import React from 'react';

interface LogisticsSectionProps {
  reversed?: boolean;
  backgroundColor?: string;
  textColor?: string;
  buttonStyle?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  imageUrl?: string;
}

const LogisticsSection: React.FC<LogisticsSectionProps> = ({
  reversed = false,
  backgroundColor = 'bg-lightGreen',
  textColor = 'text-secondary',
  buttonStyle = 'bg-darkGreen text-primary',
  title = "Transforming Logistics",
  subtitle = "Streamline Your Business with Drone Delivery",
  description = "Unlock the future of package delivery with our innovative drone technology. Enjoy faster, more efficient, and cost-effective transportation solutions that cater to your unique business requirements",
  imageUrl
}) => {
  const content = (
    <div className="flex-1 space-y-6">
      <div className="space-y-4">
        <p className={`font-archivo text-base ${textColor}`}>{title}</p>
        <h3 className={`font-clash font-bold text-3xl leading-tight ${textColor}`}>
          {subtitle}
        </h3>
        <p className={`font-archivo text-xl leading-relaxed ${textColor} max-w-2xl`}>
          {description}
        </p>
      </div>
      
      <div>
        <button className={`${buttonStyle} font-switzer text-xl px-6 py-4 rounded hover:opacity-90 transition-opacity`}>
          Label
        </button>
      </div>
    </div>
  );

  const image = (
    <div className="flex-1">
      <img 
        src={imageUrl} 
        alt="Drone delivery"
        className="w-full h-96 object-cover rounded"
      />
    </div>
  );

  return (
    <section className={`${backgroundColor} py-16 px-6 md:px-24`}>
      <div className={`flex flex-col lg:flex-row items-center gap-16 ${reversed ? 'lg:flex-row-reverse' : ''}`}>
        {content}
        {image}
      </div>
    </section>
  );
};

export default LogisticsSection;
