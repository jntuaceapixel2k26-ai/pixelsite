import { EventRegistration } from "@/data/events";

interface RegistrationDetailsProps {
  eventTitle: string;
  registration: EventRegistration;
}

const RegistrationDetails = ({ eventTitle, registration }: RegistrationDetailsProps) => {
  return (
    <div className="space-y-5 mt-6 animate-fade-in">
      {/* Alerts */}
      <div className="space-y-2">
        <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">Important Notes</h4>
        {registration.alerts.map((alert, i) => (
          <div
            key={i}
            className="flex items-start gap-2 text-sm text-amber-300 bg-amber-400/10 border border-amber-400/30 rounded-lg px-3 py-2"
          >
            <span className="mt-0.5 shrink-0">⚠️</span>
            <span>{alert}</span>
          </div>
        ))}
      </div>

      {/* Payment QR */}
      <div className="p-4 bg-muted rounded-lg text-center border border-border">
        <p className="text-sm font-semibold text-foreground mb-1">Scan to Pay Registration Fee</p>
        <p className="text-xs text-muted-foreground mb-3">Pay via UPI and fill the form below</p>
        <img
          src={registration.qr}
          alt={`Payment QR for ${eventTitle}`}
          className="w-44 h-44 mx-auto rounded-lg border border-border object-cover"
        />
      </div>

      {/* Google Form Link */}
      <a
        href={registration.formLink}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full text-center bg-gradient-to-r from-primary to-purple-500 text-primary-foreground font-display font-semibold py-3 px-6 rounded-lg text-sm tracking-wider hover:opacity-90 transition-opacity shadow-glow"
      >
        FILL REGISTRATION FORM →
      </a>
    </div>
  );
};

export default RegistrationDetails;
