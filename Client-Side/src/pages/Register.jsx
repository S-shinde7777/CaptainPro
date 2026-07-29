import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaLock,
} from "react-icons/fa";
import { motion } from "framer-motion";

function Register() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0B1120]">

      {/* Background Blur */}
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-blue-600 opacity-20 blur-[150px] animate-pulse"></div>

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500 opacity-20 blur-[170px] animate-pulse"></div>

      <div className="flex min-h-screen">

        {/* Left Panel */}

        <motion.div
          initial={{ x: -120, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="hidden lg:flex w-[32%] bg-[#17203A] items-center justify-center relative"
        >

          <Link
            to="/"
            className="absolute top-8 left-8 text-white hover:text-cyan-400 transition"
          >
            <ArrowLeft size={25} />
          </Link>

          <div className="text-center">

            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-5xl font-bold text-white"
            >
              Captain<span className="text-orange-500">Pro</span>
            </motion.h1>

            <motion.img
              src="/calender.png"
              alt="POS"
              animate={{ y: [0, -15, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="mx-auto mt-14 w-40"
            />

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-10 text-5xl leading-tight font-light text-white"
            >
              POINT
              <br />
              OF
              <br />
              SALE
            </motion.h2>

          </div>

        </motion.div>

        {/* Right Panel */}

        <div className="flex flex-1 items-center justify-center px-6">

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8,
              y: 50,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            className="w-full max-w-lg rounded-3xl border border-cyan-500/20 bg-[#1E293BCC] p-10 shadow-[0_0_60px_rgba(37,99,235,.2)] backdrop-blur-xl"
          >

            <h1 className="text-center text-4xl font-bold text-white">
              Captain<span className="text-orange-500">Pro</span>
            </h1>

            <p className="mt-2 text-center text-gray-400">
              Create your account
            </p>

            <motion.form
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-8 space-y-4"
            >

              {/* Full Name */}

              <div className="relative">
                <FaUser className="absolute left-4 top-4 text-gray-400" />

                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full rounded-xl border border-transparent bg-[#293548] py-3 pl-12 pr-4 text-white outline-none transition duration-300 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-500/20"
                />
              </div>

              {/* Email */}

              <div className="relative">
                <FaEnvelope className="absolute left-4 top-4 text-gray-400" />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full rounded-xl border border-transparent bg-[#293548] py-3 pl-12 pr-4 text-white outline-none transition duration-300 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-500/20"
                />
              </div>

              {/* Mobile */}

              <div className="relative">
                <FaPhone className="absolute left-4 top-4 text-gray-400" />

                <input
                  type="tel"
                  placeholder="Mobile Number"
                  className="w-full rounded-xl border border-transparent bg-[#293548] py-3 pl-12 pr-4 text-white outline-none transition duration-300 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-500/20"
                />
              </div>

              {/* Username */}

              <div className="relative">
                <FaUser className="absolute left-4 top-4 text-gray-400" />

                <input
                  type="text"
                  placeholder="Username"
                  className="w-full rounded-xl border border-transparent bg-[#293548] py-3 pl-12 pr-4 text-white outline-none transition duration-300 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-500/20"
                />
              </div>

              {/* Password */}

              <div className="relative">
                <FaLock className="absolute left-4 top-4 text-gray-400" />

                <input
                  type="password"
                  placeholder="Password"
                  className="w-full rounded-xl border border-transparent bg-[#293548] py-3 pl-12 pr-4 text-white outline-none transition duration-300 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-500/20"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="mt-2 w-full rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 py-3 font-semibold text-white shadow-lg transition duration-300 hover:shadow-cyan-500/40"
              >
                Create Account
              </motion.button>

            </motion.form>

            <p className="mt-8 text-center text-gray-400">

              Already have an account?

              <Link
                to="/login"
                className="ml-2 font-medium text-cyan-400 hover:underline"
              >
                Login
              </Link>

            </p>

          </motion.div>

        </div>

      </div>

    </div>
  );
}

export default Register;