import React, { useState } from 'react'
import './App.css'
import Switch from './components/Switch/Switch';
import Home from './pages/Home/Home'

const App = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    return (
        <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
            <div className="container-mode">
                <label>{isDarkMode ? 'Dark' : 'Light'} Mode</label>
                <Switch onChange={e => setIsDarkMode(e.target.checked)} text="mode" />
            </div>
            <Home />
        </div>
    )
}

export default App;
