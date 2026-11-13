import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import './Home.css'

export default function Home() {
    return (
        <section id="home">
            <div className="container home-box">
                <p className="home-hi">Hi, I'm</p>
                <h1 className="home-name">Ashlesha Meshram</h1>
                <h2 className="home-role">Frontend Web Developer</h2>
                <p className="home-text">
                Crafting beautiful, functional, and user-centered digital
                experiences with modern technologies. Passionate about clean code,
                innovative solutions, and continuous learning.
                </p>

                <div className="home-buttons">
                <a href="#project" className="button-fill">View my Projects</a>
                <a href="#contact" className="button-line">Contact Me</a>
                <a href="/resume.pdf" download className="button-line">Download Resume</a>
                </div>

                <div className="home-icons">
                <a href="https://github.com/ashleshameshram" target="_blank" rel="noreferrer" aria-label="GitHub">
                    <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/ashlesha-meshram2004" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                    <CiLinkedin  />
                </a>
                <a href="https://mail.google.com/mail/?view=cm&to=ashleshameshram265@gmail.com" aria-label="Email">
                    <CiMail />
                </a>
                </div>
            </div>
        </section>
    )
}