import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Aboutpage from "./components/Aboutpage";
import Toggle from "./components/Toggle";
import Search from "./components/Search";
import Lostpets from "./components/Lostpets";
import Foundpets from "./components/Foundpets";
import Myprofile from "./components/Myprofile";
import Contact from "./components/Contact";
import Add_post from "./components/Add_post";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "./features/auth";
import Commentpost from "./components/Commentpost";
import RedirectComment from "./components/RedirectComment";
import Prelogin from "./components/Prelogin";
function App() {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));
  useEffect(() => {
    dispatch(setUser(user));
  }, []);
  return (
    <div className="App">
      <Router>
        <Header />

        <Routes>
          <Route path="/aboutpage" element={<Aboutpage />} />
          <Route path="/pages" element={<Search />} />
          <Route path="/" element={<Home />} />
          <Route path="/toggle" element={<Toggle />} />
          <Route path="/Prelogin" element={<Prelogin />} />
          <Route path="/Lostpets" element={<Lostpets />} />
          <Route path="/Foundpets" element={<Foundpets />} />
          <Route path="/Myprofile" element={<Myprofile />} />
          <Route path="/addpost" element={<Add_post />} />
          <Route path="/editpost/:id" element={<Add_post />} />
          <Route path="/editcomment/:id" element={<RedirectComment />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
