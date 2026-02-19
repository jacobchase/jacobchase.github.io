export default function Navbar() {
  return (
    <div className="w-screen h-20 flex items-center">
      <p className="font-[Quicksand] text-2xl text-white indent-20 hover:cursor-pointer hover:text-red-500">
        JC
      </p>
      <ul className="font-[Quicksand] text-xl text-white list-none flex gap-6 ml-auto mr-20 [&>li]:cursor-pointer">
        <li
          className="relative
    inline-block
    px-2 py-1
    text-white
    after:absolute
    after:left-1/2
    after:-translate-x-1/2
    after:-bottom-1
    after:h-0.5
    after:w-0
    after:bg-red-500
    after:transition-all
    after:duration-300
    hover:after:w-full"
        >
          About
        </li>
        <li
          className="relative
    inline-block
    px-2 py-1
    text-white
    after:absolute
    after:left-1/2
    after:-translate-x-1/2
    after:-bottom-1
    after:h-0.5
    after:w-0
    after:bg-red-500
    after:transition-all
    after:duration-300
    hover:after:w-full"
        >
          Skills
        </li>
        <li
          className="relative
    inline-block
    px-2 py-1
    text-white
    after:absolute
    after:left-1/2
    after:-translate-x-1/2
    after:-bottom-1
    after:h-0.5
    after:w-0
    after:bg-red-500
    after:transition-all
    after:duration-300
    hover:after:w-full"
        >
          Projects
        </li>
        <li
          className="relative
    inline-block
    px-2 py-1
    text-white
    after:absolute
    after:left-1/2
    after:-translate-x-1/2
    after:-bottom-1
    after:h-0.5
    after:w-0
    after:bg-red-500
    after:transition-all
    after:duration-300
    hover:after:w-full"
        >
          Contact
        </li>
      </ul>
    </div>
  );
}
