// src/pages/Media.tsx
import React from "react";

const Media: React.FC = () => {
  return (
    <>
      <section className="grid grid-cols-1 xl:grid-cols-2 text-black px-5 py-10 md:py-16 gap-4 md:text-center bg-[#FCEDC6]">
        <div className="">
          <div className="flex items-center gap-4 text-[#1D2130]">
            <div className="border border-black h-[1px] w-12" />
            <p className="text-sm md:text-base font-bold">TOP NEWS</p>
          </div>
          <div className="pt-6 md:pt-8 px-2 md:px-[64px]">
            <h1 className="font-bold text-2xl md:text-5xl mb-4 md:mb-12">
              Our goal is to provide inclusive care for children with special
              needs
            </h1>
            <p className="font-normal text-sm md:text-base mb-6 md:mb-9 text-[#525560]">
              Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.
              Nunc ut sem vitae risus tristique posuere.
            </p>
            <button className="bg-[#F2C94C] px-8 py-4 rounded-sm font-medium">
              Read more
            </button>
          </div>
        </div>
       
        <div className="bg-white p-3 text-[#525560] rounded-xl space-y-10 text-center md:text-left flex flex-col md:space-y-6">
          <div className="md:flex md:flex-row md:gap-6 space-y-5">
            <img
              src="https://img.freepik.com/free-photo/pleased-looking-side-young-african-american-male-hat-wearing-green-shirt-isoloated-white-background_141793-138920.jpg?t=st=1723810482~exp=1723814082~hmac=6657cb9e7956a588ed788e50d4cfcfe2a584470e667ea51cbef179f1bfdc2482&w=1380"
              alt=""
              className="md:w-1/2 w-11/12 h-40 rounded-xl object-cover mx-auto"
            />
            <div>
              <p className="text-[#1D2130] font-bold text-xl">
                Autism Care Day
              </p>
              <p className="my-2 font-bold text-sm">15th Nov 2022</p>
              <p className="font-normal text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim
              </p>
            </div>
          </div>
          <div className="md:flex md:flex-row md:gap-6 space-y-5">
            <img
              src="https://img.freepik.com/free-photo/pleased-looking-side-young-african-american-male-hat-wearing-green-shirt-isoloated-white-background_141793-138920.jpg?t=st=1723810482~exp=1723814082~hmac=6657cb9e7956a588ed788e50d4cfcfe2a584470e667ea51cbef179f1bfdc2482&w=1380"
              alt=""
              className="md:w-1/2 w-11/12 h-40 rounded-xl object-cover mx-auto"
            />
            <div>
              <p className="text-[#1D2130] font-bold text-xl">
                Autism Care Day
              </p>
              <p className="my-2 font-bold text-sm">15th Nov 2022</p>
              <p className="font-normal text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim
              </p>
            </div>
          </div>
          <div className="md:flex md:flex-row md:gap-6 space-y-5">
            <img
              src="https://img.freepik.com/free-photo/pleased-looking-side-young-african-american-male-hat-wearing-green-shirt-isoloated-white-background_141793-138920.jpg?t=st=1723810482~exp=1723814082~hmac=6657cb9e7956a588ed788e50d4cfcfe2a584470e667ea51cbef179f1bfdc2482&w=1380"
              alt=""
              className="md:w-1/2 w-11/12 h-40 rounded-xl object-cover mx-auto"
            />
            <div>
              <p className="text-[#1D2130] font-bold text-xl">
                Autism Care Day
              </p>
              <p className="my-2 font-bold text-sm">15th Nov 2022</p>
              <p className="font-normal text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Media;
