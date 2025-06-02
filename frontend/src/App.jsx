import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Tabs, Tab, Button, Box } from '@mui/material';

import RoomList from './RoomManagementComponent/RoomList';
import EmployeeRoomManager from './RoomManagementComponent/EmployeeRoomManager';
import AssignEmployeeToRoom from './RoomManagementComponent/AssignEmployeeToRoom';

function App() {
  const [value, setValue] = React.useState(0);

  const handleLogout = () => {
    window.location.href = 'http://localhost:8083/showMyLoginPage';
  };

  return (
    <Router>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Tabs value={value} onChange={(e, newValue) => setValue(newValue)}>
          <Tab label="RoomList" component={Link} to="/" />
          <Tab label="Update Employee Room" component={Link} to="/updateEmployee" />
          <Tab label="Assign Employee" component={Link} to="/assingEmployeesToRoom" />
        </Tabs>
        <Button onClick={handleLogout} variant="outlined" color="error" sx={{ marginRight: 2 }}>
          Logout
        </Button>
      </Box>

      <Routes>
        <Route path="/" element={<RoomList />} />
        <Route path="/updateEmployee" element={<EmployeeRoomManager />} />
        <Route path="/assingEmployeesToRoom" element={<AssignEmployeeToRoom />} />
      </Routes>
    </Router>
  );
}

export default App;
