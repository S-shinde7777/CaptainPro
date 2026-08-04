import React from "react";
import AdminNavbar from "../../components/Admin/AdminNavbar";
import AdminSidebar from "../../components/Admin/AdminSidebar";


const MasterData = () => {
  return (
    <div className="min-h-screen bg-[#08111F] text-white">
      <AdminNavbar />

      <div className="flex">
        <AdminSidebar />

        <main className="flex-1 p-6">
          <div className="flex-1 bg-[#0F172A] p-6 overflow-y-auto">
            {/* Top Heading */}
            <div className="bg-[#1B2340] px-4 py-2 rounded-md mb-4">
              <h2 className="text-white text-sm font-medium">
                Permanent Sale Master Reports
              </h2>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-5 mb-6">
              <div className="bg-[#1B2340] rounded-md py-4 text-center">
                <p className="text-gray-400 text-sm">All Time Total Sale</p>

                <h2 className="text-3xl font-bold text-white mt-2">$12035</h2>
              </div>

              <div className="bg-[#1B2340] rounded-md py-4 text-center">
                <p className="text-gray-400 text-sm">Total Bills</p>

                <h2 className="text-3xl font-bold text-white mt-2">58</h2>
              </div>

              <div className="bg-[#1B2340] rounded-md py-4 text-center">
                <p className="text-gray-400 text-sm">Total Days</p>

                <h2 className="text-3xl font-bold text-white mt-2">36</h2>
              </div>
            </div>

            {/* Tables */}
            <div className="grid grid-cols-4 gap-5">
              {/* Date */}

              <div>
                <div className="bg-[#1B2340] text-center py-2 rounded-md text-gray-300">
                  Date
                </div>

                <div className="bg-[#1B2340] mt-3 rounded-md h-[430px]"></div>
              </div>

              {/* Mode */}

              <div>
                <div className="bg-[#1B2340] text-center py-2 rounded-md text-gray-300">
                  Mode
                </div>

                <div className="bg-[#1B2340] mt-3 rounded-md h-[430px]"></div>
              </div>

              {/* Bill Count */}

              <div>
                <div className="bg-[#1B2340] text-center py-2 rounded-md text-gray-300">
                  Bill Count
                </div>

                <div className="bg-[#1B2340] mt-3 rounded-md h-[430px]"></div>
              </div>

              {/* Amount */}

              <div>
                <div className="bg-[#1B2340] text-center py-2 rounded-md text-gray-300">
                  Amount
                </div>

                <div className="bg-[#1B2340] mt-3 rounded-md h-[430px]"></div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default MasterData;
