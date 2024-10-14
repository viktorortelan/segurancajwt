import con from "./conn.js";

export async function inserirUsuario(usuarioOBJ) {
    let comando = `
        insert into tb_usuario(nm_usuario, ds_senha)
            values (?,?);
    `;

    let registro = await con.query(comando, [usuarioOBJ.nome, usuarioOBJ.senha]);
    let id = registro[0];
    return id.insertId;
}

export async function mostrarUsuarios() {
    let comando = `
        select * from tb_usuario;
    `;
    let registro = await con.query(comando);
    let fim = registro[0];
    return fim[0];
}

export async function fazerLogin(usuarioOBJ) {
    let comando = `
        select
            id_usuario   id,
            nm_usuario   nome
            from tb_usuario
            where nm_usuario = ? and ds_senha = ?
    `;
    let registro = await con.query(comando, [usuarioOBJ.nome, usuarioOBJ.senha]);
    return  registro[0];
}