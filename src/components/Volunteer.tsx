import React, { useEffect, useState } from "react";
import { fetchImageUrl } from "../utils/storageUtils";

const Volunteer: React.FC = () => {
  const [backgroundImageUrl, setBackgroundImageUrl] = useState<string>("");

  useEffect(() => {
    const loadImage = async () => {
      const url = await fetchImageUrl("IMG_6742.jpg");
      if (url) {
        setBackgroundImageUrl(url);
      }
    };

    loadImage();
  }, []);

  return (
    <section className="flex flex-col justify-center items-center text-white w-full h-96 px-10 md:px-20 mb-16 my-20 md:my-24 font-Roboto">
    <div className="relative w-full h-full">
      <img src={backgroundImageUrl} alt="bg" className="w-full h-full object-cover rounded-xl" />
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center">
        <p className="font-bold text-4xl text-center mb-4">
          You can contribute to provide a place for children with special needs!
        </p>
        <div className="flex text-black gap-6">
          <button className="bg-[#F2C94C] px-4 py-2 rounded-sm font-medium">
            Join as a volunteer
          </button>
          <button className="bg-white px-4 py-2 rounded-sm font-medium">
            Donate
          </button>
        </div>
      </div>
    </div>
  </section>
  );
};

export default Volunteer;
