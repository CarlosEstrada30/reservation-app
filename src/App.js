

import React, { useState } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";

import { ProtectedRoute } from "./components/protectedRoute/ProtectedRoute";
import CalendarPage from "./pages/Calendar";
import PublicCalendar from "./pages/PublicCalendar";
import Login from './components/login/Login'

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
      {user ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <button onClick={login}>Login</button>
      )}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<ProtectedRoute isAllowed={!!user} />}>
          <Route path="/calendar" element={<CalendarPage/>} />
          <Route path="/public-calendar" element={<PublicCalendar/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    );
  }

export default App;