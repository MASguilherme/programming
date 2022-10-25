import React from "react";
import Input from "./Input";


function Login(props) {
  return (
    <div className="box-login">
      <h1>{props.isRegistered ? "Wellcome Back" : "Register Your User"}</h1>
      <form>
        <Input type="text" placeholder="UserName" />
        <Input type="password" placeholder="Password" />

        {props.isRegistered ? null : (
          <Input type="password" placeholder="Confirm Password" />
        )}

        <Input type="submit" value={props.isRegistered ? "Login" : "Register"} />
      </form>
    </div>
  );
}

export default Login;
