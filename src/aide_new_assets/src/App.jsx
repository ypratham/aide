import { Route, Routes } from "react-router-dom";
import HomeNavigation from "./components/HomeNavigation";
import AdminHome from "./pages/AdminDashboard/AdminHome";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SideNavigation from "./pages/UserDashboard/SideNavigation";
import UserHome from "./pages/UserDashboard/UserHome";
import React from "react";

function App() {
  return (
    <>
      <Routes>
        <Route element={<HomeNavigation />}>
          <Route path="/" index element={<Home />} />
          <Route path="login" index element={<Login />} />
        </Route>
        <Route path="dashboard" element={<SideNavigation />}>
          <Route path="/dashboard/user" index element={<UserHome />} />
          <Route path="/dashboard/admin" element={<AdminHome />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
