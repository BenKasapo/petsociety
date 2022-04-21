import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

const style = {
  width: "100%",
  height: "50%",
  margin: "20px 0px  ",
  border: "10px solid #909090",
};
export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
    mapCenter: { lat: 35.330529, lng: 33.309899 },
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };

  render() {
    return (
      <Map
        google={this.props.google}
        initialCenter={{
          lat: this.state.mapCenter.lat,
          lng: this.state.mapCenter.lat,
        }}
        style={style}
      >
        <Marker onClick={this.onMarkerClick} name={"Current location"} />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyA-usanwtzHUw2lU6MCU7X6_Rvqtd6gJ3g",
})(MapContainer);
