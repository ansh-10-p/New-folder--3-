'use client';

export function Marquee({
  children,
  speed = 40,
  pauseOnHover = true,
}: {
  children: React.ReactNode;
  speed?: number;
  pauseOnHover?: boolean;
}) {
  return (
    <div
      className={`overflow-hidden whitespace-nowrap bg-gradient-to-r from-background via-background to-background ${
        pauseOnHover ? 'hover:pause group' : ''
      }`}
      style={{
        mask: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
        WebkitMask: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
      }}
    >
      <div
        className={`inline-block animate-marquee ${pauseOnHover ? 'group-hover:pause' : ''}`}
        style={{
          animationDuration: `${speed}s`,
        }}
      >
        {children}
      </div>
      <div
        className="inline-block animate-marquee"
        style={{
          animationDuration: `${speed}s`,
        }}
      >
        {children}
      </div>
    </div>
  );
}
