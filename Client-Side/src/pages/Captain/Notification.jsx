import CaptainNavbar from "../../components/CaptainNavbar";
import { Bell } from "lucide-react";

const notifications = [];

function Notification() {
  return (
    <div className="min-h-screen bg-[#08111F] text-white">

      <CaptainNavbar />

      <div className="max-w-md mx-auto px-5 pt-6">

        <h1 className="text-2xl font-bold flex items-center gap-2">
          Notifications
          <Bell size={18} className="text-yellow-400" />
        </h1>

        <div className="border-b border-slate-700 mt-3"></div>

        {notifications.length === 0 ? (
          <div className="h-[65vh] flex items-center justify-center text-gray-500 text-sm">
            Empty
          </div>
        ) : (
          <div className="space-y-3 mt-5">
            {notifications.map((item, index) => (
              <div
                key={index}
                className="bg-[#16233D] rounded-xl p-4 border border-slate-700"
              >
                <h2 className="font-semibold">{item.title}</h2>

                <p className="text-gray-400 text-sm mt-1">
                  {item.message}
                </p>

                <p className="text-xs text-gray-500 mt-2">
                  {item.time}
                </p>
              </div>
            ))}
          </div>
        )}

      </div>

    </div>
  );
}

export default Notification;