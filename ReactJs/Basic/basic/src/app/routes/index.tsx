
import {BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Dashboard } from "../pages";

export const AppRoutes = () =>{

    return (
        <BrowserRouter>
        <Routes>
            <Route path="/pagina-principal" element={<Dashboard />} />
            <Route path="/produtos" element={<h1>Olá mundo, barra page</h1>} />
            <Route path="*" element={<Navigate to="/pagina-principal"/>} />
        </Routes>
    </BrowserRouter>
    );
}
