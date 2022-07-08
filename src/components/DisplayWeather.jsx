import { useEffect, useState } from 'react';

const DisplayWeather = ({ filterCountries }) => {
  const [weather, setWeather] = useState('');

  useEffect(() => {
    const [lat, lng] = filterCountries[0].capitalInfo.latlng;
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${
        import.meta.env.VITE_API_KEY
      }&units=imperial`
    )
      .then((res) => res.json())
      .then((data) => setWeather(data));
  }, [filterCountries]);

  if (weather) {
    const celsius = ((weather.main.temp - 32) / 1.8).toFixed(2);
    const kilometersPerHour = (weather.wind.speed * 1.609344).toFixed(2);
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
          <strong>Wind:</strong> {weather.wind.speed} mph / {kilometersPerHour}{' '}
          kph
        </p>
      </>
    );
  }
};

export default DisplayWeather;
