import { useState, useMemo, useCallback } from "react";

import { InputLogin } from "./components/InputLogin";
import { ButtonLogin } from "./components/ButtonLogin";
import { type } from "os";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailLength = useMemo(() => {
    return email.length;
  }, [email]);

  const handleLogin = useCallback(() => {
    console.log("Dados enviados: E-mail: " + email + " Senha: " + password);
  }, [email, password]);

  return (
    <div>
      <p>Quantidade de caracteres do e-mail: {emailLength}</p>
      <form>
        <InputLogin label={"E-mail: "} value={email} setValue={setEmail} />

        <InputLogin
          label={"Senha: "}
          value={password}
          setValue={setPassword}
          type={"password"}
        />
        <ButtonLogin onLogin={handleLogin} type="button">Login</ButtonLogin>
      </form>

      <br />
    </div>
  );
};
