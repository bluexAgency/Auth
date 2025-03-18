import UsuarioRol from "../../models/UserRoles.js";

const getAllUserRoles = async()=>{
    try {
        return await UsuarioRol.findAll({
            include:["User","Rol"],
        })
    } catch (error) {
        console.log(error)
    }
}

export default getAllUserRoles