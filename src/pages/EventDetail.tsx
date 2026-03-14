import { useParams, Link } from "react-router-dom";
import { events } from "@/data/events.ts";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RegistrationForm from "@/components/RegistrationForm";
import {
  Calendar,
  MapPin,
  Trophy,
  ArrowLeft,
  PersonStandingIcon,
} from "lucide-react";

const EventDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const event = events.find((e) => e.slug === slug);

  if (!event) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-2xl font-bold text-foreground mb-4">
            Event Not Found
          </h1>
          <Link to="/events" className="text-primary hover:underline text-sm">
            ← Back to Events
          </Link>
        </div>
      </div>
    );
  }

  const Icon = event.icon;
  const RuleIcon = event.ruleIcon;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20 sm:pt-24 pb-16 sm:pb-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <Link
            to="/events"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft size={16} /> Back to Events
          </Link>

          {/* Event Banner */}
          <div className="bg-card border border-border rounded-lg p-5 sm:p-8 md:p-12 mb-8 bg-gradient-card">
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-start">
              <div className="flex-1 min-w-0">
                <div className="mb-4 text-primary">
                  <Icon className="h-10 w-10 sm:h-14 sm:w-14" aria-hidden="true" />
                </div>
                <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-primary/20 text-primary mb-4 uppercase tracking-wider">
                  {event.category}
                </span>
                <h1 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-gradient mb-4 break-words leading-tight">
                  {event.title}
                </h1>
                <p className="text-muted-foreground leading-relaxed">
                  {event.description}
                </p>
              </div>
              {event.poster && (
                <div className="w-full lg:w-60 xl:w-72 shrink-0 self-center lg:self-start">
                  <img
                    src={event.poster}
                    alt={`${event.title} poster`}
                    className="w-full h-auto rounded-xl object-cover shadow-lg border border-border"
                  />
                </div>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Left: Details */}
            <div className="lg:col-span-3 space-y-6">
              {/* Info cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    icon: <Calendar size={18} />,
                    label: "Final Date of Registration",
                    value: event.date,
                  },
                  {
                    icon: <MapPin size={18} />,
                    label: "Venue",
                    value: event.venue,
                  },
                  {
                    icon: <Trophy size={18} />,
                    label: "Prizes",
                    value: event.prize,
                  },
                  ...(event.coordinators?.length
                    ? [
                        {
                          icon: <PersonStandingIcon size={18} />,
                          label: "Coordinators",
                          value: event.coordinators.join(", "),
                        },
                      ]
                    : []),
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-card border border-border rounded-lg p-4"
                  >
                    <div className="text-primary mb-2">{item.icon}</div>
                    <p className="text-xs text-muted-foreground mb-1">
                      {item.label}
                    </p>
                    <p className="text-sm font-medium text-foreground break-words">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>

              {/* Rules */}
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-display text-base sm:text-lg font-bold text-foreground mb-4 inline-flex items-center gap-2 flex-wrap">
                  <RuleIcon
                    className="h-5 w-5 text-primary"
                    aria-hidden="true"
                  />
                  Rules & Guidelines
                </h3>
                <ul className="space-y-3">
                  {event.rules.map((rule, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm text-muted-foreground min-w-0"
                    >
                      <span className="text-primary font-bold mt-0.5">
                        {i + 1}.
                      </span>
                      <span className="whitespace-pre-line leading-relaxed break-words min-w-0">
                        {rule}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: Registration */}
            <div className="lg:col-span-2">
              <RegistrationForm
                eventTitle={event.title}
                registration={event.registration}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EventDetail;
