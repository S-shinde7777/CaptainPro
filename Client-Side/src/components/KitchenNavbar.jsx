import { NavLink } from "react-router-dom";
import {
  ClipboardList,
  ChefHat,
  CheckCircle2,
  Bell,
} from "lucide-react";

function KitchenNavbar() {

  const active = ({ isActive }) =>
    `flex items-center gap-1 text-sm font-medium transition ${
      isActive
        ? "text-orange-500"
        : "text-gray-300 hover:text-white"
    }`;

  return (
    <nav className="sticky top-0 z-50 bg-[#0D1528]/90 backdrop-blur-md border-b border-slate-700">

      <div className="max-w-md mx-auto h-14 flex justify-between items-center px-4">

        <div className="flex gap-5">

          <NavLink to="/kitchen" className={active}>
            <ClipboardList size={18}/>
            Orders
          </NavLink>

          <NavLink to="/kitchen/preparing" className={active}>
            <ChefHat size={18}/>
            Preparing
          </NavLink>

          <NavLink to="/kitchen/ready" className={active}>
            <CheckCircle2 size={18}/>
            Ready
          </NavLink>

        </div>

        <NavLink
          to="/kitchen/notification"
          className="relative text-gray-300 hover:text-white"
        >
          <Bell size={20}/>

          <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-red-500"></span>

        </NavLink>

      </div>

    </nav>
  );
}

export default KitchenNavbar;