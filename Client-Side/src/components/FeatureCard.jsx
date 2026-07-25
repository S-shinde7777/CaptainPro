import { motion } from "framer-motion";

function FeatureCard({ image, title, description }) {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        y: -10,
      }}
      transition={{ duration: 0.3 }}
      className="
      bg-[#252F4E]
      rounded-xl
      p-6
      border
      border-transparent
      hover:border-blue-500
      hover:shadow-2xl
      hover:shadow-blue-500/20
      duration-300
      cursor-pointer
      text-center
      "
    >
      <img
        src={image}
        alt={title}
        className="h-20 mx-auto object-contain"
      />

      <h3 className="text-white text-xl font-semibold mt-5">
        {title}
      </h3>

      <p className="text-gray-300 text-sm mt-3 leading-6">
        {description}
      </p>
    </motion.div>
  );
}

export default FeatureCard;