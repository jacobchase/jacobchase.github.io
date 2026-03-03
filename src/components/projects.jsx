import ProjectBox from "./projectBox";

export default function projects() {
  return (
    <>
      <div className="flex font-Quicksand flex-col justify-center items-center mb-6">
        <h1 className="text-white uppercase text-3xl">
          My <span className="text-blue-600"> Projects</span>
        </h1>
        <div className="bg-gray-600/5 p-2 w-300 mt-5 rounded-lg border border-white/10 mb-10">
          <h1 className="text-white mt-1 text-center">
            I love getting the chance to turn my ideas into reality. Here are a
            few things that I've built that I'm proud of!
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectBox />
          <ProjectBox />
          <ProjectBox />
        </div>
      </div>
    </>
  );
}
