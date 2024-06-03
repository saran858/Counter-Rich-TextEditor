import React from 'react';
import RichTextEditor from '../RichTextEditor';
import { useSelector } from 'react-redux';
import { Box, Typography } from '@mui/material';

const ProfilePage = () => {
  const users = useSelector((state) => state.user.users);

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>Profile Page</Typography>
      {users.map((user) => (
        <RichTextEditor key={user.id} userData={user} />
      ))}
    </Box>
  );
};

export default ProfilePage;
