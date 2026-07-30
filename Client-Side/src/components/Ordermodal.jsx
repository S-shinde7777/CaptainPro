/*import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function OrderModal({ open, onClose, tableNo }) {
  if (!open) return null;

  const items = [
    { name: "Paneer Butter Masala", qty: 1, price: 280 },
    { name: "Butter Naan", qty: 4, price: 40 },
    { name: "Cold Drink", qty: 2, price: 60 },
  ];

  const total = items.reduce(
    (sum, item) => sum + item.qty * item.price,
    0
  );

  return (
    <AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 px-5"
      >

        <motion.div
          initial={{ scale: .8, y: 80 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: .8, y: 80 }}
          className="w-full max-w-md rounded-3xl bg-[#16223A] p-6"
        >

          <div className="flex justify-between items-center">

            <h2 className="text-2xl font-bold text-white">
              Table {tableNo}
            </h2>

            <button
              onClick={onClose}
              className="text-white"
            >
              <X />
            </button>

          </div>

          <div className="mt-6 space-y-3">

            {items.map((item) => (

              <div
                key={item.name}
                className="flex justify-between bg-[#24324F] rounded-xl p-3"
              >

                <div>

                  <h3 className="text-white">
                    {item.name}
                  </h3>

                  <p className="text-gray-400 text-sm">
                    Qty : {item.qty}
                  </p>

                </div>

                <p className="text-cyan-400">
                  ₹{item.qty * item.price}
                </p>

              </div>

            ))}

          </div>

          <div className="mt-6 border-t border-slate-700 pt-4">

            <div className="flex justify-between text-xl text-white font-bold">

              <span>Total</span>

              <span>₹{total}</span>

            </div>

          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">

            <button className="bg-green-600 hover:bg-green-700 py-3 rounded-xl font-semibold text-white">
              Generate KOT
            </button>

            <button className="bg-blue-600 hover:bg-blue-700 py-3 rounded-xl font-semibold text-white">
              Generate Bill
            </button>

          </div>

        </motion.div>

      </motion.div>

    </AnimatePresence>
  );
}

export default OrderModal;*/