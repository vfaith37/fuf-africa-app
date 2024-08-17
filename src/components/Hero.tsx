import React from "react";

const Hero: React.FC = () => {
  return (
    <section
      className="bg-cover bg-center h-screen flex flex-col justify-center items-center text-white"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/free-photo/medium-shot-smiley-kids-playing-together_23-2149479914.jpg?t=st=1723927290~exp=1723930890~hmac=1aa0e36e0b104ebc6c767f39302208082edf453e68c662dad9bda6c222f9ef3f&w=826')",
      }}
    >
      <h1 className="text-4xl md:text-6xl font-bold">
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
