import { Link } from "react-router-dom"

function HomeButton() {
    return (
        <Link to="/" className="btn expanding-button">
            <img src="images/placeholder.jpg" alt="home" />
            <span>home</span>
        </Link>
    )
}

export default HomeButton;