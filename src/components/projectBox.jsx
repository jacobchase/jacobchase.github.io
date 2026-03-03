export default function projectBox() {
  return (
    <>
      <div className="w-100 h-150 bg-gray-600/5 rounded-lg flex flex-col font-Quicksand">
        <div className="w-full bg-blue-900 h-2/5 rounded-lg"></div>
        <h1 className="text-white text-center mt-4 text-2xl">Project Name</h1>
        <p className="ml-4 text-white">Description</p>
        <p className="ml-4 text-white mb-[1%] mt-auto">Built with: </p>
        <a
          className="
        mb-[10%]
        mt-auto
      text-white
        mx-4
        py-2
        rounded-md
      bg-gray-500
        font-semibold
        transition-all
        duration-300
        hover:opacity-80
        text-center"
        >
          View Project
        </a>
      </div>
    </>
  );
}
