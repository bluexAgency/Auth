import Auditoria from "../../models/Auditoria.js";

const getAllAuditoria = async()=>{
    try {
        return await Auditoria.findAll();
    } catch (error) {
        console.log(error)
    }
}

export default getAllAuditoria