import React from "react";
// import Garage from "./garage";
import "./garage.css"
// import ReactDOM from "react-dom";



class Car extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ready: "Take Out of Service",
      needsWork: false,
    }
  }

  notReady = () => {
      this.setState({ ready: "Make Available", needsWork: true });
      if(this.state.ready === "Make Available") {
        this.isReady()
      }
  }

  isReady = () => {
      this.setState({ready: "Take Out of Service", needsWork: false});
  }

    render() {
      const {year, color, make, model, tag} = this.props.car;
      return (
      <div> 
          <div className="float-left">
        <h2 className={this.state.needsWork ? "needsWork" : " "}>
           {year} {color} {make}, {model} with tag # {tag}{" "}</h2>
         </div>
         <div className="float-right">
            <button type="button" onClick={this.notReady}  
            className="btn btn-sm btn-danger">{this.state.ready}</button>{" "}
            
            <button type="button" className="btn btn-sm btn-primary">Drive</button>
          </div>
      </div>
      )};
};


// class Car extends React.Component {
//   state = {
//     ready: true,
//   };

//   handleReady = () => {
//     this.setState({ ready: !this.state.ready });
//   };

//   render() {
//     const { make, model, year, color, tag } = this.props.car;

//     return (
//       <h2
//         className={!this.state.ready ? "needswork" : " "}
//         style={{ color: color }}
//       >
//         I am a {color} {year} {make} {model} with tag {tag}!
//         <button
//           onClick={this.handleReady}
//           className={
//             "btn btn-sm ml-2 " +
//             (!this.state.ready ? "btn-success" : "btn-warning")
//           }
//         >
//           {!this.state.ready ? "Ready" : "Needs Work"}
//         </button>
//       </h2>
//     );
//   }
// }

    export default Car; 

