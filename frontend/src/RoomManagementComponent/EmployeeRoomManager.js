import React, { useEffect, useState } from 'react';
import { getAllRooms, getAllEmployees, updateEmployeeRoom } from '../api/roomApi';
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Select,
  MenuItem,
  Button,
  FormControl,
  InputLabel,
  Snackbar,
  Alert,
} from '@mui/material';

function EmployeeRoomManager() {
  const [employees, setEmployees] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [selectedRooms, setSelectedRooms] = useState({});
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [errorOpen, setErrorOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const roomRes = await getAllRooms();
      const empRes = await getAllEmployees();
      setRooms(roomRes.data);
      setEmployees(empRes.data);
    };
    fetchData();
  }, []);

  const handleRoomChange = (empId, newRoomId) => {
    setSelectedRooms((prev) => ({
      ...prev,
      [empId]: newRoomId,
    }));
  };

  const handleUpdate = async (empId) => {
    const newRoomId = selectedRooms[empId];
    if (!newRoomId) return;

    try {
      await updateEmployeeRoom(empId, newRoomId);
      const empRes = await getAllEmployees();
      setEmployees(empRes.data);
      setSnackbarOpen(true); // Show success message
    } catch (error) {
      const message = error.response?.data?.message || 'Failed to update room';
      setErrorMessage(message);
      setErrorOpen(true); // Show error message
    }
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>Employee Room Manager</Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Employee Name</TableCell>
              <TableCell>Current Room</TableCell>
              <TableCell>New Room</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employees.map((emp) => (
              <TableRow key={emp.id}>
                <TableCell>{emp.name}</TableCell>
                <TableCell>{emp.room?.roomName || 'Unassigned'}</TableCell>
                <TableCell>
                  <FormControl fullWidth>
                    <InputLabel>New Room</InputLabel>
                    <Select
                      value={selectedRooms[emp.id] || ''}
                      label="New Room"
                      onChange={(e) => handleRoomChange(emp.id, e.target.value)}
                    >
                      {rooms.map((room) => (
                        <MenuItem key={room.id} value={room.id}>
                          {room.roomName}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    onClick={() => handleUpdate(emp.id)}
                    disabled={!selectedRooms[emp.id]}
                  >
                    Update
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Success Snackbar */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={() => setSnackbarOpen(false)} severity="success" sx={{ width: '100%' }}>
          Room is updated!
        </Alert>
      </Snackbar>

      {/* Error Snackbar */}
      <Snackbar
        open={errorOpen}
        autoHideDuration={4000}
        onClose={() => setErrorOpen(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={() => setErrorOpen(false)} severity="error" sx={{ width: '100%' }}>
          {errorMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default EmployeeRoomManager;
