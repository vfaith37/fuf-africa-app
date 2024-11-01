import React, { useState } from 'react';

interface YouTubeEmbedProps {
  videoId: string;
  title?: string;
  className?: string;
}

const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({ 
  videoId, 
  title = 'YouTube video player',
  className = 'rounded-lg mx-auto w-4/5 h-96 object-cover'
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoading(false);
    setHasError(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1&playsinline=1`;

  return (
    <div className="relative">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="animate-pulse text-gray-500">Loading video...</div>
        </div>
      )}
      
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="text-gray-500">
            Unable to load video. Please check your connection and try again.
          </div>
        </div>
      )}

      <iframe
        src={embedUrl}
        title={title}
        className={className}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        onLoad={handleLoad}
        onError={handleError}
      />
    </div>
  );
};

export default YouTubeEmbed;