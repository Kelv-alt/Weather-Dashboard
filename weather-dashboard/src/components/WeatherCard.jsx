function WeatherCard({ weather }) {
  return (
    <div className="bg-white text-black p-6 rounded-2xl shadow-lg w-80 text-center">
      <h2 className="text-xl font-semibold mb-2">{weather.name}</h2>
      <p className="text-4xl font-bold">{Math.round(weather.main.temp)}°C</p>
      <p className="capitalize">{weather.weather[0].description}</p>
      <img
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt="weather icon"
        className="mx-auto"
      />
      <div className="flex justify-between mt-4 text-sm">
        <p>Humidity: {weather.main.humidity}%</p>
        <p>Wind: {weather.wind.speed} m/s</p>
      </div>
    </div>
  );
}

export default WeatherCard;
