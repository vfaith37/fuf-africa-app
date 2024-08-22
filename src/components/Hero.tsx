import React, { useEffect, useState } from "react";
import { fetchImageUrl } from "../utils/storageUtils";

const Hero: React.FC = () => {
  const [backgroundImageUrl, setBackgroundImageUrl] = useState<string>("");

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
      className="bg-cover bg-center h-screen flex flex-col justify-center items-center text-white"
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
      }}
    >
      <h1 className="text-4xl mx-7 text-center md:text-6xl font-bold">
        We Spread Compassion, We Create Smiles
      </h1>
      <div className="mt-8 space-x-4">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
          What We Do
        </button>
        <button className="bg-white hover:bg-gray-100 text-blue-600 px-4 py-2 rounded">
          Play Video
        </button>
      </div>
    </section>
  );
};

export default Hero;
