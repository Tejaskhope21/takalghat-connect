import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { FileDown, ExternalLink } from "lucide-react";

const schemes = [
  {
    id: "mgnrega",
    title: "महात्मा गांधी रोजगार हमी योजना",
    shortName: "MGNREGA",
    description: "ग्रामीण कुटुंबांना १०० दिवस रोजगार हमी",
    eligibility: [
      "ग्रामीण भागातील कुटुंब",
      "१८ वर्षांवरील व्यक्ती",
      "जॉब कार्ड धारक",
    ],
    benefits: [
      "वर्षातून १०० दिवस काम",
      "किमान वेतन हमी",
      "बेरोजगारी भत्ता",
    ],
  },
  {
    id: "swachh",
    title: "स्वच्छ भारत अभियान",
    shortName: "SBM",
    description: "गाव स्वच्छता आणि शौचालय बांधकाम",
    eligibility: [
      "BPL कुटुंबे",
      "शौचालय नसलेले घर",
      "ग्रामपंचायत शिफारस",
    ],
    benefits: [
      "शौचालय बांधकाम अनुदान",
      "₹१२,००० अनुदान",
      "ODF गाव प्रमाणपत्र",
    ],
  },
  {
    id: "jaljeevan",
    title: "जलजीवन मिशन",
    shortName: "JJM",
    description: "प्रत्येक घरात नळ पाणी पुरवठा",
    eligibility: [
      "सर्व ग्रामीण कुटुंबे",
      "नळ कनेक्शन नसलेले घर",
    ],
    benefits: [
      "मोफत नळ कनेक्शन",
      "स्वच्छ पिण्याचे पाणी",
      "२४x७ पाणी पुरवठा",
    ],
  },
  {
    id: "pmay",
    title: "प्रधानमंत्री आवास योजना",
    shortName: "PMAY-G",
    description: "घर बांधणी सबसिडी योजना",
    eligibility: [
      "BPL कुटुंबे",
      "पक्के घर नसलेले",
      "SECC सूचीमध्ये नाव",
    ],
    benefits: [
      "₹१.२० लाख अनुदान (मैदानी)",
      "₹१.३० लाख अनुदान (डोंगराळ)",
      "MGNREGA सह ९० दिवस मजुरी",
    ],
  },
  {
    id: "mahila",
    title: "महिला सशक्तीकरण योजना",
    shortName: "SHG",
    description: "महिला बचत गट आणि लघु उद्योग",
    eligibility: [
      "१८-६५ वर्षे महिला",
      "बचत गटाची सदस्य",
      "प्रशिक्षण पूर्ण",
    ],
    benefits: [
      "कमी व्याजदरात कर्ज",
      "व्यवसाय प्रशिक्षण",
      "बाजारपेठ सहाय्य",
    ],
  },
];

export default function Schemes() {
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
              सरकारी योजना
            </motion.h1>
            <motion.p
              className="text-xl opacity-90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              ग्रामपंचायत मार्फत उपलब्ध सरकारी योजनांची माहिती
            </motion.p>
          </div>
        </section>

        {/* Schemes Accordion */}
        <section className="py-12">
          <div className="container max-w-4xl">
            <Accordion type="single" collapsible className="space-y-4">
              {schemes.map((scheme, index) => (
                <motion.div
                  key={scheme.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <AccordionItem
                    value={scheme.id}
                    className="bg-card border border-border rounded-xl overflow-hidden"
                  >
                    <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-muted/50">
                      <div className="flex items-center gap-4 text-left">
                        <span className="bg-primary text-primary-foreground px-3 py-1 rounded text-sm font-medium">
                          {scheme.shortName}
                        </span>
                        <span className="font-bold">{scheme.title}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6">
                      <p className="text-muted-foreground mb-6">{scheme.description}</p>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold mb-3 text-primary">पात्रता</h4>
                          <ul className="space-y-2">
                            {scheme.eligibility.map((item, i) => (
                              <li key={i} className="flex items-center gap-2 text-sm">
                                <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-3 text-primary">लाभ</h4>
                          <ul className="space-y-2">
                            {scheme.benefits.map((item, i) => (
                              <li key={i} className="flex items-center gap-2 text-sm">
                                <span className="w-1.5 h-1.5 bg-secondary rounded-full" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="flex gap-3 mt-6">
                        <Button size="sm">
                          <FileDown className="w-4 h-4 mr-2" />
                          अर्ज डाउनलोड
                        </Button>
                        <Button size="sm" variant="outline">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          ऑनलाइन अर्ज
                        </Button>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
