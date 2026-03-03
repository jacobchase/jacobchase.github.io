export default function ContactCard() {
  return (
    <div className=" w-[60%] h-[20%] rounded-2xl border border-white/10 bg-gray-600/5 hover:opacity-80 justify-center items-center flex gap-5">
      <img
        src="https://img.icons8.com/?size=100&id=53388&format=png&color=FFFFFF"
        className="w-[6%] h-auto"
      />
      <h1 className="text-white uppercase font-Quicksand">
        jacobchase7@outlook.com
      </h1>
    </div>
  );
}
