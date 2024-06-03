import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from './redux/userSlice';
import { Box, Button, TextField } from '@mui/material';

const UserDataForm = ({ onFormSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    email: '',
    phone: '',
  });
  const dispatch = useDispatch();

  useEffect(() => {
    const handleBeforeUnload = (e) => {
      if (formData.name || formData.address || formData.email || formData.phone) {
        e.preventDefault();
        e.returnValue = '';
      }
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [formData]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = { ...formData, id: Date.now().toString() };
    dispatch(addUser(userData));
    localStorage.setItem('users', JSON.stringify(userData));
    setFormData({ name: '', address: '', email: '', phone: '' });
    onFormSubmit(userData); // Notify HomePage of new user data
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column' }}>
      <TextField name="name" label="Name" value={formData.name} onChange={handleChange} fullWidth />
      <TextField name="address" label="Address" value={formData.address} onChange={handleChange} fullWidth />
      <TextField name="email" label="Email" value={formData.email} onChange={handleChange} fullWidth />
      <TextField name="phone" label="Phone" value={formData.phone} onChange={handleChange} fullWidth />
      <Button type="submit" variant="contained">Save</Button>
    </Box>
  );
};

export default UserDataForm;
