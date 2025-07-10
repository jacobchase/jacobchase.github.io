export default function projectbanner(props){
    return(
        <a 
        href={props.link} 
        target="_blank" 
        rel="noopener" 
        className="projectButton"
        >
        <img className="image" src={props.img.src} alt="project" />
        <h1 className="projectTitle">{props.title}</h1>
        <h2 className="projectDescription">{props.description}</h2>
        </a>

    )
}