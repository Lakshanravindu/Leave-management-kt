// src/components/LeaveTable.js
import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Box } from '@mui/material';

const createData = (status, user, type, startDate, endDate, days, reason) => {
  return { status, user, type, startDate, endDate, days, reason };
};

const rows = [
  createData('Pending', 'John Doe', 'Sick', '2023-06-01', '2023-06-05', 5, 'Fever'),
  createData('Approved', 'Jane Smith', 'Vacation', '2023-07-01', '2023-07-10', 10, 'Vacation'),
  createData('Rejected', 'Mary Johnson', 'Sick', '2023-08-01', '2023-08-05', 5, 'Cold'),
  createData('Withdrawn', 'James Brown', 'Other', '2023-09-01', '2023-09-03', 3, 'Personal'),
];

const LeaveTable = () => {
  return (
    <TableContainer component={Paper} sx={{ width: '68%', marginTop: 20, marginLeft: 4 }}>
      <Table aria-label="leave table">
        <TableHead>
          <TableRow>
            <TableCell>Status</TableCell>
            <TableCell>User</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Start Date</TableCell>
            <TableCell>End Date</TableCell>
            <TableCell>Days</TableCell>
            <TableCell>Reason</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              <TableCell>
              <Box
                  sx={{
                    width: 20,
                    height: 20,
                    borderRadius: '50%',
                    bgcolor:
                      row.status === 'Pending'
                        ? 'blue'
                        : row.status === 'Approved'
                        ? 'green'
                        : row.status === 'Rejected'
                        ? 'red'
                        : 'gray',
                  }}
                />
                
              </TableCell>
              <TableCell>{row.user}</TableCell>
              <TableCell>{row.type}</TableCell>
              <TableCell>{row.startDate}</TableCell>
              <TableCell>{row.endDate}</TableCell>
              <TableCell>{row.days}</TableCell>
              <TableCell>{row.reason}</TableCell>
              <TableCell>
                <Button variant="contained" color="success" size="small" sx={{ marginRight: 1 }}>
                  Approve
                </Button>
                <Button variant="contained" color="error" size="small" sx={{ marginRight: 1 }}>
                  Reject
                </Button>
                <Button variant="contained" color="warning" size="small">
                  Withdraw
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default LeaveTable;
