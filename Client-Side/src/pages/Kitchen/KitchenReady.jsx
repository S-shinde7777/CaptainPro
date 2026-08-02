import { useState } from "react";
import KitchenNavbar from "../../components/KitchenNavbar";
import { CircleCheckBig } from "lucide-react";

function KitchenReady() {

  const [orders, setOrders] = useState([
    {
      id: 1,
      table: 4,
      items: [
        "Paneer Butter Masala x2",
        "Butter Naan x4",
      ],
      readyTime: "08:45 PM",
    },
    {
      id: 2,
      table: 9,
      items: [
        "Chicken Biryani x1",
      ],
      readyTime: "08:48 PM",
    },
  ]);

  const servedOrder = (id) => {
    setOrders((prev) => prev.filter((order) => order.id !== id));

    // Firebase:
    // status = Served
  };

  return (
    <div className="min-h-screen bg-[#08111F] text-white">

      <KitchenNavbar />

      <div className="max-w-md mx-auto px-4 py-5">

        <h1 className="text-3xl font-bold flex items-center gap-2">
          <CircleCheckBig className="text-green-400" />
          Ready Orders
        </h1>

        <p className="text-gray-400 mt-1">
          Waiting for Captain
        </p>

        <div className="border-b border-slate-700 my-5"></div>

        <div className="space-y-5">

          {orders.map((order) => (

            <div
              key={order.id}
              className="bg-[#16233D] rounded-2xl border border-green-600 p-4 shadow-lg"
            >

              <div className="flex justify-between items-center">

                <h2 className="text-xl font-bold">
                  Table {order.table}
                </h2>

                <span className="text-green-400 text-sm">
                  Ready
                </span>

              </div>

              <div className="mt-4 space-y-2">

                {order.items.map((item, index) => (

                  <div
                    key={index}
                    className="text-gray-300"
                  >
                    • {item}
                  </div>

                ))}

              </div>

              <div className="mt-4 flex justify-between items-center">

                <span className="text-gray-400 text-sm">
                  {order.readyTime}
                </span>

                <button
                  onClick={() => servedOrder(order.id)}
                  className="bg-green-600 hover:bg-green-700 transition px-5 py-2 rounded-xl font-semibold"
                >
                  Served
                </button>

              </div>

            </div>

          ))}

          {orders.length === 0 && (

            <div className="text-center py-20 text-gray-500">

              <CircleCheckBig
                size={70}
                className="mx-auto mb-4 text-green-500"
              />

              <h2 className="text-xl font-semibold">
                No Ready Orders
              </h2>

            </div>

          )}

        </div>

      </div>

    </div>
  );
}

export default KitchenReady;