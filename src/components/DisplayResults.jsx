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
      return (
        <DisplayMultipleCountries key={country.name.common} country={country} />
      );
    })
  ) : (
    filterCountries.map((country) => {
      return <DisplayCountryInfo key={country.name.common} country={country} />;
    })
  );
};

export default DisplayResults;
