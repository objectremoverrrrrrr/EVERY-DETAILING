import { useEffect, useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

import imgLogo      from "@/assets/images/Every_Detailing_TB.png";
import imgHero      from "@/assets/images/hero-car.png";
import imgAbout     from "@/assets/images/about-garage.png";
import imgFortunер  from "@/assets/images/gallery-client-fortuner.png";
import imgMitsubishi from "@/assets/images/gallery-client-mitsubishi.png";
import imgScratch   from "@/assets/images/gallery-client-scratch.png";
import imgCorrection from "@/assets/images/gallery-correction.png";
import imgEngine    from "@/assets/images/gallery-engine.png";
import imgLeather   from "@/assets/images/gallery-leather.png";
import imgWax       from "@/assets/images/gallery-wax.png";
import imgWheel     from "@/assets/images/gallery-wheel.png";

const ALL_IMAGES = [
  imgLogo,
  imgHero,
  imgAbout,
  imgFortunер,
  imgMitsubishi,
  imgScratch,
  imgCorrection,
  imgEngine,
  imgLeather,
  imgWax,
  imgWheel,
];

const MIN_DISPLAY_MS = 1400;

interface LoadingScreenProps {
  onDone: () => void;
}

export default function LoadingScreen({ onDone }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [ready, setReady] = useState(false);
  const startTime = useRef(Date.now());

  useEffect(() => {
    let loaded = 0;
    const total = ALL_IMAGES.length;

    const finish = () => {
      const elapsed = Date.now() - startTime.current;
      const remaining = Math.max(0, MIN_DISPLAY_MS - elapsed);
      setTimeout(() => setReady(true), remaining);
    };

    ALL_IMAGES.forEach((src) => {
      const img = new Image();
      img.onload = img.onerror = () => {
        loaded += 1;
        setProgress(Math.round((loaded / total) * 100));
        if (loaded === total) finish();
      };
      img.src = src;
    });
  }, []);

  useEffect(() => {
    if (ready) {
      const t = setTimeout(onDone, 600); 
      return () => clearTimeout(t);
    }
  }, [ready, onDone]);

  return (
    <AnimatePresence>
      {!ready && (
        <motion.div
          key="loading"
          className="fixed inset-0 z-[9999] bg-primary flex flex-col items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.55, ease: "easeInOut" }}
        >
          <motion.img
            src={imgLogo}
            alt="Every Detailing"
            className="h-16 w-auto object-contain brightness-0 invert mb-10 select-none"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            draggable={false}
          />

          <div className="w-48 h-[2px] bg-white/15 overflow-hidden">
            <motion.div
              className="h-full bg-white origin-left"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: progress / 100 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            />
          </div>
          
          <motion.p
            className="mt-4 text-xs font-semibold tracking-widest text-white/40 tabular-nums"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {progress}%
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
