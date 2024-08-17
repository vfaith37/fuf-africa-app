// src/pages/Donation.tsx
import React from "react";
import Header from "../components/Header";

const Donation: React.FC = () => {
  return (
    <>
      <Header />
      <section className="grid grid-cols-1 md:grid-cols-2 text-black px-5 py-10 md:py-16 gap-4 md:px-28 bg-[#FCEDC6]">
        <div>
          <div className="flex items-center gap-4 text-[#1D2130]">
            <div className="border border-black h-[1px] w-12" />
            <p className="text-sm md:text-base font-bold">TOP NEWS</p>
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
    </>
  );
};

export default Donation;
