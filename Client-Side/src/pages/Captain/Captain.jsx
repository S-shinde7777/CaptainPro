import { useNavigate } from "react-router-dom";
import CaptainNavbar from "../../components/CaptainNavbar";
import StatusLegend from "../../components/StatusLegend";
import TableCard from "../../components/TableCard";

const restaurantTables = [
  { id: 1, status: "available" },
  { id: 2, status: "available" },
  { id: 3, status: "available" },
  { id: 4, status: "occupied" },
  { id: 5, status: "available" },
  { id: 6, status: "available" },
  { id: 7, status: "available" },
  { id: 8, status: "available" },
  { id: 9, status: "occupied" },
  { id: 10, status: "preparing" },
  { id: 11, status: "available" },
  { id: 12, status: "available" },
  { id: 13, status: "available" },
  { id: 14, status: "available" },
  { id: 15, status: "available" },
  { id: 16, status: "available" },
];

const parcelTables = [
  { id: 17, status: "available" },
  { id: 18, status: "available" },
  { id: 19, status: "available" },
  { id: 20, status: "available" },
  { id: 21, status: "available" },
  { id: 22, status: "available" },
  { id: 23, status: "reserved" },
  { id: 24, status: "available" },
  { id: 25, status: "available" },
  { id: 26, status: "available" },
  { id: 27, status: "available" },
  { id: 28, status: "available" },
];

function Captain() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#08111F] text-white">

      <CaptainNavbar />

      <div className="max-w-md mx-auto px-5 pt-6">

        <h1 className="text-4xl font-bold">
          Hello,
          <span className="text-cyan-400"> Captain</span>
        </h1>

        <div className="mt-6">
          <StatusLegend />
        </div>

        {/* Restaurant */}

        <div className="mt-8 rounded-xl overflow-hidden">

          <div className="bg-blue-700 py-2 px-4 font-semibold">
            Restaurant
          </div>

          <div className="bg-[#121D31] p-4 grid grid-cols-4 gap-4">

            {restaurantTables.map((table) => (
              <TableCard
                key={table.id}
                number={table.id}
                status={table.status}
                onClick={() => navigate(`/menu/${table.id}`)}
              />
            ))}

          </div>

        </div>

        {/* Parcels */}

        <div className="mt-8 rounded-xl overflow-hidden">

          <div className="bg-blue-700 py-2 px-4 font-semibold">
            Parcels
          </div>

          <div className="bg-[#121D31] p-4 grid grid-cols-4 gap-4">

            {parcelTables.map((table) => (
              <TableCard
                key={table.id}
                number={table.id}
                status={table.status}
                onClick={() => navigate(`/menu/${table.id}`)}
              />
            ))}

          </div>

        </div>

        <button
          className="
            w-full
            mt-8
            mb-8
            py-3
            rounded-full
            bg-gradient-to-r
            from-cyan-400
            to-blue-600
            font-bold
            hover:scale-105
            duration-300
          "
        >
          View Orders
        </button>

      </div>

    </div>
  );
}

export default Captain;