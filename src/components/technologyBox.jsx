export default function TechnologyBox(props) {
  return (
    <div className="p-4 rounded-md border-solid outline-2 flex justify-center items-center">
      <img src={props.src} alt={props.alt} className="aspect-3/2 w-40" />
    </div>
  );
}
