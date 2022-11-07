import Button from "@mui/material/Button";
import { Routes, Route, Navigate } from "react-router-dom";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="pagina-inicial"
        element={
          <Button color={"primary"} variant={"contained"}>
            Enviar
          </Button>
        }
      />

      <Route path="*" element={<Navigate to="pagina-inicial" />} />
    </Routes>
  );
};
