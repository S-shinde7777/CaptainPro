function Hero() {
  return (
    <section className="bg-[#0F172A] text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between px-6 py-20 md:flex-row">

        {/* Left Side */}
        <div className="max-w-xl">

          <span className="inline-block rounded-full bg-blue-600 px-4 py-2 text-sm font-medium">
            Restaurant POS
          </span>

          <h1 className="mt-6 text-3xl font-bold leading-tight md:text-5xl">
            Run Your Restaurant
            <span className="block text-blue-400">
              Smarter with Captain<span className="text-orange-500">Pro</span>
            </span>
            
          </h1>
           
          <p className="mt-6 text-lg text-gray-300">
            CaptainPro helps restaurants streamline daily operations, improve service speed, and gain complete control over business performance.
          </p>
          

          <div className="mt-10 flex gap-5">
            <button className="rounded-xl bg-blue-600 px-7 py-4 font-semibold transition hover:bg-blue-700">
              Get Started
            </button>

            <button className="rounded-xl border border-white px-7 py-4 font-semibold transition hover:bg-white hover:text-black">
              Live Demo
            </button>
          </div>

        </div>

        {/* Right Side */}

        <div className="mt-16 md:mt-0">

          <div className="flex h-[450px] w-[520px] items-center justify-center rounded-3xl bg-white shadow-2xl">

            <span className="text-3xl font-bold text-blue-600">
              
            </span>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;