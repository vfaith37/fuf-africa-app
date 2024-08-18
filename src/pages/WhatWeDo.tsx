// src/pages/WhatWeDo.tsx
import React from "react";
import Header from "../components/Header";
import { FaDog } from "react-icons/fa6";
import Footer from "../components/Footer";

const WhatWeDo: React.FC = () => {
  return (
    <>
      <Header />
      <section className="grid grid-cols-1 md:grid-cols-2 text-black px-5 py-10 md:py-16 gap-4 md:px-28">
        <div>
          <div className="flex items-center gap-4 text-[#1D2130]">
            <div className="border border-black h-[1px] w-12" />
            <p className="text-sm md:text-base font-bold">WHAT WE DO</p>
          </div>
          <div className="pt-6 md:pt-8 px-2 md:px-[64px]">
            <h1 className="font-bold text-2xl md:text-5xl mb-4 md:mb-8">
              We are working cross country
            </h1>
            <p className="font-normal text-sm md:text-base mb-6 md:mb-9 text-[#525560]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
            </p>
          </div>
        </div>
        <img
          className="w-full  h-auto md:h-full object-cover rounded-lg"
          src="https://img.freepik.com/free-photo/pleased-looking-side-young-african-american-male-hat-wearing-green-shirt-isoloated-white-background_141793-138920.jpg?t=st=1723810482~exp=1723814082~hmac=6657cb9e7956a588ed788e50d4cfcfe2a584470e667ea51cbef179f1bfdc2482&w=1380"
          alt="video"
        />
      </section>
      <section className="px-8 py-24 md:px-28 mb-16 text-[#1D2130] bg-[#FCEDC6]">
        <h1 className="font-bold text-4xl md:text-5xl mb-16">
          What we do for people with special needs
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          <div className="flex items-start gap-6">
            <div className="bg-black p-2 text-white rounded-lg">
              <FaDog size={28} />
            </div>
            <div>
              <h3 className="text-lg font-bold">Family support</h3>
              <p className="text-sm md:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-6">
            <div className="bg-black p-2 text-white rounded-lg">
              <FaDog size={28} />
            </div>
            <div>
              <h3 className="text-lg font-bold gap-6">Health benefits</h3>
              <p className="text-sm md:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-6">
            <div className="bg-black p-2 text-white rounded-lg">
              <FaDog size={28} />
            </div>
            <div>
              <h3 className="text-lg font-bold">Family support</h3>
              <p className="text-sm md:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-6">
            <div className="bg-black p-2 text-white rounded-lg">
              <FaDog size={28} />
            </div>
            <div>
              <h3 className="text-lg font-bold gap-6">Health benefits</h3>
              <p className="text-sm md:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-6">
            <div className="bg-black p-2 text-white rounded-lg">
              <FaDog size={28} />
            </div>
            <div>
              <h3 className="text-lg font-bold">Scholarships</h3>
              <p className="text-sm md:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-6">
            <div className="bg-black p-2 text-white rounded-lg">
              <FaDog size={28} />
            </div>
            <div>
              <h3 className="text-lg font-bold">Therapy</h3>
              <p className="text-sm md:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default WhatWeDo;
