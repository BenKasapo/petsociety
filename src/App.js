import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Search from "./Components/Search";
import Lostpets from "./Components/Lostpets";
import Foundpets from "./Components/Foundpets";
import Comments from "./Components/Comments";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Search />
        <Routes>
          <Route path="/Lostpets" element={<Lostpets />} />
          <Route path="/Foundpets" element={<Foundpets />} />
        </Routes>
        <Comments
          commentsUrl="http://localhost:3000/comments"
          currentUserId="1"
        />
      </Router>
    </div>
  );
};

export default App;
