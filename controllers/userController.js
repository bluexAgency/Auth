import getAllUser from "../services/user/getAllUser.js";
import getUserById from "../services/user/getuserbyId.js";
import create from "../services/user/createUser.js";
import update from "../services/user/updateUser.js";
import deleteuser from "../services/user/deleteUser.js";

class UserController{

    async getAllUser(req, res){
        try {
            const users = await getAllUser();
            res.json(users);
        } catch (error) {
            res.status(500).json({error:error.message})
        }
    }

    async getUserById(req, res){
        try {
            const user = await getUserById(req.params.id);
            if(!user) return res.status(404).json({error:'usuario no encontrado'})
                res.json(user)
        } catch (error) {
            res.status(400).json({error:error.message}) 
        }
    }



    async createUser(req, res){
        try {
            const newUser = await create(req.body)
            res.status(201).json(newUser)
        } catch (error) {
            res.status(400).json({error:error.message}) 
        }
    }

    async updateUser(req, res){
        try {
            console.log('sfsgddshgdg')
            const updateUser = await update(req.params.id, req.body);
            if(!updateUser) return res.status(404).json({error:'usuario no encontrado'})
            res.json(updateUser)
        } catch (error) {
            res.status(400).json({error:error.message})  
        }
    }


    async deleteuser(req, res){
        try {
            await deleteuser(req.params.id)
            res.status(204).send()
        } catch (error) {
            res.status(400).json({error:error.message}) 
        }
    }
}


export default new UserController();