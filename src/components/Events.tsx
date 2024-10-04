import React from "react";
import HorizontalScroll from "./horizontalScrollable";
import { events } from "../data";
import { useNavigate } from "react-router-dom";

function extractDayAndMonth(dateString: string): {
  day: string;
  month: string;
} {
  // Parse the date string
  const dateParts = dateString.split(" ");
  if (dateParts.length < 2) {
    throw new Error("Invalid date string");
  }

  // Extract month and day
  const month = dateParts[0];
  const day = dateParts[1].replace(",", ""); // Remove the comma

  // Get the first three letters of the month
  const monthAbbreviation = month.substring(0, 3);

  return { day, month: monthAbbreviation };
}

const Event: React.FC = () => {
  
  const navigate = useNavigate();
	
	const handleLearnMore = (id: number) => {
		navigate(`/event/readmore/${id}`, { state: { item: events.find(data => data.id === id) } });
	};
  return (
    <div>
    <h2 className="text-3xl font-bold mb-2 px-10">Other events</h2>
    <HorizontalScroll>
    <div className="flex space-x-4 py-4">
      {events.map((item) => 
           { const { day, month } = extractDayAndMonth(item.date);
            return(
        <div key={item.id} className="flex-none rounded-xl w-[300px] md:w-[500px] bg-[#F2C94C]"
        onClick={() => handleLearnMore(item.id)}>
              <div className="flex px-10 py-8 gap-4">
              <div>
                  <p className="font-medium text-4xl">{day}</p>
                  <p className="font-medium text-base">{month}</p>
                </div>
                <div className="space-y-1">
                  <div className="flex gap-10 items-center">
                    {/* <div className="flex gap-16 items-center">
                      <p className="font-medium text-base">NEXT</p>
                      </div> */}
                    <p className="font-medium text-base">EVENTS</p>
                      <div className="border border-black h-[1px] w-6" />
                  </div>
                  <div>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  {item.theme &&
                    <h3 className="text-base font-bold">theme: {item.theme}</h3>
                  }
                  </div>
                </div>
              </div>
        </div>
      )})}
      </div>
      </HorizontalScroll>
    </div>
  );
};

export default Event;
