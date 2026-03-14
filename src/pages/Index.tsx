import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";
import EventCard from "@/components/EventCard";
import { technicalEvents, nonTechnicalEvents } from "@/data/events";
import heroBg from "@/assets/hero-bg.jpg";
import gallery1 from "@/assets/gallery-1.jpeg";
import gallery2 from "@/assets/gallery-2.jpeg";
import gallery3 from "@/assets/gallery-3.jpeg";
import pixelLogo from "@/assets/pixel-logo.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <img src={heroBg} alt="JNTUACEA CSE Campus during Pixel Fest" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="relative z-10 text-center px-4 animate-fade-in-up">
          <p className="text-sm md:text-base text-secondary font-medium tracking-[0.3em] mb-4 uppercase">
            JNTUACEA CSE Presents
          </p>
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-black text-gradient mb-6 tracking-wider">
            PIXEL<img src={pixelLogo} alt="logo" className="inline-block w-21 h-21" />2k26
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-xl mx-auto mb-8">
            Where Technology Meets Celebration. March 24–25, 2026.
          </p>
          <Link
            to="/events"
            className="inline-block bg-gradient-primary text-primary-foreground font-display font-semibold py-4 px-10 rounded-lg text-sm tracking-widest hover:opacity-90 transition-opacity shadow-glow animate-pulse-glow"
          >
            EXPLORE EVENTS
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 sm:py-20 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <SectionTitle title="About Pixel Fest" subtitle="The flagship annual fest of JNTUACEA, Anantapur" />
          <p className="text-muted-foreground leading-relaxed">
            Pixel 2k26 is the grand annual technical and cultural extravaganza of JNTUACEA by Department of Computer Science and Engineering. 
            Bringing together the brightest minds from colleges across Andhra Pradesh and beyond, Pixel is a celebration of innovation, 
            creativity, and the spirit of competition. With 13+ events spanning technology, gaming, arts, and intellect — there's 
            something for everyone.
          </p>
        </div>
      </section>

      {/* Technical Events */}
      <section className="py-16 sm:py-20 px-4 bg-card/50">
        <div className="container mx-auto">
          <SectionTitle title="Technical Events" subtitle="Showcase your coding and engineering skills" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {technicalEvents.slice(0, 3).map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/events" className="text-sm text-primary hover:underline font-medium">
              View all technical events →
            </Link>
          </div>
        </div>
      </section>

      {/* Non-Technical Events */}
      <section className="py-16 sm:py-20 px-4">
        <div className="container mx-auto">
          <SectionTitle title="Non-Technical Events" subtitle="Fun, gaming, creativity and more" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {nonTechnicalEvents.slice(0, 3).map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/events" className="text-sm text-primary hover:underline font-medium">
              View all non-technical events →
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-16 sm:py-20 px-4 bg-card/50">
        <div className="container mx-auto">
          <SectionTitle title="Gallery" subtitle="Glimpses from previous editions" />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[gallery1, gallery2, gallery3].map((img, i) => (
              <div key={i} className="rounded-lg overflow-hidden border border-border group">
                <img
                  src={img}
                  alt={`Gallery ${i + 1}`}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/gallery" className="text-sm text-primary hover:underline font-medium">
              View full gallery →
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Preview */}
      <section className="py-16 sm:py-20 px-4">
        <div className="container mx-auto max-w-2xl text-center">
          <SectionTitle title="Get In Touch" subtitle="Have questions? Reach out to us!" />
          <div className="space-y-2 text-muted-foreground text-sm">
            <p>JNTUACEA, M.V. Nagar, Anantapur, AP – 515002</p>
            <p className="break-words">jntuaceapixel2k26@gmail.com</p>
            <p>Main Co-ordinators</p>
            <p> Ch Hrishikesh Kumar - +91 7672005738 </p>
            <p> B Rakesh Kumar - +91 7330668287</p>
          </div>
          <Link
            to="/contact"
            className="inline-block mt-6 w-full sm:w-auto bg-gradient-primary text-primary-foreground font-display font-semibold py-3 px-8 rounded-lg text-sm tracking-wider hover:opacity-90 transition-opacity"
          >
            CONTACT US
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
