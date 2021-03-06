import "./Contact.css";
import Footer from "./Footer";

const Contact = () => {
  return (
    <div>
      <div className="form">
        <div className="title">Welcome</div>
        <div className="subtitle">Fill the Form !</div>
        <div className="input-container ic1">
          <input id="firstname" className="input" type="text" placeholder=" " />
          <div className="cut"></div>
          <label for="firstname" className="placeholder">
            Your name
          </label>
        </div>
        <div className="input-container ic2">
          <input id="lastname" className="input" type="text" placeholder=" " />
          <div className="cut cut-short"></div>
          <label for="lastname" className="placeholder">
            Your Last name
          </label>
        </div>
        <div className="input-container ic2">
          <input id="email" className="input" type="text" placeholder=" " />
          <div className="cut "></div>
          <label for="email" className="placeholder">
            Email
          </label>
        </div>
        <div className="input-container ic2">
          <input id="email" className="input" type="text" placeholder=" " />
          <div className="cut cut-short"></div>
          <label for="email" className="placeholder">
            Telephone number
          </label>
        </div>
        <div className="input-container ic2">
          <input id="email" className="input" type="text" placeholder=" " />
          <div className="cut "></div>
          <label for="email" className="placeholder">
            Pet Type
          </label>
        </div>
        <div className="input-container ic2">
          <input id="email" className="input" type="text" placeholder=" " />
          <div className="cut "></div>
          <label for="email" className="placeholder">
            Pet name
          </label>
        </div>
        <div className="input-container ic2">
          <input id="email" className="input" type="text" placeholder=" " />
          <div className="cut "></div>
          <label for="email" className="placeholder">
            Pet Color
          </label>
        </div>
        <div className="input-container ic2">
          <input id="email" className="input" type="text" placeholder=" " />
          <div className="cut "></div>
          <label for="email" className="placeholder">
            Pet picture
          </label>
        </div>
        <div className="input-container ic2">
          <input id="email" className="input" type="text" placeholder=" " />
          <div className="cut"></div>
          <label for="email" className="placeholder">
            Localisation
          </label>
        </div>

        <button type="text" className="submit">
          SUBMIT
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
