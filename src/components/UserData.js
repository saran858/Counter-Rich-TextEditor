import React from 'react';
import {Button, Box, Typography, TextField } from '@mui/material';

const UserData = ({ data }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }} >
      <Typography variant="h5" gutterBottom>User Data JSON Object</Typography>
      <TextField
        label="Name"
        value={data?.name || ''}
        variant="outlined"
        fullWidth
       
        InputProps={{
          readOnly: true,
        }}
      />
      <TextField
        label="ID"
        value={data?.id || ''}
        variant="outlined"
        fullWidth
       
        InputProps={{
          readOnly: true,
        }}
      />
     
      <TextField
        label="Email"
        value={data?.email || ''}
        variant="outlined"
        fullWidth
       
        InputProps={{
          readOnly: true,
        }}

      />
      <Button type="submit" variant="contained" >Save</Button> 
    </Box>
  );
};

export default UserData;

