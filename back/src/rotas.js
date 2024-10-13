import usuarioController from './controller/usuarioController.js';
import diarioController from './controller/diarioController.js';

export default function rotas(serv) {
    serv.use(usuarioController);
    serv.use(diarioController);
}