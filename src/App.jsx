import { useState, useEffect, useMemo } from 'react';
import DisplayResults from './components/DisplayResults';
import FindCountries from './components/FindCountries';
import { useDebouncedValue } from './useDebouncedValue';

function App() {
  const [input, setInput] = useState('');
  const [countries, setCountries] = useState([]);

  const debouncedInput = useDebouncedValue(input, 180);

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
    [input]
  );

  return (
    <>
      <FindCountries handleInput={handleInput} input={input} />
      {input && <DisplayResults filterCountries={filterCountries} />}
    </>
  );
}

export default App;
