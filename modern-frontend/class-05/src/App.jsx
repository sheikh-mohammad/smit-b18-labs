import React, { useState } from "react";

const App = () => {
  const [fullName, setFullName] = useState("Sheikh Mohammad");

  const [age, setAge] = useState(15);

  return (
    <div>
      <h1>App</h1>

      <Navabr fullName={fullName} age={age} />
      <Footer />
    </div>
  );
};

export default App;
