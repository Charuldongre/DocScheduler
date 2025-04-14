import { createSlice } from '@reduxjs/toolkit';

const loadAppointments = () => {
  const storedAppointments = localStorage.getItem("appointments");
  return storedAppointments ? JSON.parse(storedAppointments) : [];
};

const appointmentsSlice = createSlice({
  name: "appointments",
  initialState: {
    appointments: loadAppointments(),
  },
  reducers: {
    addAppointment: (state, action) => {
      state.appointments.push(action.payload);
      localStorage.setItem("appointments", JSON.stringify(state.appointments)); // Save to localStorage
    },
    cancelAppointment: (state, action) => {
      state.appointments.splice(action.payload, 1);
      localStorage.setItem("appointments", JSON.stringify(state.appointments)); // Save to localStorage
    },
  },
});

export const { addAppointment, cancelAppointment } = appointmentsSlice.actions;
export default appointmentsSlice.reducer;










// import { createSlice } from '@reduxjs/toolkit';

// const appointmentsSlice = createSlice({
//   name: 'appointments',
//   initialState: {
//     appointments: [], // Array to store appointments
//   },
//   reducers: {
//     addAppointment: (state, action) => {
//       state.appointments.push(action.payload);
//     },
//     cancelAppointment: (state, action) => {
//       state.appointments = state.appointments.filter((_, index) => index !== action.payload);
//     },
//   },
// });

// export const { addAppointment, cancelAppointment } = appointmentsSlice.actions;
// export default appointmentsSlice.reducer;
