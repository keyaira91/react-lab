import React from "react";
// import ReactDOM from "react-dom";



class Car extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ready: "Ready",
    }
  }

  notReady = () => {
      this.setState({ready: "Not Ready"})
  }

<<<<<<< HEAD
  ready = () => {
      this.setState({ready: "Ready"});
  
  }

=======
>>>>>>> b78c9b824c7c0009da150994c216f0804c32b293
    render() {
      const {year, color, make, model, tag} = this.props.car;
      return (
      <div>
        <h2 >{year} {color} {make}, {model} with tag # {tag}{" "}
        <button type="button" id="myBtn" onClick={this.notReady} 
        className="btn btn-sm btn-danger">{this.state.ready}</button></h2>
      </div>)};
};


    export default Car; 

