import './index.scss';
import { useState, useEffect } from 'react';
import storage from 'local-storage';
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

export default function TelaLogin() {
    const [nome, setNome] = useState('')
    const [senha, setSenha] = useState('')
    const navigate = useNavigate()

    async function entrar() {
        const usuarioOBJ = {
            "nome": nome,
            "senha": senha
        }

        const url = `http://localhost:5010/logar/usuario`;
        let resp = await axios.post(url, usuarioOBJ);

        if (resp === 'null') {
            alert('errr');
        } else {
            localStorage.setItem('USUARIO', JSON.stringify(resp.data));
            navigate('/home')
        }
    }

    return(
        <div className="login">
            <div className="cartao">
                <h1>Faça login para continuar</h1>

                <div className="infos">
                    <div className="perguntas">
                        <h1>nome:</h1>
                        <input type="text" placeholder='EX: joaozinho' value={nome} onChange={e=> setNome(e.target.value)}/>
                    </div>
                    <div className="perguntas">
                        <h1>senha:</h1>
                        <input type="text" placeholder='EX: 12345678' value={senha} onChange={e=> setSenha(e.target.value)}/>
                    </div>
                </div>
                <button onClick={entrar}>Entrar</button>
            </div>
        </div>
    )
}