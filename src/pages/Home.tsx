import { Link } from "wouter";
import { motion } from "framer-motion";
import { services, currencySymbol } from "@/data/services";
import { useBooking } from "@/context/BookingContext";
import heroCarPng from "@/assets/images/hero-car.png";

export default function Home() {
  const { openBooking } = useBooking();

  return (
    <div className="w-full">
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroCarPng}
            alt="Gleaming black car exterior"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/55" />
        </div>
        <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-5 leading-none"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            NOT A CAR WASH.<br />A CRAFT.
          </motion.h1>
          <motion.p
            className="text-base md:text-lg text-gray-300 max-w-xl mb-10"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            Careful, skilled detailing. We treat every vehicle like it belongs to a close friend.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-3"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <button
              type="button"
              onClick={openBooking}
              className="bg-white text-primary px-10 py-4 text-sm font-semibold hover:bg-gray-100 transition-colors uppercase tracking-widest"
              data-testid="btn-hero-book"
            >
              Book Now
            </button>
            <Link
              href="/services"
              className="border border-white text-white px-10 py-4 text-sm font-semibold hover:bg-white hover:text-primary transition-colors uppercase tracking-widest"
              data-testid="link-hero-services"
            >
              View Services
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white border-b border-border">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <p className="text-xl md:text-2xl font-light text-gray-700 leading-relaxed">
            No rushed jobs. No dirty rags. No shortcuts. Just proper detailing using the right techniques, clean tools, and professional-grade products.
          </p>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex justify-between items-end mb-10">
            <h2 className="text-2xl font-bold tracking-tight">PACKAGES</h2>
            <Link href="/services" className="text-sm text-muted-foreground underline underline-offset-4 hover:text-primary transition-colors">
              All services
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.filter(s => s.type === "package").map(service => (
              <div
                key={service.id}
                className="bg-white border border-border p-7 flex flex-col"
              >
                <h3 className="text-lg font-bold mb-1">{service.name}</h3>
                <p className="text-2xl font-light mb-5 text-gray-700">{currencySymbol}{service.price.toLocaleString()}</p>
                <p className="text-sm text-muted-foreground mb-6 flex-1 leading-relaxed">
                  {service.shortDescription}
                </p>
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={openBooking}
                    className="bg-primary text-white px-4 py-2.5 text-xs font-semibold tracking-widest uppercase hover:bg-gray-800 transition-colors flex-1"
                    data-testid={`btn-book-${service.id}`}
                  >
                    Book Now
                  </button>
                  <Link
                    href={`/services/${service.slug}`}
                    className="border border-border px-4 py-2.5 text-xs font-semibold tracking-widest uppercase hover:border-primary transition-colors text-center"
                    data-testid={`link-detail-${service.id}`}
                  >
                    Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary text-white text-center px-6">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">READY FOR A RESET?</h2>
        <p className="text-gray-400 mb-8 max-w-md mx-auto">
          We take bookings by phone. No forms, no wait — just a quick call to get you on the schedule.
        </p>
        <button
          type="button"
          onClick={openBooking}
          className="bg-white text-primary px-10 py-4 text-sm font-semibold hover:bg-gray-100 transition-colors uppercase tracking-widest"
          data-testid="btn-cta-book"
        >
          Book Your Detail
        </button>
      </section>
    </div>
  );
}
