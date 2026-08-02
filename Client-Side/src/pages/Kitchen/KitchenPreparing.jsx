import { useState } from "react";
import KitchenNavbar from "../../components/KitchenNavbar";
import KitchenOrderCard from "../../components/KitchenOrderCard";

function KitchenPreparing() {

  const [orders, setOrders] = useState([
    {
      id: 1,
      table: 4,
      time: "05:12",
      items: [
        { name: "Paneer Butter Masala", qty: 2 },
        { name: "Butter Naan", qty: 4 },
      ],
    },
    {
      id: 2,
      table: 9,
      time: "02:48",
      items: [
        { name: "Chicken Biryani", qty: 1 },
      ],
    },
  ]);

  const readyOrder = (id) => {
    setOrders(orders.filter((order) => order.id !== id));

    // पुढे Firebase मध्ये status = Ready करू
  };

  return (
    <div className="min-h-screen bg-[#08111F] text-white">

      <KitchenNavbar />

      <div className="max-w-md mx-auto px-4 py-5">

        <h1 className="text-3xl font-bold">
          Preparing
        </h1>

        <p className="text-gray-400 mt-1">
          Cooking Orders
        </p>

        <div className="border-b border-slate-700 mt-4 mb-5"></div>

        <div className="space-y-5">

          {orders.map((order) => (

            <KitchenOrderCard
              key={order.id}
              table={order.table}
              time={`⏱ ${order.time}`}
              items={order.items}
              buttonText="Ready"
              buttonColor="bg-orange-500 hover:bg-orange-600"
              onClick={() => readyOrder(order.id)}
            />

          ))}

        </div>

      </div>

    </div>
  );
}

export default KitchenPreparing;