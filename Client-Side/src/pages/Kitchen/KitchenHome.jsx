import KitchenNavbar from "../../components/KitchenNavbar";
import KitchenOrderCard from "../../components/KitchenOrderCard";

function KitchenHome() {
  const orders = [
    {
      id: 1,
      table: 4,
      time: "08:35 PM",
      items: [
        { name: "Paneer Butter Masala", qty: 2 },
        { name: "Butter Naan", qty: 4 },
        { name: "Cold Drink", qty: 2 },
      ],
    },
    {
      id: 2,
      table: 9,
      time: "08:38 PM",
      items: [
        { name: "Chicken Biryani", qty: 1 },
        { name: "Raita", qty: 1 },
      ],
    },
    {
      id: 3,
      table: 12,
      time: "08:42 PM",
      items: [
        { name: "Veg Fried Rice", qty: 2 },
        { name: "Manchurian", qty: 1 },
      ],
    },
  ];

  const acceptOrder = (table) => {
    alert(`Table ${table} Accepted`);
    // पुढे Firebase update करू
  };

  return (
    <div className="min-h-screen bg-[#08111F] text-white">

      <KitchenNavbar />

      <div className="max-w-md mx-auto px-4 py-5">

        <h1 className="text-3xl font-bold">
          Kitchen
        </h1>

        <p className="text-gray-400 mt-1">
          New Orders
        </p>

        <div className="border-b border-slate-700 mt-4 mb-5"></div>

        <div className="space-y-5">

          {orders.map((order) => (
            <KitchenOrderCard
              key={order.id}
              table={order.table}
              time={order.time}
              items={order.items}
              buttonText="Accept Order"
              buttonColor="bg-emerald-500 hover:bg-emerald-600"
              onClick={() => acceptOrder(order.table)}
            />
          ))}

        </div>

      </div>

    </div>
  );
}

export default KitchenHome;