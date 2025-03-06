import React, { useState } from 'react';
import WeatherForm from './components/WeatherForm';
import WeatherDisplay from './components/WeatherDisplay';
import { FaLinkedin, FaGithub, FaTwitter, FaUser } from 'react-icons/fa'; // Import icons
import './App.css';

const API_KEY = process.env.REACT_APP_API_KEY;

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (city) => {
    setIsLoading(true);
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
      if (!response.ok) {
        throw new Error('City not found');
      }
      const data = await response.json();
      setWeatherData(data);
      setError(null);
    } catch (error) {
      setWeatherData(null);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClear = () => {
    setWeatherData(null);
    setError(null);
    setIsLoading(false)
  }

  return (
    <div className="App">
      <header>
        <h1>Weather App</h1>
      </header>
      <main>
        <WeatherForm onSearch={handleSearch} />
        <button onClick={handleClear}>Clear</button>
        <WeatherDisplay weatherData={weatherData} error={error} isLoading={isLoading} />
        <div className="social-links">
          <p>Connect with me:</p>
          <ul>
            <li><a href="https://www.linkedin.com/in/nenavath-suresh/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a></li>
            <li><a href="https://github.com/sureshnenavath" target="_blank" rel="noopener noreferrer"><FaGithub /></a></li>
            <li><a href="https://nenavathsuresh.netlify.app/" target="_blank" rel="noopener noreferrer"><FaUser /></a></li>
            <li><a href="https://x.com/n_s_u_r_e_s_h" target="_blank" rel="noopener noreferrer"><FaTwitter /></a></li>
          </ul>
        </div>
      </main>
      <footer>
        <p>&copy; 2025 Suresh Nenavath. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
