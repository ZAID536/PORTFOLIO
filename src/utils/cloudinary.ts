/**
 * Cloudinary Asset Optimization Utility
 * Adds automatic modern format delivery (WebP/AVIF), quality optimization, and responsive scaling.
 */

export function getOptimizedImageUrl(url: string, width?: number): string {
  if (!url || typeof url !== 'string') return url;

  // Only transform Cloudinary image URLs
  if (url.includes('res.cloudinary.com') && url.includes('/image/upload/')) {
    // Avoid double transforming
    if (url.includes('/image/upload/f_auto') || url.includes('/image/upload/q_auto')) {
      return url;
    }

    const transformParams = width 
      ? `f_auto,q_auto,w_${width},c_limit`
      : 'f_auto,q_auto';

    return url.replace('/image/upload/', `/image/upload/${transformParams}/`);
  }

  // Unsplash image optimization
  if (url.includes('images.unsplash.com') && width) {
    try {
      const parsedUrl = new URL(url);
      parsedUrl.searchParams.set('w', String(width));
      parsedUrl.searchParams.set('auto', 'format');
      parsedUrl.searchParams.set('q', '80');
      return parsedUrl.toString();
    } catch {
      return url;
    }
  }

  return url;
}

export function getOptimizedVideoUrl(url: string): string {
  if (!url || typeof url !== 'string') return url;

  // Only transform Cloudinary video URLs
  if (url.includes('res.cloudinary.com') && url.includes('/video/upload/')) {
    if (url.includes('/video/upload/f_auto') || url.includes('/video/upload/q_auto')) {
      return url;
    }
    return url.replace('/video/upload/', '/video/upload/f_auto,q_auto/');
  }

  return url;
}
