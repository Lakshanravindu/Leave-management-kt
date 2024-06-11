import React from 'react';
import { Box, Button, Card, CardContent, Typography, Avatar, Grid, Container } from '@mui/material';
import { styled } from '@mui/system';
import avatarImg from '../Images/avatar.jpg'; 


const CustomButton = styled(Button)({
  backgroundColor: '#ff7043', 
  color: '#ffffff',
  '&:hover': {
    backgroundColor: '#ff5722', 
  },
  margin: '0 8px', 
  fontSize: '12px', 
  padding: '4px 12px', 
});

const LeaveDashboard = () => {
  return (
    <Container maxWidth="md" sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start', paddingLeft: 0, marginLeft: 0 }}>
      <Box sx={{ padding: '16px', maxWidth: '800px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
          <Typography variant="h6" gutterBottom sx={{ marginRight: '6px', fontSize: '16px', fontWeight: 'bold' }}>
            On Leave
          </Typography>
          <CustomButton>Today</CustomButton>
          <CustomButton>This Week</CustomButton>
          <CustomButton>This Month</CustomButton>
        </Box>
        <Grid container spacing={2} sx={{ justifyContent: 'flex-start' }}>
          {[1, 2, 3].map((item) => (
            <Grid item xs={12} md={4} key={item}>
              <Card>
                <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
                  <Avatar
                     src={avatarImg}
                    alt="User"
                    sx={{ width: 40, height: 40, marginRight: '8px' }}
                  />
                  <Box>
                    <Typography variant="body2">Annual</Typography>
                    <Typography variant="body2">Available from May - 23</Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default LeaveDashboard;
