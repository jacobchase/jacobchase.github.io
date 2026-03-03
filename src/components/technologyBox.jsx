export default function TechnologyBox({ src, link, alt }) {
  return (
    <a
      target="_blank"
      href={link}
      className="aspect-square bg-gray-800 hover:opacity-80 rounded-md flex justify-center items-center w-full max-w-[50px] hover:border-2 hover:border-blue-500"
    >
      <img src={src} alt={alt} className="w-[70%] h-[70%] object-contain" />
    </a>
  );
}
