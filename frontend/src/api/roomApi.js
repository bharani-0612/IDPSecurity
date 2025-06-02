// Handles room allocation and maintenance
// import axios from 'axios';

// const BASE_URL = 'http://localhost:8083';

// export const getAllRooms = () => axios.get(`${BASE_URL}/api/listRooms`);


// export const getAllEmployees = async () => {
//       return await axios.get(`${BASE_URL}/api/listEmployees`);
//     };

    
// export const updateEmployeeRoom = async (empId, newRoomId) => {
//       return await axios.put(`${BASE_URL}/api/updateEmployee/${empId}/${newRoomId}`);
//     };

    //
    //
    //

    // src/api.js
import axios from 'axios';

// Use API Gateway URL
const BASE_URL = 'http://localhost:8083/api';
// localStorage.setItem('isLoggedIn',true);

export const getAllRooms = () => axios.get(`${BASE_URL}/listRooms`, { withCredentials: true });

export const getAllEmployees = () => axios.get(`${BASE_URL}/listEmployees`, { withCredentials: true });

export const updateEmployeeRoom = (empId, newRoomId) =>
  axios.put(`${BASE_URL}/updateEmployee/${empId}/${newRoomId}`, {}, { withCredentials: true });


    
// export const listEmployeesBasedOnRoomId = () => axios.get(`${BASE_URL}/api/listEmployeesBasedOnRoomId`);

// export const updateRoomStatus = (roomId, status) =>
//   axios.post(`${BASE_URL}/api/${roomId}/updateStatus`, null, {
//     params: { status },
//   });

// export const assignStaff = (roomId, staffId) =>
//   axios.put(`${BASE_URL}/api/${roomId}/assign/${staffId}`);

// export const filterRooms = (params) =>
//   axios.get(`${BASE_URL}/api/filter`, { params });

// Handles room allocation and maintenance
//
//
//
    // import axios from 'axios';

    // const BASE_URL = 'http://localhost:8083';
    // const axiosConfig = { withCredentials: true };

    // export const getAllRooms = () => axios.get(`${BASE_URL}/api/listRooms`, axiosConfig);

    // export const getAllEmployees = async () => {
    // return await axios.get(`${BASE_URL}/api/listEmployees`, axiosConfig);
    // };

    // export const updateEmployeeRoom = async (empId, newRoomId) => {
    // return await axios.put(`${BASE_URL}/api/updateEmployee/${empId}/${newRoomId}`, null, axiosConfig);
    // };

    //
    //
    //
// Uncomment and update the rest similarly if needed:

// export const listEmployeesBasedOnRoomId = () => axios.get(`${BASE_URL}/api/listEmployeesBasedOnRoomId`, axiosConfig);

// export const updateRoomStatus = (roomId, status) =>
//   axios.post(`${BASE_URL}/api/${roomId}/updateStatus`, null, {
//     ...axiosConfig,
//     params: { status },
//   });

// export const assignStaff = (roomId, staffId) =>
//   axios.put(`${BASE_URL}/api/${roomId}/assign/${staffId}`, null, axiosConfig);

// export const filterRooms = (params) =>
//   axios.get(`${BASE_URL}/api/filter`, { ...axiosConfig, params });

