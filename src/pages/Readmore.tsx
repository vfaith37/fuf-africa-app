import React from "react";
import { useLocation } from "react-router-dom";

const Readmore: React.FC = () => {

    const images = [
        {
            id: 1,
            title: 'Autism Outreach',
            image: 'https://img.freepik.com/free-photo/medium-shot-smiley-african-boys_23-2148860433.jpg?t=st=1726655940~exp=1726659540~hmac=9c66cce123abc322d58625aa14d7891391ecd9b197c6ff7e68219ee5bc18bd74&w=1380',
        },
        {
            id: 2,
            title: 'Autism Outreach',
            image: 'https://img.freepik.com/free-photo/medium-shot-smiley-african-boys_23-2148860433.jpg?t=st=1726655940~exp=1726659540~hmac=9c66cce123abc322d58625aa14d7891391ecd9b197c6ff7e68219ee5bc18bd74&w=1380',
        },
        {
            id: 3,
            title: 'Autism Outreach',
            image: 'https://img.freepik.com/free-photo/medium-shot-smiley-african-boys_23-2148860433.jpg?t=st=1726655940~exp=1726659540~hmac=9c66cce123abc322d58625aa14d7891391ecd9b197c6ff7e68219ee5bc18bd74&w=1380',
        },
        {
            id: 4,
            title: 'Autism Outreach',
            image: 'https://img.freepik.com/free-photo/medium-shot-smiley-african-boys_23-2148860433.jpg?t=st=1726655940~exp=1726659540~hmac=9c66cce123abc322d58625aa14d7891391ecd9b197c6ff7e68219ee5bc18bd74&w=1380',
        },
        ];

    const location = useLocation();
    const { item } = location.state || {}; // Extract the item data
  
    if (!item) {
      return <p>No data available</p>;
    }
    console.log(item);
    
    return(
        <section className="text-black px-5 md:px-10 py-10 md:py-16 xl:px-56">
        <div>
          <div className="flex items-center gap-4">
            <div className="border border-black h-[1px] w-12" />
            <p className="text-sm md:text-base font-bold">OUR PROJECT</p>
          </div>
          <div className="pt-6 md:pt-8 px-2">
            <h1 className="font-bold text-2xl md:text-3xl mb-4 md:mb-5">
            {item.title}: {item.theme}
            </h1>
            <p className="font-normal font-Roboto text-sm md:text-base mb-6 md:mb-9">
          {item.text}
            </p>
          </div>
        </div>
        <img
          className="w-full h-auto md:h-full object-cover rounded-lg"
          src="https://img.freepik.com/free-photo/pleased-looking-side-young-african-american-male-hat-wearing-green-shirt-isoloated-white-background_141793-138920.jpg?t=st=1723810482~exp=1723814082~hmac=6657cb9e7956a588ed788e50d4cfcfe2a584470e667ea51cbef179f1bfdc2482&w=1380"
          alt="video"
        />
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          {images.map((image) => (
            <div key={item.id} className="text-center md:self-end">
              <img
                src={image.image}
                alt={image.title}
                className="rounded-lg h-auto md:h-80 w-full md:w-auto mx-auto mb-4 object-cover"
              />
              
            </div>
          ))}
        </div>
      </section>
    )
}

export default Readmore;