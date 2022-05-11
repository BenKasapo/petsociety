import Header from "./components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Aboutpage from "./components/Aboutpage";
import Toggle from "./components/Toggle";
import Search from "./components/Search";
import Lostpets from "./components/Lostpets";
import Foundpets from "./components/Foundpets";
import Myprofile from "./components/Myprofile";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Routes>
          <Route path="/aboutpage" element={<Aboutpage />} />
          <Route path="/pages" element={<Search />} />
          <Route path="/" element={<Home />} />
          <Route path="/toggle" element={<Toggle />} />
          <Route path="/Lostpets" element={<Lostpets />} />
          <Route path="/Foundpets" element={<Foundpets />} />
          <Route path="/Myprofile" element={<Myprofile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
