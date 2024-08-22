// src/pages/WhatWeDo.tsx
import React from "react";
import { FaDog } from "react-icons/fa6";

const WhatWeDo: React.FC = () => {
  return (
    <>
    <section className="grid grid-cols-1 md:grid-cols-2 text-black px-5 py-10 gap-4">
      <div className="flex flex-col justify-center">
        <div className="flex items-center gap-4 text-[#1D2130]">
          <div className="border border-black h-[1px] w-12" />
          <p className="text-sm md:text-base font-bold">WHAT WE DO</p>
        </div>
        <div className="pt-6 md:pt-8 px-2">
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
    <section className="px-10 py-24 text-[#1D2130] bg-[#FCEDC6]">
      <h1 className="font-bold text-4xl md:text-5xl mb-16 md:text-center">
        What we do for people with special needs
      </h1>
      <div className="md:grid md:grid-cols-2 gap-8 space-y-5">
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
  </>
  );
};

export default WhatWeDo;
