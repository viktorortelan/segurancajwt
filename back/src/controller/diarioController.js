import { inserirDiairo, mostrarDiario } from "../repository/diarioRepository.js";
import { Router } from "express";
const endpoint = Router();

endpoint.post('/inserir/diario', async (req, resp) => {
    let diarioOBJ = req.body;
    let registro = await inserirDiairo(diarioOBJ);
    resp.send({
        novoId: registro
    })
})

endpoint.get('/mostrar/diario', async (req, resp) => {
    let registro = await mostrarDiario();
    resp.send(registro);
})  

export default endpoint;  