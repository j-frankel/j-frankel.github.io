import React, {useState, useEffect} from 'react';


function Title() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add('dark-theme'); 
        }
        else {
            document.body.classList.remove('dark-theme');
        }
    }, [isDarkMode]);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    }

    return (
        <>
        <header>
            <h1 className="font-mono text-3xl font-bold text-slate-300 pt-3">My React Portfolio</h1>
        </header>
        <div className="theme-container">
            <span id="themeToggle" className="theme-toggle text-slate-300 font-mono transition ease-in-out hover:font-extrabold delay-75" onClick={toggleTheme}>
                {isDarkMode ? 'Light' : 'Dark'}
            </span>
        </div>
        </>
    );
}

export default Title;