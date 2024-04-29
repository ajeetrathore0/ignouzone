import React, { useState } from 'react';

const SettingsPage = () => {
    const [selectedLanguage, setSelectedLanguage] = useState('English');
    const [selectedTheme, setSelectedTheme] = useState('Light');

    const handleLanguageChange = (language) => {
        setSelectedLanguage(language);
    }

    const handleThemeChange = (theme) => {
        setSelectedTheme(theme);
        // You can implement theme changing logic here
    }

    return (
        <div style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
            <h1 style={{ fontSize: '2.5rem', margin: '30px 0', color: '#333' }}>Settings</h1>
            <div style={{ marginBottom: '30px' }}>
                <h2 style={{ fontSize: '1.8rem', marginBottom: '15px', color: '#333' }}>Language</h2>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <button
                        style={{
                            backgroundColor: selectedLanguage === 'English' ? '#007bff' : '#ccc',
                            color: '#fff',
                            border: 'none',
                            padding: '10px 20px',
                            fontSize: '1.2rem',
                            marginRight: '10px',
                            borderRadius: '5px',
                            cursor: 'pointer'
                        }}
                        onClick={() => handleLanguageChange('English')}
                    >
                        English
                    </button>
                    <button
                        style={{
                            backgroundColor: selectedLanguage === 'Spanish' ? '#007bff' : '#ccc',
                            color: '#fff',
                            border: 'none',
                            padding: '10px 20px',
                            fontSize: '1.2rem',
                            borderRadius: '5px',
                            cursor: 'pointer'
                        }}
                        onClick={() => handleLanguageChange('Spanish')}
                    >
                        Spanish
                    </button>
                    {/* Add more language options as needed */}
                </div>
            </div>
            <div>
                <h2 style={{ fontSize: '1.8rem', marginBottom: '15px', color: '#333' }}>Theme</h2>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <button
                        style={{
                            backgroundColor: selectedTheme === 'Light' ? '#007bff' : '#ccc',
                            color: '#fff',
                            border: 'none',
                            padding: '10px 20px',
                            fontSize: '1.2rem',
                            marginRight: '10px',
                            borderRadius: '5px',
                            cursor: 'pointer'
                        }}
                        onClick={() => handleThemeChange('Light')}
                    >
                        Light
                    </button>
                    <button
                        style={{
                            backgroundColor: selectedTheme === 'Dark' ? '#007bff' : '#ccc',
                            color: '#fff',
                            border: 'none',
                            padding: '10px 20px',
                            fontSize: '1.2rem',
                            borderRadius: '5px',
                            cursor: 'pointer'
                        }}
                        onClick={() => handleThemeChange('Dark')}
                    >
                        Dark
                    </button>
                    {/* Add more theme options as needed */}
                </div>
            </div>
            {/* Add more settings options as needed */}
        </div>
    );
}

export default SettingsPage;
