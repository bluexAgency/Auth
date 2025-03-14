import getAllAuditoria from "../services/auditoria/getAllAuditoria.js";
import create from "../services/auditoria/createAuditoria.js";

class AuditoriaController{


async getAllAuditoria(req,res){
    try {
        const auditoria = await getAllAuditoria()
        res.json(auditoria)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}



async createAuditoria(req, res){
    try {
        const newAuditoria = await create(req.body)
        res.status(201).json(newAuditoria)
    } catch (error) {
        res.status(400).json({error:error.message}) 
    }
}



}

export default new AuditoriaController()