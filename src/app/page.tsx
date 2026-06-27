import { Navbar }           from "@/components/layout/Navbar";
import { Footer }           from "@/components/layout/Footer";
import { HeroSection }      from "@/components/sections/HeroSection";
import { ServicesSection }  from "@/components/sections/ServicesSection";
import { HowItWorks }       from "@/components/sections/HowItWorks";
import { WhyChooseUs }      from "@/components/sections/WhyChooseUs";
import { ServiceArea }      from "@/components/sections/ServiceArea";
import { CtaBanner }        from "@/components/sections/CtaBanner";
import { LocalSEO }         from "@/components/ui/LocalSEO";

export default function Home() {
  return (
    <>
      <LocalSEO />
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <HowItWorks />
        <WhyChooseUs />
        <ServiceArea />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
