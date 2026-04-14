export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/40 border-b border-white/10">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <div className="text-xl font-bold tracking-wide">
          Car<span className="text-sky-400">Wash</span>
        </div>

        {/* Menu */}
        <nav className="hidden md:flex items-center gap-8 text-gray-300">

          <a href="#" className="hover:text-white transition">
            Home
          </a>

          <a href="#" className="hover:text-white transition">
            Services
          </a>

          <a href="#" className="hover:text-white transition">
            Pricing
          </a>

          <a href="#" className="hover:text-white transition">
            Gallery
          </a>

          <a href="#" className="hover:text-white transition">
            Contact
          </a>

        </nav>

        {/* CTA */}
        <button className="bg-sky-500 hover:bg-sky-600 px-5 py-2 rounded-lg font-semibold shadow-lg shadow-sky-500/30 transition">
          Book Now
        </button>

      </div>

    </header>
  );
}