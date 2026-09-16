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
  getSize(size);
  return (
    <div>
      <h1>Navbar</h1>
      <h2>Username: {fullName}</h2>
      <h2>Age: {age}</h2>
    </div>
  );
};

export default Navbar;
