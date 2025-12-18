import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const news = [
  {
    id: 1,
    title: "जलजीवन मिशन अंतर्गत पाणी पुरवठा पूर्ण",
    date: "१० फेब्रुवारी २०२४",
    excerpt: "टाकळघाट गावात जलजीवन मिशन अंतर्गत सर्व घरांना नळ कनेक्शन देण्यात आले.",
    category: "प्रकल्प",
  },
  {
    id: 2,
    title: "स्वच्छ भारत अभियान पुरस्कार",
    date: "२६ जानेवारी २०२४",
    excerpt: "टाकळघाट ग्रामपंचायतला स्वच्छता अभियानासाठी जिल्हा पुरस्कार प्राप्त.",
    category: "पुरस्कार",
  },
  {
    id: 3,
    title: "डिजिटल क्लासरूम उद्घाटन",
    date: "१५ जानेवारी २०२४",
    excerpt: "गावातील शाळेत आधुनिक डिजिटल क्लासरूमचे उद्घाटन करण्यात आले.",
    category: "शिक्षण",
  },
  {
    id: 4,
    title: "महिला बचत गट प्रशिक्षण",
    date: "०५ जानेवारी २०२४",
    excerpt: "महिला सशक्तीकरणासाठी लघु उद्योग प्रशिक्षण कार्यक्रम आयोजित.",
    category: "कार्यक्रम",
  },
];

const events = [
  {
    id: 1,
    title: "ग्रामसभा बैठक",
    date: "१५ मार्च २०२४",
    time: "सकाळी १०:०० वाजता",
    venue: "ग्रामपंचायत कार्यालय",
  },
  {
    id: 2,
    title: "आरोग्य शिबिर",
    date: "२० मार्च २०२४",
    time: "सकाळी ९:०० वाजता",
    venue: "आयुष्मान आरोग्य मंदिर",
  },
  {
    id: 3,
    title: "वृक्षारोपण मोहीम",
    date: "२२ मार्च २०२४",
    time: "सकाळी ८:०० वाजता",
    venue: "गाव परिसर",
  },
];

export default function News() {
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
              बातम्या आणि कार्यक्रम
            </motion.h1>
            <motion.p
              className="text-xl opacity-90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              ग्रामपंचायतातील ताज्या बातम्या आणि आगामी कार्यक्रम
            </motion.p>
          </div>
        </section>

        {/* News & Events Grid */}
        <section className="py-12">
          <div className="container">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* News */}
              <div className="lg:col-span-2">
                <h2 className="section-title">ताज्या बातम्या</h2>
                <div className="space-y-6">
                  {news.map((item, index) => (
                    <motion.article
                      key={item.id}
                      className="bg-card p-6 rounded-xl border border-border card-hover"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                          {item.category}
                        </span>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          {item.date}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground mb-4">{item.excerpt}</p>
                      <Button variant="link" className="p-0 h-auto text-primary">
                        अधिक वाचा <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </motion.article>
                  ))}
                </div>
              </div>

              {/* Events Sidebar */}
              <div>
                <h2 className="section-title">आगामी कार्यक्रम</h2>
                <div className="space-y-4">
                  {events.map((event, index) => (
                    <motion.div
                      key={event.id}
                      className="bg-card p-5 rounded-xl border border-border card-hover"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <h3 className="font-bold mb-3">{event.title}</h3>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-primary" />
                          {event.date}
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-primary" />
                          {event.time}
                        </div>
                        <p className="text-foreground">{event.venue}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
