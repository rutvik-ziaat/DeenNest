import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/skoolnest.png";
import schoolLogo from "../assets/icons/DeenNest.svg";
import blackDashboardIcon from "../assets/icons/blackicon.svg";
import whiteDashboardIcon from "../assets/icons/Icons.svg"; // Add your white icon

// Menu items with both icons
const menuItems = [
  {
    name: "Dashboard",
    iconDefault: blackDashboardIcon,
    iconActive: whiteDashboardIcon,
    path: "/",
  },
  {
    name: "Students",
    iconDefault: blackDashboardIcon,
    iconActive: whiteDashboardIcon,
    path: "/students",
  },
  {
    name: "Teachers",
    iconDefault: blackDashboardIcon,
    iconActive: whiteDashboardIcon,
    path: "/teachers",
  },
  {
    name: "Staff",
    iconDefault: blackDashboardIcon,
    iconActive: whiteDashboardIcon,
    path: "/staff",
  },
  {
    name: "Subjects",
    iconDefault: blackDashboardIcon,
    iconActive: whiteDashboardIcon,
    path: "/subjects",
  },
  {
    name: "Configuration",
    iconDefault: blackDashboardIcon,
    iconActive: whiteDashboardIcon,
    path: "/configuration",
  }

];

const Sidebar = () => {
  return (
    <div className="fixed left-0 top-0 h-screen w-[200px] xl:w-[240px] 2xl:w-[280px] bg-white border-r border-[#F2F2F2] z-20 flex flex-col">
      {/* Logo Section */}
      <div className="p-4 flex flex-col items-center">
        <img src={schoolLogo} alt="Logo" className="mb-4 w-32" />
        <div className="flex items-center w-full bg-[#F2F2F2] p-2 rounded-lg mb-6">
          <img src={schoolLogo} alt="School Logo" className="w-8 h-8 mr-2" />
          <p className=" text-sm font-semibold text-gray-700 font-primary">
            Bright Future Academy
          </p>
        </div>
      </div>

      {/* Menu */}
      <ul className="space-y-2 flex-1 px-4">
        {menuItems.map((item, index) => (
          <li key={index}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `flex items-center p-2 rounded-lg transition-colors duration-200 font-primary ${
                  isActive
                    ? "bg-[#063F6C] text-white font-semibold"
                    : "hover:bg-gray-100 text-gray-600"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <img
                    src={isActive ? item.iconActive : item.iconDefault}
                    alt={`${item.name} icon`}
                    className="w-3.5 h-3.5 mr-3"
                  />
                  <span className="text-sm">{item.name}</span>
                </>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
