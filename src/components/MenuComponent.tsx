import React, { useState } from "react";

const MenuComponent: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<string>("Overview");

  const menus = [
    {
      name: "Overview",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
    },
    { name: "Impact", content: "Impact content goes here." },
    { name: "What You Get", content: "What You Get content goes here." },
  ];

  return (
    <div className="container mx-auto py-16 px-6 md:py-24 md:px-20 gap-5 flex flex-col md:flex-row font-Roboto">
      <div className=" w-full md:w-1/2">
        <h2 className="text-3xl font-bold mb-4">
          How you can contribute to caring for our kids
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
          Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc
          ut sem vitae risus tristique posuere.
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
