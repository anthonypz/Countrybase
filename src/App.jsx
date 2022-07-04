import { useState, useEffect, useMemo } from 'react';

function App() {
  const [input, setInput] = useState('');
  const [countries, setCountries] = useState([]);

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
      countries.filter((country) =>
        country.name.common.toLowerCase().includes(input.toLowerCase().trim())
      ),
    [input]
  );

  return (
    <div>
      <label htmlFor="country">Find countries</label>
      <input
        id="country"
        onChange={handleInput}
        value={input}
        type="text"
        placeholder="country name"
      />
      <div>
        {input &&
          (filterCountries.length > 10 ? (
            <p>
              Too many matches. Make your search query more specific or try
              another word.
            </p>
          ) : filterCountries.length > 1 ? (
            filterCountries.map((country) => <p>{country.name.common}</p>)
          ) : (
            filterCountries.map((country) => {
              return <h1>{country.name.common}</h1>;
            })
          ))}
      </div>
    </div>
  );
}

export default App;
