import React, { useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppContext } from '../Context/AppContext';
import { cancelAppointment } from '../redux/appointmentsSlice'; // Import the cancelAppointment action
import { assets } from '../assets/assets';
import { toast, ToastContainer  } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { doctors } from '../assets/assets';
const MyAppointments = () => {
  
  const appointments = useSelector((state) => state.appointments.appointments); // Fetch appointments from Redux store
  const dispatch = useDispatch(); // Get dispatch function from Redux
  const { currencySymbol } = useContext(AppContext);

  const handleCancelAppointment = (index) => {
    dispatch(cancelAppointment(index)); // Pass index to remove the appointment from the store
    toast.error("Appointment has been Cancelled!", {
      icon: "❌", // Red cross
      autoClose: 2000, // Disappears after 2 seconds
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
    });

  };

  return (
    <div className='min-h-[400px]'>
      <ToastContainer/>
      <p className="pb-3 mt-10 font-medium text-zinc-700 border-b border-gray-300 text-center text-[18px]">
        My Appointments
      </p>

      {appointments.length === 0 ? (
        <p className='text-center mt-50 text-[#5f6fff] text-xl ml-5'>No appointments booked yet.</p>
      ) : (
        appointments.map((appointment, index) => (
          <div
            key={index}
            className="grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b border-gray-300"
          >
            <div>
              <img
                className="w-32 bg-indigo-50"
                src={appointment.image}
                alt={appointment.name}
              />
            </div>

            <div className="flex-1 text-sm text-zinc-600">
              <p className="text-neutral-800 font-semibold">{appointment.name}</p>
              <p>{appointment.speciality}</p>
              <p className="text-zinc-700 font-medium mt-1">Address:</p>
              <p className="text-xs">{appointment.address?.line1 || "No address available"}</p>
              <p className="text-xs">{appointment.address?.line2 || ""}</p>

              <p className="text-xs mt-1">
                <span className="text-sm text-neutral-700 font-medium">Date & Time:</span>
                {new Date(appointment.date).toLocaleDateString()} | {appointment.time}
              </p>
            </div>
            <div></div>
            <div className="flex flex-col gap-2 justify-end">
              <button className="text-sm text-stone-500 text-center sm:min-w-48 py-2 border hover:bg-[#5f6fff] hover:text-white transition-all duration-300">
                Pay Online
              </button>
              <button
                className="text-sm text-stone-500 text-center sm:min-w-48 py-2 border hover:bg-red-600 hover:text-white transition-all duration-300"
                onClick={() => handleCancelAppointment(index)} // Cancel button calls the handler
              >
                Cancel Appointment
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default MyAppointments;
