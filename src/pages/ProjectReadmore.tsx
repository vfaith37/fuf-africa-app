import React from "react";
import { useLocation } from "react-router-dom";
import PWHD from "../components/ProjectsWeHaveDone";
import Volunteer from "../components/Volunteer";

interface Item {
  title: string;
  theme?: string;
  paragraphs: string[];
  images: string[]; // Assuming images are just URLs. Update if they have more fields.
  videoUrl?: string; // Optional video URL
}

const ProjectReadmore: React.FC = () => {
  const location = useLocation();
  const { item } = location.state || {}; // Extract the item data

  window.scrollTo(0, 0);

  
  // Ensure 'item' conforms to the 'Item' interface
  const itemData = item as Item;

  if (!itemData) {
    return <p>No data available</p>;
  }

  return (
    <section className="text-black px-5 md:px-10 py-10 md:py-16 xl:px-56">
      <div>
        <div className="flex items-center gap-4">
          <div className="border border-black h-[1px] w-12" />
          <p className="text-sm md:text-base font-bold">OUR PROJECT</p>
        </div>
        <div className="pt-6 md:pt-8 px-2">
          <h1 className="font-bold text-2xl md:text-3xl mb-4 md:mb-5">
            {itemData.title}{itemData.theme ? ":" : null} {itemData.theme}
          </h1>
          {itemData.paragraphs?.map((paragraph, index) => (
            <p
              key={index}
              className="font-normal font-Roboto text-sm md:text-base mb-6 md:mb-9"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      {/* Video or Image Display */}
      {itemData.videoUrl ? (
        <video controls className="w-full h-auto md:h-full object-cover rounded-lg">
          <source src={itemData.videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <img
          className="w-full h-auto md:h-full object-cover rounded-lg"
          src="https://img.freepik.com/free-photo/pleased-looking-side-young-african-american-male-hat-wearing-green-shirt-isoloated-white-background_141793-138920.jpg?t=st=1723810482~exp=1723814082~hmac=6657cb9e7956a588ed788e50d4cfcfe2a584470e667ea51cbef179f1bfdc2482&w=1380"
          alt="Project visual"
        />
      )}

      {/* Image Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
        {itemData.images?.map((imageUrl: string, index: number) => (
          <div key={index} className="text-center md:self-end">
            <img
              src={imageUrl}
              alt={`Project image ${index + 1}`}
              className="rounded-lg h-auto md:h-80 w-full md:w-auto mx-auto mb-4 object-cover"
            />
          </div>
        ))}
      </div>
      <PWHD />
      <Volunteer />
    </section>
  );
};

export default ProjectReadmore;
