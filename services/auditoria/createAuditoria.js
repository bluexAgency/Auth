import Auditoria from "../../models/Auditoria.js";


const create = async(userData)=>{
    try {
        return await Auditoria.create(userData)
    } catch (error) {
        console.log(error)
    }
}

export default create