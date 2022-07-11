import React, { useState, useEffect, useMemo } from 'react';
import DisplayResults from './components/DisplayResults';
import FindCountries from './components/FindCountries';
import { useDebouncedValue } from './useDebouncedValue';
import { Box, Container, CssBaseline } from '@mui/material';

function App() {
  const [input, setInput] = useState('');
  const [countries, setCountries] = useState([]);
  const [weather, setWeather] = useState('');
  const [currentCountry, setCurrentCountry] = useState('');

  const debouncedInput = useDebouncedValue(input, 400);

  const handleInput = (event) => {
    setInput(event.target.value);
  };

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const filterCountries = useMemo(
    () =>
      countries.filter(
        (country) =>
          country.name.common
            .toLowerCase()
            .includes(debouncedInput.toLowerCase().trim()) ||
          country.cca3
            .toLowerCase()
            .includes(debouncedInput.toLowerCase().trim())
      ),
    [countries, debouncedInput]
  );

  useEffect(() => {
    // Reset weather state when filter results change to avoid populating new results with old weather data
    if (filterCountries.length > 1) {
      setCurrentCountry('');
      setWeather('');
    }
    if (
      filterCountries.length === 1 &&
      filterCountries[0].capital &&
      filterCountries[0].name.common !== currentCountry
    ) {
      const [lat, lng] = filterCountries[0].capitalInfo.latlng;
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${
          import.meta.env.VITE_API_KEY
        }&units=imperial`
      )
        .then((res) => res.json())
        .then((data) => setWeather(data));
      setCurrentCountry(filterCountries[0].name.common);
    }
  }, [filterCountries, currentCountry]);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container
        maxWidth="sm"
        sx={{
          paddingY: '16px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box sx={{ paddingY: '16px' }}>
          <FindCountries handleInput={handleInput} input={input} />
        </Box>
        {input && (
          <DisplayResults filterCountries={filterCountries} weather={weather} />
        )}
      </Container>
    </React.Fragment>
  );
}

export default App;
