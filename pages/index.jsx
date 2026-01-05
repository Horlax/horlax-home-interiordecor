export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">
            Horlax Home Interior & Exterior Design
          </h1>
          <a
            href="https://wa.me/2347052855300"
            className="bg-black text-white px-4 py-2 rounded"
          >
            WhatsApp Us
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Premium Furniture & Interior Solutions
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            We design, build & decorate modern homes, offices and spaces.
          </p>
          <p className="font-semibold">
            📞 07052855300 / 07048597213
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h3 className="text-2xl font-bold mb-8 text-center">Our Services</h3>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded shadow">
            <h4 className="font-semibold text-lg mb-2">Custom Furniture</h4>
            <p className="text-gray-600 mb-2">
              Beds, wardrobes, tables, TV stands.
            </p>
            <p className="font-bold">From ₦150,000</p>
          </div>

          <div className="bg-white p-6 rounded shadow">
            <h4 className="font-semibold text-lg mb-2">Interior Design</h4>
            <p className="text-gray-600 mb-2">
              Living room, bedroom, office interiors.
            </p>
            <p className="font-bold">From ₦300,000</p>
          </div>

          <div className="bg-white p-6 rounded shadow">
            <h4 className="font-semibold text-lg mb-2">Exterior Decor</h4>
            <p className="text-gray-600 mb-2">
              Outdoor design, finishing & styling.
            </p>
            <p className="font-bold">From ₦250,000</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 py-8 text-center">
          <p className="font-semibold">
            Horlax Home Interior & Exterior Design/Decor
          </p>
          <p className="text-sm mt-2">
            WhatsApp & Calls: 07052855300 / 07048597213
          </p>
        </div>
      </footer>
    </div>
  );
}
