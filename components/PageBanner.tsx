interface PageBannerProps {
  title: string;
  description?: string;
}

export default function PageBanner({ title, description }: PageBannerProps) {
  return (
    <div className="bg-secondary-50 border-b border-secondary-200/50 pt-20 md:pt-16">
      <div className="container mx-auto px-4 max-w-screen-lg py-4 md:py-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 md:mb-3">
            {title}
          </h1>
          {description && (
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

