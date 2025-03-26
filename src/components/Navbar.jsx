import { NavLink } from "react-router-dom";
const Navbar = () => {
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
    <div className="w-[1920px] absolute h-24 bg-zinc-100 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]  flex items-center px-8 justify-between ">
      {/* Left Section - Logo & Navigation */}
      <div className="flex items-center gap-8  space-x-0">
        
        <img className="w-36 h-14" src="/logo.png" alt="Logo" />

        {/* Navigation Links id here*/}
        <div className="flex items-center justify-start gap-3 ">
          {navItems.map((item, index) => (
            <NavLink
            key={index}
            to={item.path}
            end
            className={({ isActive }) =>
              `px-2 py-2 rounded-3xl flex items-center gap-2 border-b-4 ${
                isActive ? "border-teal-500" : "border-transparent"
              } hover:border-teal-300 cursor-pointer transition-all`
            }
          >
              <img src={item.icon} alt={item.label} className="w-6 h-6" />
              <span className="text-slate-500 text-sm font-medium capitalize">
                {item.label}
              </span>
            </NavLink>
          ))}
        </div>
      </div>

      {/* Right Section - Buttons & Profile start here */}
      <div className="flex justify-start items-center gap-4">
        
        <div className="px-5 py-1 bg-gradient-to-r from-teal-300 to-sky-400 rounded-3xl shadow-md flex items-center gap-2 overflow-hidden">
          <img className="w-5 h-5" src="/icons/add_circle.svg" alt="Add" />
          <div className="text-white text-sm font-medium capitalize">ADD</div>
        </div>

        {/* AI Model Section divided */}
        <div className="inline-flex justify-start items-center gap-6">
    <div className="px-6 py-1.5 bg-zinc-100 rounded-3xl  outline-1 outline-offset-[-1px] outline-slate-400 flex justify-center items-center gap-2.5 overflow-hidden">
        <div className="w-6 h-6 relative overflow-hidden">
            <img className="w-4 h-5 left-[3.50px] top-[1.69px] absolute " src="/icons/material-symbols-light_model-training.svg" />
        </div>
        <div className="justify-start text-slate-400 text-xs font-bold font-['Helvetica'] leading-none">AI Model and Training</div>
    </div>
    <div className="w-6 h-6 relative overflow-hidden">
        <div className="w-1 h-5 left-[9.50px] top-[2px] absolute bg-gray-700" />
        <div className="w-4 h-3 left-[3.50px] top-[8px] absolute opacity-70 bg-gray-700" />
        <div className="w-5 h-[1.50px] left-[1px] top-[20.50px] absolute opacity-50 bg-gray-700" />
    </div>
    <img className="w-9 h-9 rounded-2xl" src="/icons/Elipse 5.png" />
</div>
      </div>
      
    </div>
  );
};

export default Navbar;
