import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import rotas from './rotas.js';

const serv = express();
serv.use(cors());
serv.use(express.json());

rotas(serv);

serv.listen(process.env.PORT, () => console.log(`api subida na porta ${process.env.PORT}`));
