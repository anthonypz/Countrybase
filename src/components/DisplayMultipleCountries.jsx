import { Box, Button, Card, Typography } from '@mui/material';
import { useState } from 'react';
import DisplayCountryInfo from './DisplayCountryInfo';

const DisplayMultipleCountries = ({ country }) => {
  const [show, setShow] = useState(false);

  const handleClick = () => setShow(!show);

  return (
    <Box sx={{ paddingY: '16px' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'baseline',
          paddingBottom: '8px',
        }}
      >
        <Typography
          variant="h6"
          gutterBottom
          component="div"
          sx={{
            display: 'inline-block',
            paddingRight: '4px',
          }}
        >
          {country.name.common}
        </Typography>
        <Button variant="text" size="medium" onClick={handleClick}>
          {show ? 'hide' : 'show'}
        </Button>
      </Box>
      {show && (
        <Card sx={{ maxWidth: 380 }}>
          <DisplayCountryInfo country={country} />
        </Card>
      )}
    </Box>
  );
};

export default DisplayMultipleCountries;
