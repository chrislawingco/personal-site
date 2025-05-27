export default function DarkModeToggle({ darkMode, setDarkMode }) {
  const lightsvg = <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="brightness" class="icon glyph">
    <title>Light</title>
    <circle cx="12" cy="12" r="5"></circle>
    <path d="M12,5a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5Z"></path>
    <path d="M17.66,7.34a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34Z"></path>
    <path d="M21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Z"></path>
    <path d="M18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41Z"></path>
    <path d="M12,19a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19Z"></path>
    <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17Z"></path>
    <path d="M5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Z"></path>
    <path d="M5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Z"></path>
  </svg>

  const darksvg = <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="moon-alt" class="icon glyph">
    <title>Dark</title>
    <path d="M12,2h-.46a1,1,0,0,0-.9.77,1,1,0,0,0,.46,1.09A5.92,5.92,0,0,1,14,9,6,6,0,0,1,3.93,13.4a1,1,0,0,0-1.65,1A10,10,0,1,0,12,2Z"></path>
  </svg>

  return (
    <button type="button" className="btn btn-sm btn-expanding clickable" onClick={() => setDarkMode(!darkMode)}>
      {/* <img src={darkMode ? "images/dark_toggle.png" : "images/light_toggle.png"} alt={darkMode ? "Dark" : "Light"} /> */}
      {darkMode ? darksvg : lightsvg}
    </button>
  )
}