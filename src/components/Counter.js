
import React, { useState, useEffect } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { useSpring, animated } from 'react-spring';

const Counter = () => {
  const [count, setCount] = useState(() => {
    const savedCount = localStorage.getItem('count');
    return savedCount ? parseInt(savedCount, 10) : 0;
  });

  const styles = useSpring({
    backgroundColor: `rgba(0, 0, 255, ${count / 100})`,
    height: `${count * 2}px`,
    config: { tension: 170, friction: 26, precision: 0.01 },
  });

  useEffect(() => {
    localStorage.setItem('count', count);
  }, [count]);

  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => setCount(count > 0 ? count - 1 : 0);
  const handleReset = () => setCount(0);

  return (
    <animated.div style={styles}>
      <Box sx={{ textAlign: 'center', p: 2 }}>
        <Typography variant="h4">Counter: {count}</Typography>
        <Button variant="contained" onClick={handleIncrement}>+</Button>
        <Button variant="contained" onClick={handleDecrement}>-</Button>
        <Button variant="contained" onClick={handleReset}>Reset</Button>
      </Box>
    </animated.div>
  );
};

export default Counter;
