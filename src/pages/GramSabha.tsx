import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Calendar, FileText, Users, Clock, Download } from "lucide-react";
import { useState } from "react";

const meetings = [
  {
    id: 1,
    date: "१५ जानेवारी २०२४",
    agenda: "वार्षिक बजेट मंजुरी",
    attendees: 85,
    status: "पूर्ण",
    hasMinutes: true,
  },
  {
    id: 2,
    date: "२६ जानेवारी २०२४",
    agenda: "प्रजासत्ताक दिन कार्यक्रम",
    attendees: 120,
    status: "पूर्ण",
    hasMinutes: true,
  },
  {
    id: 3,
    date: "१५ फेब्रुवारी २०२४",
    agenda: "रस्ते विकास प्रकल्प",
    attendees: 75,
    status: "पूर्ण",
    hasMinutes: true,
  },
  {
    id: 4,
    date: "१५ मार्च २०२४",
    agenda: "स्वच्छता अभियान समीक्षा",
    attendees: 0,
    status: "आगामी",
    hasMinutes: false,
  },
];

const upcomingMeeting = {
  date: "१५ मार्च २०२४",
  time: "सकाळी १०:०० वाजता",
  venue: "ग्रामपंचायत कार्यालय",
  agenda: [
    "स्वच्छता अभियान समीक्षा",
    "पाणी पुरवठा अपडेट",
    "नवीन प्रकल्प मंजुरी",
    "नागरिक सूचना",
  ],
};

export default function GramSabha() {
  const [suggestion, setSuggestion] = useState({ name: "", message: "" });

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
              ग्रामसभा
            </motion.h1>
            <motion.p
              className="text-xl opacity-90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              ग्रामसभा बैठका, मिनिट्स आणि नागरिक सूचना
            </motion.p>
          </div>
        </section>

        {/* Upcoming Meeting */}
        <section className="py-12">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground p-8 rounded-xl"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <h2 className="text-2xl font-bold mb-6">आगामी ग्रामसभा</h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5" />
                    <span>{upcomingMeeting.date}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5" />
                    <span>{upcomingMeeting.time}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5" />
                    <span>{upcomingMeeting.venue}</span>
                  </div>
                </div>
                <div className="mt-6">
                  <h3 className="font-semibold mb-3">कार्यसूची:</h3>
                  <ul className="space-y-2">
                    {upcomingMeeting.agenda.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 opacity-90">
                        <span className="w-1.5 h-1.5 bg-secondary rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <Button className="mt-6 bg-secondary text-secondary-foreground hover:bg-secondary/90">
                  उपस्थिती नोंदवा
                </Button>
              </motion.div>

              {/* Suggestion Form */}
              <motion.div
                className="bg-card p-8 rounded-xl border border-border"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <h2 className="text-2xl font-bold mb-6">नागरिक सूचना</h2>
                <p className="text-muted-foreground mb-6">
                  ग्रामसभेसाठी तुमच्या सूचना आणि मुद्दे येथे नोंदवा.
                </p>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">नाव</label>
                    <Input
                      placeholder="तुमचे नाव"
                      value={suggestion.name}
                      onChange={(e) => setSuggestion({ ...suggestion, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">सूचना / मुद्दा</label>
                    <Textarea
                      placeholder="तुमची सूचना येथे लिहा..."
                      rows={4}
                      value={suggestion.message}
                      onChange={(e) => setSuggestion({ ...suggestion, message: e.target.value })}
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    सूचना पाठवा
                  </Button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Past Meetings */}
        <section className="py-12 bg-muted/50">
          <div className="container">
            <h2 className="section-title">मागील ग्रामसभा</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {meetings.filter(m => m.status === "पूर्ण").map((meeting, index) => (
                <motion.div
                  key={meeting.id}
                  className="bg-card p-6 rounded-xl border border-border card-hover"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <div className="flex items-center gap-2 text-primary mb-2">
                        <Calendar className="w-4 h-4" />
                        <span className="font-medium">{meeting.date}</span>
                      </div>
                      <h3 className="text-lg font-bold">{meeting.agenda}</h3>
                    </div>
                    <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs">
                      {meeting.status}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{meeting.attendees} उपस्थित</span>
                    </div>
                  </div>
                  {meeting.hasMinutes && (
                    <Button size="sm" variant="outline">
                      <Download className="w-4 h-4 mr-2" />
                      मिनिट्स डाउनलोड
                    </Button>
                  )}
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
