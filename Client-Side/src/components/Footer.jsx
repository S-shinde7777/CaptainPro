import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

import { MdEmail } from "react-icons/md";

function Footer() {
  return (
    <footer id="footer" className="bg-[#1B2340] text-white">

      <div className="max-w-7xl mx-auto px-6 py-14">

        <div className="grid md:grid-cols-2 gap-12">

          {/* Left */}

          <div>

            <h1 className="text-4xl font-bold">
              Captain<span className="text-orange-500">Pro</span>
            </h1>

            <p className="mt-5 text-gray-300">
              Restaurant POS & Management System
            </p>

            <div className="flex items-center gap-3 mt-5 text-gray-300">
              <MdEmail className="text-xl text-blue-400" />
              <span>captainpro@gmail.com</span>
            </div>

            <div className="flex gap-4 mt-8">

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-[#2C3658] flex items-center justify-center hover:bg-blue-600 transition-all duration-300 hover:scale-110"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-[#2C3658] flex items-center justify-center hover:bg-pink-600 transition-all duration-300 hover:scale-110"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-[#2C3658] flex items-center justify-center hover:bg-blue-700 transition-all duration-300 hover:scale-110"
              >
                <FaLinkedinIn />
              </a>

            </div>

          </div>

          {/* Right */}

          <div className="md:text-right">

            <h2 className="text-2xl font-semibold mb-5">
              Quick Links
            </h2>

            <ul className="space-y-3">

              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-blue-400 transition"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#features"
                  className="text-gray-300 hover:text-blue-400 transition"
                >
                  Features
                </a>
              </li>

              <li>
                <a
                  href="#pricing"
                  className="text-gray-300 hover:text-blue-400 transition"
                >
                  Pricing
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="text-gray-300 hover:text-blue-400 transition"
                >
                  Contact
                </a>
              </li>

            </ul>

          </div>

        </div>

        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-400">
          © 2026 CaptainPro. All Rights Reserved.
        </div>

      </div>
      
    </footer>
  );
}

export default Footer;