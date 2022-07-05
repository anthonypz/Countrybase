const DisplayResults = ({ filterCountries }) => {
  return filterCountries.length > 10 ? (
    <p>
      Too many matches. Make your search query more specific or try another
      word.
    </p>
  ) : filterCountries.length > 1 ? (
    filterCountries.map((country) => <p>{country.name.common}</p>)
  ) : (
    filterCountries.map((country) => {
      return <h1>{country.name.common}</h1>;
    })
  );
};

export default DisplayResults;
