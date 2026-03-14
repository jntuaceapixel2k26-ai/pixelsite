import { Link } from "react-router-dom";
import type { EventData } from "@/data/events";
import { Calendar, MapPin, Trophy } from "lucide-react";

interface EventCardProps {
  event: EventData;
}

const EventCard = ({ event }: EventCardProps) => {
  const Icon = event.icon;

  return (
    <Link
      to={`/events/${event.slug}`}
      className="group block h-full bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-glow bg-gradient-card"
    >
      <div className="flex h-full flex-col p-5 sm:p-6">
        <div className="mb-4 text-primary">
          <Icon className="h-8 w-8 sm:h-9 sm:w-9" aria-hidden="true" />
        </div>
        <h3 className="font-display text-base sm:text-lg font-bold text-foreground mb-2 group-hover:text-gradient transition-all leading-snug break-words">
          {event.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {event.description}
        </p>
        <div className="space-y-1.5 text-xs text-muted-foreground mt-auto">
          <div className="flex items-start gap-2">
            <Calendar size={12} className="text-primary mt-0.5 shrink-0" />
            <span className="break-words">{event.date}</span>
          </div>
          <div className="flex items-start gap-2">
            <MapPin size={12} className="text-primary mt-0.5 shrink-0" />
            <span className="break-words">{event.venue}</span>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-border">
          <span className="inline-flex items-start gap-1.5 text-xs font-semibold text-gradient-accent break-words">
            <Trophy size={12} aria-hidden="true" className="mt-0.5 shrink-0" />
            <span>{event.prize}</span>
          </span>
        </div>
      </div>
    </Link>
  );
};

export default EventCard;
