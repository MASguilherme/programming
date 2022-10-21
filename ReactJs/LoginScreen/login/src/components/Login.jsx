import React from "react";

function Login() {
  return(<div className="box-login">
  <h1>Hello</h1>
  <form>
      <input type="text" placeholder="Username"/>
      <input type="password" placeholder="Password"/>
      <input type="submit" value="Login" />
  </form>
</div>);
}

export default Login;
