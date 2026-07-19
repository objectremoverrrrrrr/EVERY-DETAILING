import { motion } from "framer-motion";
import { Link } from "wouter";
import { MapPin, Globe, Building2 } from "lucide-react";
import { services, batchPackages, currencySymbol } from "@/data/services";
import { useBooking } from "@/context/BookingContext";
import { useLocaleCurrency } from "@/hooks/useLocaleCurrency";

const mobileZones = [
  {
    id: "iligan",
    zone: "Iligan City",
    travelFee: "Free",
    feeNote: "No travel charge",
    description: "We come to you anywhere within Iligan City at no extra cost.",
    icon: <MapPin className="w-5 h-5" aria-hidden="true" />,
    highlight: true,
  },
  {
    id: "neighboring-cities",
    zone: "Neighboring Cities",
    travelFee: `${currencySymbol}1,500+`,
    feeNote: "Fixed travel fee",
    description: "Cagayan de Oro, Marawi, Ozamiz, Lanao del Norte, and surrounding areas.",
    icon: <MapPin className="w-5 h-5" aria-hidden="true" />,
    highlight: false,
  },
  {
    id: "neighboring-regions",
    zone: "Other Mindanao Regions",
    travelFee: "Custom Quote",
    feeNote: "Quoted over the phone",
    description: "Regions beyond Lanao del Norte and Northern Mindanao. Call us to discuss.",
    icon: <Globe className="w-5 h-5" aria-hidden="true" />,
    highlight: false,
  },
  {
    id: "international",
    zone: "International",
    travelFee: "Custom Quote Only",
    feeNote: "Discussed on inquiry",
    description: "Available for international clients. Pricing and logistics are arranged personally.",
    icon: <Globe className="w-5 h-5" aria-hidden="true" />,
    highlight: false,
  },
];

