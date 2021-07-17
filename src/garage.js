import React from "react";
import ReactDOM from "react-dom";
import Car from "./car";
import "./garage.css";

class Garage extends React.Component {
  doCarThingy(car) {
    return <Car car={car}/>;
  }
  render() {
    return (
      <div className="garage">
        <h1 >{this.props.garages.owner}'s Garage</h1>
        {this.props.cars.map(this.doCarThingy)}
      </div>
    );
  }
}
  
  export default Garage;
  
  
  
