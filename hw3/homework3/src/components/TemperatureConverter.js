import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

function TemperatureConverter() {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');

  const handleCelsiusChange = (event) => {
    const value = event.target.value;
    setCelsius(value);
    if (value === '') {
      setFahrenheit('');
    } else {
      const fahrenheitValue = (parseFloat(value) * 9/5) + 32;
      setFahrenheit(fahrenheitValue.toFixed(2));
    }
  };

  const handleFahrenheitChange = (event) => {
    const value = event.target.value;
    setFahrenheit(value);
    if (value === '') {
      setCelsius('');
    } else {
      const celsiusValue = (parseFloat(value) - 32) * 5/9;
      setCelsius(celsiusValue.toFixed(2));
    }
  };

  return (
    <Box sx={{ maxWidth: 300, mx: 'auto', mt: 4 }}>
      <TextField
        label="Цельсий"
        variant="outlined"
        fullWidth
        value={celsius}
        onChange={handleCelsiusChange}
        margin="normal"
      />
      <TextField
        label="Фаренгейт"
        variant="outlined"
        fullWidth
        value={fahrenheit}
        onChange={handleFahrenheitChange}
        margin="normal"
      />
    </Box>
  );
}

export default TemperatureConverter;
