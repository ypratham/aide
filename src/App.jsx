import { Route, Routes } from "react-router-dom";
import HomeNavigation from "./components/HomeNavigation";
import AdminHome from "./pages/AdminDashboard/AdminHome";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SideNavigation from "./pages/UserDashboard/SideNavigation";
import UserHome from "./pages/UserDashboard/UserHome";
import { useUserContext } from "./utils/userContext";

function App() {
  const { user } = useUserContext();

  return (
    <>
      <Routes>
        <Route element={<HomeNavigation />}>
          <Route path="/" index element={<Home />} />
          {user == null && (
            <>
              <Route path="login" index element={<Login />} />
              <Route path="register" index element={<Register />} />
            </>
          )}
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
