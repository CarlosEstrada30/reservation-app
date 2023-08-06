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
  console.log(isLogin)
  return (
    <BrowserRouter>
      <div>
      {isLogin == true  &&
        <CustomAppBar />
      }
        <Routes>
        <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<ProtectedRoute redirectTo="/login"><PublicCalendar/></ProtectedRoute>} />
          <Route path="/calendar" element={<PublicCalendar />} />
        </Routes>
       
      </div>
    </BrowserRouter>
  );
}

export default App;
