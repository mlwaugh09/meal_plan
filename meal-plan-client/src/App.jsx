import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [weather, setWeather] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchWeather = async () => {
      setIsLoading(true);
      setHasError(false);
      try {
        const res = await fetch("/weatherforecast", { signal });
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await res.json();
        setWeather(data);
      } catch (err) {
        if (err.name === "AbortError") {
          console.log("Fetch aborted");
        } else {
          console.error("Error:", err);
          setHasError(true);
          setWeather([]);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchWeather();

    return () => {
      controller.abort();
    };
  }, []);

  let weatherContent;
  if (isLoading) {
    weatherContent = <p>Loading weather data...</p>;
  } else if (hasError) {
    weatherContent = <p>Error fetching weather data. Please try again.</p>;
  } else if (weather.length === 0) {
    weatherContent = <p>No weather data available.</p>;
  } else {
    weatherContent = (
      <ul>
        {weather.map((w, i) => (
          <li key={i}>
            {w.date} - {w.summary} - {w.temperatureC}°C / {w.temperatureF}°F
          </li>
        ))}
      </ul>
    );
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div style={{ padding: 20 }}>
        <h1>Weather Forecast</h1>
        {weatherContent}
      </div>
    </>
  );
}

export default App;
