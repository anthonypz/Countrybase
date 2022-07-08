import DisplayCountryInfo from './DisplayCountryInfo';
import DisplayMultipleCountries from './DisplayMultipleCountries';
import DisplayWeather from './DisplayWeather';

const DisplayResults = ({ filterCountries }) => {
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
  ) : filterCountries.length === 1 ? (
    <>
      <DisplayCountryInfo country={filterCountries[0]} />
      <DisplayWeather filterCountries={filterCountries} />
    </>
  ) : (
    ''
  );
};

export default DisplayResults;
