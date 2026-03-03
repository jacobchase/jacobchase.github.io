import ContactForm from "./contactForm";
import ContactCard from "./contactCard";
export default function ContactMe() {
  return (
    <div className="flex flex-col text-center h-full">
      <h1 className="uppercase text-white text-3xl font-Quicksand">
        Let's <span className="text-blue-600">Connect!</span>
      </h1>
      <div className="grid-cols-2 grid pt-[5%] pb-[5%]">
        <div className="bg-gray-600/5 p-20 rounded-lg shadow-lg border border-white/10 w-[80%] ml-[5%]">
          <h1 className="text-6xl text-white"></h1>

          <ContactForm />
        </div>
        <div className="flex flex-col gap-6 items-center justify-center">
          <ContactCard />
          <ContactCard />
          <ContactCard />
        </div>
      </div>
    </div>
  );
}
