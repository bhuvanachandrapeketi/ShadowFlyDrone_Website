import React, { useState } from 'react';
import { Search } from 'lucide-react';
import Footer from '../components/Footer';

const Tracking: React.FC = () => {
  const [trackingNumber, setTrackingNumber] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle tracking logic here
    console.log('Tracking:', trackingNumber);
  };

  const trackingStatuses = [
    {
      company: "Nordicfeel",
      status: "Påväg",
      color: "bg-darkGreen",
      textColor: "text-primary",
      icon: "drone"
    },
    {
      company: "Nordicfeel", 
      status: "Misslyckad leverans",
      color: "bg-red-500",
      textColor: "text-primary",
      icon: "drone-x"
    },
    {
      company: "Nordicfeel",
      status: "Levererat", 
      color: "bg-green-500",
      textColor: "text-primary",
      icon: "drone-check"
    },
    {
      company: "Nordicfeel",
      status: "Ej påbörjat",
      color: "bg-yellow-500", 
      textColor: "text-secondary",
      icon: "drone"
    }
  ];

  const DroneIcon = ({ type, className }: { type: string; className?: string }) => (
    <svg className={`w-11 h-11 ${className}`} viewBox="0 0 44 44" fill="none">
      <path d="M22 25.67L32.74 14.93L44 18.33L32.74 25.67L22 25.67Z" fill="currentColor"/>
      <path d="M22 12.83L9.26 14.93L0 18.33L9.26 25.67L22 12.83Z" fill="currentColor"/>
      <circle cx="9.17" cy="9.17" r="4.58" fill="currentColor"/>
      <circle cx="35.83" cy="9.17" r="4.58" fill="currentColor"/>
      <rect x="4.58" y="32.08" width="34.84" height="6.42" rx="3.21" fill="currentColor"/>
      {type === "drone-x" && (
        <>
          <path d="M29.33 29.33L36.67 36.67" stroke="currentColor" strokeWidth="2"/>
          <path d="M36.67 29.33L29.33 36.67" stroke="currentColor" strokeWidth="2"/>
        </>
      )}
      {type === "drone-check" && (
        <path d="M25.67 29.33L29.33 33L36.67 25.67" stroke="currentColor" strokeWidth="2" fill="none"/>
      )}
    </svg>
  );

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-darkBlue py-16 px-6 md:px-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-4 mb-8">
            <h1 className="font-clash font-bold text-5xl text-primary">
              Spåra leverans
            </h1>
          </div>
          <div className="max-w-2xl mx-auto mb-8">
            <p className="font-archivo text-xl text-primary leading-relaxed">
              Ange ditt spårnings id, för att se hur långt ditt paket har kommit.
            </p>
          </div>
          
          {/* Tracking Form */}
          <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
            <div className="relative">
              <input
                type="text"
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
                placeholder="Försändelse ID"
                className="w-full px-8 py-4 pr-16 font-archivo text-xl text-secondary border border-darkBlue rounded-full focus:outline-none focus:border-accent bg-primary"
              />
              <button
                type="submit"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 hover:opacity-80 transition-opacity"
              >
                <Search className="w-8 h-8 text-secondary" />
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Status Cards Section */}
      <section className="bg-primary py-16 px-6 md:px-24">
        <div className="max-w-4xl mx-auto space-y-4">
          {trackingStatuses.map((item, index) => (
            <div 
              key={index}
              className={`${item.color} rounded-sm p-8 flex items-center gap-6`}
            >
              <DroneIcon 
                type={item.icon} 
                className={item.textColor}
              />
              <div className="flex-1">
                <h3 className={`font-archivo font-bold text-xl ${item.textColor} mb-1`}>
                  {item.company}
                </h3>
                <p className={`font-archivo text-base ${item.textColor}`}>
                  {item.status}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Tracking;
