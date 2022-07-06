import { useState } from 'react';
import DisplayCountryInfo from './DisplayCountryInfo';

const DisplayMultipleCountries = ({ country }) => {
  const [show, setShow] = useState(false);

  const handleClick = () => setShow(!show);

  return (
    <>
      <p>{country.name.common}</p>
      <button onClick={handleClick}>{show ? 'hide' : 'show'}</button>
      {show && <DisplayCountryInfo country={country} />}
    </>
  );
};

export default DisplayMultipleCountries;
