import Permiso from "../../models/Permissions.js";

const deletePermission = async(id)=>{
    try {
        const permiso = await Permiso.findByPk(id);
        if(!permiso)throw new Error('permiso no encontrado')
        return await permiso.destroy()
    } catch (error) {
        
    }
}

export default deletePermission