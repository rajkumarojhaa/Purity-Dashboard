import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", icon: "/icons/home.svg", path: "/home" },
    { label: "Live Wall", icon: "/icons/video_call.svg", path: "/LiveWall" },
    { label: "Events", icon: "/icons/event_upcoming.svg", path: "/Events" },
    { label: "Watchlist", icon: "/icons/format_list_bulleted.svg", path: "/" },
    { label: "App Stack", icon: "/icons/ar_stickers.svg", path: "/appstack" },
    { label: "Alert", icon: "/icons/warning.svg", path: "/Alert" },
    { label: "Licence", icon: "/icons/id_card.svg", path: "/Licence" },
  ];

  return (
    <div className="w-full xl:w-[1920px] max-w-full absolute h-16 md:h-20 lg:h-24 bg-zinc-100 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] flex items-center px-4 md:px-6 lg:px-8 justify-between">
      {/* Left Section - Logo & Navigation */}
      <div className="flex items-center gap-2 md:gap-3 lg:gap-4">
        <img
          className="w-18 h-9 md:w-24 md:h-12 lg:w-28 lg:h-14 xl:w-36 xl:h-14"
          src="/logo.png"
          alt="Logo"
        />
        

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-1 lg:gap-1.5">
          {navItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              end
              className={({ isActive }) =>
                `px-2 py-2 rounded-3xl flex items-center gap-0.5 border-b-4 ${
                  isActive ? "border-teal-500" : "border-transparent"
                } hover:border-teal-300 cursor-pointer transition-all`
              }
            >
              <img
                src={item.icon}
                alt={item.label}
                className="w-4 h-4 md:w-5 md:h-6 lg:w-6 lg:h-5"
              />
              <span className="text-xs md:text-sm  font-medium font-['Poppins'] capitalize leading-none text-slate-400 justify-start">
                {item.label}
              </span>
            </NavLink>
          ))}
        </div>
      </div>

      {/* Right Section - Buttons & Profile */}
      <div className="flex justify-start items-center gap-1 md:gap-2">
        <div className="px-3 py-1 md:px-4 md:py-1 lg:px-5 lg:py-1 bg-gradient-to-r from-teal-300 to-sky-400 rounded-3xl shadow-md flex items-center gap-2">
          <img
            className="w-2 h-3 md:w-5 md:h-5"
            src="/icons/add_circle.svg"
            alt="Add"
          />
          <div className="text-white text-xs md:text-sm font-medium capitalize">
            ADD
          </div>
        </div>

        {/* AI Model Section */}
        <div className="inline-flex items-center gap-1 md:gap-2 ">
          <div className="px-2 py-1 md:px-6 md:py-1.5 bg-zinc-100 rounded-3xl outline-1 outline-offset-[-4px] outline-slate-400 flex items-center gap-0">
            <img
              className="w-4 h-4 md:w-5 md:h-5"
              src="/icons/material-symbols-light_model-training.svg"
              alt="AI Model"
            />
            <div className="text-center text-xs md:text-sm font-bold text-slate-400">
              AI Model and Training
            </div>
          </div>

          <img
            className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6"
            src="/icons/solar.svg"
            alt="Solar"
          />

          
          <img
            className="w-6 h-6 md:w-7 md:h-7 lg:w-9 lg:h-9 rounded-2xl"
            src="/icons/Elipse 5.png"
            alt="Profile"
          />
        </div>
         {/* Mobile Menu Button */}
         <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
       {/* Mobile Menu */}
       {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-900 text-white flex flex-col items-center space-y-4 py-5 md:hidden z-50">
          {navItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                `px-2 py-2 rounded-3xl flex items-center gap-0.5 border-b-4 ${
                  isActive ? "border-teal-500" : "border-transparent"
                } `
              }
            >
              <img src={item.icon} alt={item.label} className="w-5 h-5" />
              <span className="text-sm font-medium capitalize">{item.label}</span>
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
