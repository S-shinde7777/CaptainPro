import { motion } from "framer-motion";

function TableBox({ number, status, onClick }) {
  const statusColors = {
    available: "bg-emerald-500 hover:bg-emerald-600",
    occupied: "bg-red-500 hover:bg-red-600",
    preparing: "bg-sky-500 hover:bg-sky-600",
    reserved: "bg-indigo-500 hover:bg-indigo-600",
  };

  return (
    <motion.button
      onClick={onClick}
      whileHover={{
        scale: 1.08,
        y: -3,
      }}
      whileTap={{
        scale: 0.95,
      }}
      transition={{
        duration: 0.2,
      }}
      className={`
        w-14
        h-14
        rounded-xl
        text-white
        text-lg
        font-bold
        shadow-lg
        transition-all
        duration-300
        ${statusColors[status]}
        hover:shadow-[0_0_20px_rgba(34,211,238,0.45)]
      `}
    >
      {number}
    </motion.button>
  );
}

export default TableBox;