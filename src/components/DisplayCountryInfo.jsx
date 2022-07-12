import {
  Button,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';

const DisplayCountryInfo = ({ country }) => {
  return (
    <>
      <CardMedia
        component="img"
        height="auto"
        image={country.flags.svg}
        alt={`flag of ${country.name.common}`}
      />
      <CardContent>
        <Typography variant="h4" component="div" gutterBottom>
          {country.name.common}
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>Capital:</strong>{' '}
          {Array.isArray(country.capital)
            ? country.capital.join(', ')
            : country.capital || 'N/A'}
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>Population:</strong> {country.population.toLocaleString()}
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>Area:</strong> {country.area.toLocaleString()} square
          kilometers
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>Currency:</strong>{' '}
          {country.currencies
            ? Object.keys(country.currencies).map((currency) => (
                <span key={currency}>
                  {`${country.currencies[currency].name} (${currency})`}
                </span>
              ))
            : 'N/A'}
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>Region:</strong> {country.region}
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>Subregion:</strong> {country.subregion || 'N/A'}
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>Country Code:</strong> {country.cca3}
        </Typography>
        <Typography variant="h6" component="div" gutterBottom>
          Languages:
        </Typography>
        <ul>
          {country.languages
            ? Object.values(country.languages).map((lang) => (
                <li key={lang}>
                  <Typography variant="body1" gutterBottom>
                    {lang}
                  </Typography>
                </li>
              ))
            : 'N/A'}
        </ul>
        <CardActions>
          <Button
            size="small"
            href={country.maps.googleMaps}
            target="_blank"
            rel="noreferrer noopener"
          >
            View {country.name.common} on Google Maps
          </Button>
        </CardActions>
      </CardContent>
    </>
  );
};

export default DisplayCountryInfo;
