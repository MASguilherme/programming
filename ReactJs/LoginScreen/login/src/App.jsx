import React from "react";
import Login from "./components/Login";

const userIsRegistered = false;

function renderConditionally() {
  return(
    <Login isRegistered={userIsRegistered}/>
  );
  
}

function App() {
  return <section className="section-login">{renderConditionally()}</section>;
}

export default App;
