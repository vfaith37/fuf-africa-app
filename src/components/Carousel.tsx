import React, { useState } from 'react';

type CarouselItem = {
  id: number;
  title: string;
  image: string;
};

const carouselData: CarouselItem[] = [
  {
    id: 1,
    title: 'Item 1',
    image: 'https://via.placeholder.com/400x200?text=Slide+1',
  },
  {
    id: 2,
    title: 'Item 2',
    image: 'https://via.placeholder.com/400x200?text=Slide+2',
  },
  {
    id: 3,
    title: 'Item 3',
    image: 'https://via.placeholder.com/400x200?text=Slide+3',
  },
];

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const newIndex = currentIndex === 0 ? carouselData.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex = currentIndex === carouselData.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative w-full max-w-lg mx-auto">
      <div className="overflow-hidden relative">
        <div
          className="whitespace-nowrap transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {carouselData.map((item) => (
            <div
              key={item.id}
              className="inline-block w-full h-64 flex-shrink-0"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2"
        onClick={prevSlide}
      >
        Prev
      </button>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2"
        onClick={nextSlide}
      >
        Next
      </button>
      <div className="flex justify-center mt-4">
        {carouselData.map((_, index) => (
          <button
            key={index}
            className={`h-3 w-3 rounded-full mx-1 ${index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'}`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
