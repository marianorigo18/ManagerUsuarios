import fs from 'fs'

const path = "src/clases/files/usuarios.json"

export default class UsuariosManager{
    consultarUsuarios = async () => {
        if(fs.existsSync(path)){
            const data = await fs.promises.readFile(path, "utf-8")
            const users = JSON.parse(data)
            return users;
        }else{
            return [];
        }
    }
    crearUsuarios = async (info) => {
        const users = await this.consultarUsuarios()
        if(users.length == 0){
            info.id == 1
        }else{
            info.id = users[users.length-1].id + 1
        }
    }
}