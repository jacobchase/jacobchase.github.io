export default function contact(){
    return(
        <div className="contactContainer">
        <div className="contactBox">
        <h1 className="contactTitle">Contact Me!</h1>
        <p className="contactDescription">If you'd like to work together, ask a question, or just say hello — feel free to get in touch. I’d love to hear from you!</p>
        <img/>
        <ul className="contactSocials">
            <li><a href="mailto:jacobchase7@outlook.com"><img src="src/assets/email-icon.png"/></a></li>
            <li>
            <a href="" target="_blank" rel="noopener"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/twitter/twitter-original.svg" /> </a>
          </li>
            <li><a href="" target="_blank" rel="noopener"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-plain.svg" /></a></li>
            <li>
           <a href="https://github.com" target="_blank" rel="noopener"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"/> </a>
          </li>
        </ul>
        </div>
        </div>
    )
}