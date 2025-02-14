import getAllPermission from "../services/permission/getAllPermission.js";
import getPermissionById from "../services/permission/getPermissionById.js";
import createPermission from "../services/permission/createPermission.js";
import updatePermission from "../services/permission/updatePermission.js";
import deletePermission from "../services/permission/deletePermission.js";

class PermissionController{

async getAllPermission(req,res){
    try {
        const permission = await getAllPermission();
        res.status(200).json(permission);
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

async getPermissionById (req,res){
    try {
        const permissionById = await getPermissionById(req.params.id)
        if(!permissionById) return res.status(404).json({error:'usuario no encontrado'})
        res.status(200).json(permissionById)
    } catch (error) {
        res.status(400).json({error:error.message}) 
    }
}

async createPermission(req,res){
    try {
        const create = await createPermission(req.body)
        res.status(201).json(create)

    } catch (error) {
        res.status(400).json({error:error.message}) 
    }
}


async updatePermission(req,res){
    try {
        const update = await updatePermission(req.params.id, req.body)
        res.status(200).json(update)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}


async deletePermission(req,res){
    try {
        await deletePermission(req.params.id)
        res.status(204).send()
    } catch (error) {
        res.status(400).json({error:error.message}) 
    }
}

}

export default new PermissionController