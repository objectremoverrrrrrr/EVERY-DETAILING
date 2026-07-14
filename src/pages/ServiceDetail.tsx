import { useParams, Link } from "wouter";
import { motion } from "framer-motion";
import { Check, ArrowLeft } from "lucide-react";
import { services, currencySymbol } from "@/data/services";
import { useBooking } from "@/context/BookingContext";
import NotFound from "@/pages/not-found";

export default function ServiceDetail() {
  const { slug } = useParams();
  const { openBooking } = useBooking();
  const service = services.find(s => s.slug === slug);

  if (!service) {
    return <NotFound />;
  }

  return (
    <div className="w-full py-16 md:py-32">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/services"
            className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-12"
          >
            <ArrowLeft className="w-4 h-4 mr-2" aria-hidden="true" />
            Back to Services
          </Link>

          <div className="bg-white border border-border p-8 md:p-12 shadow-sm">
            <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-8 pb-8 border-b border-border">
              <div>
                <span className="uppercase tracking-widest text-xs font-semibold text-muted-foreground block mb-2">
                  {service.type === "package" ? "Detail Package" : "Single Service"}
                </span>
                <h1 className="text-3xl md:text-5xl font-bold tracking-tight">{service.name}</h1>
              </div>
              <div className="mt-4 md:mt-0 text-left md:text-right">
                <span className="text-muted-foreground block text-sm">
                  {service.isStartingPrice ? "Starting from" : "Price"}
                </span>
                <span className="text-3xl md:text-4xl font-light">{currencySymbol}{service.price.toLocaleString()}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
              <div className="md:col-span-3">
                <h3 className="text-xl font-bold mb-4">About this service</h3>
                <p className="text-muted-foreground leading-relaxed text-lg mb-8">
                  {service.fullDescription || service.shortDescription}
                </p>

                <h3 className="text-xl font-bold mb-6">What's included</h3>
                <ul className="space-y-4">
                  {service.included.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" aria-hidden="true" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="md:col-span-2 bg-muted p-8 self-start sticky top-32">
                <h3 className="text-lg font-bold mb-3">Ready to book?</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Call us to schedule your {service.name}. We'll make sure it's the right fit for your vehicle.
                </p>
                <button
                  type="button"
                  onClick={openBooking}
                  className="bg-primary text-white w-full py-4 text-sm font-semibold tracking-widest uppercase hover:bg-gray-800 transition-colors"
                  data-testid="btn-book-this-service"
                >
                  Book This Service
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
