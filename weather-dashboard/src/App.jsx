import { useState } from "react";
import WeatherCard from "./components/WeatherCard";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const API_KEY = "YOUR_OPENWEATHER_API_KEY";

  const fetchWeather = async () => {
    if (!city) return;
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    const data = await res.json();
    setWeather(data);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 to-indigo-600 flex flex-col items-center p-6 text-white">
      <h1 className="text-3xl font-bold mb-6">Weather Dashboard</h1>

      <div className="flex gap-2 mb-6">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city"
          className="p-2 rounded-lg text-black"
        />
        <button
          onClick={fetchWeather}
          className="px-4 py-2 bg-indigo-700 rounded-lg shadow hover:bg-indigo-800"
        >
          Search
        </button>
      </div>

      {weather && <WeatherCard weather={weather} />}
    </div>
  );
}

export default App;
