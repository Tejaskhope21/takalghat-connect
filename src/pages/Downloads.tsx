import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FileText, Download, Search, File, FileSpreadsheet, FileImage } from "lucide-react";

const downloads = [
  { id: 1, name: "जन्म नोंदणी अर्ज", type: "Form", format: "PDF", size: "150 KB", downloads: 245 },
  { id: 2, name: "मृत्यू नोंदणी अर्ज", type: "Form", format: "PDF", size: "145 KB", downloads: 189 },
  { id: 3, name: "रहिवासी दाखला अर्ज", type: "Form", format: "PDF", size: "180 KB", downloads: 567 },
  { id: 4, name: "उत्पन्न दाखला अर्ज", type: "Form", format: "PDF", size: "160 KB", downloads: 423 },
  { id: 5, name: "बांधकाम परवाना अर्ज", type: "Form", format: "PDF", size: "220 KB", downloads: 156 },
  { id: 6, name: "पाणी कनेक्शन अर्ज", type: "Form", format: "PDF", size: "170 KB", downloads: 312 },
  { id: 7, name: "वार्षिक अहवाल २०२३-२४", type: "Report", format: "PDF", size: "3.2 MB", downloads: 89 },
  { id: 8, name: "बजेट विवरण २०२४-२५", type: "Report", format: "PDF", size: "1.8 MB", downloads: 134 },
  { id: 9, name: "ग्रामपंचायत मार्गदर्शक", type: "Guide", format: "PDF", size: "5.5 MB", downloads: 278 },
  { id: 10, name: "योजना माहिती पुस्तिका", type: "Guide", format: "PDF", size: "4.1 MB", downloads: 456 },
];

const types = ["सर्व", "Form", "Report", "Guide"];

export default function Downloads() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeType, setActiveType] = useState("सर्व");

  const filteredDownloads = downloads.filter(d => {
    const matchesSearch = d.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = activeType === "सर्व" || d.type === activeType;
    return matchesSearch && matchesType;
  });

  const getIcon = (format: string) => {
    switch (format) {
      case "PDF": return FileText;
      case "DOC": return File;
      case "XLS": return FileSpreadsheet;
      default: return FileImage;
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
              डाउनलोड्स
            </motion.h1>
            <motion.p
              className="text-xl opacity-90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              अर्ज फॉर्म, अहवाल आणि मार्गदर्शक पुस्तिका
            </motion.p>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 border-b border-border">
          <div className="container">
            <div className="flex flex-col sm:flex-row gap-4 justify-between">
              <div className="flex flex-wrap gap-3">
                {types.map((type) => (
                  <Button
                    key={type}
                    variant={activeType === type ? "default" : "outline"}
                    onClick={() => setActiveType(type)}
                  >
                    {type === "Form" ? "अर्ज" : type === "Report" ? "अहवाल" : type === "Guide" ? "मार्गदर्शक" : type}
                  </Button>
                ))}
              </div>
              <div className="relative w-full sm:w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  placeholder="शोधा..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Downloads Grid */}
        <section className="py-12">
          <div className="container">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDownloads.map((item, index) => {
                const Icon = getIcon(item.format);
                return (
                  <motion.div
                    key={item.id}
                    className="bg-card p-6 rounded-xl border border-border card-hover"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-1">{item.name}</h3>
                        <div className="flex items-center gap-3 text-sm text-muted-foreground mb-3">
                          <span>{item.format}</span>
                          <span>•</span>
                          <span>{item.size}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-muted-foreground">
                            {item.downloads} डाउनलोड्स
                          </span>
                          <Button size="sm">
                            <Download className="w-4 h-4 mr-2" />
                            डाउनलोड
                          </Button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
