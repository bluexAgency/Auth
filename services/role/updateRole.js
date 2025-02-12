import Rol from "../../models/Roles.js";


const updateRoles = async(id, userData)=>{
    try {
        const roles = await Rol.findByPk(id)
        if(!roles)throw new Error('Usuario no encontrado')
        return await roles.update(userData)

    } catch (error) {
        console.log(error)
    }
}

export default updateRoles



