import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail, Clock, AlertTriangle } from "lucide-react";
import { SiInstagram, SiFacebook, SiTiktok } from "react-icons/si";
import { useBooking } from "@/context/BookingContext";
import logoImg from "@/assets/images/Every_Detailing_TB.png";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  const {
    isOpen, openBooking, closeBooking,
    isMobileDisclaimerOpen, closeMobileDisclaimer, confirmMobileBooking,
  } = useBooking();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = isOpen || mobileMenuOpen || isMobileDisclaimerOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen, mobileMenuOpen, isMobileDisclaimerOpen]);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Gallery", href: "/gallery" },
    { label: "About", href: "/about" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-primary font-sans">
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/95 backdrop-blur-sm shadow-sm py-3" : "bg-white py-4"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5" data-testid="link-logo">
            <img src={logoImg} alt="Every Detailing" className="h-10 w-auto object-contain" />
            <span className="text-base font-bold tracking-tight uppercase">EVERY DETAILING</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors hover:text-gray-500 ${
                  location === link.href ? "text-primary" : "text-gray-600"
                }`}
                data-testid={`link-desktop-${link.label.toLowerCase()}`}
              >
                {link.label}
              </Link>
            ))}
            <button
              type="button"
              onClick={openBooking}
              className="bg-primary text-white px-5 py-2.5 text-sm font-semibold hover:bg-gray-800 transition-colors uppercase tracking-wider"
              data-testid="btn-desktop-book"
            >
              Book Now
            </button>
          </nav>

          <button
            type="button"
            aria-label="Open navigation menu"
            className="md:hidden p-2 text-primary"
            onClick={() => setMobileMenuOpen(true)}
            data-testid="btn-mobile-menu"
          >
            <Menu className="w-6 h-6" aria-hidden="true" />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/30 z-50 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              className="fixed top-0 right-0 bottom-0 w-4/5 max-w-sm bg-white z-50 p-6 shadow-xl md:hidden flex flex-col"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              <div className="flex justify-between items-center mb-8">
                <img src={logoImg} alt="Every Detailing" className="h-9 w-auto object-contain" />
                <button
                  type="button"
                  aria-label="Close navigation menu"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-primary"
                >
                  <X className="w-6 h-6" aria-hidden="true" />
                </button>
              </div>
              <nav className="flex flex-col gap-6 flex-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-lg font-medium tracking-wide text-primary"
                    data-testid={`link-mobile-${link.label.toLowerCase()}`}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <button
                type="button"
                onClick={() => { setMobileMenuOpen(false); openBooking(); }}
                className="bg-primary text-white px-6 py-4 text-center text-base font-semibold uppercase tracking-wider mt-auto"
                data-testid="btn-mobile-book"
              >
                Book Now
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Mobile Detailing Disclaimer Modal */}
      <AnimatePresence>
        {isMobileDisclaimerOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/60 z-[60]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMobileDisclaimer}
            />
            <motion.div
              className="fixed inset-0 z-[70] flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-white w-full max-w-md shadow-2xl"
                initial={{ scale: 0.95, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 20 }}
                transition={{ duration: 0.2 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="bg-amber-50 border-b border-amber-200 p-6 flex items-start gap-4">
                  <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <h2 className="text-lg font-bold tracking-tight text-amber-900 mb-1">Before You Book — Mobile Service</h2>
                    <p className="text-sm text-amber-800">Please read before continuing.</p>
                  </div>
                  <button
                    type="button"
                    aria-label="Close disclaimer"
                    onClick={closeMobileDisclaimer}
                    className="ml-auto p-1 text-amber-700 hover:text-amber-900 transition-colors shrink-0"
                  >
                    <X className="w-5 h-5" aria-hidden="true" />
                  </button>
                </div>

                <div className="p-6 space-y-4 text-sm text-gray-700 leading-relaxed">
                  <p>
                    By booking a mobile detailing service, you acknowledge and agree to the following:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 shrink-0" aria-hidden="true" />
                      <span><strong>Travel fees are non-refundable</strong> once the technician has departed for your location, regardless of cancellation reason.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 shrink-0" aria-hidden="true" />
                      <span><strong>Cancellations must be made at least 24 hours</strong> before your scheduled appointment to avoid forfeiting your travel deposit.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 shrink-0" aria-hidden="true" />
                      <span><strong>No-shows forfeit the travel fee</strong> in full. A new travel fee applies if rescheduling is requested.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 shrink-0" aria-hidden="true" />
                      <span>For <strong>Custom Quote locations</strong> (neighboring regions or international), pricing is confirmed over the phone before any commitment is made.</span>
                    </li>
                  </ul>
                  <p className="text-xs text-gray-500 pt-2 border-t border-gray-100">
                    Continuing to book means you have read and accept these terms.
                  </p>
                </div>

                <div className="px-6 pb-6 flex gap-3">
                  <button
                    type="button"
                    onClick={closeMobileDisclaimer}
                    className="flex-1 border border-border py-3 text-sm font-semibold uppercase tracking-widest hover:border-primary transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    onClick={confirmMobileBooking}
                    className="flex-1 bg-primary text-white py-3 text-sm font-semibold uppercase tracking-widest hover:bg-gray-800 transition-colors"
                  >
                    I Understand — Continue
                  </button>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Contact / Booking Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/60 z-[60]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeBooking}
            />
            <motion.div
              className="fixed inset-0 z-[70] flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-white w-full max-w-md shadow-2xl"
                initial={{ scale: 0.95, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 20 }}
                transition={{ duration: 0.2 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="bg-primary text-white p-8 relative">
                  <button
                    type="button"
                    aria-label="Close booking modal"
                    onClick={closeBooking}
                    className="absolute top-4 right-4 p-1 text-white/70 hover:text-white transition-colors"
                  >
                    <X className="w-5 h-5" aria-hidden="true" />
                  </button>
                  <h2 className="text-2xl font-bold tracking-tight mb-1">BOOK YOUR DETAIL</h2>
                  <p className="text-gray-300 text-sm">Give us a call — we'll find a time that works.</p>
                </div>

                <div className="p-8 space-y-6">
                  <div>
                    <p className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-2">Call Us</p>
                    <a
                      href="tel:+6309614898374"
                      className="flex items-center gap-3 group"
                      data-testid="modal-tel"
                    >
                      <div className="w-10 h-10 bg-primary text-white flex items-center justify-center shrink-0">
                        <Phone className="w-4 h-4" aria-hidden="true" />
                      </div>
                      <span className="text-2xl font-light group-hover:text-gray-600 transition-colors">
                        +63 0961 489 8374
                      </span>
                    </a>
                  </div>

                  <div>
                    <p className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-2">Email</p>
                    <a
                      href="mailto:Timeholde@gmail.com"
                      className="flex items-center gap-3 group"
                      data-testid="modal-email"
                    >
                      <div className="w-10 h-10 bg-gray-100 text-primary flex items-center justify-center shrink-0">
                        <Mail className="w-4 h-4" aria-hidden="true" />
                      </div>
                      <span className="text-base text-gray-700 group-hover:text-gray-900 transition-colors">
                        Timeholde@gmail.com
                      </span>
                    </a>
                  </div>

                  <div>
                    <p className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-2">Hours</p>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-gray-100 text-primary flex items-center justify-center shrink-0">
                        <Clock className="w-4 h-4" aria-hidden="true" />
                      </div>
                      <div className="text-sm text-gray-600 pt-2 leading-relaxed">
                        Mon – Fri &nbsp; 8:00 AM – 6:00 PM<br />
                        Saturday &nbsp; 8:00 AM – 4:00 PM<br />
                        Sunday &nbsp;&nbsp;&nbsp; Closed
                      </div>
                    </div>
                  </div>

                  <a
                    href="tel:+6309614898374"
                    className="bg-primary text-white w-full flex items-center justify-center gap-3 py-4 text-sm font-semibold tracking-widest uppercase hover:bg-gray-800 transition-colors mt-2"
                    data-testid="modal-call-btn"
                  >
                    <Phone className="w-4 h-4" aria-hidden="true" />
                    Call Now to Book
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <main className="flex-1 pt-[68px]">
        {children}
      </main>

      <footer className="bg-primary text-white py-10">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <Link href="/">
            <img src={logoImg} alt="Every Detailing" className="h-9 w-auto object-contain brightness-0 invert" />
          </Link>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-300">
            <a href="tel:+6309614898374" className="hover:text-white transition-colors">+63 0961 489 8374</a>
            <span aria-hidden="true">·</span>
            <a href="mailto:Timeholde@gmail.com" className="hover:text-white transition-colors">Timeholde@gmail.com</a>
            <span aria-hidden="true">·</span>
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <Link href="/gallery" className="hover:text-white transition-colors">Gallery</Link>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://www.instagram.com/every_detailing/" target="_blank" rel="noreferrer" aria-label="Visit our Instagram" className="text-gray-300 hover:text-white transition-colors">
              <SiInstagram className="w-4 h-4" aria-hidden="true" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61589215944257" target="_blank" rel="noreferrer" aria-label="Visit our Facebook" className="text-gray-300 hover:text-white transition-colors">
              <SiFacebook className="w-4 h-4" aria-hidden="true" />
            </a>
            <a href="https://www.tiktok.com/@every_detailing_" target="_blank" rel="noreferrer" aria-label="Visit our TikTok" className="text-gray-300 hover:text-white transition-colors">
              <SiTiktok className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="container mx-auto px-6 mt-6 pt-6 border-t border-white/10 text-center">
          <p className="text-xs text-gray-300">&copy; {new Date().getFullYear()} Every Detailing. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
