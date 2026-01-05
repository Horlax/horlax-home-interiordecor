import { Phone, Tag } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-5xl font-bold leading-tight">
            Horlax Home Interior <br /> & Exterior Design
          </h1>
          <p className="mt-4 text-neutral-600 max-w-md">
            Premium furniture, interior and exterior works crafted for comfort and durability.
          </p>
          <a
            href="https://wa.me/2347052855300"
            className="inline-block mt-6 px-6 py-3 bg-black text-white rounded-2xl"
          >
            Request a Quote
          </a>
        </div>
        <img
          src="https://images.unsplash.com/featured/?interior,furniture"
          className="rounded-2xl shadow-lg"
        />
      </section>

      {/* Products */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-10">Our Works</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[{name:"Luxury Sofa",price:"₦350,000"},{name:"Wardrobe",price:"₦420,000"},{name:"Kitchen Cabinet",price:"₦500,000"}].map((p,i)=>(
              <div key={i} className="p-6 rounded-2xl border">
                <div className="h-40 bg-neutral-200 rounded-xl mb-4" />
                <h3 className="font-semibold">{p.name}</h3>
                <p className="text-sm text-neutral-600 flex items-center gap-2">
                  <Tag size={14}/> {p.price}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-6">Contact Us</h2>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <a href="https://wa.me/2347052855300" className="px-6 py-3 rounded-2xl bg-black text-white flex items-center justify-center gap-2">
              <Phone size={16}/> 07052855300
            </a>
            <a href="https://wa.me/2347048597213" className="px-6 py-3 rounded-2xl border flex items-center justify-center gap-2">
              <Phone size={16}/> 07048597213
            </a>
          </div>
        </div>
      </section>

      <footer className="py-8 text-center text-sm text-neutral-500">
        © {new Date().getFullYear()} Horlax Home Interior & Exterior Design. All rights reserved.
      </footer>
    </main>
  );
      }
