import { useState } from "react";
import Footer from "./Footer";
import Prelogin from "./Prelogin";
import Registration from "./Registration";
import "./Toggle.css";
const Toggle = () => {
  const [toggle, settoggle] = useState(true);
  const toggclick = () => {
    settoggle(!toggle);
  };

  return (
    <div>
      <div className="btn">
        {toggle ? <Prelogin /> : <Registration />}
        <button type="button" onClick={toggclick} class="toggle-btn">
          {toggle ? "Register" : "Login"}
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Toggle;
