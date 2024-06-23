import React, { useEffect, useState } from 'react';

const MarsWeather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiKey = process.env.REACT_APP_SECRET_KEY;
        const response = await fetch(`https://api.nasa.gov/insight_weather/?api_key=${apiKey}&feedtype=json&ver=1.0`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        setWeatherData(data);
      } catch (error) {
        console.error("Error fetching Mars weather data:", error);
        setError(error.toString());
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Mars Weather Data</h1>
      {weatherData ? (
        <div>
          <h2>Available Sols</h2>
          <ul>
            {weatherData.sol_keys.map((sol) => (
              <li key={sol}>
                Sol {sol}
                <ul>
                  <li>Average Temperature: {weatherData[sol].AT.av}°F</li>
                  <li>Wind Speed: {weatherData[sol].HWS.av} mph</li>
                  <li>Atmospheric Pressure: {weatherData[sol].PRE.av} Pa</li>
                  {/* Add more weather details as needed */}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No weather data available.</p>
      )}
    </div>
  );
};

export default MarsWeather;