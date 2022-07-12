import { Card } from '@mui/material';
import DisplayCountryInfo from './DisplayCountryInfo';
import DisplayMultipleCountries from './DisplayMultipleCountries';
import DisplayWeather from './DisplayWeather';

const DisplayResults = ({ filterCountries, weather }) => {
  return filterCountries.length > 10 ? (
    <p>
      Too many matches. Make your search query more specific or try another
      country.
    </p>
  ) : filterCountries.length > 1 ? (
    filterCountries.map((country) => (
      <DisplayMultipleCountries key={country.name.common} country={country} />
    ))
  ) : filterCountries.length === 1 ? (
    <Card sx={{ maxWidth: 380 }}>
      <DisplayCountryInfo country={filterCountries[0]} />
      {weather && <DisplayWeather weather={weather} />}
    </Card>
  ) : (
    ''
  );
};

export default DisplayResults;
