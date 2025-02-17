import getAllMenu from "../services/menu/getAllmenu.js";
import getMenuById from "../services/menu/getMenuById.js";
import createMenu from "../services/menu/createMenu.js";
import updateMenu from "../services/menu/updateMenu.js";
import deleteMenu from "../services/menu/deleteMenu.js";

class MenuController{
    async getAllMenu(req, res){
        try {
            const menu = await getAllMenu();
            return res.status(200).json(menu);
            } catch (error) {
                return res.status(500).json({message: error.message});
                }
            }
    
    async getMenuById(req, res){
        try {
            const menuById = await getMenuById(req.params.id);
            if(!menuById) return res.status(404).json({error:'usuario no encontrado'})
            return res.status(200).json(menuById);
            } catch (error) {
                res.status(400).json({error:error.message}) 
            }
            }

    async createMenu(req,res){
        try {
            const create = await createMenu(req.body)
            return res.status(201).json(create);
        } catch (error) {
            res.status(400).json({error:error.message}) 
        }
    }

    async updateMenu(req, res) {
        try {
            const updatedMenu = await updateMenu(req.params.id, req.body);
            if (!updatedMenu) return res.status(404).json({ error: 'Menu no encontrado' });
            return res.status(200).json(updatedMenu);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }

    }

    async deleteMenu(req,res){
        try {
            await deleteMenu(req.params.id)
            res.status(204).send()
        } catch (error) {
            res.status(400).json({error:error.message}) 
        }
    }


}


export default new MenuController();