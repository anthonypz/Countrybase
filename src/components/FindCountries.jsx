import { TextField } from '@mui/material';

const FindCountries = ({ handleInput, input }) => {
  return (
    <TextField
      id="outlined-basic"
      label="Search Country"
      variant="outlined"
      onChange={handleInput}
      value={input}
    />
  );
};

export default FindCountries;
