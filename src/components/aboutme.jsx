import TechnologyBox from "./technologyBox";
import { languages } from "../data/technologies";
import TechCarousel from "./technologycarousel";

export default function AboutMe() {
  var tech = languages.map((technology) => {
    return (
      <TechnologyBox
        key={technology.alt}
        alt={technology.alt}
        src={technology.src}
      />
    );
  });

  return (
    <>
      <div className=" flex p-10">
        {/* LEFT COLUMN */}
        <div className="flex flex-col max-w-xl">
          <div className="bg-white/5 p-20 rounded-lg shadow-lg border border-white/10 shadow-red-500">
            <h1 className="text-6xl text-white">
              Hi, I'm <br />
              <span className="text-softperiwinkle">Jacob Chase!</span>
            </h1>

            <p1 className="mt-6 text-lg text-white">
              Innovative and other bullshit words, etc.
            </p1>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <img
          className="ml-auto w-40 h-auto mr-20"
          src="/src/assets/react.svg"
          alt="React logo"
        />
      </div>
      <div id="about-me" class="p-10 flex-col text-center">
        <h1 className="text-white font-Quicksand text-3xl">
          <span className="text-softperiwinkle">About Me</span>
        </h1>
        <div className="flex">
          <div className="flex flex-col max-w-xl">
            <div className="bg-gray-600/5 p-20 rounded-lg shadow-lg border border-white/10">
              <h1 className="text-6xl text-white"></h1>

              <p1 className="mt-6 text-lg text-white">
                This is where my about me blurb is going to go. I'm not sure
                what I'm going to be putting here yet.
              </p1>
            </div>
          </div>
          <img
            className="ml-auto w-40 h-auto mr-20"
            src="/src/assets/react.svg"
            alt="React logo"
          />
        </div>
      </div>
      <div class="p-10 flex-col text-center">
        <h1 className="text-white font-Quicksand text-3xl uppercase">
          My <span className="text-softperiwinkle">Technology</span> Stack{" "}
        </h1>
        <div class="mt-10 gap-20">
          <TechCarousel technologies={languages} />
        </div>
      </div>
    </>
  );
}
