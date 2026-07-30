import { NavLink } from "react-router-dom";
import {
  House,
  ClipboardList,
  ReceiptText,
  Bell,
} from "lucide-react";

function CaptainNavbar() {
  return (
    <nav className="sticky top-0 z-50 bg-[#0E1728]/90 backdrop-blur-xl border-b border-slate-700">

      <div className="max-w-md mx-auto">

        <div className="flex items-center justify-between px-5 py-4">

          <NavLink
            to="/captain"
            className={({ isActive }) =>
              `flex items-center gap-2 transition-all duration-300 ${
                isActive
                  ? "text-orange-500"
                  : "text-gray-300 hover:text-white"
              }`
            }
          >
            <House size={20} />
            <span className="font-medium">Home</span>
          </NavLink>

          <NavLink
            to="/orders"
            className={({ isActive }) =>
              `flex items-center gap-2 transition-all duration-300 ${
                isActive
                  ? "text-orange-500"
                  : "text-gray-300 hover:text-white"
              }`
            }
          >
            <ClipboardList size={20} />
            <span className="font-medium">Orders</span>
          </NavLink>

          <NavLink
            to="/kot"
            className={({ isActive }) =>
              `flex items-center gap-2 transition-all duration-300 ${
                isActive
                  ? "text-orange-500"
                  : "text-gray-300 hover:text-white"
              }`
            }
          >
            <ReceiptText size={20} />
            <span className="font-medium">KOT's</span>
          </NavLink>

          <button className="relative text-gray-300 hover:text-white transition">

            <Bell size={22} />

            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-red-500 animate-ping"></span>

            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-red-500"></span>

          </button>

        </div>

      </div>

    </nav>
  );
}

export default CaptainNavbar;