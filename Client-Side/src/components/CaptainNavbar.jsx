import { NavLink } from "react-router-dom";
import { Home, ClipboardList, ReceiptText, Bell } from "lucide-react";

function CaptainNavbar() {
  const navClass = ({ isActive }) =>
    `flex items-center gap-1 text-sm font-medium transition duration-300 ${
      isActive
        ? "text-orange-500"
        : "text-gray-300 hover:text-white"
    }`;

  return (
    <nav className="sticky top-0 z-50 bg-[#0D1528]/90 backdrop-blur-md border-b border-slate-700">

      <div className="max-w-md mx-auto h-14 px-4 flex items-center justify-between">

        {/* Left Menu */}
        <div className="flex items-center gap-6">

          <NavLink to="/captain" className={navClass}>
            <Home size={18} />
            <span>Home</span>
          </NavLink>

          <NavLink to="/orders" className={navClass}>
            <ClipboardList size={18} />
            <span>Orders</span>
          </NavLink>

          <NavLink to="/kots" className={navClass}>
            <ReceiptText size={18} />
            <span>KOT's</span>
          </NavLink>

        </div>

        {/* Notification */}
       <NavLink
          to="/notifications"
          className={({ isActive }) =>
            isActive
              ? "relative text-orange-500"
               : "relative text-gray-300 hover:text-white"
  }
>
  <Bell size={20} />

  <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>

</NavLink>

      </div>

    </nav>
  );
}

export default CaptainNavbar;