import React from "react";
import Garage from "./garage";
import "./garage.css"
// import ReactDOM from "react-dom";



class Car extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ready: "Ready",
      needsWork: false,
    }
  }
  notReady = () => {
      this.setState({ ready: "Not Ready", needsWork: true });
      if(this.state.ready === "Not Ready") {
        this.isReady()
      }

  }

  isReady = () => {
      this.setState({ready: "Ready", needsWork: false});
  }

    render() {
      const {year, color, make, model, tag} = this.props.car;
      return (
      <div>
        <h2 className={this.state.needsWork ? "needsWork" : " "}
        >{year} {color} {make}, {model} with tag # {tag}{" "}
        <button type="button" onClick={this.notReady}  
        className="btn btn-sm btn-danger">{this.state.ready}</button></h2>
      </div>)};
};


    export default Car; 

