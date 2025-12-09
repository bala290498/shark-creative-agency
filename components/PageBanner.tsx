interface PageBannerProps {
  title: string;
  description?: string;
}

export default function PageBanner({ title, description }: PageBannerProps) {
  return (
    <div className="gradient-secondary border-b border-secondary-500/30 pt-20 md:pt-16 w-full">
      <div className="container mx-auto px-4 max-w-screen-lg py-4 md:py-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 md:mb-3">
            {title}
          </h1>
          {description && (
            <p className="text-sm sm:text-base md:text-lg text-white/90 max-w-2xl mx-auto">
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

