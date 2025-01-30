import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Doctors from './Pages/Doctors';
import About from './Pages/About';
import Login from './Pages/Login';
import Contact from './Pages/Contact';
import MyProfile from './Pages/MyProfile';
import MyAppointments from './Pages/MyAppointments';
import Appointment from './Pages/Appointment';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { Provider } from "react-redux";
import { store } from "./redux/store";

const App = () => {
  return (
    <Provider store={store}> 
      <div className="mx-4 sm:mx-[10%]">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/doctors" element={<Doctors/>}/>
          <Route path="/doctors/:speciality" element={<Doctors/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/my-profile" element={<MyProfile/>}/>
          <Route path="/my-appointments" element={<MyAppointments/>}/>
          <Route path="/appointment/:docId" element={<Appointment/>}/>
        </Routes>
        <Footer/>
      </div>
    </Provider>
  );
}

export default App;
