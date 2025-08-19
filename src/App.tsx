import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesSection from './components/ServicesSection';
import LogisticsSection from './components/LogisticsSection';
import PartnershipSection from './components/PartnershipSection';

function App() {
  return (
    <div className="min-h-screen bg-primary">
      <Navbar />
      <Hero />
      <ServicesSection />
      
      {/* First Logistics Section - Green background */}
      <LogisticsSection
        backgroundColor="bg-lightGreen"
        textColor="text-secondary"
        buttonStyle="bg-darkGreen text-primary"
        title="Transforming Logistics"
        subtitle="Streamline Your Business with Drone Delivery"
        description="Unlock the future of package delivery with our innovative drone technology. Enjoy faster, more efficient, and cost-effective transportation solutions that cater to your unique business requirements"
        imageUrl="https://img-wrapper.vercel.app/image?url=https://s3-alpha-sig.figma.com/img/7bbb/4c0b/f527e33952827b67426ec9c0152d97ae?Expires=1756684800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=bk~0dYGu2hQYsWwwUFL76L3o801oQMt2mmqYaTw2dv7J1g4KbyKAhjBIPJA6Dz9YZxrNaUDyY4PMJHz2CDOHUUimaOSzXLc0yQ03Wko6faTs75PmKYs-520ZShfCuKqfraPIowDtFlzvNeD1MzqqGy1sZJrxojBrYk34Xnxhvt2gPPGadd-gcrZjz2g-KIGPAqsvrrH-UXT2BnZ-rvgP7keiDIymLQ3uJh2LcvIotkkhM6RxRxLH~wmmstr10tloUBmDzcB62hK5iAGB7ofqiCraSNgzivOu7qyu0aiErfNjYo5JVbO2J0PlYR4uNiPkOMjGIMebXM3fM-84LHh7WA__"
      />
      
      {/* Second Logistics Section - Light background, reversed layout */}
      <LogisticsSection
        reversed={true}
        backgroundColor="bg-primary"
        textColor="text-secondary"
        buttonStyle="bg-darkBlue text-primary"
        title="Transforming Logistics"
        subtitle="Logistics with Drone Delivery"
        description="Unlock the future of package delivery with our innovative drone technology. Enjoy faster, more efficient, and cost-effective transportation solutions that cater to your unique business requirements"
        imageUrl="https://img-wrapper.vercel.app/image?url=https://s3-alpha-sig.figma.com/img/9c8d/2167/894060759ade399c84ecda72a3b0a909?Expires=1756684800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=E85kiry49OmBhm8KWAUdl1-A~4QasIo1qJuwwN~D-ni7jlv0AEji1jrcvrUQH~Hx4OupCTEwHKz8fRP3YTgqwXPrDDmxRNamI4KRQ8EFX9zzJteVkEUNkrSvWJLx-FmUd0C0ROTV1Fs4eLAoMSLUZIeO3uGOCf82Krlkos21BvswQQ2wJ00qrGKh4g7uy1sL2fx8ClCGzipgfNdmMuA4anm0i8limaHn4RdJbdXGADTajS3xKl7CB3CGlHur-r2Onn0I36rn5EjYJr74Usjat7jppq01-p1yhKG~59hRYXsAnvGeqEIsilH1dah0sJHGOc6G5FUPO3H~Tfg8vou5Fg__"
      />
      
      <PartnershipSection />
    </div>
  );
}

export default App;
