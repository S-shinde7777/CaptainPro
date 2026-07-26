import { motion } from "framer-motion";
import pos from "../assets/pos.png";

const plans = [
  {
    title: "CaptainPro",
    inventory: "Without Inventory",
    price: "7000Rs",
  },
  {
    title: "CaptainPro",
    inventory: "With Inventory",
    hardware: "Without Setup",
    price: "12000Rs",
  },
  {
    title: "CaptainPro",
    inventory: "With Inventory",
    hardware: "With Setup",
    price: "15000RS",
  },
];

function Pricing() {
  return (
    <section
      id="pricing"
      className="bg-[#202A46] py-20"
    >
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-center text-5xl font-bold text-white mb-16">
          Pricing
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT */}

          <div className="space-y-6">

            {plans.map((plan, index) => (

              <motion.div
                key={index}
                whileHover={{
                  scale:1.03,
                  y:-8
                }}
                transition={{
                  duration:.3
                }}
                className="bg-[#252F4E] rounded-xl p-8 border border-transparent hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/20 duration-300"
              >

                <h3 className="text-white text-2xl font-semibold">
                  {plan.title}
                </h3>

                <p className="text-gray-300 mt-2">
                  {plan.inventory}
                </p>

                <p className="text-gray-300">
                  {plan.hardware}
                </p>

                <h2 className="text-4xl font-bold text-blue-400 mt-5">
                  {plan.price}
                </h2>

              </motion.div>

            ))}

          </div>

          {/* RIGHT */}

          <motion.div
            initial={{opacity:0,x:100}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:.7}}
            viewport={{once:true}}
            className="text-center"
          >

            <img
              src={pos}
              alt=""
              className="mx-auto w-[500px] hover:scale-105 duration-300"
            />

            <div className="mt-10 flex flex-col gap-5">

              <button
                className="bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold shadow-lg hover:shadow-blue-500/40 duration-300"
              >
                Start Free Trial
              </button>

              <button
                className="border border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-white py-4 rounded-xl font-semibold duration-300"
              >
                Contact
              </button>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default Pricing;