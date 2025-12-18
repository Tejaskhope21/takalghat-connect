import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Droplets, Trash2, Briefcase, Users, GraduationCap } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "ग्रामसेवक कार्यालय",
    desc: "जन्म/मृत्यू प्रमाणपत्र, प्रशासकीय सेवा",
    color: "from-primary to-primary/80",
  },
  {
    icon: Droplets,
    title: "पाणीपुरवठा योजना",
    desc: "जलजीवन मिशन, २४x७ पाणी उपलब्धता",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Trash2,
    title: "कचरा व्यवस्थापन",
    desc: "डोर-टू-डोर कलेक्शन, रिसायकलिंग",
    color: "from-green-india to-green-700",
  },
  {
    icon: Briefcase,
    title: "रोजगार हमी योजना",
    desc: "MGNREGA, १०० दिवस रोजगार हमी",
    color: "from-secondary to-gold",
  },
  {
    icon: Users,
    title: "महिला बचत गट",
    desc: "SHG लोन्स, प्रशिक्षण कार्यक्रम",
    color: "from-pink-500 to-pink-600",
  },
  {
    icon: GraduationCap,
    title: "शिक्षण सुविधा",
    desc: "अंगणवाडी, डिजिटल क्लासरूम्स, स्कॉलरशिप्स",
    color: "from-indigo-500 to-indigo-600",
  },
];

export function ServicesSection() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-title">आमच्या सुविधा</h2>
          <p className="section-subtitle">ग्रामपंचायत द्वारे उपलब्ध सेवा आणि सुविधा</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="card-hover h-full group cursor-pointer overflow-hidden">
                <CardContent className="p-6 relative">
                  {/* Background gradient on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  
                  <div className="relative">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-primary-foreground mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                      <service.icon className="h-7 w-7" />
                    </div>
                    <h3 className="font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">{service.desc}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
