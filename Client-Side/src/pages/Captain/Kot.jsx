import { useNavigate } from "react-router-dom";
import CaptainNavbar from "../../components/CaptainNavbar";

const kots = [
  { table: 4, status: "Running" },
  { table: 9, status: "Ready" },
  { table: 10, status: "Preparing" },
  { table: 23, status: "Preparing" },
];

function Kot() {

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#08111F] text-white">

    <CaptainNavbar />

    <div className="max-w-md mx-auto px-5 pt-6">

        <h1 className="text-3xl font-bold mb-6">
          KOT's
        </h1>

        <div className="space-y-4">

          {kots.map((kot) => (
            <div
              key={kot.table}
              className="bg-[#16233D] rounded-xl p-4 flex justify-between items-center"
            >

              <div>

                <h2 className="font-bold">
                  Table No-{kot.table}
                </h2>

                <p className="text-sm text-gray-400">
                  Order : {kot.status}
                </p>

              </div>

              <button
                onClick={() => navigate(`/menu/${kot.table}`)}
                className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg"
              >
                Add Items
              </button>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
}

export default Kot;