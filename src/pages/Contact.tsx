import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert("संदेश पाठवला गेला!");
    setForm({ name: "", email: "", phone: "", message: "" });
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
              संपर्क
            </motion.h1>
            <motion.p
              className="text-xl opacity-90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              आमच्याशी संपर्क साधा
            </motion.p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-12">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <h2 className="text-2xl font-bold mb-6">संदेश पाठवा</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">नाव *</label>
                      <Input
                        required
                        placeholder="तुमचे नाव"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">फोन</label>
                      <Input
                        type="tel"
                        placeholder="मोबाइल नंबर"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">ईमेल *</label>
                    <Input
                      required
                      type="email"
                      placeholder="तुमचा ईमेल"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">संदेश *</label>
                    <Textarea
                      required
                      rows={5}
                      placeholder="तुमचा संदेश येथे लिहा..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full sm:w-auto">
                    संदेश पाठवा
                  </Button>
                </form>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <h2 className="text-2xl font-bold mb-6">संपर्क माहिती</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">पत्ता</h3>
                      <p className="text-muted-foreground">
                        ग्रामपंचायत टाकळघाट<br />
                        ता. हिंगणा, जि. नागपूर<br />
                        महाराष्ट्र - ४४११२२
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">फोन</h3>
                      <p className="text-muted-foreground">०७१०४-२३६५०१</p>
                      <p className="text-muted-foreground">+९१ ९८XXXXXXXX (ग्रामसेवक)</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">ईमेल</h3>
                      <p className="text-muted-foreground">grampanchayattakalghat@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">कार्यालयीन वेळ</h3>
                      <p className="text-muted-foreground">
                        सोमवार - शनिवार: सकाळी १०:०० - संध्याकाळी ५:००<br />
                        रविवार: बंद
                      </p>
                    </div>
                  </div>
                </div>

                {/* WhatsApp Button */}
                <a
                  href="https://wa.me/919XXXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-xl font-medium hover:bg-accent/90 transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp वर संपर्क करा
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Map */}
        <section className="py-12 bg-muted/50">
          <div className="container">
            <h2 className="section-title text-center">नकाशा</h2>
            <div className="aspect-video rounded-xl overflow-hidden border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14893.12345!2d79.0!3d21.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDA2JzAwLjAiTiA3OcKwMDAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="टाकळघाट ग्रामपंचायत नकाशा"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
