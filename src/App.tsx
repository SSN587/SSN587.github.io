import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from "./Home";
import Search from "./Search";
import Profile from "./Profile";

const App = () => {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<Navigate to="/main" />} />
        <Route path="/main" element={<HomePage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/search" element={<Search />} />

      </Routes>
    </Router>
  );
};

export default App;
