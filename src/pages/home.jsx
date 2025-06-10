import "/src/styles/home.css"
import Timeline from "/src/components/timeline"
export default function home(){
    return(
        <main>
            <div className="homeContainer">
                <div className="homeBox">
                    <div className="profileBox">
                        <img src="src/assets/IMG_3509.jpeg" className="profile-picture"/>
                        <p className="profile-description">Hi, I’m <span className="name">Jacob Chase</span>, a developer passionate about creating beautiful, responsive software.</p>
                    </div>
                </div>
                <div className="software-stack-box">
                    <h2 className="experience">My Experience</h2>
                    <p>Click here for a downloadable copy of my resume!</p>
                    <Timeline/>
                </div>
            </div>
        </main>
    )
}