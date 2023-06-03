

import React, { useState } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";

import { ProtectedRoute } from "./components/protectedRoute/ProtectedRoute";
import CalendarPage from "./pages/Calendar";
import PublicCalendar from "./pages/PublicCalendar";
import NewReservation from "./pages/NewReservation";
import LoginPage from './pages/Login'

import "./App.css";

function App() {
  const [user, setUser] = useState(null);

  const login = () =>
    setUser({
      id: 1,
      name: "John",
      permissions: ["analize"],
      roles: ["admin"],
    });
  const logout = () => setUser(null);

    return (
      <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        
        <Route>
          <Route path="/" element={<ProtectedRoute redirectTo="/login"><CalendarPage/></ProtectedRoute>} />
          <Route path="/public-calendar" element={<PublicCalendar/>} />
          <Route path="/reservation" element={<NewReservation/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    );
  }

export default App;