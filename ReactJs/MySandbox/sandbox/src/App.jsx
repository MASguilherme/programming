import React, { useState } from "react";

function App() {
  const [userRegister, setUserRegi] = useState({
    fName: "",
    lName: "",
    email: "",
  });

  function updateRegister(event) {
    const { name, value } = event.target;

    setUserRegi((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  return (
    <section>
      <h1>First Name: {userRegister.fName}</h1>
      <h1>Last Name: {userRegister.lName}</h1>
      <h3>Email: {userRegister.email}</h3>
      <form>
        <input
          type="text"
          placeholder="First name"
          name="fName"
          value={userRegister.fName}
          onChange={updateRegister}
        />
        <input
          type="text"
          placeholder="Last name"
          name="lName"
          value={userRegister.lName}
          onChange={updateRegister}
        />
        <input
          type="email"
          placeholder="e-mail"
          name="email"
          value={userRegister.email}
          onChange={updateRegister}
        />
        <br />
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default App;
