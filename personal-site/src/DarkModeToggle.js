function DarkModeToggle({darkMode, setDarkMode}) {

  return (
    <button className="btn" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Dark" : "Light"}
        <img src="/images/placeholder.jpg" alt={darkMode ? "Dark": "Light"} />
    </button>
  )
}

export default DarkModeToggle;
