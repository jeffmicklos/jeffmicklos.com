import { useEffect, useRef } from 'react';

export default function ScrollVideo({
  src,
  fps = 30,
  className,
  style,
  muted = true,
  playsInline = true,
  preload = 'metadata',
  enabled = false,
}) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const frameTime = 1 / fps;

    const onWheel = (event) => {
      if (!enabled) return;
      if (!video.duration || !isFinite(video.duration)) return;

      const direction = Math.sign(event.deltaY);
      if (!direction) return;

      const nextTime =
        direction > 0
          ? Math.min(video.duration, video.currentTime + frameTime)
          : Math.max(0, video.currentTime - frameTime);

      video.currentTime = nextTime;
    };

    window.addEventListener('wheel', onWheel, { passive: true });
    return () => window.removeEventListener('wheel', onWheel);
  }, [fps, enabled]);

  return (
    <div className={className} style={style}>
      <div
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          zIndex: 1,
          background: '#000000',
          maskImage:
            'linear-gradient(90deg, rgb(0 0 0 / 0%) 6%, rgb(0 0 0 / 80%) 25%, rgb(0 0 0 / 80%) 76%, rgb(0 0 0 / 0%) 89%)',
        }}
      />
      <video
        ref={videoRef}
        src={src}
        muted={muted}
        playsInline={playsInline}
        preload={preload}
        controls={false}
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      />
    </div>
  );
}
