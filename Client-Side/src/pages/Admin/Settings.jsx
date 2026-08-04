import React from "react";
import AdminNavbar from "../../components/Admin/AdminNavbar";
import AdminSidebar from "../../components/Admin/AdminSidebar";

const Settings = () => {
  return (
    <div className="min-h-screen bg-[#08111F] text-white">
      <AdminNavbar />

      <div className="flex">
        <AdminSidebar />

        <main className="flex-1 p-6">
          <div className="flex-1 bg-[#11182B]">
            {/* Heading */}

            <div className="bg-[#1E2747] h-8 flex items-center px-3">
              <h2 className="text-gray-300 text-sm font-medium">Settings</h2>
            </div>
            <div className="text-center">
              <h1 className="font-bold text-4xl">Day End Operations</h1> <br />
              <p>
                Once you close the day, daily bills will reset, but Account
                Data will remain safe.
              </p>
              <button
                className="
              mt-5
              w-60
              bg-orange-500
              hover:bg-orange-600
              py-2
              rounded-lg
              font-semibold
              transition
            "
              >
                End Day
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Settings;
