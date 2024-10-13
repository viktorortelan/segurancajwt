import con from "./conn.js";

export async function inserirDiairo(diarioOBJ) {
    let comando = `
        insert into tb_diario(dt_dia, ds_conteudo, id_usuario)
            values(?,?,?);
    `;

    let registro = await con.query(comando, [diarioOBJ.dia, diarioOBJ.conteudo, diarioOBJ.usuario]);
    let fim = registro[0];
    return fim.insertId;
}

export async function mostrarDiario() {
    let comando = `
        SELECT u.nm_usuario, 
		d.ds_conteudo
        FROM tb_usuario u
        INNER JOIN tb_diario d ON u.id_usuario = d.id_usuario;
    `;

    let registro = await con.query(comando);
    let fim = registro[0];
    return fim[0];
}