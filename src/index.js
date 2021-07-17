import React from "react";
import ReactDOM from "react-dom";
import Garage from "./garage";

const cars = [
  {
    make: "Mercedes-Benz",
    model: "A-Class",
    color: "Red",
    year: 2020,
    tag: "FL H56789",
  },
  {
    make: "Telsa",
    model: "Model 3",
    year: 2021,
    color: "Purple",
    tag: "FL 5D5G77",
  },
  {
    make: "Hyundai",
    model: "Elantra",
    color: "Black",
    year: 2020,
    tag: " VA ILU4EVR",
  },
  {
    make: "Honda",
    model: "CR-V",
    year: 2019,
    color: "Green",
    tag: "ME GAS314",
  },
  {
    make: "Tesla",
    model: "Model X",
    year: 2021,
    color: "Silver",
    tag: "EL0NRCKS",
  },
];

const garages = [
  {
    owner: "Keyaira"
  },
  {
    owner: "Elon"
  },
  {
    owner: "Richard"
  },
];

ReactDOM.render(
  <div>
    
    <Garage garages={garages[0]} cars={cars.slice(0, 1)} />
    <Garage garages={garages[1]} cars={cars.slice(2, 5)} />
    <Garage garages={garages[2]} cars={cars.slice(0, 5)} />
  </div>,
  document.getElementById("root")
);