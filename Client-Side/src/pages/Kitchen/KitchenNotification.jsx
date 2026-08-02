import KitchenNavbar from "../../components/KitchenNavbar";
import {
  Bell,
  CheckCircle2,
  CircleX,
  Pencil,
  ChefHat,
} from "lucide-react";

const notifications = [
  {
    id: 1,
    type: "new",
    title: "New Order Received",
    table: 4,
    time: "08:35 PM",
  },
  {
    id: 2,
    type: "accepted",
    title: "Order Accepted",
    table: 9,
    time: "08:38 PM",
  },
  {
    id: 3,
    type: "updated",
    title: "Order Modified",
    table: 12,
    time: "08:42 PM",
  },
  {
    id: 4,
    type: "cancelled",
    title: "Order Cancelled",
    table: 2,
    time: "08:45 PM",
  },
];

function KitchenNotification() {
  return (
    <div className="min-h-screen bg-[#08111F] text-white">

      <KitchenNavbar />

      <div className="max-w-md mx-auto px-4 py-5">

        <h1 className="text-3xl font-bold flex items-center gap-2">
          <Bell className="text-yellow-400" />
          Notifications
        </h1>

        <p className="text-gray-400 mt-1">
          Kitchen Updates
        </p>

        <div className="border-b border-slate-700 my-5"></div>

        <div className="space-y-4">

          {notifications.map((item) => (

            <div
              key={item.id}
              className="bg-[#16233D] rounded-2xl border border-slate-700 p-4 hover:border-blue-500 transition"
            >

              <div className="flex justify-between">

                <div className="flex gap-3">

                  {item.type === "new" && (
                    <Bell className="text-cyan-400" size={22}/>
                  )}

                  {item.type === "accepted" && (
                    <ChefHat className="text-orange-400" size={22}/>
                  )}

                  {item.type === "updated" && (
                    <Pencil className="text-yellow-400" size={22}/>
                  )}

                  {item.type === "cancelled" && (
                    <CircleX className="text-red-500" size={22}/>
                  )}

                  <div>

                    <h2 className="font-semibold">
                      {item.title}
                    </h2>

                    <p className="text-gray-400 text-sm">
                      Table {item.table}
                    </p>

                  </div>

                </div>

                <span className="text-xs text-gray-500">
                  {item.time}
                </span>

              </div>

            </div>

          ))}

          {notifications.length === 0 && (

            <div className="py-24 text-center text-gray-500">

              <CheckCircle2
                size={70}
                className="mx-auto mb-4"
              />

              No Notifications

            </div>

          )}

        </div>

      </div>

    </div>
  );
}

export default KitchenNotification;