import { Link } from "react-router-dom"

export default function MainButtons() {
    const aboutsvg = <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="chat-alt-3" class="icon glyph"><title>about</title><path d="M19.91,16.51A8.45,8.45,0,0,0,22,11c0-5-4.49-9-10-9S2,6,2,11s4.49,9,10,9a10.9,10.9,0,0,0,3-.41l4.59,2.3A.91.91,0,0,0,20,22a1,1,0,0,0,.62-.22,1,1,0,0,0,.35-1ZM8,12a1,1,0,1,1,1-1A1,1,0,0,1,8,12Zm4,0a1,1,0,1,1,1-1A1,1,0,0,1,12,12Zm4,0a1,1,0,1,1,1-1A1,1,0,0,1,16,12Z"></path></svg>
    const linkssvg = <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>links</title><path d="M10.0002 13C10.4297 13.5741 10.9776 14.0491 11.6067 14.3929C12.2359 14.7367 12.9317 14.9411 13.6468 14.9923C14.362 15.0435 15.0798 14.9403 15.7515 14.6897C16.4233 14.4392 17.0333 14.047 17.5402 13.54L20.5402 10.54C21.451 9.59695 21.955 8.33394 21.9436 7.02296C21.9322 5.71198 21.4063 4.45791 20.4793 3.53087C19.5523 2.60383 18.2982 2.07799 16.9872 2.0666C15.6762 2.0552 14.4132 2.55918 13.4702 3.46997L11.7502 5.17997M14.0002 11C13.5707 10.4258 13.0228 9.95078 12.3936 9.60703C11.7645 9.26327 11.0687 9.05885 10.3535 9.00763C9.63841 8.95641 8.92061 9.0596 8.24885 9.31018C7.5771 9.56077 6.96709 9.9529 6.4602 10.46L3.4602 13.46C2.54941 14.403 2.04544 15.666 2.05683 16.977C2.06822 18.288 2.59407 19.542 3.52111 20.4691C4.44815 21.3961 5.70221 21.9219 7.01319 21.9333C8.32418 21.9447 9.58719 21.4408 10.5302 20.53L12.2402 18.82" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
    const projectssvg = <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="dashboard" class="icon glyph"><title>projects</title><rect x="2" y="2" width="9" height="11" rx="2"></rect><rect x="13" y="2" width="9" height="7" rx="2"></rect><rect x="2" y="15" width="9" height="7" rx="2"></rect><rect x="13" y="11" width="9" height="11" rx="2"></rect></svg>
    const contactsvg = <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="mail" class="icon glyph"><title>contact</title><path d="M22,8.32V18a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V8.69L4,9.78l7.52,4.1A1,1,0,0,0,12,14a1,1,0,0,0,.5-.14L20,9.49Z"></path><path d="M22,6h0L20,7.18l-8,4.67L4,7.5,2,6.4V6A2,2,0,0,1,4,4H20A2,2,0,0,1,22,6Z"></path></svg>

    return (
        <nav className="button-group-row">
            <Link to="/about" className="btn btn-expanding btn-menu-sounds">
                {/* <img src="images/placeholder.jpg" alt="about me" /> */}
                {aboutsvg}
                <span>about me</span>
            </Link>
            <Link to="/links" className="btn btn-expanding btn-menu-sounds">
                {/* <img src="images/placeholder.jpg" alt="links" /> */}
                {linkssvg}
                <span>links</span>
            </Link>
            <Link to="/projects" className="btn btn-expanding btn-menu-sounds">
                {/* <img src="images/placeholder.jpg" alt="projects" /> */}
                {projectssvg}
                <span>projects</span>
            </Link>
            <Link to="/contact" className="btn btn-expanding btn-menu-sounds">
                {contactsvg}
                {/* <img src="images/placeholder.jpg" alt="contact" /> */}
                <span>contact</span>
            </Link>
        </nav>
    )
}