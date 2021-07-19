import React from "react";
import Garage from "./garage";
// import ReactDOM from "react-dom";



class Car extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ready: "Ready",
    }
  }
  notReady = () => {
    var style = <div style={{textDecoration : "line-through"}}></div>;
      this.setState({ready: "Not Ready", style});
      if(this.state.ready === "Not Ready") {
        this.isReady()
      }
  }

  isReady = () => {
      this.setState({ready: "Ready"});
  
  }

    render() {
      const {year, color, make, model, tag} = this.props.car;
      return (
      <div>
        <h2 >{year} {color} {make}, {model} with tag # {tag}{" "}
        <button type="button" onClick={this.notReady}  
        className="btn btn-sm btn-danger">{this.state.ready}</button></h2>
      </div>)};
};


    export default Car; 

