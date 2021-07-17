import React from "react";
import ReactDOM from "react-dom";



class Car extends React.Component {

    render() {
      const {year, color, make, model, tag} = this.props.car;
      return (
      <h2>
        I'm a {year} {color} {make}, {model} with a tag {tag}</h2>
        );
      } 
    }


    export default Car; 

