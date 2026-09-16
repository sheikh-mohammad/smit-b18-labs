import React, { useState } from "react";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Body from "./components/body";

const App = () => {
  const [fullName, setFullName] = useState("Sheikh Mohammad");

  const [age, setAge] = useState(15);

  const [company, setCompany] = useState("Aplinode");

  const [course, setCourse] = useState("Modern Web Application Development");

  // const company = "Aplinode";

  // let bool = false;
  // const changeCourse = () => {
  //   bool == false
  //     ? setCourse("Certified Agentic AI Architect")
  //     : setCourse("Modern Web Application Development");
  //   bool = true;
  // };

  const changeCourse = () => {
    setCourse("Certified Agentic AI Architect");
  };

  const getSize = (size) => {
    console.log(size);
  };

  getSize();

  return (
    <div>
      <h1>App</h1>

      <Navbar fullName={fullName} age={age} getSize={getSize} />

      <Body course={course} changeCourse={changeCourse} />

      {/* <Footer company={"Aplinode"} /> */}

      <Footer company={company} />
    </div>
  );
};

export default App;
