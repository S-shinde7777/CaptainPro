import { useNavigate } from "react-router-dom";
import CaptainNavbar from "../../components/CaptainNavbar";

const orders = [
  { table: 4, status: "Running" },
  { table: 9, status: "Running" },
  { table: 10, status: "Preparing" },
  { table: 23, status: "Preparing" },
];

function Orders() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#08111F] text-white">
      <CaptainNavbar />

      <div className="max-w-md mx-auto px-5 pt-6">
        <div className="min-h-screen bg-[#08111F] text-white">
          <div className="max-w-md mx-auto p-5">
            <h1 className="text-3xl font-bold mb-6">Orders</h1>

            <div className="space-y-4">
              {orders.map((order) => (
                <div
                  key={order.table}
                  className="bg-[#16233D] rounded-xl p-4 flex justify-between items-center"
                >
                  <div>
                    <h2 className="font-bold">Table No-{order.table}</h2>
                    <p className="text-sm text-gray-400">
                      Order : {order.status}
                    </p>
                  </div>

                  <button
                    onClick={() => navigate(`/menu/${order.table}`)}
                    className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg"
                  >
                    Add Items
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Orders;