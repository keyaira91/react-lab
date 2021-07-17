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
      <div className="container">
        <div className="card mb-3 mt-3">
          <div className="garage card-body">
            <h1>{this.props.garages.owner}'s Garage</h1>
           <p>{this.props.cars.map(this.doCarThingy)}</p>
          </div>
        </div>
      </div>
    );
  }
}
  
  export default Garage;
  
  
  
