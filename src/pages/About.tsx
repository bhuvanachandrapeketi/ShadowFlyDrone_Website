import React from 'react';
import Footer from '../components/Footer';

const About: React.FC = () => {
  return (
    <div>
      {/* Hero Section - Om Oss */}
      <section className="bg-darkBlue py-16 px-6 md:px-24">
        <div className="max-w-6xl mx-auto text-center">
          <div className="space-y-4 mb-8">
            <h1 className="font-clash font-bold text-5xl text-primary">
              Om Oss
            </h1>
          </div>
          <div className="max-w-2xl mx-auto">
            <p className="font-archivo text-xl text-primary leading-relaxed">
              ShadowFly och Adlibris kommer tillsammans lansera en testpilot för drönar leveranser med tjänsten STORK som frakt alternativ.
            </p>
          </div>
        </div>
      </section>

      {/* Vårt mål Section */}
      <section className="bg-primary py-16 px-6 md:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1">
              <div className="space-y-4 mb-6">
                <h2 className="font-clash font-bold text-3xl text-secondary">
                  Vårt mål
                </h2>
              </div>
              <div>
                <p className="font-archivo text-xl text-secondary leading-relaxed">
                  Vi strävar efter att bidra till en mer miljövänlig transportinfrastruktur genom att använda luftburna leveranser. Varje leverans vi gör är ett steg mot en bättre planet för framtida generationer.
                </p>
              </div>
            </div>
            <div className="flex-1">
              <img 
                src="https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://s3-alpha-sig.figma.com/img/37de/fd74/ad2cf9d0f2b5ee72fdfc02458d7ae009?Expires=1757289600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=UhcejcmPhE4l2EiFGabOZKtT~MrcITwd789KdFN7EmGNmSMeKttHaB83vfkbXPdsvM-1W50Z201X-aS~aR3hh8rDeOLBjJrp44XAbDSWQHB~aNcvbJe5Wq2GEXpbcPvgNo8VyuBtewFaJpEXTO1L8XSd7AkNN0sovaRD4QQ4Bs6H9-MiRMXMTNA5rO75WHiSJfJZAE-SVx561yHGzQlQ8vfhy8XTgkWOTfjGy~j4V1D0-lMdZtVSjXXOd9~0hXlnjEytGFP4PW6cOl25CToVjLuSsCCDNY~ATWta521x2o89NIgKjzHbv1EBra-xZzeueTmv174y9usyg7MzZ4-oQg__"
                alt="Vårt mål"
                className="w-full h-96 object-cover rounded"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="bg-lightGreen py-16 px-6 md:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
            <div className="flex-1">
              <div className="space-y-4 mb-6">
                <h2 className="font-clash font-bold text-3xl text-secondary">
                  Vision
                </h2>
              </div>
              <div>
                <p className="font-archivo text-xl text-secondary leading-relaxed">
                  På ShadowFly tillhandahåller vi hållbara leveranslösningar som inte kompromissar med kvaliteten. Vi använder avancerad drönarteknik för att göra hållbarhet till en prioritet.
                </p>
              </div>
            </div>
            <div className="flex-1">
              <img 
                src="https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://s3-alpha-sig.figma.com/img/ba23/4b92/821feae30d909d3129ed1b72615f26e9?Expires=1757289600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=tTLfJzOnjp1zg9lxsAOsU0vDtdLcltawjGVY-BR8TNFSFlM0VABrGC2vLyQ9ZCJ9Xc1Nnf7ddjxt9XYGJm6xRBzflPqp9ybVt5lTKw3lK9t~BuBSqRznfHadJS1BLM1iSGmv~Ur22ZnAsGywUKV6DtbLWd2wJeRV4qXM5I~ai8MYT9CeZrVlaKHeTvuDsaeC4OU37jbbolYv~xPCoLIRJQRpclNdG9IK~GJCa9gn~GIDvedspUrNHlXegznI244wWl0x2GjM6YNS42WmaHa~WyB03t03gd-T6q2yW9WIeeMeqOfILspiAjp5Ejxc5ZcNKrEJRds~UWtnYBRUvs1Q5A__"
                alt="Vision"
                className="w-full h-96 object-cover rounded"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Säkerhet Section */}
      <section className="bg-primary py-16 px-6 md:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1">
              <div className="space-y-4 mb-6">
                <h2 className="font-clash font-bold text-3xl text-secondary">
                  Säkerhet
                </h2>
              </div>
              <div>
                <p className="font-archivo text-xl text-secondary leading-relaxed">
                  På ShadowFly prioriterar vi säkerheten för ditt paket och dig själv. Våra drönare är utrustade med avancerade säkerhetsfunktioner för att säkerställa en säker leveransupplevelse.
                </p>
              </div>
            </div>
            <div className="flex-1">
              <img 
                src="https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://s3-alpha-sig.figma.com/img/5001/4e91/a8db498818e0360090620d02dd5773a6?Expires=1757289600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=cYgA74zDq9q2EKs6-nMM767ypLCf6WdCVZWQjoLmStaOffO6qXxVYQvg5oC~s1RIy3Fc-52PC2wPyKXRSHLbwdudYJSLOIv87U8oLK0narG-kfUcNhOxEYPpe-pFVhGJXIKUwamMrQ771GtQvDIn3uwKvY-ZQsy6x8I~7aD8MpL3R3MTJePDOG~Ry6vvpdI41N8KCmedPBxfPtpOZGY3itANIcqiVsrUtL~Pz7hLUbGDHrj~6ZS0bZfWW9HTLY1VTPZngfZEq2dnQ9SukEBjc6K0izevIXjwBe6C8-6bc1bMO5qvaDPhc-hfOX26Z9UKJhzgsB6MSE61Wi6yobw4gg__"
                alt="Säkerhet"
                className="w-full h-96 object-cover rounded"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
