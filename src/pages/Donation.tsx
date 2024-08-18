// src/pages/Donation.tsx
import React from "react";
import Header from "../components/Header";
import MenuComponent from "../components/MenuComponent";
import Footer from "../components/Footer";

const Donation: React.FC = () => {
  return (
    <>
      <Header />
      <section className="grid grid-cols-1 md:grid-cols-2 text-black px-5 py-10 md:py-16 gap-4 md:px-28 bg-[#FCEDC6]">
        <div>
          <div className="flex items-center gap-4 text-[#1D2130]">
            <div className="border border-black h-[1px] w-12" />
            <p className="text-sm md:text-base font-bold">DONATE</p>
          </div>
          <div className="pt-6 md:pt-8 px-2 md:px-[64px]">
            <h1 className="font-bold text-2xl md:text-5xl mb-4 md:mb-12">
              Making a donation for our children.
            </h1>
            <p className="font-normal text-sm md:text-base mb-6 md:mb-9 text-[#525560]">
              When you donate, you’re supporting effective care to children with
              special needs—an investment in the leaders of tomorrow.
            </p>
            <button className="bg-[#F2C94C] px-8 py-4 rounded-sm font-medium">
              Donate now
            </button>
          </div>
        </div>
        <img
          src="https://img.freepik.com/free-photo/smiley-woman-holding-box-donations_23-2148687288.jpg?t=st=1723923637~exp=1723927237~hmac=5096cde6661cb627a5875d3b32327c6bf7e3682a5d58bd8c975fb30f8acccf71&w=740"
          alt=""
          className="rounded-xl object-cover w-[480px] h-[384px]"
        />
      </section>
      <MenuComponent />
      <div className="border w-[90%] mx-6 md:mx-20 bg-[#E5E5E5]" />
      <div className="container w-full py-16 px-6 md:py-24 md:px-20 gap-2 flex flex-col md:flex-row">
        <h2 className="text-3xl font-bold mb-4 md:w-1/3">
          How we use your donations
        </h2>
        <p className="text-lg text-gray-700 mb-6 md:w-1/3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
          Nunc ut sem vitae risus tristique posuere.
        </p>
        <p className="text-lg text-gray-700 mb-6 md:w-1/3">
          Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc
          ut sem vitae risus tristique posuere. Aenean faucibus nibh et justo
          cursus id rutrum lorem imperdiet.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Donation;
