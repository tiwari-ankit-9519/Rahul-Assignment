import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import { useSelector } from "react-redux";
import LoginPage from "./pages/LoginPage";

function App() {
  const { isAuthenticated } = useSelector((state) => state.auth); // Get the isAuthenticated state from the Redux store

  return (
    <div className="">
      {isAuthenticated && <Navbar />}
      <Routes>
        // Navigate to HomePage if user is authenticated
        <Route
          path="/"
          element={isAuthenticated ? <HomePage /> : <Navigate to="/login" />}
        />
        // Login Page Component
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}
export default App;
