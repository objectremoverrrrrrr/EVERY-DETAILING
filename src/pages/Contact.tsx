import { motion } from "framer-motion";
import { Phone, MapPin, Clock, Mail } from "lucide-react";

export default function Contact() {
  return (
    <div className="w-full py-20 md:py-32 bg-muted min-h-screen">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">GET IN TOUCH</h1>
          <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">
            Ready to give your car the treatment it deserves? Have a question about our services? Reach out.
          </p>
        </motion.div>

        <div className="bg-white border border-border grid grid-cols-1 md:grid-cols-2 shadow-sm">
          <motion.div
            className="p-10 md:p-16 border-b md:border-b-0 md:border-r border-border"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-8">Contact Information</h2>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-primary shrink-0 mt-1" />
                <div>
                  <p className="font-semibold mb-1">Phone</p>
                  <a href="tel:+6209614898374" className="text-lg text-muted-foreground hover:text-primary transition-colors">
                    +62 0961 489 8374
                  </a>
                  <p className="text-sm text-gray-500 mt-1">Call to book or ask questions.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-primary shrink-0 mt-1" />
                <div>
                  <p className="font-semibold mb-1">Email</p>
                  <a href="mailto:Timeholde@gmail.com" className="text-lg text-muted-foreground hover:text-primary transition-colors">
                    Timeholde@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-primary shrink-0 mt-1" />
                <div>
                  <p className="font-semibold mb-1">Location</p>
                  <p className="text-lg text-muted-foreground">
                    Iligan City, Lanao del Norte<br />
                    Mindanao, Philippines
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="p-10 md:p-16 bg-gray-50 flex flex-col justify-center"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold mb-8">Business Hours</h2>

            <ul className="space-y-4 text-lg">
              <li className="flex justify-between border-b border-gray-200 pb-2">
                <span className="text-muted-foreground">Monday</span>
                <span className="font-medium">8:00 AM – 6:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-gray-200 pb-2">
                <span className="text-muted-foreground">Tuesday</span>
                <span className="font-medium">8:00 AM – 6:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-gray-200 pb-2">
                <span className="text-muted-foreground">Wednesday</span>
                <span className="font-medium">8:00 AM – 6:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-gray-200 pb-2">
                <span className="text-muted-foreground">Thursday</span>
                <span className="font-medium">8:00 AM – 6:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-gray-200 pb-2">
                <span className="text-muted-foreground">Friday</span>
                <span className="font-medium">8:00 AM – 6:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-gray-200 pb-2">
                <span className="text-muted-foreground">Saturday</span>
                <span className="font-medium">8:00 AM – 4:00 PM</span>
              </li>
              <li className="flex justify-between pt-2">
                <span className="text-muted-foreground">Sunday</span>
                <span className="font-medium text-gray-400">Closed</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
