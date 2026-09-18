import React from "react";

// const Navbar = (props) => {
//   return (
//     <div>
//       <h1>Username: {props.fullName}</h1>
//       <h1>Navbar</h1>
//     </div>
//   );
// };

// const Navbar = ({ fullName }) => {
//   return (
//     <div>
//       <h1>Username: {fullName}</h1>
//       <h1>Navbar</h1>
//     </div>
//   );
// };

const Navbar = (props) => {
  const { fullName, age, getSize } = props;
  const size = 100;

  const sizeHandler = () => {
    getSize(size);
  };

  const cities = ["Karachi", "Lahore", "Islamabad"];

  return (
    <div>
      <ul>
        {cities.map((city, index) => {
          return <li key={index}>{index + 1}. {city}</li>
        })}
      </ul>
      <h1>Navbar</h1>
      <h2>Username: {fullName}</h2>
      <h2>Age: {age}</h2>
      <button onClick={sizeHandler}>Handle Size</button>
    </div>
  );
};

export default Navbar;
