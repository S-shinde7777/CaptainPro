import React from "react";
import AdminNavbar from "../../components/Admin/AdminNavbar";
import AdminSidebar from "../../components/Admin/AdminSidebar";

const Account = () => {
  return (
    <div className="min-h-screen bg-[#08111F] text-white">
      <AdminNavbar />

      <div className="flex">
        <AdminSidebar />

        <main className="flex-1 p-6">
          <div className="flex-1 bg-[#11182B]">
            {/* Heading */}

            <div className="bg-[#1E2747] h-8 flex items-center px-3">
              <h2 className="text-gray-300 text-sm font-medium">
                Account Reports
              </h2>
            </div>

            {/* Report Columns */}

            <div className="grid grid-cols-4 gap-5 p-4">
              {/* Date */}

              <div>
                <div className="bg-[#252F54] rounded-sm py-1 text-center text-gray-300 text-sm">
                  Date
                </div>

                <div className="mt-3 h-[520px] bg-[#252F54] rounded-sm"></div>
              </div>

              {/* Mode */}

              <div>
                <div className="bg-[#252F54] rounded-sm py-1 text-center text-gray-300 text-sm">
                  Mode
                </div>

                <div className="mt-3 h-[520px] bg-[#252F54] rounded-sm"></div>
              </div>

              {/* Receipt */}

              <div>
                <div className="bg-[#252F54] rounded-sm py-1 text-center text-gray-300 text-sm">
                  Receipt No.
                </div>

                <div className="mt-3 h-[520px] bg-[#252F54] rounded-sm"></div>
              </div>

              {/* Amount */}

              <div>
                <div className="bg-[#252F54] rounded-sm py-1 text-center text-gray-300 text-sm">
                  Amount
                </div>

                <div className="mt-3 h-[520px] bg-[#252F54] rounded-sm"></div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Account;