export default function Services() {
  const { openBooking, openMobileBooking } = useBooking();
  const localCurrency = useLocaleCurrency();
  const singleServices = services.filter(s => s.type === "single");
  const packages = services.filter(s => s.type === "package");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
  };

  const itemVariants = {
    hidden: { y: 16, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.45 } }
  };

  return (
    <div className="w-full pb-32">
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.h1
            className="text-4xl md:text-6xl font-bold tracking-tight mb-4"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            SERVICES
          </motion.h1>
          <motion.p
            className="text-gray-300"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Simple pricing. Exceptional results.
          </motion.p>
        </div>
      </section>

      <section className="pt-20 pb-12 container mx-auto px-6 max-w-6xl">
        <h2 className="text-2xl font-bold tracking-tight mb-8">FULL PACKAGES</h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {packages.map(service => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="bg-muted border border-transparent hover:border-border transition-colors p-7 flex flex-col"
            >
              <h3 className="text-xl font-bold mb-1">{service.name}</h3>
              <p className="text-3xl font-light mb-5 text-gray-700">{currencySymbol}{service.price.toLocaleString()}</p>
              <p className="text-sm text-muted-foreground mb-6 flex-1 leading-relaxed">{service.shortDescription}</p>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={openBooking}
                  className="bg-primary text-white flex-1 py-3 text-xs font-semibold tracking-widest uppercase hover:bg-gray-800 transition-colors"
                  data-testid={`btn-book-${service.id}`}
                >
                  Book Now
                </button>
                <Link
                  href={`/services/${service.slug}`}
                  className="border border-border px-4 py-3 text-xs font-semibold tracking-widest uppercase hover:border-primary transition-colors text-center"
                  data-testid={`btn-detail-${service.id}`}
                >
                  Details
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="py-12 container mx-auto px-6 max-w-6xl border-t border-border">
        <h2 className="text-2xl font-bold tracking-tight mb-8 pt-12">SINGLE SERVICES</h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {singleServices.map(service => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="bg-white border border-border p-6 flex flex-col"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-base font-bold">{service.name}</h3>
                <span className="text-sm font-medium text-muted-foreground shrink-0 ml-2">From {currencySymbol}{service.price.toLocaleString()}</span>
              </div>
              <p className="text-sm text-muted-foreground mb-5 flex-1 leading-relaxed">{service.shortDescription}</p>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={openBooking}
                  className="bg-primary text-white flex-1 py-2.5 text-xs font-semibold tracking-widest uppercase hover:bg-gray-800 transition-colors"
                  data-testid={`btn-book-${service.id}`}
                >
                  Book
                </button>
                <Link
                  href={`/services/${service.slug}`}
                  className="border border-border px-4 py-2.5 text-xs font-semibold tracking-widest uppercase hover:border-primary transition-colors text-center"
                  data-testid={`btn-detail-${service.id}`}
                >
                  Details
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="py-0 mt-16">
        <div className="bg-primary text-white">
          <div className="container mx-auto px-6 max-w-6xl py-16">
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Building2 className="w-5 h-5 text-white/60" />
                <span className="text-xs font-semibold tracking-widest uppercase text-white/60 border border-white/20 px-3 py-1">
                  For Businesses Only
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-3">B2B BATCH PRICING</h2>
              <p className="text-gray-400 max-w-xl text-sm leading-relaxed">
                Running a car rental fleet, dealership, or company pool? We offer volume pricing for businesses that need multiple vehicles detailed at once. <strong className="text-white">This is not a standard retail offer</strong> — pricing is per vehicle and scales with your fleet size.
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }}
            >
              {batchPackages.map((pkg) => (
                <motion.div
                  key={pkg.id}
                  variants={{ hidden: { y: 16, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.45 } } }}
                  className={`p-7 flex flex-col border ${pkg.highlight ? "bg-white text-primary border-white" : "bg-white/5 border-white/15 hover:border-white/30 transition-colors"}`}
                >
                  <span className={`text-xs font-semibold tracking-widest uppercase mb-4 ${pkg.highlight ? "text-primary/50" : "text-white/40"}`}>
                    Tier {pkg.tier}
                  </span>
                  <h3 className={`text-2xl font-bold mb-1 ${pkg.highlight ? "text-primary" : "text-white"}`}>
                    {pkg.name}
                  </h3>
                  <p className={`text-sm mb-5 ${pkg.highlight ? "text-primary/60" : "text-white/50"}`}>
                    {pkg.vehicles}
                  </p>
                  <div className="mb-6">
                    <p className={`text-4xl font-light mb-1 ${pkg.highlight ? "text-primary" : "text-white"}`}>
                      {currencySymbol}{pkg.pricePerVehicle.toLocaleString()}
                    </p>
                    <p className={`text-xs uppercase tracking-widest ${pkg.highlight ? "text-primary/50" : "text-white/40"}`}>
                      per vehicle
                    </p>
                  </div>
                  <div className={`mt-auto pt-5 border-t ${pkg.highlight ? "border-primary/20" : "border-white/10"}`}>
                    <p className={`text-xs font-semibold uppercase tracking-wider mb-0.5 ${pkg.highlight ? "text-primary/60" : "text-white/40"}`}>
                      Travel Fee
                    </p>
                    <p className={`text-sm font-bold ${pkg.highlight ? "text-primary" : "text-white"}`}>
                      {pkg.travelFee}
                    </p>
                    <p className={`text-xs ${pkg.highlight ? "text-primary/50" : "text-white/40"}`}>
                      {pkg.travelFeeNote}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <p className="text-sm text-white/50 flex-1">
                Batch bookings are handled directly — contact us to discuss your fleet size, schedule, and location before booking.
              </p>
              <a
                href="tel:"
                className="bg-white text-primary px-8 py-3 text-xs font-semibold tracking-widest uppercase hover:bg-gray-100 transition-colors text-center whitespace-nowrap"
                data-testid="btn-b2b-contact"
              >
                Inquire Now
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-6 max-w-6xl border-t border-border">
        <div className="pt-12 mb-8">
          <h2 className="text-2xl font-bold tracking-tight mb-2">MOBILE DETAILING</h2>
          <p className="text-muted-foreground text-sm max-w-xl">
            We travel to you — at your home, office, or wherever your vehicle is. Service pricing stays the same; only the travel fee changes based on your location.
          </p>
        </div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {mobileZones.map((zone) => {
            const isInternational = zone.id === "international";
            return (
              <motion.div
                key={zone.id}
                variants={itemVariants}
                className={`p-7 flex flex-col border ${zone.highlight ? "bg-primary text-white border-primary" : "bg-white border-border"}`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`flex items-center gap-2 ${zone.highlight ? "text-white" : "text-primary"}`}>
                    {zone.icon}
                    <span className="text-xs font-semibold tracking-widest uppercase">{zone.zone}</span>
                  </div>
                  <span className={`text-xs font-medium px-2.5 py-1 rounded-sm ${zone.highlight ? "bg-white/20 text-white" : "bg-muted text-muted-foreground"}`}>
                    {isInternational ? `Quoted in ${localCurrency.code}` : zone.feeNote}
                  </span>
                </div>

                <p className={`text-3xl font-light mb-1 ${zone.highlight ? "text-white" : "text-gray-800"}`}>
                  {zone.travelFee}
                </p>

                {isInternational && (
                  <p className={`text-sm font-medium mb-3 ${zone.highlight ? "text-white/70" : "text-muted-foreground"}`}>
                    {localCurrency.symbol} · {localCurrency.name}
                  </p>
                )}

                <p className={`text-sm mb-6 flex-1 leading-relaxed ${isInternational ? "" : ""} ${zone.highlight ? "text-white/80" : "text-muted-foreground"}`}>
                  {isInternational
                    ? `Available for international clients. We'll quote you in ${localCurrency.name} (${localCurrency.code}). Pricing and logistics are arranged personally.`
                    : zone.description}
                </p>

                <button
                  type="button"
                  onClick={openMobileBooking}
                  className={`w-full py-3 text-xs font-semibold tracking-widest uppercase transition-colors ${
                    zone.highlight
                      ? "bg-white text-primary hover:bg-gray-100"
                      : "bg-primary text-white hover:bg-gray-800"
                  }`}
                  data-testid={`btn-mobile-book-${zone.id}`}
                >
                  Book Mobile Service
                </button>
              </motion.div>
            );
          })}
        </motion.div>
        <p className="mt-5 text-xs text-muted-foreground">
          * Travel fees are non-refundable once the technician is en route. See booking disclaimer for full terms.
        </p>
      </section>
    </div>
  );
}
