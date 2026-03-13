import { Link } from "react-router-dom";
import type { EventData } from "@/data/events";
import { Calendar, Clock, MapPin } from "lucide-react";

interface EventCardProps {
  event: EventData;
}

const EventCard = ({ event }: EventCardProps) => {
  return (
    <Link
      to={`/events/${event.slug}`}
      className="group block bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-glow bg-gradient-card"
    >
      <div className="p-6">
        <div className="text-4xl mb-4">{event.icon}</div>
        <h3 className="font-display text-lg font-bold text-foreground mb-2 group-hover:text-gradient transition-all">
          {event.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{event.description}</p>
        <div className="space-y-1.5 text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <Calendar size={12} className="text-primary" />
            <span>{event.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={12} className="text-primary" />
            <span>{event.venue}</span>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-border">
          <span className="text-xs font-semibold text-gradient-accent">
            🏆 {event.prize}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default EventCard;
