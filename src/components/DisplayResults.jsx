import DisplayCountryInfo from './DisplayCountryInfo';
import DisplayMultipleCountries from './DisplayMultipleCountries';
import DisplayWeather from './DisplayWeather';
import { useEffect, useState } from 'react';

const DisplayResults = ({ filterCountries }) => {
  const [weather, setWeather] = useState('');

  useEffect(() => {
    if (filterCountries.length === 1) {
      const [lat, lng] = filterCountries[0].capitalInfo.latlng;
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${
          import.meta.env.VITE_API_KEY
        }&units=imperial`
      )
        .then((res) => res.json())
        .then((data) => setWeather(data));
    }
  }, [filterCountries]);

  return filterCountries.length > 10 ? (
    <p>
      Too many matches. Make your search query more specific or try another
      word.
    </p>
  ) : filterCountries.length > 1 ? (
    filterCountries.map((country) => {
      return (
        <DisplayMultipleCountries key={country.name.common} country={country} />
      );
    })
  ) : (
    <>
      <DisplayCountryInfo country={filterCountries[0]} />
      {weather && <DisplayWeather weather={weather} />}
    </>
  );
};

export default DisplayResults;
