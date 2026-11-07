import { memo, useState } from 'react';
import fallbackImage from '../assets/images/project-fallback.svg';

interface ProjectImageProps {
  src: string;
  srcSet?: string;
  sizes?: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
}

// Keep loading state local so image events do not re-render the project grid.
export const ProjectImage = memo(function ProjectImage(props: ProjectImageProps) {
  return <ImageWithStatus key={`${props.src}|${props.srcSet ?? ''}`} {...props} />;
});

function ImageWithStatus({ src, srcSet, sizes, alt, className, loading = 'lazy' }: ProjectImageProps) {
  const [status, setStatus] = useState<'loading' | 'loaded' | 'fallback' | 'failed'>('loading');
  const isFallback = status === 'fallback' || status === 'failed';

  return (
    <>
      {status === 'loading' && (
        <span aria-hidden="true" className="project-image-skeleton absolute inset-0 pointer-events-none" />
      )}
      {status === 'failed' ? (
        <span role="img" aria-label={`${alt} - preview unavailable`} className="absolute inset-0 flex items-center justify-center bg-[#141414] text-sm text-[#D4AF37]">
          Preview unavailable
        </span>
      ) : <img
        src={isFallback ? fallbackImage : src}
        srcSet={isFallback ? undefined : srcSet}
        sizes={isFallback ? undefined : sizes}
        alt={isFallback ? `${alt} — preview unavailable` : alt}
        width={1376}
        height={768}
        loading={loading}
        decoding="async"
        className={className}
        onLoad={() => setStatus(isFallback ? 'fallback' : 'loaded')}
        onError={() => setStatus(isFallback ? 'failed' : 'fallback')}
      />}
    </>
  );
}
