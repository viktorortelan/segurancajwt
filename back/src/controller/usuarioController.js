import { inserirUsuario, mostrarUsuarios } from "../repository/usuariosRepository.js";
import {Router} from 'express';

const endpoint = Router();

endpoint.post('/inserir/usuario', async (req,  resp) => {
    let usuarioOBJ = req.body;

    let registro = await inserirUsuario(usuarioOBJ);
    resp.send({
        novoID: registro
    });
});

endpoint.get('/mostrar/usuario', async (req, resp) => {
    let registro = await mostrarUsuarios();
    resp.send(registro);
})

export default endpoint;