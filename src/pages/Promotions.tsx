import { motion } from "framer-motion";
import { useBooking } from "@/context/BookingContext";

export default function Promotions() {
  const { openBooking } = useBooking();

  const promos = [
    {
      title: "First-Time Customer",
      value: "15% OFF",
      description: "Get 15% off your first full detail package. Experience the Every Detailing difference for yourself.",
      code: "WELCOME15"
    },
    {
      title: "Seasonal Reset",
      value: "₱500 OFF",
      description: "Take ₱500 off the Complete Detail package this month. Perfect for a full vehicle reset.",
      code: "SEASON500"
    },
    {
      title: "Referral Reward",
      value: "₱250 Credit",
      description: "Refer a friend who books a package, and you both get a ₱250 credit toward your next service.",
      code: "Just tell us who sent you!"
    }
  ];

  return (
    <div className="w-full py-20 md:py-32">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <motion.h1
            className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            CURRENT PROMOTIONS
          </motion.h1>
          <motion.p
            className="text-xl text-muted-foreground font-light max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Mention these offers when you call to book your appointment.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {promos.map((promo, i) => (
            <motion.div
              key={i}
              className="border border-border p-8 flex flex-col bg-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 + 0.2 }}
            >
              <h3 className="text-xl font-bold mb-2">{promo.title}</h3>
              <p className="text-3xl font-light text-primary mb-6">{promo.value}</p>
              <p className="text-muted-foreground mb-8 flex-1 leading-relaxed">{promo.description}</p>
              <div className="bg-muted p-4 text-center border border-dashed border-gray-300">
                <span className="text-sm font-mono text-gray-600 font-semibold">{promo.code}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <button
            type="button"
            onClick={openBooking}
            className="bg-primary text-white px-8 py-4 text-sm font-semibold hover:bg-gray-800 transition-colors uppercase tracking-widest"
          >
            Claim Offer & Book
          </button>
        </motion.div>
      </div>
    </div>
  );
}
