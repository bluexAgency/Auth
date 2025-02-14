import Permiso from "../../models/Permissions.js";

const getAllPermission = async()=>{
    try {
        return await Permiso.findAll()
    } catch (error) {
        console.log(error)
    }
}

export default getAllPermission