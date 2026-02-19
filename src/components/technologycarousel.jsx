export default function TechCarousel({ technologies }) {
  return (
    <div className="overflow-hidden w-full py-8 group font-Quicksand">
      <div className="flex w-max animate-scroll gap-8 group-hover:[animation-play-state:paused]">
        {[...technologies, ...technologies].map((tech, index) => (
          <div
            key={index}
            className="flex items-center justify-start h-20 min-w-30 rounded-xl shrink-0 p-3 border-2 bg-white/5 hover:shadow-md shadow-softperiwinkle"
          >
            <img
              src={tech.src}
              alt={tech.alt}
              className="w-12 h-12 aspect-square"
            />
            <h1 className="ml-3 m-0 leading-none text-sm text-white uppercase whitespace-nowrap">
              {tech.alt}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
}
