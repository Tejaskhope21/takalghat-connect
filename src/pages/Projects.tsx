import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    title: "रस्ते विकास",
    status: "चालू",
    progress: 70,
    description: "५ किमी रोड बिल्डिंग प्रकल्प",
    budget: "₹ ५० लाख",
    timeline: "२०२४-२०२५",
  },
  {
    id: 2,
    title: "जलजीवन मिशन",
    status: "पूर्ण",
    progress: 100,
    description: "पाणी पुरवठा योजना - २४x७ उपलब्धता",
    budget: "₹ ३५ लाख",
    timeline: "२०२३",
  },
  {
    id: 3,
    title: "सोलर एनर्जी",
    status: "योजनाबद्ध",
    progress: 20,
    description: "गावात सोलर पॅनल्स इंस्टॉलेशन",
    budget: "₹ २५ लाख",
    timeline: "२०२५",
  },
  {
    id: 4,
    title: "उद्यान विकास",
    status: "चालू",
    progress: 50,
    description: "पार्क ब्यूटिफिकेशन आणि प्लेग्राउंड",
    budget: "₹ १५ लाख",
    timeline: "२०२४",
  },
  {
    id: 5,
    title: "डिजिटल क्लासरूम",
    status: "पूर्ण",
    progress: 100,
    description: "शाळांमध्ये स्मार्ट क्लासरूम",
    budget: "₹ २० लाख",
    timeline: "२०२३",
  },
  {
    id: 6,
    title: "ग्राम स्वच्छता",
    status: "चालू",
    progress: 85,
    description: "कचरा व्यवस्थापन आणि स्वच्छता अभियान",
    budget: "₹ १० लाख",
    timeline: "२०२४",
  },
];

const filters = ["सर्व", "चालू", "पूर्ण", "योजनाबद्ध"];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("सर्व");

  const filteredProjects = activeFilter === "सर्व"
    ? projects
    : projects.filter(p => p.status === activeFilter);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "पूर्ण": return "bg-accent text-accent-foreground";
      case "चालू": return "bg-secondary text-secondary-foreground";
      case "योजनाबद्ध": return "bg-muted text-muted-foreground";
      default: return "bg-muted";
    }
  };

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
              प्रकल्प
            </motion.h1>
            <motion.p
              className="text-xl opacity-90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              ग्रामपंचायतातील विकास प्रकल्पांची माहिती
            </motion.p>
          </div>
        </section>

        {/* Filter Buttons */}
        <section className="py-8 border-b border-border">
          <div className="container">
            <div className="flex flex-wrap gap-3">
              {filters.map((filter) => (
                <Button
                  key={filter}
                  variant={activeFilter === filter ? "default" : "outline"}
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-12">
          <div className="container">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="bg-card rounded-xl border border-border overflow-hidden card-hover"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold">{project.title}</h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                        {project.status}
                      </span>
                    </div>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    
                    {/* Progress Bar */}
                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-1">
                        <span>प्रगती</span>
                        <span>{project.progress}%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-primary rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${project.progress}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                        />
                      </div>
                    </div>

                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>बजेट: {project.budget}</span>
                      <span>{project.timeline}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
