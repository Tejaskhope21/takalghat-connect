import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const leaders = [
  {
    name: "देवेंद्र फडणवीस",
    title: "माननीय मुख्यमंत्री",
    party: "भाजप",
    since: "2024",
  },
  {
    name: "एकनाथ शिंदे",
    title: "माननीय उपमुख्यमंत्री",
    party: "शिवसेना",
    since: "2024",
  },
  {
    name: "अजित पवार",
    title: "माननीय उपमुख्यमंत्री",
    party: "राष्ट्रवादी",
    since: "2024",
  },
  {
    name: "चंद्रशेखर बावनकुळे",
    title: "माननीय पालकमंत्री",
    party: "भाजप - नागपूर",
    since: "2024",
  },
  {
    name: "विनायक महामुनी",
    title: "जिल्हा मुख्य अधिकारी",
    party: "IAS - नागपूर जिल्हा परिषद",
    since: "2024",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function LeadershipSection() {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-title">महाराष्ट्र सरकार नेतृत्व</h2>
          <p className="section-subtitle">आमचे मार्गदर्शक नेते</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6"
        >
          {leaders.map((leader, index) => (
            <motion.div key={leader.name} variants={itemVariants}>
              <Card className="card-hover text-center group cursor-pointer">
                <CardContent className="p-4 md:p-6">
                  <div className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center text-primary-foreground text-2xl md:text-3xl font-bold">
                      {leader.name.charAt(0)}
                    </div>
                  </div>
                  <h3 className="font-semibold text-sm md:text-base text-foreground mb-1">
                    {leader.name}
                  </h3>
                  <p className="text-xs md:text-sm text-primary font-medium mb-1">
                    {leader.title}
                  </p>
                  <p className="text-xs text-muted-foreground">{leader.party}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
