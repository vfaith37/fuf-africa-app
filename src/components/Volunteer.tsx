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
    <section className="flex flex-col justify-center items-center text-white px-4 h-96 mb-16 my-20 md:my-24">
      <div
        className="bg-cover flex flex-col justify-center items-center text-white w-full rounded-lg h-96 px-6"
        style={{
          backgroundImage: `url(${backgroundImageUrl})`,
        }}
      >
        <p className="font-bold text-4xl text-center mb-4 w-[620px]">
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
    </section>
  );
};

export default Volunteer;
