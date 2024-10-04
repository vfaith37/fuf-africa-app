import React from "react";
import Event from "../components/Events";
import { FaLocationDot, FaRegCalendar } from "react-icons/fa6";
import { useLocation } from "react-router-dom";

interface EventData {
  title: string;
  location: string;
  date: string;
  description: string[];
  imageUrl: string;
}

const EventReadmore: React.FC = () => {

  const location = useLocation();
  const { item } = location.state || {}; // Extract the item data

  const itemData = item as EventData


  window.scrollTo(0, 0);
  return (
    <main className="text-black">
      <div className="bg-[#FCEDC6] px-5 md:px-10 py-10 md:py-16 xl:px-56 flex flex-col items-center">
        <h1 className="text-[#1D2130] font-Roboto font-bold text-6xl mb-12">
          {itemData.title}
        </h1>
        <div className="flex flex-row gap-5">
          <div className="flex flex-row gap-3 items-center">
            <FaLocationDot />
            <h2>{itemData.location}</h2>
          </div>
          <div className="flex flex-row gap-3 items-center">
            <FaRegCalendar />
            <h2>{itemData.date}</h2>
          </div>
        </div>
      </div>

      <div className="min-h-screen px-5 md:px-10 py-10 md:py-16 xl:px-56 flex flex-col">
        <h1 className="text-[#1D2130] font-Roboto font-bold text-4xl mb-8">
          About
        </h1>
        {itemData.description.map((paragraph, index) => (
          <>
          <p
            key={index}
            className="mb-5 font-Roboto text-base text-[#525560] font-normal"
            >
            {paragraph}
          </p>
          { index === 1 &&
          <img
          className="w-full h-auto md:h-96 object-cover rounded-lg mb-5"
          src={itemData.imageUrl}
          alt="Event visual"
        />
        }
            </>
        ))}
        
      </div>
      <Event />
    </main>
  );
};

export default EventReadmore;
