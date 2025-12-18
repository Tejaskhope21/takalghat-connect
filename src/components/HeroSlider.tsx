import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import g1 from "@/assets/gallery/g1.jpg";
import g4 from "@/assets/gallery/g4.jpg";
import g7 from "@/assets/gallery/g7.jpg";
import g22 from "@/assets/gallery/g22.jpg";

const slides = [
  {
    image: g1,
    title: "आधुनिक आणि डिजिटल टाकळघाट ग्रामपंचायत",
    subtitle: "आयुष्मान आरोग्य मंदिर - आरोग्य सेवा सर्वांसाठी",
  },
  {
    image: g4,
    title: "स्वच्छ भारत अभियान",
    subtitle: "स्वच्छता आणि पर्यावरण संरक्षणासाठी सामूहिक प्रयत्न",
  },
  {
    image: g7,
    title: "ग्राम स्वच्छता अभियान",
    subtitle: "स्वच्छता ही सेवा - प्रत्येक नागरिकाचे कर्तव्य",
  },
  {
    image: g22,
    title: "विकास प्रकल्प",
    subtitle: "ग्रामीण विकास आणि आधुनिकीकरणाच्या दिशेने प्रवास",
  },
];

export function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent((c) => (c + 1) % slides.length);

  return (
    <section className="relative h-[500px] md:h-[600px] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0"
        >
          <img
            src={slides[current].image}
            alt={slides[current].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 gradient-hero" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="container text-center text-primary-foreground">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg">
                {slides[current].title}
              </h2>
              <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto drop-shadow">
                {slides[current].subtitle}
              </p>
              <Button
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8 animate-pulse-glow"
              >
                अधिक पहा
              </Button>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-card/20 hover:bg-card/40 rounded-full text-primary-foreground backdrop-blur transition-all"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-card/20 hover:bg-card/40 rounded-full text-primary-foreground backdrop-blur transition-all"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === current ? "bg-secondary w-8" : "bg-primary-foreground/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
