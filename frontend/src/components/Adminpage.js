import React from "react";

import "./Admin.css";
import Box from "./Box";

function Adminpage() {
  return (
    <div className="body">
      <div className="menu">
        <div className="brand">
          <h1>Pet Society</h1>
        </div>
        <ul>
          <li>
            <img src="Images/dashboard.png" alt="users"></img>Dashboard
          </li>
          <li>
            <img src="Images/group.png"></img>
            Users
          </li>

          <li>
            <img src="Images/sett.png"></img>Settings
          </li>
          <li>
            {" "}
            <img src="Images/help.jpg" alt="users"></img>Help
          </li>
        </ul>
      </div>
      <div className="contenair">
        <div className="header">
          <div className="nav">
            <div className="search">
              <input type="text" placeholder="Quick Search" />
              <button type="submit">
                <img src="Images/search.png" alt="search"></img>
              </button>
            </div>
            <div className="user">
              <a href="#" class="btn">
                Delete an user
              </a>
              <img src="Images/notification.png" alt="notification"></img>
              <div className="img-case">
                <img src="Images/avatar.jpg" alt="notification"></img>
              </div>
            </div>
          </div>
        </div>
        {/*fffgggghhh*/}
        <div className="contentbox">
          <div className="box-content">
            <Box
              title={"Lost pet"}
              img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsIfIxHKkRRLAWTBYawXBMlLIrK9jWYZM9ig&usqp=CAU"
              total={"170"}
              number="Total Number"
            />
          </div>
          <div className="box-content">
            <Box
              title={"Found Pet"}
              img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaus8O2kdrSaG40QLaJkJTt7XDyVVOnh3D6w&usqp=CAU"
              total={"350"}
              number="Total Number"
            />
          </div>
          <div className="box-content">
            <Box
              title={"Users"}
              img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpKMW8aqrxdeG_x6rbDAO5A8tHgQxyHVw37A&usqp=CAU"
              total={"810"}
              number="total Number"
            />
          </div>
        </div>
        <div className="content2">
          <div className="sponsor">
            <div className="title2">
              <h2>Actif users </h2>
              <a href="#" class="btn">
                View All
              </a>
            </div>
          </div>
          <div className="newUser">
            {" "}
            <div className="title2">
              <h2>New users </h2>
              <a href="#" class="btn">
                View All
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Adminpage;
