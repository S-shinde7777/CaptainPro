import { motion } from "framer-motion";

function TableCard({ number, status, onClick }) {
  const statusColors = {
    available: "bg-emerald-400 hover:bg-emerald-500",
    occupied: "bg-red-500 hover:bg-red-600",
    preparing: "bg-sky-500 hover:bg-sky-600",
    reserved: "bg-indigo-500 hover:bg-indigo-600",
  };

  return (
    <motion.button
      onClick={onClick}
      whileHover={{
        scale: 1.08,
        rotate: 2,
      }}
      whileTap={{
        scale: 0.95,
      }}
      transition={{
        duration: 0.2,
      }}
      className={`
        aspect-square
        rounded-xl
        font-bold
        text-2xl
        text-white
        shadow-lg
        transition-all
        duration-300
        ${statusColors[status]}
        hover:shadow-[0_0_25px_rgba(34,211,238,.5)]
      `}
    >
      {number}
    </motion.button>
  );
}

export default TableCard;