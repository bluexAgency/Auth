import Rol from "../../models/Roles.js";


const getAllRole= async()=>{
    try {
        return await Rol.findAll();
    } catch (error) {
        console.log(error)
    }
}

export default getAllRole;