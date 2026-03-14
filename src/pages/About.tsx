import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";
import heroBg from "@/assets/hero-bg.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <SectionTitle title="About Pixel 2026" />

          <div className="rounded-lg overflow-hidden border border-border mb-12">
            <img src={heroBg} alt="JNTUACEA Campus" className="w-full h-64 md:h-80 object-cover" />
          </div>

          <div className="space-y-8 text-muted-foreground leading-relaxed">
            <div className="bg-card border border-border rounded-lg p-6 md:p-8 bg-gradient-card">
              <h3 className="font-display text-xl font-bold text-foreground mb-4">About Pixel Fest</h3>
              <p>
                Pixel 2026 is the annual technical and cultural festival organized by the students of 
                JNTUA College of Engineering. Now in its latest edition, 
                Pixel has grown to become one of the most anticipated college festivals in Andhra Pradesh.
              </p>
              <p className="mt-4">
                The fest brings together students from various colleges to compete, collaborate, and celebrate 
                the spirit of innovation and creativity. With a perfect blend of technical challenges, gaming 
                tournaments, creative competitions, and cultural events — Pixel offers a platform for every 
                kind of talent.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 md:p-8 bg-gradient-card">
              <h3 className="font-display text-xl font-bold text-foreground mb-4">About JNTUA</h3>
              <p>
                JNTUA College of Engineering is one of the premier 
                technological institutions in Andhra Pradesh, India. Established in 2008, the college is 
                located in Mokshagundam Visvesvaraya Nagar, Anantapur, and is named after India's first 
                Prime Minister, Pandit Jawaharlal Nehru.
              </p>
              <p className="mt-4">
                The college offers undergraduate, postgraduate, and doctoral programs in various 
                branches of engineering, technology, and allied sciences. With a commitment to academic 
                excellence and holistic development, JNTUACEA continues to shape the future of engineering 
                education in the region.
              </p>
              <div className="mt-6 p-4 bg-muted rounded-lg">
                <p className="text-sm">
                  <strong className="text-foreground">Location:</strong> Mokshagundam Visvesvaraya Nagar, 
                  Anantapur, Andhra Pradesh – 515002
                </p>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 md:p-8 bg-gradient-card">
              <h3 className="font-display text-xl font-bold text-foreground mb-4">What to Expect</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                {[
                  { value: "13+", label: "Events" },
                  { value: "3", label: "Days" },
                  { value: "₹1.5L+", label: "Prize Pool" },
                  { value: "1000+", label: "Participants" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-muted rounded-lg p-4">
                    <p className="font-display text-2xl font-bold text-gradient">{stat.value}</p>
                    <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
