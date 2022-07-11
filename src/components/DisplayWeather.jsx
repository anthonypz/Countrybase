const DisplayWeather = ({ weather }) => {
  const celsius = ((weather.main.temp - 32) / 1.8).toFixed(2);
  const kilometersPerHour = (weather.wind.speed * 1.609344).toFixed(2);
  return (
    <>
      <h2>Weather in {weather.name}</h2>
      <p>
        <strong>Temperature:</strong> {weather.main.temp}℉ / {celsius}℃
      </p>
      <p>
        <strong>Humidity:</strong> {weather.main.humidity}%
      </p>
      <p>
        <strong>Description:</strong> {weather.weather[0].description || 'N/A'}
      </p>
      <img
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt="weather icon"
      />
      <p>
        <strong>Wind:</strong> {weather.wind.speed} mph / {kilometersPerHour}{' '}
        kph
      </p>
    </>
  );
};

export default DisplayWeather;
