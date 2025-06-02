
// import React, { useEffect, useState } from 'react';
// import { getAllRooms } from '../api/roomApi';
// import { Box, Typography, Paper, Button, List, ListItem } from '@mui/material';

// function RoomList() {
//   const [rooms, setRooms] = useState([]);
//   const [visibleRoomId, setVisibleRoomId] = useState(null);

//   useEffect(() => {
//     const fetchRooms = async () => {
//       const res = await getAllRooms();
//       setRooms(res.data);
//     };
//     fetchRooms();
//   }, []);

//   const handleToggle = (roomId) => {
//     setVisibleRoomId((prev) => (prev === roomId ? null : roomId));
//   };

//   return (
//     <Box sx={{ padding: 3 }}>
//       <Typography variant="h4" gutterBottom>Dashboard</Typography>
//       {rooms.map((room) => (
//         <Paper key={room.id} sx={{ padding: 2, marginBottom: 2 }}>
//           <Typography variant="h6">{room.roomName}</Typography>
//           <Typography>Status: {room.status}</Typography>
//           <Typography>Seats: {room.noOfSeats}</Typography>
//           <Typography>Not Occupied: {room.notOccupied}</Typography>

//           <Button
//             variant="contained"
//             onClick={() => handleToggle(room.id)}
//             sx={{ marginTop: 1 }}
//           >
//             Room ID: {room.id}
//           </Button>

//           {visibleRoomId === room.id && room.employees && (
//             <List sx={{ marginTop: 2 }}>
//               {room.employees.map((emp) => (
//                 <ListItem key={emp.id}>{emp.name}</ListItem>
//               ))}
//             </List>
//           )}
//         </Paper>
//       ))}
//     </Box>
//   );
// }

// export default RoomList;


import React, { useEffect, useState } from 'react';
import { getAllRooms } from '../api/roomApi';
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
  Button,
  Collapse,
  List,
  ListItem,
} from '@mui/material';

function RoomList() {
  const [rooms, setRooms] = useState([]);
  const [visibleRoomId, setVisibleRoomId] = useState(null);


  useEffect(() => {
    const fetchRooms = async () => {
      const res = await getAllRooms();
      setRooms(res.data);
    };
    fetchRooms();
  }, []);

  const handleToggle = (roomId) => {
    setVisibleRoomId((prev) => (prev === roomId ? null : roomId));
  };
 

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>Room Dashboard</Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Seats</TableCell>
              <TableCell>Occupied</TableCell>
              <TableCell>Not Occupied</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Last Cleaned</TableCell>
              <TableCell>Projector</TableCell>
              <TableCell>Blackboard</TableCell>
              <TableCell>Building</TableCell>
              <TableCell>Employees</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rooms.map((room) => (
              <React.Fragment key={room.id}>
                <TableRow>
                  <TableCell>{room.id}</TableCell>
                  <TableCell>{room.roomName}</TableCell>
                  <TableCell>{room.noOfSeats}</TableCell>
                  <TableCell>{room.occupied}</TableCell>
                  <TableCell>{room.notOccupied}</TableCell>
                  <TableCell>{room.status}</TableCell>
                  <TableCell>{room.lastCleanedTime ? new Date(room.lastCleanedTime).toLocaleString() : 'N/A'}</TableCell>
                  <TableCell>{room.hasProjector ? 'Yes' : 'No'}</TableCell>
                  <TableCell>{room.hasBlackboard ? 'Yes' : 'No'}</TableCell>
                  <TableCell>{room.building?.name || 'N/A'}</TableCell>
                  <TableCell>
                    <Button variant="outlined" size="small" onClick={() => handleToggle(room.id)}>
                      {visibleRoomId === room.id ? 'Hide' : 'Show'}
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan={11} sx={{ paddingBottom: 0, paddingTop: 0 }}>
                    <Collapse in={visibleRoomId === room.id} timeout="auto" unmountOnExit>
                      <Box margin={1}>
                        <Typography variant="subtitle1">Employees:</Typography>
                        <List dense>
                          {room.employees?.length > 0 ? (
                            room.employees.map((emp) => (
                              <ListItem key={emp.id}>{emp.name}</ListItem>
                            ))
                          ) : (
                            <ListItem>No employees assigned</ListItem>
                          )}
                        </List>
                      </Box>
                    </Collapse>
                  </TableCell>
                </TableRow>
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default RoomList;

