import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Profiles from "./pages/Profiles.jsx";
import Matches from "./pages/Matches.jsx";
import Messages from "./pages/Messages.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/profiles" element={<Profiles />} />
        <Route exact path="/matches" element={<Matches />} />
        <Route exact path="/messages" element={<Messages />} />
      </Routes>
    </Router>
  );
}

export default App;