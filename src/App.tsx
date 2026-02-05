import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/index.css";
import MainPage from "./pages/MainPage";
import CommitteePurpose from "./pages/CommitteePurpose";
import Login from "./pages/001/Login";
import CommitteeLogin from "./pages/001/CommitteeLogin";
import Env01 from "./pages/002/Env-01";
import ScrollToTop from "./components/ScrollToTop";
import ScrollToTopButton from "./components/layout/ScrollToTop";

function App() {
  return (
    <Router basename="/edc-seoul">
      <ScrollToTop />
      <ScrollToTopButton />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/committee/purpose" element={<CommitteePurpose />} />
        <Route path="/env/info" element={<Env01 />} />
        <Route path="/login" element={<Login />} />
        <Route path="/committee/login" element={<CommitteeLogin />} />
      </Routes>
    </Router>
  );
}

export default App;
