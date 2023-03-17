import { Route, Routes } from "react-router-dom";
import HomeNavigation from "./components/HomeNavigation";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <Routes>
        <Route element={<HomeNavigation />}>
          <Route path="/" index element={<Home />} />
          <Route path="login" index element={<Login />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
