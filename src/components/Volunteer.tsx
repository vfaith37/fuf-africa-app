import React, { useEffect, useState } from "react";
import { fetchImageUrl } from "../utils/storageUtils";
import { useNavigate } from "react-router-dom";

const Volunteer: React.FC = () => {
  const [backgroundImageUrl, setBackgroundImageUrl] = useState<string>("");
  const [loadingImage, setLoadingImage] = useState<boolean>(true);
  const navigate = useNavigate();

  useEffect(() => {
    const loadImage = async () => {
      const url = await fetchImageUrl("volunteer.jpeg");
      if (url) {
        const img = new Image();
        img.src = url;
        img.onload = () => {
          setBackgroundImageUrl(url);
          setLoadingImage(false);
        };
      }
    };

    loadImage();
  }, []);

  return (
    <section className="flex flex-col justify-center items-center text-white px-4 md:px-16 h-96 mb-16 my-20 md:my-24">
      <div
        className={`relative flex flex-col justify-center items-center text-white w-full rounded-lg h-96 px-6 overflow-hidden ${
          loadingImage ? "bg-gray-200 animate-pulse" : ""
        }`}
      >
        {/* Background image with overlay */}
        {!loadingImage && (
          <div
            className="absolute inset-0 bg-cover"
            style={{
              backgroundImage: `url(${backgroundImageUrl})`,
            }}
          >
            {/* Black overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-65"></div>
          </div>
        )}

        {loadingImage && (
          <div className="h-full w-full bg-gray-300 rounded-lg animate-pulse"></div>
        )}

        {!loadingImage && (
          <div className="relative z-10 flex flex-col items-center w-full">
            <p className="font-bold text-4xl text-center mb-4 max-w-3xl">
              You can contribute to provide a place for children with special
              needs!
            </p>
            <div className="flex justify-center text-black gap-6 w-full">
              <a
                className="bg-[#F2C94C] px-4 py-2 rounded-sm font-medium"
                href="https://docs.google.com/forms/d/e/1FAIpQLSdeFm8zcu4Fnpn6szn8HP_6IDSp-Q_2r7vrgMurc5K5PBgkNg/closedform"
                target="blank"
              >
                Join as a volunteer
              </a>
              <button
                className="bg-white px-4 py-2 rounded-sm font-medium"
                onClick={() => navigate("/donate")}
              >
                Donate
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Volunteer;