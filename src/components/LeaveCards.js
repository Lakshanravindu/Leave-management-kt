import React from 'react';
import { Box, Card, Typography, Grid } from '@mui/material';
import { styled } from '@mui/system';

const cardData = [
  { color: '#1e88e5', title: 'Pending', value: 10, textColor: '#fff' },
  { color: '#43a047', title: 'Approved', value: 10, textColor: '#fff' },
  { color: '#e53935', title: 'Reject', value: 10, textColor: '#fff' },
  { color: '#ffb300', title: 'Withdrawn', value: 10, textColor: '#fff' },
];

const StyledCard = styled(Card)(({ color }) => ({
  backgroundColor: color,
  color: '#000',
  textAlign: 'center',
  padding: '10px',
  minWidth: '25px',
  width: '85px', 
  position: 'absolute', 
  height: '100px', 
  border: `2px solid ${color}`, 
  marginLeft: 40,
  
}));

const TopOverlay = styled(Box)({
  backgroundColor: '#fff',
  width: '100%',
  height: '60%', 
  position: 'absolute',
  top: 0,
  left: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1, 
});

const ValueTypography = styled(Typography)(({ theme }) => ({
  backgroundColor: '#fff',
  color: '#000',
  borderRadius: '50%',
  width: '30px',
  height: '30px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 2, 
}));

const BottomSection = styled(Box)({
  backgroundColor: 'inherit',
  width: '100%',
  height: '40%', 
  position: 'absolute',
  bottom: 0,
  left: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 3, 
  color: '#fff', 
});

const LeaveDetails = () => {
  return (
    <Box sx={{ marginTop: '16px' }}>
    <Grid container spacing={0}> 
      {cardData.map((card, index) => (
        <Grid item xs={6} sm={1.2} key={index}>
          <StyledCard color={card.color}>
            <TopOverlay>
              <ValueTypography variant="h6">{card.value}</ValueTypography>
            </TopOverlay>
            <BottomSection>
              <Typography variant="body2" sx={{ fontSize: 'px', color: '#fff', fontWeight: 'bold' }}>
                {card.title}
              </Typography>
            </BottomSection>
          </StyledCard>
        </Grid>
      ))}
    </Grid>
  </Box>
  
  );
};

export default LeaveDetails;
