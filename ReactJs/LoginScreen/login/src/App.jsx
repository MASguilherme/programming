import React from "react";
import Login from "./components/Login";

var isLoggedIn = false;

function renderConditionally() {
  if (isLoggedIn === true) {
    return (
      <h1>Hello</h1>
    );
  } else {
    return (
      <Login />
    );
  }
}

function App() {
  return (
    <section className="section-login">
      {renderConditionally()}
    </section>
  );
}

export default App;
