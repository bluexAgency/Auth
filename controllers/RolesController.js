import getAllRole from "../services/role/getAllRole.js";
import getAllRoleById from "../services/role/getRolesById.js";
import createRole from "../services/role/createRole.js";
import updateRole from "../services/role/updateRole.js";
import deleteRole from "../services/role/deleteRole.js";

class RolesController{

    async getAllRole(req,res){
        try {
            const roles = await getAllRole();
            res.status(200).json(roles);
        } catch (error) {
            res.status(500).json({error:error.message})
        }
    }

    async getAllRoleById(req,res){
        try {
         const roles = await getAllRoleById(req.params.id)
         if(!roles) return res.status(404).json({error:'usuario no encontrado'})
            res.json(roles)
    } catch (error) {
        res.status(400).json({error:error.message}) 
    }
    }

    async createRole(req,res){
        try {
            const create = await createRole(req.body)
            res.status(201).json(create)
        } catch (error) {
            res.status(400).json({error:error.message}) 
        }
    }

    async updateRole(req,res){
        try {
            const update = await updateRole(req.params.id,req.body)
            if(!update) return res.status(404).json({error:'usuario no encontrado'})
            res.status(200).json(update)
        } catch (error) {
            res.status(400).json({error:error.message})
        }
    }

    async deleteRole(req, res){
        try {
            await deleteRole(req.params.id)
            res.status(204).send()
        } catch (error) {
            res.status(400).json({error:error.message}) 
        }
    }





}


export default new RolesController