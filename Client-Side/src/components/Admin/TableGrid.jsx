import TableBox from "./TableBox";

const restaurantTables = [
  { id: 1, status: "available" },
  { id: 2, status: "available" },
  { id: 3, status: "occupied" },
  { id: 4, status: "preparing" },
  { id: 5, status: "available" },
  { id: 6, status: "reserved" },
  { id: 7, status: "available" },
  { id: 8, status: "available" },
  { id: 9, status: "occupied" },
  { id: 10, status: "preparing" },
  { id: 11, status: "available" },
  { id: 12, status: "available" },
  { id: 13, status: "available" },
  { id: 14, status: "occupied" },
  { id: 15, status: "available" },
  { id: 16, status: "available" },
];

const parcelTables = [
  { id: 17, status: "available" },
  { id: 18, status: "available" },
  { id: 19, status: "preparing" },
  { id: 20, status: "available" },
  { id: 21, status: "occupied" },
  { id: 22, status: "available" },
  { id: 23, status: "reserved" },
  { id: 24, status: "available" },
  { id: 25, status: "available" },
  { id: 26, status: "available" },
  { id: 27, status: "preparing" },
  { id: 28, status: "available" },
];

function TableGrid() {
  return (
    <div className="space-y-8">

      {/* Restaurant */}

      <div className="bg-[#16233D] rounded-xl overflow-hidden shadow-lg">

        <div className="bg-blue-700 px-5 py-3 font-bold text-lg">
          Restaurant
        </div>

        <div className="p-5 grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">

          {restaurantTables.map((table) => (
            <TableBox
              key={table.id}
              number={table.id}
              status={table.status}
              onClick={() => console.log(table.id)}
            />
          ))}

        </div>

      </div>

      {/* Parcels */}

      <div className="bg-[#16233D] rounded-xl overflow-hidden shadow-lg">

        <div className="bg-blue-700 px-5 py-3 font-bold text-lg">
          Parcels
        </div>

        <div className="p-5 grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">

          {parcelTables.map((table) => (
            <TableBox
              key={table.id}
              number={table.id}
              status={table.status}
              onClick={() => console.log(table.id)}
            />
          ))}

        </div>

      </div>

    </div>
  );
}

export default TableGrid;