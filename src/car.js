import React from "react";
import ReactDOM from "react-dom";



class Car extends React.Component {
  constructor() {
    super();
    this.state = {};
    var notReady = document.getElementById("myBtn")
}

  changeReady = (notReady) => {
    this.setState({textDecoration: "line-trough"});
  }

    render() {
      const {year, color, make, model, tag} = this.props.car;
      return (
      <div>
        <h2>{year} {color} {make}, {model} with tag # {tag}{" "}
        <button type="button" id="myBtn" onClick={this.changeReady} 
        className="btn btn-sm btn-danger">Ready</button></h2>
      </div>)};
};


    export default Car; 

