import React, { Component } from "react";

export class Location extends Component {
  render() {
    return (
      <div className="bigcont">
        <h3>current location </h3>
        <button onClick={this.getlocation}>Get coordinate</button>
        <p>Latitude: {this.state.latitude}</p>
        <p>Longitude: {this.state.longitude}</p>
        <p>Address: {this.state.userAdress}</p>
      </div>
    );
  }
}

export default Location;
