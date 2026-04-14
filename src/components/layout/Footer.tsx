export default function Footer() {
  return (
    <footer className="w-full bg-black text-white pt-16 pb-10 border-t border-gray-800">

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-10">

        {/* Company */}
        <div>
          <h3 className="text-xl font-bold mb-4">CarWash</h3>
          <p className="text-gray-400">
            Professional car wash and detailing services that keep your
            vehicle shining like new.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-400">
            <li>Home</li>
            <li>Services</li>
            <li>Pricing</li>
            <li>Gallery</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-gray-400">
            <li>Exterior Wash</li>
            <li>Interior Cleaning</li>
            <li>Full Detailing</li>
            <li>Ceramic Coating</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-4">Contact</h4>
          <ul className="space-y-2 text-gray-400">
            <li>📍 Mumbai, India</li>
            <li>📞 +91 98765 43210</li>
            <li>✉ info@carwash.com</li>
          </ul>
        </div>

      </div>

      {/* Bottom */}
      <div className="text-center text-gray-500 mt-12 text-sm">
        © 2026 CarWash. All rights reserved.
      </div>

    </footer>
  );
}