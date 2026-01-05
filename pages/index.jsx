export default function Home() {
  return (
    <div className="bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white shadow z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="font-bold text-lg">
            Horlax Home Interior & Exterior
          </h1>
          <a
            href="https://wa.me/2347052855300"
            className="bg-black text-white px-4 py-2 rounded"
          >
            WhatsApp
          </a>
        </div>
      </header>

      {/* Spacer */}
      <div className="h-20"></div>

      {/* Hero */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-700 text-white">
        <div className="max-w-7xl mx-auto px-6 py-24 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Luxury Furniture & Interior Design
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            We design, build and decorate modern homes, offices and spaces
            across Nigeria.
          </p>
          <p className="font-semibold">
            📞 07052855300 / 07048597213
          </p>
        </div>
      </section>

      {/* About */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h3 className="text-3xl font-bold mb-6 text-center">About Us</h3>
        <p className="max-w-3xl mx-auto text-center text-gray-600">
          Horlax Home Interior & Exterior Design specializes in high-quality
          custom furniture, modern interior finishing and premium exterior
          decor. We combine creativity, craftsmanship and durability.
        </p>
      </section>

      {/* Services */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h3 className="text-3xl font-bold mb-12 text-center">Our Services</h3>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded shadow">
              <h4 className="font-semibold text-xl mb-2">Custom Furniture</h4>
              <p className="text-gray-600 mb-3">
                Beds, wardrobes, TV stands, dining tables and more.
              </p>
              <p className="font-bold">From ₦150,000</p>
            </div>

            <div className="bg-gray-50 p-6 rounded shadow">
              <h4 className="font-semibold text-xl mb-2">Interior Design</h4>
              <p className="text-gray-600 mb-3">
                Living rooms, bedrooms, kitchens, offices.
              </p>
              <p className="font-bold">From ₦300,000</p>
            </div>

            <div className="bg-gray-50 p-6 rounded shadow">
              <h4 className="font-semibold text-xl mb-2">Exterior Decor</h4>
              <p className="text-gray-600 mb-3">
                Outdoor finishing, wall designs and structures.
              </p>
              <p className="font-bold">From ₦250,000</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h3 className="text-3xl font-bold mb-12 text-center">
            Furniture Gallery
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            <img
              src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7"
              className="rounded shadow"
            />
            <img
              src="https://images.unsplash.com/photo-1505693314127-50b0b27a9df9"
              className="rounded shadow"
            />
            <img
              src="https://images.unsplash.com/photo-1582582494700-1b99e3b27f1f"
              className="rounded shadow"
            />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          <h3 className="text-3xl font-bold mb-6">
            Let’s Build Your Dream Space
          </h3>
          <p className="mb-4">
            Call or WhatsApp us today for consultation and pricing.
          </p>
          <p className="font-semibold">
            📞 07052855300 / 07048597213
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400">
        <div className="max-w-7xl mx-auto px-6 py-6 text-center">
          <p>
            © {new Date().getFullYear()} Horlax Home Interior & Exterior
            Design/Decor
          </p>
        </div>
      </footer>
      <a
  href="https://wa.me/2347052855300"
  className="fixed bottom-6 right-6 bg-green-500 text-white px-5 py-3 rounded-full shadow-lg font-semibold z-50"
>
  WhatsApp
</a>
    </div>
  );
}
