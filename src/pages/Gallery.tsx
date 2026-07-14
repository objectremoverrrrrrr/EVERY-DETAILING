import { motion } from "framer-motion";
import imgMitsubishi from "@/assets/images/gallery-client-mitsubishi.png";
import imgFortune from "@/assets/images/gallery-client-fortuner.png";
import imgScratch from "@/assets/images/gallery-client-scratch.png";
import imgWheel from "@/assets/images/gallery-wheel.png";
import imgLeather from "@/assets/images/gallery-leather.png";
import imgEngine from "@/assets/images/gallery-engine.png";
import imgWax from "@/assets/images/gallery-wax.png";
import imgCorrection from "@/assets/images/gallery-correction.png";

export default function Gallery() {
  const images = [
    { src: imgMitsubishi, alt: "Mitsubishi XForce after full exterior detail", span: "md:col-span-1 md:row-span-2" },
    { src: imgFortune, alt: "Toyota Fortuner after exterior detail", span: "md:col-span-2 md:row-span-1" },
    { src: imgScratch, alt: "Paint scratch detail close-up", span: "md:col-span-1 md:row-span-1" },
    { src: imgWheel, alt: "Freshly cleaned alloy wheel", span: "md:col-span-1 md:row-span-1" },
    { src: imgLeather, alt: "Spotless interior leather seats", span: "md:col-span-2 md:row-span-1" },
    { src: imgCorrection, alt: "Paint correction polishing", span: "md:col-span-1 md:row-span-1" },
    { src: imgWax, alt: "Water beading on wax", span: "md:col-span-1 md:row-span-1" },
    { src: imgEngine, alt: "Clean engine bay", span: "md:col-span-1 md:row-span-1" },
  ];

  return (
    <div className="w-full py-20 md:py-32">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">THE PROOF IS IN THE DETAILS</h1>
          <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">
            A look at our recent work. Real cars, real results, zero filters.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[260px] gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              className={`relative overflow-hidden group bg-muted ${img.span}`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
