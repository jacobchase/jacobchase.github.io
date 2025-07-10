import '/src/styles/projects.css'
import ProjectBanner from '/src/components/projectbanner.jsx'
import projectData from "/src/data/projects.js"
export default function projects(){
    const projectList = projectData.map(project => {
        return <ProjectBanner key={project.id} {...project}/>
    })
    return(
        <div className="projectsContainer">
        <h1 className="Title">My Projects</h1>
        <p className="Description">I love turning ideas into reality. Here are some of my favorite projects I’ve had the chance to build!
</p>
        <div className="projectsWrapper">{projectList}</div>
        </div>
    )
}