import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";
import EventCard from "@/components/EventCard";
import { technicalEvents, nonTechnicalEvents } from "@/data/events";

const Events = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-20 px-4">
        <div className="container mx-auto">
          <SectionTitle title="All Events" subtitle="Explore all events at Pixel 2026" />

          <h3 className="font-display text-xl font-bold text-foreground mb-6 tracking-wider">⚡ Technical Events</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {technicalEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>

          <h3 className="font-display text-xl font-bold text-foreground mb-6 tracking-wider">🎉 Non-Technical Events</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {nonTechnicalEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Events;
