const DisplayWeather = ({ weather }) => {
  let celsius = ((weather.main.temp - 32) / 1.8).toFixed(2);
  let kilometresPerHour = (weather.wind.speed * 1.609344).toFixed(2);
  return (
    <>
      <h2>Weather in {weather.name}</h2>
      <p>
        <strong>Temperature:</strong> {weather.main.temp}℉ / {celsius}℃
      </p>
      <img
        src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt="weather icon"
      />
      <p>
        <strong>Wind:</strong> {weather.wind.speed} mph / {kilometresPerHour}{' '}
        kph
      </p>
    </>
  );
};

export default DisplayWeather;
