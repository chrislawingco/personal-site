import { Link } from "react-router-dom"

function MainButtons() {
    return (
        <nav className="button-group-row">
            <Link to="/about" className="btn expanding-button">
                <img src="/images/placeholder.jpg" alt="about me" />
                <span>about me</span>
            </Link>
            <Link to="/links" className="btn expanding-button">
                <img src="/images/placeholder.jpg" alt="links" />
                <span>links</span>
            </Link>
            <Link to="/projects" className="btn expanding-button">
                <img src="/images/placeholder.jpg" alt="projects" />
                <span>projects</span>
            </Link>
            <Link to="/contact" className="btn expanding-button">
                <img src="/images/placeholder.jpg" alt="contact" />
                <span>contact</span>
            </Link>
        </nav>
    )
}

export default MainButtons