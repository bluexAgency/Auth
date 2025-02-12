import Rol from "../../models/Roles.js";

const createRole = async(userData)=>{
    try {
        return await Rol.create(userData)
    } catch (error) {
        console.log(error)
    }
}

export default createRole;