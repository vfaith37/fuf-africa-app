// src/pages/Home.tsx
import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import InfoSection from "../components/InfoSection";
import Footer from "../components/Footer";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Hero />
      <section className="grid grid-cols-1 md:grid-cols-2 text-black px-5 md:px-10 py-10 md:py-16 gap-8">
  <div>
    <div className="flex items-center gap-4">
      <div className="border border-black h-[1px] w-12" />
      <p className="text-sm md:text-base font-bold">KNOW ABOUT US</p>
    </div>
    <div className="pt-6 md:pt-8 px-2">
      <h1 className="font-bold text-2xl md:text-3xl mb-4 md:mb-5">
        We provide a place for children with special needs
      </h1>
      <p className="font-normal text-sm md:text-base mb-6 md:mb-9">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
      </p>
      <p className="font-normal text-sm md:text-base mb-6 md:mb-8">
        ‍Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
      </p>
      <button className="bg-[#F2C94C] p-3 rounded-sm font-medium">
        Learn more
      </button>
    </div>
  </div>
  <img
    className="w-full h-64 md:h-full object-cover rounded-lg"
    src="https://img.freepik.com/free-photo/pleased-looking-side-young-african-american-male-hat-wearing-green-shirt-isoloated-white-background_141793-138920.jpg?t=st=1723810482~exp=1723814082~hmac=6657cb9e7956a588ed788e50d4cfcfe2a584470e667ea51cbef179f1bfdc2482&w=1380"
    alt="video"
  />
</section>

      <InfoSection />
      <Footer />
    </>
  );
};

export default Home;
