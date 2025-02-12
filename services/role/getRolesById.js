import Rol from "../../models/Roles.js";


const getAllRoleById = async(id)=>{
    try {
        return await Rol.findByPk(id);
    } catch (error) {
        console.log(error)
    }
}

export default getAllRoleById;