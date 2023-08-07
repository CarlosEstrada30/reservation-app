import React from "react";
import { ProtectedRoute } from "./components/protectedRoute/ProtectedRoute";
import LoginPage from './pages/Login'
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
// import { ProtectedRoute } from "./components/protectedRoute/ProtectedRoute";
// import CalendarPage from "./pages/Calendar";
import PublicCalendar from "./pages/PublicCalendar";
import NewReservation from "./pages/NewReservation";
// import LoginPage from "./pages/Login";
import CustomAppBar from "./components/appBar/AppBar";

// import "./App.css";

function App() {
  const isLogin = localStorage.getItem("reservation_jwt") ? true : false;
  return (
    <BrowserRouter>
      <div>
      {isLogin == true  &&
        <CustomAppBar />
      }
        <Routes>
        <Route path="/login" element={<LoginPage />} />
          <Route path="/reservation-app" element={<ProtectedRoute redirectTo="/login"><PublicCalendar/></ProtectedRoute>} />
        </Routes>
       
      </div>
    </BrowserRouter>
  );
}

export default App;
