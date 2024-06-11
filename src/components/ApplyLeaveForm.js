import React, { useState } from 'react';
import { Container, TextField, Button, Typography, MenuItem, Card } from '@mui/material';
import { Box } from '@mui/system';

const ApplyLeaveForm = () => {
  const [name, setName] = useState('');
  const [leaveType, setLeaveType] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [numberOfDays, setNumberOfDays] = useState('');
  const [reason, setReason] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleLeaveTypeChange = (event) => {
    setLeaveType(event.target.value);
  };

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  const handleNumberOfDaysChange = (event) => {
    setNumberOfDays(event.target.value);
  };

  const handleReasonChange = (event) => {
    setReason(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
    console.log({ leaveType, startDate, endDate, reason });
  };

  return (
    <Container maxWidth="sm" sx={{ position: 'absolute', top: '70px', right: '16px', width: '30%' }}>
      <Box
        component="form"
        noValidate
        onSubmit={handleSubmit}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px', 
          backgroundColor: 'white',
          padding: '16px', 
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Typography variant="h6" gutterBottom>
          Apply for Leave
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}> {/* Reduced margin-bottom */}
          <Card sx={{ width: '90px', height: '50px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', borderRadius: '8px', border: '1px solid orange' }}> {/* Reduced height */}
            <Box sx={{ width: '100%', bgcolor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Typography variant="body1" sx={{ color: 'black' }}>10/14</Typography>
            </Box>
            <Box sx={{ width: '100%', bgcolor: 'red', display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottomLeftRadius: '8px', borderBottomRightRadius: '8px' }}>
              <Typography variant="body1" sx={{ color: 'white' }}>Annual</Typography>
            </Box>
          </Card>
          <Card sx={{ width: '90px', height: '50px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', borderRadius: '8px', border: '1px solid orange' }}>
            <Box sx={{ width: '100%', bgcolor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Typography variant="body1" sx={{ color: 'black' }}>3/7</Typography>
            </Box>
            <Box sx={{ width: '100%', bgcolor: 'red', display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottomLeftRadius: '8px', borderBottomRightRadius: '8px' }}>
              <Typography variant="body1" sx={{ color: 'white' }}>Casual</Typography>
            </Box>
          </Card>
          <Card sx={{ width: '90px', height: '50px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', borderRadius: '8px', border: '1px solid orange' }}>
            <Box sx={{ width: '100%', bgcolor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Typography variant="body1" sx={{ color: 'black' }}>2/7</Typography>
            </Box>
            <Box sx={{ width: '100%', bgcolor: 'red', display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottomLeftRadius: '8px', borderBottomRightRadius: '8px' }}>
              <Typography variant="body1" sx={{ color: 'white' }}>Sick</Typography>
            </Box>
          </Card>
        </Box>
        <TextField
          label="Name"
          value={name}
          onChange={handleNameChange}
          variant="outlined"
          fullWidth
          required
          sx={{ height: '50px' }} 
        />
        <TextField
          select
          label="Leave Type"
          value={leaveType}
          onChange={handleLeaveTypeChange}
          variant="outlined"
          fullWidth
          required
          sx={{ height: '60px' }} 
        >
          <MenuItem value="Sick">Sick</MenuItem>
          <MenuItem value="Vacation">Vacation</MenuItem>
          <MenuItem value="Other">Other</MenuItem>
        </TextField>
        <TextField
          label="Start Date"
          type="date"
          value={startDate}
          onChange={handleStartDateChange}
          variant="outlined"
          fullWidth
          required
          InputLabelProps={{
            shrink: true,
          }}
          sx={{ height: '60px' }} 
        />
        <TextField
          label="End Date"
          type="date"
          value={endDate}
          onChange={handleEndDateChange}
          variant="outlined"
          fullWidth
          required
          InputLabelProps={{
            shrink: true,
          }}
          sx={{ height: '50px' }} 
        />
        <TextField
          label="Number of Days"
          value={numberOfDays}
          onChange={handleNumberOfDaysChange}
          variant="outlined"
          fullWidth
          required
          sx={{ height: '50px' }} 
        />
        <TextField
          label="Reason"
          value={reason}
          onChange={handleReasonChange}
          variant="outlined"
          fullWidth
          multiline
          rows={3} 
          required
        />
        <Button type="submit" variant="contained" color="primary" sx={{ height: '36px' }}> 
          Submit
        </Button>
      </Box>
    </Container>
  );
};

export default ApplyLeaveForm;
