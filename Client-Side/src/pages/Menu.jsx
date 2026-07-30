import { ArrowLeft } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

const menuItems = [
  {
    id: 1,
    name: "Veg Biryani",
    price: 250,
    image: "https://picsum.photos/200?1",
  },
  {
    id: 2,
    name: "Paneer Butter Masala",
    price: 280,
    image: "https://picsum.photos/200?2",
  },
  {
    id: 3,
    name: "Chicken Biryani",
    price: 320,
    image: "https://picsum.photos/200?3",
  },
  {
    id: 4,
    name: "Cold Drink",
    price: 60,
    image: "https://picsum.photos/200?4",
  },
];

function Menu() {
  const navigate = useNavigate();
  const { tableId } = useParams();

  return (
    <div className="min-h-screen bg-[#08111F] text-white">

      <div className="flex items-center gap-4 p-5">

        <button onClick={() => navigate(-1)}>
          <ArrowLeft />
        </button>

        <h1 className="text-2xl font-bold">
          Table {tableId}
        </h1>

      </div>

      <div className="grid grid-cols-2 gap-4 p-5">

        {menuItems.map((item) => (

          <div
            key={item.id}
            className="bg-[#16233D] rounded-2xl overflow-hidden"
          >

           
            <div className="p-3">

              <h2 className="font-semibold">
                {item.name}
              </h2>

              <p className="text-cyan-400">
                ₹{item.price}
              </p>

              <button
                className="w-full mt-3 bg-blue-600 py-2 rounded-xl"
              >
                Add Item
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Menu;