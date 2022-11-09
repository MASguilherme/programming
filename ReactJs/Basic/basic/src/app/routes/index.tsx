import {BrowserRouter, Routes, Route } from "react-router-dom";

export const AppRoutes = () =>{

    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<h1>Olá mundo</h1>} />
        </Routes>
    </BrowserRouter>
    );
}