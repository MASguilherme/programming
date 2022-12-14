import {BrowserRouter, Routes as Switch, Route, Navigate} from 'react-router-dom';

import {Dashboard} from '../pages/dashboard/Dashboard';

export const Routes = () =>{
    return (
        <BrowserRouter>
        <Switch>
            <Route path="/painel" element={<Dashboard />}/>
            <Route path="*" element={<Navigate  to="/painel"/>}/>
        </Switch>
    </BrowserRouter>
    );
}