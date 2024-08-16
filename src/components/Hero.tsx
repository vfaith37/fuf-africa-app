import React from 'react';

const Hero: React.FC = () => {
  return (
    <section
      className="bg-cover bg-center h-screen flex flex-col justify-center items-center text-white"
      style={{ backgroundImage: "url('https://img.freepik.com/free-photo/celebration-labour-day-with-monochrome-view-woman-working-as-teacher_23-2151296005.jpg?t=st=1723715348~exp=1723718948~hmac=fe92aa1ea1907d266ffefb50128c0a2283f5f80cdf306e06aad1174ea35a4053&w=1380')" }}
    >
      <h1 className="text-4xl md:text-6xl font-bold">We Spread Compassion, We Create Smiles</h1>
      <div className="mt-8 space-x-4">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">What We Do</button>
        <button className="bg-white hover:bg-gray-100 text-blue-600 px-4 py-2 rounded">Play Video</button>
      </div>
    </section>
  );
}

export default Hero;
