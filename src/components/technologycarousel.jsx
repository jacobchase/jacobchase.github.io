export default function TechCarousel({ technologies, reverse }) {
  var direction = "";
  reverse ? (direction = "[animation-direction:reverse]") : (direction = "");
  return (
    <div className="overflow-hidden w-full py-8 group font-Quicksand">
      <div
        className={`flex w-max animate-scroll ${direction} gap-8 group-hover:[animation-play-state:paused]`}
      >
        {[...technologies, ...technologies].map((tech, index) => (
          <div
            key={index}
            className="flex items-center justify-start h-20 min-w-30 rounded-xl shrink-0 p-3 border-2 bg-gray-800 border-gray-700 shadow-md hover:border-blue-500 hover:shadow-lg transition"
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
