import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Search = () => {
  return (
    <div className="search">
      <div className="d-flex align-items-center justify-content-center  w-100 mt-3">
        <Form.Control type="text" placeholder="Search" className="w-75 " />
        <Button variant="primary" className="">
          Search
        </Button>
      </div>
      <div className="mt-3 d-flex align-items-center justify-content-evenly ">
        <Link to="/Foundpets">
          <Button variant="primary">Found Pet</Button>
        </Link>
        <Link to="/Lostpets">
          <Button variant="primary">Lost Pet</Button>
        </Link>
      </div>
    </div>
  );
};

export default Search;
