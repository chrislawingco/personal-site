import LinkButton from "./LinkButton";

export default function LinksButtons() {
    const githubsvg = <svg className="icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <title>github</title>
        <rect width="24" height="24" fill="none" />
        <path stroke="none" d="M12,2A10,10,0,0,0,8.84,21.5c.5.08.66-.23.66-.5V19.31C6.73,19.91,6.14,18,6.14,18A2.69,2.69,0,0,0,5,16.5c-.91-.62.07-.6.07-.6a2.1,2.1,0,0,1,1.53,1,2.15,2.15,0,0,0,2.91.83,2.16,2.16,0,0,1,.63-1.34C8,16.17,5.62,15.31,5.62,11.5a3.87,3.87,0,0,1,1-2.71,3.58,3.58,0,0,1,.1-2.64s.84-.27,2.75,1a9.63,9.63,0,0,1,5,0c1.91-1.29,2.75-1,2.75-1a3.58,3.58,0,0,1,.1,2.64,3.87,3.87,0,0,1,1,2.71c0,3.82-2.34,4.66-4.57,4.91a2.39,2.39,0,0,1,.69,1.85V21c0,.27.16.59.67.5A10,10,0,0,0,12,2Z" />
    </svg>

    const linkedinsvg = <svg className="icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <title>linkedin</title>
        <rect width="24" height="24" fill="none" />
        <path stroke="none" d="M19,3a2,2,0,0,1,2,2V19a2,2,0,0,1-2,2H5a2,2,0,0,1-2-2V5A2,2,0,0,1,5,3H19m-.5,15.5V13.2a3.26,3.26,0,0,0-3.26-3.26h0a2.9,2.9,0,0,0-2.32,1.3V10.13H10.13V18.5h2.79V13.57a1.4,1.4,0,1,1,2.79,0V18.5H18.5M6.88,8.56A1.68,1.68,0,0,0,8.56,6.88h0a1.69,1.69,0,1,0-3.37,0h0A1.69,1.69,0,0,0,6.88,8.56M8.27,18.5V10.13H5.5V18.5Z" />
    </svg>

    return (
        <nav className="button-group-row">
            <LinkButton text="github" svg={githubsvg} href="https://github.com/chrislawingco" />
            <LinkButton text="linkedin" svg={linkedinsvg} href="https://www.linkedin.com/in/chris-lawingco-49654b162/" />
        </nav>
    )
}