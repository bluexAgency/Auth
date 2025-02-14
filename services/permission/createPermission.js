import Permiso from "../../models/Permissions.js";

const createPermission =async(permiData)=>{
    try {
        return await Permiso.create(permiData)
    } catch (error) {
        console.log(error);
    }
}

export default createPermission