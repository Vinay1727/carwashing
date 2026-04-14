import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import Pricing from "@/components/sections/Pricing";
import Testimonials from "@/components/sections/Testimonials";
import Gallery from "@/components/sections/Gallery";
import Booking from "@/components/sections/Booking";
import Stats from "@/components/sections/Stats";

export default function Home() {
  return (
    <>
     <Navbar />
     <Hero />
     <Stats />
     <Services />
     <Process />
     <Pricing />
     <Gallery />
     <Testimonials />
     <Booking />
     <Footer />
    </>
  );
}
