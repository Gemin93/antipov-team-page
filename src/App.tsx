import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import { UserPage } from "./pages/UserPage/UserPage";
import "./App.css";
import { AuthPage } from "./pages/AuthPage/AuthPage";

export const App = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route path="/" element={<AuthPage />} />
        <Route path="/userDetail/:userId" element={<UserPage />} />
      </Routes>
    </Router>
  );
};
