import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <div className="bg-[#FFF7E5] py-10 px-6 font-Roboto">
      <section className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center lg:text-left lg:flex lg:justify-between lg:items-start mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4 lg:mb-0">
            We are a non-governmental organization
          </h1>
          <p className="text-gray-600 lg:max-w-md">
            Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. 
            Nunc ut sem vitae risus tristique posuere. Lorem ipsum dolor sit 
            amet, consectetur adipiscing elit. Suspendisse varius enim in eros 
            elementum tristique.
          </p>
        </div>

        {/* Image/Video Section */}
        <div className="relative mb-8">
          <img
            src="path-to-your-image.jpg"
            alt="NGO group"
            className="rounded-lg w-full"
          />
          <button
            className="absolute inset-0 flex items-center justify-center"
            aria-label="Play Video"
          >
            <div className="bg-white p-4 rounded-full">
              <svg
                className="w-12 h-12 text-gray-800"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1.72-9.78a.75.75 0 011.16-.64l4.5 2.25a.75.75 0 010 1.28l-4.5 2.25a.75.75 0 01-1.16-.64v-4.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </button>
        </div>

        {/* Mission and Vision Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-lg font-semibold text-gray-700 mb-2">OUR MISSION</h2>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              We make sure to provide inclusive care for children with special needs
            </h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse 
              varius enim in eros elementum tristique. Duis cursus, mi quis viverra 
              ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-700 mb-2">OUR VISION</h2>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Provide more inclusive care to children around the world
            </h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse 
              varius enim in eros elementum tristique. Duis cursus, mi quis viverra 
              ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
