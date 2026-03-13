import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";
import { MapPin, Phone, Mail } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <SectionTitle title="Contact Us" subtitle="We'd love to hear from you!" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6">
              {[
                {
                  icon: <MapPin size={20} />,
                  title: "Address",
                  lines: [
                    "Jawaharlal Nehru Technological University Anantapur",
                    "Mokshagundam Visvesvaraya Nagar",
                    "Anantapur, Andhra Pradesh – 515002",
                  ],
                },
                {
                  icon: <Phone size={20} />,
                  title: "Phone",
                  lines: ["+91 7672005738", "+91 xxxxxxxxxx"],
                },
                {
                  icon: <Mail size={20} />,
                  title: "Email",
                  lines: ["jntuaceapixel2k26@gmail.com", "xxxxxxxxx@xxxxx.xxxxx"],
                },
              ].map((item, i) => (
                <div key={i} className="bg-card border border-border rounded-lg p-6 bg-gradient-card">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="text-primary">{item.icon}</div>
                    <h3 className="font-display text-sm font-bold text-foreground tracking-wider">{item.title}</h3>
                  </div>
                  <div className="space-y-1">
                    {item.lines.map((line, j) => (
                      <p key={j} className="text-sm text-muted-foreground">{line}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-card border border-border rounded-lg overflow-hidden">
              <iframe
                title="JNTUACEA Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.7!2d77.602!3d14.682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb14b1b1b1b1b1b%3A0x1b1b1b1b1b1b1b1b!2sJNTU%20Anantapur!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "350px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
