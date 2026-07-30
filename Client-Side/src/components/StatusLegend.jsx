function StatusLegend() {
  const items = [
    {
      color: "bg-emerald-400",
      label: "Available",
    },
    {
      color: "bg-red-500",
      label: "Occupied",
    },
    {
      color: "bg-sky-500",
      label: "Preparing",
    },
    {
      color: "bg-indigo-500",
      label: "Reserved",
    },
  ];

  return (
    <div className="border-y border-slate-600 py-4">

      <div className="grid grid-cols-2 gap-3">

        {items.map((item) => (

          <div
            key={item.label}
            className="flex items-center gap-2"
          >

            <div
              className={`w-4 h-4 rounded ${item.color}`}
            ></div>

            <span className="text-gray-300">
              {item.label}
            </span>

          </div>

        ))}

      </div>

    </div>
  );
}

export default StatusLegend;