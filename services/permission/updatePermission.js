import Permiso from "../../models/Permissions.js";

const updatePermission = async(id,permiData)=>{
    try {
        const permission = await Permiso.findByPk(id)
        if(!permission)throw new Error('Usuario no encontrado')
        await permission.update(permiData)
    } catch (error) {
        console.log(error);
    }
}

export default updatePermission