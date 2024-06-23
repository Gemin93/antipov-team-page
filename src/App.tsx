import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import { UserPage } from "./pages/UserPage/UserPage";
import "./App.css";

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/userDetail/:userId" element={<UserPage />} />
      </Routes>
    </Router>
  );
};
<>
  <HomePage />
  <UserPage />
</>;
