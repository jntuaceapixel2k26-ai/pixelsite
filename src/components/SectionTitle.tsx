interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

const SectionTitle = ({ title, subtitle }: SectionTitleProps) => (
  <div className="text-center mb-10 sm:mb-12 px-2">
    <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-gradient mb-3 leading-tight">
      {title}
    </h2>
    {subtitle && (
      <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
        {subtitle}
      </p>
    )}
  </div>
);

export default SectionTitle;
