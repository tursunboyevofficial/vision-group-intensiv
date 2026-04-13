export function VisualStrip({ src, alt, toDark }: { src: string; alt: string; toDark?: boolean }) {
  return (
    <div className="relative h-[300px] md:h-[400px] overflow-hidden">
      <img src={src} alt={alt} loading="lazy" className="w-full h-full object-cover" />
      {toDark && (
        <>
          <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-transparent" style={{ height: "20%" }} />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#101114] via-transparent to-transparent" style={{ height: "30%" }} />
        </>
      )}
    </div>
  )
}
