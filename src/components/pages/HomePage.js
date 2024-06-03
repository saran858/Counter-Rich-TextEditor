import React, { useState, useEffect } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { styled, keyframes } from '@mui/system';
import { useSelector } from 'react-redux';
import Counter from '../Counter';
import UserDataForm from '../UserDataForm';
import RichTextEditor from '../RichTextEditor';
import UserData from '../UserData';
const textShadowPopBr = keyframes`
  0% {
    text-shadow: 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555;
    -webkit-transform: translateX(0) translateY(0);
            transform: translateX(0) translateY(0);
  }
  100% {
    text-shadow: 1px 1px #555555, 2px 2px #555555, 3px 3px #555555, 4px 4px #555555, 5px 5px #555555, 6px 6px #555555, 7px 7px #555555, 8px 8px #555555;
    -webkit-transform: translateX(-8px) translateY(-8px);
            transform: translateX(-8px) translateY(-8px);
  }
`;

const rollInLeft = keyframes`
  0% {
    -webkit-transform: translateX(-800px) rotate(-540deg);
            transform: translateX(-800px) rotate(-540deg);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0) rotate(0deg);
            transform: translateX(0) rotate(0deg);
    opacity: 1;
  }
`;

const AnimatedBox = styled(Box)(({ roll }) => ({
  visibility: !roll && 'hidden',
  animation: roll && `${rollInLeft} 0.6s ease-out both`,
}));

const HomePage = () => {
  const users = useSelector((state) => state.user.users);
  const [roll, setRoll] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setRoll(true);
    }, 500);
  }, []);

  const handleFormSubmit = (userData) => {
    setCurrentUser(userData);
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>Home Page</Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <AnimatedBox roll={roll} sx={{ border: '1px solid #ccc', borderRadius: 2 }}>
            <Counter />
          </AnimatedBox>
        </Grid>
        <Grid item xs={12} md={6}  >
          <AnimatedBox roll={roll} sx={{ m:5,p: 2, border: '1px solid #ccc', borderRadius: 2,backgroundColor: '#1f1f1f',color:'white'}}>
            <Typography variant="h5">Rich Text Editor</Typography>
            {currentUser && <RichTextEditor userData={currentUser} />}
          </AnimatedBox>
        </Grid>
        <Grid item xs={12} md={6}>
          <AnimatedBox roll={roll} sx={{ p: 3, border: '3px solid #ccc', borderRadius: 2 }}>
            <UserData data={currentUser} /> 
          </AnimatedBox>
        </Grid>
        <Grid item xs={12} md={6}>
          <AnimatedBox roll={roll} sx={{ p: 2, border: '3px solid #ccc', borderRadius: 2 }}>
            <UserDataForm onFormSubmit={handleFormSubmit} />
          </AnimatedBox>
        </Grid>
        
      </Grid>
    </Box>
  );
};

export default HomePage;
