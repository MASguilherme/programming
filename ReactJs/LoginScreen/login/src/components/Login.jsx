import React from "react";
import Input from "./Input";

function Login() {
  return (
    <div className="box-login">

      <form>
        <Input
          type="text"
          placeholder="UserName"
        />
        <Input
          type="password"
          placeholder="Password"
        />
        <Input
          type="submit"
          value="Login"
        />
      </form>
    </div>);
}

export default Login;
