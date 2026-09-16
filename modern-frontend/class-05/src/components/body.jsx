import React from "react";

// const Body = (props) => {
//   const { course, changeCourse } = props;
//   return (
//     <div>
//       <h1>Body</h1>
//       <h1>Course: {course}</h1>
//       <button onClick={changeCourse}>Change Course</button>
//     </div>
//   );
// };

const Body = (props) => {
  const { course, changeCourse } = props;
  return (
    <div>
      <h1>Body</h1>
      <h2>Course: {course}</h2>
      <button onClick={changeCourse}>Change Course</button>
    </div>
  );
};

export default Body;
