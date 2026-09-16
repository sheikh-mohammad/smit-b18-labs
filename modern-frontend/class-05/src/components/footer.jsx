// import React from "react";

// const Footer = () => {
//   return (
//     <div>
//       <h1>Footer</h1>
//     </div>
//   );
// };

// export default Footer;

import React from "react";

const Footer = (props) => {
  return (
    <div>
      <h1>Footer</h1>
      {/* <h1>Company: {props.company = "Hello"}</h1> */}
      <h2>Company: {props.company}</h2>
    </div>
  );
};

export default Footer;
