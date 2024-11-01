import React, { useEffect, useState } from "react";
import { fetchImageUrl } from "../utils/storageUtils";
import { FaRegCirclePlay } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Hero: React.FC = () => {
  const [backgroundImageUrl, setBackgroundImageUrl] = useState<string>("");
const navigate = useNavigate();
  useEffect(() => {
    const loadImage = async () => {
      const url = await fetchImageUrl("IMG_7066.jpg");
      if (url) {
        setBackgroundImageUrl(url);
      }
    };

    loadImage();
  }, []);

  return (
    <section
      className="bg-cover bg-center h-auto py-8 md:py-0 md:h-[650px] flex flex-col text-white"
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
      }}
    >
      <div className="pl-4 md:pl-28 w-[447px] md:w-[600px] pt-8 md:pt-20">
      <h1 className="text-5xl md:text-6xl font-bold">
        We Spread Compassion, We Create Smiles
      </h1>
      <div className="mt-8 space-x-4">
        <button className="bg-white text-black px-4 py-2 rounded" onClick={()=>{navigate("what-we-do")}}>
          What We Do
        </button>
        <button className="text-white px-4 py-2" onClick={()=>{navigate("about")}}>
          <div className="items-center flex gap-2">
         <FaRegCirclePlay />
          Play Video
          </div>
        </button>
      </div>
      </div>
      <div className="flex justify-between items-center px-4 pt-20 md:pt-0 md:mt-48">
        <h2 className="font-normal text-lg text-center w-64">230 children under our care</h2>
        <div className="w-full border border-white h-[1px]" />
        <h2 className="font-normal text-lg text-center w-64">58 donations collected</h2>
      </div>
    </section>
  );
};

export default Hero;
