function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">
        
        <h1 className="text-3xl font-bold text-gray-900">
          Captain<span className="text-orange-500">Pro</span>
        </h1>

        <ul className="hidden gap-8 font-medium text-gray-700 md:flex">
          <li><a href="#" className="hover:text-blue-600">Home</a></li>
          <li><a href="#" className="hover:text-blue-600">Features</a></li>
          <li><a href="#" className="hover:text-blue-600">Pricing</a></li>
          <li><a href="#" className="hover:text-blue-600">Contact</a></li>
        </ul>

        <div className="flex gap-3">
          <button className="rounded-lg border border-blue-600 px-5 py-2 text-blue-600 transition hover:bg-blue-600 hover:text-white">
            Login
          </button>

          <button className="rounded-lg bg-blue-600 px-5 py-2 text-white transition hover:bg-blue-700">
            Register
          </button>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;