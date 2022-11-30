import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
import { Dashboard } from "../pages";

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home" element={<Dashboard />} />
        <Route path="*" element={<Dashboard /> } />
      </Switch>
    </BrowserRouter>
  );
};
