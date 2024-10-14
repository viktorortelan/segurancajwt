import { inserirUsuario, mostrarUsuarios, fazerLogin } from "../repository/usuariosRepository.js";
import { createToken } from "../utils/jwt.js";
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

endpoint.post('/logar/usuario', async (req, resp) => {
    try {
        let usuarioOBJ = req.body;
        let registro = await fazerLogin(usuarioOBJ);   
        console.log(registro[0]);
        if(registro[0] != undefined) {
            let token = createToken(registro[0]);
            resp.send({
                "token": token
            })
            
        }  else {
            resp.send({
                "token": "undefined"
            })
        }
    }
    
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

export default endpoint;