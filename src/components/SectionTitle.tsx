interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

const SectionTitle = ({ title, subtitle }: SectionTitleProps) => (
  <div className="text-center mb-12">
    <h2 className="font-display text-3xl md:text-4xl font-bold text-gradient mb-3">{title}</h2>
    {subtitle && <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">{subtitle}</p>}
  </div>
);

export default SectionTitle;
