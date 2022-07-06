const DisplayCountryInfo = ({ country }) => {
  return (
    <div>
      <h1>{country.name.common}</h1>
      <p>
        Capital:{' '}
        {Array.isArray(country.capital)
          ? country.capital.join(', ')
          : country.capital}
      </p>
      <p>Population: {country.population}</p>
      <p>Area: {country.area} square kilometres</p>
      <p>Region: {country.region}</p>
      <p>Subregion: {country.subregion}</p>
      <p>
        Google maps:{' '}
        <a href={country.maps.googleMaps}>view {country.name.common}</a>
      </p>

      <h2>Languages:</h2>
      <ul>
        {Object.values(country.languages).map((lang) => (
          <li>{lang}</li>
        ))}
      </ul>
      <img
        src={country.flags.svg}
        width="200"
        height="auto"
        alt="country flag"
      />
    </div>
  );
};

export default DisplayCountryInfo;
