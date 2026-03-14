import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-3 md:text-left">
          <div>
            <h3 className="font-display text-lg sm:text-xl font-bold text-gradient mb-4">
              PIXEL 2k26
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm mx-auto md:mx-0">
              The annual technical and cultural fest of Department of Computer
              Science and Engineering, JNTUACEA, Anantapur. Where innovation
              meets celebration!
            </p>
          </div>
          <div>
            <h4 className="font-display text-sm font-semibold text-foreground mb-4 tracking-wider">
              QUICK LINKS
            </h4>
            <div className="flex flex-col gap-2 items-center md:items-start">
              {[
                { label: "Home", path: "/" },
                { label: "Events", path: "/events" },
                { label: "Gallery", path: "/gallery" },
                { label: "About", path: "/about" },
                { label: "Contact", path: "/contact" },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-muted-foreground text-sm hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-display text-sm font-semibold text-foreground mb-4 tracking-wider">
              CONTACT
            </h4>
            <div className="text-muted-foreground text-sm space-y-2 break-words">
              <p>JNTUACEA, Anantapur</p>
              <p>Andhra Pradesh – 515002</p>
              <p>jntuaceapixel2k26@gmail.com</p>
              <p>+91 7672005738</p>
              <p>+91 7330668287</p>
            </div>
          </div>
        </div>
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-xs">
            © 2026 Pixel 2k26 — JNTUACEA, Anantapur. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
