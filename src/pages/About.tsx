import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Calendar, Users, Target, Eye } from "lucide-react";

const timelineEvents = [
  { year: "१९५०", title: "ग्रामपंचायत स्थापना", description: "टाकळघाट ग्रामपंचायतची अधिकृत स्थापना" },
  { year: "१९८०", title: "शाळा विस्तार", description: "प्राथमिक शाळेचे उच्च प्राथमिकमध्ये रूपांतर" },
  { year: "२०००", title: "डिजिटल इनिशिएटिव्ह", description: "ई-गव्हर्नन्सची सुरुवात" },
  { year: "२०२०", title: "COVID रेस्पॉन्स", description: "महामारीतील सामूहिक प्रयत्न" },
  { year: "२०२४", title: "आधुनिक विकास", description: "डिजिटल ग्रामपंचायत अभियान" },
];

const festivals = [
  { name: "दिवाळी", month: "ऑक्टोबर/नोव्हेंबर", description: "दीपावली - प्रकाशाचा सण" },
  { name: "गणेश चतुर्थी", month: "ऑगस्ट/सप्टेंबर", description: "गणपती बाप्पाचे आगमन" },
  { name: "दसरा", month: "ऑक्टोबर", description: "विजयादशमी - वाईटावर चांगल्याचा विजय" },
  { name: "मारबत", month: "ऑगस्ट", description: "नागपूर विशेष - दुष्ट दूर करण्यासाठी" },
  { name: "पोळा", month: "श्रावण अमावस्या", description: "बैल पूजा सण" },
];

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container">
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              आमच्याबद्दल
            </motion.h1>
            <motion.p
              className="text-xl opacity-90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              टाकळघाट ग्रामपंचायतचा इतिहास, संस्कृती आणि परंपरा
            </motion.p>
          </div>
        </section>

        {/* History Section */}
        <section className="py-16">
          <div className="container">
            <h2 className="section-title">गाव इतिहास</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <p className="text-muted-foreground leading-relaxed mb-4">
                  टाकळघाट हे नागपूर जिल्ह्यातील हिंगणा तालुक्यातील ग्रामीण गाव आहे. विदर्भ क्षेत्रातील जुना इतिहास असलेले हे गाव ब्रिटिश काळापासून शेतीप्रधान आहे.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  स्वातंत्र्यानंतर विकास प्रकल्प सुरू झाले आणि आज गाव डिजिटल आणि शाश्वत विकासाच्या दिशेने वाटचाल करत आहे.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  गावाची लोकसंख्या सुमारे १२३९ असून (पुरुष: ६४९, स्त्री: ५९०), एकूण क्षेत्रफळ सुमारे ४.१ चौ. किमी आहे.
                </p>
              </motion.div>
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                {timelineEvents.map((event, index) => (
                  <div
                    key={index}
                    className="flex gap-4 p-4 bg-card rounded-lg border border-border card-hover"
                  >
                    <div className="text-2xl font-bold text-primary">{event.year}</div>
                    <div>
                      <h4 className="font-semibold">{event.title}</h4>
                      <p className="text-sm text-muted-foreground">{event.description}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Culture Section */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <h2 className="section-title">संस्कृती आणि उत्सव</h2>
            <p className="section-subtitle">महाराष्ट्रीयन संस्कृती, पारंपरिक नृत्य आणि सण</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {festivals.map((festival, index) => (
                <motion.div
                  key={index}
                  className="bg-card p-6 rounded-xl border border-border card-hover"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Calendar className="w-10 h-10 text-secondary mb-4" />
                  <h3 className="text-xl font-bold mb-2">{festival.name}</h3>
                  <p className="text-sm text-primary mb-2">{festival.month}</p>
                  <p className="text-muted-foreground">{festival.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-16">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                className="bg-primary text-primary-foreground p-8 rounded-xl"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <Eye className="w-12 h-12 mb-4" />
                <h3 className="text-2xl font-bold mb-4">आमची दृष्टी</h3>
                <p className="opacity-90">
                  शाश्वत आणि डिजिटल गाव बनवणे - जिथे प्रत्येक नागरिकाला आधुनिक सुविधा आणि संधी उपलब्ध असतील.
                </p>
              </motion.div>
              <motion.div
                className="bg-accent text-accent-foreground p-8 rounded-xl"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <Target className="w-12 h-12 mb-4" />
                <h3 className="text-2xl font-bold mb-4">आमचे ध्येय</h3>
                <ul className="space-y-2 opacity-90">
                  <li>• शिक्षण - १००% साक्षरता लक्ष्य</li>
                  <li>• आरोग्य - सर्वांसाठी आरोग्य सेवा</li>
                  <li>• पर्यावरण - हरित गाव अभियान</li>
                  <li>• रोजगार - स्थानिक रोजगार निर्मिती</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
