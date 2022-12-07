import {useContext} from 'react';

import { UsuarioLogadoContext } from "../contexts/UsuarioLogado";

export const useUsuarioLogado = () => {

    const context = useContext(UsuarioLogadoContext);
    return context;
};
