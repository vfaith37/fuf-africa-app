import React from "react";

interface Event {
  title: string;
  date: string;
}

const events: Event[] = [
  {
    title: "Say no to plastic usage and save the planet",
    date: "August 20, 2024",
  },
  {
    title: "Monthly orphanage visits",
    date: "August 20, 2024",
  },
  {
    title: "Annual Tech Conference",
    date: "August 20, 2024",
  },
  {
    title: "Web Development Workshop",
    date: "September 15, 2024",
  },
];

const Event: React.FC = () => {
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

  //   // Example usage
  //   const dateString = 'August 20, 2024';
  //   const { day, month } = extractDayAndMonth(dateString);
  //   console.log(`Day: ${day}, Month: ${month}`); // Output: Day: 20, Month: Aug

  return (
    <div className="bg-gray-100 py-11 px-11">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8">Other events</h2>
        <div className="flex flex-col md:flex-row overflow-x-auto space-x-0 md:space-x-4 hide-scrollbar">
          {events.map((event, index) => {
            const { day, month } = extractDayAndMonth(event.date);
            return (
              <div
                key={index}
                className="bg-[#F2C94C] w-full p-6 rounded-xl mb-4 md:mb-0 flex gap-4"
              >
                <div>
                  <p className="font-medium text-4xl">{day}</p>
                  <p className="font-medium text-base">{month}</p>
                </div>
                <div className="">
                  <div>
                    <div className="flex gap-16 items-center">
                      <p className="font-medium text-base">NEXT</p>
                      <div className="border border-black h-[1px] w-7" />
                    </div>
                    <p className="font-medium text-base">EVENTS</p>
                  </div>
                  <h3 className="text-2xl font-bold">{event.title}</h3>
                </div>
                {/* <div className="bg-white h-12 w-12 justify-center flex items-center rounded-full absolute right-14 mt-5">
                  <FaArrowRight className="text-black" />
                </div> */}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Event;
