import { motion } from "framer-motion";
import { Link } from "wouter";
import aboutGaragePng from "@/assets/images/about-garage.png";

export default function About() {
  return (
    <div className="w-full">
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">IT STARTED WITH A PASSION FOR DOING THINGS RIGHT.</h1>
            <p className="text-xl text-muted-foreground font-light max-w-3xl mx-auto">
              No shortcuts. No rushed jobs. Just honest work and a deep respect for the craft.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src={aboutGaragePng} 
                alt="Every Detailing Garage" 
                className="w-full h-auto object-cover rounded-sm shadow-xl"
              />
            </motion.div>

            <motion.div
              className="space-y-6 text-muted-foreground text-lg leading-relaxed"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-primary font-medium">
                I didn't start Every Detailing to become a massive factory churning out fifty cars a day.
              </p>
              <p>
                I started this business because I was tired of seeing beautiful cars ruined by drive-through car washes and high-volume shops that use dirty rags and harsh chemicals just to get people out the door faster.
              </p>
              <p>
                When you bring your car to us, you're not a ticket number. You're bringing your vehicle to a craftsman who actually cares about the result. We take our time. We use the right techniques to prevent scratches. We clean the crevices most places ignore.
              </p>
              <p>
                It's simple, really. We just treat every car the way we'd want someone to treat ours.
              </p>
              <div className="pt-8">
                <Link 
                  href="/contact"
                  className="inline-flex items-center text-primary font-semibold tracking-wider uppercase underline underline-offset-4 hover:text-gray-600 transition-colors"
                >
                  Get in touch
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xl font-bold mb-4">No Rushed Work</h3>
              <p className="text-muted-foreground">We allocate exactly the right amount of time your vehicle needs. We never rush to hit a quota.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-xl font-bold mb-4">Safe Techniques</h3>
              <p className="text-muted-foreground">From our two-bucket wash method to clean microfiber towels, we protect your clear coat.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-xl font-bold mb-4">Premium Products</h3>
              <p className="text-muted-foreground">We use only professional-grade chemicals that are safe for your materials and leave a true finish.</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
