import DisplayCountryInfo from './DisplayCountryInfo';
import DisplayMultipleCountries from './DisplayMultipleCountries';

const DisplayResults = ({ filterCountries }) => {
  return filterCountries.length > 10 ? (
    <p>
      Too many matches. Make your search query more specific or try another
      word.
    </p>
  ) : filterCountries.length > 1 ? (
    filterCountries.map((country) => {
      return <DisplayMultipleCountries country={country} />;
    })
  ) : (
    filterCountries.map((country) => {
      return <DisplayCountryInfo country={country} />;
    })
  );
};

export default DisplayResults;
