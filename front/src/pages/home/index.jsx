import './index.scss';
import { useEffect, useState } from 'react'
import axios from 'axios'
import { json, Link, useNavigate } from 'react-router-dom';


export default function Home() {
    const [token, setToken] = useState(null);
    const [obj, setObj] = useState({});
    const [diario, setDiario] = useState([]);
    const [dia, setDia]= useState('')
    const [conteudo, setConteudo]= useState('')
    const [id, setId] = useState(null)

    async function pegadorId() {
        let token = await axios.get(`http://localhost:5010/test/${JSON.parse(localStorage.getItem('USUARIO')).token}`)
        setId(token.data.id)
    }
    useEffect(() => {
        pegadorId()
    }, [])

    const navigate = useNavigate()
    async function sair() {
        localStorage.removeItem('USUARIO')
        navigate('/')
    }


    

    // funcao que executa assim que a pagina carrega
    useEffect(() => {
        let token = (localStorage.getItem('USUARIO'));
        if (token == null) { 
            navigate('/')
        } else {
            get();
            getDiario();
        }

    }, [])

    async function get() {
        const x = await axios.get(`http://localhost:5010/test/${JSON.parse(localStorage.getItem('USUARIO')).token}`);
        setObj(x.data);
    }

    async function getDiario() {
        const x = await axios.get(`http://localhost:5010/mostrar/diario/${id}`);
        const value = x.data
        setDiario(value);
        console.log(value);
    }
    useEffect(() => {
        getDiario()
    }, [])


    async function eviar() {
         
        const diarioOBJ = {
            "dia":dia,
            "conteudo":conteudo,
            "usuario": id
        }

        const url = `http://localhost:5010/inserir/diario`;
        let process = await axios.post(url, diarioOBJ);
    }

    return(
        <div className="home">
            <div className="cabecalho">
                <div className="infos">
                    <h1><span>MY</span> diario</h1>
                </div>
               
                <button onClick={sair}>sair</button>
            </div>

           <div className="corpo">

           <div className="esquerda">
                <div className="info">
                    <h1>bem vindo, <span>{obj.nome}</span></h1>
                </div>

                <div className="addDiario">
                    <h1>adicione uma nota</h1>

                    <div className="infos">
                        <div className="perguntas">
                            <h1>dia</h1>
                            <input type="text" placeholder='coloque o dia' value={dia} onChange={e=>setDia(e.target.value)} />
                        </div>
                        <div className="perguntas">
                            <h1>conteudo</h1>
                            <input type="text" placeholder='o que aconteceu' value={conteudo} onChange={e=>setConteudo(e.target.value)}  />
                        </div>
                        <button onClick={eviar}>enviar</button>
                    </div>
                </div>
            </div>


            <div className="direita">
                { diario.map(item => 
                    <div className='oi'>
                        <p><span>nome:</span> {item.nm_usuario}</p> <p><span>motivo:</span> </p><p> {item.ds_conteudo}</p>
                    </div>
                ) }
            </div>
           </div>


        </div>
    )
}