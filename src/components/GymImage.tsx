import React, { useState } from 'react';

interface GymImageProps {
  src: string;
  alt: string;
  fallbackComponent?: React.ReactNode;
  className?: string;
  aspectRatio?: string;
  overlayGradient?: boolean;
}

export const GymImage: React.FC<GymImageProps> = ({
  src,
  alt,
  fallbackComponent,
  className = '',
  overlayGradient = true,
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  if (hasError && fallbackComponent) {
    return <>{fallbackComponent}</>;
  }

  return (
    <div className={`relative w-full h-full overflow-hidden bg-[#101216] ${className}`}>
      {/* Skeleton / base pulse while loading */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-[#161922] animate-pulse" />
      )}

      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        className={`w-full h-full object-cover transition-all duration-700 ease-out ${
          isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
        }`}
      />

      {/* Subtle Dark Vignette & Scrim to maintain brand theme contrast */}
      {overlayGradient && (
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c0e]/90 via-[#0b0c0e]/30 to-transparent pointer-events-none" />
      )}
    </div>
  );
};
