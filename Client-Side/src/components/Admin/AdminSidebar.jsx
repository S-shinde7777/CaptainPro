import { NavLink } from "react-router-dom";
import {
  ClipboardList,
  Receipt,
  FileText,
  ChefHat,
  Wallet,
  Users,
  Shield,
} from "lucide-react";

function AdminSidebar() {
  const menu = [
    {
      name: "Order Entry",
      icon: <ClipboardList size={18} />,
      path: "/admin/dashboard",
    },
    {
      name: "Pending Bills",
      icon: <Receipt size={18} />,
      path: "/admin/pending-bills",
    },
    {
      name: "Bills",
      icon: <FileText size={18} />,
      path: "/admin/bills",
    },
    {
      name: "KOT's",
      icon: <ChefHat size={18} />,
      path: "/admin/kot",
    },
    {
      name: "Submit Cash",
      icon: <Wallet size={18} />,
      path: "/admin/cash",
    },
    {
      name: "Manage Users",
      icon: <Users size={18} />,
      path: "/admin/users",
    },
  ];

  return (
    <aside className="w-64 bg-[#111A31] border-r border-slate-700 flex flex-col justify-between">

      {/* Menu */}

      <div>

        {menu.map((item) => (

          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-5 py-4 border-b border-slate-700 transition
              ${
                isActive
                  ? "bg-[#1B2340] text-orange-500 border-l-4 border-orange-500"
                  : "text-gray-300 hover:bg-[#1B2340] hover:text-white"
              }`
            }
          >
            {item.icon}
            <span>{item.name}</span>
          </NavLink>

        ))}

      </div>

      {/* Upgrade Card */}

      <div className="border-t border-slate-700 p-6">

        <div className="bg-[#1B2340] rounded-xl p-5 text-center">

          <Shield
            size={36}
            className="mx-auto text-orange-500 mb-3"
          />

          <h2 className="text-white text-lg font-bold">
            Upgrade
          </h2>

          <h3 className="text-2xl font-bold">
            Captain
            <span className="text-orange-500">Pro</span>
          </h3>

          <button
            className="
              mt-5
              w-full
              bg-orange-500
              hover:bg-orange-600
              py-2
              rounded-lg
              font-semibold
              transition
            "
          >
            Upgrade
          </button>

        </div>

      </div>

    </aside>
  );
}

export default AdminSidebar;