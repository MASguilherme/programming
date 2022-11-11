import { useRef } from "react";
import { Link } from "react-router-dom";

export const Dashboard = () => {
  const counterRef = useRef({ counter: 0 });

  return (
    <div>
      <p>Dashboard!</p>
      <Link to="/entrar">Login</Link>

      <br />
      <p>contador: {counterRef.current.counter}</p>
      <button onClick={()=> counterRef.current.counter++}>Clicar</button>
      <button onClick={()=> console.log(counterRef.current.counter++)}>Console Log</button>
    </div>
  );
};
