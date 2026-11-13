import React, { useRef, useEffect } from 'react';
import { getOptimizedVideoUrl } from '../utils/cloudinary';

interface LazyVideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  src: string;
  className?: string;
  style?: React.CSSProperties;
}

export const LazyVideo: React.FC<LazyVideoProps> = ({
  src,
  className = '',
  style,
  autoPlay = true,
  loop = true,
  muted = true,
  playsInline = true,
  preload = 'metadata',
  ...rest
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const optimizedSrc = getOptimizedVideoUrl(src);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Set properties explicitly for iOS / Safari compatibility
    video.muted = true;
    video.playsInline = true;

    // Use IntersectionObserver to play video only when visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (autoPlay && video.paused) {
              video.play().catch(() => {
                // Auto-play was prevented (e.g. low-power mode), ignore
              });
            }
          } else {
            if (!video.paused) {
              video.pause();
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: '100px' }
    );

    observer.observe(video);

    // Pause when tab is not active
    const handleVisibilityChange = () => {
      if (document.hidden) {
        if (!video.paused) video.pause();
      } else {
        const rect = video.getBoundingClientRect();
        const inViewport = rect.top < window.innerHeight && rect.bottom > 0;
        if (inViewport && autoPlay && video.paused) {
          video.play().catch(() => {});
        }
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      observer.disconnect();
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [autoPlay]);

  return (
    <video
      ref={videoRef}
      src={optimizedSrc}
      autoPlay={autoPlay}
      loop={loop}
      muted={muted}
      playsInline={playsInline}
      preload={preload}
      className={className}
      style={style}
      {...rest}
    />
  );
};
