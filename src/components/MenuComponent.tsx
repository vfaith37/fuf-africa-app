import React, { useState } from "react";
import { menus } from "../data";

const MenuComponent: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<string>("Overview");

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
