import { CardContent, Typography } from '@mui/material';

const DisplayWeather = ({ weather }) => {
  const celsius = ((weather.main.temp - 32) / 1.8).toFixed(2);
  const kilometersPerHour = (weather.wind.speed * 1.609344).toFixed(2);
  return (
    <CardContent sx={{ paddingTop: 0 }}>
      <Typography variant="h5" component="div" gutterBottom>
        Weather in {weather.name}
      </Typography>
      <img
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt="weather icon"
      />
      <Typography variant="body1" gutterBottom>
        <strong>Description:</strong> {weather.weather[0].description || 'N/A'}
      </Typography>
      <Typography variant="body1" gutterBottom>
        <strong>Temperature:</strong> {weather.main.temp}℉ / {celsius}℃
      </Typography>
      <Typography variant="body1" gutterBottom>
        <strong>Humidity:</strong> {weather.main.humidity}%
      </Typography>
      <Typography variant="body1" gutterBottom>
        <strong>Wind:</strong> {weather.wind.speed} mph / {kilometersPerHour}{' '}
        kph
      </Typography>
    </CardContent>
  );
};

export default DisplayWeather;
