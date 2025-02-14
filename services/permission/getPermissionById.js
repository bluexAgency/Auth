import Permiso from "../../models/Permissions.js";

const getPermissionById = async(id)=>{
    try {
        return await Permiso.findByPk(id)

    } catch (error) {
        console.log(error)
    }
}

export default getPermissionById