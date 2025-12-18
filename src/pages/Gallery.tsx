import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import g1 from "@/assets/gallery/g1.jpg";
import g2 from "@/assets/gallery/g2.jpg";
import g3 from "@/assets/gallery/g3.jpg";
import g4 from "@/assets/gallery/g4.jpg";
import g5 from "@/assets/gallery/g5.jpg";
import g6 from "@/assets/gallery/g6.jpg";
import g7 from "@/assets/gallery/g7.jpg";
import g8 from "@/assets/gallery/g8.jpg";
import g22 from "@/assets/gallery/g22.jpg";

const images = [
  { src: g1, category: "प्रकल्प", title: "आयुष्मान आरोग्य मंदिर" },
  { src: g2, category: "उत्सव", title: "ग्रामोत्सव" },
  { src: g3, category: "प्रकल्प", title: "विकास कार्य" },
  { src: g4, category: "स्वच्छता", title: "स्वच्छ भारत अभियान" },
  { src: g5, category: "प्रकल्प", title: "ग्राम विकास" },
  { src: g6, category: "पायाभूत", title: "उद्यान विकास" },
  { src: g7, category: "स्वच्छता", title: "ग्राम स्वच्छता" },
  { src: g8, category: "लोक", title: "ग्रामस्थ" },
  { src: g22, category: "प्रकल्प", title: "विकास प्रकल्प" },
];

const categories = ["सर्व", "प्रकल्प", "उत्सव", "स्वच्छता", "पायाभूत", "लोक"];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("सर्व");
  const [selectedImage, setSelectedImage] = useState<typeof images[0] | null>(null);

  const filteredImages = activeCategory === "सर्व"
    ? images
    : images.filter(img => img.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container">
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              फोटो गॅलरी
            </motion.h1>
            <motion.p
              className="text-xl opacity-90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              ग्रामपंचायतातील विविध कार्यक्रम आणि प्रकल्पांचे फोटो
            </motion.p>
          </div>
        </section>

        {/* Filter Buttons */}
        <section className="py-8 border-b border-border">
          <div className="container">
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeCategory === category ? "default" : "outline"}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-12">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={index}
                  className="relative group aspect-square rounded-xl overflow-hidden cursor-pointer"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => setSelectedImage(image)}
                >
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/60 transition-all duration-300 flex items-end">
                    <div className="p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-primary-foreground font-medium">{image.title}</p>
                      <p className="text-primary-foreground/80 text-sm">{image.category}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Lightbox */}
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 p-2 text-primary-foreground hover:bg-card/20 rounded-full transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <motion.img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="max-w-full max-h-[90vh] rounded-lg"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </main>
      <Footer />
    </div>
  );
}
