import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FileText, Download, Search, Calendar } from "lucide-react";

const documents = [
  { id: 1, name: "ग्रामसभा मिनिट्स - जानेवारी २०२४", type: "PDF", date: "१५ जानेवारी २०२४", size: "2.5 MB" },
  { id: 2, name: "वार्षिक बजेट २०२३-२४", type: "PDF", date: "०१ एप्रिल २०२३", size: "1.8 MB" },
  { id: 3, name: "जन्म प्रमाणपत्र अर्ज", type: "PDF", date: "अपडेटेड", size: "150 KB" },
  { id: 4, name: "मृत्यू प्रमाणपत्र अर्ज", type: "PDF", date: "अपडेटेड", size: "145 KB" },
  { id: 5, name: "रहिवासी दाखला अर्ज", type: "PDF", date: "अपडेटेड", size: "180 KB" },
  { id: 6, name: "उत्पन्न दाखला अर्ज", type: "PDF", date: "अपडेटेड", size: "160 KB" },
  { id: 7, name: "ग्रामपंचायत नियमावली", type: "PDF", date: "२०२०", size: "5.2 MB" },
  { id: 8, name: "विकास आराखडा २०२४-२५", type: "PDF", date: "०१ एप्रिल २०२४", size: "3.1 MB" },
  { id: 9, name: "स्वच्छता अहवाल", type: "PDF", date: "मासिक", size: "800 KB" },
  { id: 10, name: "पाणी पुरवठा अहवाल", type: "PDF", date: "तिमाही", size: "1.2 MB" },
];

export default function Documents() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredDocs = documents.filter(doc =>
    doc.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
              दस्तऐवज
            </motion.h1>
            <motion.p
              className="text-xl opacity-90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              महत्त्वाचे अर्ज, अहवाल आणि कागदपत्रे
            </motion.p>
          </div>
        </section>

        {/* Search */}
        <section className="py-8 border-b border-border">
          <div className="container">
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="दस्तऐवज शोधा..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
        </section>

        {/* Documents Table */}
        <section className="py-12">
          <div className="container">
            <div className="bg-card rounded-xl border border-border overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-muted/50">
                    <tr>
                      <th className="text-left px-6 py-4 font-semibold">दस्तऐवज</th>
                      <th className="text-left px-6 py-4 font-semibold hidden md:table-cell">प्रकार</th>
                      <th className="text-left px-6 py-4 font-semibold hidden md:table-cell">तारीख</th>
                      <th className="text-left px-6 py-4 font-semibold hidden sm:table-cell">आकार</th>
                      <th className="text-right px-6 py-4 font-semibold">डाउनलोड</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredDocs.map((doc, index) => (
                      <motion.tr
                        key={doc.id}
                        className="border-t border-border hover:bg-muted/30 transition-colors"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <FileText className="w-5 h-5 text-primary" />
                            <span className="font-medium">{doc.name}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 hidden md:table-cell">
                          <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">
                            {doc.type}
                          </span>
                        </td>
                        <td className="px-6 py-4 hidden md:table-cell text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            {doc.date}
                          </div>
                        </td>
                        <td className="px-6 py-4 hidden sm:table-cell text-muted-foreground">
                          {doc.size}
                        </td>
                        <td className="px-6 py-4 text-right">
                          <Button size="sm" variant="outline">
                            <Download className="w-4 h-4" />
                          </Button>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
