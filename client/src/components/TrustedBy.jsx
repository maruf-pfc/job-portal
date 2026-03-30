import { assets } from "../assets/assets";

const TrustedBy = () => {
  const logos = [
    assets.microsoft_logo,
    assets.walmart_logo,
    assets.accenture_logo,
    assets.samsung_logo,
    assets.adobe_logo,
    assets.amazon_logo,
  ];

  return (
    <div className="pt-12 md:pt-16">
      {/* Header */}
      <div className="text-center mb-8">
        <p className="text-gray-600 text-sm md:text-base font-medium uppercase tracking-wider">
          Trusted By
        </p>
        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mt-2">
          Leading Companies Worldwide
        </h3>
      </div>

      {/* Slider */}
      <div className="bg-gray-50 rounded-xl py-8 md:py-12 px-4 overflow-hidden cursor-pointer">
        <div className="relative">
          {/* Track */}
          <div className="flex gap-10 animate-slide whitespace-nowrap">
            {/* Duplicate for infinite loop */}
            {[...logos, ...logos].map((logo, i) => (
              <div
                key={i}
                className="flex items-center justify-center min-w-30"
              >
                <img
                  src={logo}
                  alt="company logo"
                  className="h-10 md:h-12 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustedBy;
