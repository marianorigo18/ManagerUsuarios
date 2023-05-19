import express from 'express'

import UsuariosManager from './clases/UsuariosManager.js'

const app = express();

const usuariosManager = new UsuariosManager()


app.get("/usuarios", async (req, res) => {
    const usuarios = await usuariosManager.consultarUsuarios(req.query.limit)
    res.send(usuarios)
})

app.get("/usuarios/:id", async(req, res) => {
    const usuario = await usuariosManager.consultarUsuariosPorId(req.params.id)
    res.send(usuario)
})

app.listen(8080, ()=>{
    console.log("escuchando")
})