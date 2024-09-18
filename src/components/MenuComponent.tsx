import React, { useState } from "react";

const MenuComponent: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<string>("Overview");

  const menus = [
    {
      name: "Overview",
      content:
        "At FUF Africa, we are dedicated to improving the lives of children through education, healthcare, and empowerment programs. Your donations help us provide scholarships, health resources, and emotional support to children in need, ensuring they have the tools and opportunities to succeed. We believe in building a brighter future for these children, and your support plays a vital role in making that vision a reality.",
    },
    { name: "Impact", content: "Every donation you make has a direct and tangible impact on the lives of children. From enabling access to quality education through scholarships to supporting health programs and rehabilitation for trauma-affected kids, your contributions help these children thrive. By donating, you’re empowering young people, particularly girls and children with special needs, to overcome challenges and build a better future. The positive ripple effect of your support extends to families and communities, fostering growth and resilience." },
    { name: "What You Get", content: "When you donate to FUF Africa, you become a part of our mission to create change. You’ll receive regular updates on our projects, highlighting the progress made thanks to your generosity. You’ll also see how your contribution has directly impacted the lives of the children we support. Additionally, you’ll be invited to events and activities where you can further engage with our mission and witness the positive outcomes of your contribution." },
  ];

  return (
    <div className="container mx-auto py-16 px-6 md:py-10 md:px-12 gap-5 flex flex-col md:flex-row font-Roboto">
      <div className=" w-full md:w-1/2">
        <h2 className="text-3xl font-bold mb-4">
          How you can contribute to caring for our kids
        </h2>
        <p className="text-lg text-gray-700 mb-6">
        There are many ways to help us care for the children we serve. You can make a one-time donation, set up a monthly contribution, or sponsor a child’s education or healthcare needs. You can also contribute by supporting specific projects, such as our Pad-A-Girl initiative or our special needs support programs. Every contribution counts, and there are flexible options to fit your capacity to give.
        </p>
      </div>
      <div className=" w-full md:w-1/2">
        <div className="flex border-b w-80">
          {menus.map((menu) => (
            <button
              key={menu.name}
              className={`text-lg pb-2 transition-all duration-200 ${menu.name === "What You Get" ? "w-36":"w-28"} ${
                activeMenu === menu.name
                  ? "border-b border-yellow-500 text-black"
                  : "text-gray-500 hover:text-black"
              }`}
              onClick={() => setActiveMenu(menu.name)}
            >
              {menu.name}
            </button>
          ))}
        </div>
        <div className="mt-6">
          {menus.map(
            (menu) =>
              activeMenu === menu.name && (
                <p key={menu.name} className="text-gray-700 text-lg">
                  {menu.content}
                </p>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuComponent;
