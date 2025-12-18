import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Users, MapPin, School, Calendar } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: 1239,
    suffix: "",
    label: "लोकसंख्या",
    detail: "पुरुष: ६४९ | स्त्री: ५९०",
  },
  {
    icon: MapPin,
    value: 4.1,
    suffix: " चौ. किमी",
    label: "एकूण क्षेत्रफळ",
    detail: "मुख्यतः शेती आणि ग्रामीण भाग",
  },
  {
    icon: School,
    value: 5,
    suffix: "+",
    label: "शाळा व संस्था",
    detail: "अंगणवाडी, प्राथमिक, हायस्कूल",
  },
  {
    icon: Calendar,
    value: 1950,
    suffix: "",
    label: "स्थापना",
    detail: "विदर्भातील ऐतिहासिक गाव",
  },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current * 10) / 10);
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count.toLocaleString("mr-IN")}
      {suffix}
    </span>
  );
}

export function StatsSection() {
  return (
    <section className="py-16 gradient-hero text-primary-foreground">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">गाव आकडेवारी</h2>
          <p className="text-primary-foreground/80 text-lg">२०११ जनगणनेनुसार अद्यतनित माहिती</p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="text-center p-6 bg-primary-foreground/10 backdrop-blur rounded-2xl hover:bg-primary-foreground/15 transition-colors"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground">
                <stat.icon className="h-7 w-7" />
              </div>
              <div className="text-3xl md:text-4xl font-bold mb-2">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <h3 className="font-semibold text-lg mb-1">{stat.label}</h3>
              <p className="text-sm text-primary-foreground/70">{stat.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
