import './index.scss';

export default function TelaLogin() {

    return(
        <div className="login">
            <div className="cartao">
                <h1>Faça login para continuar</h1>

                <div className="infos">
                    <div className="perguntas">
                        <h1>nome:</h1>
                        <input type="text" placeholder='EX: joaozinho' />
                    </div>
                    <div className="perguntas">
                        <h1>senha:</h1>
                        <input type="text" placeholder='EX: 12345678' />
                    </div>
                </div>
            </div>
        </div>
    )
}