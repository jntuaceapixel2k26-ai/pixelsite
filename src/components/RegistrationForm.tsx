import { useState } from "react";
import RegistrationDetails from "./RegistrationDetails";
import { EventRegistration } from "@/data/events";

interface RegistrationFormProps {
  eventTitle: string;
  registration: EventRegistration;
}

const RegistrationForm = ({ eventTitle, registration }: RegistrationFormProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-card border border-border rounded-lg p-6 md:p-8">
      <h3 className="font-display text-xl font-bold text-foreground mb-2">
        Register for {eventTitle}
      </h3>
      <p className="text-sm text-muted-foreground mb-6">
        Click below to view payment details and the registration form.
      </p>

      <button
        onClick={() => setOpen((prev) => !prev)}
        className="w-full bg-gradient-to-r from-primary to-purple-500 text-primary-foreground font-display font-semibold py-3 px-6 rounded-lg text-sm tracking-wider hover:opacity-90 transition-opacity shadow-glow"
      >
        {open ? "CLOSE" : "CLICK TO REGISTER"}
      </button>

      {open && (
        <RegistrationDetails eventTitle={eventTitle} registration={registration} />
      )}
    </div>
  );
};

export default RegistrationForm;
