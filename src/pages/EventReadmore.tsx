import React, { useEffect, useState } from "react";
import { FaLocationDot, FaRegCalendar } from "react-icons/fa6";
import { useLocation } from "react-router-dom";
import PWHD from "../components/ProjectsWeHaveDone";
import Volunteer from "../components/Volunteer";
import { getImageUrl } from "../function/getImage";

interface EventData {
  title: string;
  location: string;
  date: string;
  description: string[];
  imageUrl: string;
  images: string[];
}

interface LocationState {
  item: EventData;
}

const EventReadmore: React.FC = () => {
  const location = useLocation();
  const { item } = (location.state as LocationState) || {};
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [mainImage, setMainImage] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchImages = async () => {
      if (!item) {
        setError("Event data not found");
        setIsLoading(false);
        return;
      }

      try {
        setIsLoading(true);
        const mainImageUrl = await getImageUrl(item.imageUrl);
        const galleryUrls = await Promise.all(
          item.images.map((imageName) => getImageUrl(imageName))
        );

        // Handle null values from getImageUrl
        if (mainImageUrl) {
          setMainImage(mainImageUrl);
        }

        // Filter out any null values from gallery URLs
        const validGalleryUrls = galleryUrls.filter((url): url is string => url !== null);
        setImageUrls(validGalleryUrls);
      } catch (error) {
        setError("Failed to load images");
        console.error("Error fetching images:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
    window.scrollTo(0, 0);
  }, [item]);

  if (!item) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-600">Event not found</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-red-600">{error}</p>
      </div>
    );
  }

  return (
    <main className="text-black">
      {/* Header Section */}
      <div className="bg-[#FCEDC6] px-5 md:px-10 py-10 md:py-16 xl:px-56">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-[#1D2130] font-Roboto font-bold text-4xl md:text-6xl mb-8 md:mb-12">
            {item.title}
          </h1>
          <div className="flex flex-wrap gap-5">
            <div className="flex items-center gap-3">
              <FaLocationDot className="text-gray-600" />
              <span className="text-gray-800">{item.location}</span>
            </div>
            <div className="flex items-center gap-3">
              <FaRegCalendar className="text-gray-600" />
              <span className="text-gray-800">{item.date}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="min-h-screen px-5 md:px-10 py-10 md:py-16 xl:px-56">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-[#1D2130] font-Roboto font-bold text-3xl md:text-4xl mb-8">
            About
          </h2>

          {/* Description */}
          <div className="space-y-6">
            {item.description.map((paragraph, index) => (
              <p
                key={index}
                className="font-Roboto text-base text-[#525560] font-normal leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Main Image */}
          {isLoading ? (
            <div className="animate-pulse bg-gray-200 w-full h-96 rounded-lg mt-8" />
          ) : mainImage && (
            <img
              className="w-full h-auto md:h-[500px] object-cover rounded-lg mt-8"
              src={mainImage}
              alt={item.title}
            />
          )}

          {/* Image Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mt-12 md:mt-20">
            {isLoading
              ? Array(3)
                  .fill(null)
                  .map((_, index) => (
                    <div
                      key={index}
                      className="animate-pulse bg-gray-200 h-80 rounded-lg"
                    />
                  ))
              : imageUrls.map((url, index) => (
                  <div key={index} className="aspect-w-4 aspect-h-3">
                    <img
                      src={url}
                      alt={`${item.title} - Image ${index + 1}`}
                      className="rounded-lg w-full h-80 object-cover"
                    />
                  </div>
                ))}
          </div>
        </div>
      </div>

      {/* Additional Components */}
      <PWHD />
      <Volunteer />
    </main>
  );
};

export default EventReadmore;