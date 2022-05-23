import { useState } from "react";
import Footer from "./Footer";
import Prelogin from "./Prelogin";
import Registration from "./Registration";
import "./Toggle.css";
import { Button } from "react-bootstrap";
const Toggle = () => {
  const [toggle, settoggle] = useState(true);
  const toggclick = () => {
    settoggle(!toggle);
  };

  return (
    <div>
      <div className="btn2 ">
        <Button className="btn mt-2 mx-2" type="button" onClick={toggclick}>
          {toggle ? "Register" : "Login"}
        </Button>
        {toggle ? <Prelogin /> : <Registration />}
      </div>
      <Footer />
    </div>
  );
};

export default Toggle;
