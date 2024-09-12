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
          At FUF Africa, our foundation’s initiatives cover a variety of programs designed to meet the specific needs of marginalized groups. These initiatives include providing emotional and psychological support for individuals affected by trauma through therapy and rehabilitation, offering scholarships and educational support to help children reach their full potential. We run health programs and facilitate access to health education and preventive care, focusing on reproductive health, HIV awareness and other preventable diseases. We empower young people and communities with the skills and resources needed to improve their livelihoods. We also care for and support children with special needs by ensuring that their unique educational and social needs are met. Through our girl child empowerment outreach program, we educate, support, and promote the wellbeing of young girls and women by providing essential information on menstrual hygiene, supplying sanitary products, and creating safe spaces for their growth
        </p>
        </div>
      </div>
      <img
        className="w-full  h-auto md:h-full object-cover rounded-lg"
        src="https://img.freepik.com/free-photo/pleased-looking-side-young-african-american-male-hat-wearing-green-shirt-isoloated-white-background_141793-138920.jpg?t=st=1723810482~exp=1723814082~hmac=6657cb9e7956a588ed788e50d4cfcfe2a584470e667ea51cbef179f1bfdc2482&w=1380"
        alt="video"
      />
    </section>
    <section className="px-10 py-24 text-[#1D2130] bg-[#FCEDC6] xl:px-72">
      <h1 className="font-bold text-4xl md:text-5xl mb-16 md:text-center">
        What we do for people with special needs
      </h1>
      <div className="md:grid md:grid-cols-2 gap-8 space-y-5">
        <div className="flex items-start gap-6">
          <div className="bg-black p-2 text-white rounded-lg">
            <FaDog size={28} />
          </div>
          <div>
            <h3 className="text-lg font-bold">Therapy and Rehabilitation</h3>
            <p className="text-sm md:text-base">
            We provide emotional and psychological support for individuals affected by trauma using sports, music, dance and the arts.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-6">
          <div className="bg-black p-2 text-white rounded-lg">
            <FaDog size={28} />
          </div>
          <div>
            <h3 className="text-lg font-bold gap-6">Scholarships and Educational Support</h3>
            <p className="text-sm md:text-base">
            We run health programs and facilitate access to health education and preventive care.
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
            We run health programs and facilitate access to health education and preventive care.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-6">
          <div className="bg-black p-2 text-white rounded-lg">
            <FaDog size={28} />
          </div>
          <div>
            <h3 className="text-lg font-bold">Empowerment Initiatives:</h3>
            <p className="text-sm md:text-base">
            We equip young people and communities with the necessary skills and resources to improve their livelihoods.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-6">
          <div className="bg-black p-2 text-white rounded-lg">
            <FaDog size={28} />
          </div>
          <div>
            <h3 className="text-lg font-bold gap-6">Special Needs Support</h3>
            <p className="text-sm md:text-base">
            We care for and support children with special needs by ensuring that their unique educational and social needs are met.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-6">
          <div className="bg-black p-2 text-white rounded-lg">
            <FaDog size={28} />
          </div>
          <div>
            <h3 className="text-lg font-bold">Girl Child Empowerment:</h3>
            <p className="text-sm md:text-base">
            We educate, support, and promote the wellbeing of young girls and women through our outreach programs.
            </p>
          </div>
        </div>
       
      </div>
    </section>
  </>
  );
};

export default WhatWeDo;
