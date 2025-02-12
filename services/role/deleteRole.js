import Rol from "../../models/Roles.js"


const deleteRole = async(id)=>{
    try {
        const deleteRole = await Rol.findByPk(id)
        if(!deleteRole)throw new Error('Usuario no encontrado')
        return await deleteRole.destroy()
    } catch (error) {
        console.log(error)
    }
}

export default deleteRole