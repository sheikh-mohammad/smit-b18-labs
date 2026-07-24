const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const age = document.getElementById("age");

const createStd = async () => {
  const userObj = {
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    age: age.value,
  };

  console.log(userObj);

  await fetch("http://localhost:5000/create-std", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userObj),
  })
    .then((response) => response.json())
    .then((success) => {
      console.log("User Created");
    })
    .catch((error) => {
      console.log("Error", error);
    });
};

const getAllUsers = (async () => {
  await fetch("http://localhost:5000/get-all-stds")
    .then((response) => response.json())
    .then((success) => {
      console.log("User Created", success);
    })
    .catch((error) => {
      console.log("Error", error);
    });
})();
