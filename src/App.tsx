import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import { UserPage } from "./pages/UserPage/UserPage";
import { RegisterPage } from "./pages/RegisterPage/RegisterPage";
import { ProtectedRoute } from "./features/auth/components/ProtectedRoute/ProtectedRoute";
import "./App.css";

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/userDetail/:userId"
          element={
            <ProtectedRoute>
              <UserPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};
