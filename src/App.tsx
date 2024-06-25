import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import { UserPage } from "./pages/UserPage/UserPage";
import { AuthPage } from "./pages/AuthPage/AuthPage";
import { useSelector } from "react-redux";
import { RootState } from "./app/store";
import "./App.css";

export const App = () => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={isAuthenticated ? <HomePage /> : <Navigate to="/auth" />}
        />
        <Route
          path="/userDetail/:userId"
          element={isAuthenticated ? <UserPage /> : <Navigate to="/auth" />}
        />
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </Router>
  );
};
