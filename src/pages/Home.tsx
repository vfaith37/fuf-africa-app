// src/pages/Home.tsx
import React from "react";
import Hero from "../components/Hero";
import InfoSection from "../components/InfoSection";
import { FaDog } from "react-icons/fa6";
import Volunteer from "../components/Volunteer";
import Event from "../components/Events";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <section className="grid grid-cols-1 md:grid-cols-2 text-black px-5 md:px-10 py-10 md:py-16 xl:px-56 gap-8">
        <div>
          <div className="flex items-center gap-4">
            <div className="border border-black h-[1px] w-12" />
            <p className="text-sm md:text-base font-bold">KNOW ABOUT US</p>
          </div>
          <div className="pt-6 md:pt-8 px-2">
            <h1 className="font-bold text-2xl md:text-3xl mb-4 md:mb-5">
            TRANSFORMING LIVES AND EMPOWERING COMMUNITIES, ONE INITIATIVE AT A TIME: THE FRANCISCO UDOFIA FOUNDATION.
            </h1>
            <p className="font-normal font-Roboto text-sm md:text-base mb-6 md:mb-9">
            The Francisco Udofia Foundation (FUF), founded by Francisco Biatus Udofia in July 2023, was born out of a deep passion for creating lasting change and holistic transformation in the lives of youths and disadvantaged communities. This foundation focuses on providing training, empowerment, and exposure to life-changing innovations, ensuring that the most vulnerable members of society receive the support they need to thrive. At its core, FUF is committed to spreading love and compassion on a broader scale, offering essential resources, services, and opportunities that improve the wellbeing and prospects of children and communities, particularly in Africa.
            </p>
              {/* <p className="font-normal text-sm md:text-base mb-6 md:mb-8">
                ‍Duis cursus, mi quis viverra ornare, eros dolor interdum nulla,
                ut commodo diam libero vitae erat. Aenean faucibus nibh et justo
                cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus
                tristique posuere.
              </p> */}
            <button className="bg-[#F2C94C] p-3 rounded-sm font-medium">
              Learn more
            </button>
          </div>
        </div>
        <img
          className="w-full h-auto md:h-full object-cover rounded-lg"
          src="https://img.freepik.com/free-photo/pleased-looking-side-young-african-american-male-hat-wearing-green-shirt-isoloated-white-background_141793-138920.jpg?t=st=1723810482~exp=1723814082~hmac=6657cb9e7956a588ed788e50d4cfcfe2a584470e667ea51cbef179f1bfdc2482&w=1380"
          alt="video"
        />
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-24 bg-[#FEF5E7] px-5 md:px-10 py-10 md:py-16 xl:px-56">
        <div className="flex flex-col justify-center order-2 md:order-1">
          <div className="flex items-center gap-2 mb-4">
            <div className="border border-black h-[1px] w-12" />
            <p className="text-sm md:text-base font-bold">WHAT WE DO</p>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Some services we provide
          </h2>
          <p className="text-sm md:text-base mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
            <div className="md:hidden order-3 my-8">
              <img
                className="w-full h-auto object-cover rounded-lg"
                src="https://img.freepik.com/free-photo/pleased-looking-side-young-african-american-male-hat-wearing-green-shirt-isoloated-white-background_141793-138920.jpg?t=st=1723810482~exp=1723814082~hmac=6657cb9e7956a588ed788e50d4cfcfe2a584470e667ea51cbef179f1bfdc2482&w=1380"
                alt="Family support"
              />
            </div>
          </p>
          <div className="space-y-6">
            <div className="flex items-start gap-6">
              <div className="bg-black p-2 text-white rounded-lg">
                <FaDog color="#FCEDC6" size={28} />
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
                <FaDog color="#FCEDC6" size={28} />
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
                <FaDog color="#FCEDC6" size={28} />
              </div>
              <div>
                <h3 className="text-lg font-bold">Scholarships and Educational Support</h3>
                <p className="text-sm md:text-base">
                FUF provides scholarships and educational resources to help children reach their full potential.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="bg-black p-2 text-white rounded-lg">
                <FaDog color="#FCEDC6" size={28} />
              </div>
              <div>
                <h3 className="text-lg font-bold">Therapy</h3>
                <p className="text-sm md:text-base">
                We provide emotional and psychological support for individuals affected by trauma using sports, music, dance and the arts.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:block order-1 md:order-2 mt-12">
          <img
            className="w-[480px] h-[658px] object-cover rounded-lg"
            src="https://img.freepik.com/free-photo/pleased-looking-side-young-african-american-male-hat-wearing-green-shirt-isoloated-white-background_141793-138920.jpg?t=st=1723810482~exp=1723814082~hmac=6657cb9e7956a588ed788e50d4cfcfe2a584470e667ea51cbef179f1bfdc2482&w=1380"
            alt="Family support"
          />
        </div>
      </section>
      <InfoSection />
      <Volunteer />
      <Event />
    </>
  );
};

export default Home;
