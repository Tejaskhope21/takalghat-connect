import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail } from "lucide-react";

const members = [
  {
    name: "शारदा ज्ञानेश्वर शिंगारे",
    role: "सरपंच",
    desc: "गाव विकास आणि लोककल्याणासाठी समर्पित",
    phone: "+91 9999999999",
    featured: true,
  },
  {
    name: "उपसरपंच",
    role: "उपसरपंच",
    desc: "प्रशासकीय कार्य आणि समन्वय",
    phone: "माहिती उपलब्ध होईल",
    featured: false,
  },
  {
    name: "सदस्य १",
    role: "वार्ड सदस्य",
    desc: "वार्ड क्र. १ प्रतिनिधी",
    featured: false,
  },
  {
    name: "सदस्य २",
    role: "वार्ड सदस्य",
    desc: "वार्ड क्र. २ प्रतिनिधी",
    featured: false,
  },
  {
    name: "सदस्य ३",
    role: "वार्ड सदस्य",
    desc: "वार्ड क्र. ३ प्रतिनिधी",
    featured: false,
  },
  {
    name: "सदस्य ४",
    role: "वार्ड सदस्य",
    desc: "वार्ड क्र. ४ प्रतिनिधी",
    featured: false,
  },
];

export function MembersSection() {
  return (
    <section className="py-16">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-title">ग्रामपंचायत सदस्य</h2>
          <p className="section-subtitle">आमचे निर्वाचित प्रतिनिधी</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {members.map((member, index) => (
            <motion.div
              key={member.name + index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className={`card-hover h-full group ${member.featured ? "border-2 border-primary" : ""}`}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`w-16 h-16 rounded-full flex-shrink-0 flex items-center justify-center text-primary-foreground text-2xl font-bold group-hover:scale-105 transition-transform ${member.featured ? "bg-gradient-to-br from-primary to-primary/80" : "bg-gradient-to-br from-accent to-accent/80"}`}>
                      {member.name.charAt(0)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-foreground">{member.name}</h3>
                        {member.featured && (
                          <span className="px-2 py-0.5 bg-secondary text-secondary-foreground text-xs rounded-full">
                            प्रमुख
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-primary font-medium mb-2">{member.role}</p>
                      <p className="text-sm text-muted-foreground mb-3">{member.desc}</p>
                      {member.phone && (
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Phone className="h-4 w-4" />
                          <span>{member.phone}</span>
                        </div>
                      )}
                    </div>
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
