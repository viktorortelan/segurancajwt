import { inserirDiairo, mostrarDiario } from "../repository/diarioRepository.js";
import { Router } from "express";
import { readToken } from "../utils/jwt.js";
import { autenticar, createToken } from "../utils/jwt.js";
const endpoint = Router();

endpoint.post('/inserir/diario',   async (req, resp) => {
    let diarioOBJ = req.body;
    let registro = await inserirDiairo(diarioOBJ);
    resp.send({
        novoId: registro 
    })
})

endpoint.get('/mostrar/diario/:id', autenticar,async (req, resp) => {
    try {
        let id = req.user.id
    let registro = await mostrarDiario(id);
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
});

endpoint.get('/test/:token', (req, resp) => {
    const { token } = req.params;
    const x = readToken(token);
    resp.send(x);
});

export default endpoint;  