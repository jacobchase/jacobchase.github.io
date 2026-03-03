import TechnologyBox from "./technologyBox";
export default function Footer() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <div className="bg-black w-full h-full text-white border-t-gray-600 border-t-2">
      <div className="grid grid-cols-3 pt-[1%] pb-[2%]">
        <div>
          <img
            src="src/assets/JacobChaseLogo_transparent.png"
            className="w-[40%] h-auto pl-[6%] cursor-pointer"
            onClick={() => scrollToSection("top")}
          />
        </div>
        <div>
          <p className="text-gray-600 uppercase">Navigation</p>
          <ul className="pt-[2%] font-[Quicksand] text-xl text-white [&>li>span]:cursor-pointer">
            <li>
              <span
                className=" hover:text-blue-500"
                onClick={() => scrollToSection("about-me")}
              >
                About
              </span>
            </li>{" "}
            <li>
              <span
                className=" hover:text-blue-500"
                onClick={() => scrollToSection("skills")}
              >
                {" "}
                Skills
              </span>
            </li>
            <li>
              <span
                className=" hover:text-blue-500"
                onClick={() => scrollToSection("about-me")}
              >
                Projects
              </span>
            </li>
            <li>
              <span
                className=" hover:text-blue-500"
                onClick={() => scrollToSection("experience")}
              >
                Experience
              </span>
            </li>{" "}
            <li>
              <span
                className=" hover:text-blue-500"
                onClick={() => scrollToSection("about-me")}
              >
                Contact
              </span>
            </li>{" "}
          </ul>
        </div>
        <div className="flex flex-col">
          {" "}
          <p className="text-gray-600 uppercase">Connect with Me</p>
          <div className="flex gap-4 justify-items-center mt-[3%]">
            <TechnologyBox
              src="https://img.icons8.com/?size=100&id=62856&format=png&color=FFFFFF"
              link="https://github.com/jacobchase"
            />
            <TechnologyBox
              src="https://img.icons8.com/?size=100&id=62856&format=png&color=FFFFFF"
              link="https://github.com/jacobchase"
            />
            <TechnologyBox
              src="https://img.icons8.com/?size=100&id=62856&format=png&color=FFFFFF"
              link="https://github.com/jacobchase"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
