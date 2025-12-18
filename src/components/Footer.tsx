import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Facebook, Youtube, Instagram, Twitter, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const quickLinks = [
  { name: "योजना", href: "/schemes" },
  { name: "अर्ज फॉर्म", href: "/forms" },
  { name: "कागदपत्रे", href: "/documents" },
  { name: "विकास प्रकल्प", href: "/projects" },
  { name: "ग्रामसभा", href: "/gramsabha" },
  { name: "डाउनलोड्स", href: "/downloads" },
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "X" },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      {/* Main footer */}
      <div className="container py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-4 text-secondary">संपर्क</h3>
            <div className="space-y-3 text-background/80">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5 text-secondary" />
                <p>टाकळघाट, ता. हिंगणा,<br />जि. नागपूर, पिन: ४४११२२</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-secondary" />
                <span>०७१०४-२३६५०१</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-secondary" />
                <span className="text-sm">grampanchayattakalghat@gmail.com</span>
              </div>
            </div>
            <div className="flex gap-3 mt-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="p-2 bg-background/10 rounded-full hover:bg-secondary hover:text-secondary-foreground transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-lg font-bold mb-4 text-secondary">महत्त्वाचे दुवे</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-background/80 hover:text-secondary transition-colors inline-flex items-center gap-1 group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-secondary transition-all" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-lg font-bold mb-4 text-secondary">ग्रामपंचायत सेवा</h3>
            <ul className="space-y-2 text-background/80">
              <li>जन्म प्रमाणपत्र</li>
              <li>मृत्यू प्रमाणपत्र</li>
              <li>रहिवासी प्रमाणपत्र</li>
              <li>उत्पन्न प्रमाणपत्र</li>
              <li>जात प्रमाणपत्र</li>
              <li>नमुना ८ अ</li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-lg font-bold mb-4 text-secondary">न्यूजलेटर</h3>
            <p className="text-background/80 mb-4 text-sm">
              नवीन अपडेट्स आणि बातम्यांसाठी सबस्क्राइब करा
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="ईमेल प्रविष्ट करा"
                className="bg-background/10 border-background/20 text-background placeholder:text-background/50"
              />
              <Button size="icon" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-background/10">
        <div className="container py-4 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/60">
          <p>© २०२५ टाकळघाट ग्रामपंचायत | सर्व हक्क राखीव</p>
          <div className="flex gap-4">
            <a href="/privacy" className="hover:text-secondary transition-colors">गोपनीयता धोरण</a>
            <a href="/terms" className="hover:text-secondary transition-colors">नियम आणि अटी</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
