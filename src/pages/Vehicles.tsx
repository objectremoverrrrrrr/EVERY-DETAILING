import { motion } from "framer-motion";
import { CheckCircle2, XCircle } from "lucide-react";

const accepted = [
  { name: "Micro", note: "City cars and kei-class vehicles" },
  { name: "Hatchback", note: "3-door and 5-door hatchbacks" },
  { name: "Crossover", note: "Car-based SUV platform" },
  { name: "Sedan", note: "Standard 3-box saloons" },
  { name: "Coupe", note: "2-door fixed-roof cars" },
  { name: "Coupe SUV", note: "Fastback SUV body style" },
  { name: "SUV", note: "Sport utility vehicles of all sizes" },
  { name: "Off-roader", note: "Body-on-frame 4×4s" },
  { name: "Pick-up", note: "Single and double cab trucks" },
  { name: "MPV", note: "Multi-purpose and people movers" },
  { name: "Wagon / Estate", note: "Long-roof station wagons" },
  { name: "Van", note: "Passenger and cargo vans" },
  { name: "Sport", note: "Performance and track-oriented cars" },
  { name: "Cabriolet", note: "Soft-top open-air cars" },
  { name: "Roadster", note: "Open two-seaters" },
  { name: "Shooting Brake", note: "Coupe-wagon hybrid body style" },
  { name: "Hyper", note: "Flagship hypercar and supercar class" },
  { name: "Muscle", note: "High-displacement American-style muscle" },
  { name: "Limousine", note: "Extended wheelbase luxury vehicles" },
  { name: "Convertible", note: "Hard-top and soft-top convertibles" },
];

const declined = [
  { name: "Motorcycles", note: "We don't wash bikes — not our thing" },
  { name: "Sport Bikes", note: "Fully-faired road and track bikes" },
  { name: "Scooters & Mopeds", note: "Two-wheeled commuter vehicles" },
  { name: "Bicycles & E-Bikes", note: "Pedal and electric bicycles" },
  { name: "Box Trucks", note: "Large commercial delivery trucks" },
  { name: "Semi-Trucks", note: "18-wheelers and tractor units" },
  { name: "Buses & Coaches", note: "Public transport and touring coaches" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
};

const itemVariants = {
  hidden: { y: 14, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.4 } },
};

export default function Vehicles() {
  return (
    <div className="w-full pb-32">
      {/* Hero */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.h1
            className="text-4xl md:text-6xl font-bold tracking-tight mb-4"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            VEHICLES
          </motion.h1>
          <motion.p
            className="text-gray-300 max-w-xl leading-relaxed"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            We work on most four-wheeled vehicles. If you're unsure whether your car qualifies, just give us a call — we'll tell you straight.
          </motion.p>
        </div>
      </section>

      {/* Accepted */}
      <section className="pt-20 pb-16 container mx-auto px-6 max-w-6xl">
        <div className="flex items-center gap-3 mb-10">
          <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" aria-hidden="true" />
          <h2 className="text-2xl font-bold tracking-tight">VEHICLES WE DETAIL</h2>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {accepted.map((v) => (
            <motion.div
              key={v.name}
              variants={itemVariants}
              className="bg-muted border border-transparent hover:border-emerald-200 transition-colors p-5 flex items-start gap-3"
            >
              <span className="mt-0.5 shrink-0 text-emerald-600" aria-hidden="true">
                <CheckCircle2 className="w-4 h-4" />
              </span>
              <div>
                <p className="text-sm font-bold leading-snug">{v.name}</p>
                <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{v.note}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Divider */}
      <div className="container mx-auto px-6 max-w-6xl border-t border-border" />

      {/* Declined */}
      <section className="pt-16 pb-0 container mx-auto px-6 max-w-6xl">
        <div className="flex items-center gap-3 mb-4">
          <XCircle className="w-6 h-6 text-red-500 shrink-0" aria-hidden="true" />
          <h2 className="text-2xl font-bold tracking-tight">VEHICLES WE DON'T TAKE</h2>
        </div>
        <p className="text-sm text-muted-foreground mb-10 max-w-xl leading-relaxed">
          These aren't in our wheelhouse. We'd rather be honest than do a bad job — if your vehicle is on this list, we're not the right fit.
        </p>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {declined.map((v) => (
            <motion.div
              key={v.name}
              variants={itemVariants}
              className="bg-white border border-border hover:border-red-200 transition-colors p-5 flex items-start gap-3"
            >
              <span className="mt-0.5 shrink-0 text-red-400" aria-hidden="true">
                <XCircle className="w-4 h-4" />
              </span>
              <div>
                <p className="text-sm font-bold leading-snug">{v.name}</p>
                <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{v.note}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA strip */}
      <section className="mt-24 bg-primary text-white">
        <div className="container mx-auto px-6 max-w-6xl py-14 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-xl font-bold tracking-tight mb-1">Not sure if your vehicle qualifies?</p>
            <p className="text-gray-400 text-sm">Give us a quick call and we'll sort it out in under a minute.</p>
          </div>
          <a
            href="tel:+6309614898374"
            className="bg-white text-primary px-10 py-4 text-sm font-semibold uppercase tracking-widest hover:bg-gray-100 transition-colors whitespace-nowrap"
          >
            Call Us Now
          </a>
        </div>
      </section>
    </div>
  );
}
