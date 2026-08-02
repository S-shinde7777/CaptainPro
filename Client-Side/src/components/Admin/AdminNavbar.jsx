import {
  Database,
  DollarSign,
  User,
  Settings,
} from "lucide-react";

function AdminNavbar() {
  return (
    <header className="bg-[#1B2340] border-b border-slate-700">

      <div className="max-w-screen-2xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}

        <div>
          <h1 className="text-3xl font-bold text-white">
            Captain<span className="text-orange-500">Pro</span>
          </h1>

          <p className="text-gray-300 text-lg">
            Dashboard
          </p>
        </div>

        {/* Menu */}

        <div className="flex items-center gap-12">

          <button className="flex flex-col items-center text-gray-300 hover:text-white duration-300">
            <Database size={26} />
            <span className="text-sm mt-1">Master Data</span>
          </button>

          <button className="flex flex-col items-center text-orange-500">
            <DollarSign size={26} />
            <span className="text-sm mt-1">Sale</span>
          </button>

          <button className="flex flex-col items-center text-gray-300 hover:text-white duration-300">
            <User size={26} />
            <span className="text-sm mt-1">Account</span>
          </button>

          <button className="flex flex-col items-center text-gray-300 hover:text-white duration-300">
            <Settings size={26} />
            <span className="text-sm mt-1">Settings</span>
          </button>

        </div>

        {/* Right Side */}

        <div className="text-right">

          <p className="text-gray-300 text-sm">
            08/07/2026
          </p>

          <p className="text-gray-500 text-xs">
            03:24 PM
          </p>

          <p className="text-white font-semibold mt-1">
            Admin
          </p>

        </div>

      </div>

    </header>
  );
}

export default AdminNavbar;