const DisplayCountryInfo = ({ country }) => {
  return (
    <div>
      <h1>{country.name.common}</h1>
      <p>
        <strong>Capital:</strong>{' '}
        {Array.isArray(country.capital)
          ? country.capital.join(', ')
          : country.capital || 'N/A'}
      </p>
      <p>
        <strong>Population:</strong> {country.population.toLocaleString()}
      </p>
      <p>
        <strong>Area:</strong> {country.area.toLocaleString()} square kilometers
      </p>
      <p>
        <strong>Currency:</strong>{' '}
        {country.currencies
          ? Object.keys(country.currencies).map((currency) => (
              <span key={currency}>
                {`${country.currencies[currency].name}(${currency}) • ${country.currencies[currency].symbol}`}
              </span>
            ))
          : 'N/A'}
      </p>
      <p>
        <strong>Region:</strong> {country.region}
      </p>
      <p>
        <strong>Subregion:</strong> {country.subregion || 'N/A'}
      </p>
      <p>
        <strong>Country Code:</strong> {country.cca3}
      </p>
      <p>
        <strong>Google maps:</strong>{' '}
        <a href={country.maps.googleMaps}>view {country.name.common}</a>
      </p>

      <h2>Languages:</h2>
      <ul>
        {country.languages
          ? Object.values(country.languages).map((lang) => (
              <li key={lang}>{lang}</li>
            ))
          : 'N/A'}
      </ul>
      <img
        src={country.flags.svg}
        width="200"
        height="auto"
        alt={`flag of ${country.name.common}`}
      />
    </div>
  );
};

export default DisplayCountryInfo;
