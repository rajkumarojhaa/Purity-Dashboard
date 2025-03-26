import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Watchlist from "./components/Watchlist";
import AppStack from "./components/AppStack";

function App() {
  return (
    <Router>
      <div className="flex">
        <div className="flex-1">
          <Navbar />
          {/* Navbar always visible */}   
          <Routes>
            <Route path="/" element={<Watchlist />} />
            <Route path="/appstack" element={<AppStack />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
